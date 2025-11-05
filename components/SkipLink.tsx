/**
 * SkipLink component provides a hidden link that becomes visible when focused.
 * This is an essential accessibility feature that allows keyboard users to skip
 * directly to the main content, bypassing repetitive navigation elements.
 *
 * Complies with WCAG 2.1 Level A success criterion 2.4.1 (Bypass Blocks).
 *
 * @example
 * ```tsx
 * // In layout or page component
 * <SkipLink />
 * <Header />
 * <main id="main-content">
 *   {children}
 * </main>
 * ```
 */
export default function SkipLink(): React.ReactElement {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-6 focus:py-3 focus:bg-accent-primary focus:text-white focus:rounded-lg focus:font-display focus:font-semibold focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-accent-primary focus:ring-offset-2 focus:ring-offset-background-primary"
    >
      Skip to main content
    </a>
  )
}
