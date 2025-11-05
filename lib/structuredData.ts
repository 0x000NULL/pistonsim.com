import { FAQItem } from './types'

/**
 * Generates JSON-LD structured data for SoftwareApplication schema
 * Used on the homepage to describe PISTON software
 *
 * @returns SoftwareApplication schema object
 */
export function getSoftwareApplicationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'PISTON',
    applicationCategory: 'EngineeringApplication',
    applicationSubCategory: 'Engine Simulation Software',
    operatingSystem: 'Windows, macOS, Linux',
    description: 'Professional-grade engine simulation at enthusiast-accessible pricing. Physics-based thermodynamic modeling for engine builders, tuners, and automotive enthusiasts.',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      description: 'Free during alpha development phase',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '50',
    },
    featureList: [
      'Virtual dyno with <7% error rate',
      'Real parts database with 50+ components',
      'Thermodynamic engine modeling',
      'Validated against certified GM dyno data',
    ],
    url: 'https://pistonsim.com',
  }
}

/**
 * Generates JSON-LD structured data for Organization schema
 * Used on the about page to describe PISTON as an organization
 *
 * @returns Organization schema object
 */
export function getOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'PISTON',
    url: 'https://pistonsim.com',
    logo: 'https://pistonsim.com/og-image.png',
    description: 'Making professional-grade engine simulation accessible to everyone',
    foundingDate: '2024',
    sameAs: [
      // Add social media URLs when available
    ],
  }
}

/**
 * Generates JSON-LD structured data for FAQ schema
 * Used on the FAQ page to display rich results in search
 *
 * @param faqs - Array of FAQ items
 * @returns FAQPage schema object
 */
export function getFAQSchema(faqs: FAQItem[]) {
  return {
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
  }
}

/**
 * Generates JSON-LD structured data for Product schema
 * Used on the features page to describe PISTON as a product
 *
 * @returns Product schema object
 */
export function getProductSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'PISTON Engine Simulation Software',
    description: 'Professional-grade thermodynamic engine modeling with virtual dyno, parts database, and validated accuracy.',
    brand: {
      '@type': 'Brand',
      name: 'PISTON',
    },
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      priceValidUntil: '2025-12-31',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '50',
    },
  }
}

/**
 * Generates JSON-LD structured data for WebSite schema
 * Used for site-wide search functionality
 *
 * @returns WebSite schema object
 */
export function getWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'PISTON',
    url: 'https://pistonsim.com',
    description: 'Professional engine simulation software',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://pistonsim.com/search?q={search_term_string}',
      },
      'query-input': 'required name=search_term_string',
    },
  }
}

/**
 * Utility to safely stringify JSON-LD data for script tags
 *
 * @param data - Schema object to stringify
 * @returns Safely stringified JSON
 */
export function stringifySchema(data: Record<string, unknown>): string {
  return JSON.stringify(data)
}
