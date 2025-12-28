// Structured Data (JSON-LD) Components for SEO
// These components generate schema.org markup for better search engine understanding

import { SITE_CONFIG } from '@/lib/seo';

// Organization Schema - Represents the business entity
export function OrganizationSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'GeneralContractor',
    '@id': `${SITE_CONFIG.url}/#organization`,
    name: SITE_CONFIG.business.name,
    legalName: SITE_CONFIG.business.legalName,
    url: SITE_CONFIG.url,
    telephone: SITE_CONFIG.business.phoneRaw,
    email: SITE_CONFIG.business.email,
    foundingDate: SITE_CONFIG.business.yearEstablished,

    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Maryland',
      addressRegion: 'MD',
      addressCountry: 'US',
    },

    areaServed: SITE_CONFIG.business.serviceAreas.map((area) => ({
      '@type': 'City',
      name: area,
    })),

    logo: {
      '@type': 'ImageObject',
      url: `${SITE_CONFIG.url}/bm-logo-dark.svg`,
      width: '600',
      height: '60',
    },

    sameAs: Object.values(SITE_CONFIG.social).filter(Boolean),

    priceRange: '$$',

    knowsAbout: SITE_CONFIG.business.services,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// LocalBusiness Schema - Enhanced local business information
export function LocalBusinessSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'HomeAndConstructionBusiness',
    '@id': `${SITE_CONFIG.url}/#localbusiness`,
    name: SITE_CONFIG.business.name,
    image: `${SITE_CONFIG.url}${SITE_CONFIG.ogImage}`,
    telephone: SITE_CONFIG.business.phoneRaw,
    email: SITE_CONFIG.business.email,
    url: SITE_CONFIG.url,

    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Maryland',
      addressRegion: 'MD',
      addressCountry: 'US',
    },

    geo: {
      '@type': 'GeoCoordinates',
      latitude: 39.0458,
      longitude: -76.6413,
    },

    areaServed: SITE_CONFIG.business.serviceAreas.map((area) => ({
      '@type': 'State',
      name: area,
    })),

    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '18:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '09:00',
        closes: '15:00',
      },
    ],

    priceRange: '$$',
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// Service Schema - For individual services
export function ServiceSchema({ service }: { service: string }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service,
    provider: {
      '@type': 'GeneralContractor',
      name: SITE_CONFIG.business.name,
      telephone: SITE_CONFIG.business.phoneRaw,
      url: SITE_CONFIG.url,
    },
    areaServed: {
      '@type': 'State',
      name: 'Maryland',
    },
    serviceType: service,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// BreadcrumbList Schema - For navigation breadcrumbs
export function BreadcrumbSchema({ items }: { items: Array<{ name: string; url: string }> }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${SITE_CONFIG.url}${item.url}`,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// WebSite Schema - For the entire website
export function WebSiteSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_CONFIG.url}/#website`,
    url: SITE_CONFIG.url,
    name: SITE_CONFIG.name,
    description: SITE_CONFIG.defaultDescription,
    publisher: {
      '@id': `${SITE_CONFIG.url}/#organization`,
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${SITE_CONFIG.url}/portfolio-gallery/?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// ImageGallery Schema - For portfolio galleries
export function ImageGallerySchema({
  images,
  name,
  description,
}: {
  images: Array<{ url: string; caption?: string }>;
  name: string;
  description: string;
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ImageGallery',
    name,
    description,
    image: images.map((img) => ({
      '@type': 'ImageObject',
      url: img.url.startsWith('http') ? img.url : `${SITE_CONFIG.url}${img.url}`,
      caption: img.caption || name,
    })),
    author: {
      '@type': 'Organization',
      name: SITE_CONFIG.business.name,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// ContactPage Schema - For contact page
export function ContactPageSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    '@id': `${SITE_CONFIG.url}/contact/#contactpage`,
    url: `${SITE_CONFIG.url}/contact/`,
    name: 'Contact BM Contracting LLC',
    description: 'Get in touch with BM Contracting LLC for your home remodeling needs in Maryland.',
    mainEntity: {
      '@type': 'GeneralContractor',
      name: SITE_CONFIG.business.name,
      telephone: SITE_CONFIG.business.phoneRaw,
      email: SITE_CONFIG.business.email,
      url: SITE_CONFIG.url,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// AboutPage Schema - For about page
export function AboutPageSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    '@id': `${SITE_CONFIG.url}/about/#aboutpage`,
    url: `${SITE_CONFIG.url}/about/`,
    name: 'About BM Contracting LLC',
    description: 'Learn about BM Contracting LLC, Maryland\'s trusted home remodeling contractor with 15+ years of experience.',
    mainEntity: {
      '@id': `${SITE_CONFIG.url}/#organization`,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// FAQ Schema - For frequently asked questions
export function FAQSchema({ faqs }: { faqs: Array<{ question: string; answer: string }> }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// BlogPosting Schema - For individual blog posts
export function BlogPostingSchema({
  title,
  description,
  slug,
  date,
  lastModified,
  author,
  featuredImage,
  tags,
}: {
  title: string;
  description: string;
  slug: string;
  date: string;
  lastModified?: string;
  author: string;
  featuredImage: string;
  tags: string[];
}) {
  const imageUrl = featuredImage.startsWith('http')
    ? featuredImage
    : `${SITE_CONFIG.url}${featuredImage}`;

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    '@id': `${SITE_CONFIG.url}/blog/${slug}/#blogpost`,
    headline: title,
    description,
    image: imageUrl,
    datePublished: date,
    dateModified: lastModified || date,
    author: {
      '@type': 'Organization',
      name: author,
      url: SITE_CONFIG.url,
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_CONFIG.business.name,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_CONFIG.url}/bm-logo-dark.svg`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${SITE_CONFIG.url}/blog/${slug}/`,
    },
    keywords: tags.join(', '),
    articleSection: 'Home Improvement',
    inLanguage: 'en-US',
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// Blog Schema - For blog listing page
export function BlogSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    '@id': `${SITE_CONFIG.url}/blog/#blog`,
    url: `${SITE_CONFIG.url}/blog/`,
    name: `${SITE_CONFIG.business.name} Blog`,
    description: 'Expert home remodeling tips, guides, and insights from Maryland\'s trusted contractor.',
    publisher: {
      '@type': 'Organization',
      '@id': `${SITE_CONFIG.url}/#organization`,
      name: SITE_CONFIG.business.name,
    },
    inLanguage: 'en-US',
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
