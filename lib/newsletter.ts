import { NewsletterResponse, RateLimitState } from './types'

/**
 * Newsletter service configuration
 */
const NEWSLETTER_CONFIG = {
  endpoint: '/api/newsletter', // Cloudflare Pages Function
  rateLimit: {
    maxAttempts: 3,
    windowMs: 60000, // 1 minute
  },
} as const

/**
 * Submit email to newsletter service (Resend)
 *
 * @param email - Email address to subscribe
 * @returns Promise with subscription result
 */
export async function subscribeToNewsletter(
  email: string
): Promise<NewsletterResponse> {
  try {
    const response = await fetch(NEWSLETTER_CONFIG.endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    })

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}))
      return {
        success: false,
        message: 'Subscription failed',
        error: errorData.message || 'Please try again later',
      }
    }

    // Response successful, return success message
    await response.json()
    return {
      success: true,
      message: 'Successfully subscribed! Check your email for confirmation.',
    }
  } catch (error) {
    return {
      success: false,
      message: 'Network error',
      error: error instanceof Error ? error.message : 'Please check your connection',
    }
  }
}

/**
 * Client-side rate limiting using localStorage
 *
 * @returns Current rate limit state
 */
export function checkRateLimit(): RateLimitState {
  if (typeof window === 'undefined') {
    return { attempts: 0, lastAttempt: 0, isBlocked: false }
  }

  const storageKey = 'newsletter_rate_limit'
  const stored = localStorage.getItem(storageKey)

  if (!stored) {
    return { attempts: 0, lastAttempt: 0, isBlocked: false }
  }

  const state: RateLimitState = JSON.parse(stored)
  const now = Date.now()
  const timeElapsed = now - state.lastAttempt

  // Reset if window has passed
  if (timeElapsed > NEWSLETTER_CONFIG.rateLimit.windowMs) {
    return { attempts: 0, lastAttempt: 0, isBlocked: false }
  }

  // Check if blocked
  const isBlocked = state.attempts >= NEWSLETTER_CONFIG.rateLimit.maxAttempts

  return { ...state, isBlocked }
}

/**
 * Record a submission attempt for rate limiting
 */
export function recordSubmitAttempt(): void {
  if (typeof window === 'undefined') return

  const storageKey = 'newsletter_rate_limit'
  const current = checkRateLimit()

  const newState: RateLimitState = {
    attempts: current.attempts + 1,
    lastAttempt: Date.now(),
    isBlocked: current.attempts + 1 >= NEWSLETTER_CONFIG.rateLimit.maxAttempts,
  }

  localStorage.setItem(storageKey, JSON.stringify(newState))
}

/**
 * Clear rate limit (useful for testing)
 */
export function clearRateLimit(): void {
  if (typeof window === 'undefined') return
  localStorage.removeItem('newsletter_rate_limit')
}
