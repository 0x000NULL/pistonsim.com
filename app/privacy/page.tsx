import { Metadata } from 'next'
import LegalLayout from '@/components/LegalLayout'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for PISTON engine simulation software',
}

export default function PrivacyPage(): React.ReactElement {
  return (
    <LegalLayout title="Privacy Policy" lastUpdated="November 4, 2025">
      <div className="space-y-8 text-text-secondary">
        <div>
          <h2 className="font-display font-bold text-2xl text-cyan mb-4">
            TODO: Add Privacy Policy Content
          </h2>
          <p className="mb-4">
            This page contains placeholder content. You should replace this with your actual Privacy
            Policy document, which should be reviewed by a legal professional.
          </p>
          <p>
            Suggested sections to include:
          </p>
          <ul className="list-disc list-inside space-y-2 mt-4 ml-4">
            <li>Information We Collect</li>
            <li>How We Use Information</li>
            <li>Newsletter/Email Communications</li>
            <li>Cookies and Tracking Technologies</li>
            <li>Third-Party Services</li>
            <li>Data Security</li>
            <li>Your Privacy Rights (GDPR, CCPA)</li>
            <li>Children&apos;s Privacy</li>
            <li>International Data Transfers</li>
            <li>Changes to Policy</li>
            <li>Contact Information</li>
          </ul>
        </div>

        <div>
          <h3 className="font-display font-semibold text-xl text-text-primary mb-3">
            Key Points to Address:
          </h3>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Static website - minimal data collection</li>
            <li>Email addresses collected for newsletter only</li>
            <li>No analytics tracking (mention if added later)</li>
            <li>All simulation data stored locally on user&apos;s computer</li>
            <li>Third-party email service provider (Resend) usage</li>
            <li>GDPR and CCPA compliance language</li>
            <li>Right to unsubscribe from newsletter</li>
            <li>No sale of personal information</li>
          </ul>
        </div>

        <div className="border-t-2 border-dashed border-border pt-6">
          <p className="text-text-tertiary text-sm">
            <strong>Note:</strong> Privacy policies should comply with GDPR, CCPA, and other
            applicable privacy laws. Consult with a legal professional before publishing.
          </p>
        </div>
      </div>
    </LegalLayout>
  )
}
