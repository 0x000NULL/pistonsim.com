'use client'

import { m } from 'framer-motion'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Button from '@/components/Button'
import FeatureCard from '@/components/FeatureCard'
import SectionDivider from '@/components/SectionDivider'
import ListItem from '@/components/ListItem'
import NewsletterForm from '@/components/NewsletterForm'
import StructuredData from '@/components/StructuredData'
import PistonAnimation from '@/components/PistonAnimation'
import TerminalDemo from '@/components/TerminalDemo'
import { fadeInUp, fadeInUpTransition, fadeIn, viewportConfig } from '@/lib/animations'
import { FiActivity, FiDatabase, FiCpu, FiArrowRight, FiDownload } from '@/lib/icons'
import { getSoftwareApplicationSchema, getWebSiteSchema } from '@/lib/structuredData'

export default function Home(): React.ReactElement {
  return (
    <>
      <StructuredData data={getSoftwareApplicationSchema()} />
      <StructuredData data={getWebSiteSchema()} />
      <Header />
      <main id="main-content" className="min-h-screen">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4">
          <div className="container-custom mx-auto max-w-6xl">
            <m.div
              variants={fadeInUp}
              initial="initial"
              animate="animate"
              transition={fadeInUpTransition}
              className="text-center space-y-8 mb-12"
            >
              {/* Badge */}
              <div className="inline-block">
                <span className="font-mono text-xs px-3 py-1.5 border border-dashed border-accent-primary text-accent-primary tracking-wider">
                  FREE ALPHA — OPEN SOURCE
                </span>
              </div>

              {/* Headline */}
              <h1 className="font-display font-bold text-5xl md:text-7xl lg:text-8xl text-cyan leading-[1.05] tracking-tight">
                ENGINE SIMULATION
                <br />
                <span className="text-text-primary">FOR EVERYONE</span>
              </h1>

              {/* Description */}
              <p className="text-text-secondary text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                Professional-grade thermodynamic modeling validated against real dyno data.
                The same physics as $10,000+ tools — free and open source.
              </p>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button href="/download/" size="lg">
                  <FiDownload className="mr-2" />
                  Download Alpha
                </Button>
                <Button href="/features/" size="lg" variant="secondary">
                  See How It Works
                  <FiArrowRight className="ml-2" />
                </Button>
              </div>
            </m.div>

            {/* Metrics Strip */}
            <m.div
              variants={fadeInUp}
              initial="initial"
              animate="animate"
              transition={{ ...fadeInUpTransition, delay: 0.2 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border mb-20"
            >
              {[
                { value: '<7%', label: 'Error vs Dyno Data' },
                { value: '222', label: 'Tests Passing' },
                { value: '19,071', label: 'Assertions Verified' },
                { value: '50+', label: 'Real Parts in DB' },
              ].map((metric) => (
                <div key={metric.label} className="bg-background-primary p-6 text-center">
                  <div className="font-mono text-3xl md:text-4xl font-bold text-cyan mb-1">{metric.value}</div>
                  <div className="text-text-tertiary text-xs font-mono uppercase tracking-wide">{metric.label}</div>
                </div>
              ))}
            </m.div>

            <SectionDivider />

            {/* Interactive Demo Section */}
            <m.div
              variants={fadeIn}
              initial="initial"
              whileInView="animate"
              viewport={viewportConfig}
              className="mb-20"
            >
              <div className="text-center mb-12">
                <h2 className="font-display font-bold text-3xl md:text-4xl text-cyan mb-4">
                  SEE IT IN ACTION
                </h2>
                <p className="text-text-secondary max-w-2xl mx-auto">
                  Real thermodynamic simulation running in your browser. Adjust RPM and watch the four-stroke cycle.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <PistonAnimation />
                <TerminalDemo />
              </div>
            </m.div>

            <SectionDivider />

            {/* Core Features */}
            <m.div
              variants={fadeIn}
              initial="initial"
              whileInView="animate"
              viewport={viewportConfig}
              className="mb-20"
            >
              <div className="text-center mb-12">
                <h2 className="font-display font-bold text-3xl md:text-4xl text-cyan mb-4">
                  CORE FEATURES
                </h2>
                <p className="text-text-secondary max-w-2xl mx-auto">
                  Built from first principles with the same physics used by GT-POWER and Ricardo WAVE.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <FeatureCard
                  icon={<FiActivity />}
                  title="Virtual Dyno System"
                  description="Validated inertia dyno simulation with SAE J1349 correction. Tested against certified GM dyno data with <7% error rate."
                />
                <FeatureCard
                  icon={<FiDatabase />}
                  title="Real Parts Database"
                  description="50+ real parts from GM, Honda, and more. Automatic compatibility checking, valve clearance validation, and pricing data."
                />
                <FeatureCard
                  icon={<FiCpu />}
                  title="Physics-Based Modeling"
                  description="Two-zone combustion with Wiebe function, Chen-Flynn friction, slider-crank kinematics, and multi-fuel support."
                />
              </div>
            </m.div>

            <SectionDivider />

            {/* Technical Deep Dive */}
            <m.div
              variants={fadeIn}
              initial="initial"
              whileInView="animate"
              viewport={viewportConfig}
              className="mb-20"
            >
              <div className="text-center mb-12">
                <h2 className="font-display font-bold text-3xl md:text-4xl text-cyan mb-4">
                  UNDER THE HOOD
                </h2>
                <p className="text-text-secondary max-w-2xl mx-auto">
                  No magic numbers. Every calculation is traceable to published engineering literature.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border-2 border-dashed border-border hover:border-accent-primary transition-colors p-8 bg-background-secondary">
                  <h3 className="font-display font-semibold text-xl text-cyan mb-4">
                    Thermodynamic Engine
                  </h3>
                  <ul className="space-y-3 text-text-secondary text-sm">
                    <ListItem>Two-zone combustion with Wiebe burn profile</ListItem>
                    <ListItem>Woschni heat transfer correlation</ListItem>
                    <ListItem>Multiple fuel support (gasoline, E85, race gas)</ListItem>
                    <ListItem>Volumetric efficiency modeling</ListItem>
                  </ul>
                </div>

                <div className="border-2 border-dashed border-border hover:border-accent-primary transition-colors p-8 bg-background-secondary">
                  <h3 className="font-display font-semibold text-xl text-cyan mb-4">
                    Mechanical Systems
                  </h3>
                  <ul className="space-y-3 text-text-secondary text-sm">
                    <ListItem>Slider-crank kinematics and dynamics</ListItem>
                    <ListItem>Chen-Flynn friction model</ListItem>
                    <ListItem>Reciprocating mass inertia</ListItem>
                    <ListItem>Cam profile and valvetrain analysis</ListItem>
                  </ul>
                </div>
              </div>
            </m.div>

            <SectionDivider />

            {/* Validation Section */}
            <m.div
              variants={fadeIn}
              initial="initial"
              whileInView="animate"
              viewport={viewportConfig}
              className="mb-20"
            >
              <div className="text-center mb-12">
                <h2 className="font-display font-bold text-3xl md:text-4xl text-cyan mb-4">
                  VALIDATED AGAINST REAL DATA
                </h2>
                <p className="text-text-secondary max-w-2xl mx-auto">
                  Not just theoretical — tested against certified dynamometer results from real engines.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="border-2 border-dashed border-accent-primary p-8 bg-background-secondary text-center">
                  <div className="font-mono text-5xl font-bold text-cyan mb-3">&lt;7%</div>
                  <h3 className="font-display font-semibold text-lg text-text-primary mb-2">Error Rate</h3>
                  <p className="text-text-secondary text-sm">
                    Across multiple RPM points tested against certified GM dyno data
                  </p>
                </div>

                <div className="border-2 border-dashed border-accent-primary p-8 bg-background-secondary text-center">
                  <div className="font-mono text-5xl font-bold text-cyan mb-3">0.987</div>
                  <h3 className="font-display font-semibold text-lg text-text-primary mb-2">R² Correlation</h3>
                  <p className="text-text-secondary text-sm">
                    Near-perfect correlation between simulated and measured power curves
                  </p>
                </div>

                <div className="border-2 border-dashed border-accent-primary p-8 bg-background-secondary text-center">
                  <div className="font-mono text-5xl font-bold text-cyan mb-3">3</div>
                  <h3 className="font-display font-semibold text-lg text-text-primary mb-2">Validated Engines</h3>
                  <p className="text-text-secondary text-sm">
                    LS3 6.2L V8, LSA supercharged, and 2JZ-GTE turbocharged platforms
                  </p>
                </div>
              </div>
            </m.div>

            <SectionDivider />

            {/* Comparison Section */}
            <m.div
              variants={fadeIn}
              initial="initial"
              whileInView="animate"
              viewport={viewportConfig}
              className="mb-20"
            >
              <div className="text-center mb-12">
                <h2 className="font-display font-bold text-3xl md:text-4xl text-cyan mb-4">
                  HOW WE COMPARE
                </h2>
              </div>

              <div className="border-2 border-dashed border-border overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full font-mono text-sm">
                    <thead>
                      <tr className="border-b-2 border-dashed border-border bg-background-secondary">
                        <th className="p-4 text-left text-text-tertiary font-normal">FEATURE</th>
                        <th className="p-4 text-center text-cyan font-bold">PISTON</th>
                        <th className="p-4 text-center text-text-tertiary font-normal">GT-POWER</th>
                        <th className="p-4 text-center text-text-tertiary font-normal">WAVE</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                      {[
                        ['Price', 'Free', '$10,000+/yr', '$8,000+/yr'],
                        ['Physics-Based', '✓', '✓', '✓'],
                        ['Real Parts DB', '✓', '—', '—'],
                        ['Open Source', '✓', '—', '—'],
                        ['Dyno Validation', '<7% error', '<5% error', '<5% error'],
                        ['Learning Curve', 'Hours', 'Months', 'Months'],
                      ].map(([feature, piston, gt, wave]) => (
                        <tr key={feature} className="hover:bg-background-secondary/50 transition-colors">
                          <td className="p-4 text-text-secondary">{feature}</td>
                          <td className="p-4 text-center text-cyan font-bold">{piston}</td>
                          <td className="p-4 text-center text-text-tertiary">{gt}</td>
                          <td className="p-4 text-center text-text-tertiary">{wave}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </m.div>

            <SectionDivider />

            {/* Roadmap */}
            <m.div
              variants={fadeIn}
              initial="initial"
              whileInView="animate"
              viewport={viewportConfig}
              className="mb-20"
            >
              <div className="text-center mb-12">
                <h2 className="font-display font-bold text-3xl md:text-4xl text-cyan mb-4">
                  ROADMAP
                </h2>
                <p className="text-text-secondary max-w-2xl mx-auto">
                  Active development with new features shipping regularly.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="border-2 border-dashed border-accent-primary p-8 bg-background-secondary relative">
                  <div className="absolute top-4 right-4">
                    <span className="font-mono text-xs px-2 py-0.5 bg-accent-primary/20 text-accent-primary border border-accent-primary/30">
                      CURRENT
                    </span>
                  </div>
                  <div className="text-text-tertiary text-xs mb-3 font-mono">PHASE 2</div>
                  <h3 className="font-display font-semibold text-lg text-text-primary mb-4">
                    Enhanced Models & GUI
                  </h3>
                  <ul className="space-y-2 text-text-secondary text-sm">
                    <li>→ Improved combustion modeling</li>
                    <li>→ Enhanced volumetric efficiency</li>
                    <li>→ Brake dyno with PID control</li>
                    <li>→ Dear ImGui interface</li>
                  </ul>
                </div>

                <div className="border-2 border-dashed border-border p-8 bg-background-secondary">
                  <div className="text-text-tertiary text-xs mb-3 font-mono">PHASE 3</div>
                  <h3 className="font-display font-semibold text-lg text-text-primary mb-4">
                    Forced Induction
                  </h3>
                  <ul className="space-y-2 text-text-secondary text-sm">
                    <li>→ Turbocharger modeling</li>
                    <li>→ Supercharger simulation</li>
                    <li>→ Boost control systems</li>
                    <li>→ Intercooler effectiveness</li>
                  </ul>
                </div>

                <div className="border-2 border-dashed border-border p-8 bg-background-secondary">
                  <div className="text-text-tertiary text-xs mb-3 font-mono">PHASE 4+</div>
                  <h3 className="font-display font-semibold text-lg text-text-primary mb-4">
                    Advanced Systems
                  </h3>
                  <ul className="space-y-2 text-text-secondary text-sm">
                    <li>→ ECU simulation</li>
                    <li>→ Failure prediction</li>
                    <li>→ Transmission modeling</li>
                    <li>→ Cost calculator</li>
                  </ul>
                </div>
              </div>
            </m.div>

            <SectionDivider />

            {/* Final CTA */}
            <m.div
              variants={fadeIn}
              initial="initial"
              whileInView="animate"
              viewport={viewportConfig}
              className="text-center border-2 border-dashed border-accent-primary p-12 bg-background-secondary"
            >
              <h2 className="font-display font-bold text-4xl md:text-5xl text-cyan mb-4 leading-[1.1]">
                START SIMULATING
              </h2>
              <p className="text-text-secondary text-lg mb-8 max-w-2xl mx-auto">
                Free and open source. No registration required.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Button href="/download/" size="lg">
                  <FiDownload className="mr-2" />
                  Download Alpha
                </Button>
                <Button href="/docs/" size="lg" variant="secondary">
                  Read the Docs
                  <FiArrowRight className="ml-2" />
                </Button>
              </div>

              {/* Newsletter */}
              <div className="max-w-md mx-auto pt-8 border-t-2 border-dashed border-border">
                <h3 className="font-display font-semibold text-xl text-text-primary mb-3">
                  Stay Updated
                </h3>
                <p className="text-text-secondary text-sm mb-6">
                  Get notified about new features, releases, and updates.
                </p>
                <NewsletterForm variant="inline" placeholder="Enter your email" />
              </div>
            </m.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
