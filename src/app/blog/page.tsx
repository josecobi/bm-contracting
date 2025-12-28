import { getAllBlogPosts, getAllCategories } from '@/lib/blog';
import BlogListing from '@/components/blog/BlogListing';
import { BlogSchema, BreadcrumbSchema } from '@/components/StructuredData';
import Link from 'next/link';

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
                home remodeling contractor with 20+ years of experience.
              </p>
            </div>
          </div>
        </section>

        {/* Blog Listing with Filtering */}
        <BlogListing posts={posts} categories={categories} />

        {/* CTA Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
          <div className="bg-gradient-to-r from-green-700 to-green-600 rounded-2xl p-8 md:p-12 text-center text-white">
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
        </section>
      </main>
    </>
  );
}
