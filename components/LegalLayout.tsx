import { ReactNode } from 'react'
import Link from 'next/link'
import Breadcrumb from '@/components/Breadcrumb'
import { ROUTES } from '@/lib/types'

interface LegalLayoutProps {
  title: string
  lastUpdated: string
  children: ReactNode
}

/**
 * Consistent layout wrapper for legal pages
 *
 * Features:
 * - Standardized header with title and last updated date
 * - Breadcrumb navigation with structured data
 * - Readable typography and spacing
 * - Print-friendly styling
 *
 * @param title - Page title (e.g., "Terms of Service")
 * @param lastUpdated - Last update date string
 * @param children - Page content
 */
export default function LegalLayout({
  title,
  lastUpdated,
  children,
}: LegalLayoutProps): React.ReactElement {
  return (
    <main className="min-h-screen bg-background py-24 px-6">
      <div className="container-custom mx-auto max-w-4xl">
        {/* Breadcrumb */}
        <Breadcrumb
          items={[
            { label: 'Home', href: ROUTES.HOME },
            { label: title },
          ]}
          className="mb-8"
        />

        {/* Header */}
        <header className="mb-12">
          <h1 className="font-display font-bold text-4xl md:text-5xl text-cyan mb-4">
            {title}
          </h1>
          <p className="text-text-tertiary text-sm">
            Last updated: {lastUpdated}
          </p>
        </header>

        {/* Content */}
        <div className="prose prose-invert prose-cyan max-w-none">
          <div className="border-2 border-dashed border-border p-8 bg-background-secondary">
            {children}
          </div>
        </div>

        {/* Footer navigation */}
        <nav className="mt-12 pt-8 border-t-2 border-dashed border-border">
          <Link
            href={ROUTES.HOME}
            className="inline-flex items-center gap-2 text-accent-primary hover:text-accent-secondary transition-colors font-display font-semibold"
          >
            ← Back to Home
          </Link>
        </nav>
      </div>
    </main>
  )
}
