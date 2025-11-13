import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Compare Engine Simulation Software',
  description:
    'Compare PISTON to GT-POWER, Ricardo WAVE, and other engine simulation tools. See how professional-grade simulation compares across accuracy, features, and pricing.',
  openGraph: {
    title: 'PISTON vs Other Engine Simulation Software',
    description: 'Professional engine simulation comparison: PISTON vs GT-POWER, WAVE, and alternatives.',
    url: 'https://pistonsim.com/vs/',
    type: 'website',
  },
  alternates: {
    canonical: 'https://pistonsim.com/vs/',
  },
}

export default function CompareLayout({
  children,
}: {
  children: React.ReactNode
}): React.ReactElement {
  return <>{children}</>
}
