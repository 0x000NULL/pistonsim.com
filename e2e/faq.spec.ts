import { test, expect } from '@playwright/test'

test.describe('FAQ Page', () => {
  test('should render FAQ items', async ({ page }) => {
    await page.goto('/faq/')

    // Check page title
    await expect(page.getByRole('heading', { level: 1 })).toContainText(/frequently asked questions/i)

    // Check at least one FAQ item is visible
    await expect(page.getByText(/what is piston/i)).toBeVisible()
  })

  test('should expand FAQ item on click', async ({ page }) => {
    await page.goto('/faq/')

    // Find and click first FAQ item
    const firstQuestion = page.getByRole('button', { name: /what is piston/i })
    await firstQuestion.click()

    // Answer should be visible
    await expect(page.getByText(/physics-based thermodynamic modeling/i)).toBeVisible()
  })

  test('should collapse FAQ item on second click', async ({ page }) => {
    await page.goto('/faq/')

    const firstQuestion = page.getByRole('button', { name: /what is piston/i })

    // Click to expand
    await firstQuestion.click()
    const answer = page.getByText(/physics-based thermodynamic modeling/i)
    await expect(answer).toBeVisible()

    // Click to collapse
    await firstQuestion.click()
    await expect(answer).not.toBeVisible()
  })

  test('should have proper ARIA attributes', async ({ page }) => {
    await page.goto('/faq/')

    const firstQuestion = page.getByRole('button', { name: /what is piston/i })

    // Should have aria-expanded false initially
    await expect(firstQuestion).toHaveAttribute('aria-expanded', 'false')

    // Click to expand
    await firstQuestion.click()
    await expect(firstQuestion).toHaveAttribute('aria-expanded', 'true')
  })

  test('should allow keyboard navigation', async ({ page }) => {
    await page.goto('/faq/')

    // Tab to first FAQ item
    await page.keyboard.press('Tab')
    await page.keyboard.press('Tab')
    await page.keyboard.press('Tab')
    await page.keyboard.press('Tab')

    const firstQuestion = page.getByRole('button', { name: /what is piston/i })

    // Press Enter to expand
    await page.keyboard.press('Enter')

    // Should be expanded
    await expect(firstQuestion).toHaveAttribute('aria-expanded', 'true')
  })
})
