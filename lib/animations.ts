import { Transition } from 'framer-motion'

// Check if user prefers reduced motion
// This will be evaluated on the client side
const getPrefersReducedMotion = (): boolean => {
  if (typeof window === 'undefined') return false
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

// Fade in from below animation
export const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 } as Transition,
}

// Fade in animation with delay
export const fadeInUpDelayed = (delay: number = 0.2): { initial: { opacity: number; y: number }; animate: { opacity: number; y: number }; transition: Transition } => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay } as Transition,
})

// Simple fade in
export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.6 } as Transition,
}

// Slide down from top
export const slideDown = {
  initial: { y: -100 },
  animate: { y: 0 },
  transition: { duration: 0.5, ease: 'easeOut' } as Transition,
}

// Stagger children animations
export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

// Viewport configuration for scroll-triggered animations
export const viewportConfig = {
  once: true,
  margin: '-100px',
}

// Accessible animation variants that respect prefers-reduced-motion
export const getAccessibleAnimation = (
  normalAnimation: { initial: Record<string, number>; animate: Record<string, number>; transition?: Transition }
): { initial: Record<string, number>; animate: Record<string, number>; transition: Transition } => {
  const prefersReducedMotion = getPrefersReducedMotion()

  if (prefersReducedMotion) {
    return {
      initial: normalAnimation.animate, // Start in final state
      animate: normalAnimation.animate,
      transition: { duration: 0 } as Transition, // No animation
    }
  }

  return {
    initial: normalAnimation.initial,
    animate: normalAnimation.animate,
    transition: normalAnimation.transition ?? ({ duration: 0 } as Transition),
  }
}

// Accessible fade in up
export const accessibleFadeInUp = (): { initial: Record<string, number>; animate: Record<string, number>; transition: Transition } => getAccessibleAnimation(fadeInUp)

// Accessible fade in
export const accessibleFadeIn = (): { initial: Record<string, number>; animate: Record<string, number>; transition: Transition } => getAccessibleAnimation(fadeIn)

// Accessible slide down
export const accessibleSlideDown = (): { initial: Record<string, number>; animate: Record<string, number>; transition: Transition } => getAccessibleAnimation(slideDown)
