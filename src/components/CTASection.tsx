'use client'

import Link from 'next/link'

type CTASectionProps = {
  title: string
  description: string
  buttonText: string
  buttonHref: string
  className?: string
}

export default function CTASection({
  title,
  description,
  buttonText,
  buttonHref,
  className = '',
}: CTASectionProps) {
  return (
    <section className={`bg-white py-16 border-t ${className}`}>
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">{title}</h2>
        <p className="text-lg text-gray-600 mb-8">{description}</p>
        <Link
          href={buttonHref}
          className="inline-block bg-gray-900 text-white text-base font-medium px-6 py-3 rounded-lg hover:bg-gray-700 transition"
        >
          {buttonText}
        </Link>
      </div>
    </section>
  )
}
