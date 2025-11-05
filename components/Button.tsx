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

export default function Button({
  children,
  href,
  variant = 'primary',
  size = 'md',
  external = false,
  onClick,
  className = '',
}: ButtonProps): React.ReactElement {
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
