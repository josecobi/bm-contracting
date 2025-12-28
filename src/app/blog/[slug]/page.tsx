import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { FaCalendar, FaClock, FaUser, FaArrowLeft } from 'react-icons/fa';
import { getAllPostSlugs, getBlogPostBySlug, getRelatedPosts, extractHeadings } from '@/lib/blog';
import { BlogPostingSchema, BreadcrumbSchema } from '@/components/StructuredData';
import { generateMetadata as generateSEOMetadata, SITE_CONFIG } from '@/lib/seo';
import CategoryBadge from '@/components/blog/CategoryBadge';
import ShareButtons from '@/components/blog/ShareButtons';
import TableOfContents from '@/components/blog/TableOfContents';
import RelatedPosts from '@/components/blog/RelatedPosts';
import BlogPostContent from '@/components/blog/BlogPostContent';

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

// Generate static params for all blog posts
export async function generateStaticParams() {
  const slugs = getAllPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

// Generate metadata for each blog post
export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return generateSEOMetadata({
    title: post.title,
    description: post.description,
    keywords: post.tags,
    canonical: `/blog/${slug}/`,
    ogImage: post.featuredImage,
    ogImageAlt: post.featuredImageAlt,
  });
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = await getRelatedPosts(slug);
  const headings = extractHeadings(post.content);
  const postUrl = `${SITE_CONFIG.url}/blog/${slug}/`;

  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <>
      {/* Structured Data */}
      <BlogPostingSchema
        title={post.title}
        description={post.description}
        slug={slug}
        date={post.date}
        lastModified={post.lastModified}
        author={post.author}
        featuredImage={post.featuredImage}
        tags={post.tags}
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: '/' },
          { name: 'Blog', url: '/blog/' },
          { name: post.title, url: `/blog/${slug}/` },
        ]}
      />

      <article className="min-h-screen bg-white">
        {/* Back to Blog Link */}
        <div className="bg-gray-50 border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <Link
              href="/blog/"
              className="inline-flex items-center gap-2 text-green-700 hover:text-green-800 font-medium transition-colors"
            >
              <FaArrowLeft size={14} />
              Back to Blog
            </Link>
          </div>
        </div>

        {/* Article Header */}
        <header className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-8">
          <CategoryBadge category={post.category} />
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6 leading-tight">
            {post.title}
          </h1>
          <p className="text-xl text-gray-600 mb-8">{post.description}</p>

          {/* Meta Information */}
          <div className="flex flex-wrap items-center gap-6 text-gray-600 border-y border-gray-200 py-4">
            <div className="flex items-center gap-2">
              <FaUser className="text-gray-400" size={16} />
              <span className="font-medium">{post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <FaCalendar className="text-gray-400" size={16} />
              <time dateTime={post.date}>{formattedDate}</time>
            </div>
            <div className="flex items-center gap-2">
              <FaClock className="text-gray-400" size={16} />
              <span>{post.readingTime}</span>
            </div>
          </div>
        </header>

        {/* Featured Image */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <div className="relative aspect-video rounded-xl overflow-hidden">
            <Image
              src={post.featuredImage}
              alt={post.featuredImageAlt || post.title}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1280px) 100vw, 1280px"
            />
          </div>
        </div>

        {/* Article Content with TOC */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Main Content */}
            <div className="flex-1 min-w-0">
              <BlogPostContent content={post.content} />

              {/* Tags */}
              {post.tags.length > 0 && (
                <div className="mt-12 pt-8 border-t border-gray-200">
                  <h3 className="text-sm font-semibold text-gray-900 mb-3">Tags:</h3>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <Link
                        key={tag}
                        href={`/blog?tag=${encodeURIComponent(tag)}`}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200 transition-colors"
                      >
                        #{tag}
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Share Buttons */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <ShareButtons url={postUrl} title={post.title} description={post.description} />
              </div>

              {/* CTA Section */}
              <div className="mt-12 bg-gradient-to-r from-green-700 to-green-600 rounded-xl p-8 text-white text-center">
                <h2 className="text-2xl font-bold mb-3">Ready to Transform Your Home?</h2>
                <p className="text-green-50 mb-6 max-w-2xl mx-auto">
                  Get a free consultation from Maryland&apos;s trusted home remodeling experts. We&apos;re here
                  to help you every step of the way.
                </p>
                <Link
                  href="/contact/"
                  className="inline-block bg-white text-green-700 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors"
                >
                  Schedule Free Consultation
                </Link>
              </div>

              {/* Related Posts */}
              <RelatedPosts posts={relatedPosts} />
            </div>

            {/* Table of Contents (Desktop) */}
            {headings.length > 0 && (
              <aside className="hidden lg:block w-64 flex-shrink-0">
                <TableOfContents headings={headings} />
              </aside>
            )}
          </div>
        </div>
      </article>
    </>
  );
}
