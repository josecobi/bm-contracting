'use client'

import { FaQuoteLeft } from 'react-icons/fa'
import { motion } from 'framer-motion'

const testimonials = [
  {
    quote:
      'They completely transformed our home! Every detail was thoughtfully done, and the team was so professional throughout the process.',
    name: 'Sarah M.',
    location: 'Oakwood, TX',
    rating: 5,
  },
  {
    quote:
      "Their design sense and craftsmanship are unmatched. We couldn't be happier with our new space.",
    name: 'James & Linda T.',
    location: 'Hillcrest, TX',
    rating: 5,
  },
  {
    quote:
      'From start to finish, it was clear they truly care about quality and customer satisfaction. Highly recommend!',
    name: 'Evelyn R.',
    location: 'Brookhaven, TX',
    rating: 5,
  },
]

export default function Testimonials() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden" id="testimonials">
      {/* Decorative Background Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-green-100/30 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-100/20 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            What Our Clients <span className="bg-gradient-to-r from-green-700 to-green-500 bg-clip-text text-transparent">Say</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-700 to-green-500 mx-auto rounded-full mb-6" />
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            We take pride in delivering exceptional results and unforgettable experiences.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="group bg-white rounded-2xl shadow-xl hover:shadow-2xl p-8 relative overflow-hidden border border-gray-100 hover:border-green-200 transition-all duration-500"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
            >
              {/* Quote Icon Background */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-green-700/10 to-green-500/5 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500" />

              {/* Quote Icon */}
              <div className="relative mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-green-700 to-green-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <FaQuoteLeft className="text-2xl text-white" />
                </div>
              </div>

              {/* Quote Text */}
              <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6 relative z-10">
                &quot;{testimonial.quote}&quot;
              </p>

              {/* Star Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Divider */}
              <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent mb-4" />

              {/* Client Info */}
              <div className="relative z-10">
                <div className="font-bold text-lg text-gray-900 group-hover:text-green-700 transition-colors">
                  {testimonial.name}
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-500 mt-1">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  {testimonial.location}
                </div>
              </div>

              {/* Decorative gradient line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-green-700 to-green-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </motion.div>
          ))}
        </div>

        {/* Trust Badge */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-white rounded-full shadow-lg border border-gray-200">
            <div className="flex -space-x-2">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-br from-green-700 to-green-500 border-2 border-white flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
              ))}
            </div>
            <div className="text-left">
              <div className="text-sm font-bold text-gray-900">50+ Happy Clients</div>
              <div className="text-xs text-gray-600">5-Star Reviews</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
