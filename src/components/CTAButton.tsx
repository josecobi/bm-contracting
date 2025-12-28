'use client'

import Link from 'next/link'

export default function CTAButton() {
  return (
    <Link href="/contact/">
      <button className="bg-yellow-500 text-gray-900 px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-yellow-400 transition">
        Get in Touch
      </button>
    </Link>
  )
}
