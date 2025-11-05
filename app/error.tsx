'use client'

import React from 'react'
import { m } from 'framer-motion'
import Button from '@/components/Button'
import { fadeInUp, fadeInUpTransition } from '@/lib/animations'

interface ErrorProps {
  error: globalThis.Error & {
    digest?: string
    cause?: unknown
  }
  reset: () => void
}

/**
 * Validates that the error object is a proper Error instance
 * @param error - The error to validate
 * @returns The validated error
 */
function validateError(error: unknown): globalThis.Error & { digest?: string; cause?: unknown } {
  // If it's not an Error instance, create a proper Error
  if (!(error instanceof globalThis.Error)) {
    console.error('Invalid error type received:', error)
    const errorMessage = typeof error === 'string' ? error : 'An unknown error occurred'
    // Create a basic Error using the global Error constructor
    const basicError = new globalThis.Error(errorMessage)
    return Object.assign(basicError, {
      digest: undefined,
      cause: error
    })
  }

  return error as globalThis.Error & { digest?: string; cause?: unknown }
}

export default function Error({ error: rawError, reset }: ErrorProps): React.ReactElement {
  // Validate and normalize the error
  const error = validateError(rawError)

  React.useEffect(() => {
    // Log error to error reporting service
    console.error('Application error:', error)

    // Log additional error information if available
    if (error.digest) {
      console.error('Error digest:', error.digest)
    }
    if (error.cause) {
      console.error('Error cause:', error.cause)
    }
  }, [error])

  return (
    <div className="min-h-screen bg-background-primary flex items-center justify-center px-4">
      <m.div
        variants={fadeInUp}
        initial="initial"
        animate="animate"
        transition={fadeInUpTransition}
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
      </m.div>
    </div>
  )
}
