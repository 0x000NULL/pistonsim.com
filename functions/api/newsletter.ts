/**
 * Cloudflare Pages Function for Newsletter Signup
 *
 * This serverless function securely handles newsletter subscriptions via the Resend API.
 * It keeps the API key server-side and provides rate limiting, validation, and error handling.
 *
 * Environment Variables Required:
 * - RESEND_API_KEY: Your Resend API key (configured in Cloudflare Pages dashboard)
 * - RESEND_AUDIENCE_ID: Your Resend audience ID
 */

interface EventContext {
  request: Request
  env: {
    RESEND_API_KEY: string
    RESEND_AUDIENCE_ID: string
    [key: string]: unknown
  }
  waitUntil(promise: Promise<unknown>): void
}

interface NewsletterRequest {
  email: string
}

interface NewsletterResponse {
  success: boolean
  message: string
  error?: string
}

// Simple in-memory rate limiting (resets on cold start)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>()

/**
 * Validates email format using RFC 5322 compliant regex
 */
function validateEmail(email: string): boolean {
  const emailRegex =
    /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
  return emailRegex.test(email)
}

/**
 * Check and update rate limit for an IP address
 */
function checkRateLimit(ip: string): boolean {
  const now = Date.now()
  const limit = rateLimitMap.get(ip)

  if (!limit || now > limit.resetTime) {
    // New entry or expired window
    rateLimitMap.set(ip, { count: 1, resetTime: now + 60000 }) // 60 second window
    return true
  }

  if (limit.count >= 5) {
    // Max 5 attempts per minute
    return false
  }

  limit.count++
  return true
}

/**
 * POST /api/newsletter
 * Subscribes an email address to the newsletter via Resend API
 */
export async function onRequestPost(context: EventContext): Promise<Response> {
  const { request, env } = context

  // Get origin for CORS validation
  const origin = request.headers.get('Origin') || ''
  const allowedOrigins = [
    'https://pistonsim.com',
    'https://www.pistonsim.com',
    'http://localhost:3000', // Development
    'http://localhost:8788', // Wrangler dev
  ]

  const isAllowedOrigin = allowedOrigins.some((allowed) => origin.startsWith(allowed))
  const allowOrigin = isAllowedOrigin ? origin : 'https://pistonsim.com'

  // CORS headers with restricted origin
  const corsHeaders = {
    'Access-Control-Allow-Origin': allowOrigin,
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Credentials': 'true',
    'Content-Type': 'application/json',
  }

  // Handle OPTIONS preflight request
  if (request.method === 'OPTIONS') {
    return new Response(null, {
      headers: corsHeaders,
    })
  }

  // Only allow POST
  if (request.method !== 'POST') {
    return new Response(
      JSON.stringify({
        success: false,
        message: 'Method not allowed',
        error: 'Only POST requests are accepted',
      } as NewsletterResponse),
      {
        status: 405,
        headers: corsHeaders,
      }
    )
  }

  try {
    // Rate limiting by IP
    const ip = request.headers.get('CF-Connecting-IP') || 'unknown'
    if (!checkRateLimit(ip)) {
      return new Response(
        JSON.stringify({
          success: false,
          message: 'Too many requests',
          error: 'Please try again in a minute',
        } as NewsletterResponse),
        {
          status: 429,
          headers: corsHeaders,
        }
      )
    }

    // Parse request body
    const body = (await request.json()) as NewsletterRequest

    if (!body.email || typeof body.email !== 'string') {
      return new Response(
        JSON.stringify({
          success: false,
          message: 'Invalid request',
          error: 'Email address is required',
        } as NewsletterResponse),
        {
          status: 400,
          headers: corsHeaders,
        }
      )
    }

    // Validate email format
    const email = body.email.trim()
    if (!validateEmail(email)) {
      return new Response(
        JSON.stringify({
          success: false,
          message: 'Invalid email',
          error: 'Please enter a valid email address',
        } as NewsletterResponse),
        {
          status: 400,
          headers: corsHeaders,
        }
      )
    }

    // Check for required environment variables
    if (!env.RESEND_API_KEY || !env.RESEND_AUDIENCE_ID) {
      console.error('Missing required environment variables')
      return new Response(
        JSON.stringify({
          success: false,
          message: 'Configuration error',
          error: 'Newsletter service is not properly configured',
        } as NewsletterResponse),
        {
          status: 500,
          headers: corsHeaders,
        }
      )
    }

    // Call Resend API to add contact to audience
    const resendResponse = await fetch('https://api.resend.com/contacts', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        audience_id: env.RESEND_AUDIENCE_ID,
      }),
    })

    const resendData = await resendResponse.json()

    if (!resendResponse.ok) {
      // Log error details server-side
      console.error('Resend API error:', resendData)

      // Return generic error to client
      return new Response(
        JSON.stringify({
          success: false,
          message: 'Subscription failed',
          error:
            resendResponse.status === 409
              ? 'This email is already subscribed'
              : 'Please try again later',
        } as NewsletterResponse),
        {
          status: resendResponse.status,
          headers: corsHeaders,
        }
      )
    }

    // Success!
    return new Response(
      JSON.stringify({
        success: true,
        message: 'Successfully subscribed! Check your email for confirmation.',
      } as NewsletterResponse),
      {
        status: 200,
        headers: corsHeaders,
      }
    )
  } catch (error) {
    // Log error details server-side
    console.error('Newsletter subscription error:', error)

    // Return generic error to client
    return new Response(
      JSON.stringify({
        success: false,
        message: 'Subscription failed',
        error: 'An unexpected error occurred. Please try again later.',
      } as NewsletterResponse),
      {
        status: 500,
        headers: corsHeaders,
      }
    )
  }
}
