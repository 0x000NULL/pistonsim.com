'use client'

import { m } from 'framer-motion'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Button from '@/components/Button'
import SectionDivider from '@/components/SectionDivider'
import ListItem from '@/components/ListItem'
import { fadeInUp, fadeInUpTransition, fadeIn, viewportConfig } from '@/lib/animations'
import { FiArrowRight } from '@/lib/icons'

export default function Features(): React.ReactElement {
  return (
    <>
      <Header />
      <main id="main-content" className="min-h-screen pt-24">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="container-custom mx-auto max-w-6xl">
            <m.div
              variants={fadeInUp}
              initial="initial"
              animate="animate"
              transition={fadeInUpTransition}
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
            </m.div>

            <SectionDivider />

            {/* Virtual Dyno System */}
            <m.div
              variants={fadeIn}
              initial="initial"
              whileInView="animate"
              viewport={viewportConfig}
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
                    <ListItem>SAE J1349 standard correction</ListItem>
                    <ListItem>DIN 70020 standard correction</ListItem>
                    <ListItem>Industry-standard environmental compensation</ListItem>
                    <ListItem>Accurate power measurements across conditions</ListItem>
                  </ul>
                </div>

                <div className="border-2 border-dashed border-border hover:border-accent-primary transition-colors p-8 bg-background-secondary">
                  <h3 className="font-display font-semibold text-xl text-cyan mb-4">
                    Operating Modes
                  </h3>
                  <ul className="space-y-2 text-text-secondary text-sm">
                    <ListItem>TIME_BASED: Realistic acceleration simulation</ListItem>
                    <ListItem>STATIC: Direct calculation for validation</ListItem>
                    <ListItem>Configurable inertia modeling</ListItem>
                    <ListItem>Advanced loss modeling (friction + windage)</ListItem>
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
            </m.div>

            <SectionDivider />

            {/* Parts Database */}
            <m.div
              variants={fadeIn}
              initial="initial"
              whileInView="animate"
              viewport={viewportConfig}
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
                    <ListItem>Automatic bore spacing validation</ListItem>
                    <ListItem>Valve clearance checking</ListItem>
                  </ul>
                  <ul className="space-y-2 text-text-secondary text-sm">
                    <ListItem>Physical fitment verification</ListItem>
                    <ListItem>Cost-benefit analysis with pricing data</ListItem>
                  </ul>
                </div>
              </div>
            </m.div>

            <SectionDivider />

            {/* Physics-Based Modeling */}
            <m.div
              variants={fadeIn}
              initial="initial"
              whileInView="animate"
              viewport={viewportConfig}
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
                    <ListItem>Two-zone combustion model</ListItem>
                    <ListItem>Wiebe function implementation</ListItem>
                    <ListItem>Heat transfer to cylinder walls</ListItem>
                    <ListItem>Multiple fuel support (gasoline, E85, race gas)</ListItem>
                  </ul>
                </div>

                <div className="border-2 border-dashed border-border hover:border-accent-primary transition-colors p-8 bg-background-secondary">
                  <h3 className="font-display font-semibold text-xl text-cyan mb-4">
                    Mechanical Systems
                  </h3>
                  <ul className="space-y-2 text-text-secondary text-sm">
                    <ListItem>Slider-crank kinematics</ListItem>
                    <ListItem>Chen-Flynn friction modeling</ListItem>
                    <ListItem>Force analysis (cylinder pressure → torque)</ListItem>
                    <ListItem>Valvetrain mechanics</ListItem>
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
            </m.div>

            <SectionDivider />

            {/* Development Roadmap */}
            <m.div
              variants={fadeIn}
              initial="initial"
              whileInView="animate"
              viewport={viewportConfig}
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
            </m.div>

            <SectionDivider />

            {/* CTA */}
            <m.div
              variants={fadeIn}
              initial="initial"
              whileInView="animate"
              viewport={viewportConfig}
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
            </m.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
