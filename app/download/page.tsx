'use client';

import React from 'react';
import { m } from 'framer-motion';
import { FaCheckCircle, FaExclamationTriangle, FaCog, FaBook } from 'react-icons/fa';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import DownloadButton from '@/components/DownloadButton';
import Card from '@/components/Card';
import { fadeInUp } from '@/lib/animations';
import { release, downloadUrl } from '@/lib/release';

const codeClass = 'text-accent-tertiary bg-background-secondary px-2 py-1';
const blockClass = 'block bg-background-secondary text-accent-tertiary p-4 font-mono text-sm overflow-x-auto whitespace-pre';
const linkClass = 'text-accent-primary hover:text-accent-tertiary underline';

export default function DownloadPage(): React.ReactElement {
  const files = [release.installer, release.portable];

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
            DOWNLOAD PISTON
          </h1>
          <p className="text-lg md:text-xl text-text-secondary mb-12 max-w-2xl mx-auto">
            Free for personal and commercial use under the end-user licence included in the download
            (<code className="text-accent-tertiary">EULA.md</code>). PISTON is an alpha: expect rough edges.
          </p>

          {/* Download Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <DownloadButton file={release.installer} size="lg" />
            <DownloadButton file={release.portable} size="lg" variant="secondary" />
          </div>

          <p className="text-sm text-text-tertiary">
            Version {release.version} • Released {release.date} • 64-bit Windows only •{' '}
            <a href="#verify" className={linkClass}>Verify your download</a>
          </p>
          <p className="text-sm text-text-tertiary mt-2">
            There are no macOS or Linux builds.
          </p>
        </m.div>
      </section>

      {/* Quick Navigation */}
      <section className="py-12 border-y-2 border-dashed border-border">
        <div className="container-custom">
          <m.div
            initial="initial"
            animate="animate"
            variants={fadeInUp}
            className="max-w-5xl mx-auto"
          >
            <p className="text-sm text-text-tertiary mb-4 text-center">JUMP TO:</p>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
              {[
                ['#system-requirements', 'System Requirements'],
                ['#installation', 'Installation'],
                ['#verify', 'Verify Download'],
                ['#quick-start', 'Quick Start'],
                ['#help', 'Help'],
              ].map(([href, label]) => (
                <a
                  key={href}
                  href={href}
                  className="px-4 py-3 border-2 border-dashed border-border hover:border-accent-primary hover:bg-background-secondary text-center font-mono text-sm transition-all duration-200"
                >
                  {label}
                </a>
              ))}
            </div>
          </m.div>
        </div>
      </section>

      {/* System Requirements */}
      <section id="system-requirements" className="py-20 bg-background-secondary">
        <div className="container-custom">
          <m.h2
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="font-mono text-3xl md:text-4xl font-bold mb-12 text-center"
          >
            SYSTEM REQUIREMENTS
          </m.h2>

          <m.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="max-w-2xl mx-auto"
          >
            <Card
              icon={FaCog}
              title="Requirements"
              description="What the release build needs to run"
            >
              <ul className="space-y-2 text-text-secondary mt-4">
                <li className="flex items-start gap-2">
                  <FaCheckCircle className="w-4 h-4 text-accent-primary mt-1 flex-shrink-0" />
                  <span><strong>OS:</strong> 64-bit Windows</span>
                </li>
                <li className="flex items-start gap-2">
                  <FaCheckCircle className="w-4 h-4 text-accent-primary mt-1 flex-shrink-0" />
                  <span><strong>CPU:</strong> x86-64 with SSE4.2 and POPCNT (the x86-64-v2 baseline; most CPUs from about 2009 on)</span>
                </li>
                <li className="flex items-start gap-2">
                  <FaCheckCircle className="w-4 h-4 text-accent-primary mt-1 flex-shrink-0" />
                  <span><strong>Graphics:</strong> OpenGL 3.3 for the GUI. The command-line tool needs no GPU.</span>
                </li>
                <li className="flex items-start gap-2">
                  <FaCheckCircle className="w-4 h-4 text-accent-primary mt-1 flex-shrink-0" />
                  <span><strong>Storage:</strong> about 20 MB installed</span>
                </li>
              </ul>
            </Card>
          </m.div>
        </div>
      </section>

      {/* Installation Guide */}
      <section id="installation" className="py-20">
        <div className="container-custom max-w-4xl">
          <m.h2
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="font-mono text-3xl md:text-4xl font-bold mb-12 text-center"
          >
            INSTALLATION
          </m.h2>

          <div className="space-y-8">
            {/* Installer */}
            <m.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="border-2 border-dashed border-border p-6 md:p-8"
            >
              <h3 className="font-mono text-2xl font-bold mb-4 flex items-center gap-3">
                <FaCheckCircle className="text-accent-primary" />
                Installer
              </h3>
              <ol className="space-y-3 text-text-secondary list-decimal list-inside">
                <li>Download <code className={codeClass}>{release.installer.name}</code></li>
                <li>Run it. It shows the end-user licence, which you must accept to continue.</li>
                <li>It installs to <code className={codeClass}>C:\Program Files\PISTON</code> and adds a Start-menu shortcut to the GUI</li>
                <li>Remove it later from Windows&apos; installed-apps list; an uninstaller is included</li>
              </ol>
            </m.div>

            {/* Portable */}
            <m.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ delay: 0.1 }}
              className="border-2 border-dashed border-border p-6 md:p-8"
            >
              <h3 className="font-mono text-2xl font-bold mb-4 flex items-center gap-3">
                <FaCheckCircle className="text-accent-primary" />
                Portable ZIP
              </h3>
              <ol className="space-y-3 text-text-secondary list-decimal list-inside">
                <li>Download <code className={codeClass}>{release.portable.name}</code></li>
                <li>Unzip it anywhere. Nothing is installed.</li>
                <li>Run <code className={codeClass}>bin\piston-gui.exe</code> for the GUI or <code className={codeClass}>bin\piston.exe</code> for the command line</li>
              </ol>
              <p className="text-text-secondary mt-4 text-sm">
                Both packages contain the same thing: the GUI and the command-line tool, the runtime DLLs,
                the engine configs and examples, a seeded parts database, and the documentation.
              </p>
            </m.div>
          </div>
        </div>
      </section>

      {/* Verify */}
      <section id="verify" className="py-20 bg-background-secondary">
        <div className="container-custom max-w-4xl">
          <m.h2
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="font-mono text-3xl md:text-4xl font-bold mb-6 text-center"
          >
            THE BINARIES ARE UNSIGNED
          </m.h2>
          <m.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="space-y-6"
          >
            <div className="p-4 bg-black border-l-4 border-accent-primary">
              <p className="text-sm flex items-start gap-2 text-text-secondary">
                <FaExclamationTriangle className="text-accent-primary mt-1 flex-shrink-0" />
                <span>
                  PISTON has no code-signing certificate yet, so Windows SmartScreen may warn when you first
                  run the installer or an executable. If you choose to proceed, click &quot;More info&quot; →
                  &quot;Run anyway&quot;. Check the SHA-256 checksum below first: it is the substitute for a signature.
                </span>
              </p>
            </div>

            <p className="text-text-secondary">In PowerShell, in the folder you downloaded to:</p>
            <code className={blockClass}>
              {files.map((f) => `Get-FileHash .\\${f.name} -Algorithm SHA256`).join('\n')}
            </code>
            <p className="text-text-secondary">The printed hash must equal the one here:</p>
            <ul className="space-y-3">
              {files.map((f) => (
                <li key={f.name} className="border-2 border-dashed border-border p-4">
                  <p className="font-mono text-sm mb-1">{f.name}</p>
                  <p className="font-mono text-xs text-accent-tertiary break-all">{f.sha256}</p>
                  <p className="text-xs text-text-tertiary mt-1">
                    <a href={`${downloadUrl(f)}.sha256`} className={linkClass}>{f.name}.sha256</a>
                  </p>
                </li>
              ))}
            </ul>
          </m.div>
        </div>
      </section>

      {/* Quick Start */}
      <section id="quick-start" className="py-20">
        <div className="container-custom max-w-4xl">
          <m.h2
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="font-mono text-3xl md:text-4xl font-bold mb-12 text-center"
          >
            YOUR FIRST SIMULATION
          </m.h2>

          <m.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="space-y-6"
          >
            <div className="border-2 border-dashed border-border p-6">
              <h3 className="font-mono text-xl font-bold mb-3 flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 bg-accent-primary text-black font-bold rounded-full">1</span>
                In the GUI
              </h3>
              <p className="text-text-secondary">
                Start PISTON from the Start menu (or <code className={codeClass}>bin\piston-gui.exe</code>),
                open one of the bundled engines and run a dyno pull.
              </p>
            </div>

            <div className="border-2 border-dashed border-border p-6">
              <h3 className="font-mono text-xl font-bold mb-3 flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 bg-accent-primary text-black font-bold rounded-full">2</span>
                From the command line
              </h3>
              <p className="text-text-secondary mb-3">
                Open PowerShell in the PISTON folder (the unzipped folder, or{' '}
                <code className={codeClass}>C:\Program Files\PISTON</code>) and write results to your home folder:
              </p>
              <code className={blockClass}>
{`# Check a config, then sweep it and write the curve to CSV
bin\\piston.exe validate -c data\\engines\\ford_coyote_50.json
bin\\piston.exe simulate -c data\\engines\\ford_coyote_50.json -o $HOME\\coyote.csv

# A self-contained HTML report: spec, curve, peaks
bin\\piston.exe report -c data\\engines\\ford_coyote_50.json -o $HOME\\coyote.html

# Every command
bin\\piston.exe --help`}
              </code>
            </div>

            <div className="mt-8 p-6 bg-background-secondary border-2 border-accent-primary">
              <h3 className="font-mono text-xl font-bold mb-4 flex items-center gap-3">
                <FaBook className="text-accent-primary" />
                Documentation in the download
              </h3>
              <ul className="space-y-2 text-text-secondary">
                <li className="flex items-start gap-2">
                  <FaCheckCircle className="w-4 h-4 text-accent-primary mt-1 flex-shrink-0" />
                  <span><code className="text-accent-tertiary">docs\user_guide\quickstart.md</code>: the full first-run walkthrough</span>
                </li>
                <li className="flex items-start gap-2">
                  <FaCheckCircle className="w-4 h-4 text-accent-primary mt-1 flex-shrink-0" />
                  <span><code className="text-accent-tertiary">docs\validation\accuracy.generated.md</code>: measured accuracy against published figures, generated by the release build</span>
                </li>
                <li className="flex items-start gap-2">
                  <FaCheckCircle className="w-4 h-4 text-accent-primary mt-1 flex-shrink-0" />
                  <span><code className="text-accent-tertiary">docs\physics\limitations.md</code>: where the model is known to be weaker, by engine class</span>
                </li>
              </ul>
            </div>
          </m.div>
        </div>
      </section>

      {/* Help */}
      <section className="py-20 bg-background-secondary" id="help">
        <div className="container-custom max-w-4xl">
          <m.h2
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="font-mono text-3xl md:text-4xl font-bold mb-12 text-center"
          >
            HELP
          </m.h2>

          <m.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="space-y-6"
          >
            <div className="border-2 border-dashed border-border p-6">
              <h3 className="font-mono text-lg font-bold mb-2 text-accent-primary">
                The GUI won&apos;t start
              </h3>
              <ul className="space-y-2 text-text-secondary list-disc list-inside ml-4">
                <li>It needs OpenGL 3.3: update your graphics driver. Remote-desktop sessions and some virtual machines don&apos;t provide it.</li>
                <li>The command-line tool, <code className="text-accent-tertiary">bin\piston.exe</code>, works without a GPU.</li>
              </ul>
            </div>

            <div className="border-2 border-dashed border-border p-6">
              <h3 className="font-mono text-lg font-bold mb-2 text-accent-primary">
                A results file can&apos;t be written
              </h3>
              <ul className="space-y-2 text-text-secondary list-disc list-inside ml-4">
                <li>Program Files is not writable without administrator rights: write to your home folder, as in the examples above</li>
                <li>Close the file if another program (such as Excel) has it open</li>
              </ul>
            </div>

            <div className="p-6 bg-black">
              <h3 className="font-mono text-xl font-bold mb-4">Still stuck?</h3>
              <p className="text-text-secondary">
                Email <a href="mailto:support@pistonsim.com" className={linkClass}>support@pistonsim.com</a> with
                the version (<code className="text-accent-tertiary">bin\piston.exe version</code>), what you ran, and what happened.
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
