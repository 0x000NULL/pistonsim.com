import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Get in touch with the PISTON team. Questions about engine simulation, feature requests, partnership opportunities, or technical support.',
  openGraph: {
    title: 'Contact PISTON - Engine Simulation Support',
    description: 'Reach out to our team for support, partnerships, or questions.',
    url: 'https://pistonsim.com/contact/',
    type: 'website',
  },
  alternates: {
    canonical: 'https://pistonsim.com/contact/',
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}): React.ReactElement {
  return <>{children}</>
}
