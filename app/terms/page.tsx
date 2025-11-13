import { Metadata } from 'next'
import LegalLayout from '@/components/LegalLayout'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms of Service for PISTON engine simulation software',
  openGraph: {
    title: 'Terms of Service - PISTON',
    description: 'Legal terms for PISTON engine simulation software',
    url: 'https://pistonsim.com/terms/',
    type: 'website',
  },
  alternates: {
    canonical: 'https://pistonsim.com/terms/',
  },
}

export default function TermsPage(): React.ReactElement {
  return (
    <LegalLayout title="Terms of Service" lastUpdated="November 4, 2025">
      <div className="space-y-12 text-text-secondary">
        {/* Introduction */}
        <div>
          <p className="mb-6 text-lg">
            Welcome to PISTON. These Terms of Service (&quot;Terms&quot;) govern your access to and use of
            the PISTON engine simulation software (&quot;Software&quot;) provided by Piston LLC
            (&quot;Company,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;). By downloading, installing, or
            using the Software, you agree to be bound by these Terms. If you do not agree to these
            Terms, do not use the Software.
          </p>
        </div>

        {/* 1. Acceptance of Terms */}
        <div>
          <h2 className="font-display font-bold text-2xl text-cyan mb-4">1. Acceptance of Terms</h2>
          <p className="mb-4">
            By accessing or using PISTON, you acknowledge that you have read, understood, and agree to
            be bound by these Terms and our Privacy Policy. These Terms constitute a legally binding
            agreement between you and Piston LLC.
          </p>
          <p>
            If you are using the Software on behalf of an organization, you represent and warrant that
            you have the authority to bind that organization to these Terms.
          </p>
        </div>

        {/* 2. License Grant */}
        <div>
          <h2 className="font-display font-bold text-2xl text-cyan mb-4">2. License Grant</h2>
          <p className="mb-4">
            Subject to your compliance with these Terms, Piston LLC grants you a limited,
            non-exclusive, non-transferable, revocable license to download, install, and use the
            Software for your personal or internal business purposes.
          </p>
          <p className="mb-4">
            <strong className="text-text-primary">You may:</strong>
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
            <li>Use the Software for engine design simulation and analysis</li>
            <li>Create and save engine configuration files</li>
            <li>Export simulation results for your own use</li>
            <li>Use the Software for commercial purposes during the alpha phase</li>
          </ul>
          <p className="mb-4">
            <strong className="text-text-primary">You may not:</strong>
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>
              Reverse engineer, decompile, disassemble, or attempt to derive the source code of the
              Software
            </li>
            <li>Modify, adapt, translate, or create derivative works based on the Software</li>
            <li>Distribute, sublicense, rent, lease, or lend the Software to any third party</li>
            <li>Remove or alter any copyright, trademark, or proprietary notices</li>
            <li>
              Use the Software for any unlawful purpose or in violation of applicable laws or
              regulations
            </li>
          </ul>
        </div>

        {/* 3. Alpha Software Disclaimer */}
        <div className="p-6 border-2 border-dashed border-accent-primary bg-accent-primary/5 rounded">
          <h2 className="font-display font-bold text-2xl text-cyan mb-4">
            3. Alpha Software Disclaimer
          </h2>
          <p className="mb-4">
            <strong className="text-text-primary">PISTON IS ALPHA SOFTWARE.</strong> This means the
            Software is in early development and may contain bugs, errors, or incomplete features. You
            acknowledge and accept the following:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
            <li>The Software may be unstable and could crash or cause data loss</li>
            <li>Features may change, be removed, or work differently in future versions</li>
            <li>Simulation results may contain inaccuracies or errors</li>
            <li>The Software is provided for evaluation and feedback purposes</li>
            <li>We make no guarantees about the Software&apos;s availability or performance</li>
          </ul>
          <p>
            <strong className="text-text-primary">
              BY USING ALPHA SOFTWARE, YOU ASSUME ALL RISKS ASSOCIATED WITH ITS USE.
            </strong>
          </p>
        </div>

        {/* 4. Simulation Accuracy and Professional Use Disclaimer */}
        <div className="p-6 border-2 border-dashed border-accent-primary bg-accent-primary/5 rounded">
          <h2 className="font-display font-bold text-2xl text-cyan mb-4">
            4. Simulation Accuracy and Professional Use Disclaimer
          </h2>
          <p className="mb-4">
            <strong className="text-primary">CRITICAL - READ CAREFULLY:</strong>
          </p>
          <p className="mb-4">
            PISTON provides estimates based on thermodynamic modeling and simulation. While we strive
            for accuracy and validate against real-world dyno data, <strong>simulation results are
            approximations</strong> and should not be treated as guaranteed outcomes.
          </p>
          <p className="mb-4">
            <strong className="text-text-primary">Actual engine performance depends on many factors
            including but not limited to:</strong>
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
            <li>Build quality and component tolerances</li>
            <li>Tuning and calibration</li>
            <li>Environmental conditions (temperature, altitude, humidity)</li>
            <li>Fuel quality and octane rating</li>
            <li>Wear and degradation of components</li>
            <li>Installation and assembly variables</li>
          </ul>
          <p className="mb-4">
            <strong className="text-text-primary">
              PISTON IS NOT A SUBSTITUTE FOR PROFESSIONAL ENGINEERING ANALYSIS.
            </strong>{' '}
            You are solely responsible for:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
            <li>Verifying all design decisions through appropriate engineering analysis</li>
            <li>Conducting physical testing before implementing any engine configuration</li>
            <li>
              Ensuring compliance with safety standards, emissions regulations, and applicable laws
            </li>
            <li>Consulting with qualified professionals for critical applications</li>
          </ul>
          <p>
            <strong className="text-text-primary">
              WE ARE NOT LIABLE FOR ANY ENGINE DAMAGE, VEHICLE DAMAGE, PROPERTY DAMAGE, PERSONAL
              INJURY, OR CONSEQUENTIAL DAMAGES RESULTING FROM YOUR USE OF SIMULATION DATA OR
              IMPLEMENTATION OF ANY ENGINE CONFIGURATION BASED ON PISTON RESULTS.
            </strong>
          </p>
        </div>

        {/* 5. Limitation of Liability */}
        <div>
          <h2 className="font-display font-bold text-2xl text-cyan mb-4">
            5. Limitation of Liability
          </h2>
          <p className="mb-4">
            TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL PISTON LLC, ITS
            OFFICERS, DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL,
            CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING WITHOUT LIMITATION:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
            <li>Loss of profits, revenue, or business opportunities</li>
            <li>Loss of data or information</li>
            <li>Cost of substitute goods or services</li>
            <li>Business interruption or downtime</li>
            <li>Engine or vehicle damage</li>
            <li>Personal injury or property damage</li>
          </ul>
          <p className="mb-4">
            ARISING OUT OF OR IN CONNECTION WITH YOUR USE OF THE SOFTWARE, WHETHER BASED ON WARRANTY,
            CONTRACT, TORT (INCLUDING NEGLIGENCE), OR ANY OTHER LEGAL THEORY, EVEN IF WE HAVE BEEN
            ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
          </p>
          <p>
            TO THE MAXIMUM EXTENT PERMITTED BY LAW, OUR TOTAL LIABILITY TO YOU FOR ALL CLAIMS ARISING
            OUT OF OR RELATING TO THESE TERMS OR THE SOFTWARE SHALL NOT EXCEED THE AMOUNT YOU PAID TO
            US FOR THE SOFTWARE IN THE TWELVE (12) MONTHS PRECEDING THE CLAIM. DURING THE ALPHA PHASE,
            SINCE THE SOFTWARE IS FREE, THIS AMOUNT IS ZERO ($0).
          </p>
        </div>

        {/* 6. Warranty Disclaimer */}
        <div>
          <h2 className="font-display font-bold text-2xl text-cyan mb-4">6. Warranty Disclaimer</h2>
          <p className="mb-4">
            THE SOFTWARE IS PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTIES
            OF ANY KIND, WHETHER EXPRESS OR IMPLIED. TO THE FULLEST EXTENT PERMITTED BY LAW, PISTON
            LLC DISCLAIMS ALL WARRANTIES, INCLUDING BUT NOT LIMITED TO:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
            <li>
              <strong>Merchantability:</strong> We do not warrant that the Software is suitable for
              any particular purpose or market
            </li>
            <li>
              <strong>Fitness for a Particular Purpose:</strong> We do not guarantee the Software
              will meet your specific requirements
            </li>
            <li>
              <strong>Accuracy:</strong> We do not warrant the accuracy, completeness, or reliability
              of simulation results
            </li>
            <li>
              <strong>Non-Infringement:</strong> We do not warrant that your use will not infringe
              third-party rights
            </li>
            <li>
              <strong>Uninterrupted Service:</strong> We do not guarantee the Software will be
              available, error-free, or uninterrupted
            </li>
          </ul>
          <p>
            Some jurisdictions do not allow the exclusion of implied warranties, so the above
            exclusions may not apply to you. You may have other rights that vary by jurisdiction.
          </p>
        </div>

        {/* 7. Intellectual Property */}
        <div>
          <h2 className="font-display font-bold text-2xl text-cyan mb-4">
            7. Intellectual Property
          </h2>
          <p className="mb-4">
            <strong className="text-text-primary">Our Property:</strong> The Software, including all
            code, algorithms, user interface, documentation, trademarks, and related materials, is the
            exclusive property of Piston LLC and is protected by U.S. and international copyright,
            trademark, and other intellectual property laws. All rights not expressly granted in these
            Terms are reserved by Piston LLC.
          </p>
          <p className="mb-4">
            <strong className="text-text-primary">Your Data:</strong> You retain all rights to engine
            configuration data, simulation parameters, and results that you create using the Software.
            We do not claim ownership of your configurations or data.
          </p>
          <p>
            We may use anonymized, aggregated data from simulations to improve the Software and
            validate our models, but we will not disclose your specific configurations or identifying
            information without your consent.
          </p>
        </div>

        {/* 8. Pricing and Payment Terms */}
        <div>
          <h2 className="font-display font-bold text-2xl text-cyan mb-4">
            8. Pricing and Payment Terms
          </h2>
          <p className="mb-4">
            <strong className="text-text-primary">Alpha Phase - Free Access:</strong> During the
            alpha development phase, PISTON is provided free of charge for both personal and
            commercial use. You are not required to provide payment information during this period.
          </p>
          <p className="mb-4">
            <strong className="text-text-primary">Future Pricing:</strong> Following the alpha phase,
            we reserve the right to introduce pricing for the Software or certain features. We will
            provide at least thirty (30) days&apos; advance notice before charging for access to the
            Software.
          </p>
          <p className="mb-4">
            <strong className="text-text-primary">Notice of Pricing Changes:</strong> Notice will be
            provided via:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
            <li>In-app notification when you launch the Software</li>
            <li>Email to your registered email address (if you subscribe to our newsletter)</li>
            <li>Announcement on our website</li>
          </ul>
          <p>
            You may continue to use the version of the Software you have installed during the alpha
            phase without charge, but updates and new features may require payment after the
            transition to paid pricing.
          </p>
        </div>

        {/* 9. User Responsibilities and Acceptable Use */}
        <div>
          <h2 className="font-display font-bold text-2xl text-cyan mb-4">
            9. User Responsibilities and Acceptable Use
          </h2>
          <p className="mb-4">You agree to:</p>
          <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
            <li>Use the Software in compliance with all applicable laws and regulations</li>
            <li>Provide accurate information if you create an account or subscribe to our services</li>
            <li>Maintain the security of your account credentials (if applicable)</li>
            <li>
              Report bugs, errors, or security vulnerabilities to us in a responsible manner
            </li>
            <li>
              Accept full responsibility for all engine designs and configurations you create
            </li>
          </ul>
          <p className="mb-4">You agree not to:</p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Attempt to hack, attack, or interfere with the Software&apos;s operation</li>
            <li>
              Use the Software to violate any person&apos;s or entity&apos;s legal rights or privacy
            </li>
            <li>Distribute malware or use the Software for any malicious purpose</li>
            <li>
              Share your license or access credentials with unauthorized users (if applicable in
              future versions)
            </li>
          </ul>
        </div>

        {/* 10. Termination */}
        <div>
          <h2 className="font-display font-bold text-2xl text-cyan mb-4">10. Termination</h2>
          <p className="mb-4">
            <strong className="text-text-primary">Your Right to Terminate:</strong> You may stop using
            the Software at any time by uninstalling it from your device.
          </p>
          <p className="mb-4">
            <strong className="text-text-primary">Our Right to Terminate:</strong> We reserve the
            right to suspend or terminate your access to the Software at any time, with or without
            notice, if we believe you have violated these Terms or engaged in conduct that harms
            Piston LLC, other users, or third parties.
          </p>
          <p>
            <strong className="text-text-primary">Effect of Termination:</strong> Upon termination,
            you must immediately cease all use of the Software and delete all copies from your
            devices. Sections of these Terms that by their nature should survive termination
            (including disclaimers, limitation of liability, and intellectual property provisions)
            shall continue in effect.
          </p>
        </div>

        {/* 11. Governing Law and Dispute Resolution */}
        <div>
          <h2 className="font-display font-bold text-2xl text-cyan mb-4">
            11. Governing Law and Dispute Resolution
          </h2>
          <p className="mb-4">
            These Terms shall be governed by and construed in accordance with the laws of the State of
            Nevada, United States, without regard to its conflict of law principles.
          </p>
          <p className="mb-4">
            Any legal action or proceeding arising out of or relating to these Terms or the Software
            shall be brought exclusively in the federal or state courts located in Nevada, and you
            consent to the personal jurisdiction of such courts.
          </p>
          <p>
            If any provision of these Terms is found to be invalid or unenforceable by a court of
            competent jurisdiction, the remaining provisions shall remain in full force and effect.
          </p>
        </div>

        {/* 12. Changes to Terms */}
        <div>
          <h2 className="font-display font-bold text-2xl text-cyan mb-4">12. Changes to Terms</h2>
          <p className="mb-4">
            We reserve the right to modify these Terms at any time. When we make changes, we will:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
            <li>Update the &quot;Last Updated&quot; date at the top of this page</li>
            <li>Provide notice of material changes via email or in-app notification</li>
            <li>Post the revised Terms on our website</li>
          </ul>
          <p>
            Your continued use of the Software after any changes to these Terms constitutes your
            acceptance of the revised Terms. If you do not agree to the modified Terms, you must stop
            using the Software.
          </p>
        </div>

        {/* 13. Contact Information */}
        <div>
          <h2 className="font-display font-bold text-2xl text-cyan mb-4">13. Contact Information</h2>
          <p className="mb-4">
            If you have questions about these Terms or wish to report a violation, please contact us
            at:
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
        </div>

        {/* 14. Entire Agreement */}
        <div>
          <h2 className="font-display font-bold text-2xl text-cyan mb-4">14. Entire Agreement</h2>
          <p>
            These Terms, together with our Privacy Policy, constitute the entire agreement between you
            and Piston LLC regarding the Software and supersede all prior agreements, understandings,
            and representations, whether written or oral.
          </p>
        </div>

        {/* Legal Notice */}
        <div className="border-t-2 border-dashed border-border pt-8">
          <p className="text-text-tertiary text-sm">
            <strong>Legal Notice:</strong> These Terms of Service were prepared to protect both Piston
            LLC and our users. While we have made every effort to ensure accuracy and completeness,
            these terms should be reviewed by your own legal counsel if you have specific concerns or
            are using the Software for critical applications.
          </p>
        </div>
      </div>
    </LegalLayout>
  )
}
