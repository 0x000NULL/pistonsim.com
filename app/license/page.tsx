import { Metadata } from 'next'
import LegalLayout from '@/components/LegalLayout'

export const metadata: Metadata = {
  title: 'License Agreement',
  description: 'End User License Agreement (EULA) for PISTON engine simulation software',
}

export default function LicensePage(): React.ReactElement {
  return (
    <LegalLayout title="License Agreement (EULA)" lastUpdated="November 4, 2025">
      <div className="space-y-12 text-text-secondary">
        {/* Introduction */}
        <div>
          <p className="mb-6 text-lg">
            This License Agreement (&quot;Agreement&quot;) governs your use of the PISTON engine
            simulation software (&quot;Software&quot;) and the pistonsim.com website
            (&quot;Website&quot;), both provided by Piston LLC (&quot;Company,&quot; &quot;we,&quot;
            &quot;us,&quot; or &quot;our&quot;). By installing, accessing, or using the Software or
            Website, you agree to be bound by the terms of this Agreement.
          </p>
          <p className="mb-6">
            This Agreement works together with our Terms of Service and Privacy Policy. In case of
            conflict, the more specific terms in this License Agreement shall control for matters
            relating to intellectual property and licensing.
          </p>
          <p>
            <strong className="text-text-primary">PLEASE READ THIS AGREEMENT CAREFULLY.</strong> If
            you do not agree to these terms, do not install, access, or use the Software or Website.
          </p>
        </div>

        {/* 1. Grant of License - Software */}
        <div>
          <h2 className="font-display font-bold text-2xl text-cyan mb-4">
            1. Grant of License - PISTON Software
          </h2>
          <p className="mb-4">
            Subject to your compliance with this Agreement, Piston LLC grants you a limited,
            non-exclusive, non-transferable, revocable license to install and use the PISTON Software
            for your personal or internal business purposes during the alpha evaluation period.
          </p>

          <h3 className="font-display font-semibold text-xl text-text-primary mb-3 mt-6">
            1.1 Alpha Evaluation License
          </h3>
          <p className="mb-4">
            During the alpha phase, the Software is provided free of charge as an evaluation version.
            This license allows you to:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
            <li>Install and use the Software on devices you own or control</li>
            <li>Use the Software for personal projects and internal business purposes</li>
            <li>Create, modify, and export engine configurations and simulation data</li>
            <li>Evaluate the Software&apos;s capabilities and provide feedback</li>
          </ul>

          <h3 className="font-display font-semibold text-xl text-text-primary mb-3 mt-6">
            1.2 Commercial Use During Alpha
          </h3>
          <p className="mb-4">
            You may use the Software for commercial purposes during the alpha phase at no charge.
            However, following the alpha period, commercial use may require a paid commercial license.
            We will provide at least 30 days&apos; advance notice before requiring payment for
            commercial use.
          </p>
          <p>
            <strong className="text-text-primary">Commercial use</strong> means using the Software in
            connection with a business, revenue-generating activity, or professional services for
            which you receive compensation.
          </p>
        </div>

        {/* 2. License Restrictions */}
        <div className="p-6 border-2 border-dashed border-accent-primary bg-accent-primary/5 rounded">
          <h2 className="font-display font-bold text-2xl text-cyan mb-4">2. License Restrictions</h2>
          <p className="mb-4">
            <strong className="text-text-primary">You expressly agree NOT to:</strong>
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
            <li>
              <strong>Redistribute:</strong> Copy, distribute, sublicense, sell, rent, lease, or lend
              the Software to any third party
            </li>
            <li>
              <strong>Modify Core Software:</strong> Reverse engineer, decompile, disassemble, or
              attempt to derive the source code of the Software
            </li>
            <li>
              <strong>Create Derivative Works:</strong> Modify, adapt, translate, or create
              derivative works based on the Software
            </li>
            <li>
              <strong>Remove Notices:</strong> Remove, alter, or obscure any copyright, trademark, or
              proprietary rights notices
            </li>
            <li>
              <strong>Circumvent Protection:</strong> Attempt to disable, bypass, or circumvent any
              security features or license enforcement mechanisms
            </li>
            <li>
              <strong>Compete:</strong> Use the Software to develop competing engine simulation
              software or services
            </li>
            <li>
              <strong>Benchmark Publicly:</strong> Publish or disclose performance benchmarks or
              analysis of the Software without our prior written consent
            </li>
          </ul>
          <p>
            <strong className="text-text-primary">Note:</strong> You may customize engine
            configurations, create simulation parameters, and modify settings within the
            Software&apos;s intended functionality for your own use. This restriction applies to
            modifying the Software&apos;s code, algorithms, or core functionality.
          </p>
        </div>

        {/* 3. Intellectual Property Ownership */}
        <div>
          <h2 className="font-display font-bold text-2xl text-cyan mb-4">
            3. Intellectual Property Ownership
          </h2>

          <h3 className="font-display font-semibold text-xl text-text-primary mb-3">
            3.1 Software Ownership
          </h3>
          <p className="mb-4">
            The PISTON Software, including all source code, object code, algorithms, thermodynamic
            models, user interfaces, documentation, and related materials, is the exclusive property
            of Piston LLC and is protected by United States and international copyright, patent,
            trademark, and trade secret laws.
          </p>
          <p className="mb-4">
            <strong className="text-text-primary">All rights not expressly granted in this Agreement
            are reserved by Piston LLC.</strong> This license does not transfer ownership of the
            Software to you; you are merely granted a limited right to use it under the terms herein.
          </p>

          <h3 className="font-display font-semibold text-xl text-text-primary mb-3 mt-6">
            3.2 Website and Content
          </h3>
          <p className="mb-4">
            All content on the pistonsim.com Website, including but not limited to text, graphics,
            logos, images, videos, designs, and the overall &quot;look and feel,&quot; is owned by
            Piston LLC and protected by copyright and other intellectual property laws.
          </p>
          <p className="mb-4">
            <strong className="text-text-primary">Permitted Use:</strong> You may view, print, and
            download Website content solely for your personal, non-commercial reference. You may not:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Reproduce, republish, or redistribute Website content</li>
            <li>Use Website content for commercial purposes without written permission</li>
            <li>Create derivative works based on Website content</li>
            <li>Frame or mirror any portion of the Website</li>
          </ul>
        </div>

        {/* 4. Your Data and Configurations */}
        <div>
          <h2 className="font-display font-bold text-2xl text-cyan mb-4">
            4. Your Data and Configurations
          </h2>
          <p className="mb-4">
            <strong className="text-text-primary">You Own Your Data:</strong> You retain all rights,
            title, and interest in and to the engine configurations, simulation parameters, output
            data, and results (&quot;User Data&quot;) that you create using the Software.
          </p>
          <p className="mb-4">
            <strong className="text-text-primary">You May:</strong>
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
            <li>Export and share your User Data in any format provided by the Software</li>
            <li>Use your simulation results for any lawful purpose</li>
            <li>Publish, present, or disclose your engine designs and simulation outcomes</li>
            <li>Store backups of your User Data</li>
          </ul>
          <p className="mb-4">
            <strong className="text-text-primary">Limited License to Us:</strong> By using the
            Software, you grant Piston LLC a limited, non-exclusive license to process your User Data
            solely for the purpose of:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>
              Enabling the Software to function (e.g., running simulations, storing configurations
              locally)
            </li>
            <li>
              Improving our thermodynamic models using anonymized, aggregated data (we will never
              disclose your specific configurations or identifying information)
            </li>
          </ul>
        </div>

        {/* 5. Trademarks */}
        <div>
          <h2 className="font-display font-bold text-2xl text-cyan mb-4">5. Trademarks</h2>
          <p className="mb-4">
            <strong className="text-text-primary">PISTON</strong> and the PISTON logo are trademarks
            or registered trademarks of Piston LLC. All other trademarks, service marks, and trade
            names referenced on the Website or in the Software are the property of their respective
            owners.
          </p>
          <p className="mb-4">
            <strong className="text-text-primary">Trademark Usage:</strong> You may refer to PISTON
            by name when discussing or describing the Software (e.g., &quot;simulated using
            PISTON&quot;), but you may not:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Use our trademarks in a way that suggests endorsement or affiliation without permission</li>
            <li>Register domain names, social media handles, or business names containing &quot;PISTON&quot; without authorization</li>
            <li>Modify or combine our trademarks with other marks or designs</li>
          </ul>
        </div>

        {/* 6. Simulation Disclaimer */}
        <div className="p-6 border-2 border-dashed border-accent-primary bg-accent-primary/5 rounded">
          <h2 className="font-display font-bold text-2xl text-cyan mb-4">
            6. Simulation Accuracy Disclaimer
          </h2>
          <p className="mb-4">
            <strong className="text-text-primary">CRITICAL - PLEASE READ:</strong>
          </p>
          <p className="mb-4">
            PISTON provides <strong>estimates and approximations</strong> based on thermodynamic
            modeling and simulation. While we validate our models against real-world dyno data and
            strive for accuracy, <strong>simulation results are not guaranteed outcomes</strong>.
          </p>
          <p className="mb-4">
            <strong className="text-text-primary">Real-world engine performance depends on countless
            variables including but not limited to:</strong>
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
            <li>Manufacturing tolerances and component quality</li>
            <li>Assembly precision and installation quality</li>
            <li>Tuning, calibration, and ECU programming</li>
            <li>Environmental factors (temperature, altitude, humidity, air quality)</li>
            <li>Fuel quality, octane rating, and additives</li>
            <li>Break-in procedures and engine condition</li>
            <li>Dynamometer accuracy and testing methodology</li>
          </ul>
          <p className="mb-4">
            <strong className="text-text-primary">PISTON IS A DESIGN AND PLANNING TOOL, NOT A
            SUBSTITUTE FOR PROFESSIONAL ENGINEERING ANALYSIS OR PHYSICAL TESTING.</strong>
          </p>
          <p>
            You are solely responsible for verifying all design decisions through appropriate
            engineering analysis, consulting with qualified professionals, and conducting physical
            testing before implementing any engine configuration. We are not liable for any damages,
            losses, or consequences resulting from your use of simulation data.
          </p>
        </div>

        {/* 7. Third-Party Components */}
        <div>
          <h2 className="font-display font-bold text-2xl text-cyan mb-4">
            7. Third-Party Open Source Components
          </h2>
          <p className="mb-4">
            The Software and Website may incorporate or be built using third-party open source
            software components. These components are licensed under their respective open source
            licenses, which may include:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
            <li>
              <strong>React</strong> - MIT License (Facebook, Inc.)
            </li>
            <li>
              <strong>Next.js</strong> - MIT License (Vercel, Inc.)
            </li>
            <li>
              <strong>Tailwind CSS</strong> - MIT License (Tailwind Labs, Inc.)
            </li>
            <li>
              <strong>Framer Motion</strong> - MIT License (Framer B.V.)
            </li>
            <li>
              <strong>React Icons</strong> - MIT License (Various Contributors)
            </li>
          </ul>
          <p className="mb-4">
            The licenses for these third-party components are available in the Software&apos;s
            documentation or source repository (when applicable). Your use of these components is
            governed by their respective licenses, not this Agreement.
          </p>
          <p>
            <strong className="text-text-primary">Acknowledgment:</strong> We are grateful to the
            open source community for their contributions, which enable us to build PISTON.
          </p>
        </div>

        {/* 8. Updates and Modifications */}
        <div>
          <h2 className="font-display font-bold text-2xl text-cyan mb-4">
            8. Updates and Modifications
          </h2>
          <p className="mb-4">
            <strong className="text-text-primary">Software Updates:</strong> During the alpha phase,
            we may release updates, patches, bug fixes, or new versions of the Software. You are not
            obligated to install updates, but we strongly recommend doing so for improved performance,
            accuracy, and security.
          </p>
          <p className="mb-4">
            Updates may introduce new features, remove existing features, or change functionality.
            Alpha software is inherently unstable and subject to frequent changes.
          </p>
          <p>
            <strong className="text-text-primary">Automatic Updates:</strong> The Software may check
            for and notify you of available updates. We do not automatically install updates without
            your consent during the alpha phase.
          </p>
        </div>

        {/* 9. Support and Maintenance */}
        <div>
          <h2 className="font-display font-bold text-2xl text-cyan mb-4">
            9. Support and Maintenance
          </h2>
          <p className="mb-4">
            <strong className="text-text-primary">Alpha Support:</strong> As alpha software, PISTON
            is provided with limited support. We may offer:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
            <li>Bug reports and issue tracking</li>
            <li>Community forums or discussion channels</li>
            <li>Email support for critical issues (support@pistonsim.com)</li>
            <li>Documentation and user guides</li>
          </ul>
          <p className="mb-4">
            <strong className="text-text-primary">No Guarantee of Support:</strong> We do not
            guarantee response times, bug fixes, or resolution of issues during the alpha phase.
            Support is provided on a best-effort basis.
          </p>
          <p>
            <strong className="text-text-primary">Feedback:</strong> We encourage you to provide
            feedback, report bugs, and suggest features. While we appreciate your input, we are not
            obligated to implement any suggestions or fix reported issues.
          </p>
        </div>

        {/* 10. Termination */}
        <div>
          <h2 className="font-display font-bold text-2xl text-cyan mb-4">10. Termination</h2>
          <p className="mb-4">
            <strong className="text-text-primary">Your Right to Terminate:</strong> You may terminate
            this Agreement at any time by uninstalling the Software and ceasing to use the Website.
          </p>
          <p className="mb-4">
            <strong className="text-text-primary">Our Right to Terminate:</strong> We reserve the
            right to terminate or suspend your license immediately, with or without notice, if:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
            <li>You violate any term of this Agreement</li>
            <li>You engage in conduct that harms Piston LLC, other users, or third parties</li>
            <li>
              We discontinue the alpha program or decide to cease offering the Software (we will
              provide reasonable notice if commercially feasible)
            </li>
          </ul>
          <p>
            <strong className="text-text-primary">Effect of Termination:</strong> Upon termination,
            you must immediately cease all use of the Software and Website, uninstall the Software,
            and delete all copies. Your User Data remains yours and is not affected by termination.
            Sections of this Agreement that by their nature should survive (including disclaimers,
            limitation of liability, and intellectual property provisions) continue in effect.
          </p>
        </div>

        {/* 11. Warranty Disclaimer */}
        <div>
          <h2 className="font-display font-bold text-2xl text-cyan mb-4">11. Warranty Disclaimer</h2>
          <p className="mb-4">
            THE SOFTWARE AND WEBSITE ARE PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot;
            WITHOUT WARRANTIES OF ANY KIND, WHETHER EXPRESS, IMPLIED, OR STATUTORY.
          </p>
          <p className="mb-4">
            TO THE FULLEST EXTENT PERMITTED BY LAW, PISTON LLC DISCLAIMS ALL WARRANTIES, INCLUDING
            BUT NOT LIMITED TO:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
            <li>
              <strong>Merchantability:</strong> We do not warrant that the Software is suitable for
              any particular market or purpose
            </li>
            <li>
              <strong>Fitness for a Particular Purpose:</strong> We do not guarantee the Software
              will meet your specific needs or requirements
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
              <strong>Uninterrupted Operation:</strong> We do not guarantee the Software will be
              error-free, uninterrupted, or free from bugs
            </li>
            <li>
              <strong>Security:</strong> We do not warrant that the Software is free from viruses,
              malware, or security vulnerabilities
            </li>
          </ul>
          <p>
            Some jurisdictions do not allow the exclusion of implied warranties, so the above
            exclusions may not apply to you. You may have other rights that vary by jurisdiction.
          </p>
        </div>

        {/* 12. Limitation of Liability */}
        <div>
          <h2 className="font-display font-bold text-2xl text-cyan mb-4">
            12. Limitation of Liability
          </h2>
          <p className="mb-4">
            TO THE MAXIMUM EXTENT PERMITTED BY LAW, IN NO EVENT SHALL PISTON LLC, ITS OFFICERS,
            DIRECTORS, EMPLOYEES, CONTRACTORS, OR AGENTS BE LIABLE FOR ANY:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
            <li>
              <strong>Indirect, Incidental, Special, Consequential, or Punitive Damages</strong>
            </li>
            <li>
              <strong>Loss of Profits, Revenue, Business Opportunities, or Goodwill</strong>
            </li>
            <li>
              <strong>Loss of Data, Information, or Configurations</strong>
            </li>
            <li>
              <strong>Cost of Substitute Goods or Services</strong>
            </li>
            <li>
              <strong>Business Interruption or Downtime</strong>
            </li>
            <li>
              <strong>Engine Damage, Vehicle Damage, or Property Damage</strong>
            </li>
            <li>
              <strong>Personal Injury or Death</strong>
            </li>
          </ul>
          <p className="mb-4">
            ARISING OUT OF OR RELATED TO THIS AGREEMENT, THE SOFTWARE, OR THE WEBSITE, WHETHER BASED
            ON WARRANTY, CONTRACT, TORT (INCLUDING NEGLIGENCE), STRICT LIABILITY, OR ANY OTHER LEGAL
            THEORY, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
          </p>
          <p>
            TO THE MAXIMUM EXTENT PERMITTED BY LAW, OUR TOTAL LIABILITY FOR ALL CLAIMS SHALL NOT
            EXCEED THE AMOUNT YOU PAID TO US FOR THE SOFTWARE IN THE TWELVE (12) MONTHS PRECEDING THE
            CLAIM. DURING THE ALPHA PHASE, SINCE THE SOFTWARE IS FREE, THIS AMOUNT IS ZERO ($0).
          </p>
        </div>

        {/* 13. Changes to This Agreement */}
        <div>
          <h2 className="font-display font-bold text-2xl text-cyan mb-4">
            13. Changes to This Agreement
          </h2>
          <p className="mb-4">
            We reserve the right to modify this License Agreement at any time. When we make changes,
            we will:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
            <li>Update the &quot;Last Updated&quot; date at the top of this page</li>
            <li>Provide notice of material changes via email or in-app notification</li>
            <li>Post the revised Agreement on our Website</li>
          </ul>
          <p className="mb-4">
            Your continued use of the Software or Website after changes are posted constitutes your
            acceptance of the modified Agreement. If you do not agree to the modified terms, you must
            stop using the Software and Website.
          </p>
          <p>
            <strong className="text-text-primary">Material Changes:</strong> For changes that
            materially affect your rights (such as pricing, license restrictions, or liability), we
            will provide at least 30 days&apos; advance notice before the changes take effect.
          </p>
        </div>

        {/* 14. Governing Law */}
        <div>
          <h2 className="font-display font-bold text-2xl text-cyan mb-4">14. Governing Law</h2>
          <p className="mb-4">
            This Agreement shall be governed by and construed in accordance with the laws of the State
            of Nevada, United States, without regard to its conflict of law principles.
          </p>
          <p>
            Any legal action or proceeding arising out of or relating to this Agreement shall be
            brought exclusively in the federal or state courts located in Nevada, and you consent to
            the personal jurisdiction of such courts.
          </p>
        </div>

        {/* 15. Contact Information */}
        <div>
          <h2 className="font-display font-bold text-2xl text-cyan mb-4">15. Contact Information</h2>
          <p className="mb-4">
            If you have questions about this License Agreement or wish to request permissions beyond
            the scope of this license, please contact us:
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

        {/* Summary */}
        <div className="p-6 border-2 border-dashed border-accent-primary bg-accent-primary/5 rounded">
          <h2 className="font-display font-bold text-2xl text-cyan mb-4">License in Plain English</h2>
          <p className="mb-4">
            <strong className="text-text-primary">Here&apos;s the summary:</strong>
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>
              <strong>Free during alpha:</strong> Use PISTON for free (personal and commercial) while
              we&apos;re in alpha testing
            </li>
            <li>
              <strong>Don&apos;t redistribute:</strong> You can&apos;t share, sell, or give the
              software to others
            </li>
            <li>
              <strong>Don&apos;t modify the code:</strong> You can&apos;t reverse engineer or change
              the software itself (but you can customize engine configs)
            </li>
            <li>
              <strong>You own your data:</strong> All engine designs and simulation results you create
              are yours
            </li>
            <li>
              <strong>Use at your own risk:</strong> Simulations are estimates - verify everything
              before building
            </li>
            <li>
              <strong>No warranties:</strong> Alpha software is provided as-is with bugs and no
              guarantees
            </li>
            <li>
              <strong>Website content is copyrighted:</strong> You can view our site but can&apos;t
              copy/republish the content
            </li>
          </ul>
        </div>

        {/* Legal Notice */}
        <div className="border-t-2 border-dashed border-border pt-8">
          <p className="text-text-tertiary text-sm">
            <strong>Legal Notice:</strong> This License Agreement is a legally binding contract
            between you and Piston LLC. While we have made every effort to ensure accuracy and
            completeness, we recommend consulting with a legal professional if you have questions
            about your rights and obligations under this Agreement.
          </p>
        </div>
      </div>
    </LegalLayout>
  )
}
