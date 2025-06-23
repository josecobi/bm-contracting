// data/portfolio.ts
import { Project } from '@/app/portfolio/types/index.types'

export const projects: Project[] = [
  {
    title: 'Kitchen Remodel',
    before: '/portfolio/before-after/kitchen-before.webp',
    after: '/portfolio/before-after/kitchen-after.webp',
    alt: 'Modern kitchen renovation',
    description: 'A complete transformation of a dated kitchen into a sleek, modern culinary space.',
  },
  {
    title: 'Bathroom Update',
    before: '/portfolio/before-after/bathroom-before.webp',
    after: '/portfolio/before-after/bathroom-after.webp',
    alt: 'Elegant bathroom redesign',
    description: 'Upgraded finishes and fixtures for a luxurious and spa-like bathroom experience.',
  },
  {
    title: 'Living Room Update',
    before: '/portfolio/before-after/livingroom-before.webp',
    after: '/portfolio/before-after/livingroom-after.webp',
    alt: 'Elegant living room redesign',
    description: 'Created a more open and inviting space with contemporary design elements.',
  },
  {
    title: 'Basement Update',
    before: '/portfolio/before-after/basement-before.webp',
    after: '/portfolio/before-after/basement-after.webp',
    alt: 'Elegant basement redesign',
    description: 'Converted an unfinished basement into a functional and cozy living area.',
  },
  {
    title: 'Deck & Outdoor Living Update',
    before: '/portfolio/before-after/deck-before.webp',
    after: '/portfolio/before-after/deck-after.webp',
    alt: 'Elegant deck redesign',
    description: 'Enhanced outdoor space with a new deck and built-in seating for entertainment.',
  },
]
