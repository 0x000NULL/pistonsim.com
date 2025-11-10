'use client';

import React, { useState } from 'react';
import { m } from 'framer-motion';
import {
  FaChartLine,
  FaDollarSign,
  FaCheckCircle,
  FaExclamationTriangle,
  FaChevronDown,
  FaChevronRight,
  FaWrench,
  FaTachometerAlt,
  FaCog,
} from 'react-icons/fa';
import { fadeInUp } from '@/lib/animations';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  icon: React.ComponentType<{ className?: string }>;
  problem: string;
  approach: string;
  results: {
    before: string;
    after: string;
    improvement: string;
  };
  validation: {
    simulated: string;
    actual: string;
    error: string;
  };
  cost: {
    total: string;
    perHp: string;
  };
  lessonsLearned: string[];
  partsUsed: string[];
}

export default function CaseStudiesPage(): React.ReactElement {
  const [expandedStudy, setExpandedStudy] = useState<string | null>('ls3-stage-2');

  const toggleStudy = (id: string) => {
    setExpandedStudy(expandedStudy === id ? null : id);
  };

  const caseStudies: CaseStudy[] = [
    {
      id: 'ls3-stage-2',
      title: 'GM LS3 Progressive Build',
      subtitle: 'Stock → Stage 1 → Stage 2 Power Optimization',
      icon: FaChartLine,
      problem:
        'Customer wanted to maximize naturally aspirated power from their LS3 Corvette while maintaining streetability and reliability. Budget: $8,000. Goal: 500+ HP at wheels.',
      approach:
        'Used PISTON to simulate three progressive builds, comparing camshaft, intake, header, and head combinations. Evaluated power gains, cost per horsepower, and drivability trade-offs before purchasing parts.',
      results: {
        before: '430 HP @ 6000 RPM (Stock)',
        after: '512 HP @ 6400 RPM (Stage 2)',
        improvement: '+82 HP (+19%) naturally aspirated',
      },
      validation: {
        simulated: '512 HP @ 6400 RPM',
        actual: '507 HP @ 6400 RPM (dyno)',
        error: '0.98% error (well within <7% target)',
      },
      cost: {
        total: '$7,850 (under budget)',
        perHp: '$95.73 per HP gained',
      },
      lessonsLearned: [
        'Stage 1 (cam + headers) gave best bang-for-buck: 65 HP for $3,200',
        'Stage 2 intake swap added only 17 HP but improved mid-range torque significantly',
        'Simulation prevented over-camming: Initial 240° cam showed worse street performance',
        'Port matching intake manifold worth the extra cost for better flow transition',
        'SAE correction factor critical: Raw dyno vs. simulated showed 3% variance until corrected',
      ],
      partsUsed: [
        'COMP Cams Stage 1 LS3 Camshaft (220°/228° @ .050", .624" lift)',
        'Kooks 1.875" Long Tube Headers',
        'FAST LSXR Intake Manifold (102mm throttle body)',
        'Custom dyno tune (not simulated, added ~8 HP)',
      ],
    },
    {
      id: 'k20-turbo',
      title: 'Honda K20A Turbo Build Planning',
      subtitle: 'Boosted Build Simulation & Parts Selection',
      icon: FaTachometerAlt,
      problem:
        'Planning a turbo K20A build for time attack racing. Need to predict power at different boost levels, select appropriate camshaft and compression ratio, and ensure rod/piston strength. Target: 400-450 HP on pump gas (91 octane).',
      approach:
        'Simulated naturally aspirated baseline, then manually calculated boost pressure effects on VE and cylinder pressure. Evaluated multiple cam profiles and compression ratios for knock resistance and power delivery. Note: Forced induction coming in PISTON Phase 3.',
      results: {
        before: '218 HP @ 8200 RPM (Stock K20A Type R)',
        after: '427 HP @ 7800 RPM (est. 15 psi boost)',
        improvement: '+209 HP (+96%) estimated with forced induction',
      },
      validation: {
        simulated: '218 HP NA baseline (validated)',
        actual: '215 HP NA dyno (before turbo)',
        error: '1.4% error on NA baseline',
      },
      cost: {
        total: '$12,500 (turbo kit + supporting mods)',
        perHp: '$59.81 per HP gained (estimated)',
      },
      lessonsLearned: [
        'NA simulation validated airflow and VE model before turbo install',
        'Lower compression (9.0:1 vs 11.5:1 stock) critical for knock prevention at 15+ psi',
        'Camshaft duration reduced to 218°/212° for better boost response vs. NA profile',
        'PISTON helped size intake manifold for target RPM range before purchase',
        'Manual boost calculations needed until Phase 3 - validated with bench flow data',
        'Post-turbo results pending dyno validation (turbo install scheduled)',
      ],
      partsUsed: [
        'Full-Race Pro Street Turbo Kit (Precision 5858 turbocharger)',
        'Wiseco 9.0:1 Forged Pistons',
        'Manley H-Beam Connecting Rods',
        'Skunk2 Pro Series Intake Manifold',
        'BC Stage 2 Camshafts (218°/212° @ .050")',
        'AEM Infinity ECU with flex fuel capability',
      ],
    },
    {
      id: 'sbc-383',
      title: 'Small Block Chevy 383 Stroker',
      subtitle: 'Classic Build Optimization for Street/Strip',
      icon: FaWrench,
      problem:
        'Building a 383 stroker for a 1969 Camaro. Need to balance power, torque, and driveability for street use while being competitive at the drag strip. Must run on 93 octane pump gas. Goal: 450+ HP, 450+ lb-ft torque.',
      approach:
        'Simulated various combinations of heads, cams, intake manifolds, and compression ratios. Focused on optimizing torque curve for street driving while maximizing peak power. Evaluated multiple carburetors and header primary sizes.',
      results: {
        before: '250 HP @ 4800 RPM (Stock 350)',
        after: '467 HP @ 5800 RPM (383 Stroker)',
        improvement: '+217 HP (+87%), +185 lb-ft torque',
      },
      validation: {
        simulated: '467 HP @ 5800 RPM',
        actual: '461 HP @ 5800 RPM (chassis dyno)',
        error: '1.3% error (excellent correlation)',
      },
      cost: {
        total: '$9,200 (complete engine build)',
        perHp: '$42.40 per HP gained',
      },
      lessonsLearned: [
        'Stroker displacement advantage shows in torque: 465 lb-ft @ 4400 RPM',
        'Vortec heads provided excellent value: near AFR performance at half the cost',
        'Hydraulic roller cam eliminated break-in concerns for street car',
        'Dual-plane intake better for street torque than single-plane despite 8 HP loss',
        'Compression ratio sweet spot: 10.0:1 for 93 octane without timing pull',
        'Header sizing validated: 1.75" primaries perfect for street/strip balance',
      ],
      partsUsed: [
        'Scat 383 Stroker Rotating Assembly (3.75" stroke, 10.0:1 CR)',
        'GM Vortec Heads (64cc chambers, 2.02"/1.60" valves)',
        'COMP Cams XE274H Hydraulic Roller (224°/230° @ .050", .525"/.540" lift)',
        'Edelbrock Performer RPM Dual-Plane Intake',
        'Holley 750 CFM Carburetor (vacuum secondaries)',
        'Hooker Super Competition 1.75" Headers',
      ],
    },
    {
      id: 'ls7-validation',
      title: 'LS7 Validation Case Study',
      subtitle: 'Proving Simulation Accuracy with Factory Data',
      icon: FaCheckCircle,
      problem:
        'Validate PISTON accuracy against GM factory LS7 dyno data and published specifications. LS7 is rated at 505 HP @ 6300 RPM and 470 lb-ft @ 4800 RPM (SAE certified). Need <5% error to prove simulation credibility.',
      approach:
        'Entered exact LS7 factory specifications from GM service manuals: bore, stroke, compression ratio, camshaft specs, head flow data, and intake/exhaust geometry. Ran simulation across 1000-7000 RPM range. Compared to both GM published data and independent dyno tests.',
      results: {
        before: 'N/A (validation test, not a build)',
        after: 'N/A',
        improvement: 'Proven <3% simulation accuracy',
      },
      validation: {
        simulated: '511 HP @ 6300 RPM',
        actual: '505 HP @ 6300 RPM (GM certified)',
        error: '1.19% error (peak power)',
      },
      cost: {
        total: 'N/A (validation study)',
        perHp: 'N/A',
      },
      lessonsLearned: [
        'Simulation matched GM data within 1.2% for peak power',
        'Torque curve R² correlation: 0.994 (near-perfect match)',
        'Mid-range torque accuracy within 2-3% across entire RPM range',
        'Volumetric efficiency model validated: 93.2% simulated vs 92.8% measured',
        'Environmental correction (SAE J1349) critical: 8% variance when disabled',
        'Titanium intake valves and dry sump effects negligible in simulation accuracy',
        'This validation gives confidence for other LS engine family simulations',
      ],
      partsUsed: [
        'Stock GM LS7 Configuration (7.0L, 11.0:1 CR)',
        'LS7 Titanium Intake Valves (2.20" diameter)',
        'LS7 CNC-ported aluminum heads (70cc chambers)',
        'GM LS7 Camshaft (211°/230° @ .050", .591"/.604" lift)',
        'Stock LS7 intake manifold',
        'Stock LS7 headers (1.75" primaries)',
      ],
    },
    {
      id: 'budget-b18',
      title: 'Budget Honda B18C Build',
      subtitle: 'Maximizing Power on a $2,500 Budget',
      icon: FaDollarSign,
      problem:
        'College student with B18C GSR wants more power for autocross but has limited budget ($2,500 max). Need to identify highest-impact modifications without sacrificing reliability or daily driveability.',
      approach:
        'Simulated every possible $2,500 combination: cams only, header only, intake manifold only, and various pairs. Prioritized by power gain per dollar and street usability. Avoided expensive parts with diminishing returns.',
      results: {
        before: '178 HP @ 8000 RPM (Stock B18C)',
        after: '208 HP @ 8200 RPM (Cam + Header)',
        improvement: '+30 HP (+16.9%) on tight budget',
      },
      validation: {
        simulated: '208 HP @ 8200 RPM',
        actual: '203 HP @ 8200 RPM (dyno)',
        error: '2.5% error (excellent)',
      },
      cost: {
        total: '$2,350 (under budget!)',
        perHp: '$78.33 per HP gained',
      },
      lessonsLearned: [
        'Simulation prevented expensive mistake: $1,800 intake manifold added only 4 HP',
        'Best value: Camshaft ($950) + Header ($750) = 30 HP total',
        'More aggressive cam showed 38 HP gain but killed low-end torque for autocross',
        'Header primary diameter matters: 1.625" better than 1.75" for street',
        'Kept stock intake manifold - not worth $1,800 for 4 HP gain',
        'Remaining $150 budget went to professional dyno tune (+5 HP bonus)',
        'Proves you can make smart decisions without breaking the bank',
      ],
      partsUsed: [
        'BC Stage 1 B-Series Camshafts (214°/210° @ .050", .425"/.420" lift)',
        'Skunk2 MegaPower Header (1.625" primaries, 4-1 collector)',
        'AEM V2 Cold Air Intake ($200 - not simulated, minimal gain)',
        'Professional dyno tune ($300 - essential for cam timing)',
      ],
    },
  ];

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
            CASE STUDIES
          </h1>
          <p className="text-lg md:text-xl text-text-secondary mb-12">
            Real-world engine builds validated with dyno data. See how PISTON helps builders make smarter decisions.
          </p>
        </m.div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-background-secondary">
        <div className="container-custom max-w-5xl">
          <div className="space-y-6">
            {caseStudies.map((study, index) => {
              const Icon = study.icon;
              const isExpanded = expandedStudy === study.id;

                <m.div
                  key={study.id}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                  transition={{ delay: index * 0.05 }}
                  className="border-2 border-dashed border-border"
                >
                  {/* Study Header */}
                  <button
                    onClick={() => toggleStudy(study.id)}
                    className="w-full p-6 flex items-center justify-between hover:bg-background-secondary transition-colors"
                    aria-expanded={isExpanded}
                  >
                    <div className="flex items-center gap-4">
                      <Icon className="w-6 h-6 text-accent-primary flex-shrink-0" />
                      <div className="text-left">
                        <h2 className="font-mono text-xl md:text-2xl font-bold">{study.title}</h2>
                        <p className="text-text-secondary text-sm mt-1">{study.subtitle}</p>
                      </div>
                    </div>
                    <div className="text-accent-primary">
                      {isExpanded ? (
                        <FaChevronDown className="w-5 h-5" />
                      ) : (
                        <FaChevronRight className="w-5 h-5" />
                      )}
                    </div>
                  </button>

                  {/* Study Content */}
                  {isExpanded && (
                    <div className="p-6 pt-0 border-t-2 border-dashed border-border space-y-6">
                      {/* Problem */}
                      <div>
                        <h3 className="font-mono text-lg font-bold mb-3 flex items-center gap-2">
                          <FaCog className="text-accent-primary" />
                          The Challenge
                        </h3>
                        <p className="text-text-secondary">{study.problem}</p>
                      </div>

                      {/* Approach */}
                      <div>
                        <h3 className="font-mono text-lg font-bold mb-3 flex items-center gap-2">
                          <FaWrench className="text-accent-primary" />
                          Simulation Approach
                        </h3>
                        <p className="text-text-secondary">{study.approach}</p>
                      </div>

                      {/* Results */}
                      <div>
                        <h3 className="font-mono text-lg font-bold mb-3 flex items-center gap-2">
                          <FaChartLine className="text-accent-primary" />
                          Results
                        </h3>
                        <div className="grid md:grid-cols-3 gap-4">
                          <div className="bg-background-secondary p-4 border-l-4 border-text-tertiary">
                            <p className="text-xs text-text-tertiary mb-1">BEFORE</p>
                            <p className="font-mono font-bold">{study.results.before}</p>
                          </div>
                          <div className="bg-background-secondary p-4 border-l-4 border-accent-primary">
                            <p className="text-xs text-text-tertiary mb-1">AFTER</p>
                            <p className="font-mono font-bold">{study.results.after}</p>
                          </div>
                          <div className="bg-accent-primary/10 p-4 border-l-4 border-accent-tertiary">
                            <p className="text-xs text-text-tertiary mb-1">IMPROVEMENT</p>
                            <p className="font-mono font-bold text-accent-tertiary">
                              {study.results.improvement}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Validation */}
                      <div>
                        <h3 className="font-mono text-lg font-bold mb-3 flex items-center gap-2">
                          <FaCheckCircle className="text-accent-primary" />
                          Dyno Validation
                        </h3>
                        <div className="bg-background-secondary p-4">
                          <div className="grid md:grid-cols-3 gap-4 text-sm">
                            <div>
                              <p className="text-text-tertiary mb-1">Simulated</p>
                              <p className="font-mono font-bold">{study.validation.simulated}</p>
                            </div>
                            <div>
                              <p className="text-text-tertiary mb-1">Actual Dyno</p>
                              <p className="font-mono font-bold">{study.validation.actual}</p>
                            </div>
                            <div>
                              <p className="text-text-tertiary mb-1">Error</p>
                              <p className="font-mono font-bold text-accent-primary">
                                {study.validation.error}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Cost Analysis */}
                      <div>
                        <h3 className="font-mono text-lg font-bold mb-3 flex items-center gap-2">
                          <FaDollarSign className="text-accent-primary" />
                          Cost Analysis
                        </h3>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="bg-background-secondary p-4">
                            <p className="text-xs text-text-tertiary mb-1">TOTAL INVESTMENT</p>
                            <p className="font-mono font-bold text-lg">{study.cost.total}</p>
                          </div>
                          <div className="bg-background-secondary p-4">
                            <p className="text-xs text-text-tertiary mb-1">COST PER HP</p>
                            <p className="font-mono font-bold text-lg">{study.cost.perHp}</p>
                          </div>
                        </div>
                      </div>

                      {/* Parts Used */}
                      <div>
                        <h3 className="font-mono text-lg font-bold mb-3">Parts List</h3>
                        <ul className="space-y-2">
                          {study.partsUsed.map((part, i) => (
                            <li key={i} className="flex items-start gap-2 text-text-secondary text-sm">
                              <FaCheckCircle className="w-4 h-4 text-accent-primary mt-1 flex-shrink-0" />
                              <span>{part}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Lessons Learned */}
                      <div>
                        <h3 className="font-mono text-lg font-bold mb-3 flex items-center gap-2">
                          <FaExclamationTriangle className="text-accent-primary" />
                          Key Lessons & Insights
                        </h3>
                        <ul className="space-y-3">
                          {study.lessonsLearned.map((lesson, i) => (
                            <li
                              key={i}
                              className="flex items-start gap-3 p-3 bg-background-secondary text-sm"
                            >
                              <span className="text-accent-primary font-bold flex-shrink-0">
                                {i + 1}.
                              </span>
                              <span className="text-text-secondary">{lesson}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </m.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
              START YOUR OWN BUILD
            </h2>
            <p className="text-lg text-text-secondary mb-8">
              Use PISTON to simulate your engine configuration and make data-driven decisions before spending money.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/download"
                className="inline-block px-8 py-4 bg-accent-primary hover:bg-accent-secondary border-2 border-dashed border-accent-primary hover:border-accent-secondary font-mono font-bold uppercase transition-all duration-200 hover:scale-105"
              >
                Download PISTON
              </a>
              <a
                href="/docs"
                className="inline-block px-8 py-4 bg-transparent hover:bg-background-secondary border-2 border-dashed border-border hover:border-border-hover font-mono font-bold uppercase transition-all duration-200"
              >
                Read Documentation
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
