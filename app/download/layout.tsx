import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Download PISTON',
  description:
    'Download PISTON engine simulation software for Windows, macOS, and Linux. Free during alpha. Professional-grade thermodynamic modeling for engine builders and enthusiasts.',
  openGraph: {
    title: 'Download PISTON - Free Engine Simulation Software',
    description: 'Get started with professional-grade engine simulation. Available for Windows, macOS, and Linux.',
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
