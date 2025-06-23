'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-gray-900">
      {/* Background Image */}
      <div className="absolute inset-0  ">
        <Image
          src="/hero-remodel-2000.webp"
          alt="Home remodeling"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Optional Overlay */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-white text-4xl md:text-6xl font-bold drop-shadow-xl"
        >
          Transforming Spaces, Elevating Living
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-4 text-gray-200 text-lg md:text-xl max-w-xl"
        >
          Premium remodeling & renovation services tailored to your vision.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-6"
        >
          <Link
            href="/portfolio"
            className="bg-white text-gray-900 px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-gray-100 transition"
          >
            View Our Work
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
