import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
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
  title: 'PISTON - Professional Engine Simulation',
  description: 'Professional-grade engine simulation at enthusiast-accessible pricing. Physics-based thermodynamic modeling for engine builders, tuners, and automotive enthusiasts.',
  keywords: ['engine simulation', 'dyno', 'engine tuning', 'thermodynamics', 'automotive', 'performance'],
  authors: [{ name: 'PISTON Development Team' }],
  openGraph: {
    title: 'PISTON - Professional Engine Simulation',
    description: 'Professional-grade engine simulation at enthusiast-accessible pricing.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>): React.ReactElement {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
