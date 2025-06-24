'use client'

import { ShieldCheck, Star, Wrench, BadgeCheck, Users, DollarSign } from 'lucide-react'

const features = [
  {
    title: 'Licensed & Insured',
    description: 'We meet all regulations and carry full insurance for peace of mind.',
    icon: <ShieldCheck size={32} className="text-green-800" />,
  },
  {
    title: '20+ Years Experience',
    description: 'Proven expertise in residential remodeling and renovation projects.',
    icon: <Star size={32} className="text-green-800" />,
  },
  {
    title: 'Satisfaction Guarantee',
    description: 'We stand behind our work — your happiness is our priority.',
    icon: <BadgeCheck size={32} className="text-green-800" />,
  },
  {
    title: 'Craftsmanship',
    description: 'Every detail matters. We deliver high-quality, lasting results.',
    icon: <Wrench size={32} className="text-green-800" />,
  },
  {
    title: 'Trusted Locally',
    description: 'A reputation built on referrals and repeat clients in our community.',
    icon: <Users size={32} className="text-green-800" />,
  },
  {
    title: 'Transparent Pricing',
    description: 'No hidden costs. Clear estimates and fair pricing from the start.',
    icon: <DollarSign size={32} className="text-green-800" />,
  },
]

export default function WhyChooseUs() {
  return (
    <section className="py-16 bg-white" id="why-choose-us">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Why Choose Us
          </h2>
          <p className="mt-2 text-gray-600 text-lg">
            We are not just builders — we are your remodeling partner.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-gray-50 p-6 rounded-2xl shadow-sm hover:shadow-md transition"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800">
                {feature.title}
              </h3>
              <p className="mt-2 text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
