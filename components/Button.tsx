'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface ButtonProps {
  href?: string
  onClick?: () => void
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  external?: boolean
}

const Button = ({
  href,
  onClick,
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  external = false
}: ButtonProps) => {
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

export default Button
