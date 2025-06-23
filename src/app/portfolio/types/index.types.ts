export type Project = {
  title: string
  before: string
  after: string
  alt: string
  description?: string
  tags?: string[]
  category?: 'kitchen' | 'bathroom' | 'interior' | 'exterior'
}

