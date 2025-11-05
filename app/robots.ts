import { MetadataRoute } from 'next'

export const dynamic = 'force-static'

/**
 * Generates robots.txt file for search engine crawlers
 *
 * This function is called during build time to generate the robots.txt file.
 * It defines which parts of the site can be crawled and indexed.
 *
 * @returns Robots configuration
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [],
    },
    sitemap: 'https://pistonsim.com/sitemap.xml',
  }
}
