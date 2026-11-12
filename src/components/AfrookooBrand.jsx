import { useEffect, useRef, useState } from 'react'

/**
 * AfrookooBrand:
 * - 3D turning face logo with continuous left-right oscillation and interactive cursor depth
 * - Typewriter / handwriting text animation for "Afrookoo Software" that fills, holds, and disappears
 */
export default function AfrookooBrand({ onClick, className = '' }) {
  // --- 3D Face Motion & Interactive Tilt ---
  const [tilt, setTilt] = useState({ x: 0, y: 0, active: false })
  const logoBoxRef = useRef(null)

  const handleMouseMove = (e) => {
    if (!logoBoxRef.current) return
    const rect = logoBoxRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    const deltaX = (e.clientX - centerX) / (rect.width / 2)
    const deltaY = (e.clientY - centerY) / (rect.height / 2)

    // Clamp tilt angles
    const rotY = Math.max(-28, Math.min(28, deltaX * 24))
    const rotX = Math.max(-20, Math.min(20, -deltaY * 16))

    setTilt({ x: rotX, y: rotY, active: true })
  }

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0, active: false })
  }

  // --- Typewriter / Handwriting Text Animation ---
  const fullText = 'Afrookoo Software'
  const [displayedLength, setDisplayedLength] = useState(fullText.length)
  const [phase, setPhase] = useState('holding') // 'typing' | 'holding' | 'erasing' | 'empty'
  const [cursorVisible, setCursorVisible] = useState(true)
  const isHoveredRef = useRef(false)

  // Blinking cursor
  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setCursorVisible((prev) => !prev)
    }, 530)
    return () => clearInterval(blinkInterval)
  }, [])

  // Text writing/erasing state machine
  useEffect(() => {
    // Respect reduced motion
    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (prefersReducedMotion) {
      setDisplayedLength(fullText.length)
      setPhase('holding')
      return
    }

    let timeoutId

    if (phase === 'typing') {
      if (displayedLength < fullText.length) {
        // Natural human typing jitter (60ms - 110ms)
        const jitter = Math.floor(Math.random() * 50) + 65
        timeoutId = setTimeout(() => {
          setDisplayedLength((prev) => prev + 1)
        }, jitter)
      } else {
        setPhase('holding')
      }
    } else if (phase === 'holding') {
      // Hold complete text for 3.8s so user can read it comfortably
      timeoutId = setTimeout(() => {
        // If user is actively hovering over brand, don't erase yet
        if (!isHoveredRef.current) {
          setPhase('erasing')
        } else {
          // Re-check after 1s
          setPhase('holding')
        }
      }, 3800)
    } else if (phase === 'erasing') {
      if (displayedLength > 0) {
        // Fast backspacing cadence (~35ms per char)
        timeoutId = setTimeout(() => {
          setDisplayedLength((prev) => prev - 1)
        }, 36)
      } else {
        setPhase('empty')
      }
    } else if (phase === 'empty') {
      // Pause empty before starting to write again (750ms)
      timeoutId = setTimeout(() => {
        setPhase('typing')
      }, 750)
    }

    return () => clearTimeout(timeoutId)
  }, [phase, displayedLength])

  // Split text into "Afrookoo" and "Software" for high-fidelity styling
  const currentStr = fullText.slice(0, displayedLength)
  let afrookooPart = ''
  let softwarePart = ''

  if (displayedLength <= 8) {
    afrookooPart = currentStr
  } else {
    afrookooPart = 'Afrookoo'
    // Characters after the 9th character ('Afrookoo ')
    if (displayedLength >= 10) {
      softwarePart = currentStr.slice(9)
    }
  }

  return (
    <a
      href="#top"
      onClick={(e) => {
        if (onClick) onClick(e)
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => {
        isHoveredRef.current = true
      }}
      onMouseLeave={() => {
        isHoveredRef.current = false
        handleMouseLeave()
      }}
      className={`flex items-center gap-2.5 group select-none cursor-pointer ${className}`}
      aria-label="Afrookoo Software Home"
    >
      {/* 3D Continuous Turning Logo Container */}
      <div
        ref={logoBoxRef}
        className="relative flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 perspective-1000 shrink-0"
      >
        {/* Ambient Neural Backlight Aura */}
        <div
          aria-hidden="true"
          className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-blue-600/35 via-cyan-400/20 to-blue-500/30 blur-md pointer-events-none neural-aura"
        />

        {/* 3D Rotating Face Badge */}
        <div
          className={`relative w-full h-full flex items-center justify-center rounded-xl bg-black/5 dark:bg-white/5 border border-black/[0.08] dark:border-white/[0.12] backdrop-blur-sm p-1 transition-transform duration-300 ease-out shadow-xs group-hover:border-blue-500/40 dark:group-hover:border-blue-400/40 ${
            tilt.active ? '' : 'face-3d-continuous'
          }`}
          style={
            tilt.active
              ? {
                  transform: `perspective(700px) rotateY(${tilt.y}deg) rotateX(${tilt.x}deg) translateZ(8px) scale(1.08)`,
                  filter: `drop-shadow(${tilt.y * -0.2}px 4px 10px rgba(37, 99, 235, 0.4))`,
                }
              : undefined
          }
        >
          {/* Logo Graphic */}
          <img
            src="/afrookoo-logo.png"
            alt="Afrookoo Brain & Face Logo"
            className="w-full h-full object-contain filter drop-shadow-sm select-none pointer-events-none"
            loading="eager"
            decoding="async"
          />

          {/* Holographic Circuit Sheen Overlay */}
          <div
            aria-hidden="true"
            className="absolute inset-0 rounded-xl overflow-hidden pointer-events-none"
          >
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/25 dark:via-cyan-300/20 to-transparent -translate-x-full face-sheen" />
          </div>
        </div>
      </div>

      {/* Brand Name with Handwriting / Writing & Disappearing Animation */}
      <div className="flex items-baseline gap-1.5 min-w-[145px] sm:min-w-[160px] text-left shrink-0">
        <span className="sr-only">Afrookoo Software</span>

        {/* "Afrookoo" Part */}
        <span
          className="text-base font-semibold tracking-tight text-[var(--text-heading)] inline-block transition-colors group-hover:text-blue-600 dark:group-hover:text-blue-400"
          aria-hidden="true"
        >
          {afrookooPart || (displayedLength === 0 ? '' : '')}
        </span>

        {/* "Software" Part */}
        {softwarePart ? (
          <span
            className="text-[10px] font-mono font-semibold tracking-widest text-[var(--accent)] uppercase inline-block"
            aria-hidden="true"
          >
            {softwarePart}
          </span>
        ) : null}

        {/* Dynamic Writing Cursor */}
        <span
          aria-hidden="true"
          className={`inline-block w-[2px] h-3.5 bg-[var(--accent)] ml-0.5 rounded-full transition-opacity duration-150 align-baseline self-center ${
            cursorVisible ? 'opacity-100 shadow-[0_0_8px_var(--accent)]' : 'opacity-0'
          }`}
        />
      </div>
    </a>
  )
}
