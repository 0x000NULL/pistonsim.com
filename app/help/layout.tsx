import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Help Center',
  description:
    'PISTON help center and support resources. Find answers, troubleshooting guides, tutorials, and technical documentation for engine simulation software.',
  openGraph: {
    title: 'PISTON Help Center - Support & Guides',
    description: 'Get help with PISTON engine simulation software.',
    url: 'https://pistonsim.com/help/',
    type: 'website',
  },
  alternates: {
    canonical: 'https://pistonsim.com/help/',
  },
}

export default function HelpLayout({
  children,
}: {
  children: React.ReactNode
}): React.ReactElement {
  return <>{children}</>
}
