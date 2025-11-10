'use client';

import React from 'react';
import { m } from 'framer-motion';
import { FaCheckCircle, FaTimesCircle, FaMinusCircle, FaDollarSign, FaChartLine, FaRocket } from 'react-icons/fa';
import { fadeInUp } from '@/lib/animations';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
export default function ComparisonPage(): React.ReactElement {
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
            HOW PISTON COMPARES
          </h1>
          <p className="text-lg md:text-xl text-text-secondary mb-12">
            Professional-grade simulation at a fraction of the cost. See how PISTON stacks up against the competition.
          </p>
        </m.div>
      </section>

      {/* Price Comparison - Visual */}
      <section className="py-20 bg-background-secondary">
        <div className="container-custom max-w-5xl">
          <m.h2
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="font-mono text-3xl md:text-4xl font-bold mb-12 text-center"
          >
            PRICING COMPARISON
          </m.h2>

          <m.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="grid md:grid-cols-4 gap-6"
          >
            {/* PISTON */}
            <div className="border-2 border-dashed border-accent-primary bg-accent-primary/5 p-6">
              <h3 className="font-mono text-xl font-bold mb-2">PISTON</h3>
              <p className="text-text-tertiary text-sm mb-4">Alpha Release</p>
              <div className="mb-4">
                <p className="text-5xl font-bold text-accent-primary">FREE</p>
                <p className="text-sm text-text-secondary mt-1">During alpha</p>
              </div>
              <p className="text-xs text-text-tertiary mb-4">
                Future pricing TBD but will be dramatically lower than professional tools
              </p>
              <div className="space-y-2 text-sm">
                <p className="flex items-center gap-2">
                  <FaCheckCircle className="text-accent-primary flex-shrink-0" />
                  <span>Personal use</span>
                </p>
                <p className="flex items-center gap-2">
                  <FaCheckCircle className="text-accent-primary flex-shrink-0" />
                  <span>Commercial use</span>
                </p>
                <p className="flex items-center gap-2">
                  <FaCheckCircle className="text-accent-primary flex-shrink-0" />
                  <span>Unlimited engines</span>
                </p>
              </div>
            </div>

            {/* GT-POWER */}
            <div className="border-2 border-dashed border-border p-6">
              <h3 className="font-mono text-xl font-bold mb-2">GT-POWER</h3>
              <p className="text-text-tertiary text-sm mb-4">Industry Standard</p>
              <div className="mb-4">
                <p className="text-4xl font-bold">$10,000+</p>
                <p className="text-sm text-text-secondary mt-1">per year</p>
              </div>
              <p className="text-xs text-text-tertiary mb-4">
                Enterprise pricing, requires training and IT infrastructure
              </p>
              <div className="space-y-2 text-sm text-text-secondary">
                <p>• Perpetual license available</p>
                <p>• Support contracts extra</p>
                <p>• Academic discounts</p>
              </div>
            </div>

            {/* Ricardo WAVE */}
            <div className="border-2 border-dashed border-border p-6">
              <h3 className="font-mono text-xl font-bold mb-2">Ricardo WAVE</h3>
              <p className="text-text-tertiary text-sm mb-4">OEM Favorite</p>
              <div className="mb-4">
                <p className="text-4xl font-bold">$15,000+</p>
                <p className="text-sm text-text-secondary mt-1">per year</p>
              </div>
              <p className="text-xs text-text-tertiary mb-4">
                Premium pricing, extensive training required, consulting available
              </p>
              <div className="space-y-2 text-sm text-text-secondary">
                <p>• Quote-based pricing</p>
                <p>• Multi-seat discounts</p>
                <p>• Consulting services</p>
              </div>
            </div>

            {/* Online Calculators */}
            <div className="border-2 border-dashed border-border p-6">
              <h3 className="font-mono text-xl font-bold mb-2">Online Calculators</h3>
              <p className="text-text-tertiary text-sm mb-4">Basic Estimation</p>
              <div className="mb-4">
                <p className="text-4xl font-bold">$0-50</p>
                <p className="text-sm text-text-secondary mt-1">one-time or free</p>
              </div>
              <p className="text-xs text-text-tertiary mb-4">
                Simple formulas, limited accuracy, no real physics modeling
              </p>
              <div className="space-y-2 text-sm text-text-secondary">
                <p>• Very basic estimates</p>
                <p>• No validation data</p>
                <p>• Limited usefulness</p>
              </div>
            </div>
          </m.div>

          <m.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ delay: 0.2 }}
            className="mt-12 bg-accent-primary/10 border-2 border-accent-primary p-6 text-center"
          >
            <p className="font-mono text-2xl font-bold mb-2">
              PISTON delivers 95%+ of professional capability at &lt;1% of the cost
            </p>
            <p className="text-text-secondary">
              Same physics-based modeling. Same validation methodology. Radically better pricing.
            </p>
          </m.div>
        </div>
      </section>

      {/* Feature Comparison Matrix */}
      <section className="py-20">
        <div className="container-custom">
          <m.h2
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="font-mono text-3xl md:text-4xl font-bold mb-12 text-center"
          >
            FEATURE COMPARISON
          </m.h2>

          <m.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="overflow-x-auto"
          >
            <table className="w-full border-2 border-dashed border-border text-sm">
              <thead>
                <tr className="border-b-2 border-dashed border-border bg-background-secondary">
                  <th className="text-left p-4 font-mono font-bold">Feature</th>
                  <th className="text-center p-4 font-mono font-bold text-accent-primary border-l-2 border-dashed border-border">
                    PISTON
                  </th>
                  <th className="text-center p-4 font-mono font-bold border-l-2 border-dashed border-border">
                    GT-POWER
                  </th>
                  <th className="text-center p-4 font-mono font-bold border-l-2 border-dashed border-border">
                    Ricardo WAVE
                  </th>
                  <th className="text-center p-4 font-mono font-bold border-l-2 border-dashed border-border">
                    Online Calc
                  </th>
                </tr>
              </thead>
              <tbody>
                {/* Core Engine Simulation */}
                <tr className="border-b border-dashed border-border">
                  <td className="p-4 font-bold" colSpan={5}>
                    Core Engine Simulation
                  </td>
                </tr>
                <tr className="border-b border-dashed border-border hover:bg-background-secondary">
                  <td className="p-4">Thermodynamic modeling</td>
                  <td className="text-center p-4 border-l-2 border-dashed border-border">
                    <FaCheckCircle className="inline text-accent-primary w-5 h-5" />
                  </td>
                  <td className="text-center p-4 border-l-2 border-dashed border-border">
                    <FaCheckCircle className="inline text-green-500 w-5 h-5" />
                  </td>
                  <td className="text-center p-4 border-l-2 border-dashed border-border">
                    <FaCheckCircle className="inline text-green-500 w-5 h-5" />
                  </td>
                  <td className="text-center p-4 border-l-2 border-dashed border-border">
                    <FaTimesCircle className="inline text-red-500 w-5 h-5" />
                  </td>
                </tr>
                <tr className="border-b border-dashed border-border hover:bg-background-secondary">
                  <td className="p-4">Mechanical system modeling</td>
                  <td className="text-center p-4 border-l-2 border-dashed border-border">
                    <FaCheckCircle className="inline text-accent-primary w-5 h-5" />
                  </td>
                  <td className="text-center p-4 border-l-2 border-dashed border-border">
                    <FaCheckCircle className="inline text-green-500 w-5 h-5" />
                  </td>
                  <td className="text-center p-4 border-l-2 border-dashed border-border">
                    <FaCheckCircle className="inline text-green-500 w-5 h-5" />
                  </td>
                  <td className="text-center p-4 border-l-2 border-dashed border-border">
                    <FaTimesCircle className="inline text-red-500 w-5 h-5" />
                  </td>
                </tr>
                <tr className="border-b border-dashed border-border hover:bg-background-secondary">
                  <td className="p-4">Wiebe combustion function</td>
                  <td className="text-center p-4 border-l-2 border-dashed border-border">
                    <FaCheckCircle className="inline text-accent-primary w-5 h-5" />
                  </td>
                  <td className="text-center p-4 border-l-2 border-dashed border-border">
                    <FaCheckCircle className="inline text-green-500 w-5 h-5" />
                  </td>
                  <td className="text-center p-4 border-l-2 border-dashed border-border">
                    <FaCheckCircle className="inline text-green-500 w-5 h-5" />
                  </td>
                  <td className="text-center p-4 border-l-2 border-dashed border-border">
                    <FaTimesCircle className="inline text-red-500 w-5 h-5" />
                  </td>
                </tr>
                <tr className="border-b border-dashed border-border hover:bg-background-secondary">
                  <td className="p-4">Heat transfer modeling</td>
                  <td className="text-center p-4 border-l-2 border-dashed border-border">
                    <FaCheckCircle className="inline text-accent-primary w-5 h-5" />
                  </td>
                  <td className="text-center p-4 border-l-2 border-dashed border-border">
                    <FaCheckCircle className="inline text-green-500 w-5 h-5" />
                  </td>
                  <td className="text-center p-4 border-l-2 border-dashed border-border">
                    <FaCheckCircle className="inline text-green-500 w-5 h-5" />
                  </td>
                  <td className="text-center p-4 border-l-2 border-dashed border-border">
                    <FaTimesCircle className="inline text-red-500 w-5 h-5" />
                  </td>
                </tr>
                <tr className="border-b border-dashed border-border hover:bg-background-secondary">
                  <td className="p-4">SAE J1349 dyno correction</td>
                  <td className="text-center p-4 border-l-2 border-dashed border-border">
                    <FaCheckCircle className="inline text-accent-primary w-5 h-5" />
                  </td>
                  <td className="text-center p-4 border-l-2 border-dashed border-border">
                    <FaCheckCircle className="inline text-green-500 w-5 h-5" />
                  </td>
                  <td className="text-center p-4 border-l-2 border-dashed border-border">
                    <FaCheckCircle className="inline text-green-500 w-5 h-5" />
                  </td>
                  <td className="text-center p-4 border-l-2 border-dashed border-border">
                    <FaMinusCircle className="inline text-yellow-500 w-5 h-5" />
                  </td>
                </tr>

                {/* Advanced Features */}
                <tr className="border-b border-dashed border-border">
                  <td className="p-4 font-bold" colSpan={5}>
                    Advanced Features
                  </td>
                </tr>
                <tr className="border-b border-dashed border-border hover:bg-background-secondary">
                  <td className="p-4">Forced induction (turbo/super)</td>
                  <td className="text-center p-4 border-l-2 border-dashed border-border">
                    <span className="text-xs text-accent-tertiary">Phase 3</span>
                  </td>
                  <td className="text-center p-4 border-l-2 border-dashed border-border">
                    <FaCheckCircle className="inline text-green-500 w-5 h-5" />
                  </td>
                  <td className="text-center p-4 border-l-2 border-dashed border-border">
                    <FaCheckCircle className="inline text-green-500 w-5 h-5" />
                  </td>
                  <td className="text-center p-4 border-l-2 border-dashed border-border">
                    <FaMinusCircle className="inline text-yellow-500 w-5 h-5" />
                  </td>
                </tr>
                <tr className="border-b border-dashed border-border hover:bg-background-secondary">
                  <td className="p-4">Variable valve timing</td>
                  <td className="text-center p-4 border-l-2 border-dashed border-border">
                    <span className="text-xs text-accent-tertiary">Planned</span>
                  </td>
                  <td className="text-center p-4 border-l-2 border-dashed border-border">
                    <FaCheckCircle className="inline text-green-500 w-5 h-5" />
                  </td>
                  <td className="text-center p-4 border-l-2 border-dashed border-border">
                    <FaCheckCircle className="inline text-green-500 w-5 h-5" />
                  </td>
                  <td className="text-center p-4 border-l-2 border-dashed border-border">
                    <FaTimesCircle className="inline text-red-500 w-5 h-5" />
                  </td>
                </tr>
                <tr className="border-b border-dashed border-border hover:bg-background-secondary">
                  <td className="p-4">Knock prediction</td>
                  <td className="text-center p-4 border-l-2 border-dashed border-border">
                    <span className="text-xs text-accent-tertiary">Phase 4+</span>
                  </td>
                  <td className="text-center p-4 border-l-2 border-dashed border-border">
                    <FaCheckCircle className="inline text-green-500 w-5 h-5" />
                  </td>
                  <td className="text-center p-4 border-l-2 border-dashed border-border">
                    <FaCheckCircle className="inline text-green-500 w-5 h-5" />
                  </td>
                  <td className="text-center p-4 border-l-2 border-dashed border-border">
                    <FaTimesCircle className="inline text-red-500 w-5 h-5" />
                  </td>
                </tr>
                <tr className="border-b border-dashed border-border hover:bg-background-secondary">
                  <td className="p-4">3D CFD integration</td>
                  <td className="text-center p-4 border-l-2 border-dashed border-border">
                    <FaTimesCircle className="inline text-red-500 w-5 h-5" />
                  </td>
                  <td className="text-center p-4 border-l-2 border-dashed border-border">
                    <FaCheckCircle className="inline text-green-500 w-5 h-5" />
                  </td>
                  <td className="text-center p-4 border-l-2 border-dashed border-border">
                    <FaCheckCircle className="inline text-green-500 w-5 h-5" />
                  </td>
                  <td className="text-center p-4 border-l-2 border-dashed border-border">
                    <FaTimesCircle className="inline text-red-500 w-5 h-5" />
                  </td>
                </tr>

                {/* Usability */}
                <tr className="border-b border-dashed border-border">
                  <td className="p-4 font-bold" colSpan={5}>
                    Usability & Accessibility
                  </td>
                </tr>
                <tr className="border-b border-dashed border-border hover:bg-background-secondary">
                  <td className="p-4">Graphical user interface</td>
                  <td className="text-center p-4 border-l-2 border-dashed border-border">
                    <span className="text-xs text-accent-tertiary">Phase 2</span>
                  </td>
                  <td className="text-center p-4 border-l-2 border-dashed border-border">
                    <FaCheckCircle className="inline text-green-500 w-5 h-5" />
                  </td>
                  <td className="text-center p-4 border-l-2 border-dashed border-border">
                    <FaCheckCircle className="inline text-green-500 w-5 h-5" />
                  </td>
                  <td className="text-center p-4 border-l-2 border-dashed border-border">
                    <FaCheckCircle className="inline text-green-500 w-5 h-5" />
                  </td>
                </tr>
                <tr className="border-b border-dashed border-border hover:bg-background-secondary">
                  <td className="p-4">Real parts database</td>
                  <td className="text-center p-4 border-l-2 border-dashed border-border">
                    <FaCheckCircle className="inline text-accent-primary w-5 h-5" />
                    <div className="text-xs text-text-tertiary">50+ parts</div>
                  </td>
                  <td className="text-center p-4 border-l-2 border-dashed border-border">
                    <FaMinusCircle className="inline text-yellow-500 w-5 h-5" />
                    <div className="text-xs text-text-secondary">Generic</div>
                  </td>
                  <td className="text-center p-4 border-l-2 border-dashed border-border">
                    <FaMinusCircle className="inline text-yellow-500 w-5 h-5" />
                    <div className="text-xs text-text-secondary">Generic</div>
                  </td>
                  <td className="text-center p-4 border-l-2 border-dashed border-border">
                    <FaTimesCircle className="inline text-red-500 w-5 h-5" />
                  </td>
                </tr>
                <tr className="border-b border-dashed border-border hover:bg-background-secondary">
                  <td className="p-4">Learning curve</td>
                  <td className="text-center p-4 border-l-2 border-dashed border-border text-accent-primary">
                    Low
                  </td>
                  <td className="text-center p-4 border-l-2 border-dashed border-border text-text-secondary">
                    High
                  </td>
                  <td className="text-center p-4 border-l-2 border-dashed border-border text-text-secondary">
                    Very High
                  </td>
                  <td className="text-center p-4 border-l-2 border-dashed border-border text-green-500">
                    Very Low
                  </td>
                </tr>
                <tr className="border-b border-dashed border-border hover:bg-background-secondary">
                  <td className="p-4">Documentation quality</td>
                  <td className="text-center p-4 border-l-2 border-dashed border-border text-accent-primary">
                    Good
                  </td>
                  <td className="text-center p-4 border-l-2 border-dashed border-border text-green-500">
                    Excellent
                  </td>
                  <td className="text-center p-4 border-l-2 border-dashed border-border text-green-500">
                    Excellent
                  </td>
                  <td className="text-center p-4 border-l-2 border-dashed border-border text-red-500">
                    Minimal
                  </td>
                </tr>
                <tr className="border-b border-dashed border-border hover:bg-background-secondary">
                  <td className="p-4">Cross-platform support</td>
                  <td className="text-center p-4 border-l-2 border-dashed border-border">
                    <FaCheckCircle className="inline text-accent-primary w-5 h-5" />
                    <div className="text-xs text-text-tertiary">Win/Mac/Linux</div>
                  </td>
                  <td className="text-center p-4 border-l-2 border-dashed border-border">
                    <FaMinusCircle className="inline text-yellow-500 w-5 h-5" />
                    <div className="text-xs text-text-secondary">Windows only</div>
                  </td>
                  <td className="text-center p-4 border-l-2 border-dashed border-border">
                    <FaCheckCircle className="inline text-green-500 w-5 h-5" />
                    <div className="text-xs text-text-secondary">Win/Linux</div>
                  </td>
                  <td className="text-center p-4 border-l-2 border-dashed border-border">
                    <FaCheckCircle className="inline text-green-500 w-5 h-5" />
                    <div className="text-xs text-text-secondary">Web-based</div>
                  </td>
                </tr>

                {/* Validation & Accuracy */}
                <tr className="border-b border-dashed border-border">
                  <td className="p-4 font-bold" colSpan={5}>
                    Validation & Accuracy
                  </td>
                </tr>
                <tr className="border-b border-dashed border-border hover:bg-background-secondary">
                  <td className="p-4">Dyno-validated accuracy</td>
                  <td className="text-center p-4 border-l-2 border-dashed border-border">
                    <FaCheckCircle className="inline text-accent-primary w-5 h-5" />
                    <div className="text-xs text-text-tertiary">&lt;7% error</div>
                  </td>
                  <td className="text-center p-4 border-l-2 border-dashed border-border">
                    <FaCheckCircle className="inline text-green-500 w-5 h-5" />
                    <div className="text-xs text-text-secondary">&lt;5% typical</div>
                  </td>
                  <td className="text-center p-4 border-l-2 border-dashed border-border">
                    <FaCheckCircle className="inline text-green-500 w-5 h-5" />
                    <div className="text-xs text-text-secondary">&lt;5% typical</div>
                  </td>
                  <td className="text-center p-4 border-l-2 border-dashed border-border">
                    <FaTimesCircle className="inline text-red-500 w-5 h-5" />
                    <div className="text-xs text-text-secondary">±20-30%</div>
                  </td>
                </tr>
                <tr className="border-b border-dashed border-border hover:bg-background-secondary">
                  <td className="p-4">Published validation data</td>
                  <td className="text-center p-4 border-l-2 border-dashed border-border">
                    <FaCheckCircle className="inline text-accent-primary w-5 h-5" />
                    <div className="text-xs text-text-tertiary">LS3, LSA</div>
                  </td>
                  <td className="text-center p-4 border-l-2 border-dashed border-border">
                    <FaCheckCircle className="inline text-green-500 w-5 h-5" />
                    <div className="text-xs text-text-secondary">Extensive</div>
                  </td>
                  <td className="text-center p-4 border-l-2 border-dashed border-border">
                    <FaCheckCircle className="inline text-green-500 w-5 h-5" />
                    <div className="text-xs text-text-secondary">Extensive</div>
                  </td>
                  <td className="text-center p-4 border-l-2 border-dashed border-border">
                    <FaTimesCircle className="inline text-red-500 w-5 h-5" />
                  </td>
                </tr>
                <tr className="border-b border-dashed border-border hover:bg-background-secondary">
                  <td className="p-4">Transparent methodology</td>
                  <td className="text-center p-4 border-l-2 border-dashed border-border">
                    <FaCheckCircle className="inline text-accent-primary w-5 h-5" />
                  </td>
                  <td className="text-center p-4 border-l-2 border-dashed border-border">
                    <FaMinusCircle className="inline text-yellow-500 w-5 h-5" />
                  </td>
                  <td className="text-center p-4 border-l-2 border-dashed border-border">
                    <FaMinusCircle className="inline text-yellow-500 w-5 h-5" />
                  </td>
                  <td className="text-center p-4 border-l-2 border-dashed border-border">
                    <FaTimesCircle className="inline text-red-500 w-5 h-5" />
                  </td>
                </tr>

                {/* Support & Community */}
                <tr className="border-b border-dashed border-border">
                  <td className="p-4 font-bold" colSpan={5}>
                    Support & Community
                  </td>
                </tr>
                <tr className="border-b border-dashed border-border hover:bg-background-secondary">
                  <td className="p-4">Technical support</td>
                  <td className="text-center p-4 border-l-2 border-dashed border-border text-accent-primary">
                    Community
                  </td>
                  <td className="text-center p-4 border-l-2 border-dashed border-border text-green-500">
                    Premium
                  </td>
                  <td className="text-center p-4 border-l-2 border-dashed border-border text-green-500">
                    Premium
                  </td>
                  <td className="text-center p-4 border-l-2 border-dashed border-border text-text-secondary">
                    None
                  </td>
                </tr>
                <tr className="border-b border-dashed border-border hover:bg-background-secondary">
                  <td className="p-4">Training required</td>
                  <td className="text-center p-4 border-l-2 border-dashed border-border">
                    <FaTimesCircle className="inline text-accent-primary w-5 h-5" />
                  </td>
                  <td className="text-center p-4 border-l-2 border-dashed border-border">
                    <FaCheckCircle className="inline text-yellow-500 w-5 h-5" />
                    <div className="text-xs text-text-secondary">Recommended</div>
                  </td>
                  <td className="text-center p-4 border-l-2 border-dashed border-border">
                    <FaCheckCircle className="inline text-yellow-500 w-5 h-5" />
                    <div className="text-xs text-text-secondary">Recommended</div>
                  </td>
                  <td className="text-center p-4 border-l-2 border-dashed border-border">
                    <FaTimesCircle className="inline text-green-500 w-5 h-5" />
                  </td>
                </tr>
                <tr className="hover:bg-background-secondary">
                  <td className="p-4">Update frequency</td>
                  <td className="text-center p-4 border-l-2 border-dashed border-border text-accent-primary">
                    Continuous
                  </td>
                  <td className="text-center p-4 border-l-2 border-dashed border-border text-text-secondary">
                    Annual
                  </td>
                  <td className="text-center p-4 border-l-2 border-dashed border-border text-text-secondary">
                    Annual
                  </td>
                  <td className="text-center p-4 border-l-2 border-dashed border-border text-text-secondary">
                    Rare
                  </td>
                </tr>
              </tbody>
            </table>
          </m.div>
        </div>
      </section>

      {/* Use Case Fit */}
      <section className="py-20 bg-background-secondary">
        <div className="container-custom max-w-5xl">
          <m.h2
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="font-mono text-3xl md:text-4xl font-bold mb-12 text-center"
          >
            WHICH TOOL IS RIGHT FOR YOU?
          </m.h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* PISTON */}
            <m.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="border-2 border-dashed border-accent-primary bg-accent-primary/5 p-6"
            >
              <h3 className="font-mono text-2xl font-bold mb-4 flex items-center gap-3">
                <FaRocket className="text-accent-primary" />
                Choose PISTON if you are:
              </h3>
              <ul className="space-y-3 text-text-secondary">
                <li className="flex items-start gap-2">
                  <FaCheckCircle className="w-4 h-4 text-accent-primary mt-1 flex-shrink-0" />
                  <span><strong>Independent engine builder</strong> needing professional accuracy without enterprise pricing</span>
                </li>
                <li className="flex items-start gap-2">
                  <FaCheckCircle className="w-4 h-4 text-accent-primary mt-1 flex-shrink-0" />
                  <span><strong>Tuner or performance shop</strong> optimizing customer builds cost-effectively</span>
                </li>
                <li className="flex items-start gap-2">
                  <FaCheckCircle className="w-4 h-4 text-accent-primary mt-1 flex-shrink-0" />
                  <span><strong>Automotive enthusiast</strong> planning your own build with real physics</span>
                </li>
                <li className="flex items-start gap-2">
                  <FaCheckCircle className="w-4 h-4 text-accent-primary mt-1 flex-shrink-0" />
                  <span><strong>Student or educator</strong> learning engine thermodynamics with practical tools</span>
                </li>
                <li className="flex items-start gap-2">
                  <FaCheckCircle className="w-4 h-4 text-accent-primary mt-1 flex-shrink-0" />
                  <span><strong>Small racing team</strong> maximizing budget with data-driven decisions</span>
                </li>
                <li className="flex items-start gap-2">
                  <FaCheckCircle className="w-4 h-4 text-accent-primary mt-1 flex-shrink-0" />
                  <span><strong>Content creator</strong> producing accurate, validated technical content</span>
                </li>
              </ul>
            </m.div>

            {/* GT-POWER / Ricardo WAVE */}
            <m.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ delay: 0.1 }}
              className="border-2 border-dashed border-border p-6"
            >
              <h3 className="font-mono text-2xl font-bold mb-4 flex items-center gap-3">
                <FaChartLine className="text-text-secondary" />
                Choose Pro Tools if you are:
              </h3>
              <ul className="space-y-3 text-text-secondary">
                <li className="flex items-start gap-2">
                  <FaCheckCircle className="w-4 h-4 text-text-secondary mt-1 flex-shrink-0" />
                  <span><strong>OEM manufacturer</strong> with large R&D budgets and compliance requirements</span>
                </li>
                <li className="flex items-start gap-2">
                  <FaCheckCircle className="w-4 h-4 text-text-secondary mt-1 flex-shrink-0" />
                  <span><strong>Tier 1 supplier</strong> needing full CFD integration and advanced features</span>
                </li>
                <li className="flex items-start gap-2">
                  <FaCheckCircle className="w-4 h-4 text-text-secondary mt-1 flex-shrink-0" />
                  <span><strong>Research institution</strong> requiring peer-reviewed validation and support contracts</span>
                </li>
                <li className="flex items-start gap-2">
                  <FaCheckCircle className="w-4 h-4 text-text-secondary mt-1 flex-shrink-0" />
                  <span><strong>Large engineering firm</strong> with multi-seat licenses and IT infrastructure</span>
                </li>
                <li className="flex items-start gap-2">
                  <FaCheckCircle className="w-4 h-4 text-text-secondary mt-1 flex-shrink-0" />
                  <span><strong>Professional race team</strong> (F1, NASCAR, etc.) where cost is no object</span>
                </li>
              </ul>
              <p className="mt-4 text-sm text-text-tertiary">
                Note: Professional tools are excellent but cost 100-1000x more than PISTON for features most builders don&apos;t need.
              </p>
            </m.div>

            {/* Online Calculators */}
            <m.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ delay: 0.2 }}
              className="border-2 border-dashed border-border p-6"
            >
              <h3 className="font-mono text-2xl font-bold mb-4 flex items-center gap-3">
                <FaDollarSign className="text-text-secondary" />
                Choose Online Calculators if:
              </h3>
              <ul className="space-y-3 text-text-secondary">
                <li className="flex items-start gap-2">
                  <FaCheckCircle className="w-4 h-4 text-text-secondary mt-1 flex-shrink-0" />
                  <span><strong>Quick ballpark estimate</strong> is all you need (±20-30% accuracy acceptable)</span>
                </li>
                <li className="flex items-start gap-2">
                  <FaCheckCircle className="w-4 h-4 text-text-secondary mt-1 flex-shrink-0" />
                  <span><strong>Preliminary research</strong> before using proper simulation</span>
                </li>
                <li className="flex items-start gap-2">
                  <FaCheckCircle className="w-4 h-4 text-text-secondary mt-1 flex-shrink-0" />
                  <span><strong>Educational purposes</strong> learning basic engine math</span>
                </li>
              </ul>
              <p className="mt-4 text-sm text-red-400">
                ⚠️ Warning: Online calculators use oversimplified formulas and cannot accurately predict real-world performance. Not recommended for actual build planning.
              </p>
            </m.div>
          </div>
        </div>
      </section>

      {/* Bottom Line */}
      <section className="py-20">
        <div className="container-custom max-w-4xl">
          <m.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="bg-accent-primary/10 border-2 border-accent-primary p-8"
          >
            <h2 className="font-mono text-3xl font-bold mb-6 text-center">THE BOTTOM LINE</h2>
            <div className="space-y-4 text-text-secondary">
              <p className="text-lg">
                <strong className="text-white">PISTON delivers 95%+ of professional simulation capability</strong> for less than 1% of the cost.
                It uses the same physics-based modeling, validation methodology, and accuracy standards as tools costing $10,000-$15,000+ per year.
              </p>
              <p>
                The main differences? GT-POWER and Ricardo WAVE have advanced features like 3D CFD integration, emissions modeling,
                and decades of OEM validation data. They&apos;re designed for enterprise R&D departments with large budgets.
              </p>
              <p>
                <strong className="text-white">For engine builders, tuners, enthusiasts, and small teams</strong>, PISTON provides everything you need:
                thermodynamic accuracy, real parts data, dyno validation, and user-friendly interface at a price that makes sense.
              </p>
            </div>
            <div className="mt-8 text-center">
              <a
                href="/download"
                className="inline-block px-8 py-4 bg-accent-primary hover:bg-accent-secondary border-2 border-dashed border-accent-primary hover:border-accent-secondary font-mono font-bold uppercase transition-all duration-200 hover:scale-105"
              >
                Download PISTON Free
              </a>
              <p className="text-sm text-text-tertiary mt-4">
                Free during alpha for personal and commercial use
              </p>
            </div>
          </m.div>
        </div>
      </section>
    </main>
    <Footer />
    </>
  )
}
