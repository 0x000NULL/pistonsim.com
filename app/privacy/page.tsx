import { Metadata } from 'next'
import LegalLayout from '@/components/LegalLayout'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for PISTON engine simulation software',
  openGraph: {
    title: 'Privacy Policy - PISTON',
    description: 'How PISTON protects your data and privacy',
    url: 'https://pistonsim.com/privacy/',
    type: 'website',
  },
  alternates: {
    canonical: 'https://pistonsim.com/privacy/',
  },
}

export default function PrivacyPage(): React.ReactElement {
  return (
    <LegalLayout title="Privacy Policy" lastUpdated="November 4, 2025">
      <div className="space-y-12 text-text-secondary">
        {/* Introduction */}
        <div>
          <p className="mb-6 text-lg">
            At Piston LLC (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;), we are committed to
            protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and
            safeguard your information when you visit our website pistonsim.com (&quot;Website&quot;)
            and use our PISTON engine simulation software (&quot;Software&quot;).
          </p>
          <p className="mb-6">
            We believe in transparency and minimal data collection. This policy describes our
            privacy practices in plain language so you understand exactly what information we collect
            and how we use it.
          </p>
          <p>
            By using our Website or Software, you agree to the collection and use of information in
            accordance with this Privacy Policy. If you do not agree with this policy, please do not
            use our services.
          </p>
        </div>

        {/* 1. Information We Collect */}
        <div>
          <h2 className="font-display font-bold text-2xl text-cyan mb-4">
            1. Information We Collect
          </h2>
          <p className="mb-4">
            We practice data minimization and only collect information necessary to provide and
            improve our services.
          </p>

          <h3 className="font-display font-semibold text-xl text-text-primary mb-3">
            1.1 Information You Provide Directly
          </h3>
          <p className="mb-4">
            <strong className="text-text-primary">Email Address:</strong> If you subscribe to our
            newsletter, we collect your email address. This is voluntary and you can unsubscribe at
            any time.
          </p>

          <h3 className="font-display font-semibold text-xl text-text-primary mb-3 mt-6">
            1.2 Technical Information Collected Automatically
          </h3>
          <p className="mb-4">
            When you visit our Website, we automatically collect certain technical information
            through Cloudflare Pages, our hosting provider:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
            <li>
              <strong>IP Address:</strong> Your Internet Protocol address, used for basic security
              and rate limiting
            </li>
            <li>
              <strong>Browser Information:</strong> Browser type and version
            </li>
            <li>
              <strong>Device Information:</strong> Device type, operating system
            </li>
            <li>
              <strong>Usage Data:</strong> Pages visited, time spent on pages, referring website
            </li>
            <li>
              <strong>Cloudflare Web Analytics:</strong> Basic page view metrics (privacy-friendly,
              no cookies or personal identifiers)
            </li>
          </ul>

          <h3 className="font-display font-semibold text-xl text-text-primary mb-3 mt-6">
            1.3 Information We Do Not Collect
          </h3>
          <p className="mb-4">
            <strong className="text-text-primary">PISTON Software is designed for privacy:</strong>
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>
              <strong>No Tracking of Engine Configurations:</strong> All engine designs and
              simulation data remain on your local computer. We do not collect, transmit, or store
              your engine configurations.
            </li>
            <li>
              <strong>No Account Information:</strong> During alpha, no account creation is required.
              We do not collect names, phone numbers, addresses, or other personal identifiers.
            </li>
            <li>
              <strong>No Behavioral Tracking:</strong> We do not track your behavior across other
              websites or apps.
            </li>
            <li>
              <strong>No Biometric or Sensitive Data:</strong> We never collect biometric,
              financial, health, or other sensitive personal information.
            </li>
          </ul>
        </div>

        {/* 2. How We Use Your Information */}
        <div>
          <h2 className="font-display font-bold text-2xl text-cyan mb-4">
            2. How We Use Your Information
          </h2>
          <p className="mb-4">We use the information we collect for the following purposes:</p>

          <h3 className="font-display font-semibold text-xl text-text-primary mb-3">
            2.1 Email Communications
          </h3>
          <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
            <li>Send you our newsletter with product updates, features, and announcements</li>
            <li>Notify you of pricing changes or important policy updates</li>
            <li>Respond to your inquiries if you contact us</li>
          </ul>

          <h3 className="font-display font-semibold text-xl text-text-primary mb-3 mt-6">
            2.2 Website Functionality and Security
          </h3>
          <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
            <li>Provide and maintain the Website</li>
            <li>Implement rate limiting to prevent abuse of our newsletter signup</li>
            <li>Detect and prevent security threats or fraudulent activity</li>
            <li>Ensure the Website functions properly on different browsers and devices</li>
          </ul>

          <h3 className="font-display font-semibold text-xl text-text-primary mb-3 mt-6">
            2.3 Analytics and Improvement
          </h3>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Understand how visitors use our Website (via Cloudflare Analytics)</li>
            <li>Identify popular content and areas for improvement</li>
            <li>Optimize Website performance and user experience</li>
          </ul>
        </div>

        {/* 3. Newsletter Communications */}
        <div className="p-6 border-2 border-dashed border-accent-primary bg-accent-primary/5 rounded">
          <h2 className="font-display font-bold text-2xl text-cyan mb-4">
            3. Newsletter Communications
          </h2>
          <p className="mb-4">
            <strong className="text-text-primary">Subscription is Voluntary:</strong> You choose
            whether to subscribe to our newsletter. We will never send you marketing emails without
            your explicit consent.
          </p>
          <p className="mb-4">
            <strong className="text-text-primary">What to Expect:</strong> Our newsletter includes:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
            <li>Software updates and new feature announcements</li>
            <li>Tips and best practices for engine simulation</li>
            <li>Important notices (pricing changes, terms updates)</li>
          </ul>
          <p className="mb-4">
            <strong className="text-text-primary">Unsubscribe Anytime:</strong> Every email includes
            a clear unsubscribe link. You can opt out instantly with one click, and we will remove
            your email from our list within 48 hours.
          </p>
          <p>
            <strong className="text-text-primary">Managed by Resend:</strong> Our newsletters are sent
            via Resend, a third-party email service provider. Resend processes your email address
            solely for the purpose of sending emails on our behalf. See Section 5 for more details.
          </p>
        </div>

        {/* 4. Cookies and Tracking Technologies */}
        <div>
          <h2 className="font-display font-bold text-2xl text-cyan mb-4">
            4. Cookies and Tracking Technologies
          </h2>
          <p className="mb-4">
            <strong className="text-text-primary">Minimal Cookie Use:</strong> Our Website uses very
            few cookies, and none for invasive tracking.
          </p>

          <h3 className="font-display font-semibold text-xl text-text-primary mb-3">
            4.1 Cookies We Use
          </h3>
          <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
            <li>
              <strong>Cloudflare Security Cookies:</strong> Essential cookies used by our hosting
              provider to protect against spam and abuse
            </li>
            <li>
              <strong>Newsletter Rate Limiting (Local Storage):</strong> We use browser local storage
              (not cookies) to prevent duplicate newsletter signups
            </li>
          </ul>

          <h3 className="font-display font-semibold text-xl text-text-primary mb-3 mt-6">
            4.2 Cloudflare Web Analytics
          </h3>
          <p className="mb-4">
            We use Cloudflare Web Analytics, a privacy-friendly analytics service that:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
            <li>Does not use cookies or persistent identifiers</li>
            <li>Does not track visitors across websites</li>
            <li>Does not collect personal information</li>
            <li>Provides aggregated, anonymous usage statistics only</li>
          </ul>
          <p className="mb-4">
            Cloudflare Analytics is GDPR and CCPA compliant and does not require cookie consent
            banners.
          </p>

          <h3 className="font-display font-semibold text-xl text-text-primary mb-3 mt-6">
            4.3 Third-Party Cookies
          </h3>
          <p>
            We do not use third-party advertising cookies or tracking pixels. We do not participate
            in ad networks or retargeting campaigns.
          </p>
        </div>

        {/* 5. Third-Party Services */}
        <div>
          <h2 className="font-display font-bold text-2xl text-cyan mb-4">5. Third-Party Services</h2>
          <p className="mb-4">
            We use the following third-party services to operate our Website and Software:
          </p>

          <h3 className="font-display font-semibold text-xl text-text-primary mb-3">
            5.1 Cloudflare Pages (Hosting and Analytics)
          </h3>
          <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
            <li>
              <strong>Purpose:</strong> Website hosting, content delivery, security, and analytics
            </li>
            <li>
              <strong>Data Shared:</strong> IP address, browser information, pages visited
            </li>
            <li>
              <strong>Privacy Policy:</strong>{' '}
              <a
                href="https://www.cloudflare.com/privacypolicy/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-primary hover:text-accent-tertiary underline"
              >
                Cloudflare Privacy Policy
              </a>
            </li>
          </ul>

          <h3 className="font-display font-semibold text-xl text-text-primary mb-3 mt-6">
            5.2 Resend (Email Service Provider)
          </h3>
          <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
            <li>
              <strong>Purpose:</strong> Newsletter delivery and email communications
            </li>
            <li>
              <strong>Data Shared:</strong> Email addresses of newsletter subscribers only
            </li>
            <li>
              <strong>Privacy Policy:</strong>{' '}
              <a
                href="https://resend.com/legal/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-primary hover:text-accent-tertiary underline"
              >
                Resend Privacy Policy
              </a>
            </li>
          </ul>

          <p className="mt-6">
            <strong className="text-text-primary">We Do Not Sell Your Data:</strong> We do not sell,
            rent, or trade your personal information to third parties. Third-party services process
            your data solely to provide the services described above.
          </p>
        </div>

        {/* 6. Data Storage and Security */}
        <div>
          <h2 className="font-display font-bold text-2xl text-cyan mb-4">
            6. Data Storage and Security
          </h2>
          <p className="mb-4">
            <strong className="text-text-primary">Your Simulation Data:</strong> All engine
            configurations, simulation parameters, and results created in the PISTON Software are
            stored locally on your computer. We do not have access to this data unless you explicitly
            share it with us (e.g., for support purposes).
          </p>
          <p className="mb-4">
            <strong className="text-text-primary">Website Data:</strong> Email addresses for
            newsletter subscriptions are stored securely by Resend in their data centers. Technical
            data (IP addresses, analytics) is processed by Cloudflare.
          </p>
          <p className="mb-4">
            <strong className="text-text-primary">Security Measures:</strong> We implement reasonable
            security measures to protect your information:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
            <li>HTTPS encryption for all Website communications</li>
            <li>Rate limiting to prevent abuse</li>
            <li>Secure API keys stored as environment variables (never exposed to clients)</li>
            <li>Regular security reviews of our infrastructure</li>
          </ul>
          <p>
            <strong className="text-text-primary">No Absolute Security:</strong> While we strive to
            protect your information, no method of transmission over the Internet or electronic
            storage is 100% secure. We cannot guarantee absolute security.
          </p>
        </div>

        {/* 7. Data Retention */}
        <div>
          <h2 className="font-display font-bold text-2xl text-cyan mb-4">7. Data Retention</h2>
          <p className="mb-4">
            <strong className="text-text-primary">Email Addresses:</strong> We retain newsletter
            subscriber email addresses until you unsubscribe or request deletion. After unsubscribing,
            your email is removed from our active list within 48 hours.
          </p>
          <p className="mb-4">
            <strong className="text-text-primary">Technical Data:</strong> Log data and analytics
            (IP addresses, page views) are typically retained by Cloudflare for 30-90 days, then
            automatically deleted or aggregated into anonymous statistics.
          </p>
          <p>
            <strong className="text-text-primary">Local Software Data:</strong> Data created in the
            PISTON Software remains on your computer indefinitely unless you delete it. We have no
            access to or control over your local data.
          </p>
        </div>

        {/* 8. Your Privacy Rights */}
        <div>
          <h2 className="font-display font-bold text-2xl text-cyan mb-4">8. Your Privacy Rights</h2>
          <p className="mb-4">Depending on your location, you may have certain privacy rights:</p>

          <h3 className="font-display font-semibold text-xl text-text-primary mb-3">
            8.1 Rights for All Users
          </h3>
          <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
            <li>
              <strong>Unsubscribe:</strong> Opt out of newsletter emails anytime via the unsubscribe
              link
            </li>
            <li>
              <strong>Request Deletion:</strong> Ask us to delete your email address from our records
            </li>
            <li>
              <strong>Access Information:</strong> Request information about what data we have about
              you (typically just your email if subscribed)
            </li>
            <li>
              <strong>Correct Information:</strong> Request correction of inaccurate information
            </li>
          </ul>

          <h3 className="font-display font-semibold text-xl text-text-primary mb-3 mt-6">
            8.2 Additional Rights (Certain Jurisdictions)
          </h3>
          <p className="mb-4">
            If you are located in the European Union, California, or other jurisdictions with
            specific privacy laws, you may have additional rights:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
            <li>
              <strong>Data Portability:</strong> Receive your data in a portable format (we can
              export your email address)
            </li>
            <li>
              <strong>Object to Processing:</strong> Object to how we process your information
            </li>
            <li>
              <strong>Restrict Processing:</strong> Request that we limit how we use your data
            </li>
            <li>
              <strong>Know Before Collection:</strong> Understand what data we collect before
              providing it
            </li>
          </ul>

          <h3 className="font-display font-semibold text-xl text-text-primary mb-3 mt-6">
            8.3 How to Exercise Your Rights
          </h3>
          <p className="mb-4">
            To exercise any of these rights, contact us at the email address in Section 12. We will
            respond to your request within 30 days.
          </p>
          <p>
            <strong className="text-text-primary">No Discrimination:</strong> We will not
            discriminate against you for exercising your privacy rights.
          </p>
        </div>

        {/* 9. Children's Privacy */}
        <div>
          <h2 className="font-display font-bold text-2xl text-cyan mb-4">9. Children&apos;s Privacy</h2>
          <p className="mb-4">
            PISTON is not intended for children under the age of 13. We do not knowingly collect
            personal information from children under 13. If you believe we have collected information
            from a child under 13, please contact us immediately and we will delete it.
          </p>
          <p>
            If you are a parent or guardian and believe your child has provided us with personal
            information, please contact us at the email address in Section 12.
          </p>
        </div>

        {/* 10. Do Not Track Signals */}
        <div>
          <h2 className="font-display font-bold text-2xl text-cyan mb-4">10. Do Not Track Signals</h2>
          <p className="mb-4">
            Some browsers support &quot;Do Not Track&quot; (DNT) signals. Because there is no
            industry standard for DNT, our Website does not specifically respond to DNT signals.
          </p>
          <p>
            However, since we use privacy-friendly Cloudflare Analytics (which doesn&apos;t track
            individuals) and do not use advertising cookies or cross-site tracking, your privacy is
            protected regardless of DNT settings.
          </p>
        </div>

        {/* 11. International Data Transfers */}
        <div>
          <h2 className="font-display font-bold text-2xl text-cyan mb-4">
            11. International Data Transfers
          </h2>
          <p className="mb-4">
            Piston LLC operates in the United States. If you access our Website from outside the
            U.S., your information may be transferred to, stored in, and processed in the United
            States or other countries where our service providers operate.
          </p>
          <p>
            By using our Website, you consent to the transfer of your information to countries that
            may have different data protection laws than your country of residence. Our service
            providers (Cloudflare, Resend) implement appropriate safeguards to protect your data.
          </p>
        </div>

        {/* 12. Changes to This Privacy Policy */}
        <div>
          <h2 className="font-display font-bold text-2xl text-cyan mb-4">
            12. Changes to This Privacy Policy
          </h2>
          <p className="mb-4">
            We may update this Privacy Policy from time to time to reflect changes in our practices,
            technology, legal requirements, or other factors. When we make changes, we will:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
            <li>Update the &quot;Last Updated&quot; date at the top of this page</li>
            <li>Notify newsletter subscribers of material changes via email</li>
            <li>Post the updated policy on this page</li>
          </ul>
          <p>
            We encourage you to review this Privacy Policy periodically. Your continued use of our
            Website after changes are posted constitutes your acceptance of the updated policy.
          </p>
        </div>

        {/* 13. Contact Us */}
        <div>
          <h2 className="font-display font-bold text-2xl text-cyan mb-4">13. Contact Us</h2>
          <p className="mb-4">
            If you have questions about this Privacy Policy, want to exercise your privacy rights,
            or have concerns about how we handle your information, please contact us:
          </p>
          <div className="p-4 border border-dashed border-border bg-background-secondary rounded">
            <p className="font-mono">
              <strong className="text-text-primary">Piston LLC</strong>
              <br />
              Email: support@pistonsim.com
              <br />
              Website: https://pistonsim.com
            </p>
          </div>
          <p className="mt-4 text-sm">
            We will respond to privacy inquiries within 30 days of receipt.
          </p>
        </div>

        {/* Summary */}
        <div className="p-6 border-2 border-dashed border-accent-primary bg-accent-primary/5 rounded">
          <h2 className="font-display font-bold text-2xl text-cyan mb-4">Privacy in Plain English</h2>
          <p className="mb-4">
            <strong className="text-text-primary">Here&apos;s what you need to know:</strong>
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>
              We only collect your email if you choose to subscribe to our newsletter. You can
              unsubscribe anytime.
            </li>
            <li>
              Your engine designs and simulation data stay on your computer. We never see them.
            </li>
            <li>
              We use privacy-friendly analytics (Cloudflare) to understand Website traffic. No
              personal tracking.
            </li>
            <li>We do not sell your information. Ever.</li>
            <li>
              Third parties (Cloudflare for hosting, Resend for emails) only process data necessary
              to provide their services.
            </li>
            <li>You can request deletion of your data or access what we have about you anytime.</li>
          </ul>
        </div>

        {/* Legal Notice */}
        <div className="border-t-2 border-dashed border-border pt-8">
          <p className="text-text-tertiary text-sm">
            <strong>Legal Notice:</strong> This Privacy Policy was prepared in good faith to
            accurately describe our privacy practices. While we strive for compliance with applicable
            privacy laws, we recommend consulting with a legal professional if you have specific
            compliance concerns or questions about your privacy rights.
          </p>
        </div>
      </div>
    </LegalLayout>
  )
}
