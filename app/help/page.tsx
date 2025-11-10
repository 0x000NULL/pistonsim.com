'use client';

import React, { useState, useMemo } from 'react';
import { m } from 'framer-motion';
import {
  FaSearch,
  FaDownload,
  FaTerminal,
  FaExclamationTriangle,
  FaChartLine,
  FaFileExport,
  FaChevronDown,
  FaChevronRight,
  FaBook,
  FaQuestionCircle,
  FaEnvelope,
} from 'react-icons/fa';
import { fadeInUp } from '@/lib/animations';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface HelpArticle {
  id: string;
  category: string;
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  problem: string;
  solution: React.ReactNode;
  keywords: string[];
}

export default function HelpPage(): React.ReactElement {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [expandedArticle, setExpandedArticle] = useState<string | null>(null);

  const helpArticles: HelpArticle[] = [
    // Installation Issues
    {
      id: 'install-windows-smartscreen',
      category: 'Installation',
      title: 'Windows SmartScreen Warning',
      icon: FaDownload,
      problem: 'Windows shows "Windows protected your PC" warning when installing PISTON',
      solution: (
        <div className="space-y-3">
          <p className="text-text-secondary">
            This is normal for unsigned applications during alpha. To proceed:
          </p>
          <ol className="list-decimal list-inside space-y-2 text-text-secondary ml-4">
            <li>Click "More info" in the SmartScreen dialog</li>
            <li>Click "Run anyway" button that appears</li>
            <li>Installation will proceed normally</li>
          </ol>
          <div className="bg-background-secondary border-l-4 border-accent-primary p-4 mt-4">
            <p className="text-sm text-text-tertiary">
              <strong>Why this happens:</strong> Code signing certificates cost $300-500/year. During alpha, we haven&apos;t purchased one yet.
              Beta releases will be properly signed to eliminate this warning.
            </p>
          </div>
        </div>
      ),
      keywords: ['windows', 'smartscreen', 'protected', 'unsigned', 'security', 'install', 'warning'],
    },
    {
      id: 'install-macos-gatekeeper',
      category: 'Installation',
      title: 'macOS Gatekeeper "Unidentified Developer"',
      icon: FaDownload,
      problem: 'macOS won\'t open PISTON saying "cannot be opened because it is from an unidentified developer"',
      solution: (
        <div className="space-y-3">
          <p className="text-text-secondary">
            Bypass Gatekeeper for PISTON:
          </p>
          <ol className="list-decimal list-inside space-y-2 text-text-secondary ml-4">
            <li>Open Finder and navigate to Applications folder</li>
            <li><strong>Right-click</strong> (or Control-click) on PISTON</li>
            <li>Select "Open" from the context menu</li>
            <li>Click "Open" in the security dialog</li>
            <li>PISTON will launch and remember this choice</li>
          </ol>
          <div className="bg-background-secondary border-l-4 border-accent-primary p-4 mt-4">
            <p className="text-sm text-text-tertiary">
              <strong>Alternative:</strong> Go to System Preferences → Security & Privacy → General tab.
              Click "Open Anyway" next to the message about PISTON being blocked.
            </p>
          </div>
        </div>
      ),
      keywords: ['macos', 'gatekeeper', 'unidentified', 'developer', 'security', 'install', 'apple', 'mac'],
    },
    {
      id: 'install-linux-permission',
      category: 'Installation',
      title: 'Linux "Permission Denied" Error',
      icon: FaDownload,
      problem: 'Cannot run PISTON AppImage: "Permission denied" error',
      solution: (
        <div className="space-y-3">
          <p className="text-text-secondary">
            Make the AppImage executable:
          </p>
          <code className="block bg-black text-accent-tertiary p-3 font-mono text-sm">
            chmod +x piston-*.AppImage
          </code>
          <p className="text-text-secondary mt-3">
            Then run it:
          </p>
          <code className="block bg-black text-accent-tertiary p-3 font-mono text-sm">
            ./piston-*.AppImage
          </code>
          <div className="bg-background-secondary border-l-4 border-accent-primary p-4 mt-4">
            <p className="text-sm text-text-tertiary">
              <strong>FUSE requirement:</strong> If you get "FUSE not found" error, install FUSE 2.x:
              <code className="block bg-black text-accent-tertiary p-2 font-mono text-xs mt-2">
                sudo apt install fuse  # Ubuntu/Debian<br />
                sudo dnf install fuse  # Fedora<br />
                sudo pacman -S fuse2   # Arch
              </code>
            </p>
          </div>
        </div>
      ),
      keywords: ['linux', 'permission', 'denied', 'executable', 'appimage', 'chmod', 'fuse', 'install'],
    },

    // Usage Issues
    {
      id: 'usage-load-engine',
      category: 'Usage',
      title: 'How to Load an Engine Configuration',
      icon: FaTerminal,
      problem: 'Not sure how to load a sample engine or start a simulation',
      solution: (
        <div className="space-y-3">
          <p className="text-text-secondary">
            Load a pre-configured engine from the parts database:
          </p>
          <code className="block bg-black text-accent-tertiary p-3 font-mono text-sm">
            piston load --engine ls3_stock
          </code>
          <p className="text-text-secondary mt-3">
            Available engines:
          </p>
          <ul className="list-disc list-inside space-y-1 text-text-secondary ml-4">
            <li><code className="text-accent-tertiary">ls3_stock</code> - GM LS3 6.2L V8</li>
            <li><code className="text-accent-tertiary">lsa_stock</code> - GM LSA 6.2L Supercharged V8</li>
            <li><code className="text-accent-tertiary">k20a_type_r</code> - Honda K20A Type R</li>
            <li><code className="text-accent-tertiary">sbc_350</code> - Small Block Chevy 350</li>
          </ul>
          <p className="text-text-secondary mt-3">
            Or load from a custom JSON file:
          </p>
          <code className="block bg-black text-accent-tertiary p-3 font-mono text-sm">
            piston load --file /path/to/config.json
          </code>
          <p className="text-sm text-text-tertiary mt-4">
            See the <a href="/docs" className="text-accent-primary hover:text-accent-tertiary underline">Documentation</a> for full configuration file format.
          </p>
        </div>
      ),
      keywords: ['load', 'engine', 'configuration', 'start', 'begin', 'sample', 'example', 'ls3', 'json'],
    },
    {
      id: 'usage-run-simulation',
      category: 'Usage',
      title: 'Running Your First Simulation',
      icon: FaTerminal,
      problem: 'Engine loaded, but how do I actually run a simulation?',
      solution: (
        <div className="space-y-3">
          <p className="text-text-secondary">
            After loading an engine, run simulation across RPM range:
          </p>
          <code className="block bg-black text-accent-tertiary p-3 font-mono text-sm">
            piston simulate --rpm-range 1000:7000 --step 250
          </code>
          <p className="text-text-secondary mt-3">
            This simulates from 1000 to 7000 RPM in 250 RPM increments.
          </p>
          <p className="text-text-secondary mt-3">
            Common RPM ranges:
          </p>
          <ul className="list-disc list-inside space-y-1 text-text-secondary ml-4">
            <li><strong>Street engines:</strong> 1000:6500</li>
            <li><strong>Performance engines:</strong> 1500:7500</li>
            <li><strong>Racing engines:</strong> 2000:9000</li>
          </ul>
          <p className="text-text-secondary mt-3">
            Adjust <code className="text-accent-tertiary">--step</code> for resolution:
          </p>
          <ul className="list-disc list-inside space-y-1 text-text-secondary ml-4">
            <li><code className="text-accent-tertiary">--step 500</code> - Fast, coarse data</li>
            <li><code className="text-accent-tertiary">--step 250</code> - Good balance (default)</li>
            <li><code className="text-accent-tertiary">--step 100</code> - Detailed, slower</li>
          </ul>
        </div>
      ),
      keywords: ['simulate', 'run', 'start', 'rpm', 'range', 'step', 'execute', 'begin'],
    },
    {
      id: 'usage-view-results',
      category: 'Usage',
      title: 'Viewing Simulation Results',
      icon: FaChartLine,
      problem: 'Simulation completed, how do I see the results?',
      solution: (
        <div className="space-y-3">
          <p className="text-text-secondary">
            Display results in the terminal:
          </p>
          <code className="block bg-black text-accent-tertiary p-3 font-mono text-sm">
            piston results --show
          </code>
          <p className="text-text-secondary mt-3">
            For more detailed output including thermodynamic data:
          </p>
          <code className="block bg-black text-accent-tertiary p-3 font-mono text-sm">
            piston results --show --verbose
          </code>
          <p className="text-text-secondary mt-3">
            Results include:
          </p>
          <ul className="list-disc list-inside space-y-1 text-text-secondary ml-4">
            <li>Power (HP) at each RPM point</li>
            <li>Torque (lb-ft) at each RPM point</li>
            <li>BSFC (brake specific fuel consumption)</li>
            <li>VE (volumetric efficiency)</li>
            <li>Peak power and torque with RPM</li>
            <li>Validation metrics (if applicable)</li>
          </ul>
        </div>
      ),
      keywords: ['results', 'output', 'display', 'show', 'view', 'power', 'torque', 'data'],
    },

    // Troubleshooting
    {
      id: 'trouble-crash-startup',
      category: 'Troubleshooting',
      title: 'PISTON Crashes on Startup',
      icon: FaExclamationTriangle,
      problem: 'PISTON won\'t launch or crashes immediately after opening',
      solution: (
        <div className="space-y-3">
          <p className="text-text-secondary">
            Try these solutions in order:
          </p>
          <ol className="list-decimal list-inside space-y-3 text-text-secondary ml-4">
            <li>
              <strong>Check system requirements:</strong>
              <ul className="list-disc list-inside ml-6 mt-1 space-y-1 text-sm">
                <li>Dual-core CPU 2.0 GHz+ (quad-core recommended)</li>
                <li>4 GB RAM minimum (8 GB recommended)</li>
                <li>OpenGL 3.3+ compatible graphics</li>
              </ul>
            </li>
            <li>
              <strong>Update graphics drivers:</strong> Visit manufacturer website (NVIDIA, AMD, Intel) for latest drivers
            </li>
            <li>
              <strong>Windows: Run as administrator:</strong> Right-click PISTON → "Run as administrator"
            </li>
            <li>
              <strong>Check antivirus/firewall:</strong> Add PISTON to exclusions list
            </li>
            <li>
              <strong>Look for error logs:</strong>
              <ul className="list-disc list-inside ml-6 mt-1 space-y-1 text-sm">
                <li>Windows: <code className="text-accent-tertiary">C:\Users\[You]\AppData\Local\PISTON\logs\</code></li>
                <li>macOS: <code className="text-accent-tertiary">~/Library/Logs/PISTON/</code></li>
                <li>Linux: <code className="text-accent-tertiary">~/.local/share/PISTON/logs/</code></li>
              </ul>
            </li>
          </ol>
          <div className="bg-background-secondary border-l-4 border-accent-primary p-4 mt-4">
            <p className="text-sm text-text-tertiary">
              If none of these work, email crash logs to <a href="mailto:support@pistonsim.com" className="text-accent-primary hover:text-accent-tertiary underline">support@pistonsim.com</a> or report on GitHub.
            </p>
          </div>
        </div>
      ),
      keywords: ['crash', 'startup', 'launch', 'won\'t open', 'freeze', 'hang', 'error', 'fail'],
    },
    {
      id: 'trouble-simulation-error',
      category: 'Troubleshooting',
      title: 'Simulation Fails or Returns Errors',
      icon: FaExclamationTriangle,
      problem: 'Simulation command runs but fails with error messages',
      solution: (
        <div className="space-y-3">
          <p className="text-text-secondary">
            Common simulation errors and fixes:
          </p>
          <div className="space-y-4">
            <div className="border-l-4 border-accent-primary bg-background-secondary p-3">
              <p className="font-bold mb-1">Error: "No engine configuration loaded"</p>
              <p className="text-sm text-text-secondary">
                Solution: Run <code className="text-accent-tertiary">piston load</code> before <code className="text-accent-tertiary">piston simulate</code>
              </p>
            </div>
            <div className="border-l-4 border-accent-primary bg-background-secondary p-3">
              <p className="font-bold mb-1">Error: "Invalid RPM range"</p>
              <p className="text-sm text-text-secondary">
                Solution: Ensure min RPM &lt; max RPM and both are positive integers (e.g., <code className="text-accent-tertiary">--rpm-range 1000:7000</code>)
              </p>
            </div>
            <div className="border-l-4 border-accent-primary bg-background-secondary p-3">
              <p className="font-bold mb-1">Error: "Parts compatibility issue"</p>
              <p className="text-sm text-text-secondary">
                Solution: Run <code className="text-accent-tertiary">piston validate</code> to see specific compatibility warnings
              </p>
            </div>
            <div className="border-l-4 border-accent-primary bg-background-secondary p-3">
              <p className="font-bold mb-1">Error: "Convergence failed at XXX RPM"</p>
              <p className="text-sm text-text-secondary">
                Solution: Configuration may have unrealistic values. Check compression ratio, cam timing, and valve sizes are reasonable.
              </p>
            </div>
          </div>
        </div>
      ),
      keywords: ['error', 'simulation', 'fail', 'convergence', 'invalid', 'configuration', 'compatibility'],
    },

    // Accuracy Questions
    {
      id: 'accuracy-inaccurate-results',
      category: 'Accuracy',
      title: 'Results Don\'t Match My Dyno Data',
      icon: FaChartLine,
      problem: 'Simulation results are significantly different from real dyno testing',
      solution: (
        <div className="space-y-3">
          <p className="text-text-secondary">
            Checklist to improve accuracy:
          </p>
          <ol className="list-decimal list-inside space-y-3 text-text-secondary ml-4">
            <li>
              <strong>Verify all configuration parameters match reality:</strong>
              <ul className="list-disc list-inside ml-6 mt-1 space-y-1 text-sm">
                <li>Exact displacement (bore × stroke)</li>
                <li>Actual compression ratio (not advertised)</li>
                <li>Measured camshaft specs (@ 0.050" lift)</li>
                <li>Correct valve sizes and combustion chamber cc</li>
              </ul>
            </li>
            <li>
              <strong>Match environmental conditions:</strong>
              <ul className="list-disc list-inside ml-6 mt-1 space-y-1 text-sm">
                <li>Same temperature, pressure, humidity as dyno test</li>
                <li>Or use SAE J1349 correction factor (PISTON does this automatically)</li>
              </ul>
            </li>
            <li>
              <strong>Dyno type matters:</strong>
              <ul className="list-disc list-inside ml-6 mt-1 space-y-1 text-sm">
                <li>Engine dyno: Compare directly to PISTON output</li>
                <li>Chassis dyno: Expect 10-15% drivetrain loss</li>
              </ul>
            </li>
            <li>
              <strong>Check for tune differences:</strong> PISTON assumes optimal tune. Poor timing/AFR on dyno will show less power.
            </li>
            <li>
              <strong>Run validation command:</strong> <code className="text-accent-tertiary">piston validate</code> flags compatibility issues
            </li>
          </ol>
          <div className="bg-background-secondary border-l-4 border-accent-primary p-4 mt-4">
            <p className="text-sm text-text-tertiary">
              <strong>Expected accuracy:</strong> PISTON achieves &lt;7% error on validated engines (LS3, LSA).
              Custom configurations may vary. If error is &gt;15%, double-check all inputs.
            </p>
          </div>
        </div>
      ),
      keywords: ['accuracy', 'inaccurate', 'wrong', 'dyno', 'mismatch', 'difference', 'validation', 'error'],
    },
    {
      id: 'accuracy-limitations',
      category: 'Accuracy',
      title: 'What PISTON Cannot Simulate (Yet)',
      icon: FaChartLine,
      problem: 'What are the current limitations of PISTON simulation?',
      solution: (
        <div className="space-y-3">
          <p className="text-text-secondary">
            Current limitations (alpha release):
          </p>
          <ul className="list-disc list-inside space-y-2 text-text-secondary ml-4">
            <li>
              <strong>Forced induction:</strong> Turbochargers and superchargers not yet supported (coming Phase 3)
            </li>
            <li>
              <strong>Variable valve timing:</strong> Cannot model VVT/VTEC systems dynamically (planned future)
            </li>
            <li>
              <strong>Knock prediction:</strong> Cannot predict detonation/knock events (coming Phase 4+)
            </li>
            <li>
              <strong>Emissions:</strong> No NOx, CO, HC modeling (not currently planned)
            </li>
            <li>
              <strong>Port flow CFD:</strong> Uses simplified flow models, not full 3D CFD
            </li>
            <li>
              <strong>Transmission/drivetrain:</strong> Only simulates engine, not complete vehicle
            </li>
            <li>
              <strong>Custom parts:</strong> Must use parts database; cannot define completely custom parts (yet)
            </li>
          </ul>
          <p className="text-text-secondary mt-3">
            What PISTON <strong>does</strong> simulate accurately:
          </p>
          <ul className="list-disc list-inside space-y-1 text-text-secondary ml-4">
            <li>Naturally aspirated 4-stroke gasoline engines</li>
            <li>Power and torque curves across full RPM range</li>
            <li>Thermodynamic efficiency (BSFC, VE)</li>
            <li>SAE J1349 environmental corrections</li>
            <li>Parts compatibility and fitment</li>
          </ul>
        </div>
      ),
      keywords: ['limitations', 'cannot', 'not supported', 'turbo', 'supercharger', 'boost', 'vtec', 'vvt', 'knock'],
    },

    // Export Issues
    {
      id: 'export-csv-failed',
      category: 'Export',
      title: 'Cannot Export to CSV',
      icon: FaFileExport,
      problem: 'CSV export command fails or produces empty file',
      solution: (
        <div className="space-y-3">
          <p className="text-text-secondary">
            Common export issues:
          </p>
          <ol className="list-decimal list-inside space-y-3 text-text-secondary ml-4">
            <li>
              <strong>Ensure simulation has run:</strong> Export requires completed simulation. Run <code className="text-accent-tertiary">piston simulate</code> first.
            </li>
            <li>
              <strong>Check file path permissions:</strong> Make sure you have write access to the output directory.
              Try exporting to your home directory first:
              <code className="block bg-black text-accent-tertiary p-2 font-mono text-sm mt-1">
                piston export --format csv --output ~/piston-results.csv
              </code>
            </li>
            <li>
              <strong>Close file if open:</strong> If file already exists and is open in Excel/etc., close it first.
            </li>
            <li>
              <strong>Check disk space:</strong> Ensure you have free disk space (results are typically &lt;1 MB).
            </li>
            <li>
              <strong>Avoid special characters:</strong> Use simple filenames: <code className="text-accent-tertiary">results.csv</code> not <code className="text-accent-tertiary">results (test #1).csv</code>
            </li>
          </ol>
        </div>
      ),
      keywords: ['export', 'csv', 'fail', 'empty', 'file', 'save', 'output', 'write'],
    },
    {
      id: 'export-excel-import',
      category: 'Export',
      title: 'Opening CSV in Excel',
      icon: FaFileExport,
      problem: 'How do I properly import PISTON CSV data into Excel?',
      solution: (
        <div className="space-y-3">
          <p className="text-text-secondary">
            Import into Excel for analysis and graphing:
          </p>
          <ol className="list-decimal list-inside space-y-2 text-text-secondary ml-4">
            <li>Open Excel (blank workbook)</li>
            <li>Go to Data → Get Data → From File → From Text/CSV</li>
            <li>Select your PISTON CSV file</li>
            <li>Preview will show columns correctly</li>
            <li>Click "Load" to import</li>
          </ol>
          <p className="text-text-secondary mt-3">
            Create power curve graph:
          </p>
          <ol className="list-decimal list-inside space-y-2 text-text-secondary ml-4">
            <li>Select the RPM, Power_HP, and Torque_lbft columns</li>
            <li>Insert → Charts → Line Chart</li>
            <li>Customize axis labels, title, colors</li>
            <li>Right-click chart → Select Data to add/remove series</li>
          </ol>
          <div className="bg-background-secondary border-l-4 border-accent-tertiary p-4 mt-4">
            <p className="text-sm text-text-tertiary">
              <strong>Pro tip:</strong> Use "Scatter with Smooth Lines" chart type for smoother curves.
              Add secondary Y-axis for torque if scales differ significantly.
            </p>
          </div>
        </div>
      ),
      keywords: ['excel', 'csv', 'import', 'graph', 'chart', 'plot', 'curve', 'spreadsheet'],
    },
  ];

  const categories = [
    { id: 'all', label: 'All Articles', icon: FaBook },
    { id: 'Installation', label: 'Installation', icon: FaDownload },
    { id: 'Usage', label: 'Usage', icon: FaTerminal },
    { id: 'Troubleshooting', label: 'Troubleshooting', icon: FaExclamationTriangle },
    { id: 'Accuracy', label: 'Accuracy', icon: FaChartLine },
    { id: 'Export', label: 'Export', icon: FaFileExport },
  ];

  const filteredArticles = useMemo(() => {
    let filtered = helpArticles;

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter((article) => article.category === selectedCategory);
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter((article) => {
        return (
          article.problem.toLowerCase().includes(query) ||
          article.keywords.some((keyword) => keyword.includes(query))
        );
      });
    }

    return filtered;
  }, [helpArticles, selectedCategory, searchQuery]);

  const toggleArticle = (id: string) => {
    setExpandedArticle(expandedArticle === id ? null : id);
  };

  return (
      {/* Hero Section */}
      <section className="container-custom py-20 md:py-32">
        <m.div
          initial="initial"
          animate="animate"
          variants={fadeInUp}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="font-mono text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            HELP CENTER
          </h1>
          <p className="text-lg md:text-xl text-text-secondary mb-12">
            Troubleshooting guides, how-tos, and solutions to common problems
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-text-tertiary w-5 h-5" />
              <input
                type="text"
                placeholder="Search for help... (e.g., 'windows install error', 'export csv')"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-background-secondary border-2 border-dashed border-border focus:border-accent-primary text-white placeholder-text-tertiary font-mono outline-none transition-colors"
              />
            </div>
          </div>
        </m.div>
      </section>

      {/* Category Filters */}
      <section className="py-8 bg-background-secondary">
        <div className="container-custom">
          <m.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="flex flex-wrap gap-3 justify-center"
          >
            {categories.map((category) => {
              const Icon = category.icon;
              const isActive = selectedCategory === category.id;

              return (
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`
                    inline-flex items-center gap-2 px-6 py-3 border-2 border-dashed font-mono font-bold text-sm transition-all duration-200
                    ${
                      isActive
                        ? 'bg-accent-primary border-accent-primary text-black'
                        : 'bg-transparent border-border hover:border-border-hover hover:bg-background-secondary text-text-secondary'
                    }
                  `}
                >
                  <Icon className="w-4 h-4" />
                  {category.label}
                </button>
              );
            })}
          </m.div>
        </div>
      </section>

      {/* Help Articles */}
      <section className="py-20 bg-background-secondary">
        <div className="container-custom max-w-5xl">
          {filteredArticles.length === 0 ? (
            <m.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-center py-12"
            >
              <FaQuestionCircle className="w-16 h-16 text-text-tertiary mx-auto mb-4" />
              <h3 className="font-mono text-2xl font-bold mb-3">No articles found</h3>
              <p className="text-text-secondary mb-6">
                Try a different search term or category, or{' '}
                <a href="/contact" className="text-accent-primary hover:text-accent-tertiary underline">
                  contact support
                </a>
                .
              </p>
            </m.div>
          ) : (
            <div className="space-y-4">
              {filteredArticles.map((article, index) => {
                const Icon = article.icon;
                const isExpanded = expandedArticle === article.id;

                return (
                    key={article.id}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    transition={{ delay: index * 0.03 }}
                    className="border-2 border-dashed border-border"
                  >
                    {/* Article Header */}
                    <button
                      onClick={() => toggleArticle(article.id)}
                      className="w-full p-6 flex items-center justify-between hover:bg-background-secondary transition-colors text-left"
                      aria-expanded={isExpanded}
                    >
                      <div className="flex items-start gap-4 flex-1">
                        <Icon className="w-5 h-5 text-accent-primary mt-1 flex-shrink-0" />
                        <div className="flex-1">
                          <h3 className="font-mono text-lg font-bold mb-1">{article.title}</h3>
                          <p className="text-text-secondary text-sm">{article.problem}</p>
                          <p className="text-text-tertiary text-xs mt-2">Category: {article.category}</p>
                        </div>
                      </div>
                      <div className="text-accent-primary ml-4">
                        {isExpanded ? (
                          <FaChevronDown className="w-5 h-5" />
                        ) : (
                          <FaChevronRight className="w-5 h-5" />
                        )}
                      </div>
                    </button>

                    {/* Article Content */}
                    {isExpanded && (
                      <div className="p-6 pt-0 border-t-2 border-dashed border-border">
                        <h4 className="font-mono font-bold mb-3 text-accent-primary">Solution:</h4>
                        {article.solution}
                      </div>
                    )}
                  </m.div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* Additional Resources */}
      <section className="py-20 bg-background-secondary">
        <div className="container-custom max-w-4xl">
          <m.h2
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="font-mono text-3xl md:text-4xl font-bold mb-12 text-center"
          >
            STILL NEED HELP?
          </m.h2>

          <div className="grid md:grid-cols-3 gap-6">
            <m.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="border-2 border-dashed border-border p-6 text-center hover:bg-background-secondary transition-colors"
            >
              <FaBook className="w-8 h-8 text-accent-primary mx-auto mb-4" />
              <h3 className="font-mono font-bold mb-2">Documentation</h3>
              <p className="text-text-secondary text-sm mb-4">
                Complete user manual and API reference
              </p>
              <a
                href="/docs"
                className="inline-block px-6 py-2 border-2 border-dashed border-border hover:border-accent-primary font-mono font-bold text-sm transition-colors"
              >
                Read Docs
              </a>
            </m.div>

            <m.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ delay: 0.1 }}
              className="border-2 border-dashed border-border p-6 text-center hover:bg-background-secondary transition-colors"
            >
              <FaQuestionCircle className="w-8 h-8 text-accent-primary mx-auto mb-4" />
              <h3 className="font-mono font-bold mb-2">FAQ</h3>
              <p className="text-text-secondary text-sm mb-4">
                Frequently asked questions about PISTON
              </p>
              <a
                href="/faq"
                className="inline-block px-6 py-2 border-2 border-dashed border-border hover:border-accent-primary font-mono font-bold text-sm transition-colors"
              >
                View FAQ
              </a>
            </m.div>

            <m.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ delay: 0.2 }}
              className="border-2 border-dashed border-border p-6 text-center hover:bg-background-secondary transition-colors"
            >
              <FaEnvelope className="w-8 h-8 text-accent-primary mx-auto mb-4" />
              <h3 className="font-mono font-bold mb-2">Contact Support</h3>
              <p className="text-text-secondary text-sm mb-4">
                Email or Discord for personalized help
              </p>
              <a
                href="/contact"
                className="inline-block px-6 py-2 border-2 border-dashed border-border hover:border-accent-primary font-mono font-bold text-sm transition-colors"
              >
                Get Support
              </a>
            </m.div>
          </div>
        </div>
      </section>
    </main>
    <Footer />
    </>
  )
}
