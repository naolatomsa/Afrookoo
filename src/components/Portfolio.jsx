import { useState } from 'react'
import { Section, Heading } from '../ui.jsx'
import Reveal, { stagger } from './Reveal.jsx'
import { caseStudies } from '../data.js'
import { ArrowUpRight, Code, Database, Shield } from './Icons.jsx'

function CaseStudyCard({ cs }) {
  const [activeTab, setActiveTab] = useState('metrics')

  const architectureDetails = {
    'ora-pos': [
      { layer: '01 Edge Cashier Terminal', desc: 'Direct thermal receipt printer & optical barcode scanner integration via WebAssembly.' },
      { layer: '02 Local ACID Persistence', desc: 'IndexedDB transaction buffer capturing checkouts with zero downtime during ISP cuts.' },
      { layer: '03 WebSocket Gateway', desc: 'Sub-50ms bidirectional synchronization pipe with automatic exponential backoff retry.' },
      { layer: '04 Distributed Cloud Ledger', desc: 'PostgreSQL multi-branch inventory engine with atomic balance reconciliation.' },
    ],
    'kerchanshe-erp': [
      { layer: '01 Multi-Warehouse UI', desc: 'Next.js 15 & React management portals for regional commodity depot supervisors.' },
      { layer: '02 Hexagonal Core API', desc: 'Spring Boot 3 & Nest.js decoupled microservices with strict transactional boundaries.' },
      { layer: '03 Distributed Cache Tier', desc: 'Redis cluster handling high-speed lot reservation, freight dispatch, and SKU lookups.' },
      { layer: '04 Relational Data Cluster', desc: 'High-availability PostgreSQL database with automated multi-AZ replication.' },
    ],
    'awash-gateway': [
      { layer: '01 Partner API Ingestion', desc: 'FastAPI gateway terminating partner connections over mutual TLS (mTLS v1.3).' },
      { layer: '02 Cryptographic Verifier', desc: 'Hardware-accelerated JWT signature verification, rate limiter, and payload audit.' },
      { layer: '03 Settlement Message Queue', desc: 'Redis Streams message bus guaranteeing zero-loss transaction delivery.' },
      { layer: '04 Core Banking Adapter', desc: 'Idempotent transactional connector to private financial ledger.' },
    ],
  }

  const visualHeaders = {
    'ora-pos': {
      icon: Code,
      badge: 'RETAIL ENGINE',
      accentColor: 'text-blue-400',
      tagline: 'Multi-Branch Distributed POS & Real-Time Stock Engine',
      stat1: '1.8s Checkout',
      stat2: '100% Offline Uptime',
    },
    'kerchanshe-erp': {
      icon: Database,
      badge: 'ENTERPRISE ERP',
      accentColor: 'text-emerald-400',
      tagline: 'Commodity Freight Logistics & Lot Serialization',
      stat1: '4.2x Faster Manifests',
      stat2: '38,000+ MT Audited',
    },
    'awash-gateway': {
      icon: Shield,
      badge: 'FINANCIAL GATEWAY',
      accentColor: 'text-indigo-400',
      tagline: 'Low-Latency Partner API & Cryptographic Settlement',
      stat1: '< 45ms Response',
      stat2: '100% Zero-Loss Ledger',
    },
  }

  const archNodes = architectureDetails[cs.id] || []
  const vHeader = visualHeaders[cs.id] || visualHeaders['ora-pos']
  const HeaderIcon = vHeader.icon

  return (
    <div className="rounded-2xl border border-zinc-200/80 dark:border-white/10 bg-white dark:bg-zinc-900/40 shadow-lg dark:shadow-xl backdrop-blur-xl transition-all duration-300 hover:border-blue-500/40 dark:hover:border-blue-500/40 hover:shadow-xl overflow-hidden">
      {/* Visual Header Banner */}
      <div className="border-b border-zinc-200/80 dark:border-white/10 bg-zinc-50 dark:bg-zinc-950/70 p-4 sm:p-5 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white dark:bg-white/5 border border-zinc-200 dark:border-white/10 text-zinc-800 dark:text-white shadow-xs">
            <HeaderIcon size={16} />
          </div>
          <div>
            <span className="font-mono text-[10px] uppercase tracking-wider text-blue-600 dark:text-blue-400 font-semibold block">
              {vHeader.badge}
            </span>
            <span className="text-xs font-mono text-zinc-700 dark:text-zinc-300 font-medium">
              {vHeader.tagline}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="rounded-full bg-white dark:bg-white/5 border border-zinc-200 dark:border-white/10 px-2.5 py-1 font-mono text-[11px] text-zinc-700 dark:text-zinc-300 shadow-xs">
            {vHeader.stat1}
          </span>
          <span className="rounded-full bg-white dark:bg-white/5 border border-zinc-200 dark:border-white/10 px-2.5 py-1 font-mono text-[11px] text-zinc-700 dark:text-zinc-300 shadow-xs">
            {vHeader.stat2}
          </span>
        </div>
      </div>

      {/* Main Case Study Content */}
      <div className="p-6 sm:p-8 lg:p-10">
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
          {/* Left Column: Context, Problem & Solution */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              {/* Meta info */}
              <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-zinc-500 dark:text-zinc-400 mb-2">
                <span className="font-medium text-zinc-700 dark:text-zinc-300">{cs.client}</span>
                <span className="text-zinc-300 dark:text-zinc-600">/</span>
                <span>{cs.category}</span>
              </div>

              <h3 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white mb-4">
                {cs.title}
              </h3>

              {/* Challenge */}
              <div className="mb-4">
                <span className="block font-mono text-[11px] uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-1 font-medium">
                  Challenge
                </span>
                <p className="text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
                  {cs.problem}
                </p>
              </div>

              {/* Solution */}
              <div className="mb-6">
                <span className="block font-mono text-[11px] uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-1 font-medium">
                  Engineered Solution
                </span>
                <p className="text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
                  {cs.built ? cs.built.join(' ') : cs.solution}
                </p>
              </div>
            </div>

            {/* Tech Stack Pills */}
            <div className="flex flex-wrap items-center gap-1.5 pt-4 border-t border-zinc-200/80 dark:border-white/10">
              {(cs.tags || cs.techStack)?.map((t) => (
                <span
                  key={t}
                  className="rounded-md border border-zinc-200 dark:border-white/10 bg-zinc-100/70 dark:bg-white/5 px-2.5 py-1 font-mono text-[11px] text-zinc-700 dark:text-zinc-300 shadow-xs"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Right Column: Interactive Specs (Metrics vs. Architecture) */}
          <div className="lg:col-span-5 flex flex-col justify-between rounded-xl border border-zinc-200/80 dark:border-white/10 bg-zinc-50 dark:bg-zinc-950/70 p-5 sm:p-6 backdrop-blur-md">
            <div>
              {/* Tab switchers */}
              <div className="flex items-center justify-between border-b border-zinc-200/80 dark:border-white/10 pb-3 mb-5">
                <div className="flex gap-4">
                  <button
                    type="button"
                    onClick={() => setActiveTab('metrics')}
                    className={`font-mono text-xs uppercase tracking-wider cursor-pointer transition-colors pb-1 border-b-2 ${
                      activeTab === 'metrics'
                        ? 'border-blue-600 dark:border-blue-500 font-semibold text-zinc-900 dark:text-white'
                        : 'border-transparent text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200'
                    }`}
                  >
                    Verified Outcomes
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab('arch')}
                    className={`font-mono text-xs uppercase tracking-wider cursor-pointer transition-colors pb-1 border-b-2 ${
                      activeTab === 'arch'
                        ? 'border-blue-600 dark:border-blue-500 font-semibold text-zinc-900 dark:text-white'
                        : 'border-transparent text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200'
                    }`}
                  >
                    System Blueprint
                  </button>
                </div>
                <span className="font-mono text-[10px] text-zinc-500 dark:text-zinc-400">
                  {cs.version || 'Production'}
                </span>
              </div>

              {/* Tab 1: Hard Metrics */}
              {activeTab === 'metrics' ? (
                <div className="space-y-4">
                  {cs.results.map((r) => (
                    <div key={r.label} className="border-b border-zinc-200/80 dark:border-white/10 pb-3 last:border-0 last:pb-0">
                      <div className="font-mono text-2xl font-bold text-zinc-900 dark:text-white">
                        {r.value}
                      </div>
                      <div className="text-xs font-medium text-blue-600 dark:text-blue-400 mt-0.5">
                        {r.label}
                      </div>
                      <div className="text-[11px] text-zinc-500 dark:text-zinc-400 mt-0.5">
                        {r.note}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                /* Tab 2: Architecture Layers */
                <div className="space-y-2.5 font-mono text-xs">
                  {archNodes.map((n) => (
                    <div key={n.layer} className="p-3 rounded-lg bg-white dark:bg-zinc-900/80 border border-zinc-200 dark:border-white/10 shadow-xs">
                      <div className="font-semibold text-zinc-900 dark:text-white text-[11px]">
                        {n.layer}
                      </div>
                      <div className="text-[10px] text-zinc-600 dark:text-zinc-400 mt-0.5 font-sans leading-snug">
                        {n.desc}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="mt-6 pt-4 border-t border-zinc-200/80 dark:border-white/10 flex items-center justify-between text-xs font-mono text-zinc-500 dark:text-zinc-400">
              <span>Addis Ababa Deployment</span>
              <span className="inline-flex items-center gap-1 text-zinc-900 dark:text-white font-medium">
                <span>Verified SLA</span>
                <ArrowUpRight size={13} />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Portfolio() {
  return (
    <Section id="work" tone="surface" pad="py-16 sm:py-20 lg:py-24">
      <Heading
        title="Featured Work & Production Systems"
        intro="Enterprise platforms, offline-first retail engines, and distributed architectures engineered for our partners."
      />

      <div className="space-y-8 sm:space-y-10">
        {caseStudies.map((cs, idx) => (
          <Reveal key={cs.id} delay={stagger(idx, 3, 80)}>
            <CaseStudyCard cs={cs} />
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
