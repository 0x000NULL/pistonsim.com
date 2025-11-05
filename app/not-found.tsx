import type { Metadata } from 'next'
import Button from '@/components/Button'

export const metadata: Metadata = {
  title: '404 - Page Not Found | PISTON',
  description: 'The page you are looking for could not be found.',
}

export default function NotFound(): React.ReactElement {
  return (
    <div className="min-h-screen bg-background-primary flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <h1 className="font-display text-8xl md:text-9xl font-bold text-accent-primary mb-4">
          404
        </h1>
        <h2 className="font-display text-2xl md:text-3xl font-semibold text-text-primary mb-4">
          Page Not Found
        </h2>
        <p className="text-text-secondary text-lg mb-8">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button href="/" variant="primary" size="md">
            Back to Home
          </Button>
          <Button href="/features/" variant="secondary" size="md">
            View Features
          </Button>
        </div>
      </div>
    </div>
  )
}
