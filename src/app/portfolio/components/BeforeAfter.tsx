'use client'

import { useState, useEffect } from 'react'
import { projects } from '@/app/portfolio/data/portfolio'
import CompareImage from 'react-compare-image'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'

export default function BeforeAfterShowcase() {
  const [showTip, setShowTip] = useState(true)

useEffect(() => {
    const dismissed = localStorage.getItem('tipDismissed')
    if (dismissed !== 'true') {
      setShowTip(true)
    }
  }, [])

  const handleDismiss = () => {
    localStorage.setItem('tipDismissed', 'true')
    setShowTip(false)
  }

  return (
    <section className="py-16 bg-gray-50 mt-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">
          Before & After Transformations
        </h2>
          {showTip && (
            <div className="relative bg-yellow-100 border-l-4 border-yellow-400 text-yellow-800 p-4 mb-6 rounded-md flex items-start justify-between max-w-xl mx-auto">
              <p className="text-sm">
                👉 <strong>Tip:</strong> Slide left and right to compare before and after.
              </p>
              <button
                onClick={handleDismiss}
                className="ml-4 mt-1 text-yellow-800 hover:text-yellow-600"
                aria-label="Dismiss tip"
              >
                <X size={16} />
              </button>
            </div>
          )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <ProjectComparison key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectComparison({ project }: { project: typeof projects[number] }) {
  const [useFallback, setUseFallback] = useState(false)
  const [carouselIndex, setCarouselIndex] = useState(0)
  
  

  const captions = ['Before', 'After']
  const images = [project.before, project.after]

  const nextImage = () => setCarouselIndex((carouselIndex + 1) % 2)
  const prevImage = () => setCarouselIndex((carouselIndex + 1) % 2)

  return (
    <div className="flex flex-col items-center relative">
      <h3 className="text-xl font-semibold mb-4 text-center">{project.title}</h3>

      {!useFallback ? (
        <div className="relative w-full">
          <CompareImage
            leftImage={project.before}
            rightImage={project.after}
            sliderLineColor="#ffffff"
            handleSize={40}
          />

        

          <button
            onClick={() => setUseFallback(true)}
            className="text-xs text-blue-600 underline mt-2"
          >
            Having trouble? Tap here to switch view mode
          </button>
        </div>
      ) : (
        <div className="w-full relative">
          {/* Fallback carousel view */}
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
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 p-1 rounded-full text-white"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={nextImage}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 p-1 rounded-full text-white"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      )}

      <span className="sr-only">{project.alt}</span>
      <p className="mt-3 text-center text-gray-600 text-sm">{project.description}</p>
    </div>
  )
}


// 'use client'
// import { projects } from '@/app/portfolio/data/portfolio'

// import CompareImage from 'react-compare-image'

// export default function BeforeAfterShowcase() {
//   return (
//     <section className="py-16 bg-gray-50 mt-10">
//       <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//         <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">
//           Before & After Transformations
//         </h2>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
//           {projects.map((project, index) => (
//             <div key={index} className="flex flex-col items-center">
//               <h3 className="text-xl font-semibold mb-4 text-center">{project.title}</h3>
//               <CompareImage
//                 leftImage={project.before}
//                 rightImage={project.after}
//                 sliderLineColor="#ffffff"
//                 handleSize={40}
//               />
//             <span className="sr-only">{project.alt}</span>
//             <p>{project.description}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }
