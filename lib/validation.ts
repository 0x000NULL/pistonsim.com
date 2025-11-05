/**
 * Validation utilities for form inputs and data validation.
 * Future-proofing for contact forms and user input handling.
 */

/**
 * Validates an email address format
 * @param value - The email string to validate
 * @returns true if email format is valid
 */
export function isValidEmail(value: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(value)
}

/**
 * Validates a URL format
 * @param value - The URL string to validate
 * @returns true if URL format is valid
 */
export function isValidUrl(value: string): boolean {
  try {
    new URL(value)
    return true
  } catch {
    return false
  }
}

/**
 * Checks if a value is not empty
 * @param value - The value to check
 * @returns true if value exists and is not empty
 */
export function isRequired(value: unknown): boolean {
  if (value === null || value === undefined) return false
  if (typeof value === 'string') return value.trim().length > 0
  if (Array.isArray(value)) return value.length > 0
  return true
}

/**
 * Validates minimum length for strings
 * @param value - The string to validate
 * @param minLength - Minimum required length
 * @returns true if string meets minimum length
 */
export function hasMinLength(value: string, minLength: number): boolean {
  return value.trim().length >= minLength
}

/**
 * Validates maximum length for strings
 * @param value - The string to validate
 * @param maxLength - Maximum allowed length
 * @returns true if string is within maximum length
 */
export function hasMaxLength(value: string, maxLength: number): boolean {
  return value.trim().length <= maxLength
}

/**
 * Validates a phone number format (flexible, supports various formats)
 * @param value - The phone number string to validate
 * @returns true if phone number format is valid
 */
export function isValidPhone(value: string): boolean {
  // Flexible phone regex supporting various formats
  const phoneRegex = /^[\d\s+()-]{10,}$/
  return phoneRegex.test(value)
}

/**
 * Sanitizes HTML to prevent XSS attacks
 * @param value - The string to sanitize
 * @returns Sanitized string with HTML entities escaped
 */
export function sanitizeHtml(value: string): string {
  const map: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#x27;',
    '/': '&#x2F;',
  }
  return value.replace(/[&<>"'/]/g, (char) => map[char] || char)
}

/**
 * Enhanced email validation with RFC 5322 compliance
 * and additional checks for common errors
 *
 * @param email - Email address to validate
 * @returns Validation result with error message if invalid
 */
export function validateNewsletterEmail(email: string): { isValid: boolean; error: string | null } {
  const trimmed = email.trim()

  // Check if empty
  if (!isRequired(trimmed)) {
    return { isValid: false, error: 'Email address is required' }
  }

  // Check length constraints
  if (!hasMaxLength(trimmed, 254)) {
    return { isValid: false, error: 'Email address is too long' }
  }

  // Enhanced RFC 5322 compliant regex
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/

  if (!emailRegex.test(trimmed)) {
    return { isValid: false, error: 'Please enter a valid email address' }
  }

  // Additional checks
  const [_localPart, domain] = trimmed.split('@')

  // Check for consecutive dots
  if (trimmed.includes('..')) {
    return { isValid: false, error: 'Email address contains invalid characters' }
  }

  // Check domain has at least one dot
  if (!domain || !domain.includes('.')) {
    return { isValid: false, error: 'Please enter a valid domain' }
  }

  // Check for common typos in popular domains
  const commonTypos = ['gmial.com', 'gmai.com', 'yahooo.com', 'hotmial.com']
  if (commonTypos.includes(domain.toLowerCase())) {
    return { isValid: false, error: 'Did you mean gmail.com, yahoo.com, or hotmail.com?' }
  }

  return { isValid: true, error: null }
}

/**
 * Composite validation result
 */
export interface ValidationResult {
  isValid: boolean
  errors: string[]
}

/**
 * Creates a validation function that runs multiple validators
 * @param validators - Array of validator functions
 * @returns Composite validator function
 */
export function composeValidators(
  ...validators: Array<(value: unknown) => boolean | string>
): (value: unknown) => ValidationResult {
  return (value: unknown): ValidationResult => {
    const errors: string[] = []

    for (const validator of validators) {
      const result = validator(value)
      if (result === false) {
        errors.push('Validation failed')
      } else if (typeof result === 'string') {
        errors.push(result)
      }
    }

    return {
      isValid: errors.length === 0,
      errors,
    }
  }
}
