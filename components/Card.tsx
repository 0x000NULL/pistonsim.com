import { ReactNode, memo } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
  dotted?: boolean
}

/**
 * Generic Card component for displaying content in a styled container.
 * Supports customizable border styles and hover effects.
 *
 * @param children - Content to display inside the card
 * @param className - Optional additional CSS classes
 * @param hover - If true (default), border changes to accent color on hover
 * @param dotted - If true (default), uses dashed border; otherwise solid border
 *
 * @example
 * ```tsx
 * <Card>
 *   <h3>Card Title</h3>
 *   <p>Card content goes here</p>
 * </Card>
 *
 * <Card hover={false} dotted={false}>
 *   Static card with solid border
 * </Card>
 * ```
 */
const Card = memo(function Card({ children, className = '', hover = true, dotted = true }: CardProps): React.ReactElement {
  const borderClass = dotted ? 'border-2 border-dashed' : 'border'
  const hoverClass = hover ? 'hover:border-accent-primary' : ''

  return (
    <div
      className={`bg-background-secondary ${borderClass} border-border ${hoverClass} rounded-none p-6 transition-colors duration-300 ${className}`}
    >
      {children}
    </div>
  )
})

export default Card
