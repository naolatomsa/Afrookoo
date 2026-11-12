import { useState } from 'react'

export default function HeroGraphic() {
  const [tilt, setTilt] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 14
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -14
    setTilt({ x, y })
  }

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 })
  }

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full max-w-lg mx-auto aspect-square flex items-center justify-center select-none"
      style={{
        perspective: '1000px',
      }}
    >
      {/* 3D Floating Isometric Glass Sculpture */}
      <div
        className="relative w-full h-full flex items-center justify-center transition-transform duration-200 ease-out"
        style={{
          transform: `rotateX(${tilt.y}deg) rotateY(${tilt.x}deg)`,
        }}
      >
        <svg
          viewBox="0 0 500 500"
          className="w-full h-full max-w-[420px] drop-shadow-xl overflow-visible text-slate-800 dark:text-white"
        >
          <defs>
            <linearGradient id="glassTop" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#2563eb" stopOpacity="0.12" />
            </linearGradient>

            <linearGradient id="glassLeft" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#2563eb" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#0f172a" stopOpacity="0.3" />
            </linearGradient>

            <linearGradient id="glassRight" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.22" />
              <stop offset="100%" stopColor="#1e293b" stopOpacity="0.35" />
            </linearGradient>
          </defs>

          {/* Background subtle geometric coordinate rings */}
          <circle cx="250" cy="250" r="170" fill="none" stroke="currentColor" strokeOpacity="0.08" strokeWidth="1" strokeDasharray="4 6" />
          <circle cx="250" cy="250" r="110" fill="none" stroke="currentColor" strokeOpacity="0.1" strokeWidth="1" />

          {/* Lower Isometric Foundation Wireframe */}
          <polygon
            points="250,330 380,260 250,190 120,260"
            fill="none"
            stroke="currentColor"
            strokeOpacity="0.18"
            strokeWidth="1.2"
            strokeDasharray="5 5"
          />

          {/* Central Isometric Polyhedron Cube */}
          <g className="animate-float">
            {/* Top Face */}
            <polygon
              points="250,140 350,195 250,250 150,195"
              fill="url(#glassTop)"
              stroke="currentColor"
              strokeOpacity="0.35"
              strokeWidth="1.2"
            />

            {/* Left Face */}
            <polygon
              points="150,195 250,250 250,370 150,315"
              fill="url(#glassLeft)"
              stroke="currentColor"
              strokeOpacity="0.25"
              strokeWidth="1.2"
            />

            {/* Right Face */}
            <polygon
              points="250,250 350,195 350,315 250,370"
              fill="url(#glassRight)"
              stroke="currentColor"
              strokeOpacity="0.25"
              strokeWidth="1.2"
            />

            {/* Internal Structural Vectors */}
            <polygon
              points="250,180 310,215 250,250 190,215"
              fill="currentColor"
              fillOpacity="0.03"
              stroke="currentColor"
              strokeOpacity="0.28"
              strokeWidth="1"
            />
            <line x1="250" y1="250" x2="250" y2="330" stroke="currentColor" strokeOpacity="0.25" strokeWidth="1" />
            <line x1="190" y1="215" x2="190" y2="295" stroke="currentColor" strokeOpacity="0.18" strokeWidth="1" />
            <line x1="310" y1="215" x2="310" y2="295" stroke="currentColor" strokeOpacity="0.18" strokeWidth="1" />
          </g>
        </svg>

        {/* Clean Frosted Glass Badge 1: Full-Stack & Web APIs */}
        <div className="absolute top-2 left-2 sm:left-4 rounded-xl border border-zinc-200/90 dark:border-white/10 bg-white/95 dark:bg-zinc-900/90 px-3.5 py-2.5 shadow-xl backdrop-blur-xl font-mono text-xs flex items-center gap-2.5">
          <div className="h-2 w-2 rounded-full bg-blue-500" />
          <div>
            <div className="font-semibold text-xs text-zinc-900 dark:text-white">Full-Stack &amp; Web Systems</div>
            <div className="text-[10px] text-zinc-600 dark:text-zinc-400 font-sans">React, Next.js, Node, NestJS, Spring</div>
          </div>
        </div>

        {/* Clean Frosted Glass Badge 2: Mobile Engineering */}
        <div className="absolute top-1/2 -right-2 sm:-right-4 -translate-y-1/2 rounded-xl border border-zinc-200/90 dark:border-white/10 bg-white/95 dark:bg-zinc-900/90 px-3.5 py-2.5 shadow-xl backdrop-blur-xl font-mono text-xs flex items-center gap-2.5">
          <div className="h-2 w-2 rounded-full bg-indigo-500" />
          <div>
            <div className="font-semibold text-xs text-zinc-900 dark:text-white">Mobile Engineering</div>
            <div className="text-[10px] text-zinc-600 dark:text-zinc-400 font-sans">Native iOS (Swift) &amp; Android (Kotlin)</div>
          </div>
        </div>

        {/* Clean Frosted Glass Badge 3: Cloud & Enterprise Infrastructure */}
        <div className="absolute bottom-2 left-4 sm:left-10 rounded-xl border border-zinc-200/90 dark:border-white/10 bg-white/95 dark:bg-zinc-900/90 px-3.5 py-2.5 shadow-xl backdrop-blur-xl font-mono text-xs flex items-center gap-2.5">
          <div className="h-2 w-2 rounded-full bg-emerald-500" />
          <div>
            <div className="font-semibold text-xs text-zinc-900 dark:text-white">Cloud &amp; Core Systems</div>
            <div className="text-[10px] text-zinc-600 dark:text-zinc-400 font-sans">AWS, Kubernetes, ERP, POS &amp; Microservices</div>
          </div>
        </div>
      </div>
    </div>
  )
}
