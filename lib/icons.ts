/**
 * Centralized icon exports for the application.
 *
 * This file re-exports icons from react-icons/fi to provide a single source
 * of truth for icon usage. Modern bundlers with tree-shaking (like Next.js)
 * will automatically eliminate unused icons from the bundle.
 *
 * Note: While this approach may not reduce bundle size with current tooling,
 * it provides better maintainability and makes it easier to swap icon libraries
 * or track icon usage across the application.
 *
 * @example
 * ```tsx
 * import { FiActivity, FiDatabase } from '@/lib/icons'
 *
 * function MyComponent() {
 *   return (
 *     <div>
 *       <FiActivity />
 *       <FiDatabase />
 *     </div>
 *   )
 * }
 * ```
 */

// Re-export all icons used in the application
export {
  FiActivity,
  FiDatabase,
  FiCpu,
  FiArrowRight,
  FiMenu,
  FiX,
  FiMail,
  FiSend,
  FiCheck,
  FiAlertTriangle,
  FiChevronDown,
  FiChevronUp,
} from 'react-icons/fi'

// Type for icon components
import type { IconType } from 'react-icons'
export type { IconType }
