'use client'

import Image from 'next/image'

export const services = [
  {
    title: 'Kitchen Remodeling',
    img: '/services/kitchen.jpg', // placeholder file to be saved in public/images/
    description: 'Modern, functional kitchens tailored to your style and needs.',
  },
  {
    title: 'Bathroom Renovation',
    img: '/services/bathroom.jpg',
    description: 'Luxury and comfort meet in your refreshed bathroom space.',
  },
  {
    title: 'Carpentry & Cabinetry',
    img: '/services/carpentry.jpg',
    description: 'Beautiful patios, decks, and more to enhance your outdoor life.',
  },
]

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
          {services.map((svc) => (
            <div key={svc.title} className="relative group rounded-2xl overflow-hidden shadow-lg">
              <Image
                src={svc.img}
                alt={svc.title}
                width={400}
                height={250}
                className="object-cover w-full h-56 transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/40 transition-colors" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-xl font-semibold">{svc.title}</h3>
                <p className="mt-2 text-sm">{svc.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
