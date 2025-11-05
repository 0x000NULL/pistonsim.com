'use client'

import { ComponentType, createElement, ReactNode } from 'react'
import { m, MotionProps } from 'framer-motion'
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion'

type AccessibleMotionProps = MotionProps & {
  children: ReactNode
  as?: keyof typeof m
  fallback?: ReactNode
}

/**
 * AccessibleMotion wrapper that respects user's reduced motion preferences.
 *
 * Automatically disables animations for users who prefer reduced motion,
 * rendering static content instead. Prevents hydration mismatches by handling
 * the undefined state during SSR.
 *
 * @param children - Content to render
 * @param as - The HTML element to render as (default: 'div')
 * @param fallback - Optional fallback content during hydration
 * @param ...props - All framer-motion props (variants, animate, etc.)
 *
 * @example
 * ```tsx
 * <AccessibleMotion
 *   variants={fadeInUp}
 *   initial="initial"
 *   animate="animate"
 * >
 *   <h1>Animated Heading</h1>
 * </AccessibleMotion>
 * ```
 */
export default function AccessibleMotion({
  children,
  as = 'div',
  fallback,
  ...props
}: AccessibleMotionProps): React.ReactElement {
  const prefersReducedMotion = usePrefersReducedMotion()

  // During SSR or initial hydration, show fallback or children without animation
  if (prefersReducedMotion === undefined) {
    if (fallback) {
      return <>{fallback}</>
    }
    // Render as static element during hydration
    const staticProps = { ...props } as Record<string, unknown>
    // Remove animation-specific props
    delete staticProps.initial
    delete staticProps.animate
    delete staticProps.variants
    delete staticProps.transition
    delete staticProps.whileInView
    return createElement(as, staticProps, children)
  }

  // If user prefers reduced motion, skip animations
  if (prefersReducedMotion) {
    const { initial: _initial, animate: _animate, variants: _variants, transition: _transition, whileInView: _whileInView, ...restProps } = props
    return createElement(as, restProps, children)
  }

  // Full animation support
  const Component = m[as] as ComponentType<MotionProps>
  return <Component {...props}>{children}</Component>
}
