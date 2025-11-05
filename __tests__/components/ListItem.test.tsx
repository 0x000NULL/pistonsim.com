import { render, screen } from '@testing-library/react'
import ListItem from '@/components/ListItem'

describe('ListItem Component', () => {
  it('renders children content correctly', () => {
    render(<ListItem>Test content</ListItem>)
    expect(screen.getByText('Test content')).toBeInTheDocument()
  })

  it('uses default arrow marker', () => {
    const { container } = render(<ListItem>Content</ListItem>)
    const marker = container.querySelector('span[aria-hidden="true"]')
    expect(marker).toHaveTextContent('→')
  })

  it('applies custom marker', () => {
    const { container } = render(<ListItem marker="•">Content</ListItem>)
    const marker = container.querySelector('span[aria-hidden="true"]')
    expect(marker).toHaveTextContent('•')
  })

  it('hides marker from screen readers', () => {
    const { container } = render(<ListItem>Content</ListItem>)
    const marker = container.querySelector('span[aria-hidden="true"]')
    expect(marker).toHaveAttribute('aria-hidden', 'true')
  })

  it('applies marker styling classes', () => {
    const { container } = render(<ListItem>Content</ListItem>)
    const marker = container.querySelector('span[aria-hidden="true"]')
    expect(marker).toHaveClass('text-cyan')
    expect(marker).toHaveClass('mr-2')
    expect(marker).toHaveClass('mt-1')
  })

  it('applies custom className to list item', () => {
    render(<ListItem className="custom-class">Content</ListItem>)
    const listItem = screen.getByRole('listitem')
    expect(listItem).toHaveClass('custom-class')
    expect(listItem).toHaveClass('flex') // Still has base classes
  })

  it('renders as a list item element', () => {
    render(<ListItem>Content</ListItem>)
    expect(screen.getByRole('listitem')).toBeInTheDocument()
  })

  it('trims extra whitespace from className', () => {
    render(<ListItem className="  extra-space  ">Content</ListItem>)
    const listItem = screen.getByRole('listitem')
    expect(listItem.className).not.toMatch(/^\s+|\s+$/)
  })
})
