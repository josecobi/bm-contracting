'use client'

import { ShieldCheck, Star, Wrench, BadgeCheck, Users, DollarSign } from 'lucide-react'
import { motion } from 'framer-motion'

const features = [
  {
    title: 'Licensed & Insured',
    description: 'We meet all regulations and carry full insurance for peace of mind.',
    icon: ShieldCheck,
  },
  {
    title: '20+ Years Experience',
    description: 'Proven expertise in residential remodeling and renovation projects.',
    icon: Star,
  },
  {
    title: 'Satisfaction Guarantee',
    description: 'We stand behind our work — your happiness is our priority.',
    icon: BadgeCheck,
  },
  {
    title: 'Craftsmanship',
    description: 'Every detail matters. We deliver high-quality, lasting results.',
    icon: Wrench,
  },
  {
    title: 'Trusted Locally',
    description: 'A reputation built on referrals and repeat clients in our community.',
    icon: Users,
  },
  {
    title: 'Transparent Pricing',
    description: 'No hidden costs. Clear estimates and fair pricing from the start.',
    icon: DollarSign,
  },
]

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50" id="why-choose-us">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Why Choose <span className="bg-gradient-to-r from-green-700 to-green-500 bg-clip-text text-transparent">Us</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-700 to-green-500 mx-auto rounded-full mb-6" />
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            We are not just builders — we are your remodeling partner committed to excellence.
          </p>
        </motion.div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={feature.title}
                className="group bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl hover:border-green-200 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
              >
                {/* Icon Badge */}
                <div className="mb-6 w-16 h-16 bg-gradient-to-br from-green-700 to-green-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Icon size={32} className="text-white" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-700 transition-colors">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>

                {/* Decorative gradient line */}
                <div className="mt-6 h-1 w-0 bg-gradient-to-r from-green-700 to-green-500 rounded-full group-hover:w-full transition-all duration-500" />
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
