// SEO Configuration and Utilities for BM Contracting LLC

export const SITE_CONFIG = {
  name: 'BM Contracting LLC',
  domain: 'bmcontracting-llc.com',
  url: 'https://bmcontracting-llc.com',
  locale: 'en_US',
  type: 'website',

  // Business Information
  business: {
    name: 'BM Contracting LLC',
    legalName: 'BM Contracting LLC',
    phone: '(301) 351-5379',
    phoneRaw: '+13013515379',
    email: 'bm.ubarahona@gmail.com',
    location: 'Maryland & Surrounding Areas',
    state: 'Maryland',
    country: 'United States',
    yearEstablished: '2010',
    yearsExperience: '15+',

    // Service areas
    serviceAreas: [
      'Maryland',
      'Montgomery County',
      'Prince George\'s County',
      'Howard County',
      'Frederick County',
      'Anne Arundel County',
    ],

    // Services offered
    services: [
      'Kitchen Renovation',
      'Bathroom Remodel',
      'Flooring Installation',
      'Deck and Patio Construction',
      'Basement Finishing',
      'Staircase Makeover',
      'Home Remodeling',
      'Interior Renovation',
    ],
  },

  // Social Media (add when available)
  social: {
    facebook: '',
    instagram: '',
    twitter: '',
    linkedin: '',
  },

  // Default SEO settings
  defaultTitle: 'BM Contracting LLC - Expert Home Remodeling in Maryland',
  titleTemplate: '%s | BM Contracting LLC',
  defaultDescription: 'Transform your home with BM Contracting LLC. Offering expert kitchen renovation, bathroom remodeling, flooring, and more in Maryland. 15+ years experience, quality guaranteed.',

  // Default keywords
  keywords: [
    'home remodeling Maryland',
    'kitchen renovation Maryland',
    'bathroom remodel Maryland',
    'basement finishing Maryland',
    'flooring installation Maryland',
    'deck construction Maryland',
    'general contractor Maryland',
    'home renovation contractor',
    'residential remodeling',
    'interior renovation Maryland',
  ],

  // Open Graph defaults
  ogImage: '/hero-remodel-2000.webp',
  ogImageAlt: 'BM Contracting LLC - Professional Home Remodeling',

  // Twitter
  twitterHandle: '@bmcontracting',
  twitterCard: 'summary_large_image',
} as const;

// Helper function to generate page metadata
export function generateMetadata({
  title,
  description,
  keywords,
  canonical,
  ogImage,
  ogImageAlt,
  noindex = false,
}: {
  title: string;
  description: string;
  keywords?: string[];
  canonical?: string;
  ogImage?: string;
  ogImageAlt?: string;
  noindex?: boolean;
}) {
  const fullTitle = title === SITE_CONFIG.defaultTitle
    ? title
    : `${title} | BM Contracting LLC`;

  const url = canonical
    ? `${SITE_CONFIG.url}${canonical}`
    : SITE_CONFIG.url;

  const image = ogImage || SITE_CONFIG.ogImage;
  const imageUrl = image.startsWith('http') ? image : `${SITE_CONFIG.url}${image}`;
  const imageAlt = ogImageAlt || SITE_CONFIG.ogImageAlt;

  const allKeywords = keywords
    ? [...SITE_CONFIG.keywords, ...keywords]
    : SITE_CONFIG.keywords;

  return {
    title: fullTitle,
    description,
    keywords: allKeywords.join(', '),
    authors: [{ name: SITE_CONFIG.business.name }],
    creator: SITE_CONFIG.business.name,
    publisher: SITE_CONFIG.business.name,

    // Robots
    robots: {
      index: !noindex,
      follow: !noindex,
      googleBot: {
        index: !noindex,
        follow: !noindex,
        'max-video-preview': -1,
        'max-image-preview': 'large' as const,
        'max-snippet': -1,
      },
    },

    // Canonical
    alternates: {
      canonical: url,
    },

    // Open Graph
    openGraph: {
      type: 'website',
      locale: SITE_CONFIG.locale,
      url,
      title: fullTitle,
      description,
      siteName: SITE_CONFIG.name,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: imageAlt,
        },
      ],
    },

    // Twitter
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [imageUrl],
      creator: SITE_CONFIG.twitterHandle,
    },

    // Additional metadata
    other: {
      'geo.region': 'US-MD',
      'geo.placename': 'Maryland',
      'geo.position': '39.0458;-76.6413', // Maryland coordinates
    },
  };
}

// Helper function to get canonical URL
export function getCanonicalUrl(path: string): string {
  return `${SITE_CONFIG.url}${path}`;
}
