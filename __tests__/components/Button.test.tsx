import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Button from '@/components/Button'

describe('Button Component', () => {
  describe('Link Button', () => {
    it('renders internal link button correctly', () => {
      render(<Button href="/test">Click me</Button>)
      const button = screen.getByText('Click me')
      expect(button).toBeInTheDocument()
      expect(button).toHaveAttribute('href', '/test')
    })

    it('renders external link with correct attributes', () => {
      render(
        <Button href="https://example.com" external>
          External Link
        </Button>
      )
      const link = screen.getByText('External Link')
      expect(link).toHaveAttribute('href', 'https://example.com')
      expect(link).toHaveAttribute('target', '_blank')
      expect(link).toHaveAttribute('rel', 'noopener noreferrer')
    })

    it('does not add external attributes to internal links', () => {
      render(<Button href="/internal">Internal</Button>)
      const link = screen.getByText('Internal')
      expect(link).not.toHaveAttribute('target')
      expect(link).not.toHaveAttribute('rel')
    })
  })

  describe('Click Button', () => {
    it('renders click button correctly', () => {
      const onClick = jest.fn()
      render(<Button onClick={onClick}>Click me</Button>)
      expect(screen.getByRole('button')).toBeInTheDocument()
    })

    it('calls onClick handler when clicked', async () => {
      const user = userEvent.setup()
      const onClick = jest.fn()
      render(<Button onClick={onClick}>Click me</Button>)

      const button = screen.getByRole('button')
      await user.click(button)

      expect(onClick).toHaveBeenCalledTimes(1)
    })
  })

  describe('Variants', () => {
    it('applies primary variant classes by default', () => {
      render(<Button onClick={() => {}}>Primary</Button>)
      const button = screen.getByRole('button')
      expect(button).toHaveClass('bg-accent-primary')
    })

    it('applies secondary variant classes', () => {
      render(
        <Button onClick={() => {}} variant="secondary">
          Secondary
        </Button>
      )
      const button = screen.getByRole('button')
      expect(button).toHaveClass('border-accent-primary')
    })

    it('applies ghost variant classes', () => {
      render(
        <Button onClick={() => {}} variant="ghost">
          Ghost
        </Button>
      )
      const button = screen.getByRole('button')
      expect(button).toHaveClass('text-text-primary')
    })
  })

  describe('Sizes', () => {
    it('applies medium size by default', () => {
      render(<Button onClick={() => {}}>Medium</Button>)
      const button = screen.getByRole('button')
      expect(button).toHaveClass('px-6', 'py-3')
    })

    it('applies small size classes', () => {
      render(
        <Button onClick={() => {}} size="sm">
          Small
        </Button>
      )
      const button = screen.getByRole('button')
      expect(button).toHaveClass('px-4', 'py-2')
    })

    it('applies large size classes', () => {
      render(
        <Button onClick={() => {}} size="lg">
          Large
        </Button>
      )
      const button = screen.getByRole('button')
      expect(button).toHaveClass('px-8', 'py-4')
    })
  })

  describe('Custom className', () => {
    it('merges custom className with default classes', () => {
      render(
        <Button onClick={() => {}} className="custom-class">
          Custom
        </Button>
      )
      const button = screen.getByRole('button')
      expect(button).toHaveClass('custom-class')
      expect(button).toHaveClass('inline-flex') // Still has base classes
    })
  })
})
