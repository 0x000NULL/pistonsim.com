import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pricing',
  description:
    'PISTON pricing and plans. Free during alpha development. Professional-grade engine simulation at enthusiast-accessible pricing for individuals and teams.',
  openGraph: {
    title: 'PISTON Pricing - Accessible Engine Simulation',
    description: 'Professional engine simulation at accessible pricing.',
    url: 'https://pistonsim.com/pricing/',
    type: 'website',
  },
  alternates: {
    canonical: 'https://pistonsim.com/pricing/',
  },
}

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode
}): React.ReactElement {
  return <>{children}</>
}
