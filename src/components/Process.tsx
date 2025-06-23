'use client'

import { FaPhoneAlt, FaPencilRuler, FaHammer, FaSmile } from 'react-icons/fa'

const steps = [
  {
    title: '1. Consultation',
    description:
      'We start with a personal consultation to understand your needs, style, and budget.',
    icon: <FaPhoneAlt className="text-3xl text-primary" />,
  },
  {
    title: '2. Design & Plan',
    description:
      'Our design team crafts a tailored plan and timeline for your project.',
    icon: <FaPencilRuler className="text-3xl text-primary" />,
  },
  {
    title: '3. Build & Renovate',
    description:
      'Our skilled craftsmen bring the design to life with quality and precision.',
    icon: <FaHammer className="text-3xl text-primary" />,
  },
  {
    title: '4. Enjoy Your Space',
    description:
      'We walk through the final result with you — satisfaction guaranteed.',
    icon: <FaSmile className="text-3xl text-primary" />,
  },
]

export default function Process() {
  return (
    <section className="bg-white py-16" id="process">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            How It Works
          </h2>
          <p className="mt-2 text-gray-600 text-lg">
            Our process is designed to be smooth, transparent, and stress-free.
          </p>
        </div>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center px-4"
            >
              <div className="mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {step.title}
              </h3>
              <p className="text-gray-600 text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
