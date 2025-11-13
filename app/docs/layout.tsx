import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Documentation',
  description:
    'Complete documentation for PISTON engine simulation software. Learn how to model engines, interpret results, and optimize performance with our comprehensive guides.',
  openGraph: {
    title: 'PISTON Documentation - Engine Simulation Guide',
    description: 'Comprehensive guides for professional engine simulation and analysis.',
    url: 'https://pistonsim.com/docs/',
    type: 'website',
  },
  alternates: {
    canonical: 'https://pistonsim.com/docs/',
  },
}

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode
}): React.ReactElement {
  return <>{children}</>
}
