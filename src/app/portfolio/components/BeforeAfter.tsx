'use client'
import { projects } from '@/app/portfolio/data/portfolio'

import CompareImage from 'react-compare-image'

export default function BeforeAfterShowcase() {
  return (
    <section className="py-16 bg-gray-50 mt-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">
          Before & After Transformations
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <div key={index} className="flex flex-col items-center">
              <h3 className="text-xl font-semibold mb-4 text-center">{project.title}</h3>
              <CompareImage
                leftImage={project.before}
                rightImage={project.after}
                sliderLineColor="#ffffff"
                handleSize={40}
              />
            <span className="sr-only">{project.alt}</span>
            <p>{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
