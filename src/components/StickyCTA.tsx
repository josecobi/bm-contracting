'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { X } from 'lucide-react'

export default function StickyCTA() {
  const [isVisible, setIsVisible] = useState(true)

  // Optional: only show after scrolling 100px
  const [hasScrolled, setHasScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 100) setHasScrolled(true)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (!isVisible || !hasScrolled) return null

  return (
    <div className="fixed bottom-0 inset-x-0 z-50 bg-primary text-gray px-4 py-3 shadow-md flex justify-between items-center">
      {/* <div className="text-sm font-medium">
        Ready to start your remodel?
      </div> */}
      <div className="flex items-center gap-2 ml-auto">
        <Link
          href="/contact/"
          className="bg-white text-primary text-sm font-semibold px-4 py-2 rounded-full shadow hover:bg-gray-100 transition"
        >
          Get a Free Estimate
        </Link>
        <button
          onClick={() => setIsVisible(false)}
          className="text-gray hover:text-gray-300 transition"
          aria-label="Close"
        >
          <X size={18} />
        </button>
      </div>
    </div>
  )
}
