import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Features | PISTON Engine Simulation',
  description: 'Explore PISTON\'s advanced engine simulation capabilities: high-fidelity physics, virtual dyno system, real parts database, and comprehensive data export.',
  openGraph: {
    title: 'Features | PISTON Engine Simulation',
    description: 'Professional-grade engine simulation software with advanced physics modeling and real-time analysis.',
    url: 'https://pistonsim.com/features/',
    type: 'website',
  },
  alternates: {
    canonical: 'https://pistonsim.com/features/',
  },
}

export default function FeaturesLayout({
  children,
}: {
  children: React.ReactNode
}): React.ReactElement {
  return <>{children}</>
}
