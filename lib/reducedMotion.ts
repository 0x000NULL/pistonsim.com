/**
 * Centralized reduced motion detection utility.
 * Single source of truth for checking user's motion preferences.
 *
 * This module provides both a synchronous getter and manages caching
 * to avoid repeated DOM queries for the same preference.
 */

// Cache for reduced motion preference
let cachedPrefersReducedMotion: boolean | null = null
let mediaQueryList: MediaQueryList | null = null

/**
 * Check if user prefers reduced motion, with memoization for performance.
 * Sets up a listener to update the cached value when preferences change.
 *
 * @returns boolean indicating if user prefers reduced motion
 * @example
 * ```ts
 * if (getPrefersReducedMotion()) {
 *   // Skip animations
 * }
 * ```
 */
export function getPrefersReducedMotion(): boolean {
  if (typeof window === 'undefined') return false

  // Initialize cache and listener on first call
  if (cachedPrefersReducedMotion === null) {
    mediaQueryList = window.matchMedia('(prefers-reduced-motion: reduce)')
    cachedPrefersReducedMotion = mediaQueryList.matches

    // Update cache when preference changes
    mediaQueryList.addEventListener('change', (e: MediaQueryListEvent) => {
      cachedPrefersReducedMotion = e.matches
    })
  }

  return cachedPrefersReducedMotion
}

/**
 * Reset the cached value (useful for testing)
 * @internal
 */
export function resetCache(): void {
  cachedPrefersReducedMotion = null
  if (mediaQueryList) {
    // Note: We don't remove the listener as it doesn't have a reference
    mediaQueryList = null
  }
}
