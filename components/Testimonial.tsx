import Image from 'next/image'
import { TestimonialData } from '@/lib/types'

interface TestimonialProps extends TestimonialData {
  className?: string
}

/**
 * Testimonial card component
 *
 * Displays user testimonials with quote, attribution, and optional metrics.
 * Follows the site's design system with dashed borders and cyan accents.
 *
 * @param quote - The testimonial quote
 * @param author - Name of the person giving the testimonial
 * @param role - Optional job title or role
 * @param company - Optional company name
 * @param metric - Optional key metric or achievement
 * @param avatar - Optional avatar image URL
 * @param className - Additional CSS classes
 */
export default function Testimonial({
  quote,
  author,
  role,
  company,
  metric,
  avatar,
  className = '',
}: TestimonialProps): React.ReactElement {
  return (
    <div
      className={`border-2 border-dashed border-border hover:border-border-hover transition-colors duration-200 p-6 bg-background-secondary ${className}`}
    >
      {/* Metric Badge (if provided) */}
      {metric && (
        <div className="mb-4 inline-block px-3 py-1 bg-accent-primary/10 border border-dashed border-accent-primary rounded text-accent-primary text-sm font-display font-semibold">
          {metric}
        </div>
      )}

      {/* Quote */}
      <blockquote className="mb-6">
        <p className="text-text-primary text-lg leading-relaxed">
          &ldquo;{quote}&rdquo;
        </p>
      </blockquote>

      {/* Attribution */}
      <div className="flex items-center gap-3">
        {avatar && (
          <Image
            src={avatar}
            alt={`${author}'s avatar`}
            width={48}
            height={48}
            className="w-12 h-12 rounded-full border-2 border-dashed border-border"
          />
        )}
        <div>
          <div className="font-display font-semibold text-text-primary">
            {author}
          </div>
          {(role || company) && (
            <div className="text-text-tertiary text-sm">
              {role}
              {role && company && ' at '}
              {company}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
