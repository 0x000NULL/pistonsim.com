'use client'

import { m } from 'framer-motion'
import FAQItem from '@/components/FAQItem'
import NewsletterForm from '@/components/NewsletterForm'
import { FAQItem as FAQItemType } from '@/lib/types'
import { fadeIn, fadeInUp, fadeInUpTransition, viewportConfig } from '@/lib/animations'

// FAQ data organized by category
const faqData: FAQItemType[] = [
  // General
  {
    question: 'What is PISTON?',
    answer: 'PISTON is a professional-grade engine simulation software that uses physics-based thermodynamic modeling to predict engine performance. It provides virtual dyno testing, parts selection, and configuration optimization at a fraction of the cost of traditional simulation tools.',
    category: 'General',
  },
  {
    question: 'Who is PISTON for?',
    answer: 'PISTON is designed for engine builders, tuners, automotive enthusiasts, students, and anyone who wants to optimize engine performance without the trial-and-error cost of physical testing. Whether you are building a weekend project car or running a professional shop, PISTON helps you make informed decisions.',
    category: 'General',
  },
  {
    question: 'Is PISTON really free?',
    answer: 'Yes! During the alpha development phase, PISTON is completely free for personal and commercial use. Our mission is to make professional-grade simulation accessible to everyone. Future pricing will be announced well in advance.',
    category: 'General',
  },
  // Accuracy & Validation
  {
    question: 'How accurate is PISTON compared to real dyno testing?',
    answer: 'PISTON achieves less than 7% error rate when validated against certified GM dyno data across multiple engine configurations. We have tested against LS3, LSA, and other popular platforms with consistent results. While simulation cannot replace physical testing entirely, PISTON provides reliable predictions for configuration planning.',
    category: 'Accuracy',
  },
  {
    question: 'What engines have been validated?',
    answer: 'We have validated PISTON against GM LS-family engines (LS3, LSA) with certified dyno data. Our parts database currently focuses on these platforms but is expanding. Validation data and methodology are transparent and available on our website.',
    category: 'Accuracy',
  },
  {
    question: 'Can I trust these results for actual builds?',
    answer: 'PISTON results should be used as a planning tool and performance estimator, not as a guarantee of real-world results. Actual dyno performance depends on many factors including build quality, tune, and environmental conditions. Always validate critical builds with professional dyno testing.',
    category: 'Accuracy',
  },
  // Features & Capabilities
  {
    question: 'What can I simulate with PISTON?',
    answer: 'PISTON simulates naturally aspirated 4-stroke gasoline engines. You can model different configurations including cylinder count, displacement, camshaft profiles, intake/exhaust systems, compression ratios, and more. The software predicts power, torque, volumetric efficiency, and other key metrics across the RPM range.',
    category: 'Features',
  },
  {
    question: 'Does PISTON support forced induction (turbo/supercharger)?',
    answer: 'Not yet. Turbocharger and supercharger modeling is planned for Phase 3 of development. Currently, PISTON focuses on naturally aspirated engines to ensure accuracy and reliability in our core modeling.',
    category: 'Features',
  },
  {
    question: 'What file formats does PISTON support?',
    answer: 'PISTON uses its own configuration format for saving and loading engine setups. Export capabilities include CSV data for power/torque curves and compatibility with popular spreadsheet tools for further analysis.',
    category: 'Features',
  },
  {
    question: 'Can I add custom parts to the database?',
    answer: 'Custom parts support is planned for a future update. Currently, you can choose from 50+ real parts in our database. We are building the infrastructure to allow community contributions of validated parts data.',
    category: 'Features',
  },
  // Pricing & Licensing
  {
    question: 'What will PISTON cost after the alpha phase?',
    answer: 'Pricing has not been finalized. Our goal is to remain dramatically more affordable than alternatives like GT-POWER or Ricardo WAVE (which cost $10,000+). We will announce pricing well in advance and offer early adopter discounts.',
    category: 'Pricing',
  },
  {
    question: 'Can I use PISTON for commercial purposes?',
    answer: 'Yes, during the alpha phase you may use PISTON for both personal and commercial purposes free of charge. Future commercial licensing terms will be announced before any changes take effect.',
    category: 'Pricing',
  },
  {
    question: 'Will there be educational or student discounts?',
    answer: 'Yes! We are committed to supporting education. When paid tiers are introduced, we will offer significant discounts for students, educators, and academic institutions.',
    category: 'Pricing',
  },
  // Technical
  {
    question: 'What are the system requirements?',
    answer: 'PISTON is designed to run on modern Windows, macOS, and Linux systems. Specific minimum requirements will be published with each release. The software is optimized for performance and should run on most hardware from the last 5 years.',
    category: 'Technical',
  },
  {
    question: 'Do I need engineering knowledge to use PISTON?',
    answer: 'Basic automotive knowledge is helpful, but you do not need a formal engineering background. PISTON is designed to be approachable while maintaining technical accuracy. We provide documentation and examples to help you get started.',
    category: 'Technical',
  },
  {
    question: 'Is my data stored in the cloud?',
    answer: 'No. PISTON runs entirely on your local machine. Your engine configurations, simulation results, and all data remain on your computer. We do not collect or store your technical data.',
    category: 'Technical',
  },
  // Roadmap
  {
    question: 'When will forced induction support be available?',
    answer: 'Turbocharger and supercharger modeling is planned for Phase 3 of development. We are currently focused on Phase 2 (expanding engine type support and improving UI). Check our roadmap on the About page for timeline estimates.',
    category: 'Roadmap',
  },
  {
    question: 'How can I request features or report bugs?',
    answer: 'We welcome community feedback! You can submit feature requests and bug reports through our GitHub issues page or by contacting us directly. Your input helps shape PISTON development priorities.',
    category: 'Roadmap',
  },
  {
    question: 'Is PISTON open source?',
    answer: 'Not currently, but we are considering open-sourcing components of the codebase in the future. We believe in transparency and will share our methodology, validation data, and technical documentation openly.',
    category: 'Roadmap',
  },
]

