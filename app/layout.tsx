import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import ErrorBoundary from '@/components/ErrorBoundary'
import SkipLink from '@/components/SkipLink'
import MotionProvider from '@/components/MotionProvider'
import '@/lib/polyfills'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://pistonsim.com'),
  title: {
    default: 'PISTON - Professional Engine Simulation',
    template: '%s | PISTON',
  },
  description:
    'Professional-grade engine simulation at enthusiast-accessible pricing. Physics-based thermodynamic modeling for engine builders, tuners, and automotive enthusiasts.',
  keywords: [
    'engine simulation',
    'dyno simulation',
    'engine tuning',
    'thermodynamics',
    'automotive performance',
    'engine building',
    'virtual dyno',
    'GT-POWER alternative',
    'Ricardo WAVE alternative',
    'LS engine simulation',
    'engine modeling software',
    'performance tuning',
  ],
  authors: [{ name: 'PISTON Development Team' }],
  creator: 'PISTON',
  publisher: 'PISTON',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://pistonsim.com',
    siteName: 'PISTON',
    title: 'PISTON - Professional Engine Simulation',
    description:
      'Professional-grade engine simulation at enthusiast-accessible pricing. Physics-based thermodynamic modeling validated against real dyno data.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'PISTON Engine Simulation Software',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PISTON - Professional Engine Simulation',
    description:
      'Professional-grade engine simulation at enthusiast-accessible pricing. <7% error rate validated against certified dyno data.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add your verification codes here when available
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>): React.ReactElement {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased">
        <SkipLink />
        <MotionProvider>
          <ErrorBoundary>{children}</ErrorBoundary>
        </MotionProvider>
      </body>
    </html>
  )
}
