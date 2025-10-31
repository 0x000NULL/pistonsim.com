'use client'

import Link from 'next/link'
import { FiGithub, FiTwitter, FiMail } from 'react-icons/fi'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    product: [
      { href: '/', label: 'Home' },
      { href: '/features/', label: 'Features' },
    ],
    resources: [
      { href: 'https://github.com', label: 'GitHub Repository', external: true },
      { href: 'https://github.com', label: 'Documentation', external: true },
      { href: 'https://github.com', label: 'Releases', external: true },
    ],
    company: [
      { href: '/#about', label: 'About' },
      { href: '/#contact', label: 'Contact' },
    ],
  }

  return (
    <footer className="bg-background-secondary border-t-2 border-dashed border-border">
      <div className="container-custom mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
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
            <div className="flex space-x-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-cyan transition-colors"
                aria-label="GitHub"
              >
                <FiGithub className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-cyan transition-colors"
                aria-label="Twitter"
              >
                <FiTwitter className="w-5 h-5" />
              </a>
              <a
                href="mailto:contact@pistonsim.com"
                className="text-text-secondary hover:text-cyan transition-colors"
                aria-label="Email"
              >
                <FiMail className="w-5 h-5" />
              </a>
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

          {/* Resources Links */}
          <div>
            <h3 className="font-display font-semibold text-text-primary mb-4">Resources</h3>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.href}>
                  {link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-text-secondary hover:text-text-primary transition-colors text-sm"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-text-secondary hover:text-text-primary transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  )}
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
            <p className="text-text-tertiary text-sm">
              Built with Next.js · Hosted on Cloudflare Pages
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