export default function FAQPage(): React.ReactElement {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="section-isolated py-24 px-6">
        <div className="container-custom mx-auto">
          <m.div
            initial="initial"
            animate="animate"
            variants={fadeInUp}
            transition={fadeInUpTransition}
          >
            <h1 className="font-display font-bold text-5xl md:text-7xl tracking-tight mb-6 text-cyan text-center">
              FREQUENTLY ASKED QUESTIONS
            </h1>
            <p className="text-text-secondary text-lg md:text-xl max-w-3xl mx-auto text-center">
              Everything you need to know about PISTON engine simulation software.
            </p>
          </m.div>
        </div>
      </section>

      {/* FAQ Grid */}
      <section className="section-isolated py-12 px-6">
        <div className="container-custom mx-auto max-w-4xl">
          <m.div
            initial="initial"
            whileInView="animate"
            viewport={viewportConfig}
            variants={fadeIn}
            className="space-y-4"
          >
            {faqData.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
              />
            ))}
          </m.div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="section-isolated py-24 px-6">
        <div className="container-custom mx-auto max-w-2xl">
          <m.div
            initial="initial"
            whileInView="animate"
            viewport={viewportConfig}
            variants={fadeIn}
            className="text-center"
          >
            <h2 className="font-display font-bold text-3xl md:text-4xl mb-4 text-cyan">
              Still Have Questions?
            </h2>
            <p className="text-text-secondary text-lg mb-8">
              Subscribe to our newsletter for updates, tips, and announcements.
            </p>
            <NewsletterForm
              variant="inline"
              placeholder="Enter your email"
              className="max-w-md mx-auto"
            />
          </m.div>
        </div>
      </section>
    </main>
  )
}
