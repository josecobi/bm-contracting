// Blog utilities for managing MDX blog posts
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import readingTime from 'reading-time';
import { marked } from 'marked';

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  excerpt: string;
  date: string;
  lastModified?: string;
  author: string;
  authorRole?: string;
  category: string;
  tags: string[];
  featuredImage: string;
  featuredImageAlt?: string;
  content: string;
  readingTime: string;
  readingTimeMinutes: number;
}

export interface BlogPostMetadata {
  slug: string;
  title: string;
  description: string;
  excerpt: string;
  date: string;
  lastModified?: string;
  author: string;
  authorRole?: string;
  category: string;
  tags: string[];
  featuredImage: string;
  featuredImageAlt?: string;
  readingTime: string;
  readingTimeMinutes: number;
}

const POSTS_DIRECTORY = path.join(process.cwd(), 'src/content/blog');

// Ensure the blog directory exists
function ensureBlogDirectory() {
  if (!fs.existsSync(POSTS_DIRECTORY)) {
    fs.mkdirSync(POSTS_DIRECTORY, { recursive: true });
  }
}

// Get all blog posts sorted by date (newest first)
export function getAllBlogPosts(): BlogPostMetadata[] {
  ensureBlogDirectory();

  if (!fs.existsSync(POSTS_DIRECTORY)) {
    return [];
  }

  const fileNames = fs.readdirSync(POSTS_DIRECTORY);
  const allPostsData = fileNames
    .filter((fileName) => fileName.endsWith('.mdx'))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, '');
      const fullPath = path.join(POSTS_DIRECTORY, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(fileContents);
      const { text, minutes } = readingTime(content);

      return {
        slug,
        title: data.title || '',
        description: data.description || '',
        excerpt: data.excerpt || '',
        date: data.date || '',
        lastModified: data.lastModified,
        author: data.author || 'BM Contracting LLC',
        authorRole: data.authorRole || 'Professional Contractor',
        category: data.category || 'General',
        tags: data.tags || [],
        featuredImage: data.featuredImage || '/blog/default.jpg',
        featuredImageAlt: data.featuredImageAlt || data.title || '',
        readingTime: text,
        readingTimeMinutes: Math.ceil(minutes),
      };
    });

  // Sort posts by date (newest first)
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

// Get a single blog post by slug
export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  ensureBlogDirectory();

  try {
    const fullPath = path.join(POSTS_DIRECTORY, `${slug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);
    const { text, minutes } = readingTime(content);

    // Convert markdown to HTML
    const htmlContent = await marked(content);

    return {
      slug,
      title: data.title || '',
      description: data.description || '',
      excerpt: data.excerpt || '',
      date: data.date || '',
      lastModified: data.lastModified,
      author: data.author || 'BM Contracting LLC',
      authorRole: data.authorRole || 'Professional Contractor',
      category: data.category || 'General',
      tags: data.tags || [],
      featuredImage: data.featuredImage || '/blog/default.jpg',
      featuredImageAlt: data.featuredImageAlt || data.title || '',
      content: htmlContent,
      readingTime: text,
      readingTimeMinutes: Math.ceil(minutes),
    };
  } catch (error) {
    console.error(`Error loading blog post: ${slug}`, error);
    return null;
  }
}

// Get all unique categories
export function getAllCategories(): string[] {
  const posts = getAllBlogPosts();
  const categories = new Set(posts.map((post) => post.category));
  return Array.from(categories);
}

// Get all unique tags
export function getAllTags(): string[] {
  const posts = getAllBlogPosts();
  const tags = new Set(posts.flatMap((post) => post.tags));
  return Array.from(tags);
}

// Get posts by category
export function getPostsByCategory(category: string): BlogPostMetadata[] {
  const posts = getAllBlogPosts();
  return posts.filter((post) => post.category === category);
}

// Get posts by tag
export function getPostsByTag(tag: string): BlogPostMetadata[] {
  const posts = getAllBlogPosts();
  return posts.filter((post) => post.tags.includes(tag));
}

// Get related posts based on tags and category
export async function getRelatedPosts(slug: string, limit = 3): Promise<BlogPostMetadata[]> {
  const currentPost = await getBlogPostBySlug(slug);
  if (!currentPost) return [];

  const allPosts = getAllBlogPosts();

  // Filter out current post and calculate relevance score
  const relatedPosts = allPosts
    .filter((post) => post.slug !== slug)
    .map((post) => {
      let score = 0;

      // Same category gets higher score
      if (post.category === currentPost.category) {
        score += 3;
      }

      // Shared tags increase score
      const sharedTags = post.tags.filter((tag) =>
        currentPost.tags.includes(tag)
      ).length;
      score += sharedTags;

      return { post, score };
    })
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((item) => item.post);

  return relatedPosts;
}

// Generate all post slugs (for static generation)
export function getAllPostSlugs(): string[] {
  ensureBlogDirectory();

  if (!fs.existsSync(POSTS_DIRECTORY)) {
    return [];
  }

  const fileNames = fs.readdirSync(POSTS_DIRECTORY);
  return fileNames
    .filter((fileName) => fileName.endsWith('.mdx'))
    .map((fileName) => fileName.replace(/\.mdx$/, ''));
}

// Extract headings from MDX content for table of contents
export function extractHeadings(content: string): Array<{ level: number; text: string; id: string }> {
  const headingRegex = /^(#{2,3})\s+(.+)$/gm;
  const headings: Array<{ level: number; text: string; id: string }> = [];
  let match;

  while ((match = headingRegex.exec(content)) !== null) {
    const level = match[1].length;
    const text = match[2].trim();
    const id = text
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');

    headings.push({ level, text, id });
  }

  return headings;
}
