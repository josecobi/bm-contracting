'use client'

import Image from 'next/image'
import Link from 'next/link'

const projects = [
  {
    title: 'Modern Kitchen Renovation',
    image: '/portfolio/preview/kitchen.jpg',
  },
  {
    title: 'Luxury Bathroom Remodel',
    image: '/portfolio/preview/bathroom.jpg',
  },
  {
    title: 'Open-Concept Living',
    image: '/portfolio/preview/livingroom.jpg',
  },
  {
    title: 'Outdoor Patio & Deck',
    image: '/portfolio/preview/deck.jpg',
  },
  {
    title: 'Basement Entertainment Area',
    image: '/portfolio/preview/basement.jpg',
  },
  {
    title: 'Whole-Home Transformation',
    image: '/portfolio/preview/wholehome.jpg',
  },
]

export default function PortfolioPreview() {
  return (
    <section className="py-16 bg-white" id="portfolio">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Recent Projects
          </h2>
          <p className="mt-2 text-gray-600 text-lg">
            See how we&apos;ve transformed our clients&apos; spaces.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="group relative overflow-hidden rounded-xl shadow">
              <Image
                src={project.image}
                alt={project.title}
                width={400}
                height={300}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute bottom-0 inset-x-0 bg-black/50 px-4 py-3 text-white text-sm font-semibold">
                {project.title}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/portfolio"
            className="inline-block bg-gray-900 text-white font-semibold px-6 py-3 rounded-full hover:bg-gray-700 transition"
          >
            View Full Portfolio
          </Link>
        </div>
      </div>
    </section>
  )
}
