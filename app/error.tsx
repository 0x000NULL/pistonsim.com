'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Button from '@/components/Button'

interface ErrorProps {
  error: Error & { digest?: string }
  reset: () => void
}

export default function Error({ error, reset }: ErrorProps): React.ReactElement {
  React.useEffect(() => {
    // Log error to error reporting service
    console.error('Application error:', error)
  }, [error])

  return (
    <div className="min-h-screen bg-background-primary flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-md w-full text-center"
      >
        <h1 className="font-display text-4xl md:text-5xl font-bold text-accent-primary mb-4">
          Something went wrong
        </h1>
        <p className="text-text-secondary text-lg mb-8">
          We encountered an unexpected error. Please try again.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button onClick={reset} variant="primary" size="md">
            Try again
          </Button>
          <Button href="/" variant="secondary" size="md">
            Go home
          </Button>
        </div>
        {process.env.NODE_ENV === 'development' && error.message && (
          <details className="mt-8 text-left">
            <summary className="cursor-pointer text-text-tertiary hover:text-text-secondary text-sm mb-2">
              Error details (development only)
            </summary>
            <pre className="mt-4 p-4 bg-background-secondary border-2 border-dashed border-border rounded text-xs overflow-auto text-text-secondary">
              {error.message}
              {error.stack && `\n\n${error.stack}`}
            </pre>
          </details>
        )}
      </motion.div>
    </div>
  )
}
