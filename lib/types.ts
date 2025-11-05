import { ReactNode } from 'react'

// Navigation
export interface NavLink {
  href: string
  label: string
}

// Features
export interface FeatureItem {
  icon: ReactNode
  title: string
  description: string
}

// Metrics
export interface MetricData {
  value: string
  label: string
}

// Route constants
export const ROUTES = {
  HOME: '/',
  FEATURES: '/features/',
  ABOUT: '/about/',
  FAQ: '/faq/',
  TERMS: '/terms/',
  PRIVACY: '/privacy/',
  LICENSE: '/license/',
} as const

export type Route = typeof ROUTES[keyof typeof ROUTES]

// Newsletter
export interface NewsletterFormState {
  email: string
  isSubmitting: boolean
  isSuccess: boolean
  error: string | null
}

export interface NewsletterResponse {
  success: boolean
  message: string
  error?: string
}

export interface NewsletterValidation {
  isValid: boolean
  error: string | null
}

export interface RateLimitState {
  attempts: number
  lastAttempt: number
  isBlocked: boolean
}

// FAQ
export interface FAQItem {
  question: string
  answer: string
  category?: string
}

// Testimonials
export interface TestimonialData {
  quote: string
  author: string
  role?: string
  company?: string
  metric?: string
  avatar?: string
}
