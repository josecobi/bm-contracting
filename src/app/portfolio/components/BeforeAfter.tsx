'use client'

import { useState, useEffect } from 'react'
import { projects } from '@/app/portfolio/data/portfolio'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function BeforeAfterShowcase() {
  const [showAnimation, setShowAnimation] = useState(true)

  useEffect(() => {
    const visitCount = parseInt(localStorage.getItem('visitCount') || '0')

    if (visitCount >= 3) {
      setShowAnimation(false)
    } else {
      localStorage.setItem('visitCount', (visitCount + 1).toString())
    }
  }, [])

  return (
    <section className="py-16 bg-gray-50 mt-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">
          Before & After Transformations
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <ProjectComparison key={index} project={project} isFirst={index === 0} showAnimation={showAnimation} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectComparison({ project, isFirst, showAnimation }: { project: typeof projects[number], isFirst: boolean, showAnimation: boolean }) {
  const [carouselIndex, setCarouselIndex] = useState(0)
  const [hasInteracted, setHasInteracted] = useState(false)

  const captions = ['Before', 'After']
  const images = [project.before, project.after]

  const nextImage = () => {
    setCarouselIndex((carouselIndex + 1) % 2)
    setHasInteracted(true)
  }

  const prevImage = () => {
    setCarouselIndex((carouselIndex + 1) % 2)
    setHasInteracted(true)
  }

  return (
    <div className="flex flex-col items-center relative">
      <h3 className="text-xl font-semibold mb-4 text-center">{project.title}</h3>

      <div className="w-full relative">
        {/* Carousel view */}
        <Image
          src={images[carouselIndex]}
          alt={project.alt}
          width={800}
          height={600}
          className="w-full rounded-md object-cover"
        />

        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/70 text-white text-sm px-3 py-1 rounded">
          {captions[carouselIndex]}
        </div>

        {/* Navigation arrows */}
        <button
          onClick={prevImage}
          className={`absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 p-1 rounded-full text-white cursor-pointer ${isFirst && showAnimation && !hasInteracted ? 'animate-pulse ' : ''}`}
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={nextImage}
          className={`absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 p-1 rounded-full text-white cursor-pointer ${isFirst && showAnimation && !hasInteracted ? 'animate-pulse' : ''}`}
        >
          <ChevronRight size={20} />
        </button>
      </div>

      <span className="sr-only">{project.alt}</span>
      <p className="mt-3 text-center text-gray-600 text-sm">{project.description}</p>
    </div>
  )
}