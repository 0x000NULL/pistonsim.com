'use client';

import React from 'react';
import { m } from 'framer-motion';
import { FaRocket, FaCheckCircle, FaWrench, FaBug, FaExclamationTriangle, FaClock } from 'react-icons/fa';
import NewsletterForm from '@/components/NewsletterForm';
import { fadeInUp } from '@/lib/animations';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface ChangelogEntry {
  version: string;
  date: string;
  status: 'current' | 'upcoming' | 'released';
  features: string[];
  improvements: string[];
  bugFixes: string[];
  breaking?: string[];
  notes?: string;
}

export default function ChangelogPage(): React.ReactElement {
  const changelog: ChangelogEntry[] = [
    {
      version: '0.1.0-alpha',
      date: 'TBD (Current)',
      status: 'current',
      features: [
        'Virtual dyno system with SAE J1349 environmental correction',
        'Two-zone combustion modeling using Wiebe function',
        'Slider-crank kinematics and Chen-Flynn friction modeling',
        'Heat transfer modeling (convection, radiation)',
        'Multi-fuel support (gasoline 91/93 octane, E85)',
        'Real parts database: 50+ parts from GM LS, Honda B/K, Small Block Chevy families',
        'Intelligent parts compatibility checking (bore spacing, valve clearance, fitment)',
        'CSV export for data analysis',
        'Command-line interface (CLI)',
      ],
      improvements: [],
      bugFixes: [],
      notes: 'Initial alpha release. Free for personal and commercial use during testing phase.',
    },
    {
      version: '0.2.0-alpha',
      date: 'Phase 2 (Months 4-6)',
      status: 'upcoming',
      features: [
        'Dear ImGui graphical user interface (GUI)',
        'Real-time power and torque curve visualization',
        'Interactive parts browser with search and filters',
        'Configuration save/load with GUI',
        'Enhanced combustion modeling (refined Wiebe parameters)',
        'Improved volumetric efficiency calculations',
        'JSON export format',
        'Comparison mode: side-by-side configuration analysis',
      ],
      improvements: [
        'Faster simulation engine (2-3x speedup)',
        'More detailed validation reports',
        'Expanded parts database (75+ parts)',
        'Better error messages and validation feedback',
      ],
      bugFixes: [],
      breaking: [
        'Configuration file format update (automatic migration tool provided)',
      ],
      notes: 'Major usability improvements with GUI introduction. Still free during alpha.',
    },
    {
      version: '0.3.0-alpha',
      date: 'Phase 3 (Months 7-9)',
      status: 'upcoming',
      features: [
        'Turbocharger simulation (compressor maps, wastegate control)',
        'Supercharger simulation (Roots, twin-screw, centrifugal)',
        'Intercooler modeling (efficiency, pressure drop)',
        'Boost pressure vs. RPM curves',
        'Compressor surge detection',
        'Custom turbo/supercharger parts database',
      ],
      improvements: [
        'Enhanced thermodynamic solver for boosted applications',
        'Knock resistance estimates for forced induction',
        'Fuel system requirements calculator (injector sizing)',
        'Updated parts database (100+ parts including FI components)',
      ],
      bugFixes: [],
      notes: 'Forced induction support - the most requested feature!',
    },
    {
      version: '0.4.0-beta',
      date: 'Phase 4+ (Production)',
      status: 'upcoming',
      features: [
        'ECU simulation (fuel, timing maps)',
        'Knock prediction based on octane and compression',
        'Variable valve timing (VVT) simulation',
        'Emissions estimation (CO2, NOx)',
        'Transmission modeling (gear ratios, final drive)',
        'Vehicle simulation (weight, drag, acceleration)',
        'Cost calculator (parts pricing integration)',
        'Failure prediction (stress analysis on rods, pistons)',
        'Custom parts creation (user-defined components)',
        'API access for programmatic control',
      ],
      improvements: [
        'Cloud sync for configurations',
        'Community parts database (user contributions)',
        '3D visualization of engine components',
        'Mobile app (iOS/Android) for remote monitoring',
        'Multi-language support',
      ],
      bugFixes: [],
      notes: 'Beta release. Transition to paid tiers with 30-day notice. Free tier remains available.',
    },
  ];

  const roadmapPhases = [
    {
      phase: 'Phase 1 (Months 1-3)',
      title: 'Foundation',
      status: 'current',
      items: [
        'Core thermodynamic engine',
        'Parts database (50+ parts)',
        'CLI interface',
        'CSV export',
        'Dyno validation (LS3, LSA)',
      ],
    },
    {
      phase: 'Phase 2 (Months 4-6)',
      title: 'Enhanced Models & GUI',
      status: 'upcoming',
      items: [
        'Dear ImGui interface',
        'Improved combustion models',
        'Better VE calculations',
        'Real-time graphing',
        'Comparison mode',
      ],
    },
    {
      phase: 'Phase 3 (Months 7-9)',
      title: 'Forced Induction',
      status: 'upcoming',
      items: [
        'Turbocharger simulation',
        'Supercharger simulation',
        'Boost control',
        'Intercooler modeling',
        'Compressor maps',
      ],
    },
    {
      phase: 'Phase 4+ (Production)',
      title: 'Advanced Systems',
      status: 'upcoming',
      items: [
        'ECU simulation',
        'Knock prediction',
        'VVT modeling',
        'Transmission modeling',
        'Custom parts creation',
        'Cloud sync & API',
      ],
    },
  ];

  return (
    <>
      <Header />
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="container-custom py-20 md:py-32">
        <m.div
          initial="initial"
          animate="animate"
          variants={fadeInUp}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="font-mono text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            CHANGELOG
          </h1>
          <p className="text-lg md:text-xl text-text-secondary mb-12">
            Version history, feature updates, and development roadmap
          </p>
        </m.div>
      </section>

      {/* Changelog Entries */}
      <section className="py-20 bg-background-secondary">
        <div className="container-custom max-w-5xl">
          <div className="space-y-8">
            {changelog.map((entry, index) => (
              <m.div
                key={entry.version}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ delay: index * 0.05 }}
                className={`border-2 border-dashed p-8 ${
                  entry.status === 'current'
                    ? 'border-accent-primary bg-accent-primary/5'
                    : 'border-border'
                }`}
              >
                {/* Version Header */}
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h2 className="font-mono text-2xl md:text-3xl font-bold mb-2">
                      v{entry.version}
                    </h2>
                    <p className="text-text-secondary flex items-center gap-2">
                      <FaClock className="w-4 h-4" />
                      {entry.date}
                    </p>
                  </div>
                  {entry.status === 'current' && (
                    <span className="px-4 py-2 bg-accent-primary text-black font-mono font-bold text-sm">
                      CURRENT
                    </span>
                  )}
                  {entry.status === 'upcoming' && (
                    <span className="px-4 py-2 bg-background-secondary border-2 border-dashed border-border font-mono font-bold text-sm">
                      UPCOMING
                    </span>
                  )}
                </div>

                {/* Features */}
                {entry.features.length > 0 && (
                  <div className="mb-6">
                    <h3 className="font-mono text-lg font-bold mb-3 flex items-center gap-2">
                      <FaRocket className="text-accent-primary" />
                      New Features
                    </h3>
                    <ul className="space-y-2">
                      {entry.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2 text-text-secondary">
                          <FaCheckCircle className="w-4 h-4 text-accent-primary mt-1 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Improvements */}
                {entry.improvements.length > 0 && (
                  <div className="mb-6">
                    <h3 className="font-mono text-lg font-bold mb-3 flex items-center gap-2">
                      <FaWrench className="text-accent-tertiary" />
                      Improvements
                    </h3>
                    <ul className="space-y-2">
                      {entry.improvements.map((improvement, i) => (
                        <li key={i} className="flex items-start gap-2 text-text-secondary">
                          <FaCheckCircle className="w-4 h-4 text-accent-tertiary mt-1 flex-shrink-0" />
                          <span>{improvement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Bug Fixes */}
                {entry.bugFixes.length > 0 && (
                  <div className="mb-6">
                    <h3 className="font-mono text-lg font-bold mb-3 flex items-center gap-2">
                      <FaBug className="text-green-500" />
                      Bug Fixes
                    </h3>
                    <ul className="space-y-2">
                      {entry.bugFixes.map((fix, i) => (
                        <li key={i} className="flex items-start gap-2 text-text-secondary">
                          <FaCheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                          <span>{fix}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Breaking Changes */}
                {entry.breaking && entry.breaking.length > 0 && (
                  <div className="mb-6">
                    <h3 className="font-mono text-lg font-bold mb-3 flex items-center gap-2">
                      <FaExclamationTriangle className="text-red-500" />
                      Breaking Changes
                    </h3>
                    <ul className="space-y-2">
                      {entry.breaking.map((change, i) => (
                        <li key={i} className="flex items-start gap-2 text-text-secondary">
                          <FaExclamationTriangle className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                          <span>{change}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Notes */}
                {entry.notes && (
                  <div className="mt-6 p-4 bg-background-secondary border-l-4 border-accent-primary">
                    <p className="text-sm text-text-secondary">{entry.notes}</p>
                  </div>
                )}
              </m.div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Roadmap */}
      <section className="py-20 bg-background-secondary">
        <div className="container-custom max-w-5xl">
          <m.h2
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="font-mono text-3xl md:text-4xl font-bold mb-12 text-center"
          >
            DEVELOPMENT ROADMAP
          </m.h2>

          <div className="grid md:grid-cols-2 gap-6">
            {roadmapPhases.map((phase, index) => (
              <m.div
                key={phase.phase}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ delay: index * 0.1 }}
                className={`border-2 border-dashed p-6 ${
                  phase.status === 'current'
                    ? 'border-accent-primary bg-accent-primary/5'
                    : 'border-border'
                }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-mono text-xl font-bold mb-1">{phase.phase}</h3>
                    <p className="text-lg text-accent-primary">{phase.title}</p>
                  </div>
                  {phase.status === 'current' && (
                    <span className="px-3 py-1 bg-accent-primary text-black font-mono font-bold text-xs">
                      NOW
                    </span>
                  )}
                </div>
                <ul className="space-y-2">
                  {phase.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-text-secondary text-sm">
                      <FaCheckCircle
                        className={`w-3 h-3 mt-1 flex-shrink-0 ${
                          phase.status === 'current' ? 'text-accent-primary' : 'text-text-tertiary'
                        }`}
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </m.div>
            ))}
          </div>

          <m.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ delay: 0.4 }}
            className="mt-8 bg-background-secondary border-2 border-dashed border-border p-6 text-center"
          >
            <p className="text-text-secondary mb-4">
              Want to influence the roadmap? Submit feature requests on{' '}
              <a
                href="https://github.com/pistonsim/piston/issues"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-primary hover:text-accent-tertiary underline"
              >
                GitHub
              </a>{' '}
              or join the Discord community to vote on upcoming features.
            </p>
          </m.div>
        </div>
      </section>

      {/* Validation Metrics */}
      <section className="py-20 bg-background-secondary">
        <div className="container-custom max-w-4xl">
          <m.h2
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="font-mono text-3xl md:text-4xl font-bold mb-12 text-center"
          >
            VALIDATION STATUS
          </m.h2>

          <m.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="border-2 border-dashed border-accent-primary p-8"
          >
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div className="text-center">
                <p className="text-4xl md:text-5xl font-bold text-accent-primary mb-2">222</p>
                <p className="text-text-secondary">Tests Passing</p>
              </div>
              <div className="text-center">
                <p className="text-4xl md:text-5xl font-bold text-accent-primary mb-2">19,071</p>
                <p className="text-text-secondary">Assertions Verified</p>
              </div>
              <div className="text-center">
                <p className="text-4xl md:text-5xl font-bold text-accent-primary mb-2">70%+</p>
                <p className="text-text-secondary">Code Coverage</p>
              </div>
            </div>

            <div className="border-t-2 border-dashed border-border pt-6">
              <h3 className="font-mono font-bold mb-4">Dyno-Validated Engines:</h3>
              <ul className="space-y-2 text-text-secondary">
                <li className="flex items-start gap-2">
                  <FaCheckCircle className="w-4 h-4 text-accent-primary mt-1 flex-shrink-0" />
                  <span><strong>GM LS3 6.2L V8:</strong> 1.19% error vs. certified dyno data</span>
                </li>
                <li className="flex items-start gap-2">
                  <FaCheckCircle className="w-4 h-4 text-accent-primary mt-1 flex-shrink-0" />
                  <span><strong>GM LSA 6.2L Supercharged V8:</strong> &lt;5% error (supercharger modeling pending Phase 3)</span>
                </li>
                <li className="flex items-start gap-2">
                  <FaCheckCircle className="w-4 h-4 text-accent-primary mt-1 flex-shrink-0" />
                  <span><strong>GM LS7 7.0L V8:</strong> Validation complete, published on website</span>
                </li>
              </ul>
            </div>

            <div className="border-t-2 border-dashed border-border pt-6 mt-6">
              <p className="text-sm text-text-tertiary">
                All validation data is publicly available. See{' '}
                <a href="/case-studies" className="text-accent-primary hover:text-accent-tertiary underline">
                  Case Studies
                </a>{' '}
                for detailed comparisons with real dyno results.
              </p>
            </div>
          </m.div>
        </div>
      </section>

      {/* Subscribe for Updates */}
      <section className="py-20 bg-background-secondary">
        <div className="container-custom max-w-2xl">
          <m.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center"
          >
            <h2 className="font-mono text-3xl md:text-4xl font-bold mb-6">
              STAY UPDATED
            </h2>
            <p className="text-lg text-text-secondary mb-8">
              Get notified when new versions are released and features are added
            </p>
            <div className="max-w-md mx-auto">
              <NewsletterForm variant="inline" placeholder="your@email.com" />
            </div>
            <p className="text-sm text-text-tertiary mt-6">
              We respect your privacy. Unsubscribe anytime. See our{' '}
              <a href="/privacy" className="text-accent-primary hover:text-accent-tertiary underline">
                Privacy Policy
              </a>
              .
            </p>
          </m.div>
        </div>
      </section>
    </main>
    <Footer />
    </>
  )
}
