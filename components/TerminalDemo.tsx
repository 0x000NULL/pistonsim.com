'use client'

import { useEffect, useState, useRef, useCallback } from 'react'

const DEMO_LINES = [
  { text: '$ piston load --engine ls3_stock', type: 'command' as const, delay: 800 },
  { text: '✓ Loaded: GM LS3 6.2L V8 (Stock)', type: 'success' as const, delay: 400 },
  { text: '  Bore: 103.25mm | Stroke: 92.0mm | CR: 10.7:1', type: 'info' as const, delay: 200 },
  { text: '', type: 'blank' as const, delay: 300 },
  { text: '$ piston simulate --rpm-range 2000:6500 --step 500', type: 'command' as const, delay: 800 },
  { text: '⠋ Running thermodynamic simulation...', type: 'info' as const, delay: 600 },
  { text: '', type: 'blank' as const, delay: 200 },
  { text: ' RPM   │ Power (HP) │ Torque (lb-ft) │  VE %', type: 'header' as const, delay: 100 },
  { text: '───────┼────────────┼────────────────┼───────', type: 'header' as const, delay: 100 },
  { text: ' 2000  │    125.3   │     328.4      │  72.1', type: 'data' as const, delay: 150 },
  { text: ' 2500  │    172.8   │     362.8      │  76.8', type: 'data' as const, delay: 150 },
  { text: ' 3000  │    215.7   │     377.2      │  80.4', type: 'data' as const, delay: 150 },
  { text: ' 3500  │    264.1   │     395.5      │  84.2', type: 'data' as const, delay: 150 },
  { text: ' 4000  │    305.1   │     399.8      │  87.1', type: 'data' as const, delay: 150 },
  { text: ' 4500  │    352.9   │     411.4      │  89.3', type: 'data' as const, delay: 150 },
  { text: ' 5000  │    385.2   │     403.9      │  88.7', type: 'data' as const, delay: 150 },
  { text: ' 5500  │    418.6   │     399.2      │  87.2', type: 'data' as const, delay: 150 },
  { text: ' 6000  │    436.8   │     382.1      │  84.8', type: 'data' as const, delay: 150 },
  { text: ' 6500  │    430.2   │     346.8      │  80.1', type: 'data' as const, delay: 150 },
  { text: '', type: 'blank' as const, delay: 300 },
  { text: '✓ Simulation complete (0.42s)', type: 'success' as const, delay: 200 },
  { text: '  Peak Power:  436.8 HP @ 6000 RPM', type: 'result' as const, delay: 150 },
  { text: '  Peak Torque: 411.4 lb-ft @ 4500 RPM', type: 'result' as const, delay: 150 },
  { text: '  Error vs GM Dyno: 4.2% (R² = 0.987)', type: 'result' as const, delay: 150 },
  { text: '', type: 'blank' as const, delay: 500 },
  { text: '$ piston export --format csv --output results.csv', type: 'command' as const, delay: 600 },
  { text: '✓ Exported to results.csv (10 data points)', type: 'success' as const, delay: 400 },
]

const colorMap: Record<string, string> = {
  command: 'text-accent-tertiary',
  success: 'text-green-400',
  info: 'text-text-tertiary',
  header: 'text-text-secondary',
  data: 'text-text-primary',
  result: 'text-cyan',
  blank: '',
}

export default function TerminalDemo(): React.ReactElement {
  const [lines, setLines] = useState<typeof DEMO_LINES>([])
  const [isTyping, setIsTyping] = useState(false)
  const [hasStarted, setHasStarted] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  const runDemo = useCallback(() => {
    setLines([])
    setIsTyping(true)
    setHasStarted(true)
    let i = 0

    const addLine = () => {
      if (i >= DEMO_LINES.length) {
        setIsTyping(false)
        return
      }
      setLines((prev) => [...prev, DEMO_LINES[i]])
      i++
      timeoutRef.current = setTimeout(addLine, DEMO_LINES[i - 1].delay)
    }

    timeoutRef.current = setTimeout(addLine, 500)
  }, [])

  // Auto-start when visible
  useEffect(() => {
    if (hasStarted) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          runDemo()
        }
      },
      { threshold: 0.3 }
    )
    const el = containerRef.current
    if (el) observer.observe(el)
    return () => {
      if (el) observer.unobserve(el)
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  }, [hasStarted, runDemo])

  // Auto-scroll
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight
    }
  }, [lines])

  return (
    <div className="border-2 border-dashed border-border hover:border-accent-primary transition-colors bg-background-secondary overflow-hidden">
      {/* Title bar */}
      <div className="flex items-center justify-between px-4 py-2 bg-black border-b border-border">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/60" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
          <div className="w-3 h-3 rounded-full bg-green-500/60" />
        </div>
        <span className="font-mono text-xs text-text-tertiary">piston — simulation</span>
        <button
          onClick={runDemo}
          className="font-mono text-xs text-text-tertiary hover:text-accent-primary transition-colors"
          aria-label="Replay demo"
        >
          ↻ replay
        </button>
      </div>

      {/* Terminal content */}
      <div
        ref={containerRef}
        className="p-4 font-mono text-sm h-80 overflow-y-auto bg-black"
        role="log"
        aria-label="Terminal simulation demo"
      >
        {lines.map((line, i) => (
          <div key={i} className={`${colorMap[line.type]} leading-relaxed whitespace-pre`}>
            {line.text || '\u00A0'}
          </div>
        ))}
        {isTyping && (
          <span className="inline-block w-2 h-4 bg-accent-primary animate-pulse" />
        )}
        {!isTyping && hasStarted && (
          <div className="text-text-tertiary mt-2">$ <span className="inline-block w-2 h-4 bg-text-tertiary animate-pulse" /></div>
        )}
      </div>
    </div>
  )
}
