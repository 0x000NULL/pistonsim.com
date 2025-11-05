'use client'

import { motion } from 'framer-motion'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function About(): React.ReactElement {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-24">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="container-custom mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center space-y-8 mb-20"
            >
              <h1 className="font-display font-bold text-5xl md:text-7xl text-cyan leading-[1.1] tracking-tight">
                MAKING PROFESSIONAL
                <br />
                SIMULATION ACCESSIBLE
              </h1>
              <p className="text-text-secondary text-lg md:text-xl max-w-3xl mx-auto">
                Breaking down the cost barrier that keeps advanced engine simulation
                out of reach for builders, tuners, and enthusiasts.
              </p>
            </motion.div>

            {/* Dotted Line Separator */}
            <div className="border-t-2 border-dashed border-border my-20"></div>

            {/* The Problem */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-20"
            >
              <h2 className="font-display font-bold text-3xl text-cyan mb-12">
                THE PROBLEM
              </h2>

              <div className="border-2 border-dashed border-border p-8 bg-background-secondary">
                <p className="text-text-secondary text-lg mb-6">
                  Professional engine simulation software like GT-POWER and Ricardo WAVE
                  delivers exceptional accuracy through first-principles thermodynamics.
                  But there&apos;s a catch: they cost <span className="text-cyan font-semibold">$10,000+</span> per license.
                </p>
                <p className="text-text-secondary text-lg mb-6">
                  This pricing puts accurate engine modeling completely out of reach for:
                </p>
                <ul className="space-y-3 text-text-secondary text-lg mb-6">
                  <li className="flex items-start">
                    <span className="text-cyan mr-3 mt-1">→</span>
                    <span>Independent engine builders and tuning shops</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan mr-3 mt-1">→</span>
                    <span>Automotive enthusiasts working on project cars</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan mr-3 mt-1">→</span>
                    <span>Students and researchers without institutional licenses</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan mr-3 mt-1">→</span>
                    <span>Small racing teams on tight budgets</span>
                  </li>
                </ul>
                <p className="text-text-secondary text-lg">
                  The result? Most builders are forced to use either oversimplified online
                  calculators or expensive trial-and-error with real parts. Neither approach
                  delivers the insight needed to make informed decisions.
                </p>
              </div>
            </motion.div>

            {/* Dotted Line Separator */}
            <div className="border-t-2 border-dashed border-border my-20"></div>

            {/* Mission & Vision */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-20"
            >
              <h2 className="font-display font-bold text-3xl text-cyan mb-12">
                OUR MISSION
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="border-2 border-dashed border-accent-primary p-8 bg-background-secondary">
                  <h3 className="font-display font-semibold text-xl text-cyan mb-4">
                    Democratize Simulation
                  </h3>
                  <p className="text-text-secondary">
                    PISTON brings the same first-principles thermodynamic modeling used in
                    $10,000+ professional software to an accessible price point. We believe
                    accurate engine simulation shouldn&apos;t require a corporate budget.
                  </p>
                </div>

                <div className="border-2 border-dashed border-border hover:border-accent-primary transition-colors p-8 bg-background-secondary">
                  <h3 className="font-display font-semibold text-xl text-cyan mb-4">
                    Professional Grade, Enthusiast Price
                  </h3>
                  <p className="text-text-secondary">
                    No compromises on physics. PISTON uses validated thermodynamic models,
                    real parts data, and comprehensive testing to deliver results you can trust
                    for real-world builds.
                  </p>
                </div>
              </div>

              <div className="mt-8 border-2 border-dashed border-border p-8 bg-background-secondary">
                <h3 className="font-display font-semibold text-xl text-cyan mb-4">
                  Why This Matters
                </h3>
                <p className="text-text-secondary mb-4">
                  When you can simulate before you buy, you make better decisions. You avoid
                  expensive mistakes. You optimize combinations. You understand why modifications
                  work—or don&apos;t work—before spending thousands on parts.
                </p>
                <p className="text-text-secondary">
                  PISTON empowers builders, tuners, and enthusiasts to approach engine development
                  with the same tools and confidence that professional engineers have enjoyed for decades.
                </p>
              </div>
            </motion.div>

            {/* Dotted Line Separator */}
            <div className="border-t-2 border-dashed border-border my-20"></div>

            {/* About the Project */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-20"
            >
              <h2 className="font-display font-bold text-3xl text-cyan mb-12">
                ABOUT THE PROJECT
              </h2>

              <div className="border-2 border-dashed border-border p-8 bg-background-secondary">
                <p className="text-text-secondary text-lg mb-6">
                  PISTON is built by an engineer with a passion for internal combustion engines
                  and thermodynamic modeling. Frustrated by the cost barrier of professional
                  simulation tools, the project started as an effort to make this technology
                  accessible to the broader automotive community.
                </p>
                <p className="text-text-secondary text-lg mb-6">
                  What began as a personal tool has evolved into a comprehensive simulation
                  platform. Every line of code is written with the goal of delivering
                  professional-grade accuracy at a fraction of the traditional cost.
                </p>
                <p className="text-text-secondary text-lg">
                  PISTON is currently in active development, with continuous validation against
                  real dyno data and regular feature additions. The software is designed for
                  builders who want to understand the physics behind their engines, not just
                  plug numbers into a black box.
                </p>
              </div>
            </motion.div>

            {/* Dotted Line Separator */}
            <div className="border-t-2 border-dashed border-border my-20"></div>

            {/* Roadmap */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-20"
            >
              <h2 className="font-display font-bold text-3xl text-cyan mb-12">
                ROADMAP & FUTURE
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Technical Milestones */}
                <div className="border-2 border-dashed border-border hover:border-accent-primary transition-colors p-8 bg-background-secondary">
                  <h3 className="font-display font-semibold text-xl text-cyan mb-4">
                    Technical Milestones
                  </h3>
                  <ul className="space-y-3 text-text-secondary">
                    <li className="flex items-start">
                      <span className="text-cyan mr-2 mt-1">→</span>
                      <span>Forced induction modeling (turbo & supercharger)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-cyan mr-2 mt-1">→</span>
                      <span>ECU simulation for fuel, ignition, and boost control</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-cyan mr-2 mt-1">→</span>
                      <span>Advanced combustion models and knock prediction</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-cyan mr-2 mt-1">→</span>
                      <span>Transmission and drivetrain modeling</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-cyan mr-2 mt-1">→</span>
                      <span>Component failure prediction</span>
                    </li>
                  </ul>
                </div>

                {/* Validation & Accuracy */}
                <div className="border-2 border-dashed border-border hover:border-accent-primary transition-colors p-8 bg-background-secondary">
                  <h3 className="font-display font-semibold text-xl text-cyan mb-4">
                    Validation & Accuracy
                  </h3>
                  <ul className="space-y-3 text-text-secondary">
                    <li className="flex items-start">
                      <span className="text-cyan mr-2 mt-1">→</span>
                      <span>Continuous validation against certified dyno data</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-cyan mr-2 mt-1">→</span>
                      <span>Expanding test coverage across more engine families</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-cyan mr-2 mt-1">→</span>
                      <span>Real-world case studies and validation reports</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-cyan mr-2 mt-1">→</span>
                      <span>Community-contributed dyno comparisons</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-cyan mr-2 mt-1">→</span>
                      <span>Transparent accuracy metrics and error reporting</span>
                    </li>
                  </ul>
                </div>

                {/* Commercial Viability */}
                <div className="border-2 border-dashed border-border hover:border-accent-primary transition-colors p-8 bg-background-secondary">
                  <h3 className="font-display font-semibold text-xl text-cyan mb-4">
                    Commercial Viability
                  </h3>
                  <ul className="space-y-3 text-text-secondary">
                    <li className="flex items-start">
                      <span className="text-cyan mr-2 mt-1">→</span>
                      <span>Sustainable pricing model for long-term development</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-cyan mr-2 mt-1">→</span>
                      <span>Professional licensing options for shops and businesses</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-cyan mr-2 mt-1">→</span>
                      <span>Free tier for enthusiasts and students</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-cyan mr-2 mt-1">→</span>
                      <span>Premium features and priority support packages</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-cyan mr-2 mt-1">→</span>
                      <span>Path to full-time development and support</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-8 border-2 border-dashed border-accent-primary p-8 bg-background-secondary">
                <h3 className="font-display font-semibold text-xl text-cyan mb-4">
                  Long-Term Vision
                </h3>
                <p className="text-text-secondary">
                  The goal is to create a comprehensive engine development platform that serves
                  everyone from weekend enthusiasts to professional engine builders. PISTON will
                  continue expanding its capabilities while maintaining its commitment to
                  accessibility, transparency, and professional-grade accuracy.
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
