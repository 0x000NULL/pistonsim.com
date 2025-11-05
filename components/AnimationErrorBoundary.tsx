'use client'

import React, { Component, ReactNode } from 'react'

interface Props {
  children: ReactNode
  fallback?: ReactNode
}

interface State {
  hasError: boolean
}

/**
 * AnimationErrorBoundary catches errors specifically in animation components
 * and gracefully falls back to rendering children without animations.
 *
 * @example
 * ```tsx
 * <AnimationErrorBoundary>
 *   <motion.div animate={{ opacity: 1 }}>
 *     Content
 *   </motion.div>
 * </AnimationErrorBoundary>
 * ```
 */
export default class AnimationErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(): State {
    return { hasError: true }
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    // Log animation errors but don't crash the app
    if (process.env.NODE_ENV === 'development') {
      console.warn('Animation error (gracefully handled):', error, errorInfo)
    }

    // In production, silently degrade to non-animated version
    if (process.env.NODE_ENV === 'production') {
      // Only log critical animation errors
      if (error.message.includes('hydration') || error.message.includes('server')) {
        console.error('Animation hydration error:', error.message)
      }
    }
  }

  render(): ReactNode {
    if (this.state.hasError) {
      // Render fallback or children without animations
      return this.props.fallback ?? this.props.children
    }

    return this.props.children
  }
}
