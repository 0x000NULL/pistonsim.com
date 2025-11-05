'use client'

import { motion } from 'framer-motion'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Button from '@/components/Button'
import FeatureCard from '@/components/FeatureCard'
import { FiActivity, FiDatabase, FiCpu, FiArrowRight } from 'react-icons/fi'

export default function Home(): React.ReactElement {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4">
          <div className="container-custom mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
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
            </motion.div>

            {/* Dotted Line Separator */}
            <div className="border-t-2 border-dashed border-border my-20"></div>

            {/* Metrics Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
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
            </motion.div>

            {/* Dotted Line Separator */}
            <div className="border-t-2 border-dashed border-border my-20"></div>

            {/* Features Grid */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
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
            </motion.div>

            {/* Dotted Line Separator */}
            <div className="border-t-2 border-dashed border-border my-20"></div>

            {/* Technical Details Section */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
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
                    <li className="flex items-start">
                      <span className="text-cyan mr-2 mt-1">→</span>
                      <span>Two-zone combustion with Wiebe function</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-cyan mr-2 mt-1">→</span>
                      <span>Heat transfer to cylinder walls</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-cyan mr-2 mt-1">→</span>
                      <span>Multiple fuel support (gasoline, E85, race gas)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-cyan mr-2 mt-1">→</span>
                      <span>Otto cycle implementation</span>
                    </li>
                  </ul>
                </div>

                {/* Mechanical Card */}
                <div className="border-2 border-dashed border-border hover:border-accent-primary transition-colors p-8 bg-background-secondary">
                  <h3 className="font-display font-semibold text-xl text-cyan mb-4">
                    Mechanical Systems
                  </h3>
                  <ul className="space-y-2 text-text-secondary text-sm">
                    <li className="flex items-start">
                      <span className="text-cyan mr-2 mt-1">→</span>
                      <span>Slider-crank kinematics and force analysis</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-cyan mr-2 mt-1">→</span>
                      <span>Chen-Flynn friction modeling</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-cyan mr-2 mt-1">→</span>
                      <span>Reciprocating mass inertia forces</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-cyan mr-2 mt-1">→</span>
                      <span>Valvetrain mechanics and cam profiles</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Dotted Line Separator */}
            <div className="border-t-2 border-dashed border-border my-20"></div>

            {/* Roadmap Section */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
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
            </motion.div>

            {/* Dotted Line Separator */}
            <div className="border-t-2 border-dashed border-border my-20"></div>

            {/* Final CTA */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center border-2 border-dashed border-accent-primary p-12 bg-background-secondary"
            >
              <h2 className="font-display font-bold text-4xl text-cyan mb-4 leading-[1.1]">
                START SIMULATING
              </h2>
              <p className="text-text-secondary text-lg mb-8 max-w-2xl mx-auto">
                Free alpha release. Built for engineers and enthusiasts.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button href="/features/" size="lg">
                  Learn More
                  <FiArrowRight className="ml-2" />
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
