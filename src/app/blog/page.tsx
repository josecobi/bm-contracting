import type { Metadata } from 'next';
import { getAllBlogPosts, getAllCategories } from '@/lib/blog';
import BlogCard from '@/components/blog/BlogCard';
import { BlogSchema, BreadcrumbSchema } from '@/components/StructuredData';
import { generateMetadata } from '@/lib/seo';
import Link from 'next/link';

export const metadata: Metadata = generateMetadata({
  title: 'Home Remodeling Blog - Expert Tips & Guides',
  description: 'Get expert home remodeling tips, contractor advice, and renovation guides from BM Contracting LLC. Learn about kitchen remodeling, bathroom renovation, basement finishing, and more in Maryland.',
  keywords: [
    'home remodeling blog',
    'contractor tips Maryland',
    'kitchen renovation guide',
    'bathroom remodel tips',
    'basement finishing advice',
    'home improvement blog Maryland',
    'renovation tips',
  ],
  canonical: '/blog/',
  ogImage: '/blog/blog-hero.jpg',
});

export default function BlogPage() {
  const posts = getAllBlogPosts();
  const categories = getAllCategories();

  return (
    <>
      {/* Structured Data */}
      <BlogSchema />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: '/' },
          { name: 'Blog', url: '/blog/' },
        ]}
      />

      <main className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-green-700 via-green-600 to-green-800 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Home Remodeling Insights & Tips
              </h1>
              <p className="text-xl text-green-50">
                Expert advice, renovation guides, and industry insights from Maryland&apos;s trusted
                home remodeling contractor with 15+ years of experience.
              </p>
            </div>
          </div>
        </section>

        {/* Categories Filter */}
        {categories.length > 0 && (
          <section className="bg-white border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
              <div className="flex items-center gap-3 overflow-x-auto pb-2">
                <span className="text-sm font-medium text-gray-700 whitespace-nowrap">
                  Categories:
                </span>
                <Link
                  href="/blog"
                  className="px-4 py-2 rounded-full text-sm font-medium bg-green-700 text-white hover:bg-green-800 transition-colors whitespace-nowrap"
                >
                  All Posts
                </Link>
                {categories.map((category) => (
                  <Link
                    key={category}
                    href={`/blog?category=${encodeURIComponent(category)}`}
                    className="px-4 py-2 rounded-full text-sm font-medium bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors whitespace-nowrap"
                  >
                    {category}
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Blog Posts Grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {posts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600">No blog posts available yet. Check back soon!</p>
            </div>
          ) : (
            <>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.map((post) => (
                  <BlogCard key={post.slug} post={post} />
                ))}
              </div>

              {/* CTA Section */}
              <div className="mt-16 bg-gradient-to-r from-green-700 to-green-600 rounded-2xl p-8 md:p-12 text-center text-white">
                <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
                <p className="text-xl text-green-50 mb-8 max-w-2xl mx-auto">
                  Get expert advice and a free consultation for your home remodeling project in
                  Maryland. We&apos;re here to help bring your vision to life.
                </p>
                <Link
                  href="/contact"
                  className="inline-block bg-white text-green-700 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors"
                >
                  Get Free Consultation
                </Link>
              </div>
            </>
          )}
        </section>
      </main>
    </>
  );
}
