import { render } from '@testing-library/react'
import SectionDivider from '@/components/SectionDivider'

describe('SectionDivider Component', () => {
  it('renders without crashing', () => {
    const { container } = render(<SectionDivider />)
    const divider = container.querySelector('div')
    expect(divider).toBeInTheDocument()
  })

  it('applies default classes', () => {
    const { container } = render(<SectionDivider />)
    const divider = container.querySelector('div')
    expect(divider).toHaveClass('border-t-2')
    expect(divider).toHaveClass('border-dashed')
    expect(divider).toHaveClass('border-border')
    expect(divider).toHaveClass('my-20')
  })

  it('merges custom className with default classes', () => {
    const { container } = render(<SectionDivider className="custom-margin" />)
    const divider = container.querySelector('div')
    expect(divider).toHaveClass('custom-margin')
    expect(divider).toHaveClass('border-t-2') // Still has base classes
  })

  it('trims extra whitespace from className', () => {
    const { container } = render(<SectionDivider className="  extra-space  " />)
    const divider = container.querySelector('div')
    expect(divider?.className).not.toMatch(/^\s+|\s+$/)
  })
})
