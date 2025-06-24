'use client'

import CTAButton from '@/components/CTAButton'

export default function About() {
  return (
    <main className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-green-700 text-white py-20 md:py-40">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold">About BM Contracting</h1>
          <p className="mt-4 text-lg md:text-xl">
            We&apos;re dedicated to transforming homes and elevating living spaces.
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-semibold">Our Story</h2>
          <p className="mt-6 text-lg md:text-xl">
            BM Contracting has been serving the local community for over 20 years. We specialize in home remodeling,
            renovation, and construction services that transform spaces into personalized works of art.
          </p>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-gray-100 py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-semibold">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-12">
            <div>
              <h3 className="text-xl font-semibold">Quality</h3>
              <p className="mt-4 text-lg">
                We never compromise on the quality of materials or craftsmanship.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Integrity</h3>
              <p className="mt-4 text-lg">
                We believe in honesty, transparency, and delivering on our promises.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Customer Satisfaction</h3>
              <p className="mt-4 text-lg">
                Our job isn&apos;t done until our clients are 100% satisfied with their completed projects.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-green-700 text-white py-20">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-semibold">Ready to Transform Your Space?</h2>
          <p className="mt-4 text-lg md:text-xl">
            Contact us today and let&apos;s start your remodeling project!
          </p>
          <div className="mt-6">
            <CTAButton />
          </div>
        </div>
      </section>
    </main>
  )
}
