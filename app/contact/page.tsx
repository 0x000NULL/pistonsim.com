'use client';

import React from 'react';
import { m } from 'framer-motion';
import { FaEnvelope, FaGithub, FaDiscord, FaBug, FaLightbulb, FaUsers, FaClock } from 'react-icons/fa';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Card from '@/components/Card';
import NewsletterForm from '@/components/NewsletterForm';
import { fadeInUp } from '@/lib/animations';

export default function ContactPage(): React.ReactElement {
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
            GET IN TOUCH
          </h1>
          <p className="text-lg md:text-xl text-text-secondary mb-12">
            Questions, feedback, or need support? We&apos;re here to help.
          </p>
        </m.div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 bg-background-secondary">
        <div className="container-custom max-w-5xl">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Email Support */}
            <m.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <Card
                icon={FaEnvelope}
                title="Email Support"
                description="General inquiries and support requests"
              >
                <div className="mt-4 space-y-3">
                  <p className="text-sm text-text-secondary">
                    For support, questions, or feedback, email us at:
                  </p>
                  <a
                    href="mailto:support@pistonsim.com"
                    className="inline-block px-6 py-3 bg-accent-primary hover:bg-accent-secondary border-2 border-dashed border-accent-primary hover:border-accent-secondary font-mono font-bold text-sm transition-all duration-200"
                  >
                    support@pistonsim.com
                  </a>
                  <div className="flex items-start gap-2 text-sm text-text-tertiary mt-4">
                    <FaClock className="w-4 h-4 mt-1 flex-shrink-0" />
                    <span>Expected response time: 24-48 hours during alpha</span>
                  </div>
                </div>
              </Card>
            </m.div>

            {/* Bug Reports */}
            <m.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ delay: 0.1 }}
            >
              <Card
                icon={FaBug}
                title="Bug Reports"
                description="Found a bug? Help us improve PISTON"
              >
                <div className="mt-4 space-y-3">
                  <p className="text-sm text-text-secondary">
                    Report bugs on our GitHub Issues page for faster resolution:
                  </p>
                  <a
                    href="https://github.com/pistonsim/piston/issues/new?template=bug_report.md"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-transparent hover:bg-background-secondary border-2 border-dashed border-border hover:border-border-hover font-mono font-bold text-sm transition-all duration-200"
                  >
                    <FaGithub className="w-4 h-4" />
                    Report on GitHub
                  </a>
                  <p className="text-xs text-text-tertiary mt-3">
                    Please include: Steps to reproduce, expected vs. actual behavior, system info, and configuration file if applicable.
                  </p>
                </div>
              </Card>
            </m.div>

            {/* Feature Requests */}
            <m.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ delay: 0.2 }}
            >
              <Card
                icon={FaLightbulb}
                title="Feature Requests"
                description="Suggest new features and improvements"
              >
                <div className="mt-4 space-y-3">
                  <p className="text-sm text-text-secondary">
                    Have an idea to make PISTON better? We&apos;d love to hear it:
                  </p>
                  <a
                    href="https://github.com/pistonsim/piston/issues/new?template=feature_request.md"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-transparent hover:bg-background-secondary border-2 border-dashed border-border hover:border-border-hover font-mono font-bold text-sm transition-all duration-200"
                  >
                    <FaGithub className="w-4 h-4" />
                    Request Feature
                  </a>
                  <p className="text-xs text-text-tertiary mt-3">
                    Describe the feature, use case, and expected benefits. We prioritize based on community demand.
                  </p>
                </div>
              </Card>
            </m.div>

            {/* Community */}
            <m.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ delay: 0.3 }}
            >
              <Card
                icon={FaUsers}
                title="Join the Community"
                description="Connect with other PISTON users"
              >
                <div className="mt-4 space-y-3">
                  <p className="text-sm text-text-secondary">
                    Join our Discord server for real-time discussions, tips, and support:
                  </p>
                  <a
                    href="https://discord.gg/pistonsim"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#5865F2] hover:bg-[#4752C4] border-2 border-dashed border-[#5865F2] hover:border-[#4752C4] font-mono font-bold text-sm transition-all duration-200"
                  >
                    <FaDiscord className="w-4 h-4" />
                    Join Discord
                  </a>
                  <p className="text-xs text-text-tertiary mt-3">
                    Share your builds, get help from the community, and stay updated on development progress.
                  </p>
                </div>
              </Card>
            </m.div>
          </div>
        </div>
      </section>

      {/* What to Include */}
      <section className="py-20 bg-background-secondary">
        <div className="container-custom max-w-4xl">
          <m.h2
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="font-mono text-3xl md:text-4xl font-bold mb-12 text-center"
          >
            GETTING THE BEST SUPPORT
          </m.h2>

          <m.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="space-y-8"
          >
            {/* Bug Reports Guide */}
            <div className="border-2 border-dashed border-border p-6">
              <h3 className="font-mono text-xl font-bold mb-4 flex items-center gap-3">
                <FaBug className="text-accent-primary" />
                When Reporting Bugs
              </h3>
              <div className="space-y-3 text-text-secondary">
                <div>
                  <p className="font-bold text-white mb-1">1. Clear Description</p>
                  <p className="text-sm">What were you trying to do, and what happened instead?</p>
                </div>
                <div>
                  <p className="font-bold text-white mb-1">2. Steps to Reproduce</p>
                  <p className="text-sm">Provide exact commands or actions to trigger the bug</p>
                  <code className="block bg-black text-accent-tertiary p-2 font-mono text-xs mt-1">
                    $ piston load --engine ls3_stock<br />
                    $ piston simulate --rpm-range 1000:7000 --step 250<br />
                    $ [bug occurs here]
                  </code>
                </div>
                <div>
                  <p className="font-bold text-white mb-1">3. System Information</p>
                  <p className="text-sm">OS version, PISTON version, hardware specs</p>
                </div>
                <div>
                  <p className="font-bold text-white mb-1">4. Configuration File</p>
                  <p className="text-sm">If applicable, attach your engine configuration JSON</p>
                </div>
                <div>
                  <p className="font-bold text-white mb-1">5. Error Messages</p>
                  <p className="text-sm">Copy and paste any error output or stack traces</p>
                </div>
              </div>
            </div>

            {/* Feature Requests Guide */}
            <div className="border-2 border-dashed border-border p-6">
              <h3 className="font-mono text-xl font-bold mb-4 flex items-center gap-3">
                <FaLightbulb className="text-accent-primary" />
                When Requesting Features
              </h3>
              <div className="space-y-3 text-text-secondary">
                <div>
                  <p className="font-bold text-white mb-1">1. The Problem</p>
                  <p className="text-sm">What task or goal is currently difficult or impossible?</p>
                </div>
                <div>
                  <p className="font-bold text-white mb-1">2. Proposed Solution</p>
                  <p className="text-sm">How would you like to see it work?</p>
                </div>
                <div>
                  <p className="font-bold text-white mb-1">3. Use Case</p>
                  <p className="text-sm">Describe a real-world scenario where this feature helps</p>
                </div>
                <div>
                  <p className="font-bold text-white mb-1">4. Expected Benefits</p>
                  <p className="text-sm">How does this improve the user experience or capabilities?</p>
                </div>
                <div>
                  <p className="font-bold text-white mb-1">5. Alternatives Considered</p>
                  <p className="text-sm">Are there workarounds or alternative approaches?</p>
                </div>
              </div>
            </div>

            {/* General Inquiries Guide */}
            <div className="border-2 border-dashed border-border p-6">
              <h3 className="font-mono text-xl font-bold mb-4 flex items-center gap-3">
                <FaEnvelope className="text-accent-primary" />
                For General Questions
              </h3>
              <div className="space-y-3 text-text-secondary">
                <p className="text-sm">
                  Before emailing, check if your question is answered in:
                </p>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start gap-2">
                    <span className="text-accent-primary mt-1">•</span>
                    <span><a href="/docs" className="text-accent-primary hover:text-accent-tertiary underline">Documentation</a> - Complete user manual and guides</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-primary mt-1">•</span>
                    <span><a href="/faq" className="text-accent-primary hover:text-accent-tertiary underline">FAQ</a> - Common questions about accuracy, pricing, features</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-primary mt-1">•</span>
                    <span><a href="/help" className="text-accent-primary hover:text-accent-tertiary underline">Help Center</a> - Troubleshooting and how-to guides</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-primary mt-1">•</span>
                    <span>Discord Community - Real-time help from other users</span>
                  </li>
                </ul>
                <p className="text-sm mt-4">
                  Still need help? Email <a href="mailto:support@pistonsim.com" className="text-accent-primary hover:text-accent-tertiary underline">support@pistonsim.com</a> with:
                </p>
                <ul className="space-y-1 ml-4">
                  <li className="flex items-start gap-2">
                    <span className="text-accent-primary mt-1">•</span>
                    <span>Clear subject line describing your question</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-primary mt-1">•</span>
                    <span>Relevant context (what you&apos;re trying to accomplish)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-primary mt-1">•</span>
                    <span>Configuration details if asking about simulation results</span>
                  </li>
                </ul>
              </div>
            </div>
          </m.div>
        </div>
      </section>

      {/* Newsletter Signup */}
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
              Get notified about new features, updates, and important announcements
            </p>
            <div className="max-w-md mx-auto">
              <NewsletterForm variant="inline" placeholder="your@email.com" />
            </div>
            <p className="text-sm text-text-tertiary mt-4">
              We respect your privacy. Unsubscribe anytime. See our <a href="/privacy" className="text-accent-primary hover:text-accent-tertiary underline">Privacy Policy</a>.
            </p>
          </m.div>
        </div>
      </section>

      {/* Response Times */}
      <section className="py-20">
        <div className="container-custom max-w-4xl">
          <m.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="bg-background-secondary border-2 border-dashed border-border p-8"
          >
            <h2 className="font-mono text-2xl font-bold mb-6 flex items-center gap-3">
              <FaClock className="text-accent-primary" />
              Expected Response Times
            </h2>
            <div className="grid md:grid-cols-2 gap-6 text-text-secondary">
              <div>
                <h3 className="font-mono font-bold text-white mb-2">During Alpha Phase</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-accent-primary mt-1">•</span>
                    <span><strong>Email:</strong> 24-48 hours (weekdays)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-primary mt-1">•</span>
                    <span><strong>GitHub Issues:</strong> 48-72 hours</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-primary mt-1">•</span>
                    <span><strong>Discord:</strong> Community-driven (usually faster)</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-mono font-bold text-white mb-2">Priority Handling</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-accent-primary mt-1">•</span>
                    <span><strong>Critical bugs:</strong> Same day when possible</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-primary mt-1">•</span>
                    <span><strong>Data accuracy issues:</strong> High priority</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-primary mt-1">•</span>
                    <span><strong>Feature requests:</strong> Evaluated monthly</span>
                  </li>
                </ul>
              </div>
            </div>
            <p className="text-sm text-text-tertiary mt-6 pt-6 border-t border-border">
              Note: PISTON is currently in alpha with a small team. We appreciate your patience and understanding as we work to improve the software.
            </p>
          </m.div>
        </div>
      </section>
    </main>
    <Footer />
    </>
  )
}
