'use client'

import { m } from 'framer-motion'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Button from '@/components/Button'
import FeatureCard from '@/components/FeatureCard'
import SectionDivider from '@/components/SectionDivider'
import ListItem from '@/components/ListItem'
import NewsletterForm from '@/components/NewsletterForm'
import { fadeInUp, fadeInUpTransition, fadeIn, viewportConfig } from '@/lib/animations'
import { FiActivity, FiDatabase, FiCpu, FiArrowRight } from '@/lib/icons'

export default function Home(): React.ReactElement {
  return (
    <>
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
              className="text-center space-y-8 mb-20"
            >
              {/* Headline */}
              <h1 className="font-display font-bold text-5xl md:text-7xl text-cyan leading-[1.1] tracking-tight">
                A NEW GENERATION OF
                <br />
                ENGINE SIMULATION
              </h1>

              {/* Description */}
              <p className="text-text-secondary text-lg md:text-xl max-w-3xl mx-auto">
                Professional-grade thermodynamic modeling for engine builders, tuners, and enthusiasts.
                Physics-based accuracy at accessible pricing.
              </p>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button href="/features/" size="lg">
                  Explore Features
                  <FiArrowRight className="ml-2" />
                </Button>
              </div>
            </m.div>

            <SectionDivider />

            {/* Metrics Grid */}
            <m.div
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={viewportConfig}
              transition={fadeInUpTransition}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20"
            >
              <div className="border-2 border-dashed border-border hover:border-accent-primary transition-colors p-6 text-center">
                <div className="font-mono text-4xl font-bold text-cyan mb-2">&lt;7%</div>
                <div className="text-text-secondary text-sm">Target Error</div>
              </div>
              <div className="border-2 border-dashed border-border hover:border-accent-primary transition-colors p-6 text-center">
                <div className="font-mono text-4xl font-bold text-cyan mb-2">222</div>
                <div className="text-text-secondary text-sm">Tests Passing</div>
              </div>
              <div className="border-2 border-dashed border-border hover:border-accent-primary transition-colors p-6 text-center">
                <div className="font-mono text-4xl font-bold text-cyan mb-2">19,071</div>
                <div className="text-text-secondary text-sm">Assertions</div>
              </div>
              <div className="border-2 border-dashed border-border hover:border-accent-primary transition-colors p-6 text-center">
                <div className="font-mono text-4xl font-bold text-cyan mb-2">50+</div>
                <div className="text-text-secondary text-sm">Real Parts</div>
              </div>
            </m.div>

            <SectionDivider />

            {/* Features Grid */}
            <m.div
              variants={fadeIn}
              initial="initial"
              whileInView="animate"
              viewport={viewportConfig}
              className="mb-20"
            >
              <h2 className="font-display font-bold text-3xl text-cyan mb-12 text-center">
                CORE FEATURES
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <FeatureCard
                  icon={<FiActivity />}
                  title="Virtual Dyno System"
                  description="Fully validated inertia dyno simulation with SAE J1349 environmental correction. LS3 6.2L V8 validated against certified GM dyno data."
                />
                <FeatureCard
                  icon={<FiDatabase />}
                  title="Real Parts Database"
                  description="SQLite-powered catalog with 50+ real parts from GM, Honda, and more. Intelligent compatibility checking and pricing data."
                />
                <FeatureCard
                  icon={<FiCpu />}
                  title="Physics-Based Modeling"
                  description="First-principles thermodynamics using the same methods as $10,000+ professional software like GT-POWER and Ricardo WAVE."
                />
              </div>
            </m.div>

            <SectionDivider />

            {/* Technical Details Section */}
            <m.div
              variants={fadeIn}
              initial="initial"
              whileInView="animate"
              viewport={viewportConfig}
              className="mb-20"
            >
              <h2 className="font-display font-bold text-3xl text-cyan mb-12 text-center">
                TECHNICAL CAPABILITIES
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Thermodynamics Card */}
                <div className="border-2 border-dashed border-border hover:border-accent-primary transition-colors p-8 bg-background-secondary">
                  <h3 className="font-display font-semibold text-xl text-cyan mb-4">
                    Thermodynamic Engine
                  </h3>
                  <ul className="space-y-2 text-text-secondary text-sm">
                    <ListItem>Two-zone combustion with Wiebe function</ListItem>
                    <ListItem>Heat transfer to cylinder walls</ListItem>
                    <ListItem>Multiple fuel support (gasoline, E85, race gas)</ListItem>
                    <ListItem>Otto cycle implementation</ListItem>
                  </ul>
                </div>

                {/* Mechanical Card */}
                <div className="border-2 border-dashed border-border hover:border-accent-primary transition-colors p-8 bg-background-secondary">
                  <h3 className="font-display font-semibold text-xl text-cyan mb-4">
                    Mechanical Systems
                  </h3>
                  <ul className="space-y-2 text-text-secondary text-sm">
                    <ListItem>Slider-crank kinematics and force analysis</ListItem>
                    <ListItem>Chen-Flynn friction modeling</ListItem>
                    <ListItem>Reciprocating mass inertia forces</ListItem>
                    <ListItem>Valvetrain mechanics and cam profiles</ListItem>
                  </ul>
                </div>
              </div>
            </m.div>

            <SectionDivider />

            {/* Trust Indicators Section */}
            <m.div
              variants={fadeIn}
              initial="initial"
              whileInView="animate"
              viewport={viewportConfig}
              className="mb-20"
            >
              <h2 className="font-display font-bold text-3xl text-cyan mb-12 text-center">
                BUILT ON PROVEN SCIENCE
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="border-2 border-dashed border-accent-primary p-8 bg-background-secondary text-center">
                  <div className="font-mono text-5xl font-bold text-cyan mb-3">
                    {'<7%'}
                  </div>
                  <h3 className="font-display font-semibold text-lg text-text-primary mb-2">
                    Validated Accuracy
                  </h3>
                  <p className="text-text-secondary text-sm">
                    Less than 7% error rate when tested against certified GM dyno data across multiple configurations
                  </p>
                </div>

                <div className="border-2 border-dashed border-accent-primary p-8 bg-background-secondary text-center">
                  <div className="font-mono text-5xl font-bold text-cyan mb-3">
                    LS3 + LSA
                  </div>
                  <h3 className="font-display font-semibold text-lg text-text-primary mb-2">
                    Real Engine Data
                  </h3>
                  <p className="text-text-secondary text-sm">
                    Validated against LS3 6.2L V8 and LSA 6.2L supercharged engines using certified dynamometer results
                  </p>
                </div>

                <div className="border-2 border-dashed border-accent-primary p-8 bg-background-secondary text-center">
                  <div className="font-mono text-5xl font-bold text-cyan mb-3">
                    222
                  </div>
                  <h3 className="font-display font-semibold text-lg text-text-primary mb-2">
                    Tests Passing
                  </h3>
                  <p className="text-text-secondary text-sm">
                    Comprehensive test suite with 19,071 assertions ensuring consistent accuracy and reliability
                  </p>
                </div>
              </div>
            </m.div>

            <SectionDivider />

            {/* Roadmap Section */}
            <m.div
              variants={fadeIn}
              initial="initial"
              whileInView="animate"
              viewport={viewportConfig}
              className="mb-20"
            >
              <h2 className="font-display font-bold text-3xl text-cyan mb-12 text-center">
                DEVELOPMENT ROADMAP
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="border-2 border-dashed border-border p-8 bg-background-secondary">
                  <div className="text-text-tertiary text-xs mb-3 font-mono">PHASE 2 • MONTHS 4-6</div>
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
                  <div className="text-text-tertiary text-xs mb-3 font-mono">PHASE 3 • MONTHS 7-9</div>
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
                  <div className="text-text-tertiary text-xs mb-3 font-mono">PHASE 4+ • PRODUCTION</div>
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
              <h2 className="font-display font-bold text-4xl text-cyan mb-4 leading-[1.1]">
                START SIMULATING
              </h2>
              <p className="text-text-secondary text-lg mb-8 max-w-2xl mx-auto">
                Free alpha release. Built for engineers and enthusiasts.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Button href="/features/" size="lg">
                  Learn More
                  <FiArrowRight className="ml-2" />
                </Button>
              </div>

              {/* Newsletter Signup */}
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
