import { render, screen } from '@testing-library/react'
import FeatureCard from '@/components/FeatureCard'
import { FiActivity } from '@/lib/icons'

describe('FeatureCard Component', () => {
  const defaultProps = {
    icon: <FiActivity />,
    title: 'Test Feature',
    description: 'This is a test feature description',
  }

  it('renders all content correctly', () => {
    render(<FeatureCard {...defaultProps} />)

    expect(screen.getByText('Test Feature')).toBeInTheDocument()
    expect(screen.getByText('This is a test feature description')).toBeInTheDocument()
  })

  it('renders icon with proper styling', () => {
    const { container } = render(<FeatureCard {...defaultProps} />)
    const iconWrapper = container.querySelector('.text-accent-primary.text-5xl')
    expect(iconWrapper).toBeInTheDocument()
  })

  it('applies card styling classes', () => {
    const { container } = render(<FeatureCard {...defaultProps} />)
    const card = container.firstChild
    expect(card).toHaveClass('border-2')
    expect(card).toHaveClass('border-dashed')
    expect(card).toHaveClass('border-border')
  })

  it('has hover effect classes', () => {
    const { container } = render(<FeatureCard {...defaultProps} />)
    const card = container.firstChild
    expect(card).toHaveClass('hover:border-accent-primary')
  })

  it('applies transition classes', () => {
    const { container } = render(<FeatureCard {...defaultProps} />)
    const card = container.firstChild
    expect(card).toHaveClass('transition-colors')
  })

  it('renders title with correct styling', () => {
    render(<FeatureCard {...defaultProps} />)
    const title = screen.getByText('Test Feature')
    expect(title).toHaveClass('font-display')
    expect(title).toHaveClass('font-bold')
    expect(title).toHaveClass('text-text-primary')
  })

  it('renders description with correct styling', () => {
    render(<FeatureCard {...defaultProps} />)
    const description = screen.getByText('This is a test feature description')
    expect(description).toHaveClass('text-text-secondary')
  })
})
