import { Section, Heading } from '../ui.jsx'
import Reveal from './Reveal.jsx'
import { caseStudies } from '../data.js'

export default function Portfolio() {
  const cs = caseStudies[0]

  const branches = [
    { num: '01', name: '4 Kilo Store & Head Office', role: 'Central Depot & Retail' },
    { num: '02', name: 'Piazza Distribution Center', role: 'High-Volume Book Depot' },
    { num: '03', name: 'Bole Retail Branch', role: 'Commercial Retail Point' },
    { num: '04', name: 'Sarbet Depository', role: 'Academic Publishing Archive' },
  ]

  return (
    <Section id="work" pad="py-24 sm:py-32 lg:py-40">
      <Heading
        title="Featured Case Study"
        subtitle="A retail platform engineered for high operational reliability."
      />

      {/* Editorial Headline & Overview */}
      <div className="space-y-16">
        <Reveal>
          <div className="max-w-4xl space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-[var(--accent)] font-semibold block">
              Flagship Production Platform · {cs.client}
            </span>

            <div className="text-mask">
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[var(--text-heading)] leading-[1.1] text-slide-up">
                A high-velocity retail POS and unified multi-branch inventory engine.
              </h3>
            </div>
          </div>
        </Reveal>

        {/* Two-Column Open Editorial Spread */}
        <Reveal delay={80}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 text-base text-[var(--text-body)] leading-relaxed border-t border-[var(--border-primary)] pt-10">
            <div>
              <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-[var(--text-heading)] mb-3">
                The Operational Reality
              </h4>
              <p>
                The Oromo Research Association (ORA) operates multiple retail bookstores and publication centers. Disconnected counter registers and manual stock updates caused checkout queues to stall, leading to inventory discrepancies and zero real-time visibility across branch sales.
              </p>
            </div>

            <div>
              <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-[var(--text-heading)] mb-3">
                The Engineering Solution
              </h4>
              <p>
                We engineered a high-velocity POS and multi-branch retail inventory platform. Cashiers scan barcodes, process orders, and print thermal receipts with sub-second response times. All branch terminals connect directly to a centralized inventory core, providing automated stock reconciliation, instant audit trails, and consistent catalog control across every store.
              </p>
            </div>
          </div>
        </Reveal>

        {/* Compact Stats Strip: Light and Dark Mode Adaptive */}
        <Reveal delay={120}>
          <div className="w-full max-w-[1152px]">
            <section
              className="rounded-[20px] overflow-hidden bg-white dark:bg-[#0E0E10] border border-zinc-200/90 dark:border-[#2A2A30] grid grid-cols-2 md:grid-cols-4 shadow-sm dark:shadow-2xl transition-colors duration-300"
              aria-label="ORA POS Impact Statistics"
            >
              {/* Stat 1 */}
              <div className="p-[20px_24px] sm:p-[20px_28px] flex flex-col justify-center min-w-0 border-r border-b md:border-b-0 border-zinc-200/80 dark:border-[#2A2A30]">
                <p
                  className="font-medium text-[40px] leading-none tracking-[-0.04em] text-zinc-950 dark:text-white whitespace-nowrap"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  <span className="text-zinc-400 dark:text-[#8A8A87]">&lt;</span> 1.8<span className="text-blue-600 dark:text-[#8FA2FF]">s</span>
                </p>
                <div className="flex items-center gap-1.5 mt-1.5">
                  <h3 className="font-medium text-[14px] leading-tight text-zinc-900 dark:text-white whitespace-nowrap">
                    Checkout Velocity
                  </h3>
                </div>
                <p className="font-normal text-[13px] leading-snug text-zinc-500 dark:text-[#A3A3A0] mt-1 whitespace-nowrap overflow-hidden text-ellipsis">
                  Barcode scan to printed receipt
                </p>
              </div>

              {/* Stat 2 */}
              <div className="p-[20px_24px] sm:p-[20px_28px] flex flex-col justify-center min-w-0 md:border-r border-b md:border-b-0 border-zinc-200/80 dark:border-[#2A2A30]">
                <p
                  className="font-medium text-[40px] leading-none tracking-[-0.04em] text-zinc-950 dark:text-white whitespace-nowrap"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  99.9<span className="text-blue-600 dark:text-[#8FA2FF]">%</span>
                </p>
                <div className="flex items-center gap-1.5 mt-1.5">
                  <h3 className="font-medium text-[14px] leading-tight text-zinc-900 dark:text-white whitespace-nowrap">
                    System Uptime
                  </h3>
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-[#8FA2FF] inline-block shrink-0" aria-hidden="true" />
                </div>
                <p className="font-normal text-[13px] leading-snug text-zinc-500 dark:text-[#A3A3A0] mt-1 whitespace-nowrap overflow-hidden text-ellipsis">
                  Continuous high-availability counters
                </p>
              </div>

              {/* Stat 3 */}
              <div className="p-[20px_24px] sm:p-[20px_28px] flex flex-col justify-center min-w-0 border-r border-zinc-200/80 dark:border-[#2A2A30]">
                <p
                  className="font-medium text-[40px] leading-none tracking-[-0.04em] text-zinc-950 dark:text-white whitespace-nowrap"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  4 <span className="text-blue-600 dark:text-[#8FA2FF] text-[32px]">Stores</span>
                </p>
                <div className="flex items-center gap-1.5 mt-1.5">
                  <h3 className="font-medium text-[14px] leading-tight text-zinc-900 dark:text-white whitespace-nowrap">
                    Multi-Branch Network
                  </h3>
                </div>
                <p className="font-normal text-[13px] leading-snug text-zinc-500 dark:text-[#A3A3A0] mt-1 whitespace-nowrap overflow-hidden text-ellipsis">
                  Synchronized retail locations
                </p>
              </div>

              {/* Stat 4 */}
              <div className="p-[20px_24px] sm:p-[20px_28px] flex flex-col justify-center min-w-0">
                <p
                  className="font-medium text-[40px] leading-none tracking-[-0.04em] text-zinc-950 dark:text-white whitespace-nowrap"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  0.0<span className="text-blue-600 dark:text-[#8FA2FF]">%</span>
                </p>
                <div className="flex items-center gap-1.5 mt-1.5">
                  <h3 className="font-medium text-[14px] leading-tight text-zinc-900 dark:text-white whitespace-nowrap">
                    Inventory Drift
                  </h3>
                </div>
                <p className="font-normal text-[13px] leading-snug text-zinc-500 dark:text-[#A3A3A0] mt-1 whitespace-nowrap overflow-hidden text-ellipsis">
                  Automated atomic reconciliation
                </p>
              </div>
            </section>
          </div>
        </Reveal>

        {/* Multi-Branch Deployment Ledger */}
        <Reveal delay={160}>
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-[var(--border-primary)] pb-4">
              <span className="font-mono text-xs font-semibold uppercase tracking-wider text-[var(--text-heading)]">
                Active Store Deployments
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {branches.map((b) => (
                <div
                  key={b.num}
                  className="group/branch p-3.5 -mx-2 rounded-2xl transition-all duration-200 hover:bg-zinc-50/90 dark:hover:bg-[#121216] hover:-translate-y-0.5 space-y-1 cursor-default border border-transparent hover:border-zinc-200/60 dark:hover:border-zinc-800/80"
                >
                  <div className="font-mono text-xs text-[var(--accent)] font-semibold transition-transform duration-200 group-hover/branch:translate-x-0.5">
                    {b.num}
                  </div>
                  <div className="text-sm font-semibold text-[var(--text-heading)] transition-colors">
                    {b.name}
                  </div>
                  <div className="text-xs text-[var(--text-muted)]">
                    {b.role}
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-6 border-t border-[var(--border-primary)] flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-[var(--text-muted)]">
              <span>Production Version: v2.8.4 Enterprise</span>
              <div className="flex items-center gap-2">
                <span>Core Stack:</span>
                <span className="text-[var(--text-heading)]">React, Node.js, PostgreSQL, WebSockets</span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  )
}
