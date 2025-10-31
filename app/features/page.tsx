'use client'

import { motion } from 'framer-motion'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Button from '@/components/Button'
import { FiArrowRight } from 'react-icons/fi'

export default function Features() {
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
                PROFESSIONAL ENGINE
                <br />
                SIMULATION FEATURES
              </h1>
              <p className="text-text-secondary text-lg md:text-xl max-w-3xl mx-auto">
                PISTON combines professional-grade accuracy with real-world validation to deliver
                a simulation platform you can trust.
              </p>
            </motion.div>

            {/* Dotted Line Separator */}
            <div className="border-t-2 border-dashed border-border my-20"></div>

            {/* Virtual Dyno System */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mb-20"
            >
              <h2 className="font-display font-bold text-3xl text-cyan mb-12">
                VIRTUAL DYNO SYSTEM
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="border-2 border-dashed border-border hover:border-accent-primary transition-colors p-8 bg-background-secondary">
                  <h3 className="font-display font-semibold text-xl text-cyan mb-4">
                    Environmental Correction
                  </h3>
                  <ul className="space-y-2 text-text-secondary text-sm">
                    <li className="flex items-start">
                      <span className="text-cyan mr-2 mt-1">→</span>
                      <span>SAE J1349 standard correction</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-cyan mr-2 mt-1">→</span>
                      <span>DIN 70020 standard correction</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-cyan mr-2 mt-1">→</span>
                      <span>Industry-standard environmental compensation</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-cyan mr-2 mt-1">→</span>
                      <span>Accurate power measurements across conditions</span>
                    </li>
                  </ul>
                </div>

                <div className="border-2 border-dashed border-border hover:border-accent-primary transition-colors p-8 bg-background-secondary">
                  <h3 className="font-display font-semibold text-xl text-cyan mb-4">
                    Operating Modes
                  </h3>
                  <ul className="space-y-2 text-text-secondary text-sm">
                    <li className="flex items-start">
                      <span className="text-cyan mr-2 mt-1">→</span>
                      <span>TIME_BASED: Realistic acceleration simulation</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-cyan mr-2 mt-1">→</span>
                      <span>STATIC: Direct calculation for validation</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-cyan mr-2 mt-1">→</span>
                      <span>Configurable inertia modeling</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-cyan mr-2 mt-1">→</span>
                      <span>Advanced loss modeling (friction + windage)</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="border-2 border-dashed border-accent-primary p-8 bg-background-secondary">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                  <h3 className="font-display font-semibold text-xl text-cyan mb-2 md:mb-0">
                    Real-World Validation
                  </h3>
                  <span className="text-success font-mono text-lg">&lt;7% Error Rate</span>
                </div>
                <p className="text-text-secondary mb-4">
                  Tested against certified GM dyno data for LS3 6.2L V8. 52 dyno tests with 19,071 assertions verified.
                </p>
                <div className="flex flex-wrap gap-4 text-xs font-mono text-text-tertiary">
                  <span className="border border-border px-3 py-1">LS3 6.2L V8</span>
                  <span className="border border-border px-3 py-1">LSA Supercharged</span>
                  <span className="border border-border px-3 py-1">2JZ-GTE Turbocharged</span>
                </div>
              </div>
            </motion.div>

            {/* Dotted Line Separator */}
            <div className="border-t-2 border-dashed border-border my-20"></div>

            {/* Parts Database */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mb-20"
            >
              <h2 className="font-display font-bold text-3xl text-cyan mb-12">
                REAL PARTS DATABASE
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="border-2 border-dashed border-border hover:border-accent-primary transition-colors p-6 bg-background-secondary">
                  <h3 className="font-display font-semibold text-lg text-cyan mb-3">GM LS Family</h3>
                  <ul className="space-y-1 text-text-secondary text-sm">
                    <li>→ LS1, LS2, LS3, LS7</li>
                    <li>→ LSA, LS9 (Supercharged)</li>
                    <li>→ LT1, LT4 (Gen V)</li>
                    <li>→ Compatible components</li>
                  </ul>
                </div>

                <div className="border-2 border-dashed border-border hover:border-accent-primary transition-colors p-6 bg-background-secondary">
                  <h3 className="font-display font-semibold text-lg text-cyan mb-3">Honda B/K Series</h3>
                  <ul className="space-y-1 text-text-secondary text-sm">
                    <li>→ B16A, B18C (VTEC)</li>
                    <li>→ K20A, K24A</li>
                    <li>→ High-rev components</li>
                    <li>→ Turbo applications</li>
                  </ul>
                </div>

                <div className="border-2 border-dashed border-border hover:border-accent-primary transition-colors p-6 bg-background-secondary">
                  <h3 className="font-display font-semibold text-lg text-cyan mb-3">Small Block Chevy</h3>
                  <ul className="space-y-1 text-text-secondary text-sm">
                    <li>→ 350, 383 stroker</li>
                    <li>→ Classic components</li>
                    <li>→ Aftermarket support</li>
                    <li>→ Budget builds</li>
                  </ul>
                </div>
              </div>

              <div className="border-2 border-dashed border-border p-8 bg-background-secondary">
                <h3 className="font-display font-semibold text-xl text-cyan mb-4">
                  Intelligent Compatibility
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <ul className="space-y-2 text-text-secondary text-sm">
                    <li className="flex items-start">
                      <span className="text-cyan mr-2 mt-1">→</span>
                      <span>Automatic bore spacing validation</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-cyan mr-2 mt-1">→</span>
                      <span>Valve clearance checking</span>
                    </li>
                  </ul>
                  <ul className="space-y-2 text-text-secondary text-sm">
                    <li className="flex items-start">
                      <span className="text-cyan mr-2 mt-1">→</span>
                      <span>Physical fitment verification</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-cyan mr-2 mt-1">→</span>
                      <span>Cost-benefit analysis with pricing data</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Dotted Line Separator */}
            <div className="border-t-2 border-dashed border-border my-20"></div>

            {/* Physics-Based Modeling */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mb-20"
            >
              <h2 className="font-display font-bold text-3xl text-cyan mb-12">
                PHYSICS-BASED THERMODYNAMICS
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="border-2 border-dashed border-border hover:border-accent-primary transition-colors p-8 bg-background-secondary">
                  <h3 className="font-display font-semibold text-xl text-cyan mb-4">
                    Thermodynamic Engine
                  </h3>
                  <ul className="space-y-2 text-text-secondary text-sm">
                    <li className="flex items-start">
                      <span className="text-cyan mr-2 mt-1">→</span>
                      <span>Two-zone combustion model</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-cyan mr-2 mt-1">→</span>
                      <span>Wiebe function implementation</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-cyan mr-2 mt-1">→</span>
                      <span>Heat transfer to cylinder walls</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-cyan mr-2 mt-1">→</span>
                      <span>Multiple fuel support (gasoline, E85, race gas)</span>
                    </li>
                  </ul>
                </div>

                <div className="border-2 border-dashed border-border hover:border-accent-primary transition-colors p-8 bg-background-secondary">
                  <h3 className="font-display font-semibold text-xl text-cyan mb-4">
                    Mechanical Systems
                  </h3>
                  <ul className="space-y-2 text-text-secondary text-sm">
                    <li className="flex items-start">
                      <span className="text-cyan mr-2 mt-1">→</span>
                      <span>Slider-crank kinematics</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-cyan mr-2 mt-1">→</span>
                      <span>Chen-Flynn friction modeling</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-cyan mr-2 mt-1">→</span>
                      <span>Force analysis (cylinder pressure → torque)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-cyan mr-2 mt-1">→</span>
                      <span>Valvetrain mechanics</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="border-2 border-dashed border-border p-8 bg-background-secondary">
                <h3 className="font-display font-semibold text-xl text-cyan mb-6">
                  Professional Validation
                </h3>
                <div className="grid grid-cols-3 gap-8 text-center mb-6">
                  <div>
                    <div className="font-mono text-3xl font-bold text-success mb-2">222</div>
                    <div className="text-text-tertiary text-xs">Tests Passing</div>
                  </div>
                  <div>
                    <div className="font-mono text-3xl font-bold text-info mb-2">19,071</div>
                    <div className="text-text-tertiary text-xs">Assertions Verified</div>
                  </div>
                  <div>
                    <div className="font-mono text-3xl font-bold text-cyan mb-2">70%+</div>
                    <div className="text-text-tertiary text-xs">Code Coverage</div>
                  </div>
                </div>
                <p className="text-text-secondary text-sm text-center">
                  Professional-grade testing with comprehensive validation against real-world dyno data.
                </p>
              </div>
            </motion.div>

            {/* Dotted Line Separator */}
            <div className="border-t-2 border-dashed border-border my-20"></div>

            {/* Development Roadmap */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mb-20"
            >
              <h2 className="font-display font-bold text-3xl text-cyan mb-12">
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
                    <li>→ Dear ImGui graphical interface</li>
                  </ul>
                </div>

                <div className="border-2 border-dashed border-border p-8 bg-background-secondary">
                  <div className="text-text-tertiary text-xs mb-3 font-mono">PHASE 3 • MONTHS 7-9</div>
                  <h3 className="font-display font-semibold text-lg text-text-primary mb-4">
                    Forced Induction
                  </h3>
                  <ul className="space-y-2 text-text-secondary text-sm">
                    <li>→ Turbocharger modeling with maps</li>
                    <li>→ Supercharger simulation</li>
                    <li>→ Boost control systems</li>
                    <li>→ Intercooler effectiveness</li>
                  </ul>
                </div>

                <div className="border-2 border-dashed border-border p-8 bg-background-secondary">
                  <div className="text-text-tertiary text-xs mb-3 font-mono">PHASE 4+ • PRODUCTION MVP</div>
                  <h3 className="font-display font-semibold text-lg text-text-primary mb-4">
                    Advanced Systems
                  </h3>
                  <ul className="space-y-2 text-text-secondary text-sm">
                    <li>→ ECU simulation (fuel/ignition/boost)</li>
                    <li>→ Component failure prediction</li>
                    <li>→ Transmission and drivetrain</li>
                    <li>→ Comprehensive cost calculator</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Dotted Line Separator */}
            <div className="border-t-2 border-dashed border-border my-20"></div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center border-2 border-dashed border-accent-primary p-12 bg-background-secondary"
            >
              <h2 className="font-display font-bold text-4xl text-cyan mb-4 leading-[1.1]">
                READY TO BUILD?
              </h2>
              <p className="text-text-secondary text-lg mb-8 max-w-2xl mx-auto">
                Start testing your engine configurations today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button href="/" size="lg">
                  Back to Home
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
