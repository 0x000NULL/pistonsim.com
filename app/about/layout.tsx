import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About | PISTON Engine Simulation',
  description: 'Learn about PISTON, professional-grade engine simulation software built for engineers, enthusiasts, and researchers. Making advanced simulation accessible.',
  openGraph: {
    title: 'About | PISTON Engine Simulation',
    description: 'Professional-grade engine simulation software built for precision and performance.',
    type: 'website',
  },
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}): React.ReactElement {
  return <>{children}</>
}
