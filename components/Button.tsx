'use client'

import Link from 'next/link'
import { ReactNode } from 'react'

type BaseButtonProps = {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

type LinkButtonProps = BaseButtonProps & {
  href: string
  external?: boolean
  onClick?: never
}

type ClickButtonProps = BaseButtonProps & {
  onClick: () => void
  href?: never
  external?: never
}

type ButtonProps = LinkButtonProps | ClickButtonProps

/**
 * Versatile Button component that can render as either a link or a button.
 * Supports internal links (Next.js Link), external links, and click handlers.
 * Provides three visual variants and three size options.
 *
 * @param children - Button content (text, icons, or other React nodes)
 * @param href - URL for link buttons (internal or external)
 * @param variant - Visual style: 'primary' (default), 'secondary', or 'ghost'
 * @param size - Button size: 'sm', 'md' (default), or 'lg'
 * @param external - If true, opens link in new tab with security attributes
 * @param onClick - Click handler for button elements (mutually exclusive with href)
 * @param className - Additional CSS classes to apply
 *
 * @example
 * ```tsx
 * // Internal link
 * <Button href="/features">View Features</Button>
 *
 * // External link
 * <Button href="https://github.com" external>GitHub</Button>
 *
 * // Click button
 * <Button onClick={handleClick} variant="secondary" size="lg">
 *   Click Me
 * </Button>
 * ```
 */
export default function Button({
  children,
  href,
  variant = 'primary',
  size = 'md',
  external = false,
  onClick,
  className = '',
}: ButtonProps): React.ReactElement {
  // Runtime validation: ensure mutually exclusive props aren't both provided
  if (process.env.NODE_ENV === 'development') {
    if (href && onClick) {
      throw new Error(
        'Button: Cannot use both "href" and "onClick" props. Please use only one.'
      )
    }
    if (external && !href) {
      console.warn(
        'Button: "external" prop has no effect without "href". Consider removing it.'
      )
    }
  }

  const baseClasses = 'inline-flex items-center justify-center font-display font-semibold rounded-lg transition-all duration-250'

  const variantClasses = {
    primary: 'bg-accent-primary text-white hover:bg-accent-secondary',
    secondary: 'border border-accent-primary text-accent-primary hover:bg-accent-primary hover:text-white',
    ghost: 'text-text-primary hover:text-accent-primary'
  }

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  }

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={classes}
        >
          {children}
        </a>
      )
    }

    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    )
  }

  return (
    <button
      onClick={onClick}
      className={classes}
    >
      {children}
    </button>
  )
}
