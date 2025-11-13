import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Frequently Asked Questions',
  description:
    'Get answers to common questions about PISTON engine simulation software. Learn about accuracy, features, pricing, and how PISTON compares to professional simulation tools.',
  openGraph: {
    title: 'PISTON FAQ - Frequently Asked Questions',
    description:
      'Everything you need to know about PISTON: accuracy, features, pricing, and technical details about professional engine simulation software.',
    url: 'https://pistonsim.com/faq/',
    type: 'website',
  },
  alternates: {
    canonical: 'https://pistonsim.com/faq/',
  },
}

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode
}): React.ReactElement {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}
