'use client'

import { useMemo } from 'react'
import Link from 'next/link'
import { NavLink, ROUTES } from '@/lib/types'
import NewsletterForm from '@/components/NewsletterForm'

/**
 * Site footer with navigation, newsletter signup, and legal links
 *
 * Features:
 * - Multi-column responsive layout (stacks on mobile)
 * - Organized link sections: Product, Company, Legal
 * - Integrated newsletter subscription form
 * - Copyright notice with dynamic year
 * - Consistent styling with dashed borders (brand element)
 * - Semantic HTML structure
 *
 * The footer provides important secondary navigation and
 * encourages newsletter signups without being intrusive.
 *
 * @returns Footer component with navigation and newsletter form
 *
 * @example
 * ```tsx
 * <Footer />
 * ```
 */
export default function Footer(): React.ReactElement {
  const currentYear = useMemo(() => new Date().getFullYear(), [])

  const footerLinks: {
    product: NavLink[]
    company: NavLink[]
    legal: NavLink[]
  } = {
    product: [
      { href: ROUTES.HOME, label: 'Home' },
      { href: ROUTES.FEATURES, label: 'Features' },
      { href: ROUTES.DOWNLOAD, label: 'Download' },
      { href: ROUTES.FAQ, label: 'FAQ' },
    ],
    company: [
      { href: ROUTES.ABOUT, label: 'About' },
      { href: ROUTES.CONTACT, label: 'Contact' },
    ],
    legal: [
      { href: ROUTES.TERMS, label: 'Terms of Service' },
      { href: ROUTES.PRIVACY, label: 'Privacy Policy' },
      { href: ROUTES.LICENSE, label: 'License' },
    ],
  }

  return (
    <footer className="bg-background-secondary border-t-2 border-dashed border-border">
      <div className="container-custom mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand Column with Newsletter */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <span className="font-display font-bold text-2xl tracking-tight text-cyan">
                PISTON
              </span>
            </div>
            <p className="text-text-secondary text-sm mb-6">
              Professional-grade engine simulation at enthusiast-accessible pricing.
            </p>

            {/* Newsletter Signup */}
            <div>
              <h3 className="font-display font-semibold text-text-primary mb-3 text-sm">
                Stay Updated
              </h3>
              <p className="text-text-tertiary text-xs mb-4">
                Get notified about new features and updates.
              </p>
              <NewsletterForm variant="footer" placeholder="your@email.com" />
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="font-display font-semibold text-text-primary mb-4">Product</h3>
            <ul className="space-y-2">
              {footerLinks.product.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-text-secondary hover:text-text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-display font-semibold text-text-primary mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-text-secondary hover:text-text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="font-display font-semibold text-text-primary mb-4">Legal</h3>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-text-secondary hover:text-text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t-2 border-dashed border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-text-tertiary text-sm">
              © {currentYear} PISTON. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
