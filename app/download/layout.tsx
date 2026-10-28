import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Download PISTON',
  description:
    'Download the PISTON engine simulator and virtual dyno for 64-bit Windows: installer or portable ZIP, with SHA-256 checksums. Free for personal and commercial use.',
  openGraph: {
    title: 'Download PISTON - Free Engine Simulation Software',
    description: 'Engine simulator and virtual dyno for 64-bit Windows. Free for personal and commercial use.',
    url: 'https://pistonsim.com/download/',
    type: 'website',
  },
  alternates: {
    canonical: 'https://pistonsim.com/download/',
  },
}

export default function DownloadLayout({
  children,
}: {
  children: React.ReactNode
}): React.ReactElement {
  return <>{children}</>
}
