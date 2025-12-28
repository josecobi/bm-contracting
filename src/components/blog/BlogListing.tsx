'use client';

import { useState } from 'react';
import BlogCard from './BlogCard';
import type { BlogPostMetadata } from '@/lib/blog';

interface BlogListingProps {
  posts: BlogPostMetadata[];
  categories: string[];
}

export default function BlogListing({ posts: allPosts, categories }: BlogListingProps) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Filter posts by selected category
  const posts = selectedCategory
    ? allPosts.filter((post) => post.category === selectedCategory)
    : allPosts;

  return (
    <>
      {/* Categories Filter */}
      {categories.length > 0 && (
        <section className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex items-center gap-3 overflow-x-auto pb-2">
              <span className="text-sm font-medium text-gray-700 whitespace-nowrap">
                Categories:
              </span>
              <button
                onClick={() => setSelectedCategory(null)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors whitespace-nowrap ${
                  selectedCategory === null
                    ? 'bg-green-700 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                All Posts
              </button>
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors whitespace-nowrap ${
                    selectedCategory === category
                      ? 'bg-green-700 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Blog Posts Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Post count and filter indicator */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900">
            {selectedCategory ? (
              <>
                {selectedCategory}{' '}
                <span className="text-gray-600 font-normal">
                  ({posts.length} {posts.length === 1 ? 'post' : 'posts'})
                </span>
              </>
            ) : (
              <>
                All Posts{' '}
                <span className="text-gray-600 font-normal">
                  ({posts.length} {posts.length === 1 ? 'post' : 'posts'})
                </span>
              </>
            )}
          </h2>
        </div>

        {posts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600">
              No posts found in this category. Try selecting a different category.
            </p>
          </div>
        ) : (
          <>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
          </>
        )}
      </section>
    </>
  );
}
