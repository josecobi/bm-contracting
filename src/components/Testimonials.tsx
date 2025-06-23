'use client'

import { FaQuoteLeft } from 'react-icons/fa'

const testimonials = [
  {
    quote:
      'They completely transformed our home! Every detail was thoughtfully done, and the team was so professional throughout the process.',
    name: 'Sarah M.',
    location: 'Oakwood, TX',
  },
  {
    quote:
      'Their design sense and craftsmanship are unmatched. We couldn’t be happier with our new space.',
    name: 'James & Linda T.',
    location: 'Hillcrest, TX',
  },
  {
    quote:
      'From start to finish, it was clear they truly care about quality and customer satisfaction. Highly recommend!',
    name: 'Evelyn R.',
    location: 'Brookhaven, TX',
  },
]

export default function Testimonials() {
  return (
    <section className="bg-gray-100 py-16" id="testimonials">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            What Our Clients Say
          </h2>
          <p className="mt-2 text-gray-600 text-lg">
            We take pride in delivering high-quality results and experiences.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow p-6 relative overflow-hidden"
            >
              <FaQuoteLeft className="text-3xl text-gray-300 absolute top-4 left-4" />
              <p className="text-gray-700 text-base mt-8 mb-4">
                “{testimonial.quote}”
              </p>
              <div className="font-semibold text-gray-900">
                {testimonial.name}
              </div>
              <div className="text-sm text-gray-500">{testimonial.location}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
