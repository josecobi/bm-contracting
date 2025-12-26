'use client'

import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Lightbox } from '@/components/Lightbox'
import { PortfolioCategory } from './data'
import type Masonry from 'masonry-layout'

interface GallerySectionProps {
  category: PortfolioCategory
}

export default function GallerySection({ category }: GallerySectionProps) {
  const gridRef = useRef<HTMLDivElement | null>(null)
  const msnryRef = useRef<Masonry | null>(null)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [visibleCount, setVisibleCount] = useState(6)

  const columnWidth = 300
  const gutter = 16

  const handleImageClick = (index: number) => {
    setSelectedIndex(index)
    setLightboxOpen(true)
  }

  const loadMore = () => {
    setVisibleCount(prev => Math.min(prev + 6, category.images.length))
  }

  // Masonry setup for desktop
  useEffect(() => {
    if (!gridRef.current) return

    // Dynamically import Masonry only on client side
    import('masonry-layout').then((MasonryModule) => {
      const Masonry = MasonryModule.default

      const msnryInstance = new Masonry(gridRef.current!, {
        itemSelector: '.grid-item',
        columnWidth,
        gutter,
        percentPosition: false,
        horizontalOrder: false,
        fitWidth: true,
      })

      msnryRef.current = msnryInstance

      // Re-layout after image load
      const imgs = gridRef.current!.querySelectorAll('img')
      imgs.forEach((img) => {
        img.addEventListener('load', () => {
          msnryRef.current?.layout?.()
        })
      })

      // Handle window resize with debounce
      let resizeTimer: NodeJS.Timeout
      const handleResize = () => {
        clearTimeout(resizeTimer)
        resizeTimer = setTimeout(() => {
          requestAnimationFrame(() => {
            msnryRef.current?.reloadItems?.()
            msnryRef.current?.layout?.()
          })
        }, 100)
      }
      window.addEventListener('resize', handleResize)

      // Store cleanup function
      const cleanup = () => {
        clearTimeout(resizeTimer)
        window.removeEventListener('resize', handleResize)
        msnryRef.current?.destroy?.()
        msnryRef.current = null
      }

      // Return cleanup
      return cleanup
    })

    // Cleanup if component unmounts before Masonry loads
    return () => {
      if (msnryRef.current) {
        msnryRef.current?.destroy?.()
        msnryRef.current = null
      }
    }
  }, [category.images])

  const visibleImages = category.images.slice(0, visibleCount)
  const hasMore = visibleCount < category.images.length

  return (
    <div id={category.id} className="mb-32 scroll-mt-28">
      {/* Category Title */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          {category.title}
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-green-700 to-green-500 mx-auto rounded-full" />
      </motion.div>

      {/* Mobile: Single Column */}
      <section className="md:hidden px-4">
        <div className="flex flex-col gap-6 max-w-2xl mx-auto">
          {visibleImages.map((img, i) => {
            const delay = i * 0.1

            return (
              <motion.div
                key={i}
                className="relative w-full rounded-2xl shadow-xl overflow-hidden cursor-pointer group border border-gray-200"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileTap={{ scale: 0.98 }}
                transition={{
                  duration: 0.5,
                  delay: delay > 0.6 ? 0 : delay,
                  ease: 'easeOut',
                }}
                viewport={{ once: true, amount: 0.2 }}
                onClick={() => handleImageClick(i)}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={img.width}
                  height={img.height}
                  className="w-full h-auto object-cover"
                  loading="lazy"
                  sizes="100vw"
                />

                {/* Hover overlay with gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 group-active:opacity-80 transition-opacity duration-300" />

                {/* Zoom icon */}
                <div className="absolute top-4 right-4 z-20">
                  <div className="bg-white/95 backdrop-blur-sm rounded-full p-2.5 shadow-xl border border-white/20">
                    <svg
                      className="w-5 h-5 text-green-700"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7"
                      />
                    </svg>
                  </div>
                </div>

                {/* Caption if available */}
                {img.caption && (
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                    <p className="text-white font-semibold text-sm">{img.caption}</p>
                  </div>
                )}
              </motion.div>
            )
          })}
        </div>

        {/* Load More Button */}
        {hasMore && (
          <div className="flex justify-center mt-12">
            <motion.button
              onClick={loadMore}
              className="group relative px-10 py-4 bg-gradient-to-r from-green-700 to-green-600 text-white font-bold rounded-full shadow-xl overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 flex items-center gap-2">
                Load More
                <svg className="w-5 h-5 group-hover:translate-y-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-green-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.button>
          </div>
        )}
      </section>

      {/* Desktop: Masonry Grid */}
      <section className="hidden md:block mx-auto">
        <div
          ref={gridRef}
          className="relative flex justify-center flex-wrap"
          style={{
            margin: '0 auto',
            maxWidth: '100vw',
          }}
        >
          <div className="grid-sizer" style={{ width: columnWidth }} />
          {category.images.map((img, i) => {
            const span = img.span || 1
            const delay = i * 0.1

            return (
              <motion.div
                key={i}
                className="grid-item mb-4 rounded-2xl shadow-xl overflow-hidden relative group cursor-pointer border border-gray-200"
                style={{
                  width: columnWidth * span + gutter * (span - 1),
                  maxWidth: '100%',
                }}
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                whileHover={{
                  scale: 1.02,
                  y: -8,
                  transition: { duration: 0.3 },
                }}
                whileTap={{
                  scale: 0.98,
                }}
                transition={{
                  type: 'spring',
                  stiffness: 80,
                  damping: 18,
                  mass: 1.2,
                  duration: 0.5,
                  delay,
                  ease: 'easeOut',
                }}
                viewport={{ once: true, amount: 0.1 }}
                onClick={() => handleImageClick(i)}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={img.width}
                  height={img.height}
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />

                {/* Hover overlay with gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 z-10 pointer-events-none" />

                {/* Zoom icon */}
                <div className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-100 scale-90 pointer-events-none">
                  <div className="bg-white/95 backdrop-blur-sm rounded-full p-2.5 shadow-2xl border border-white/20">
                    <svg
                      className="w-6 h-6 text-green-700"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7"
                      />
                    </svg>
                  </div>
                </div>

                {/* Caption if available */}
                {img.caption && (
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 via-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 pointer-events-none">
                    <p className="text-white font-bold text-lg drop-shadow-lg">{img.caption}</p>
                  </div>
                )}
              </motion.div>
            )
          })}
        </div>
      </section>

      {/* Lightbox */}
      <Lightbox
        images={category.images.map(img => ({
          src: img.src,
          alt: img.alt,
          width: img.width,
          height: img.height,
        }))}
        currentIndex={selectedIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
      />
    </div>
  )
}
