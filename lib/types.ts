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

// Animation configurations
export interface AnimationConfig {
  initial: { opacity: number; y: number }
  animate: { opacity: number; y: number }
  transition: { duration: number; delay?: number }
}

// Route constants
export const ROUTES = {
  HOME: '/',
  FEATURES: '/features/',
  ABOUT: '/about/',
} as const

export type Route = typeof ROUTES[keyof typeof ROUTES]
