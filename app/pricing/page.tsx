'use client';

import React from 'react';
import { m } from 'framer-motion';
import { FaCheckCircle, FaRocket, FaUsers, FaBuilding, FaDollarSign, FaQuestionCircle } from 'react-icons/fa';
import { fadeInUp } from '@/lib/animations';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
export default function PricingPage(): React.ReactElement {
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
            PRICING
          </h1>
          <p className="text-lg md:text-xl text-text-secondary mb-12">
            Professional-grade simulation at a fraction of the cost. Free during alpha, affordable forever.
          </p>
        </m.div>
      </section>

      {/* Current Status Banner */}
      <section className="py-12 bg-background-secondary">
        <div className="container-custom max-w-4xl">
          <m.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="bg-accent-primary text-black p-8 border-2 border-dashed border-accent-primary"
          >
            <div className="text-center">
              <h2 className="font-mono text-3xl md:text-4xl font-bold mb-4">
                🎉 FREE DURING ALPHA
              </h2>
              <p className="text-lg mb-2">
                PISTON is currently <strong>100% free</strong> for personal and commercial use during the alpha testing phase.
              </p>
              <p className="text-sm opacity-90">
                No credit card required. No trial period. No feature limitations. Just download and start simulating.
              </p>
              <a
                href="/download"
                className="inline-block mt-6 px-8 py-4 bg-black text-white hover:bg-gray-900 border-2 border-dashed border-black font-mono font-bold uppercase transition-all duration-200"
              >
                Download Now
              </a>
            </div>
          </m.div>
        </div>
      </section>

      {/* Future Pricing Tiers */}
      <section className="py-20 bg-background-secondary">
        <div className="container-custom max-w-6xl">
          <m.h2
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="font-mono text-3xl md:text-4xl font-bold mb-6 text-center"
          >
            PLANNED PRICING TIERS
          </m.h2>
          <m.p
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-text-secondary text-center mb-12 max-w-3xl mx-auto"
          >
            After alpha, PISTON will transition to a sustainable pricing model. Final pricing is not yet determined,
            but here&apos;s what we&apos;re considering. Expect at least 30 days notice before any paid tiers launch.
          </m.p>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Free Tier */}
            <m.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="border-2 border-dashed border-border p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <FaRocket className="text-accent-primary w-6 h-6" />
                <h3 className="font-mono text-2xl font-bold">Free</h3>
              </div>
              <p className="text-text-tertiary mb-4">For hobbyists and learners</p>
              <div className="mb-6">
                <p className="text-4xl font-bold">$0</p>
                <p className="text-sm text-text-secondary">Forever</p>
              </div>
              <ul className="space-y-3 text-sm mb-6">
                <li className="flex items-start gap-2">
                  <FaCheckCircle className="w-4 h-4 text-accent-primary mt-1 flex-shrink-0" />
                  <span>Core simulation engine</span>
                </li>
                <li className="flex items-start gap-2">
                  <FaCheckCircle className="w-4 h-4 text-accent-primary mt-1 flex-shrink-0" />
                  <span>Limited parts database (20-30 parts)</span>
                </li>
                <li className="flex items-start gap-2">
                  <FaCheckCircle className="w-4 h-4 text-accent-primary mt-1 flex-shrink-0" />
                  <span>CSV export</span>
                </li>
                <li className="flex items-start gap-2">
                  <FaCheckCircle className="w-4 h-4 text-accent-primary mt-1 flex-shrink-0" />
                  <span>Community support</span>
                </li>
                <li className="flex items-start gap-2">
                  <FaCheckCircle className="w-4 h-4 text-accent-primary mt-1 flex-shrink-0" />
                  <span>Personal use only</span>
                </li>
              </ul>
              <div className="text-xs text-text-tertiary">
                Perfect for students, enthusiasts, and those learning engine simulation.
              </div>
            </m.div>

            {/* Enthusiast Tier */}
            <m.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ delay: 0.1 }}
              className="border-2 border-dashed border-accent-primary bg-accent-primary/5 p-6 relative"
            >
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 px-4 py-1 bg-accent-primary text-black font-mono font-bold text-xs">
                MOST POPULAR
              </div>
              <div className="flex items-center gap-3 mb-4">
                <FaUsers className="text-accent-primary w-6 h-6" />
                <h3 className="font-mono text-2xl font-bold">Enthusiast</h3>
              </div>
              <p className="text-text-tertiary mb-4">For builders and tuners</p>
              <div className="mb-6">
                <p className="text-4xl font-bold">$9-19</p>
                <p className="text-sm text-text-secondary">per month or $99-199/year</p>
              </div>
              <ul className="space-y-3 text-sm mb-6">
                <li className="flex items-start gap-2">
                  <FaCheckCircle className="w-4 h-4 text-accent-primary mt-1 flex-shrink-0" />
                  <span><strong>Everything in Free, plus:</strong></span>
                </li>
                <li className="flex items-start gap-2">
                  <FaCheckCircle className="w-4 h-4 text-accent-primary mt-1 flex-shrink-0" />
                  <span>Full parts database (50+ parts, growing)</span>
                </li>
                <li className="flex items-start gap-2">
                  <FaCheckCircle className="w-4 h-4 text-accent-primary mt-1 flex-shrink-0" />
                  <span>Advanced export formats (JSON, etc.)</span>
                </li>
                <li className="flex items-start gap-2">
                  <FaCheckCircle className="w-4 h-4 text-accent-primary mt-1 flex-shrink-0" />
                  <span>Priority feature requests</span>
                </li>
                <li className="flex items-start gap-2">
                  <FaCheckCircle className="w-4 h-4 text-accent-primary mt-1 flex-shrink-0" />
                  <span>Email support (48hr response)</span>
                </li>
                <li className="flex items-start gap-2">
                  <FaCheckCircle className="w-4 h-4 text-accent-primary mt-1 flex-shrink-0" />
                  <span>Commercial use allowed</span>
                </li>
                <li className="flex items-start gap-2">
                  <FaCheckCircle className="w-4 h-4 text-accent-primary mt-1 flex-shrink-0" />
                  <span>Early access to new features</span>
                </li>
              </ul>
              <div className="text-xs text-text-tertiary">
                Ideal for independent builders, tuners, and performance shops planning customer builds.
              </div>
            </m.div>

            {/* Professional Tier */}
            <m.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ delay: 0.2 }}
              className="border-2 border-dashed border-border p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <FaBuilding className="text-text-secondary w-6 h-6" />
                <h3 className="font-mono text-2xl font-bold">Professional</h3>
              </div>
              <p className="text-text-tertiary mb-4">For teams and businesses</p>
              <div className="mb-6">
                <p className="text-4xl font-bold">$49-99</p>
                <p className="text-sm text-text-secondary">per month or $499-999/year</p>
              </div>
              <ul className="space-y-3 text-sm mb-6">
                <li className="flex items-start gap-2">
                  <FaCheckCircle className="w-4 h-4 text-text-secondary mt-1 flex-shrink-0" />
                  <span><strong>Everything in Enthusiast, plus:</strong></span>
                </li>
                <li className="flex items-start gap-2">
                  <FaCheckCircle className="w-4 h-4 text-text-secondary mt-1 flex-shrink-0" />
                  <span>Multi-seat licenses (team pricing)</span>
                </li>
                <li className="flex items-start gap-2">
                  <FaCheckCircle className="w-4 h-4 text-text-secondary mt-1 flex-shrink-0" />
                  <span>Custom parts import (upload your own)</span>
                </li>
                <li className="flex items-start gap-2">
                  <FaCheckCircle className="w-4 h-4 text-text-secondary mt-1 flex-shrink-0" />
                  <span>API access for automation</span>
                </li>
                <li className="flex items-start gap-2">
                  <FaCheckCircle className="w-4 h-4 text-text-secondary mt-1 flex-shrink-0" />
                  <span>Priority email support (24hr response)</span>
                </li>
                <li className="flex items-start gap-2">
                  <FaCheckCircle className="w-4 h-4 text-text-secondary mt-1 flex-shrink-0" />
                  <span>Cloud sync and backups</span>
                </li>
                <li className="flex items-start gap-2">
                  <FaCheckCircle className="w-4 h-4 text-text-secondary mt-1 flex-shrink-0" />
                  <span>Unlimited commercial use</span>
                </li>
              </ul>
              <div className="text-xs text-text-tertiary">
                Built for performance shops, racing teams, and engineering consultancies.
              </div>
            </m.div>
          </div>

          {/* Enterprise */}
          <m.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ delay: 0.3 }}
            className="mt-8 border-2 border-dashed border-border p-8 text-center"
          >
            <h3 className="font-mono text-2xl font-bold mb-3">Enterprise</h3>
            <p className="text-text-secondary mb-4">Custom pricing for large organizations</p>
            <p className="text-sm text-text-tertiary max-w-2xl mx-auto mb-6">
              Need site licenses, dedicated support, custom feature development, or on-premises deployment?
              Contact us for enterprise pricing tailored to your organization&apos;s needs.
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-3 border-2 border-dashed border-border hover:border-border-hover hover:bg-background-secondary font-mono font-bold text-sm transition-all duration-200"
            >
              Contact Sales
            </a>
          </m.div>
        </div>
      </section>

      {/* Comparison with Competitors */}
      <section className="py-20 bg-background-secondary">
        <div className="container-custom max-w-5xl">
          <m.h2
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="font-mono text-3xl md:text-4xl font-bold mb-12 text-center"
          >
            VALUE COMPARISON
          </m.h2>

          <m.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="overflow-x-auto"
          >
            <table className="w-full border-2 border-dashed border-border">
              <thead>
                <tr className="border-b-2 border-dashed border-border bg-background-secondary">
                  <th className="text-left p-4 font-mono font-bold">Feature</th>
                  <th className="text-center p-4 font-mono font-bold text-accent-primary border-l-2 border-dashed border-border">
                    PISTON<br />Enthusiast
                  </th>
                  <th className="text-center p-4 font-mono font-bold border-l-2 border-dashed border-border">
                    GT-POWER
                  </th>
                  <th className="text-center p-4 font-mono font-bold border-l-2 border-dashed border-border">
                    Ricardo WAVE
                  </th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr className="border-b border-dashed border-border hover:bg-background-secondary">
                  <td className="p-4 font-bold">Annual Cost</td>
                  <td className="text-center p-4 border-l-2 border-dashed border-border text-accent-primary font-mono">
                    $99-199
                  </td>
                  <td className="text-center p-4 border-l-2 border-dashed border-border font-mono">
                    $10,000+
                  </td>
                  <td className="text-center p-4 border-l-2 border-dashed border-border font-mono">
                    $15,000+
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
                </tr>
                <tr className="border-b border-dashed border-border hover:bg-background-secondary">
                  <td className="p-4">Dyno-validated accuracy</td>
                  <td className="text-center p-4 border-l-2 border-dashed border-border text-accent-primary">
                    &lt;7%
                  </td>
                  <td className="text-center p-4 border-l-2 border-dashed border-border">
                    &lt;5%
                  </td>
                  <td className="text-center p-4 border-l-2 border-dashed border-border">
                    &lt;5%
                  </td>
                </tr>
                <tr className="border-b border-dashed border-border hover:bg-background-secondary">
                  <td className="p-4">Real parts database</td>
                  <td className="text-center p-4 border-l-2 border-dashed border-border">
                    <FaCheckCircle className="inline text-accent-primary w-5 h-5" />
                    <div className="text-xs text-text-tertiary">50+ parts</div>
                  </td>
                  <td className="text-center p-4 border-l-2 border-dashed border-border text-text-secondary">
                    Generic
                  </td>
                  <td className="text-center p-4 border-l-2 border-dashed border-border text-text-secondary">
                    Generic
                  </td>
                </tr>
                <tr className="border-b border-dashed border-border hover:bg-background-secondary">
                  <td className="p-4">Learning curve</td>
                  <td className="text-center p-4 border-l-2 border-dashed border-border text-accent-primary">
                    Low
                  </td>
                  <td className="text-center p-4 border-l-2 border-dashed border-border">
                    High
                  </td>
                  <td className="text-center p-4 border-l-2 border-dashed border-border">
                    Very High
                  </td>
                </tr>
                <tr className="border-b border-dashed border-border hover:bg-background-secondary">
                  <td className="p-4">Training required</td>
                  <td className="text-center p-4 border-l-2 border-dashed border-border text-accent-primary">
                    No
                  </td>
                  <td className="text-center p-4 border-l-2 border-dashed border-border text-text-secondary">
                    Yes ($2-5k)
                  </td>
                  <td className="text-center p-4 border-l-2 border-dashed border-border text-text-secondary">
                    Yes ($3-8k)
                  </td>
                </tr>
                <tr className="hover:bg-background-secondary">
                  <td className="p-4 font-bold">5-Year Total Cost</td>
                  <td className="text-center p-4 border-l-2 border-dashed border-border text-accent-primary font-mono font-bold">
                    $495-995
                  </td>
                  <td className="text-center p-4 border-l-2 border-dashed border-border font-mono font-bold">
                    $52,000+
                  </td>
                  <td className="text-center p-4 border-l-2 border-dashed border-border font-mono font-bold">
                    $78,000+
                  </td>
                </tr>
              </tbody>
            </table>
          </m.div>

          <m.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ delay: 0.2 }}
            className="mt-8 bg-accent-primary/10 border-2 border-accent-primary p-6 text-center"
          >
            <p className="font-mono text-xl font-bold">
              Save $50,000+ over 5 years while getting 95%+ of the features most builders actually need
            </p>
          </m.div>
        </div>
      </section>

      {/* Grandfather Pricing */}
      <section className="py-20 bg-background-secondary">
        <div className="container-custom max-w-4xl">
          <m.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="border-2 border-dashed border-accent-primary bg-accent-primary/5 p-8"
          >
            <div className="flex items-start gap-4">
              <FaDollarSign className="text-accent-primary w-8 h-8 flex-shrink-0 mt-1" />
              <div>
                <h2 className="font-mono text-2xl md:text-3xl font-bold mb-4">
                  GRANDFATHER PRICING FOR ALPHA TESTERS
                </h2>
                <p className="text-text-secondary mb-4">
                  As a thank you to our alpha testers who help make PISTON better, we&apos;re considering special grandfather pricing:
                </p>
                <ul className="space-y-2 text-text-secondary mb-6">
                  <li className="flex items-start gap-2">
                    <FaCheckCircle className="w-4 h-4 text-accent-primary mt-1 flex-shrink-0" />
                    <span><strong>Lifetime discount:</strong> 25-50% off standard pricing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheckCircle className="w-4 h-4 text-accent-primary mt-1 flex-shrink-0" />
                    <span><strong>Price lock:</strong> Your rate stays the same even as features are added</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheckCircle className="w-4 h-4 text-accent-primary mt-1 flex-shrink-0" />
                    <span><strong>Early bird bonus:</strong> Extended access to premium features during transition</span>
                  </li>
                </ul>
                <p className="text-sm text-text-tertiary">
                  Details TBD. Sign up for our newsletter to be notified when grandfather pricing is finalized.
                </p>
              </div>
            </div>
          </m.div>
        </div>
      </section>

      {/* Pricing FAQ */}
      <section className="py-20 bg-background-secondary">
        <div className="container-custom max-w-4xl">
          <m.h2
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="font-mono text-3xl md:text-4xl font-bold mb-12 text-center"
          >
            PRICING FAQ
          </m.h2>

          <m.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="space-y-6"
          >
            {[
              {
                q: 'How long will PISTON be free?',
                a: 'PISTON is free throughout the entire alpha testing phase. When we transition to paid tiers, you\'ll receive at least 30 days advance notice. Alpha testers may qualify for special grandfather pricing (see above).',
              },
              {
                q: 'Will there always be a free tier?',
                a: 'Yes! We\'re committed to maintaining a free tier with core simulation capabilities. It may have limitations (fewer parts, basic features only), but it will always be available for hobbyists and students.',
              },
              {
                q: 'What happens to my data when pricing changes?',
                a: 'All your engine configurations, simulation results, and settings are stored locally on your computer. You own your data 100%. Transitioning to a paid tier (or staying on free) doesn\'t affect your existing work.',
              },
              {
                q: 'Can I use PISTON commercially during alpha?',
                a: 'Yes! During alpha, PISTON is free for both personal and commercial use. Once paid tiers launch, commercial use will require an Enthusiast, Professional, or Enterprise license.',
              },
              {
                q: 'Are there student or academic discounts?',
                a: 'We\'re planning significant discounts (50-75% off) for students and educational institutions. Details will be announced before paid tiers launch. The free tier will always be available for educational use.',
              },
              {
                q: 'What payment methods will you accept?',
                a: 'When paid tiers launch, we\'ll accept major credit cards, PayPal, and potentially crypto payments. Annual subscriptions may offer additional payment options.',
              },
              {
                q: 'Can I switch between tiers?',
                a: 'Yes, you\'ll be able to upgrade or downgrade between tiers at any time. Upgrades take effect immediately. Downgrades typically take effect at the end of your current billing period.',
              },
              {
                q: 'Is there a money-back guarantee?',
                a: 'We\'re planning a 30-day money-back guarantee for paid tiers. If you\'re not satisfied, request a full refund within 30 days of purchase, no questions asked.',
              },
              {
                q: 'Will prices increase over time?',
                a: 'We\'re committed to transparent, fair pricing. Any price increases will be announced at least 60 days in advance, and existing subscribers will be grandfathered at their current rate for a minimum period (likely 1-2 years).',
              },
            ].map((faq, index) => (
              <div key={index} className="border-2 border-dashed border-border p-6">
                <h3 className="font-mono text-lg font-bold mb-3 flex items-center gap-2">
                  <FaQuestionCircle className="text-accent-primary flex-shrink-0" />
                  {faq.q}
                </h3>
                <p className="text-text-secondary text-sm ml-8">{faq.a}</p>
              </div>
            ))}
          </m.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container-custom">
          <m.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="font-mono text-3xl md:text-4xl font-bold mb-6">
              GET STARTED TODAY
            </h2>
            <p className="text-lg text-text-secondary mb-8">
              Download PISTON now while it&apos;s completely free. No credit card required.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/download"
                className="inline-block px-8 py-4 bg-accent-primary hover:bg-accent-secondary border-2 border-dashed border-accent-primary hover:border-accent-secondary font-mono font-bold uppercase transition-all duration-200 hover:scale-105"
              >
                Download Free
              </a>
              <a
                href="/vs"
                className="inline-block px-8 py-4 bg-transparent hover:bg-background-secondary border-2 border-dashed border-border hover:border-border-hover font-mono font-bold uppercase transition-all duration-200"
              >
                Compare Features
              </a>
            </div>
          </m.div>
        </div>
      </section>
    </main>
    <Footer />
    </>
  )
}
