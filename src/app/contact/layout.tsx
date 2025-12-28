import type { Metadata } from "next";
import { generateMetadata } from '@/lib/seo';

export const metadata: Metadata = generateMetadata({
  title: 'Contact Us - Get a Free Consultation',
  description: 'Contact BM Contracting LLC for your home remodeling project in Maryland. Call (301) 351-5379 or email bm.ubarahona@gmail.com for a free consultation. Serving Maryland & surrounding areas.',
  keywords: [
    'contact BM Contracting',
    'Maryland contractor contact',
    'free remodeling consultation',
    'home remodeling quote Maryland',
    'contractor Maryland phone',
  ],
  canonical: '/contact/',
  ogImage: '/hero-remodel-2000.webp',
  ogImageAlt: 'Contact BM Contracting LLC for Home Remodeling',
});

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
