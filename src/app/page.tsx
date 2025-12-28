import type { Metadata } from "next";
import CTASection from "@/components/CTASection";
import Hero from "@/components/Hero";
import PortfolioPreview from "@/components/PortfolioPreview";
import Process from "@/components/Process";
import Services from '@/components/Services'
// import Testimonials from "@/components/Testimonials";
import WhyChooseUs from "@/components/WhyChooseUs";
import { ServiceSchema, BreadcrumbSchema } from "@/components/StructuredData";
import { generateMetadata } from "@/lib/seo";

export const metadata: Metadata = generateMetadata({
  title: 'BM Contracting LLC - Expert Home Remodeling in Maryland',
  description: 'Transform your home with BM Contracting LLC. Expert kitchen renovation, bathroom remodeling, flooring, deck construction, and basement finishing in Maryland. 20+ years experience. Free consultation!',
  keywords: [
    'home remodeling Maryland',
    'kitchen renovation Maryland',
    'bathroom remodel Maryland',
    'basement finishing Maryland',
    'deck construction Maryland',
    'flooring installation Maryland',
    'general contractor Maryland',
  ],
  canonical: '/',
});

export default function Home() {
  return (
    <>
      {/* Structured Data for Services */}
      <ServiceSchema service="Kitchen Renovation" />
      <ServiceSchema service="Bathroom Remodeling" />
      <ServiceSchema service="Basement Finishing" />
      <ServiceSchema service="Flooring Installation" />
      <ServiceSchema service="Deck and Patio Construction" />

      {/* Breadcrumb Schema */}
      <BreadcrumbSchema items={[
        { name: 'Home', url: '/' }
      ]} />

      <Hero />
      <Services />
      <WhyChooseUs />
      <PortfolioPreview />
      {/* <Testimonials />  */}
      <Process />
       <CTASection
        title="Get Started with Your Dream Renovation"
        description="From kitchens to basements, BM Contracting is ready to help you create something amazing."
        buttonText="Request a Quote"
        buttonHref="/contact"
      />

    </>
  );
}
