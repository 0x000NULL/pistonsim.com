'use client';

import React, { useState } from 'react';
import { m } from 'framer-motion';
import {
  FaRocket,
  FaBook,
  FaCog,
  FaDatabase,
  FaFileExport,
  FaQuestionCircle,
  FaChevronDown,
  FaChevronRight,
  FaTerminal,
  FaChartLine,
  FaCheckCircle,
  FaExclamationTriangle,
} from 'react-icons/fa';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Card from '@/components/Card';
import { fadeInUp } from '@/lib/animations';

interface DocSection {
  id: string;
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  description: string;
  content: React.ReactNode;
}

export default function DocsPage(): React.ReactElement {
  const [expandedSection, setExpandedSection] = useState<string | null>('getting-started');

  const toggleSection = (id: string) => {
    setExpandedSection(expandedSection === id ? null : id);
  };

  const docSections: DocSection[] = [
    {
      id: 'getting-started',
      title: 'Getting Started',
      icon: FaRocket,
      description: 'Installation and your first simulation',
      content: (
        <div className="space-y-6">
          <div>
            <h3 className="font-mono text-xl font-bold mb-3">Installation</h3>
            <p className="text-text-secondary mb-4">
              Download PISTON for your platform from the <a href="/download" className="text-accent-primary hover:text-accent-tertiary underline">download page</a>.
              Follow the platform-specific installation instructions for Windows, macOS, or Linux.
            </p>
            <div className="bg-background-secondary p-4 border-l-4 border-accent-primary">
              <p className="text-sm"><strong>System Requirements:</strong></p>
              <ul className="text-sm text-text-secondary mt-2 space-y-1">
                <li>• Dual-core CPU 2.0 GHz+ (quad-core 3.0 GHz+ recommended)</li>
                <li>• 4 GB RAM minimum (8 GB+ recommended)</li>
                <li>• 200 MB disk space (500 MB+ for simulation data)</li>
                <li>• OpenGL 3.3+ compatible graphics</li>
              </ul>
            </div>
          </div>

          <div>
            <h3 className="font-mono text-xl font-bold mb-3">Quick Start: 5-Minute Tutorial</h3>
            <div className="space-y-4">
              <div className="border-2 border-dashed border-border p-4">
                <h4 className="font-mono font-bold mb-2 flex items-center gap-2">
                  <span className="flex items-center justify-center w-6 h-6 bg-accent-primary text-black font-bold rounded-full text-sm">1</span>
                  Launch PISTON
                </h4>
                <p className="text-text-secondary text-sm">
                  Open the application from your system&apos;s launcher. The CLI interface will appear (GUI coming in Phase 2).
                </p>
              </div>

              <div className="border-2 border-dashed border-border p-4">
                <h4 className="font-mono font-bold mb-2 flex items-center gap-2">
                  <span className="flex items-center justify-center w-6 h-6 bg-accent-primary text-black font-bold rounded-full text-sm">2</span>
                  Load Sample Engine
                </h4>
                <code className="block bg-black text-accent-tertiary p-3 font-mono text-sm mt-2">
                  $ piston load --engine ls3_stock
                </code>
                <p className="text-text-secondary text-sm mt-2">
                  Loads the GM LS3 6.2L V8 with factory specifications.
                </p>
              </div>

              <div className="border-2 border-dashed border-border p-4">
                <h4 className="font-mono font-bold mb-2 flex items-center gap-2">
                  <span className="flex items-center justify-center w-6 h-6 bg-accent-primary text-black font-bold rounded-full text-sm">3</span>
                  Run Simulation
                </h4>
                <code className="block bg-black text-accent-tertiary p-3 font-mono text-sm mt-2">
                  $ piston simulate --rpm-range 1000:7000 --step 250
                </code>
                <p className="text-text-secondary text-sm mt-2">
                  Simulates across RPM range from 1000 to 7000 RPM in 250 RPM increments.
                </p>
              </div>

              <div className="border-2 border-dashed border-border p-4">
                <h4 className="font-mono font-bold mb-2 flex items-center gap-2">
                  <span className="flex items-center justify-center w-6 h-6 bg-accent-primary text-black font-bold rounded-full text-sm">4</span>
                  View & Export Results
                </h4>
                <code className="block bg-black text-accent-tertiary p-3 font-mono text-sm mt-2">
                  $ piston results --show<br />
                  $ piston export --format csv --output results.csv
                </code>
                <p className="text-text-secondary text-sm mt-2">
                  Display results in terminal and export to CSV for analysis in Excel, MATLAB, etc.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-accent-primary/10 border-2 border-accent-primary p-6">
            <h4 className="font-mono font-bold mb-3 flex items-center gap-2">
              <FaCheckCircle className="text-accent-primary" />
              Next Steps
            </h4>
            <ul className="space-y-2 text-text-secondary text-sm">
              <li>• Explore the <strong>User Manual</strong> section below for detailed commands</li>
              <li>• Learn about the <strong>Parts Database</strong> to customize your build</li>
              <li>• Check <a href="/case-studies" className="text-accent-primary hover:text-accent-tertiary underline">Case Studies</a> for real-world examples</li>
              <li>• Join the Discord community for tips and support</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      id: 'user-manual',
      title: 'User Manual',
      icon: FaBook,
      description: 'Complete command reference and features',
      content: (
        <div className="space-y-6">
          <div>
            <h3 className="font-mono text-xl font-bold mb-3">Command Line Interface</h3>
            <p className="text-text-secondary mb-4">
              PISTON currently operates via command-line interface (CLI). A graphical user interface (GUI) is planned for Phase 2.
            </p>
          </div>

          <div>
            <h3 className="font-mono text-xl font-bold mb-4">Core Commands</h3>
            <div className="space-y-4">
              {[
                {
                  command: 'piston load',
                  description: 'Load an engine configuration',
                  usage: 'piston load --engine [engine_id] | --file [path]',
                  examples: [
                    'piston load --engine ls3_stock',
                    'piston load --engine k20a_type_r',
                    'piston load --file ./my_build.json',
                  ],
                },
                {
                  command: 'piston simulate',
                  description: 'Run engine simulation',
                  usage: 'piston simulate --rpm-range [min]:[max] --step [increment]',
                  examples: [
                    'piston simulate --rpm-range 1000:7000 --step 250',
                    'piston simulate --rpm-range 2000:9000 --step 500',
                  ],
                },
                {
                  command: 'piston results',
                  description: 'Display simulation results',
                  usage: 'piston results --show [--verbose]',
                  examples: [
                    'piston results --show',
                    'piston results --show --verbose',
                  ],
                },
                {
                  command: 'piston export',
                  description: 'Export results to file',
                  usage: 'piston export --format [csv|json] --output [path]',
                  examples: [
                    'piston export --format csv --output results.csv',
                    'piston export --format json --output data.json',
                  ],
                },
                {
                  command: 'piston parts',
                  description: 'Browse available parts database',
                  usage: 'piston parts --list [--family [family_name]]',
                  examples: [
                    'piston parts --list',
                    'piston parts --list --family gm_ls',
                    'piston parts --list --family honda_k',
                  ],
                },
                {
                  command: 'piston validate',
                  description: 'Check configuration for compatibility issues',
                  usage: 'piston validate',
                  examples: [
                    'piston validate',
                  ],
                },
              ].map((cmd, index) => (
                <div key={index} className="border-2 border-dashed border-border p-4">
                  <h4 className="font-mono font-bold text-accent-primary mb-2">{cmd.command}</h4>
                  <p className="text-text-secondary text-sm mb-3">{cmd.description}</p>
                  <div className="mb-3">
                    <p className="text-xs text-text-tertiary mb-1">Usage:</p>
                    <code className="block bg-black text-accent-tertiary p-2 font-mono text-xs">
                      {cmd.usage}
                    </code>
                  </div>
                  <div>
                    <p className="text-xs text-text-tertiary mb-1">Examples:</p>
                    {cmd.examples.map((example, i) => (
                      <code key={i} className="block bg-black text-accent-tertiary p-2 font-mono text-xs mb-1">
                        $ {example}
                      </code>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-mono text-xl font-bold mb-3">Understanding Output</h3>
            <div className="bg-background-secondary p-4">
              <h4 className="font-mono font-bold mb-3">Sample Output:</h4>
              <pre className="bg-black text-accent-tertiary p-4 font-mono text-xs overflow-x-auto">
{`RPM    | Power (HP) | Torque (lb-ft) | BSFC (g/kWh) | VE (%)
-------|------------|----------------|--------------|--------
1000   | 23.5       | 123.2          | 285.3        | 62.1
1500   | 48.7       | 170.4          | 268.7        | 71.4
2000   | 79.3       | 208.1          | 255.2        | 78.8
...
5500   | 412.8      | 393.9          | 242.1        | 89.3
6000   | 430.2      | 376.5          | 245.8        | 87.2

Validation Metrics:
- Peak Power: 430.2 HP @ 6000 RPM
- Peak Torque: 424.3 lb-ft @ 4400 RPM
- Error vs Dyno: 6.2%
- R² Correlation: 0.987`}
              </pre>
              <div className="mt-4 text-sm text-text-secondary space-y-2">
                <p><strong>Power (HP):</strong> Brake horsepower at flywheel (SAE J1349 corrected)</p>
                <p><strong>Torque (lb-ft):</strong> Engine torque output</p>
                <p><strong>BSFC (g/kWh):</strong> Brake Specific Fuel Consumption (lower is better)</p>
                <p><strong>VE (%):</strong> Volumetric Efficiency</p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'configuration',
      title: 'Configuration Reference',
      icon: FaCog,
      description: 'Engine parameters and settings',
      content: (
        <div className="space-y-6">
          <div>
            <h3 className="font-mono text-xl font-bold mb-3">Engine Configuration File</h3>
            <p className="text-text-secondary mb-4">
              Engine configurations are stored in JSON format. You can create custom configurations or modify existing ones.
            </p>
            <div className="bg-background-secondary p-4">
              <h4 className="font-mono font-bold mb-3">Sample Configuration (LS3 Stock):</h4>
              <pre className="bg-black text-accent-tertiary p-4 font-mono text-xs overflow-x-auto">
{`{
  "engine": {
    "id": "ls3_stock",
    "name": "GM LS3 6.2L V8 Stock",
    "family": "gm_ls",

    "basic": {
      "cylinders": 8,
      "displacement_liters": 6.162,
      "bore_mm": 103.25,
      "stroke_mm": 92.0,
      "compression_ratio": 10.7,
      "rod_length_mm": 155.65,
      "firing_order": "1-8-7-2-6-5-4-3"
    },

    "cylinder_head": {
      "part_id": "gm_ls3_243_head",
      "intake_valve_diameter_mm": 55.0,
      "exhaust_valve_diameter_mm": 45.0,
      "combustion_chamber_cc": 68.0
    },

    "camshaft": {
      "part_id": "gm_ls3_stock_cam",
      "intake_duration_deg": 204.0,
      "exhaust_duration_deg": 211.0,
      "intake_lift_mm": 14.0,
      "exhaust_lift_mm": 14.2,
      "lsa_deg": 116.5
    },

    "intake": {
      "manifold_id": "gm_ls3_stock_intake",
      "throttle_diameter_mm": 90.0,
      "plenum_volume_cc": 11000
    },

    "exhaust": {
      "manifold_id": "gm_ls3_stock_headers",
      "primary_diameter_mm": 44.5,
      "primary_length_mm": 800
    },

    "fuel": {
      "type": "gasoline_91_octane",
      "afr_stoich": 14.7
    },

    "environment": {
      "temperature_f": 77.0,
      "pressure_inhg": 29.92,
      "humidity_percent": 0.0
    }
  }
}`}
              </pre>
            </div>
          </div>

          <div>
            <h3 className="font-mono text-xl font-bold mb-4">Configuration Parameters</h3>
            <div className="space-y-4">
              {[
                {
                  section: 'Basic',
                  params: [
                    { name: 'cylinders', type: 'integer', desc: 'Number of cylinders (4, 6, 8, etc.)' },
                    { name: 'displacement_liters', type: 'float', desc: 'Total engine displacement in liters' },
                    { name: 'bore_mm', type: 'float', desc: 'Cylinder bore diameter in millimeters' },
                    { name: 'stroke_mm', type: 'float', desc: 'Piston stroke length in millimeters' },
                    { name: 'compression_ratio', type: 'float', desc: 'Static compression ratio (e.g., 10.7:1)' },
                    { name: 'rod_length_mm', type: 'float', desc: 'Connecting rod center-to-center length' },
                  ],
                },
                {
                  section: 'Cylinder Head',
                  params: [
                    { name: 'part_id', type: 'string', desc: 'Reference to parts database entry' },
                    { name: 'intake_valve_diameter_mm', type: 'float', desc: 'Intake valve diameter' },
                    { name: 'exhaust_valve_diameter_mm', type: 'float', desc: 'Exhaust valve diameter' },
                    { name: 'combustion_chamber_cc', type: 'float', desc: 'Chamber volume in cubic centimeters' },
                  ],
                },
                {
                  section: 'Camshaft',
                  params: [
                    { name: 'intake_duration_deg', type: 'float', desc: 'Intake duration @ 0.050" lift' },
                    { name: 'exhaust_duration_deg', type: 'float', desc: 'Exhaust duration @ 0.050" lift' },
                    { name: 'intake_lift_mm', type: 'float', desc: 'Intake valve lift in mm (with rocker ratio)' },
                    { name: 'exhaust_lift_mm', type: 'float', desc: 'Exhaust valve lift in mm' },
                    { name: 'lsa_deg', type: 'float', desc: 'Lobe separation angle in degrees' },
                  ],
                },
                {
                  section: 'Fuel',
                  params: [
                    { name: 'type', type: 'string', desc: 'Fuel type: gasoline_91_octane, gasoline_93_octane, e85' },
                    { name: 'afr_stoich', type: 'float', desc: 'Stoichiometric air-fuel ratio (14.7 for gasoline)' },
                  ],
                },
                {
                  section: 'Environment',
                  params: [
                    { name: 'temperature_f', type: 'float', desc: 'Ambient temperature in Fahrenheit (for SAE correction)' },
                    { name: 'pressure_inhg', type: 'float', desc: 'Barometric pressure in inches of mercury' },
                    { name: 'humidity_percent', type: 'float', desc: 'Relative humidity (0-100%)' },
                  ],
                },
              ].map((section, index) => (
                <div key={index} className="border-2 border-dashed border-border p-4">
                  <h4 className="font-mono font-bold text-accent-primary mb-3">{section.section}</h4>
                  <div className="space-y-2">
                    {section.params.map((param, i) => (
                      <div key={i} className="text-sm">
                        <code className="text-accent-tertiary font-mono">{param.name}</code>
                        <span className="text-text-tertiary ml-2">({param.type})</span>
                        <p className="text-text-secondary ml-4 mt-1">{param.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-background-secondary border-l-4 border-accent-primary p-4">
            <p className="text-sm flex items-start gap-2">
              <FaExclamationTriangle className="text-accent-primary mt-1 flex-shrink-0" />
              <span><strong>Important:</strong> Always run <code className="text-accent-tertiary px-1">piston validate</code> after modifying configurations to check for compatibility issues and physical constraints.</span>
            </p>
          </div>
        </div>
      ),
    },
    {
      id: 'parts-database',
      title: 'Parts Database Guide',
      icon: FaDatabase,
      description: 'Using real parts and compatibility',
      content: (
        <div className="space-y-6">
          <div>
            <h3 className="font-mono text-xl font-bold mb-3">Available Parts Families</h3>
            <p className="text-text-secondary mb-4">
              PISTON includes 50+ real parts from major manufacturers with validated specifications.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="border-2 border-dashed border-accent-primary p-4">
                <h4 className="font-mono font-bold mb-2">GM LS Family</h4>
                <ul className="text-sm text-text-secondary space-y-1">
                  <li>• LS1 (5.7L)</li>
                  <li>• LS2 (6.0L)</li>
                  <li>• LS3 (6.2L)</li>
                  <li>• LS7 (7.0L)</li>
                  <li>• LSA (6.2L SC)</li>
                  <li>• LS9 (6.2L SC)</li>
                  <li>• LT1 (6.2L DI)</li>
                  <li>• LT4 (6.2L SC DI)</li>
                </ul>
              </div>
              <div className="border-2 border-dashed border-accent-primary p-4">
                <h4 className="font-mono font-bold mb-2">Honda B/K Series</h4>
                <ul className="text-sm text-text-secondary space-y-1">
                  <li>• B16A (1.6L VTEC)</li>
                  <li>• B18C (1.8L VTEC)</li>
                  <li>• K20A (2.0L i-VTEC)</li>
                  <li>• K24A (2.4L i-VTEC)</li>
                  <li>• Turbo applications</li>
                </ul>
              </div>
              <div className="border-2 border-dashed border-accent-primary p-4">
                <h4 className="font-mono font-bold mb-2">Small Block Chevy</h4>
                <ul className="text-sm text-text-secondary space-y-1">
                  <li>• 350 (5.7L)</li>
                  <li>• 383 Stroker</li>
                  <li>• Classic components</li>
                  <li>• Aftermarket parts</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-mono text-xl font-bold mb-3">Browsing Parts</h3>
            <code className="block bg-black text-accent-tertiary p-3 font-mono text-sm">
              $ piston parts --list --family gm_ls
            </code>
            <div className="mt-3 bg-background-secondary p-4">
              <pre className="text-accent-tertiary font-mono text-xs">
{`GM LS Family Parts Database:

CYLINDER HEADS:
- gm_ls3_243_head      LS3 243 Casting (68cc, 2.16"/1.59" valves)
- gm_ls7_ls7_head      LS7 Titanium Intake (70cc, 2.20"/1.61" valves)
- gm_lsa_blower_head   LSA Supercharged Head (68cc, reinforced)

CAMSHAFTS:
- gm_ls3_stock_cam     LS3 Stock (204°/211° @ .050", .551"/.522" lift)
- gm_ls7_stock_cam     LS7 Stock (211°/230° @ .050", .591"/.604" lift)
- comp_cams_ls3_stage1 COMP Stage 1 (220°/228° @ .050", .624"/.624" lift)

INTAKE MANIFOLDS:
- gm_ls3_stock_intake  LS3 Stock Intake (11L plenum, 90mm TB)
- fast_lsxr_intake     FAST LSXR (13L plenum, 102mm TB, +25hp)

EXHAUST HEADERS:
- gm_ls3_stock_headers LS3 Factory (1.75" primary, 800mm length)
- kooks_longtube_175   Kooks Long Tube (1.75" primary, 1200mm)
- kooks_longtube_188   Kooks Long Tube (1.875" primary, 1200mm)`}
              </pre>
            </div>
          </div>

          <div>
            <h3 className="font-mono text-xl font-bold mb-3">Compatibility Checking</h3>
            <p className="text-text-secondary mb-3">
              PISTON automatically validates part compatibility based on:
            </p>
            <ul className="space-y-2 text-text-secondary">
              <li className="flex items-start gap-2">
                <FaCheckCircle className="w-4 h-4 text-accent-primary mt-1 flex-shrink-0" />
                <span><strong>Bore Spacing:</strong> Ensures heads fit block architecture</span>
              </li>
              <li className="flex items-start gap-2">
                <FaCheckCircle className="w-4 h-4 text-accent-primary mt-1 flex-shrink-0" />
                <span><strong>Valve Clearance:</strong> Prevents piston-to-valve contact</span>
              </li>
              <li className="flex items-start gap-2">
                <FaCheckCircle className="w-4 h-4 text-accent-primary mt-1 flex-shrink-0" />
                <span><strong>Port Matching:</strong> Flags mismatched intake/exhaust ports</span>
              </li>
              <li className="flex items-start gap-2">
                <FaCheckCircle className="w-4 h-4 text-accent-primary mt-1 flex-shrink-0" />
                <span><strong>Physical Fitment:</strong> Checks mounting patterns and bolt holes</span>
              </li>
            </ul>
            <div className="mt-4 bg-background-secondary p-4">
              <h4 className="font-mono font-bold mb-2">Example Validation Output:</h4>
              <pre className="bg-black text-accent-tertiary p-3 font-mono text-xs">
{`$ piston validate

✓ Configuration Valid

Compatibility Report:
✓ Cylinder head fits block (LS3 4.065" bore spacing)
✓ Piston-to-valve clearance: 0.120" (minimum 0.080")
✓ Intake manifold port match: Good
⚠ Header primary diameter: 1.75" (consider 1.875" for >450hp)

Recommendations:
• Consider FAST LSXR intake for +25hp gain
• Headers are adequate for current power level
• Camshaft duration well-suited for street use`}
              </pre>
            </div>
          </div>

          <div>
            <h3 className="font-mono text-xl font-bold mb-3">Custom Parts (Coming Soon)</h3>
            <div className="bg-background-secondary border-l-4 border-accent-tertiary p-4">
              <p className="text-sm text-text-secondary">
                Custom part creation is planned for a future release. You&apos;ll be able to define your own parts with custom specifications
                or import parts data from manufacturers. Stay tuned for updates on the <a href="/changelog" className="text-accent-primary hover:text-accent-tertiary underline">changelog</a>.
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'export',
      title: 'Export & Integration',
      icon: FaFileExport,
      description: 'Data export and workflow integration',
      content: (
        <div className="space-y-6">
          <div>
            <h3 className="font-mono text-xl font-bold mb-3">Export Formats</h3>
            <p className="text-text-secondary mb-4">
              PISTON supports CSV and JSON export formats for integration with external tools.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="border-2 border-dashed border-border p-4">
                <h4 className="font-mono font-bold text-accent-primary mb-2">CSV Export</h4>
                <p className="text-sm text-text-secondary mb-3">
                  Universal format for Excel, Google Sheets, MATLAB, Python pandas, R, etc.
                </p>
                <code className="block bg-black text-accent-tertiary p-2 font-mono text-xs mb-2">
                  $ piston export --format csv --output results.csv
                </code>
                <div className="bg-background-secondary p-2 mt-2">
                  <pre className="text-xs font-mono">
{`RPM,Power_HP,Torque_lbft,BSFC,VE
1000,23.5,123.2,285.3,62.1
1500,48.7,170.4,268.7,71.4
2000,79.3,208.1,255.2,78.8
...`}
                  </pre>
                </div>
              </div>

              <div className="border-2 border-dashed border-border p-4">
                <h4 className="font-mono font-bold text-accent-primary mb-2">JSON Export</h4>
                <p className="text-sm text-text-secondary mb-3">
                  Structured data for programming languages and APIs.
                </p>
                <code className="block bg-black text-accent-tertiary p-2 font-mono text-xs mb-2">
                  $ piston export --format json --output results.json
                </code>
                <div className="bg-background-secondary p-2 mt-2">
                  <pre className="text-xs font-mono">
{`{
  "engine_id": "ls3_stock",
  "timestamp": "2024-01-15T10:30:00Z",
  "results": [{
    "rpm": 1000,
    "power_hp": 23.5,
    "torque_lbft": 123.2,
    ...
  }]
}`}
                  </pre>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-mono text-xl font-bold mb-3">Integration Examples</h3>

            <div className="space-y-4">
              <div className="border-2 border-dashed border-border p-4">
                <h4 className="font-mono font-bold mb-2">Excel / Google Sheets Analysis</h4>
                <ol className="text-sm text-text-secondary space-y-2 list-decimal list-inside">
                  <li>Export data: <code className="text-accent-tertiary px-1">piston export --format csv --output data.csv</code></li>
                  <li>Open CSV in Excel or Google Sheets</li>
                  <li>Create charts: Select columns → Insert → Chart → Line Chart</li>
                  <li>Plot power and torque curves against RPM</li>
                  <li>Compare multiple configurations side-by-side</li>
                </ol>
              </div>

              <div className="border-2 border-dashed border-border p-4">
                <h4 className="font-mono font-bold mb-2">Python / MATLAB Analysis</h4>
                <p className="text-sm text-text-secondary mb-2">
                  Load CSV data for advanced analysis and visualization:
                </p>
                <div className="bg-background-secondary p-3">
                  <p className="text-xs text-text-tertiary mb-1">Python (pandas + matplotlib):</p>
                  <pre className="bg-black text-accent-tertiary p-2 font-mono text-xs">
{`import pandas as pd
import matplotlib.pyplot as plt

# Load data
df = pd.read_csv('results.csv')

# Plot power curve
plt.plot(df['RPM'], df['Power_HP'])
plt.xlabel('RPM')
plt.ylabel('Power (HP)')
plt.title('LS3 Power Curve')
plt.show()`}
                  </pre>
                </div>
              </div>

              <div className="border-2 border-dashed border-border p-4">
                <h4 className="font-mono font-bold mb-2">Dyno Comparison Workflow</h4>
                <ol className="text-sm text-text-secondary space-y-2 list-decimal list-inside">
                  <li>Export PISTON simulation: <code className="text-accent-tertiary px-1">piston export --format csv --output sim.csv</code></li>
                  <li>Export real dyno data from your dyno software</li>
                  <li>Load both datasets in Excel/Python</li>
                  <li>Plot on same graph to compare simulated vs. actual</li>
                  <li>Calculate error metrics and correlation (R²)</li>
                </ol>
              </div>

              <div className="border-2 border-dashed border-border p-4">
                <h4 className="font-mono font-bold mb-2">Build Planning Spreadsheet</h4>
                <p className="text-sm text-text-secondary mb-2">
                  Create a master spreadsheet with:
                </p>
                <ul className="text-sm text-text-secondary space-y-1 ml-4">
                  <li>• Multiple configuration exports (Stock, Stage 1, Stage 2, etc.)</li>
                  <li>• Parts cost estimates</li>
                  <li>• Power gains per dollar spent</li>
                  <li>• Side-by-side comparison charts</li>
                  <li>• Budget tracking and ROI analysis</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-accent-primary/10 border-2 border-accent-primary p-6">
            <h4 className="font-mono font-bold mb-3">Coming Soon: Advanced Integrations</h4>
            <ul className="space-y-2 text-text-secondary text-sm">
              <li>• <strong>CAD Integration:</strong> Import 3D models for port flow analysis</li>
              <li>• <strong>ECU Tuning:</strong> Export maps for HP Tuners, EFI Live</li>
              <li>• <strong>API Access:</strong> Programmatic access for automation</li>
              <li>• <strong>Cloud Sync:</strong> Save and share configurations online</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      id: 'faq',
      title: 'Frequently Asked Questions',
      icon: FaQuestionCircle,
      description: 'Common questions and troubleshooting',
      content: (
        <div className="space-y-6">
          <div>
            <p className="text-text-secondary mb-4">
              For comprehensive FAQ covering all topics, visit the dedicated <a href="/faq" className="text-accent-primary hover:text-accent-tertiary underline font-mono">FAQ page</a>.
            </p>
          </div>

          <div>
            <h3 className="font-mono text-xl font-bold mb-4">Quick Reference</h3>
            <div className="space-y-4">
              {[
                {
                  q: 'How accurate is PISTON?',
                  a: 'PISTON achieves <7% error when compared to certified dyno data for validated engines (LS3, LSA). Custom configurations may vary depending on how similar they are to validated platforms.',
                },
                {
                  q: 'Can I use PISTON for forced induction?',
                  a: 'Forced induction (turbochargers, superchargers) is coming in Phase 3 of development. Currently, PISTON supports naturally aspirated engines only.',
                },
                {
                  q: 'What file format should I use for export?',
                  a: 'Use CSV for spreadsheet analysis (Excel, Google Sheets) and general compatibility. Use JSON for programming/API integration or when you need structured metadata.',
                },
                {
                  q: 'How do I report a bug or request a feature?',
                  a: 'Report bugs and request features on our GitHub Issues page. Include your configuration file, steps to reproduce, and expected vs. actual results.',
                },
                {
                  q: 'Is PISTON free to use commercially?',
                  a: 'Yes, during the alpha phase PISTON is completely free for both personal and commercial use. Future pricing will be announced with at least 30 days notice.',
                },
                {
                  q: 'Can I create custom parts?',
                  a: 'Custom part creation is not available in the current alpha release but is planned for a future update. You can modify existing configurations manually via JSON editing.',
                },
              ].map((faq, index) => (
                <div key={index} className="border-2 border-dashed border-border p-4">
                  <h4 className="font-mono font-bold mb-2">{faq.q}</h4>
                  <p className="text-text-secondary text-sm">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-background-secondary p-6">
            <h4 className="font-mono font-bold mb-4">Need More Help?</h4>
            <div className="space-y-3 text-sm">
              <p className="flex items-center gap-2">
                <FaQuestionCircle className="text-accent-primary" />
                <span>Check the <a href="/faq" className="text-accent-primary hover:text-accent-tertiary underline">complete FAQ</a> for detailed answers</span>
              </p>
              <p className="flex items-center gap-2">
                <FaBook className="text-accent-primary" />
                <span>Visit the <a href="/help" className="text-accent-primary hover:text-accent-tertiary underline">Help Center</a> for troubleshooting guides</span>
              </p>
              <p className="flex items-center gap-2">
                <span className="text-accent-primary text-lg">💬</span>
                <span>Join the Discord community for live support</span>
              </p>
              <p className="flex items-center gap-2">
                <span className="text-accent-primary text-lg">📧</span>
                <span>Email: <a href="mailto:support@pistonsim.com" className="text-accent-primary hover:text-accent-tertiary underline">support@pistonsim.com</a></span>
              </p>
            </div>
          </div>
        </div>
      ),
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
            DOCUMENTATION
          </h1>
          <p className="text-lg md:text-xl text-text-secondary mb-12">
            Complete guide to using PISTON for professional engine simulation
          </p>
        </m.div>
      </section>

      {/* Documentation Sections */}
      <section className="py-20 bg-background-secondary">
        <div className="container-custom max-w-5xl">
          <div className="space-y-4">
            {docSections.map((section, index) => {
              const Icon = section.icon;
              const isExpanded = expandedSection === section.id;

              return (
                <m.div
                  key={section.id}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                  transition={{ delay: index * 0.05 }}
                  className="border-2 border-dashed border-border"
                >
                  {/* Section Header */}
                  <button
                    onClick={() => toggleSection(section.id)}
                    className="w-full p-6 flex items-center justify-between hover:bg-background-secondary transition-colors"
                    aria-expanded={isExpanded}
                  >
                    <div className="flex items-center gap-4">
                      <Icon className="w-6 h-6 text-accent-primary flex-shrink-0" />
                      <div className="text-left">
                        <h2 className="font-mono text-xl md:text-2xl font-bold">{section.title}</h2>
                        <p className="text-text-secondary text-sm mt-1">{section.description}</p>
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

                  {/* Section Content */}
                  {isExpanded && (
                    <div className="p-6 pt-0 border-t-2 border-dashed border-border">
                      {section.content}
                    </div>
                  )}
                </m.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Additional Resources */}
      <section className="py-20">
        <div className="container-custom">
          <m.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="max-w-4xl mx-auto"
          >
            <h2 className="font-mono text-3xl md:text-4xl font-bold mb-12 text-center">
              ADDITIONAL RESOURCES
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card
                icon={FaRocket}
                title="Case Studies"
                description="Real-world engine builds with before/after comparisons"
              >
                <a
                  href="/case-studies"
                  className="inline-block mt-4 text-accent-primary hover:text-accent-tertiary font-mono text-sm underline"
                >
                  View Examples →
                </a>
              </Card>
              <Card
                icon={FaChartLine}
                title="Help Center"
                description="Detailed guides and troubleshooting resources"
              >
                <a
                  href="/help"
                  className="inline-block mt-4 text-accent-primary hover:text-accent-tertiary font-mono text-sm underline"
                >
                  Get Help →
                </a>
              </Card>
              <Card
                icon={FaTerminal}
                title="Changelog"
                description="Version history and feature updates"
              >
                <a
                  href="/changelog"
                  className="inline-block mt-4 text-accent-primary hover:text-accent-tertiary font-mono text-sm underline"
                >
                  See Changes →
                </a>
              </Card>
            </div>
          </m.div>
        </div>
      </section>
    </main>
    <Footer />
    </>
  )
}
