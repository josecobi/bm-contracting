'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { PortfolioCategory } from './data'

interface CategoryNavProps {
  categories: PortfolioCategory[]
}

export default function CategoryNav({ categories }: CategoryNavProps) {
  const [activeId, setActiveId] = useState<string>(categories[0]?.id || '')
  const [showBackToTop, setShowBackToTop] = useState(false)

  // Shortened titles for mobile
  const getShortTitle = (title: string) => {
    const shortTitles: Record<string, string> = {
      'Modern Kitchen Renovation': 'Kitchen',
      'Luxury Bathroom Remodel': 'Bathroom',
      'Open-Concept Living': 'Living',
      'Outdoor Patio & Deck': 'Deck',
      'Basement Entertainment Area': 'Basement',
      'Staircase Makeover': 'Stairs',
      'Flooring': 'Flooring',
    }
    return shortTitles[title] || title
  }

  useEffect(() => {
    // Intersection Observer to track which section is in view
    const observers: IntersectionObserver[] = []

    categories.forEach((category) => {
      const element = document.getElementById(category.id)
      if (!element) return

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && entry.intersectionRatio > 0.3) {
              setActiveId(category.id)
            }
          })
        },
        {
          threshold: [0, 0.3, 0.5],
          rootMargin: '-100px 0px -50% 0px',
        }
      )

      observer.observe(element)
      observers.push(observer)
    })

    // Show back to top button after scrolling down
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 600)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      observers.forEach((observer) => observer.disconnect())
      window.removeEventListener('scroll', handleScroll)
    }
  }, [categories])

  const scrollToCategory = (id: string) => {
    const element = document.getElementById(id)
    if (!element) return

    const offsetTop = element.offsetTop - 120 // Account for sticky nav height
    window.scrollTo({
      top: offsetTop,
      behavior: 'smooth',
    })
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <>
      {/* Sticky Category Navigation */}
      <motion.nav
        className="sticky top-0 z-40 bg-white/95 backdrop-blur-lg border-b border-gray-200 shadow-sm overflow-hidden"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <div className="w-full px-2 sm:px-4 py-3">
          {/* Mobile: Horizontal Scroll with Fade Indicators */}
          <div className="lg:hidden relative">
            {/* Left fade indicator */}
            <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-white/95 to-transparent pointer-events-none z-10" />

            {/* Right fade indicator with scroll hint */}
            <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-white/95 to-transparent pointer-events-none z-10 flex items-center justify-end pr-2">
              <svg
                className="w-4 h-4 text-gray-400 animate-pulse"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>

            <div className="flex items-center gap-2 overflow-x-auto pb-1 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] px-2">
              {categories.map((category) => {
                const isActive = activeId === category.id

                return (
                  <motion.button
                    key={category.id}
                    onClick={() => scrollToCategory(category.id)}
                    className={`
                      relative px-3 py-1.5 rounded-full font-medium text-xs whitespace-nowrap transition-all duration-300 flex-shrink-0
                      ${
                        isActive
                          ? 'text-white shadow-lg'
                          : 'text-gray-700 bg-gray-100 active:bg-gray-200'
                      }
                    `}
                    whileTap={{ scale: 0.95 }}
                  >
                    {isActive && (
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-green-700 to-green-600 rounded-full"
                        layoutId="activeCategoryMobile"
                        transition={{
                          type: 'spring',
                          stiffness: 300,
                          damping: 30,
                        }}
                      />
                    )}
                    <span className="relative z-10">{getShortTitle(category.title)}</span>
                  </motion.button>
                )
              })}
              {/* Padding element to ensure last item is visible */}
              <div className="flex-shrink-0 w-8" />
            </div>
          </div>

          {/* Desktop: Centered Pills */}
          <div className="hidden lg:flex items-center justify-center gap-3">
            {/* Categories label */}
            <span className="text-sm font-semibold text-gray-500 whitespace-nowrap">
              Categories:
            </span>

            {/* Category Pills */}
            <div className="flex items-center gap-2 flex-wrap justify-center">
              {categories.map((category) => {
                const isActive = activeId === category.id

                return (
                  <motion.button
                    key={category.id}
                    onClick={() => scrollToCategory(category.id)}
                    className={`
                      relative px-4 py-2 rounded-full font-medium text-sm whitespace-nowrap transition-all duration-300
                      ${
                        isActive
                          ? 'text-white shadow-lg'
                          : 'text-gray-700 bg-gray-100 hover:bg-gray-200'
                      }
                    `}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {isActive && (
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-green-700 to-green-600 rounded-full"
                        layoutId="activeCategoryDesktop"
                        transition={{
                          type: 'spring',
                          stiffness: 300,
                          damping: 30,
                        }}
                      />
                    )}
                    <span className="relative z-10">{category.title}</span>
                  </motion.button>
                )
              })}
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Floating Back to Top Button */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            onClick={scrollToTop}
            className="fixed bottom-6 right-4 sm:bottom-8 sm:right-8 z-50 p-3 sm:p-4 bg-gradient-to-r from-green-700 to-green-600 text-white rounded-full shadow-2xl hover:shadow-3xl group"
            initial={{ opacity: 0, scale: 0, y: 100 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0, y: 100 }}
            whileHover={{ scale: 1.1, y: -4 }}
            whileTap={{ scale: 0.9 }}
            transition={{
              type: 'spring',
              stiffness: 300,
              damping: 20,
            }}
            aria-label="Back to top"
          >
            <svg
              className="w-5 h-5 sm:w-6 sm:h-6 group-hover:-translate-y-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M5 10l7-7m0 0l7 7m-7-7v18"
              />
            </svg>

            {/* Tooltip - Desktop only */}
            <div className="hidden sm:block absolute bottom-full right-0 mb-2 px-3 py-1.5 bg-gray-900 text-white text-xs font-medium rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
              Back to top
              <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900" />
            </div>
          </motion.button>
        )}
      </AnimatePresence>
    </>
  )
}
