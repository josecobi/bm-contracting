# BM Contracting LLC Website

A modern, high-performance marketing website for BM Contracting LLC - a professional home remodeling contractor serving Maryland, Washington DC and Virginia.

## Overview

This is a statically-generated Next.js website showcasing BM Contracting's services, portfolio work, and expertise in home remodeling. The site features before/after project galleries, an SEO-optimized blog, and comprehensive structured data for search engines.

## Features

- **Static Site Generation**: Fully pre-rendered for optimal performance and SEO
- **Before/After Portfolio**: Interactive image comparisons showcasing completed projects
- **MDX Blog System**: Content management with frontmatter support for articles
- **SEO Optimized**: Comprehensive meta tags, Open Graph, Twitter Cards, and JSON-LD structured data
- **Performance Focused**: Optimized WebP images, lazy loading, and Framer Motion animations
- **Responsive Design**: Mobile-first design with Tailwind CSS 4
- **PWA Ready**: Includes manifest and service worker configuration

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion 12
- **Content**: MDX with gray-matter
- **Image Optimization**: Sharp
- **Icons**: Heroicons, Lucide React, React Icons
- **Build Tool**: Turbopack (development)

## Getting Started

### Prerequisites

- Node.js 20+
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd bm-contracting
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with Turbopack |
| `npm run build` | Build static site for production |
| `npm start` | Serve production build locally |
| `npm run lint` | Run ESLint |
| `npm run optimize-images` | Optimize portfolio images with Sharp |

## Project Structure

```
bm-contracting/
├── src/
│   ├── app/                  # Next.js App Router pages
│   │   ├── page.tsx         # Homepage
│   │   ├── layout.tsx       # Root layout
│   │   ├── portfolio/       # Portfolio showcase
│   │   ├── blog/            # Blog pages
│   │   ├── about/           # About page
│   │   └── contact/         # Contact page
│   ├── components/          # Reusable React components
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── Services.tsx
│   │   ├── StructuredData.tsx
│   │   └── blog/
│   ├── content/
│   │   └── blog/            # MDX blog posts
│   └── lib/
│       ├── blog.ts          # Blog utilities
│       └── seo.ts           # SEO configuration
├── public/
│   ├── portfolio/           # Portfolio images (WebP)
│   ├── blog/                # Blog images
│   └── manifest.json        # PWA manifest
├── scripts/
│   └── optimize-images.js   # Image optimization script
└── out/                     # Static build output (generated)
```

## Development Workflow

### Adding Blog Posts

1. Create a new `.mdx` file in `src/content/blog/`:
```mdx
---
title: "Your Blog Post Title"
description: "Brief description for SEO"
excerpt: "Short excerpt for previews"
date: "2025-01-28"
author: "BM Contracting LLC"
category: "Kitchen Remodeling"
tags: ["renovation", "kitchen", "tips"]
featuredImage: "/blog/your-image.jpg"
---

Your content here...
```

2. Add the featured image to `public/blog/`
3. Rebuild the site to generate the new static page

### Adding Portfolio Projects

1. Add before/after images to `public/portfolio/before-after/`
2. Run the optimization script:
```bash
npm run optimize-images
```
3. Update `src/app/portfolio/data/portfolio.ts`:
```typescript
{
  title: 'Project Title',
  before: '/portfolio/before-after/project-before.webp',
  after: '/portfolio/before-after/project-after.webp',
  alt: 'Project description',
  description: 'Detailed project description.',
}
```

### Image Optimization

The project includes a custom image optimization script that:
- Converts JPEG/PNG to WebP format
- Resizes images to appropriate dimensions
- Applies quality optimization (with special handling for priority images)
- Reduces file sizes by 60-80% on average

Run it with:
```bash
npm run optimize-images
```

## Building for Production

Generate the static site:
```bash
npm run build
```

The output will be in the `out/` directory, ready for deployment to any static hosting service.

## Deployment

This site is configured for static export and can be deployed to:
- **Vercel** (recommended)
- **Netlify**
- **GitHub Pages**
- Any static hosting service

Simply deploy the contents of the `out/` directory after running `npm run build`.

## SEO Configuration

SEO settings are centralized in `src/lib/seo.ts`. Update the `SITE_CONFIG` object to modify:
- Business information (name, phone, email, location)
- Service areas
- Default metadata
- Social media links
- Structured data

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Firefox-specific optimizations for Framer Motion animations

## Performance Optimizations

- Static site generation for instant page loads
- WebP image format with optimal compression
- Lazy loading for images and animations
- Turbopack for faster development builds
- Geist font with automatic optimization

## Contact & Business Information

**BM Contracting LLC**
Phone: (301) 351-5379
Email: bm.ubarahona@gmail.com
Location: Maryland, Washington DC and Virginia
Experience: 20+ years in home remodeling

## License

Private project for BM Contracting LLC.
