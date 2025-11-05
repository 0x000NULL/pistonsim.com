/**
 * LiveRegion component for announcing dynamic content changes to screen readers.
 *
 * Uses ARIA live regions to notify assistive technologies of content updates.
 * Useful for dynamic status messages, notifications, or loading states.
 *
 * @param message - The message to announce to screen readers
 * @param politeness - How assertively to announce ('polite' waits for pause, 'assertive' interrupts)
 * @param atomic - Whether to read the entire region or just the changed part
 *
 * @example
 * ```tsx
 * const [status, setStatus] = useState('')
 *
 * // Announce form submission status
 * <LiveRegion message={status} politeness="polite" />
 *
 * // Announce errors immediately
 * <LiveRegion message={errorMessage} politeness="assertive" />
 * ```
 */
export default function LiveRegion({
  message,
  politeness = 'polite',
  atomic = true,
}: {
  message: string
  politeness?: 'polite' | 'assertive'
  atomic?: boolean
}): React.ReactElement {
  if (!message) {
    return <></>
  }

  return (
    <div
      role="status"
      aria-live={politeness}
      aria-atomic={atomic}
      className="sr-only"
    >
      {message}
    </div>
  )
}
