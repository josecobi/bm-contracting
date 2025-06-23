'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import CTAButton from './CTAButton'
import { Menu, X } from 'lucide-react'
import { usePathname } from 'next/navigation'
import  Image  from 'next/image'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()  // To get current route path
  
  const isHome = pathname === '/'  // Check if we're on the homepage

  const toggleMenu = () => setMenuOpen(prev => !prev)

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname])

  // Header background and text styles based on scroll and page type
  const headerClasses = `w-full fixed top-0 z-50 transition-all duration-300 ${
    isHome
      ? isScrolled
        ? 'bg-white shadow-md'
        : 'bg-transparent'
      : 'bg-white shadow-md' // solid white for other pages
  }`

  const textClasses = `transition ${
    isScrolled || !isHome
      ? 'text-gray-700 hover:text-gray-900' // Dark text for scrolled or other pages
      : 'text-white hover:text-gray-200' // White text on the homepage
  }`

  return (
    <header className={headerClasses}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src={isScrolled || !isHome ? '/bm-logo-light.svg' : '/bm-logo-dark.svg'}
              alt="BM Contracting Logo"
              width={40}
              height={40}
              className="h-10 w-auto"
              priority
            />
            <span className="sr-only">BM Contracting</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-6 items-center">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={textClasses}
              >
                {item.label}
              </Link>
            ))}
            <CTAButton />
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className={`md:hidden transition ${
              isScrolled || !isHome
                ? 'text-gray-700 hover:text-gray-900'
                : 'text-white hover:text-gray-200'
            }`}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <nav className="flex flex-col items-start px-4 py-4 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="text-gray-700 hover:text-gray-900 transition"
              >
                {item.label}
              </Link>
            ))}
            <CTAButton />
          </nav>
        </div>
      )}
    </header>
  )
}
