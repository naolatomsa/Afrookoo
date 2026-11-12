import { useState } from 'react'
import { Section, Button } from '../ui.jsx'
import Reveal from './Reveal.jsx'
import { partners } from '../data.js'
import { ArrowRight, ArrowUpRight } from './Icons.jsx'

function PartnerShowcase() {
  const [hoveredIdx, setHoveredIdx] = useState(null)

  const partnerDetails = [
    {
      name: 'Awash Bank',
      badge: 'Private Commercial Banking',
      code: 'AB',
      tagline: 'Leading Private Commercial Bank in Ethiopia',
    },
    {
      name: 'Oromo Research Association',
      badge: 'Research & Retail Publishing',
      code: 'ORA',
      tagline: 'Academic Research, Digital Archives & Retail Operations',
    },
    {
      name: 'Kerchanshe',
      badge: 'Global Agro-Commodity Export',
      code: 'KC',
      tagline: 'Global Agro-Commodity & Enterprise Producer',
    },
    {
      name: 'Rift Valley University',
      badge: 'Higher Education Institution',
      code: 'RVU',
      tagline: 'Pioneering Higher Education & Academic Systems',
    },
  ]

  const activePartner = hoveredIdx !== null ? partnerDetails[hoveredIdx] : null

  return (
    <div className="pt-10 border-t border-[var(--border-primary)]">
      {/* Top Overline */}
      <div className="flex items-center justify-between mb-8">
        <span className="text-xs font-mono uppercase tracking-widest text-[var(--text-muted)] font-semibold">
          Institutional Partners &amp; Collaborators
        </span>
      </div>

      {/* Single Fluid Interactive Line: Zero Cards, Focus-Dim Interaction */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 sm:gap-4 py-3">
        {partnerDetails.map((p, idx) => {
          const isHovered = hoveredIdx === idx
          const isOtherHovered = hoveredIdx !== null && !isHovered

          return (
            <div
              key={p.name}
              onMouseEnter={() => setHoveredIdx(idx)}
              onMouseLeave={() => setHoveredIdx(null)}
              className={`group flex items-center gap-3 cursor-pointer select-none transition-all duration-300 ${
                isOtherHovered ? 'opacity-35 scale-[0.98]' : 'opacity-100 scale-100'
              }`}
            >
              {/* Refined Dot Indicator */}
              <span
                className={`h-2 w-2 rounded-full transition-all duration-300 ${
                  isHovered ? 'bg-[var(--accent)] scale-125' : 'bg-zinc-400 dark:bg-zinc-600'
                }`}
              />

              <div>
                <h4
                  className={`text-base sm:text-lg font-semibold tracking-tight transition-colors duration-200 ${
                    isHovered
                      ? 'text-[var(--accent)]'
                      : 'text-[var(--text-heading)]'
                  }`}
                >
                  {p.name}
                </h4>
                <p className="text-[11px] font-mono text-[var(--text-muted)] tracking-wide">
                  {p.badge}
                </p>
              </div>

              {/* Separator for desktop */}
              {idx < partnerDetails.length - 1 && (
                <span className="hidden lg:inline-block text-zinc-300 dark:text-zinc-800 ml-4 font-mono select-none" aria-hidden="true">
                  ·
                </span>
              )}
            </div>
          )
        })}
      </div>

      {/* Dynamic Status / Verification Sub-line */}
      <div className="h-6 mt-4 flex items-center text-xs font-mono transition-all duration-300">
        {activePartner ? (
          <span className="text-[var(--accent)] animate-text-appear flex items-center gap-2">
            <span className="text-[var(--text-muted)]">Verified Scope:</span>
            <span className="font-medium text-[var(--text-heading)]">{activePartner.tagline}</span>
          </span>
        ) : (
          <span className="text-[var(--text-muted)] text-[11px]">
            Hover to view institutional partnership scope
          </span>
        )}
      </div>
    </div>
  )
}

export default function Hero() {
  return (
    <Section id="top" pad="pt-36 pb-20 sm:pt-44 sm:pb-28 lg:pt-52 lg:pb-36">
      <div className="max-w-5xl">
        <Reveal>
          {/* Main Headline */}
          <div className="text-mask mb-8">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-semibold tracking-tight text-[var(--text-heading)] leading-[1.05] text-slide-up">
              <span className="sr-only">Afrookoo Software — </span>Engineering software systems that businesses depend on.
            </h1>
          </div>

          {/* Concise Subtitle */}
          <div className="text-mask mb-12">
            <p className="text-lg sm:text-xl lg:text-2xl text-[var(--text-body)] leading-relaxed max-w-2xl font-normal text-slide-up delay-1">
              We design and build high-performance web platforms, modern retail systems, and native mobile applications.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 mb-20">
            <Button href="#contact" variant="primary" className="group">
              <span>Start a Project</span>
              <ArrowRight size={15} className="transition-transform duration-200 group-hover:translate-x-1" />
            </Button>

            <Button href="#work" variant="outline" className="group">
              <span>Explore Selected Work</span>
              <ArrowUpRight size={15} className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Button>
          </div>
        </Reveal>

        {/* Institutional Partners: Zero Cards, Cool Interactive Single-Line Spotlight */}
        <Reveal delay={100}>
          <PartnerShowcase />
        </Reveal>
      </div>

      {/* Compact Stats Strip: Light and Dark Mode Adaptive */}
      <Reveal delay={140}>
        <div className="mt-20 sm:mt-28 w-full max-w-[1152px]">
          <section
            className="rounded-[20px] overflow-hidden bg-white dark:bg-[#0E0E10] border border-zinc-200/90 dark:border-[#2A2A30] grid grid-cols-2 md:grid-cols-4 shadow-sm dark:shadow-2xl transition-colors duration-300"
            aria-label="Company Statistics"
          >
            {/* Stat 1 */}
            <div className="p-[20px_24px] sm:p-[20px_28px] flex flex-col justify-center min-w-0 border-r border-b md:border-b-0 border-zinc-200/80 dark:border-[#2A2A30]">
              <p
                className="font-medium text-[40px] leading-none tracking-[-0.04em] text-zinc-950 dark:text-white whitespace-nowrap"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                10<span className="text-blue-600 dark:text-[#8FA2FF]">+</span>
              </p>
              <div className="flex items-center gap-1.5 mt-1.5">
                <h3 className="font-medium text-[14px] leading-tight text-zinc-900 dark:text-white whitespace-nowrap">
                  Platforms Shipped
                </h3>
              </div>
              <p className="font-normal text-[13px] leading-snug text-zinc-500 dark:text-[#A3A3A0] mt-1 whitespace-nowrap overflow-hidden text-ellipsis">
                Modern POS, ERP &amp; iOS systems
              </p>
            </div>

            {/* Stat 2 */}
            <div className="p-[20px_24px] sm:p-[20px_28px] flex flex-col justify-center min-w-0 md:border-r border-b md:border-b-0 border-zinc-200/80 dark:border-[#2A2A30]">
              <p
                className="font-medium text-[40px] leading-none tracking-[-0.04em] text-zinc-950 dark:text-white whitespace-nowrap"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                99.99<span className="text-blue-600 dark:text-[#8FA2FF]">%</span>
              </p>
              <div className="flex items-center gap-1.5 mt-1.5">
                <h3 className="font-medium text-[14px] leading-tight text-zinc-900 dark:text-white whitespace-nowrap">
                  Uptime Standard
                </h3>
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-[#8FA2FF] inline-block shrink-0" aria-hidden="true" />
              </div>
              <p className="font-normal text-[13px] leading-snug text-zinc-500 dark:text-[#A3A3A0] mt-1 whitespace-nowrap overflow-hidden text-ellipsis">
                Zero-drift production SLA
              </p>
            </div>

            {/* Stat 3 */}
            <div className="p-[20px_24px] sm:p-[20px_28px] flex flex-col justify-center min-w-0 border-r border-zinc-200/80 dark:border-[#2A2A30]">
              <p
                className="font-medium text-[40px] leading-none tracking-[-0.04em] text-zinc-950 dark:text-white whitespace-nowrap"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                <span className="text-zinc-400 dark:text-[#8A8A87]">&lt;</span> 1.8<span className="text-blue-600 dark:text-[#8FA2FF]">s</span>
              </p>
              <div className="flex items-center gap-1.5 mt-1.5">
                <h3 className="font-medium text-[14px] leading-tight text-zinc-900 dark:text-white whitespace-nowrap">
                  Checkout Latency
                </h3>
              </div>
              <p className="font-normal text-[13px] leading-snug text-zinc-500 dark:text-[#A3A3A0] mt-1 whitespace-nowrap overflow-hidden text-ellipsis">
                Sub-second edge transactions
              </p>
            </div>

            {/* Stat 4 */}
            <div className="p-[20px_24px] sm:p-[20px_28px] flex flex-col justify-center min-w-0">
              <p
                className="font-medium text-[40px] leading-none tracking-[-0.04em] text-zinc-950 dark:text-white whitespace-nowrap"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                100<span className="text-blue-600 dark:text-[#8FA2FF]">%</span>
              </p>
              <div className="flex items-center gap-1.5 mt-1.5">
                <h3 className="font-medium text-[14px] leading-tight text-zinc-900 dark:text-white whitespace-nowrap">
                  IP Ownership
                </h3>
              </div>
              <p className="font-normal text-[13px] leading-snug text-zinc-500 dark:text-[#A3A3A0] mt-1 whitespace-nowrap overflow-hidden text-ellipsis">
                Full source code handover
              </p>
            </div>
          </section>
        </div>
      </Reveal>
    </Section>
  )
}
