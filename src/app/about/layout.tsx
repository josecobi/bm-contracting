import type { Metadata } from "next";
import { generateMetadata } from '@/lib/seo';

export const metadata: Metadata = generateMetadata({
  title: 'About Us - Maryland\'s Trusted Home Remodeling Contractor',
  description: 'Learn about BM Contracting LLC, Maryland\'s trusted home remodeling contractor with 20+ years of experience. Committed to quality, integrity, and customer satisfaction. Licensed and insured.',
  keywords: [
    'about BM Contracting',
    'Maryland contractor',
    'remodeling contractor Maryland',
    'licensed contractor Maryland',
    'experienced home remodeling',
  ],
  canonical: '/about/',
  ogImage: '/hero-remodel-2000.webp',
  ogImageAlt: 'About BM Contracting LLC - Maryland Home Remodeling Experts',
});

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
