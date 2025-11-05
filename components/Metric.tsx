'use client'

import { memo } from 'react'
import { m } from 'framer-motion'

interface MetricProps {
  value: string | number
  label: string
  suffix?: string
  color?: 'red' | 'blue' | 'green' | 'orange'
  className?: string
}

/**
 * Metric component displays a statistic or KPI with animation.
 * Features a large value with optional suffix and descriptive label.
 * Animates in when scrolled into view.
 *
 * @param value - The metric value (number or string)
 * @param label - Descriptive label for the metric
 * @param suffix - Optional suffix (e.g., '%', '+', 'ms')
 * @param color - Color theme: 'red' (default), 'blue', 'green', or 'orange'
 * @param className - Optional additional CSS classes
 *
 * @example
 * ```tsx
 * <Metric value="<7" suffix="%" label="Target Error" color="red" />
 * <Metric value={222} label="Tests Passing" color="green" />
 * ```
 */
const Metric = memo(function Metric({ value, label, suffix = '', color = 'red', className = '' }: MetricProps): React.ReactElement {
  const colorClasses = {
    red: 'text-accent-primary',
    blue: 'text-accent-secondary',
    green: 'text-success',
    orange: 'text-accent-tertiary'
  }

  return (
    <m.div
      className={`text-center ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className={`font-mono font-bold text-4xl md:text-5xl ${colorClasses[color]} mb-2`}>
        {value}{suffix}
      </div>
      <div className="text-text-secondary text-sm md:text-base font-medium">
        {label}
      </div>
    </m.div>
  )
})

export default Metric
