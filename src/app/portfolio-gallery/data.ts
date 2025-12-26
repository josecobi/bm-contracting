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
      { src: '/portfolio/portfolio-gallery/jpg/kitchen-0000.jpg', alt: 'Modern Kitchen', width: 1200, height: 800, span: 4 },
      { src: '/portfolio/portfolio-gallery/jpg/kitchen-002.jpg', alt: 'Kitchen Cabinets', width: 1200, height: 800, span: 2 },
      { src: '/portfolio/portfolio-gallery/jpg/kitchen-001.jpg', alt: 'Kitchen Detail', width: 800, height: 1000, span: 2 },
      // { src: '/portfolio/portfolio-gallery/jpg/kitchen-012.jpg', alt: 'Kitchen Counter', width: 800, height: 1000 },
      { src: '/portfolio/portfolio-gallery/jpg/kitchen-013.jpg', alt: 'Kitchen View', width: 800, height: 600, span: 2 },
      { src: '/portfolio/portfolio-gallery/jpg/kitchen-014.jpg', alt: 'Kitchen Finish', width: 800, height: 1000, span: 2 },
      { src: '/portfolio/portfolio-gallery/jpg/kitchen-015.jpg', alt: 'Kitchen Complete', width: 800, height: 600, span: 2 },
    ],
  },
  {
    id: 'bathroom',
    title: 'Luxury Bathroom Remodel',
    images: [
      { src: '/portfolio/portfolio-gallery/jpg/bathroom-000.jpg', alt: 'Luxury Bathroom', width: 800, height: 1000, span: 4 },
      { src: '/portfolio/portfolio-gallery/jpg/bathroom-001.jpg', alt: 'Bathroom Tile', width: 1200, height: 800, span: 2 },
      { src: '/portfolio/portfolio-gallery/jpg/bathroom-002.jpg', alt: 'Bathroom Fixtures', width: 800, height: 1000, span: 2 },
    ],
  },
  {
    id: 'living',
    title: 'Open-Concept Living',
    images: [
      { src: '/portfolio/portfolio-gallery/jpg/living-room-000.jpg', alt: 'Open Living Space', width: 1400, height: 900, span: 2 },
    ],
  },
  {
    id: 'deck',
    title: 'Outdoor Patio & Deck',
    images: [
      { src: '/portfolio/portfolio-gallery/jpg/deck.jpg', alt: 'Outdoor Deck', width: 1200, height: 800, span: 2 },
      { src: '/portfolio/portfolio-gallery/jpg/deck-001.jpg', alt: 'Deck Detail', width: 800, height: 1000, span: 2 },
    ],
  },
  {
    id: 'basement',
    title: 'Basement Entertainment Area',
    images: [
      { src: '/portfolio/portfolio-gallery/jpg/basement.jpg', alt: 'Basement Entertainment', width: 800, height: 1000, span: 3 },
    ],
  },
  {
    id: 'stairs',
    title: 'Staircase Makeover',
    images: [
      { src: '/portfolio/portfolio-gallery/jpg/staircase-before-000.jpg', alt: 'Staircase Before', width: 800, height: 1000, span: 2, caption: 'Before' },
      { src: '/portfolio/portfolio-gallery/jpg/staircase-after-000.jpg', alt: 'Staircase After', width: 800, height: 1000, span: 2, caption: 'After' },
    ],
  },
  {
    id: 'flooring',
    title: 'Flooring',
    images: [
      { src: '/portfolio/portfolio-gallery/jpg/floor-000.jpg', alt: 'Floor Installation', width: 1200, height: 800, span: 2 },
      { src: '/portfolio/portfolio-gallery/jpg/floor-009.jpg', alt: 'Floor Finish', width: 800, height: 1000 },
      { src: '/portfolio/portfolio-gallery/jpg/flooring-000.jpg', alt: 'Hardwood Floor', width: 800, height: 600 },
      { src: '/portfolio/portfolio-gallery/jpg/flooring-001.jpg', alt: 'Floor Design', width: 1200, height: 800, span: 2 },
    ],
  },
]
