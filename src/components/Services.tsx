'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export const serviceCategories = [
  {
    category: "Interior Remodeling",
    services: ["Living Room", "Bathroom", "Kitchen"],
    imageSrc: "/services/bathroom.jpg"
  },
  {
    category: "Carpentry & Woodwork",
    services: ["Carpentry", "Doors", "Decks", "Fences"],
    imageSrc: "/services/carpentry.jpg"
  },
  {
    category: "Flooring & Wall Finishes",
    services: ["Flooring", "Drywall", "Plaster", "Painting"],
    imageSrc: "/portfolio/before-after/basement-after.webp"
  },
  {
    category: "Roofing & Exterior Protection",
    services: ["Roofing", "Siding", "Gutters", "Downspouts", "Waterproofing"],
    imageSrc: "/portfolio/before-after/deck-after.webp"
  },
  {
    category: "Plumbing & Electrical",
    services: ["Plumbing", "Electrical", "Insulation"],
    imageSrc: "/portfolio/before-after/bathroom-after.webp"
  },
  {
    category: "Concrete & Outdoor Surfaces",
    services: ["Concrete", "Pressure wash", "Windows"],
    imageSrc: "/services/concrete-outdoor.webp"
  }
];


export default function Services() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our Remodeling <span className="bg-gradient-to-r from-green-700 to-green-500 bg-clip-text text-transparent">Services</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-700 to-green-500 mx-auto rounded-full mb-6" />
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Expertise in every corner of your home — from interior elegance to exterior durability.
          </p>
        </motion.div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {serviceCategories.map((svc, index) => (
            <motion.div
              key={svc.category}
              className="relative group rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border-2 border-transparent hover:border-green-200"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.3, margin: "0px 0px -100px 0px" }}
              whileHover={{ y: -8 }}
              style={{ willChange: 'transform, opacity' }}
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden bg-gray-100">
                <Image
                  src={svc.imageSrc}
                  alt={svc.category}
                  width={400}
                  height={250}
                  className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                  loading={index < 3 ? "eager" : "lazy"}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent group-hover:from-black/90 group-hover:via-black/60 transition-all duration-500" />

                {/* Premium Badge */}
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-lg">
                  <span className="text-xs font-bold text-green-700">{svc.services.length} Services</span>
                </div>
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-green-200 transition-colors">
                  {svc.category}
                </h3>

                {/* Services List */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {svc.services.map((service) => (
                    <span
                      key={service}
                      className="text-xs px-3 py-1 bg-white/20 backdrop-blur-sm text-white rounded-full border border-white/30 group-hover:bg-green-600/30 group-hover:border-green-400/50 transition-all duration-300"
                    >
                      {service}
                    </span>
                  ))}
                </div>

                {/* Learn More Link */}
                {/* <div className="flex items-center gap-2 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-sm font-semibold">Learn More</span>
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div> */}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
