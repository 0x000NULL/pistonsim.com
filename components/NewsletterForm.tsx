'use client'

import { useState, useCallback, useEffect, FormEvent } from 'react'
import { validateNewsletterEmail } from '@/lib/validation'
import { subscribeToNewsletter, checkRateLimit, recordSubmitAttempt } from '@/lib/newsletter'
import { NewsletterFormState } from '@/lib/types'
import { FiSend, FiCheck, FiAlertTriangle } from '@/lib/icons'

interface NewsletterFormProps {
  variant?: 'inline' | 'footer'
  placeholder?: string
  className?: string
}

/**
 * Newsletter subscription form with validation and accessibility
 *
 * Features:
 * - Real-time email validation
 * - Client-side rate limiting
 * - Accessible error announcements
 * - Loading states
 * - Success/error feedback
 *
 * @param variant - Visual style: 'inline' or 'footer'
 * @param placeholder - Custom placeholder text
 * @param className - Additional CSS classes
 */
export default function NewsletterForm({
  variant = 'inline',
  placeholder = 'Enter your email',
  className = '',
}: NewsletterFormProps): React.ReactElement {
  const [formState, setFormState] = useState<NewsletterFormState>({
    email: '',
    isSubmitting: false,
    isSuccess: false,
    error: null,
  })

  const handleSubmit = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault()

      // Check rate limiting
      const rateLimit = checkRateLimit()
      if (rateLimit.isBlocked) {
        const error = 'Too many attempts. Please try again in a minute.'
        setFormState((prev) => ({ ...prev, error }))
        return
      }

      // Validate email
      const validation = validateNewsletterEmail(formState.email)
      if (!validation.isValid) {
        setFormState((prev) => ({ ...prev, error: validation.error }))
        return
      }

      // Submit
      setFormState((prev) => ({ ...prev, isSubmitting: true, error: null }))

      recordSubmitAttempt()

      const result = await subscribeToNewsletter(formState.email)

      if (result.success) {
        setFormState({
          email: '',
          isSubmitting: false,
          isSuccess: true,
          error: null,
        })

        // Reset success state after 5 seconds
        setTimeout(() => {
          setFormState((prev) => ({ ...prev, isSuccess: false }))
        }, 5000)
      } else {
        setFormState((prev) => ({
          ...prev,
          isSubmitting: false,
          error: result.error || result.message,
        }))
      }
    },
    [formState.email]
  )

  const handleEmailChange = useCallback((value: string) => {
    setFormState((prev) => ({
      ...prev,
      email: value,
      error: null,
      isSuccess: false,
    }))
  }, [])

  // Real-time validation with debouncing
  useEffect(() => {
    if (!formState.email || formState.isSubmitting || formState.isSuccess) {
      return
    }

    const timeoutId = setTimeout(() => {
      const validation = validateNewsletterEmail(formState.email)
      if (!validation.isValid && formState.email.length > 0) {
        setFormState((prev) => ({ ...prev, error: validation.error }))
      }
    }, 800) // Debounce for 800ms

    return () => clearTimeout(timeoutId)
  }, [formState.email, formState.isSubmitting, formState.isSuccess])

  const isFooter = variant === 'footer'

  return (
    <div className={className}>
      <form
        onSubmit={handleSubmit}
        className={`flex ${isFooter ? 'flex-col sm:flex-row gap-3' : 'flex-col gap-4'}`}
        noValidate
      >
        <div className="flex-1">
          <label htmlFor="newsletter-email" className="sr-only">
            Email address for newsletter
          </label>
          <input
            id="newsletter-email"
            type="email"
            value={formState.email}
            onChange={(e) => handleEmailChange(e.target.value)}
            placeholder={placeholder}
            disabled={formState.isSubmitting || formState.isSuccess}
            aria-invalid={!!formState.error}
            aria-describedby={formState.error ? 'newsletter-error' : undefined}
            className={`
              w-full px-4 py-3
              bg-background-secondary
              border-2 border-dashed
              ${formState.error ? 'border-red-500' : 'border-border hover:border-border-hover'}
              text-text-primary placeholder-text-tertiary
              rounded-lg
              transition-colors duration-200
              focus:outline-none focus:border-accent-primary
              disabled:opacity-50 disabled:cursor-not-allowed
              font-body
            `}
          />
        </div>

        <button
          type="submit"
          disabled={formState.isSubmitting || formState.isSuccess}
          className={`
            inline-flex items-center justify-center gap-2
            px-6 py-3
            ${formState.isSuccess ? 'bg-green-600' : 'bg-accent-primary hover:bg-accent-secondary'}
            text-white font-display font-semibold
            rounded-lg
            transition-all duration-250
            disabled:opacity-50 disabled:cursor-not-allowed
            focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent-primary
            ${isFooter ? 'sm:w-auto w-full' : 'w-full'}
          `}
          aria-label={formState.isSuccess ? 'Subscribed successfully' : 'Subscribe to newsletter'}
        >
          {formState.isSubmitting && (
            <>
              <span className="animate-pulse">⏳</span>
              <span>Subscribing...</span>
            </>
          )}
          {formState.isSuccess && (
            <>
              <FiCheck className="w-4 h-4" aria-hidden="true" />
              <span>Subscribed!</span>
            </>
          )}
          {!formState.isSubmitting && !formState.isSuccess && (
            <>
              <FiSend className="w-4 h-4" aria-hidden="true" />
              <span>Subscribe</span>
            </>
          )}
        </button>
      </form>

      {formState.error && (
        <div
          id="newsletter-error"
          className="mt-3 flex items-start gap-2 text-red-500 text-sm"
          role="alert"
        >
          <FiAlertTriangle className="w-4 h-4 mt-0.5 flex-shrink-0" aria-hidden="true" />
          <span>{formState.error}</span>
        </div>
      )}

      {formState.isSuccess && (
        <div className="mt-3 flex items-start gap-2 text-green-500 text-sm" role="status">
          <FiCheck className="w-4 h-4 mt-0.5 flex-shrink-0" aria-hidden="true" />
          <span>Check your email for confirmation!</span>
        </div>
      )}

      {/* Screen reader announcements */}
      <div className="sr-only" role="status" aria-live="polite" aria-atomic="true">
        {formState.isSubmitting && 'Subscribing to newsletter...'}
        {formState.isSuccess && 'Successfully subscribed! Check your email for confirmation.'}
        {formState.error && `Error: ${formState.error}`}
      </div>
    </div>
  )
}
