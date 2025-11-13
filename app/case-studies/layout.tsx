import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Case Studies',
  description:
    'Real-world engine simulation case studies using PISTON. See how engineers and builders achieve accurate performance predictions and optimize configurations.',
  openGraph: {
    title: 'PISTON Case Studies - Real Engine Simulations',
    description: 'See PISTON in action with real-world engine builds and simulations.',
    url: 'https://pistonsim.com/case-studies/',
    type: 'website',
  },
  alternates: {
    canonical: 'https://pistonsim.com/case-studies/',
  },
}

export default function CaseStudiesLayout({
  children,
}: {
  children: React.ReactNode
}): React.ReactElement {
  return <>{children}</>
}
