import { Metadata } from 'next'
import LegalLayout from '@/components/LegalLayout'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms of Service for PISTON engine simulation software',
}

export default function TermsPage(): React.ReactElement {
  return (
    <LegalLayout title="Terms of Service" lastUpdated="November 4, 2025">
      <div className="space-y-8 text-text-secondary">
        <div>
          <h2 className="font-display font-bold text-2xl text-cyan mb-4">
            TODO: Add Terms of Service Content
          </h2>
          <p className="mb-4">
            This page contains placeholder content. You should replace this with your actual Terms of
            Service document, which should be reviewed by a legal professional.
          </p>
          <p>
            Suggested sections to include:
          </p>
          <ul className="list-disc list-inside space-y-2 mt-4 ml-4">
            <li>Acceptance of Terms</li>
            <li>Software License Grant</li>
            <li>Alpha Software Disclaimer</li>
            <li>Limitation of Liability</li>
            <li>Warranty Disclaimer</li>
            <li>Acceptable Use Policy</li>
            <li>Intellectual Property Rights</li>
            <li>Termination</li>
            <li>Governing Law</li>
            <li>Changes to Terms</li>
          </ul>
        </div>

        <div>
          <h3 className="font-display font-semibold text-xl text-text-primary mb-3">
            Key Points to Address:
          </h3>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Alpha software provided &quot;as-is&quot;</li>
            <li>No warranty for accuracy of simulation results</li>
            <li>Not liable for engine damage from simulation-based decisions</li>
            <li>Free during alpha, pricing subject to change with notice</li>
            <li>Users retain rights to their configurations and data</li>
            <li>Prohibited uses (reverse engineering, redistribution, etc.)</li>
          </ul>
        </div>

        <div className="border-t-2 border-dashed border-border pt-6">
          <p className="text-text-tertiary text-sm">
            <strong>Note:</strong> It is strongly recommended that you consult with a legal
            professional before publishing your Terms of Service. This placeholder is for
            structural guidance only.
          </p>
        </div>
      </div>
    </LegalLayout>
  )
}
