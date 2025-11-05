import { Variants, Transition, Variant } from 'framer-motion'
import { getPrefersReducedMotion } from './reducedMotion'

// Fade in from below animation variants
export const fadeInUp: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
}

export const fadeInUpTransition: Transition = { duration: 0.6 }

// Fade in animation with delay
export const fadeInUpDelayed = (delay: number = 0.2): { variants: Variants; transition: Transition } => ({
  variants: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  },
  transition: { duration: 0.6, delay },
})

// Simple fade in variants
export const fadeIn: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
}

export const fadeInTransition: Transition = { duration: 0.6 }

// Slide down from top variants
export const slideDown: Variants = {
  initial: { y: -100 },
  animate: { y: 0 },
}

export const slideDownTransition: Transition = { duration: 0.5, ease: 'easeOut' }

// Stagger children animations
export const staggerContainer: Variants = {
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
  normalAnimation: { initial: Variant; animate: Variant; transition?: Transition }
): { initial: Variant; animate: Variant; transition: Transition } => {
  const prefersReducedMotion = getPrefersReducedMotion()

  if (prefersReducedMotion) {
    return {
      initial: normalAnimation.animate, // Start in final state
      animate: normalAnimation.animate,
      transition: { duration: 0 }, // No animation
    }
  }

  return {
    initial: normalAnimation.initial,
    animate: normalAnimation.animate,
    transition: normalAnimation.transition ?? { duration: 0 },
  }
}

// Accessible fade in up
export const accessibleFadeInUp = (): { initial: Variant; animate: Variant; transition: Transition } =>
  getAccessibleAnimation({ initial: fadeInUp.initial!, animate: fadeInUp.animate!, transition: fadeInUpTransition })

// Accessible fade in
export const accessibleFadeIn = (): { initial: Variant; animate: Variant; transition: Transition } =>
  getAccessibleAnimation({ initial: fadeIn.initial!, animate: fadeIn.animate!, transition: fadeInTransition })

// Accessible slide down
export const accessibleSlideDown = (): { initial: Variant; animate: Variant; transition: Transition } =>
  getAccessibleAnimation({ initial: slideDown.initial!, animate: slideDown.animate!, transition: slideDownTransition })
