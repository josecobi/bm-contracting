import type { Metadata } from "next";
import { portfolioCategories } from './data'
import GallerySection from './GallerySection'
import CategoryNav from './CategoryNav'
import { BreadcrumbSchema, ImageGallerySchema } from '@/components/StructuredData'
import { generateMetadata } from '@/lib/seo'

export const metadata: Metadata = generateMetadata({
  title: 'Portfolio Gallery - View Our Remodeling Projects',
  description: 'Explore BM Contracting LLC\'s portfolio of stunning home renovation projects in Maryland. Browse our work in kitchen remodels, bathroom renovations, basement finishing, and more. 50+ completed projects.',
  keywords: [
    'remodeling portfolio Maryland',
    'kitchen renovation gallery',
    'bathroom remodel photos',
    'home renovation examples',
    'contractor portfolio Maryland',
    'before after remodeling',
  ],
  canonical: '/portfolio-gallery/',
  ogImage: '/portfolio/portfolio-gallery/jpg/kitchen-003.jpg',
  ogImageAlt: 'BM Contracting Portfolio Gallery - Home Remodeling Projects',
})

export default function PortfolioGalleryPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Breadcrumb Schema */}
      <BreadcrumbSchema items={[
        { name: 'Home', url: '/' },
        { name: 'Portfolio Gallery', url: '/portfolio-gallery/' }
      ]} />

      {/* Image Gallery Schema */}
      <ImageGallerySchema
        name="BM Contracting Home Remodeling Portfolio"
        description="Browse our collection of professional home renovation projects including kitchens, bathrooms, basements, and more"
        images={portfolioCategories.flatMap(cat =>
          cat.images.slice(0, 10).map(img => ({
            url: img.src,
            caption: `${cat.title} - ${img.alt}`
          }))
        )}
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-900 via-green-800 to-green-700 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-green-900/50 via-transparent to-transparent" />

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-medium mb-6">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span>Premium Craftsmanship</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Our <span className="bg-gradient-to-r from-yellow-200 to-yellow-400 bg-clip-text text-transparent">Portfolio</span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl lg:text-2xl text-green-50/90 max-w-3xl mx-auto mb-8 leading-relaxed">
              Explore our collection of stunning renovation projects. From modern kitchens to elegant bathrooms, each project reflects our commitment to excellence.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-8 md:gap-12 mt-12">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-1">50+</div>
                <div className="text-sm md:text-base text-green-100/80">Projects Completed</div>
              </div>
              <div className="w-px h-12 bg-white/20 hidden sm:block" />
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-1">20+</div>
                <div className="text-sm md:text-base text-green-100/80">Years Experience</div>
              </div>
              <div className="w-px h-12 bg-white/20 hidden sm:block" />
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-1">100%</div>
                <div className="text-sm md:text-base text-green-100/80">Satisfaction</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg className="w-full h-12 md:h-16 text-gray-50" viewBox="0 0 1440 54" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path d="M0 22L60 18.8C120 15.7 240 9.3 360 7.8C480 6.3 600 9.7 720 14.2C840 18.7 960 24.3 1080 22C1200 19.7 1320 9.3 1380 4.2L1440 -1V54H1380C1320 54 1200 54 1080 54C960 54 840 54 720 54C600 54 480 54 360 54C240 54 120 54 60 54H0V22Z" fill="currentColor"/>
          </svg>
        </div>
      </section>

      {/* Category Navigation */}
      <CategoryNav categories={portfolioCategories} />

      {/* Gallery Sections */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-[1400px] mx-auto">
          {portfolioCategories.map((category, index) => (
            <div key={category.id}>
              <GallerySection category={category} />

              {/* Divider between categories (except last one) */}
              {index < portfolioCategories.length - 1 && (
                <div className="my-20 flex items-center justify-center">
                  <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent w-full max-w-md" />
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
