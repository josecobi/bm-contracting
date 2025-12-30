import type { Metadata } from "next";
import BeforeAfterShowcase from '@/app/portfolio/components/BeforeAfter'
import CTASection from '@/components/CTASection'
import { BreadcrumbSchema } from '@/components/StructuredData'
import { generateMetadata } from '@/lib/seo'

export const metadata: Metadata = generateMetadata({
  title: 'Before & After Portfolio - See Our Transformations',
  description: 'View stunning before and after photos of BM Contracting\'s home remodeling projects in Maryland. See the dramatic transformations of kitchens, bathrooms, basements, and more. Real projects, real results.',
  keywords: [
    'before after remodeling Maryland',
    'kitchen transformation photos',
    'bathroom renovation before after',
    'home makeover Maryland',
    'remodeling results Maryland',
  ],
  canonical: '/portfolio/',
  ogImage: '/portfolio/before-after/kitchen-before.webp',
  ogImageAlt: 'BM Contracting Before & After Portfolio',
})

export default function PortfolioPage() {
  return (
    <main>
      {/* Breadcrumb Schema */}
      <BreadcrumbSchema items={[
        { name: 'Home', url: '/' },
        { name: 'Portfolio', url: '/portfolio/' }
      ]} />

      {/* Other sections */}
      <BeforeAfterShowcase />
      {/* CTA or footer */}
     <CTASection
        title="Ready to Transform Your Space?"
        description="Let's bring your vision to life. Get in touch with us for a free consultation."
        buttonText="Contact Us"
        buttonHref="/contact"
      />

    </main>
  )
}
