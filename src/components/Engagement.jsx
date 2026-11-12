import { useState, useRef } from 'react'
import { Section } from '../ui.jsx'
import Reveal from './Reveal.jsx'
import { engagementModels, shippingSteps } from '../data.js'
import { ArrowUpRight, Check, Sparkles } from './Icons.jsx'

// Visual cadence meter for each model
const cadenceMeters = {
  sprint: {
    tag: 'Rapid Delivery',
    bars: [true, true, false, false],
    sla: '48h Kickoff SLA',
  },
  turnkey: {
    tag: 'Full Architecture',
    bars: [true, true, true, true],
    sla: '60-Day Production SLA',
  },
  pod: {
    tag: 'Continuous Scaling',
    bars: [true, true, true, true],
    isWave: true,
    sla: 'Continuous Sprint Flow',
  },
}

function InteractiveEngagementCard({ model, idx, isSelected, onSelect }) {
  const cardRef = useRef(null)
  const [tilt, setTilt] = useState({ rx: 0, ry: 0, glareX: 50, glareY: 50 })
  const [isHovered, setIsHovered] = useState(false)

  const cadence = cadenceMeters[model.id] || cadenceMeters.sprint

  const handleMouseMove = (e) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2

    // Smooth subtle 3D tilt (max ±5 degrees)
    const ry = ((x - centerX) / centerX) * 5
    const rx = -((y - centerY) / centerY) * 5

    const glareX = (x / rect.width) * 100
    const glareY = (y / rect.height) * 100

    setTilt({ rx, ry, glareX, glareY })
  }

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    setTilt({ rx: 0, ry: 0, glareX: 50, glareY: 50 })
  }

  return (
    <div
      ref={cardRef}
      role="button"
      tabIndex={0}
      onClick={() => onSelect(model.id)}
      onKeyDown={(e) => e.key === 'Enter' && onSelect(model.id)}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: isHovered
          ? `perspective(900px) rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg) translateZ(12px)`
          : 'perspective(900px) rotateX(0deg) rotateY(0deg) translateZ(0px)',
        transition: isHovered
          ? 'transform 0.12s ease-out, box-shadow 0.3s ease'
          : 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s ease',
      }}
      className={`group relative flex flex-col justify-between h-full rounded-[24px] p-7 sm:p-8 border cursor-pointer select-none overflow-hidden transition-all duration-300 ${
        model.popular
          ? 'bg-white dark:bg-[#111115] border-blue-600/50 dark:border-blue-500/50 shadow-lg dark:shadow-2xl dark:shadow-blue-950/20'
          : 'bg-white dark:bg-[#0E0E10] border-zinc-200/90 dark:border-[#26262C] shadow-sm dark:shadow-xl'
      } ${
        isHovered
          ? 'border-zinc-950 dark:border-white shadow-2xl dark:shadow-2xl dark:shadow-blue-500/5'
          : ''
      }`}
    >
      {/* Dynamic Cursor Light Sheen (Specular Highlight) */}
      <div
        className="pointer-events-none absolute -inset-px rounded-[24px] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(360px circle at ${tilt.glareX}% ${tilt.glareY}%, rgba(255, 255, 255, 0.08), transparent 70%)`,
        }}
        aria-hidden="true"
      />

      {/* Featured Micro-Beacon on Popular Tier */}
      {model.popular && (
        <div className="absolute top-0 inset-x-8 h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
      )}

      {/* Card Content Wrapper */}
      <div className="relative z-10 flex flex-col justify-between h-full">
        <div>
          {/* Top Bar: Visual Cadence Meter & Index */}
          <div className="flex items-center justify-between pb-5 mb-6 border-b border-zinc-200/70 dark:border-[#222228]">
            {/* Cadence Meter */}
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1" aria-hidden="true">
                {cadence.bars.map((active, i) => (
                  <span
                    key={i}
                    className={`h-3 w-1 rounded-full transition-colors duration-300 ${
                      active
                        ? model.popular
                          ? 'bg-blue-600 dark:bg-[#8FA2FF]'
                          : 'bg-zinc-900 dark:bg-zinc-200'
                        : 'bg-zinc-200 dark:bg-zinc-800'
                    }`}
                  />
                ))}
              </div>
              <span className="font-mono text-[11px] uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                {cadence.tag}
              </span>
            </div>

            {/* Index / Arrow badge */}
            <div className="flex items-center gap-2">
              {model.popular && (
                <span className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider text-blue-700 dark:text-blue-300 font-semibold px-2 py-0.5 rounded-full bg-blue-50 dark:bg-blue-500/20 border border-blue-200/50 dark:border-blue-500/30">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-[#8FA2FF]" />
                  <span>Popular</span>
                </span>
              )}
              <div className="w-6 h-6 rounded-full border border-zinc-200 dark:border-zinc-800 flex items-center justify-center font-mono text-xs text-zinc-400 dark:text-zinc-500 transition-all duration-200 group-hover:border-zinc-950 dark:group-hover:border-white group-hover:text-zinc-950 dark:group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                <ArrowUpRight size={13} />
              </div>
            </div>
          </div>

          {/* Duration in Space Grotesk */}
          <div className="mb-2">
            <span
              className="font-medium text-2xl sm:text-3xl tracking-tight text-zinc-950 dark:text-white"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              {model.duration}
            </span>
          </div>

          {/* Model Title */}
          <h3 className="text-lg sm:text-xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 mb-2">
            {model.title}
          </h3>

          {/* Tagline */}
          <p className="text-xs sm:text-[13px] text-zinc-500 dark:text-zinc-400 leading-relaxed mb-6">
            {model.tagline}
          </p>

          {/* Divider */}
          <div className="border-t border-zinc-200/70 dark:border-[#222228] pt-5 mb-5" />

          {/* Inclusions Checklist */}
          <ul className="space-y-3">
            {model.features.map((feat) => (
              <li
                key={feat}
                className="flex items-start gap-2.5 text-xs text-zinc-700 dark:text-zinc-300 leading-snug transition-transform duration-200 group-hover:translate-x-0.5"
              >
                <span className="w-4 h-4 rounded-full bg-zinc-100 dark:bg-[#1A1A22] text-zinc-700 dark:text-zinc-300 flex items-center justify-center shrink-0 mt-0.5 transition-colors group-hover:bg-blue-600 group-hover:text-white dark:group-hover:bg-[#8FA2FF] dark:group-hover:text-zinc-950">
                  <Check size={10} />
                </span>
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Card Footer: Target Fit & Interactive Action Button */}
        <div className="pt-6 mt-8 border-t border-zinc-200/70 dark:border-[#222228] space-y-4">
          <div className="flex items-center justify-between text-[11px] font-mono text-zinc-500 dark:text-zinc-400">
            <span>SLA Standard</span>
            <span className="text-zinc-800 dark:text-zinc-200 font-medium">{cadence.sla}</span>
          </div>

          <div
            className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-xs font-semibold tracking-wide transition-all duration-300 ${
              model.popular
                ? 'bg-zinc-950 text-white dark:bg-white dark:text-zinc-950 shadow-md group-hover:bg-blue-600 dark:group-hover:bg-[#8FA2FF] dark:group-hover:text-zinc-950'
                : 'bg-zinc-100 dark:bg-[#181820] text-zinc-900 dark:text-white border border-zinc-200/80 dark:border-zinc-800 group-hover:border-zinc-950 dark:group-hover:border-white'
            }`}
          >
            <span>Select {model.title}</span>
            <span className="font-mono text-xs transition-transform duration-200 group-hover:translate-x-1">
              →
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Engagement({ onSelectLane }) {
  const [selectedLane, setSelectedLane] = useState('turnkey')

  const handleSelect = (laneId) => {
    setSelectedLane(laneId)
    if (onSelectLane) onSelectLane(laneId)
    const el = document.getElementById('contact')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <Section id="engagement" pad="py-24 sm:py-32 lg:py-40">
      {/* Section Header */}
      <Reveal>
        <div className="max-w-2xl mb-14 sm:mb-20">
          <span className="text-xs font-mono uppercase tracking-widest text-[var(--text-muted)] font-semibold block mb-3">
            Engagement Models
          </span>
          <div className="text-mask mb-5">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[var(--text-heading)] leading-[1.1] text-slide-up">
              How we partner and build.
            </h2>
          </div>
          <div className="text-mask">
            <p className="text-base sm:text-lg text-[var(--text-body)] leading-relaxed text-slide-up delay-1">
              Three structured engagement models tailored for speed, full IP ownership, and direct senior engineering access.
            </p>
          </div>
        </div>
      </Reveal>

      {/* 3 Interactive 3D Spatial Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
        {engagementModels.map((model, idx) => (
          <Reveal key={model.id} delay={idx * 80}>
            <InteractiveEngagementCard
              model={model}
              idx={idx}
              isSelected={selectedLane === model.id}
              onSelect={handleSelect}
            />
          </Reveal>
        ))}
      </div>

      {/* Production Lifecycle: 5-Stage Pipeline */}
      <Reveal delay={120}>
        <div className="mt-24 sm:mt-32 border-t border-[var(--border-primary)] pt-16">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 mb-12">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[var(--accent)] font-semibold block mb-2">
                Production Lifecycle
              </span>
              <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[var(--text-heading)]">
                From brief to production.
              </h3>
            </div>
            <span className="font-mono text-xs text-[var(--text-muted)]">
              Structured 5-Stage Delivery Pipeline
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4">
            {shippingSteps.map((s) => (
              <div
                key={s.step}
                className="group/step p-4 -mx-2 rounded-2xl transition-all duration-300 hover:bg-zinc-50/90 dark:hover:bg-[#111115] hover:-translate-y-1 hover:shadow-xs border border-transparent hover:border-zinc-200/60 dark:hover:border-zinc-800/80 cursor-default"
              >
                <span className="text-xs text-[var(--accent)] font-mono font-semibold block transition-transform duration-200 group-hover/step:translate-x-0.5">
                  {s.step}
                </span>
                <h4 className="text-base font-semibold text-[var(--text-heading)] mt-1.5 mb-1 transition-colors">
                  {s.name}
                </h4>
                <p className="text-xs font-mono text-zinc-500 dark:text-zinc-400 mb-2">
                  {s.timing}
                </p>
                <p className="text-sm text-[var(--text-body)] leading-relaxed">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </Section>
  )
}
