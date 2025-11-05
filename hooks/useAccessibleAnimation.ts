import { Variant, Transition } from 'framer-motion'
import { usePrefersReducedMotion } from './usePrefersReducedMotion'

/**
 * Custom hook that returns animation configuration that respects user's motion preferences.
 * If the user prefers reduced motion, animations are disabled by setting initial state
 * to the final state with zero duration.
 *
 * @param normalAnimation - Animation configuration for users who don't prefer reduced motion
 * @returns Animation configuration that respects prefers-reduced-motion setting
 *
 * @example
 * ```tsx
 * function FadeInComponent() {
 *   const animation = useAccessibleAnimation({
 *     initial: { opacity: 0, y: 20 },
 *     animate: { opacity: 1, y: 0 },
 *     transition: { duration: 0.6 }
 *   })
 *
 *   return (
 *     <motion.div {...animation}>
 *       Content fades in (or appears instantly if user prefers reduced motion)
 *     </motion.div>
 *   )
 * }
 * ```
 */
export function useAccessibleAnimation(normalAnimation: {
  initial: Variant
  animate: Variant
  transition?: Transition
}): {
  initial: Variant
  animate: Variant
  transition: Transition
} {
  const prefersReducedMotion = usePrefersReducedMotion()

  if (prefersReducedMotion) {
    return {
      initial: normalAnimation.animate, // Start in final state
      animate: normalAnimation.animate, // Stay in final state
      transition: { duration: 0 }, // No animation
    }
  }

  return {
    initial: normalAnimation.initial,
    animate: normalAnimation.animate,
    transition: normalAnimation.transition ?? { duration: 0 },
  }
}
