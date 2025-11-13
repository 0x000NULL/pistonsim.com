'use client'

import { useEffect } from 'react'
import { onCLS, onFID, onFCP, onLCP, onTTFB, onINP, type Metric } from 'web-vitals'

/**
 * Web Vitals performance monitoring component
 *
 * Tracks Core Web Vitals and reports them to console in development.
 * In production, you can send these to an analytics endpoint.
 *
 * Core Web Vitals:
 * - LCP (Largest Contentful Paint): < 2.5s good
 * - FID (First Input Delay): < 100ms good (deprecated, use INP)
 * - INP (Interaction to Next Paint): < 200ms good
 * - CLS (Cumulative Layout Shift): < 0.1 good
 *
 * Other metrics:
 * - FCP (First Contentful Paint): < 1.8s good
 * - TTFB (Time to First Byte): < 800ms good
 */

/**
 * Handles the reporting of Web Vitals metrics
 *
 * @param metric - The Web Vital metric data
 */
function sendToAnalytics(metric: Metric): void {
  const body = JSON.stringify({
    name: metric.name,
    value: metric.value,
    rating: metric.rating,
    delta: metric.delta,
    id: metric.id,
    navigationType: metric.navigationType,
  })

  // In development, log to console
  if (process.env.NODE_ENV === 'development') {
    console.log(`[Web Vitals] ${metric.name}:`, {
      value: metric.value,
      rating: metric.rating,
      delta: metric.delta,
    })
  }

  // In production, send to analytics endpoint
  // Uncomment and configure when ready to track in production
  /*
  if (navigator.sendBeacon) {
    navigator.sendBeacon('/api/analytics', body)
  } else {
    fetch('/api/analytics', {
      method: 'POST',
      body,
      headers: { 'Content-Type': 'application/json' },
      keepalive: true,
    })
  }
  */
}

/**
 * Component that initializes Web Vitals tracking
 * Place this in your root layout to track performance metrics site-wide
 *
 * @returns null (this component doesn't render anything)
 */
export default function WebVitals(): null {
  useEffect(() => {
    // Track all Core Web Vitals
    onCLS(sendToAnalytics)
    onFID(sendToAnalytics)
    onFCP(sendToAnalytics)
    onLCP(sendToAnalytics)
    onTTFB(sendToAnalytics)
    onINP(sendToAnalytics)
  }, [])

  return null
}
