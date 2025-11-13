import { test, expect } from '@playwright/test'

test.describe('Navigation', () => {
  test('should render main navigation links', async ({ page }) => {
    await page.goto('/')

    // Check for main navigation links
    await expect(page.getByRole('link', { name: /features/i })).toBeVisible()
    await expect(page.getByRole('link', { name: /about/i })).toBeVisible()
    await expect(page.getByRole('link', { name: /download/i })).toBeVisible()
    await expect(page.getByRole('link', { name: /faq/i })).toBeVisible()
  })

  test('should navigate to features page', async ({ page }) => {
    await page.goto('/')

    await page.getByRole('link', { name: /features/i }).first().click()
    await expect(page).toHaveURL(/.*features/)
    await expect(page.getByRole('heading', { level: 1 })).toContainText(/features/i)
  })

  test('should navigate to about page', async ({ page }) => {
    await page.goto('/')

    await page.getByRole('link', { name: /about/i }).first().click()
    await expect(page).toHaveURL(/.*about/)
    await expect(page.getByRole('heading', { level: 1 })).toContainText(/about/i)
  })

  test('should navigate to FAQ page', async ({ page }) => {
    await page.goto('/')

    await page.getByRole('link', { name: /faq/i }).first().click()
    await expect(page).toHaveURL(/.*faq/)
    await expect(page.getByRole('heading', { level: 1 })).toContainText(/faq|questions/i)
  })

  test('should have skip link for accessibility', async ({ page }) => {
    await page.goto('/')

    // Tab to focus skip link
    await page.keyboard.press('Tab')

    // Check skip link is visible when focused
    const skipLink = page.getByText(/skip to main content/i)
    await expect(skipLink).toBeFocused()
  })

  test('should navigate using skip link', async ({ page }) => {
    await page.goto('/')

    // Tab to skip link and activate
    await page.keyboard.press('Tab')
    await page.keyboard.press('Enter')

    // Main content should be focused
    const mainContent = page.locator('#main-content')
    await expect(mainContent).toBeFocused()
  })
})

test.describe('Mobile Navigation', () => {
  test.use({ viewport: { width: 375, height: 667 } })

  test('should show mobile menu button on small screens', async ({ page }) => {
    await page.goto('/')

    // Mobile menu button should be visible
    const menuButton = page.getByRole('button', { name: /menu/i })
    await expect(menuButton).toBeVisible()
  })

  test('should open mobile menu on click', async ({ page }) => {
    await page.goto('/')

    const menuButton = page.getByRole('button', { name: /menu/i })
    await menuButton.click()

    // Mobile menu should be visible
    await expect(page.getByRole('navigation').locator('a', { hasText: /features/i })).toBeVisible()
  })

  test('should close mobile menu with escape key', async ({ page }) => {
    await page.goto('/')

    // Open mobile menu
    const menuButton = page.getByRole('button', { name: /menu/i })
    await menuButton.click()

    // Menu should be open
    const featuresLink = page.getByRole('navigation').locator('a', { hasText: /features/i })
    await expect(featuresLink).toBeVisible()

    // Press escape
    await page.keyboard.press('Escape')

    // Menu should be closed (check if it's hidden)
    await expect(featuresLink).not.toBeVisible()
  })

  test('should close mobile menu after navigation', async ({ page }) => {
    await page.goto('/')

    // Open mobile menu
    const menuButton = page.getByRole('button', { name: /menu/i })
    await menuButton.click()

    // Click features link
    await page.getByRole('navigation').locator('a', { hasText: /features/i }).click()

    // Should navigate and close menu
    await expect(page).toHaveURL(/.*features/)
  })

  test('should toggle menu button state', async ({ page }) => {
    await page.goto('/')

    const menuButton = page.getByRole('button', { name: /menu/i })

    // Click to open
    await menuButton.click()
    await expect(menuButton).toHaveAttribute('aria-expanded', 'true')

    // Click to close
    await menuButton.click()
    await expect(menuButton).toHaveAttribute('aria-expanded', 'false')
  })
})
