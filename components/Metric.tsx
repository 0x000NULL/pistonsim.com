'use client'

import { motion } from 'framer-motion'

interface MetricProps {
  value: string | number
  label: string
  suffix?: string
  color?: 'red' | 'blue' | 'green' | 'orange'
  className?: string
}

export default function Metric({ value, label, suffix = '', color = 'red', className = '' }: MetricProps): React.ReactElement {
  const colorClasses = {
    red: 'text-accent-primary',
    blue: 'text-accent-secondary',
    green: 'text-success',
    orange: 'text-accent-tertiary'
  }

  return (
    <motion.div
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
    </motion.div>
  )
}
