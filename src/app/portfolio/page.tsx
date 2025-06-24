import BeforeAfterShowcase from '@/app/portfolio/components/BeforeAfter'
import CTASection from '@/components/CTASection'

export default function PortfolioPage() {
  return (
    <main>
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
