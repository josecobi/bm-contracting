export interface PortfolioImage {
  src: string
  alt: string
  width: number
  height: number
  span?: number // 1 or 2 columns
  caption?: string
}

export interface PortfolioCategory {
  id: string
  title: string
  images: PortfolioImage[]
}

export const portfolioCategories: PortfolioCategory[] = [
  {
    id: 'kitchen',
    title: 'Modern Kitchen Renovation',
    images: [
      { src: '/portfolio/portfolio-gallery/jpg/kitchen-0000.webp', alt: 'Modern Kitchen', width: 1200, height: 800, span: 4 },
      { src: '/portfolio/portfolio-gallery/jpg/kitchen-002.webp', alt: 'Kitchen Cabinets', width: 1200, height: 800, span: 2 },
      { src: '/portfolio/portfolio-gallery/jpg/kitchen-001.webp', alt: 'Kitchen Detail', width: 800, height: 1000, span: 2 },
      // { src: '/portfolio/portfolio-gallery/jpg/kitchen-012.webp', alt: 'Kitchen Counter', width: 800, height: 1000 },
      { src: '/portfolio/portfolio-gallery/jpg/kitchen-013.webp', alt: 'Kitchen View', width: 800, height: 600, span: 2 },
      { src: '/portfolio/portfolio-gallery/jpg/kitchen-014.webp', alt: 'Kitchen Finish', width: 800, height: 1000, span: 2 },
      { src: '/portfolio/portfolio-gallery/jpg/kitchen-015.webp', alt: 'Kitchen Complete', width: 800, height: 600, span: 2 },
    ],
  },
  {
    id: 'bathroom',
    title: 'Luxury Bathroom Remodel',
    images: [
      { src: '/portfolio/portfolio-gallery/jpg/bathroom-000.webp', alt: 'Luxury Bathroom', width: 800, height: 1000, span: 4 },
      { src: '/portfolio/portfolio-gallery/jpg/bathroom-001.webp', alt: 'Bathroom Tile', width: 1200, height: 800, span: 2 },
      { src: '/portfolio/portfolio-gallery/jpg/bathroom-002.webp', alt: 'Bathroom Fixtures', width: 800, height: 1000, span: 2 },
    ],
  },
  {
    id: 'living',
    title: 'Open-Concept Living',
    images: [
      { src: '/portfolio/portfolio-gallery/jpg/livingroom000.webp', alt: 'Open Living Space', width: 1400, height: 900, span: 2 },
    ],
  },
  {
    id: 'deck',
    title: 'Outdoor Patio & Deck',
    images: [
      { src: '/portfolio/portfolio-gallery/jpg/deck.webp', alt: 'Outdoor Deck', width: 1200, height: 800, span: 2 },
      { src: '/portfolio/portfolio-gallery/jpg/deck-001.webp', alt: 'Deck Detail', width: 800, height: 1000, span: 2 },
    ],
  },
  {
    id: 'basement',
    title: 'Basement Entertainment Area',
    images: [
      { src: '/portfolio/portfolio-gallery/jpg/basement.webp', alt: 'Basement Entertainment', width: 800, height: 1000, span: 3 },
    ],
  },
  {
    id: 'stairs',
    title: 'Staircase Makeover',
    images: [
      { src: '/portfolio/portfolio-gallery/jpg/staircase-before-000.webp', alt: 'Staircase Before', width: 800, height: 1000, span: 2, caption: 'Before' },
      { src: '/portfolio/portfolio-gallery/jpg/staircase-after-000.webp', alt: 'Staircase After', width: 800, height: 1000, span: 2, caption: 'After' },
    ],
  },
  {
    id: 'flooring',
    title: 'Flooring',
    images: [
      { src: '/portfolio/portfolio-gallery/jpg/floor-000.webp', alt: 'Floor Installation', width: 1200, height: 800, span: 2 },
      { src: '/portfolio/portfolio-gallery/jpg/floor-009.webp', alt: 'Floor Finish', width: 800, height: 1000 },
      { src: '/portfolio/portfolio-gallery/jpg/flooring-000.webp', alt: 'Hardwood Floor', width: 800, height: 600 },
      { src: '/portfolio/portfolio-gallery/jpg/flooring-001.webp', alt: 'Floor Design', width: 1200, height: 800, span: 2 },
    ],
  },
]
