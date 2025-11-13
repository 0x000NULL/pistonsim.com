import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Changelog',
  description:
    'PISTON release notes and version history. Track new features, improvements, bug fixes, and updates to our engine simulation software.',
  openGraph: {
    title: 'PISTON Changelog - Latest Updates',
    description: 'Stay updated with the latest PISTON features and improvements.',
    url: 'https://pistonsim.com/changelog/',
    type: 'website',
  },
  alternates: {
    canonical: 'https://pistonsim.com/changelog/',
  },
}

export default function ChangelogLayout({
  children,
}: {
  children: React.ReactNode
}): React.ReactElement {
  return <>{children}</>
}
