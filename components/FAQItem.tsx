'use client'

import { useState } from 'react'
import { m, AnimatePresence } from 'framer-motion'
import { FiChevronDown } from '@/lib/icons'

interface FAQItemProps {
  question: string
  answer: string
  defaultOpen?: boolean
}

/**
 * Accessible FAQ accordion item
 *
 * Features:
 * - Smooth expand/collapse animation
 * - Keyboard navigation (Enter/Space to toggle)
 * - ARIA attributes for accessibility
 * - Rotating chevron indicator
 *
 * @param question - The question text
 * @param answer - The answer text
 * @param defaultOpen - Whether the item starts expanded
 */
export default function FAQItem({
  question,
  answer,
  defaultOpen = false,
}: FAQItemProps): React.ReactElement {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  const toggleOpen = () => {
    setIsOpen((prev) => !prev)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      toggleOpen()
    }
  }

  return (
    <div className="border-2 border-dashed border-border hover:border-border-hover transition-colors duration-200">
      <button
        onClick={toggleOpen}
        onKeyDown={handleKeyDown}
        aria-expanded={isOpen}
        className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        type="button"
      >
        <span className="font-display font-semibold text-text-primary text-lg">
          {question}
        </span>
        <m.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex-shrink-0"
        >
          <FiChevronDown
            className="w-5 h-5 text-accent-primary"
            aria-hidden="true"
          />
        </m.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <m.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-4 pt-2 text-text-secondary leading-relaxed">
              {answer}
            </div>
          </m.div>
        )}
      </AnimatePresence>
    </div>
  )
}
