import type { Metadata } from 'next';
import { generateMetadata } from '@/lib/seo';

export const metadata: Metadata = generateMetadata({
  title: 'Home Remodeling Blog - Expert Tips & Guides',
  description:
    'Get expert home remodeling tips, contractor advice, and renovation guides from BM Contracting LLC. Learn about kitchen remodeling, bathroom renovation, basement finishing, and more in Maryland.',
  keywords: [
    'home remodeling blog',
    'contractor tips Maryland',
    'kitchen renovation guide',
    'bathroom remodel tips',
    'basement finishing advice',
    'home improvement blog Maryland',
    'renovation tips',
  ],
  canonical: '/blog/',
  ogImage: '/blog/blog-hero.jpg',
});

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
