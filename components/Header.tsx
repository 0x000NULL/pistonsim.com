'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect, useCallback, useId } from 'react'
import { m, AnimatePresence } from 'framer-motion'
import { FiMenu, FiX } from '@/lib/icons'
import { slideDown, slideDownTransition } from '@/lib/animations'
import { NavLink, ROUTES } from '@/lib/types'

/**
 * Main navigation header component with responsive mobile menu
 *
 * Features:
 * - Fixed positioning at top of viewport
 * - Responsive mobile menu with slide animation
 * - Automatic menu close on route change
 * - Escape key handler for mobile menu
 * - Active route highlighting
 * - Accessible with ARIA attributes
 * - Smooth animations via Framer Motion
 *
 * The component adapts to screen size:
 * - Desktop: Horizontal navigation bar
 * - Mobile: Hamburger menu with full-screen overlay
 *
 * @returns Fixed header with navigation links and mobile menu
 *
 * @example
 * ```tsx
 * <Header />
 * ```
 */
export default function Header(): React.ReactElement {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()
  const menuId = useId()

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  // Memoized Escape key handler for mobile menu
  const handleEscape = useCallback((e: KeyboardEvent): void => {
    if (e.key === 'Escape' && isMenuOpen) {
      setIsMenuOpen(false)
    }
  }, [isMenuOpen])

  useEffect(() => {
    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [handleEscape])

  const navLinks: NavLink[] = [
    { href: ROUTES.HOME, label: 'Home' },
    { href: ROUTES.FEATURES, label: 'Features' },
    { href: ROUTES.ABOUT, label: 'About' },
    { href: ROUTES.DOWNLOAD, label: 'Download' },
    { href: ROUTES.FAQ, label: 'FAQ' },
  ]

  return (
    <m.header
      variants={slideDown}
      initial="initial"
      animate="animate"
      transition={slideDownTransition}
      className="fixed top-0 left-0 right-0 z-50 bg-background-primary/95 backdrop-blur-lg border-b-2 border-dashed border-border"
    >
      <nav className="container-custom mx-auto py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href={ROUTES.HOME} className="flex items-center space-x-2 group">
            <span className="font-display font-bold text-2xl tracking-tight text-cyan">
              PISTON
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-text-secondary hover:text-text-primary transition-colors font-medium relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent-primary transition-all group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-text-primary p-2 hover:bg-background-secondary rounded-md transition-colors"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
            aria-controls={menuId}
          >
            {isMenuOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <m.div
              id={menuId}
              role="navigation"
              aria-label="Mobile navigation"
              initial={{ opacity: 0, scaleY: 0 }}
              animate={{ opacity: 1, scaleY: 1 }}
              exit={{ opacity: 0, scaleY: 0 }}
              transition={{ duration: 0.3 }}
              style={{ originY: 0 }}
              className="md:hidden overflow-hidden"
            >
              <div className="flex flex-col space-y-4 pt-4 pb-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-text-secondary hover:text-text-primary transition-colors font-medium py-2"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </m.div>
          )}
        </AnimatePresence>
      </nav>
    </m.header>
  )
}
