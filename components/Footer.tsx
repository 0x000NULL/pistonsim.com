'use client'

import Link from 'next/link'
import { NavLink, ROUTES } from '@/lib/types'

export default function Footer(): React.ReactElement {
  const currentYear = new Date().getFullYear()

  const footerLinks: {
    product: NavLink[]
    company: NavLink[]
  } = {
    product: [
      { href: ROUTES.HOME, label: 'Home' },
      { href: ROUTES.FEATURES, label: 'Features' },
    ],
    company: [
      { href: ROUTES.ABOUT, label: 'About' },
      { href: '/#contact', label: 'Contact' },
    ],
  }

  return (
    <footer className="bg-background-secondary border-t-2 border-dashed border-border">
      <div className="container-custom mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Column */}
          <div className="col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <span className="font-display font-bold text-2xl tracking-tight text-cyan">
                PISTON
              </span>
            </div>
            <p className="text-text-secondary text-sm mb-4">
              Professional-grade engine simulation at enthusiast-accessible pricing.
            </p>
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
