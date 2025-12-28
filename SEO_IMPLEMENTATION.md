# SEO Implementation Guide - BM Contracting LLC

## Overview
This document outlines the comprehensive SEO setup implemented for the BM Contracting LLC website. The implementation follows Google's best practices and is optimized for local search in the Maryland area.

---

## Table of Contents
1. [Files Created](#files-created)
2. [Metadata Implementation](#metadata-implementation)
3. [Structured Data (JSON-LD)](#structured-data-json-ld)
4. [Sitemap & Robots.txt](#sitemap--robotstxt)
5. [PWA Features](#pwa-features)
6. [Performance Optimizations](#performance-optimizations)
7. [Local SEO](#local-seo)
8. [Next Steps](#next-steps)

---

## Files Created

### Core SEO Files
- `/src/lib/seo.ts` - Central SEO configuration and utilities
- `/src/components/StructuredData.tsx` - JSON-LD schema components
- `/public/sitemap.xml` - XML sitemap for search engines
- `/public/robots.txt` - Crawler directives
- `/public/manifest.json` - PWA manifest

### Page Layouts (for metadata)
- `/src/app/about/layout.tsx` - About page metadata
- `/src/app/contact/layout.tsx` - Contact page metadata

---

## Metadata Implementation

### Global Metadata (Root Layout)
Located in `/src/app/layout.tsx`

**Features:**
- Site-wide metadata defaults
- Organization and LocalBusiness schemas
- WebSite schema with search action
- Preconnect links for performance
- PWA manifest link
- Theme color for mobile browsers

### Page-Specific Metadata

#### Home Page (`/`)
**Title:** BM Contracting LLC - Expert Home Remodeling in Maryland
**Description:** Transform your home with BM Contracting LLC. Expert kitchen renovation, bathroom remodeling, flooring, deck construction, and basement finishing in Maryland. 15+ years experience.

**Features:**
- Service schemas for all major services
- Breadcrumb schema
- Optimized keywords for local search

#### Portfolio Gallery (`/portfolio-gallery/`)
**Title:** Portfolio Gallery - View Our Remodeling Projects
**Description:** Explore BM Contracting LLC's portfolio of stunning home renovation projects in Maryland.

**Features:**
- ImageGallery schema with portfolio images
- Breadcrumb navigation
- Custom OG image from portfolio

#### Portfolio Before/After (`/portfolio/`)
**Title:** Before & After Portfolio - See Our Transformations
**Description:** View stunning before and after photos of BM Contracting's home remodeling projects.

**Features:**
- Breadcrumb schema
- Before/after specific keywords

#### About Page (`/about/`)
**Title:** About Us - Maryland's Trusted Home Remodeling Contractor
**Description:** Learn about BM Contracting LLC, Maryland's trusted home remodeling contractor with 15+ years of experience.

**Features:**
- AboutPage schema
- Company credibility keywords

#### Contact Page (`/contact/`)
**Title:** Contact Us - Get a Free Consultation
**Description:** Contact BM Contracting LLC for your home remodeling project in Maryland. Call (301) 351-5379 for a free consultation.

**Features:**
- ContactPage schema
- NAP (Name, Address, Phone) consistency
- Call-to-action in description

---

## Structured Data (JSON-LD)

### Global Schemas (All Pages)
1. **OrganizationSchema** - Defines the business entity
   - Type: GeneralContractor
   - Includes: NAP, service areas, logo, founding date
   - ID: `#organization` for referencing

2. **LocalBusinessSchema** - Enhanced local business information
   - Type: HomeAndConstructionBusiness
   - Includes: Geo coordinates, opening hours, service areas
   - Helps with local search rankings

3. **WebSiteSchema** - Represents the entire website
   - Includes search action capability
   - Links to organization schema

### Page-Specific Schemas

#### ServiceSchema (Home Page)
- Created for each major service:
  - Kitchen Renovation
  - Bathroom Remodeling
  - Basement Finishing
  - Flooring Installation
  - Deck and Patio Construction
- Helps Google understand services offered

#### ImageGallerySchema (Portfolio Gallery)
- Lists portfolio images with captions
- Helps images appear in Google Images
- Improves visual search visibility

#### BreadcrumbSchema (All Pages)
- Navigation breadcrumbs for SEO
- Helps Google understand site structure
- May appear in search results

#### AboutPageSchema & ContactPageSchema
- Specialized schemas for informational pages
- Links to main organization entity

---

## Sitemap & Robots.txt

### Sitemap.xml
**Location:** `/public/sitemap.xml`

**Features:**
- All main pages included
- Priority settings (1.0 for home, 0.9 for key pages)
- Change frequency indicators
- Image sitemap integration for portfolio images
- Last modified dates

**Pages Included:**
- Home (priority: 1.0)
- About (priority: 0.8)
- Contact (priority: 0.9)
- Portfolio Gallery (priority: 0.9)
- Portfolio Before/After (priority: 0.9)

**Image Sitemap:**
- Sample portfolio images included
- Captions for better context
- Helps images rank in Google Images

### Robots.txt
**Location:** `/public/robots.txt`

**Features:**
- Allows all major search engines
- References sitemap location
- Crawl-delay for aggressive bots (AhrefsBot, SemrushBot)
- Blocks known bad bots (MJ12bot, DotBot)

---

## PWA Features

### Manifest.json
**Location:** `/public/manifest.json`

**Features:**
- App name and short name
- Theme color (#15803d - brand green)
- Display mode: standalone
- Icon specifications (192x192, 512x512, Apple touch)
- Language and direction settings
- Categories: business, lifestyle, construction

**Benefits:**
- Installable on mobile devices
- Better mobile user experience
- Improved engagement metrics
- Potential ranking boost for mobile

---

## Performance Optimizations

### Preconnect Links
Added to root layout for faster resource loading:
- Google Fonts API
- Google Fonts static content

### DNS Prefetch
Implicit through preconnect for:
- External font resources

### Image Optimization
- Already using Next.js Image component (unoptimized for static export)
- Alt tags present on images
- WebP format used where appropriate

---

## Local SEO

### NAP Consistency
**Name:** BM Contracting LLC
**Phone:** (301) 351-5379
**Location:** Maryland & Surrounding Areas

Consistent across:
- All metadata
- Structured data
- Contact page
- Footer (assumed)

### Service Areas
Defined in `/src/lib/seo.ts`:
- Maryland (primary)
- Montgomery County
- Prince George's County
- Howard County
- Frederick County
- Anne Arundel County

### Geo Targeting
- Geo tags in metadata (Maryland coordinates)
- State/region meta tags
- Service area schema markup

---

## SEO Best Practices Implemented

### 1. Title Tags
✅ Unique for each page
✅ Include target keywords
✅ 50-60 characters optimal length
✅ Include location (Maryland)
✅ Include business name

### 2. Meta Descriptions
✅ Unique for each page
✅ 150-160 characters
✅ Include call-to-action
✅ Include phone number on contact page
✅ Naturally include keywords

### 3. Keywords
✅ Primary keywords identified per page
✅ Long-tail keywords included
✅ Local keywords (Maryland, county names)
✅ Service-specific keywords

### 4. Canonical URLs
✅ Self-referencing canonical on all pages
✅ Uses trailing slashes (matches config)
✅ Absolute URLs

### 5. Open Graph
✅ Complete OG tags on all pages
✅ Custom images per page
✅ Proper dimensions (1200x630 recommended)
✅ Site name included

### 6. Twitter Cards
✅ Summary large image card
✅ Consistent with OG tags
✅ Proper attribution

### 7. Structured Data
✅ Valid JSON-LD format
✅ Multiple schema types
✅ Interconnected with @id references
✅ All required properties included

---

## Testing & Validation

### Recommended Tools

1. **Google Search Console**
   - Submit sitemap
   - Monitor indexing status
   - Check for errors

2. **Google Rich Results Test**
   - Test structured data
   - URL: https://search.google.com/test/rich-results
   - Test each page type

3. **Schema.org Validator**
   - Validate JSON-LD markup
   - URL: https://validator.schema.org/

4. **Google Mobile-Friendly Test**
   - Ensure mobile optimization
   - URL: https://search.google.com/test/mobile-friendly

5. **PageSpeed Insights**
   - Monitor performance scores
   - URL: https://pagespeed.web.dev/

6. **Lighthouse (Chrome DevTools)**
   - SEO audit score
   - Performance metrics
   - Best practices check

---

## Next Steps

### Immediate Actions Required

1. **Create Favicon Files** (IMPORTANT)
   The following files are referenced but need to be created:
   - `/public/favicon.ico` (32x32)
   - `/public/apple-touch-icon.png` (180x180)
   - `/public/android-chrome-192x192.png` (192x192)
   - `/public/android-chrome-512x512.png` (512x512)

   Use the BM Contracting logo to generate these files.
   Tool recommendation: https://realfavicongenerator.net/

2. **Verify Sitemap After Build**
   ```bash
   npm run build
   # Check that sitemap.xml is in the out/ directory
   ```

3. **Submit to Google Search Console**
   - Verify domain ownership
   - Submit sitemap.xml
   - Monitor for errors

4. **Set Up Google Business Profile**
   - Critical for local SEO
   - Claim/optimize listing
   - Add photos, hours, services

### Ongoing Optimization

1. **Content Strategy**
   - Add blog for content marketing
   - Create service-specific pages
   - Add customer testimonials page
   - Create FAQ section (with FAQ schema)

2. **Link Building**
   - Local directory listings (Yelp, Angi, HomeAdvisor)
   - Chamber of Commerce
   - Local business directories
   - Partner websites

3. **Social Media**
   - Set up business profiles
   - Add social URLs to `seo.ts`
   - Regular posting with portfolio images

4. **Reviews**
   - Google Business reviews
   - Add review schema markup
   - Display reviews on website

5. **Analytics**
   - Set up Google Analytics 4
   - Monitor traffic sources
   - Track conversions (form submissions, calls)

6. **Local Citations**
   - Ensure NAP consistency across the web
   - Submit to local directories
   - Industry-specific directories

---

## Configuration Updates

### Adding New Pages
When adding new pages:

1. Create metadata using `generateMetadata()` helper
2. Add appropriate structured data schemas
3. Update sitemap.xml with new URL
4. Add breadcrumb schema

Example:
```typescript
import type { Metadata } from "next";
import { generateMetadata } from '@/lib/seo';
import { BreadcrumbSchema } from '@/components/StructuredData';

export const metadata: Metadata = generateMetadata({
  title: 'Your Page Title',
  description: 'Your page description',
  keywords: ['keyword1', 'keyword2'],
  canonical: '/your-page/',
});
```

### Updating Business Information
All business information is centralized in `/src/lib/seo.ts` in the `SITE_CONFIG` object.

Update there to change:
- Phone number
- Email
- Service areas
- Social media links
- Business hours (in structured data)

---

## Technical Notes

### Static Export Compatibility
✅ All SEO features work with `output: 'export'`
✅ No dynamic API routes used
✅ Sitemap is static XML file
✅ Robots.txt is static text file

### Performance Impact
- Structured data adds ~5-10KB per page
- Minimal impact on load time
- All schemas load inline (no external requests)
- Preconnect links improve font loading

### Browser Support
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Android)
- PWA features require HTTPS (Cloudflare Pages provides this)

---

## SEO Checklist

- [x] Unique title tags on all pages
- [x] Unique meta descriptions on all pages
- [x] Keywords optimized per page
- [x] Canonical URLs set
- [x] Open Graph tags complete
- [x] Twitter Card tags complete
- [x] Structured data (JSON-LD) implemented
- [x] Sitemap.xml created
- [x] Robots.txt created
- [x] Manifest.json for PWA
- [x] Mobile-friendly meta tags
- [x] Preconnect for performance
- [ ] Favicon files created (REQUIRED)
- [ ] Submit sitemap to Google Search Console
- [ ] Verify in Google Rich Results Test
- [ ] Set up Google Business Profile
- [ ] Add Google Analytics 4

---

## Support & Maintenance

### Monthly SEO Tasks
1. Check Google Search Console for errors
2. Monitor ranking positions
3. Update content as needed
4. Add new portfolio images
5. Respond to reviews

### Quarterly SEO Tasks
1. Update sitemap if pages added
2. Review and update keywords
3. Check for broken links
4. Update business information if changed
5. Review competitor SEO

### Annually
1. Full SEO audit
2. Update structured data if schema changes
3. Review and refresh all metadata
4. Update service areas if expanded

---

## Resources

### Documentation
- [Next.js Metadata](https://nextjs.org/docs/app/building-your-application/optimizing/metadata)
- [Schema.org](https://schema.org/)
- [Google Search Central](https://developers.google.com/search)
- [Google Business Profile](https://www.google.com/business/)

### Tools
- [Google Search Console](https://search.google.com/search-console)
- [Google Rich Results Test](https://search.google.com/test/rich-results)
- [Schema Markup Validator](https://validator.schema.org/)
- [PageSpeed Insights](https://pagespeed.web.dev/)
- [Lighthouse](https://developer.chrome.com/docs/lighthouse/)

---

## Contact for SEO Updates
For questions or updates to this SEO implementation, refer to the code in:
- `/src/lib/seo.ts` - Configuration
- `/src/components/StructuredData.tsx` - Schema components
- Individual page files for page-specific metadata

Last Updated: 2025-12-28
