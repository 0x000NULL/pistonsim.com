import { ReactNode, memo } from 'react'

interface ListItemProps {
  children: ReactNode
  marker?: string
  className?: string
}

/**
 * ListItem component renders a list item with a decorative marker (arrow by default).
 * The marker is hidden from screen readers using aria-hidden for accessibility.
 *
 * @param children - The content of the list item
 * @param marker - The decorative marker character (default: '→')
 * @param className - Optional additional CSS classes
 * @returns A list item element with marker
 *
 * @example
 * ```tsx
 * <ul className="space-y-2">
 *   <ListItem>Two-zone combustion model</ListItem>
 *   <ListItem marker="•">Alternative marker style</ListItem>
 * </ul>
 * ```
 */
const ListItem = memo(function ListItem({
  children,
  marker = '→',
  className = '',
}: ListItemProps): React.ReactElement {
  return (
    <li className={`flex items-start ${className}`.trim()}>
      <span className="text-cyan mr-2 mt-1" aria-hidden="true">
        {marker}
      </span>
      <span>{children}</span>
    </li>
  )
})

export default ListItem
