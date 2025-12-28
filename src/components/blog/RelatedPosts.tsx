import Link from 'next/link';
import Image from 'next/image';
import { FaClock } from 'react-icons/fa';
import type { BlogPostMetadata } from '@/lib/blog';

interface RelatedPostsProps {
  posts: BlogPostMetadata[];
}

export default function RelatedPosts({ posts }: RelatedPostsProps) {
  if (posts.length === 0) return null;

  return (
    <section className="mt-16 pt-12 border-t border-gray-200">
      <h2 className="text-2xl font-bold text-gray-900 mb-8">Related Articles</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {posts.map((post) => {
          const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
          });

          return (
            <article
              key={post.slug}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <Link href={`/blog/${post.slug}`} className="block relative aspect-video overflow-hidden">
                <Image
                  src={post.featuredImage}
                  alt={post.featuredImageAlt || post.title}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </Link>
              <div className="p-4">
                <Link href={`/blog/${post.slug}`} className="group">
                  <h3 className="font-bold text-gray-900 mb-2 group-hover:text-green-700 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                </Link>
                <div className="flex items-center gap-4 text-xs text-gray-500">
                  <time dateTime={post.date}>{formattedDate}</time>
                  <div className="flex items-center gap-1">
                    <FaClock size={12} />
                    <span>{post.readingTimeMinutes} min read</span>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
