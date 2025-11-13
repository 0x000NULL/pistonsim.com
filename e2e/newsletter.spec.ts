import { test, expect } from '@playwright/test'

test.describe('Newsletter Signup', () => {
  test('should show newsletter form on homepage', async ({ page }) => {
    await page.goto('/')

    // Check for newsletter form
    const newsletterForm = page.getByPlaceholder(/enter your email/i)
    await expect(newsletterForm).toBeVisible()
  })

  test('should validate email format', async ({ page }) => {
    await page.goto('/')

    // Find and fill newsletter form with invalid email
    const emailInput = page.getByPlaceholder(/enter your email/i).first()
    const submitButton = emailInput.locator('..').getByRole('button', { name: /subscribe/i })

    await emailInput.fill('invalid-email')
    await submitButton.click()

    // Should show validation error
    await expect(page.getByText(/please enter a valid email/i)).toBeVisible()
  })

  test('should accept valid email format', async ({ page }) => {
    await page.goto('/')

    const emailInput = page.getByPlaceholder(/enter your email/i).first()
    const submitButton = emailInput.locator('..').getByRole('button', { name: /subscribe/i })

    await emailInput.fill('test@example.com')
    await submitButton.click()

    // Should show loading state (button disabled)
    await expect(submitButton).toBeDisabled()
  })

  test('should show success message on successful signup', async ({ page }) => {
    // Mock API response
    await page.route('**/api/newsletter', async (route) => {
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({
          success: true,
          message: 'Successfully subscribed! Check your email for confirmation.',
        }),
      })
    })

    await page.goto('/')

    const emailInput = page.getByPlaceholder(/enter your email/i).first()
    const submitButton = emailInput.locator('..').getByRole('button', { name: /subscribe/i })

    await emailInput.fill('success@example.com')
    await submitButton.click()

    // Should show success message
    await expect(page.getByText(/successfully subscribed/i)).toBeVisible()
  })

  test('should show error message on API failure', async ({ page }) => {
    // Mock API error response
    await page.route('**/api/newsletter', async (route) => {
      await route.fulfill({
        status: 400,
        contentType: 'application/json',
        body: JSON.stringify({
          success: false,
          message: 'Subscription failed',
          error: 'This email is already subscribed',
        }),
      })
    })

    await page.goto('/')

    const emailInput = page.getByPlaceholder(/enter your email/i).first()
    const submitButton = emailInput.locator('..').getByRole('button', { name: /subscribe/i })

    await emailInput.fill('duplicate@example.com')
    await submitButton.click()

    // Should show error message
    await expect(page.getByText(/subscription failed/i)).toBeVisible()
  })

  test('should clear form after successful submission', async ({ page }) => {
    // Mock successful API response
    await page.route('**/api/newsletter', async (route) => {
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({
          success: true,
          message: 'Successfully subscribed!',
        }),
      })
    })

    await page.goto('/')

    const emailInput = page.getByPlaceholder(/enter your email/i).first()
    const submitButton = emailInput.locator('..').getByRole('button', { name: /subscribe/i })

    await emailInput.fill('test@example.com')
    await submitButton.click()

    // Wait for success message
    await expect(page.getByText(/successfully subscribed/i)).toBeVisible()

    // Input should be cleared
    await expect(emailInput).toHaveValue('')
  })
})
