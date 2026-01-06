'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Lightbox } from "@/components/Lightbox";


const projects = [
  {
    title: 'Modern Kitchen Renovation',
    image: '/portfolio/preview/kitchen.webp',
  },
  {
    title: 'Luxury Bathroom Remodel',
    image: '/portfolio/preview/bathroom.webp',
  },
  {
    title: 'Open-Concept Living',
    image: '/portfolio/preview/livingroom.webp',
  },
  {
    title: 'Outdoor Patio & Deck',
    image: '/portfolio/preview/deck.webp',
  },
  {
    title: 'Basement Entertainment Area',
    image: '/portfolio/preview/basement.webp',
  },
  {
    title: 'Stairscase Makeover',
    image: '/portfolio/preview/stairs.webp',
  },
  // {
  //   title: 'Whole-Home Transformation',
  //   image: '/portfolio/preview/wholehome.webp',
  // },
]

export default function PortfolioPreview() {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(0)

  const handleImageClick = (index: number) => {
    setSelectedIndex(index)
    setLightboxOpen(true)
  }

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50" id="portfolio">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Featured <span className="bg-gradient-to-r from-green-700 to-green-500 bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-700 to-green-500 mx-auto rounded-full mb-6" />
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            See how we&apos;ve transformed our clients&apos; spaces into stunning, functional living areas.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl cursor-pointer border-2 border-transparent hover:border-green-200 transition-all duration-500"
              onClick={() => handleImageClick(index)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  handleImageClick(index)
                }
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.08, ease: "easeOut" }}
              whileHover={{ y: -8 }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Image Container */}
              <div className="relative h-72 overflow-hidden bg-gray-100">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={300}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading={index < 3 ? "eager" : "lazy"}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent group-hover:from-black/90 group-hover:via-black/50 transition-all duration-500" />

                {/* Zoom Icon */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-100 scale-90">
                  <div className="bg-white/95 backdrop-blur-sm rounded-full p-2.5 shadow-xl">
                    <svg className="w-5 h-5 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Title Bar */}
              <div className="absolute bottom-0 inset-x-0 p-6">
                <h3 className="text-xl font-bold text-white group-hover:text-green-200 transition-colors mb-2">
                  {project.title}
                </h3>

                {/* View Project Link */}
                <div className="flex items-center gap-2 text-white/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-sm font-semibold">View Project</span>
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Link
            href="/portfolio-gallery"
            className="group inline-flex items-center gap-3 bg-gradient-to-r from-green-700 to-green-600 text-white font-bold px-10 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            <span>View Full Portfolio</span>
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </motion.div>
      </div>

      <Lightbox
        isOpen={lightboxOpen}
        images={projects.map(p => ({
          src: p.image,
          alt: p.title,
          caption: p.title,
          width: 1200,
          height: 900
        }))}
        currentIndex={selectedIndex}
        onClose={() => setLightboxOpen(false)}
      />
    </section>
  )
}
