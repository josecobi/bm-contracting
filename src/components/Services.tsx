'use client'

import Image from 'next/image'

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
    imageSrc: "/portfolio/before-after/concrete-outdoor.jpg"
  }
];


export default function Services() {
  return (
    <section className="py-16 bg-gray-50" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Our Remodeling Services
          </h2>
          <p className="mt-2 text-gray-600 text-lg">
            Expertise in every corner of your home.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {serviceCategories.map((svc) => (
            <div key={svc.category} className="relative group rounded-2xl overflow-hidden shadow-lg">
              <Image
                src={svc.imageSrc}
                alt={svc.category}
                width={400}
                height={250}
                className="object-cover w-full h-56 transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/40 transition-colors" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-xl font-semibold">{svc.category}</h3>
                <p className="mt-2 text-sm">{svc.services.join(', ')}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
