'use client'

import Link from 'next/link'
import Image from 'next/image'
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md'

export default function Footer() {
  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Portfolio', href: '/portfolio-gallery/' },
    { label: 'Blog', href: '/blog/' },
    { label: 'About', href: '/about/' },
    { label: 'Contact', href: '/contact/' },
  ]

  return (
    <footer className="bg-gray-900 text-gray-200 px-6 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Business Info */}
        <div>
          <Link href="/" className="inline-block mb-4">
            <Image
              src="/bm-logo-dark.svg"
              alt="BM Contracting Logo"
              width={120}
              height={40}
              className="h-10 w-auto"
            />
          </Link>
          <p className="text-sm text-gray-400">
            Transforming homes with precision and passion.
          </p>
        </div>

        {/* Navigation */}
        <nav className="flex flex-col gap-2">
          <h3 className="font-semibold mb-1">Navigation</h3>
          {navLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm hover:text-white transition"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Contact / Social */}
        <div className="flex flex-col gap-3">
          <h3 className="font-semibold mb-1">Get in Touch</h3>
          <a
            href="tel:+13013515379"
            className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition"
            aria-label="Phone"
          >
            <MdPhone size={18} className="text-amber-500 shrink-0" />
            (301) 351-5379
          </a>
          <a
            href="mailto:bm.ubarahona@gmail.com"
            className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition"
            aria-label="Email"
          >
            <MdEmail size={18} className="text-amber-500 shrink-0" />
            bm.ubarahona@gmail.com
          </a>
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <MdLocationOn size={18} className="text-amber-500 shrink-0" />
            <span>
              <span className="block text-gray-300 font-medium text-xs uppercase tracking-wide">Service Area</span>
              Maryland &amp; Surrounding Areas
            </span>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm text-gray-500">
       Website created by <a href="https://www.cobitek.com" target="_blank" rel="noopener" className="text-blue-400 hover:text-blue-300">Cobitek</a> &copy; {new Date().getFullYear()} BM Contracting. All rights reserved.
      </div>
    </footer>
  )
}
