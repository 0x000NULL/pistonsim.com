import { Metadata } from 'next'
import LegalLayout from '@/components/LegalLayout'

export const metadata: Metadata = {
  title: 'License Agreement',
  description: 'End User License Agreement (EULA) for PISTON engine simulation software',
}

export default function LicensePage(): React.ReactElement {
  return (
    <LegalLayout title="License Agreement (EULA)" lastUpdated="November 4, 2025">
      <div className="space-y-8 text-text-secondary">
        <div>
          <h2 className="font-display font-bold text-2xl text-cyan mb-4">
            TODO: Add License Agreement Content
          </h2>
          <p className="mb-4">
            This page contains placeholder content. You should replace this with your actual End User
            License Agreement (EULA), which should be reviewed by a legal professional.
          </p>
          <p>
            Suggested sections to include:
          </p>
          <ul className="list-disc list-inside space-y-2 mt-4 ml-4">
            <li>Grant of License</li>
            <li>License Restrictions</li>
            <li>Intellectual Property Ownership</li>
            <li>Alpha Testing Terms</li>
            <li>Simulation Accuracy Disclaimer</li>
            <li>Professional Use Disclaimer</li>
            <li>Updates and Modifications</li>
            <li>Support and Maintenance</li>
            <li>Termination</li>
            <li>Indemnification</li>
            <li>Limitation of Liability</li>
            <li>Warranty Disclaimers</li>
          </ul>
        </div>

        <div>
          <h3 className="font-display font-semibold text-xl text-text-primary mb-3">
            Key Points to Address:
          </h3>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Non-exclusive, non-transferable license to use software</li>
            <li>Prohibition on reverse engineering, decompiling, or disassembling</li>
            <li>Clear disclaimer about simulation results accuracy</li>
            <li>Not a substitute for professional engineering analysis</li>
            <li>No liability for real-world implementation based on simulations</li>
            <li>Alpha software provided &quot;as-is&quot; without warranties</li>
            <li>User retains ownership of their configuration data</li>
            <li>Free license during alpha phase</li>
            <li>Right to modify license terms with reasonable notice</li>
          </ul>
        </div>

        <div>
          <h3 className="font-display font-semibold text-xl text-text-primary mb-3">
            Important Disclaimers:
          </h3>
          <div className="p-4 border border-dashed border-accent-primary bg-accent-primary/5 rounded">
            <p className="mb-2">
              <strong>Simulation Disclaimer:</strong> PISTON provides estimates based on
              thermodynamic modeling. Actual engine performance depends on many factors including
              build quality, tuning, environmental conditions, and component tolerances.
            </p>
            <p>
              <strong>Professional Responsibility:</strong> Users are responsible for verifying all
              design decisions through appropriate engineering analysis and physical testing before
              implementation.
            </p>
          </div>
        </div>

        <div className="border-t-2 border-dashed border-border pt-6">
          <p className="text-text-tertiary text-sm">
            <strong>Note:</strong> It is strongly recommended that you consult with a legal
            professional before publishing your EULA. This placeholder is for structural guidance
            only.
          </p>
        </div>
      </div>
    </LegalLayout>
  )
}
