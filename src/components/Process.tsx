'use client'

import { FaPhoneAlt, FaPencilRuler, FaHammer, FaSmile } from 'react-icons/fa'
import { motion } from 'framer-motion'

const steps = [
  {
    number: '01',
    title: 'Consultation',
    description:
      'We start with a personal consultation to understand your needs, style, and budget.',
    icon: FaPhoneAlt,
  },
  {
    number: '02',
    title: 'Design & Plan',
    description:
      'Our design team crafts a tailored plan and timeline for your project.',
    icon: FaPencilRuler,
  },
  {
    number: '03',
    title: 'Build & Renovate',
    description:
      'Our skilled craftsmen bring the design to life with quality and precision.',
    icon: FaHammer,
  },
  {
    number: '04',
    title: 'Enjoy Your Space',
    description:
      'We walk through the final result with you — satisfaction guaranteed.',
    icon: FaSmile,
  },
]

export default function Process() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden" id="process">
      {/* Decorative Background Elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-green-100/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-72 h-72 bg-yellow-100/20 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            How It <span className="bg-gradient-to-r from-green-700 to-green-500 bg-clip-text text-transparent">Works</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-700 to-green-500 mx-auto rounded-full mb-6" />
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Our streamlined process is designed to be smooth, transparent, and completely stress-free.
          </p>
        </motion.div>

        {/* Desktop: Steps with Connecting Lines */}
        <div className="hidden lg:block relative">
          {/* Connecting Line */}
          <div className="absolute top-20 left-0 right-0 h-0.5 bg-gradient-to-r from-green-700 via-green-500 to-green-700">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent animate-pulse" />
          </div>

          <div className="grid grid-cols-4 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <motion.div
                  key={index}
                  className="relative"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1, ease: "easeOut" }}
                >
                  {/* Step Card */}
                  <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl p-8 relative border-2 border-transparent hover:border-green-200 transition-all duration-500">
                    {/* Number Badge */}
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="w-16 h-16 bg-gradient-to-br from-green-700 to-green-600 rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300 border-4 border-white">
                        <span className="text-2xl font-bold text-white">{step.number}</span>
                      </div>
                    </div>

                    {/* Icon */}
                    <div className="mt-8 mb-6 flex justify-center">
                      <div className="w-20 h-20 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Icon className="text-4xl text-green-700" />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-gray-900 mb-3 text-center group-hover:text-green-700 transition-colors">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 text-center leading-relaxed">
                      {step.description}
                    </p>

                    {/* Bottom Gradient Line */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-green-700 to-green-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-b-2xl" />
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Mobile/Tablet: Vertical Layout */}
        <div className="lg:hidden space-y-8">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <motion.div
                key={index}
                className="relative"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.08, ease: "easeOut" }}
              >
                {/* Connecting Line for Mobile */}
                {index < steps.length - 1 && (
                  <div className="absolute top-20 left-8 w-0.5 h-full bg-gradient-to-b from-green-700 to-green-500 z-0" />
                )}

                <div className="flex gap-6 relative z-10">
                  {/* Number Badge */}
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-700 to-green-600 rounded-2xl flex items-center justify-center shadow-xl border-4 border-white">
                      <span className="text-2xl font-bold text-white">{step.number}</span>
                    </div>
                  </div>

                  {/* Content Card */}
                  <div className="flex-1 bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
                    {/* Icon */}
                    <div className="mb-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl inline-flex items-center justify-center">
                        <Icon className="text-3xl text-green-700" />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-green-50 to-green-100 rounded-full border-2 border-green-200">
            <svg className="w-5 h-5 text-green-700" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-sm font-bold text-green-900">Ready to start? Let&apos;s discuss your project!</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
