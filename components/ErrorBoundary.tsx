'use client'

import React, { Component, ReactNode } from 'react'
import Button from './Button'

interface Props {
  children: ReactNode
  fallback?: ReactNode
  onError?: (error: Error, errorInfo: React.ErrorInfo) => void
}

interface State {
  hasError: boolean
  error: Error | null
}

/**
 * Error reporting service interface
 * Implement this in your error tracking service (e.g., Sentry, LogRocket)
 */
interface ErrorReporter {
  captureException(error: Error, context?: Record<string, unknown>): void
}

declare global {
  interface Window {
    errorReporter?: ErrorReporter
  }
}

/**
 * ErrorBoundary component catches JavaScript errors anywhere in the child component tree,
 * logs those errors, and displays a fallback UI instead of crashing the entire app.
 *
 * @example
 * ```tsx
 * <ErrorBoundary>
 *   <YourComponent />
 * </ErrorBoundary>
 * ```
 */
export default class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error: Error): State {
    // Update state so the next render will show the fallback UI
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    // Development logging
    if (process.env.NODE_ENV === 'development') {
      console.error('ErrorBoundary caught an error:', error, errorInfo)
    }

    // Production error tracking
    if (process.env.NODE_ENV === 'production') {
      if (typeof window !== 'undefined' && window.errorReporter) {
        window.errorReporter.captureException(error, {
          extra: { errorInfo },
          tags: { boundary: 'root' },
        })
      } else {
        // Fallback: Log to console in production if no reporter available
        console.error('Error boundary caught:', error)
      }
    }

    // Call custom error handler if provided
    this.props.onError?.(error, errorInfo)
  }

  render(): ReactNode {
    if (this.state.hasError) {
      // Use custom fallback if provided, otherwise use default
      return this.props.fallback ?? (
        <div className="min-h-[400px] flex items-center justify-center p-4">
          <div className="text-center max-w-md">
            <h2 className="font-display text-2xl font-bold text-accent-primary mb-4">
              Component Error
            </h2>
            <p className="text-text-secondary mb-6">
              A component failed to render. Please try refreshing the page.
            </p>
            {process.env.NODE_ENV === 'development' && this.state.error && (
              <details className="text-left mb-6">
                <summary className="cursor-pointer text-text-tertiary text-sm mb-2">
                  Error details (dev only)
                </summary>
                <pre className="text-xs overflow-auto p-4 bg-background-secondary border border-border rounded">
                  {this.state.error.message}
                  {'\n\n'}
                  {this.state.error.stack}
                </pre>
              </details>
            )}
            <Button
              onClick={() => this.setState({ hasError: false, error: null })}
              variant="primary"
            >
              Try Again
            </Button>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}
