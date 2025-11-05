import { ReactNode } from 'react'

interface FeatureCardProps {
  icon: ReactNode
  title: string
  description: string
  className?: string
}

export default function FeatureCard({ icon, title, description, className = '' }: FeatureCardProps): React.ReactElement {
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
}
