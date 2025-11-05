import { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
  dotted?: boolean
}

export default function Card({ children, className = '', hover = true, dotted = true }: CardProps): React.ReactElement {
  const borderClass = dotted ? 'border-2 border-dashed' : 'border'
  const hoverClass = hover ? 'hover:border-accent-primary' : ''

  return (
    <div
      className={`bg-background-secondary ${borderClass} border-border ${hoverClass} rounded-none p-6 transition-colors duration-300 ${className}`}
    >
      {children}
    </div>
  )
}
