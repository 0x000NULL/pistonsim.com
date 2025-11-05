import { memo } from 'react'

interface SectionDividerProps {
  className?: string
}

/**
 * SectionDivider component renders a dashed horizontal line to separate sections.
 *
 * @param className - Optional additional CSS classes to customize the divider
 * @returns A horizontal divider element
 *
 * @example
 * ```tsx
 * <SectionDivider />
 * <SectionDivider className="my-10" />
 * ```
 */
const SectionDivider = memo(function SectionDivider({
  className = '',
}: SectionDividerProps): React.ReactElement {
  return (
    <div
      className={`border-t-2 border-dashed border-border my-20 ${className}`.trim()}
    />
  )
})

export default SectionDivider
