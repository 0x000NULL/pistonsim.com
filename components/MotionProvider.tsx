'use client'

import { ReactNode } from 'react'
import { LazyMotion, domAnimation } from 'framer-motion'

interface MotionProviderProps {
  children: ReactNode
}

/**
 * MotionProvider wraps the application with LazyMotion for reduced bundle size.
 *
 * LazyMotion defers loading of animation features until they're needed,
 * reducing the initial bundle size by approximately 30-40KB.
 *
 * @param children - Application content to wrap
 *
 * @example
 * ```tsx
 * <MotionProvider>
 *   <App />
 * </MotionProvider>
 * ```
 */
export default function MotionProvider({ children }: MotionProviderProps): React.ReactElement {
  return (
    <LazyMotion features={domAnimation} strict>
      {children}
    </LazyMotion>
  )
}
