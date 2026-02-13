'use client'

import { useEffect, useState, useRef } from 'react'

/**
 * Interactive SVG piston animation showing a simplified engine cycle.
 * Displays crank angle, piston position, and cycle phase in real-time.
 */
export default function PistonAnimation(): React.ReactElement {
  const [angle, setAngle] = useState(0)
  const [isRunning, setIsRunning] = useState(true)
  const [rpm, setRpm] = useState(800)
  const rafRef = useRef<number>(0)
  const lastTimeRef = useRef<number>(0)

  useEffect(() => {
    if (!isRunning) return

    const animate = (time: number) => {
      if (lastTimeRef.current === 0) lastTimeRef.current = time
      const delta = time - lastTimeRef.current
      lastTimeRef.current = time

      // Convert RPM to degrees per millisecond
      const degsPerMs = (rpm * 360) / 60000
      setAngle((prev) => (prev + degsPerMs * delta) % 720)
      rafRef.current = requestAnimationFrame(animate)
    }

    rafRef.current = requestAnimationFrame(animate)
    return () => {
      cancelAnimationFrame(rafRef.current)
      lastTimeRef.current = 0
    }
  }, [isRunning, rpm])

  // Piston position from crank angle (simplified kinematics)
  const crankRadius = 30
  const rodLength = 80
  const radians = (angle * Math.PI) / 180
  const pistonY =
    crankRadius * Math.cos(radians) +
    Math.sqrt(rodLength * rodLength - crankRadius * crankRadius * Math.sin(radians) * Math.sin(radians))

  // Normalize piston Y for SVG (top = TDC)
  const pistonTop = 60
  const pistonPos = pistonTop + (rodLength + crankRadius - pistonY)

  // Crank pin position
  const crankCenterY = 200
  const crankCenterX = 100
  const crankPinX = crankCenterX + crankRadius * Math.sin(radians)
  const crankPinY = crankCenterY - crankRadius * Math.cos(radians)

  // Determine stroke phase (4-stroke: 720° = full cycle)
  const phase = angle < 180 ? 'INTAKE' : angle < 360 ? 'COMPRESSION' : angle < 540 ? 'POWER' : 'EXHAUST'
  const phaseColor =
    phase === 'INTAKE' ? '#0693e3' : phase === 'COMPRESSION' ? '#f59e0b' : phase === 'POWER' ? '#ef4444' : '#22c55e'

  // Simulated pressure (arbitrary units for visualization)
  const pressure =
    phase === 'POWER'
      ? 40 + 60 * Math.sin(((angle - 360) / 180) * Math.PI)
      : phase === 'COMPRESSION'
        ? 10 + 30 * ((angle - 180) / 180)
        : phase === 'EXHAUST'
          ? 10 + 5 * Math.sin(((angle - 540) / 180) * Math.PI)
          : 5

  return (
    <div className="border-2 border-dashed border-border hover:border-accent-primary transition-colors bg-background-secondary p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-display font-semibold text-lg text-cyan">LIVE ENGINE CYCLE</h3>
        <div className="flex items-center gap-3">
          <button
            onClick={() => setRpm(Math.max(400, rpm - 200))}
            className="text-text-tertiary hover:text-text-primary font-mono text-sm px-2 py-1 border border-border hover:border-accent-primary transition-colors"
            aria-label="Decrease RPM"
          >
            −
          </button>
          <span className="font-mono text-sm text-text-secondary w-20 text-center">{rpm} RPM</span>
          <button
            onClick={() => setRpm(Math.min(7000, rpm + 200))}
            className="text-text-tertiary hover:text-text-primary font-mono text-sm px-2 py-1 border border-border hover:border-accent-primary transition-colors"
            aria-label="Increase RPM"
          >
            +
          </button>
          <button
            onClick={() => setIsRunning(!isRunning)}
            className="font-mono text-xs px-3 py-1 border border-accent-primary text-accent-primary hover:bg-accent-primary hover:text-white transition-colors"
          >
            {isRunning ? 'PAUSE' : 'RUN'}
          </button>
        </div>
      </div>

      <div className="flex gap-6 items-start">
        {/* SVG Animation */}
        <svg viewBox="30 0 140 260" className="w-40 h-64 flex-shrink-0" aria-label="Piston animation">
          {/* Cylinder walls */}
          <rect x="65" y="30" width="70" height="140" fill="none" stroke="#333" strokeWidth="2" strokeDasharray="4 2" />

          {/* Combustion chamber glow during power stroke */}
          {phase === 'POWER' && (
            <rect
              x="67"
              y="32"
              width="66"
              height={Math.max(2, pistonPos - 32)}
              fill={`rgba(239, 68, 68, ${0.1 + 0.2 * Math.sin(((angle - 360) / 180) * Math.PI)})`}
              rx="1"
            />
          )}

          {/* Piston */}
          <rect
            x="70"
            y={pistonPos}
            width="60"
            height="20"
            fill="#1a1a1a"
            stroke="#0693e3"
            strokeWidth="1.5"
            rx="2"
          />
          {/* Piston pin */}
          <circle cx="100" cy={pistonPos + 10} r="3" fill="#0693e3" />

          {/* Connecting rod */}
          <line
            x1="100"
            y1={pistonPos + 10}
            x2={crankPinX}
            y2={crankPinY}
            stroke="#666"
            strokeWidth="3"
            strokeLinecap="round"
          />

          {/* Crankshaft */}
          <circle cx={crankCenterX} cy={crankCenterY} r="5" fill="#333" stroke="#666" strokeWidth="1" />
          <circle cx={crankPinX} cy={crankPinY} r="4" fill="#0693e3" />
          <line
            x1={crankCenterX}
            y1={crankCenterY}
            x2={crankPinX}
            y2={crankPinY}
            stroke="#444"
            strokeWidth="4"
            strokeLinecap="round"
          />

          {/* Valve indicators */}
          <rect
            x="72"
            y="28"
            width="12"
            height="6"
            fill={phase === 'INTAKE' ? '#0693e3' : '#1a1a1a'}
            stroke="#333"
            strokeWidth="0.5"
            rx="1"
          />
          <rect
            x="116"
            y="28"
            width="12"
            height="6"
            fill={phase === 'EXHAUST' ? '#22c55e' : '#1a1a1a'}
            stroke="#333"
            strokeWidth="0.5"
            rx="1"
          />
          <text x="78" y="25" fill="#666" fontSize="6" textAnchor="middle" fontFamily="monospace">IN</text>
          <text x="122" y="25" fill="#666" fontSize="6" textAnchor="middle" fontFamily="monospace">EX</text>
        </svg>

        {/* Data readout */}
        <div className="flex-1 font-mono text-xs space-y-2">
          <div className="flex justify-between border-b border-border pb-1">
            <span className="text-text-tertiary">PHASE</span>
            <span style={{ color: phaseColor }} className="font-bold">{phase}</span>
          </div>
          <div className="flex justify-between border-b border-border pb-1">
            <span className="text-text-tertiary">CRANK °</span>
            <span className="text-text-primary">{angle.toFixed(0)}°</span>
          </div>
          <div className="flex justify-between border-b border-border pb-1">
            <span className="text-text-tertiary">PRESSURE</span>
            <span className="text-text-primary">{pressure.toFixed(1)} bar</span>
          </div>
          <div className="flex justify-between border-b border-border pb-1">
            <span className="text-text-tertiary">CYCLE</span>
            <span className="text-text-primary">{Math.floor(angle / 720) + 1}</span>
          </div>

          {/* Mini pressure bar */}
          <div className="pt-2">
            <div className="text-text-tertiary mb-1">CYL PRESSURE</div>
            <div className="h-2 bg-black border border-border overflow-hidden">
              <div
                className="h-full transition-all duration-75"
                style={{
                  width: `${Math.min(100, pressure)}%`,
                  backgroundColor: phaseColor,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
