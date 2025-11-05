import { useEffect, useState } from 'react'
import { getPrefersReducedMotion } from '@/lib/reducedMotion'

/**
 * Custom hook that detects if the user prefers reduced motion.
 * Respects the user's system-level accessibility preference for reduced motion.
 * Updates dynamically if the user changes their preference.
 *
 * Returns undefined during SSR/initial render to prevent hydration mismatches,
 * then returns the actual preference once mounted on the client.
 *
 * @returns boolean | undefined - true if user prefers reduced motion, false otherwise, undefined during SSR
 *
 * @example
 * ```tsx
 * function AnimatedComponent() {
 *   const prefersReducedMotion = usePrefersReducedMotion()
 *
 *   // Handle undefined state during hydration
 *   if (prefersReducedMotion === undefined) {
 *     return <div>Loading...</div>
 *   }
 *
 *   return (
 *     <motion.div
 *       animate={{ opacity: prefersReducedMotion ? 1 : 0 }}
 *       transition={{ duration: prefersReducedMotion ? 0 : 0.5 }}
 *     >
 *       Content
 *     </motion.div>
 *   )
 * }
 * ```
 */
export function usePrefersReducedMotion(): boolean | undefined {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState<boolean | undefined>(undefined)

  useEffect(() => {
    // Check if window is available (client-side)
    if (typeof window === 'undefined') return

    // Use shared utility for consistency
    setPrefersReducedMotion(getPrefersReducedMotion())

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')

    // Update state when preference changes
    const handler = (e: MediaQueryListEvent): void => {
      setPrefersReducedMotion(e.matches)
    }

    mediaQuery.addEventListener('change', handler)

    // Cleanup listener on unmount
    return () => mediaQuery.removeEventListener('change', handler)
  }, [])

  return prefersReducedMotion
}
