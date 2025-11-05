import { ReactNode, memo } from 'react'

interface FeatureCardProps {
  icon: ReactNode
  title: string
  description: string
  className?: string
}

/**
 * FeatureCard component displays a feature with an icon, title, and description.
 * Features a dashed border that changes to accent color on hover.
 *
 * @param icon - React icon or SVG element to display at the top
 * @param title - Feature title text
 * @param description - Feature description text
 * @param className - Optional additional CSS classes
 *
 * @example
 * ```tsx
 * import { FiActivity } from '@/lib/icons'
 *
 * <FeatureCard
 *   icon={<FiActivity />}
 *   title="Virtual Dyno"
 *   description="Fully validated inertia dyno simulation"
 * />
 * ```
 */
const FeatureCard = memo(function FeatureCard({ icon, title, description, className = '' }: FeatureCardProps): React.ReactElement {
  return (
    <div className={`border-2 border-dashed border-border hover:border-accent-primary transition-colors duration-300 p-8 bg-background-secondary ${className}`}>
      <div className="text-accent-primary text-5xl mb-6">
        {icon}
      </div>
      <h3 className="font-display font-bold text-xl mb-3 text-text-primary">
        {title}
      </h3>
      <p className="text-text-secondary text-sm leading-relaxed">
        {description}
      </p>
    </div>
  )
})

export default FeatureCard
