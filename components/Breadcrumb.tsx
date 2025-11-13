import Link from 'next/link'
import { FiChevronRight } from '@/lib/icons'

interface BreadcrumbItem {
  label: string
  href?: string
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
  className?: string
}

/**
 * Breadcrumb navigation component for improved user orientation
 *
 * Features:
 * - Accessible navigation with proper ARIA attributes
 * - Visual separator between items
 * - Current page is not linked
 * - Structured data markup for SEO
 *
 * @param items - Array of breadcrumb items with label and optional href
 * @param className - Optional CSS classes
 *
 * @example
 * ```tsx
 * <Breadcrumb
 *   items={[
 *     { label: 'Home', href: '/' },
 *     { label: 'Legal', href: '/legal/' },
 *     { label: 'Privacy Policy' }
 *   ]}
 * />
 * ```
 */
export default function Breadcrumb({ items, className = '' }: BreadcrumbProps): React.ReactElement {
  return (
    <nav aria-label="Breadcrumb" className={`text-sm ${className}`.trim()}>
      <ol className="flex items-center space-x-2" itemScope itemType="https://schema.org/BreadcrumbList">
        {items.map((item, index) => {
          const isLast = index === items.length - 1

          return (
            <li
              key={index}
              className="flex items-center"
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/ListItem"
            >
              {!isLast && item.href ? (
                <>
                  <Link
                    href={item.href}
                    className="text-text-secondary hover:text-accent-primary transition-colors"
                    itemProp="item"
                  >
                    <span itemProp="name">{item.label}</span>
                  </Link>
                  <meta itemProp="position" content={String(index + 1)} />
                  <FiChevronRight
                    className="w-4 h-4 mx-2 text-text-tertiary"
                    aria-hidden="true"
                  />
                </>
              ) : (
                <>
                  <span
                    className="text-text-primary"
                    itemProp="name"
                    aria-current={isLast ? 'page' : undefined}
                  >
                    {item.label}
                  </span>
                  <meta itemProp="position" content={String(index + 1)} />
                </>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
