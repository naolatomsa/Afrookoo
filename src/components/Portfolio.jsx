import { useState } from 'react'
import { Section, Heading, Modal } from '../ui.jsx'
import Reveal, { stagger } from './Reveal.jsx'
import { projects } from '../data.js'
import { ArrowUpRight, CheckCircle, Code, Layers, Shield, Cpu, Cloud, Sparkles, ArrowRight } from './Icons.jsx'

// Architecture diagram for ORA POS & Inventory Intelligence
function PosArchitectureDiagram() {
  const steps = [
    {
      num: '01',
      title: 'POS Terminal & Scanner',
      subtitle: 'Touchscreen cashier UI, optical barcode scanners & thermal receipt printers.',
      badge: 'Edge Hardware',
      color: 'blue',
    },
    {
      num: '02',
      title: 'Offline Resilience Buffer',
      subtitle: 'Local IndexedDB/SQLite transaction buffer ensuring zero-downtime offline continuity.',
      badge: 'Edge Storage',
      color: 'indigo',
    },
    {
      num: '03',
      title: 'Sync & Gateway Layer',
      subtitle: 'WebSocket & REST API gateway with JWT authorization and automatic retry queue.',
      badge: 'Ingestion Layer',
      color: 'sky',
    },
    {
      num: '04',
      title: 'Atomic Inventory Core',
      subtitle: 'ACID-compliant stock decrement engine preventing overselling across multi-branch registers.',
      badge: 'Core Domain',
      color: 'emerald',
    },
    {
      num: '05',
      title: 'Multi-Branch Cloud & BI',
      subtitle: 'Consolidated database cluster with real-time managerial revenue and stock analytics.',
      badge: 'Cloud Storage & BI',
      color: 'cyan',
    },
  ]

  return (
    <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-950/60 p-4 sm:p-5">
      <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3 mb-4">
        <div className="flex items-center gap-2">
          <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="font-mono text-xs font-bold uppercase tracking-wider text-blue-700 dark:text-blue-400">
            System Architecture Diagram
          </span>
        </div>
        <span className="rounded-full border border-blue-500/20 bg-blue-50 dark:border-blue-900/60 dark:bg-blue-950/60 px-2.5 py-0.5 font-mono text-[10px] font-bold text-blue-700 dark:text-blue-300">
          OFFLINE-FIRST DISTRIBUTED FLOW
        </span>
      </div>

      <div className="grid gap-3 sm:grid-cols-5">
        {steps.map((s, idx) => (
          <div key={s.num} className="relative flex flex-col justify-between rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/90 p-3.5 shadow-2xs transition-all hover:border-blue-500/40 hover:shadow-xs">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="font-mono text-xs font-bold text-blue-600 dark:text-blue-400">
                  {s.num}
                </span>
                <span className="rounded-md border border-blue-500/20 bg-blue-50 dark:border-blue-900/60 dark:bg-blue-950/60 px-2 py-0.5 font-mono text-[9px] font-bold text-blue-700 dark:text-blue-300">
                  {s.badge}
                </span>
              </div>
              <h4 className="font-serif text-xs font-bold text-slate-900 dark:text-white mb-1">
                {s.title}
              </h4>
              <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-snug">
                {s.subtitle}
              </p>
            </div>

            {idx < steps.length - 1 && (
              <div className="hidden sm:block absolute -right-2 top-1/2 -translate-y-1/2 z-10 text-blue-500 font-bold text-xs select-none">
                →
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

// Architecture diagram for Afrookoo Custom Enterprise Platforms
function EnterpriseArchitectureDiagram() {
  const steps = [
    {
      num: '01',
      title: 'Multi-Client Layer',
      subtitle: 'Responsive React/Next.js Web Portals, Admin Consoles, and Partner REST/GraphQL APIs.',
      badge: 'Access Layer',
    },
    {
      num: '02',
      title: 'API & Security Gateway',
      subtitle: 'Cloudflare WAF, TLS termination, Rate Limiting, and Granular Role-Based Access Control (RBAC).',
      badge: 'Security Gateway',
    },
    {
      num: '03',
      title: 'Hexagonal Domain Core',
      subtitle: 'Isolated domain logic, event-driven business workflows, and modular ERP subsystems.',
      badge: 'Core Engine',
    },
    {
      num: '04',
      title: 'Distributed State & Cache',
      subtitle: 'Redis distributed cache cluster and asynchronous background task job processing.',
      badge: 'Performance Cache',
    },
    {
      num: '05',
      title: 'Persistence & Cloud Infra',
      subtitle: 'PostgreSQL relational cluster, automated daily backups, Docker orchestration, and CI/CD.',
      badge: 'Storage & SRE',
    },
  ]

  return (
    <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-950/60 p-4 sm:p-5">
      <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3 mb-4">
        <div className="flex items-center gap-2">
          <span className="flex h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
          <span className="font-mono text-xs font-bold uppercase tracking-wider text-blue-700 dark:text-blue-400">
            System Architecture Diagram
          </span>
        </div>
        <span className="rounded-full border border-blue-500/20 bg-blue-50 dark:border-blue-900/60 dark:bg-blue-950/60 px-2.5 py-0.5 font-mono text-[10px] font-bold text-blue-700 dark:text-blue-300">
          HEXAGONAL ENTERPRISE PIPELINE
        </span>
      </div>

      <div className="grid gap-3 sm:grid-cols-5">
        {steps.map((s, idx) => (
          <div key={s.num} className="relative flex flex-col justify-between rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/90 p-3.5 shadow-2xs transition-all hover:border-blue-500/40 hover:shadow-xs">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="font-mono text-xs font-bold text-blue-600 dark:text-blue-400">
                  {s.num}
                </span>
                <span className="rounded-md border border-blue-500/20 bg-blue-50 dark:border-blue-900/60 dark:bg-blue-950/60 px-2 py-0.5 font-mono text-[9px] font-bold text-blue-700 dark:text-blue-300">
                  {s.badge}
                </span>
              </div>
              <h4 className="font-serif text-xs font-bold text-slate-900 dark:text-white mb-1">
                {s.title}
              </h4>
              <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-snug">
                {s.subtitle}
              </p>
            </div>

            {idx < steps.length - 1 && (
              <div className="hidden sm:block absolute -right-2 top-1/2 -translate-y-1/2 z-10 text-blue-500 font-bold text-xs select-none">
                →
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState(null)
  const [activeTabs, setActiveTabs] = useState({ 'ora-pos': 'diagram', 'custom-enterprise': 'diagram' })

  const setCardTab = (slug, tab) => {
    setActiveTabs((prev) => ({ ...prev, [slug]: tab }))
  }

  return (
    <Section id="work" tone="default">
      <Heading
        eyebrow="Projects & Platforms"
        eyebrowIcon={Layers}
        title="Proven software platforms and digital enterprise systems."
        intro="Production platforms and bespoke enterprise architectures engineered by the Afrookoo team, featuring full system architecture diagrams and measurable business outcomes."
      />

      {/* Exactly 2 Projects as requested */}
      <div className="grid gap-10 lg:gap-12">
        {projects.map((proj, i) => (
          <Reveal as="article" key={proj.slug} delay={stagger(i, 2, 100)}>
            <div className="group relative overflow-hidden rounded-3xl border border-[var(--border-card)] bg-[var(--bg-card)] shadow-lg transition-all duration-300 hover:border-blue-500/50 hover:shadow-2xl">
              {/* Header Ribbon */}
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[var(--border-subtle)] bg-[var(--bg-subtle)]/50 px-6 py-4">
                <div className="flex items-center gap-3">
                  <span className="rounded-full bg-blue-600 px-3 py-1 font-mono text-xs font-bold text-white shadow-xs">
                    {proj.platform}
                  </span>
                  <span className="font-mono text-xs text-[var(--text-muted)] font-medium">
                    {proj.client}
                  </span>
                </div>
                <span className="font-mono text-xs font-semibold text-blue-600 dark:text-blue-400">
                  {proj.timeline}
                </span>
              </div>

              {/* Main Content Area */}
              <div className="p-6 sm:p-8 lg:p-10">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-8">
                  <div className="max-w-3xl">
                    <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[var(--text-heading)] group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {proj.title}
                    </h3>
                    <p className="mt-2 font-mono text-xs sm:text-sm text-blue-600 dark:text-blue-400 font-medium">
                      {proj.subtitle}
                    </p>
                    <p className="mt-4 text-sm sm:text-base text-[var(--text-muted)] leading-relaxed">
                      {proj.summary}
                    </p>
                  </div>

                  {/* Mode Selector (Diagram vs Details) */}
                  <div className="flex items-center gap-1 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-subtle)] p-1 shrink-0">
                    <button
                      type="button"
                      onClick={() => setCardTab(proj.slug, 'diagram')}
                      className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition-all cursor-pointer ${
                        activeTabs[proj.slug] === 'diagram'
                          ? 'bg-blue-600 text-white shadow-sm'
                          : 'text-[var(--text-body)] hover:text-[var(--text-heading)]'
                      }`}
                    >
                      Architecture Diagram
                    </button>
                    <button
                      type="button"
                      onClick={() => setCardTab(proj.slug, 'details')}
                      className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition-all cursor-pointer ${
                        activeTabs[proj.slug] === 'details'
                          ? 'bg-blue-600 text-white shadow-sm'
                          : 'text-[var(--text-body)] hover:text-[var(--text-heading)]'
                      }`}
                    >
                      Case Breakdown
                    </button>
                  </div>
                </div>

                {/* Conditional Display: Architecture Diagram OR Case Breakdown */}
                {activeTabs[proj.slug] === 'diagram' ? (
                  <div className="mb-8">
                    {proj.slug === 'ora-pos' ? (
                      <PosArchitectureDiagram />
                    ) : (
                      <EnterpriseArchitectureDiagram />
                    )}
                  </div>
                ) : (
                  <div className="grid gap-6 md:grid-cols-2 mb-8">
                    <div className="rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-subtle)]/60 p-5">
                      <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-rose-500 mb-2">
                        The Challenge &amp; Problem
                      </h4>
                      <p className="text-xs sm:text-sm text-[var(--text-body)] leading-relaxed">
                        {proj.problem}
                      </p>
                    </div>

                    <div className="rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-subtle)]/60 p-5">
                      <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-2">
                        Engineering Solution
                      </h4>
                      <p className="text-xs sm:text-sm text-[var(--text-body)] leading-relaxed">
                        {proj.approach}
                      </p>
                    </div>
                  </div>
                )}

                {/* Measurable Production Outcomes */}
                <div className="mb-6 rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-subtle)]/40 p-5">
                  <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 mb-3">
                    Measurable Production Outcomes &amp; Standards
                  </h4>
                  <div className="grid gap-2.5 sm:grid-cols-2">
                    {proj.outcomes.map((out) => (
                      <div key={out} className="flex items-start gap-2.5 text-xs sm:text-sm text-[var(--text-body)]">
                        <CheckCircle size={15} className="text-emerald-500 shrink-0 mt-0.5" />
                        <span>{out}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack Chips & Action Link */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-t border-[var(--border-subtle)] pt-6">
                  <div className="flex flex-wrap gap-1.5">
                    {proj.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-100/90 dark:bg-slate-800/80 px-2.5 py-1 font-mono text-[11px] font-semibold text-slate-800 dark:text-slate-200 shadow-2xs hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <button
                    type="button"
                    onClick={() => setSelectedProject(proj)}
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-2.5 text-xs font-semibold text-white shadow-md shadow-blue-500/20 hover:bg-blue-500 transition-all cursor-pointer shrink-0"
                  >
                    <span>Read Architecture Spec</span>
                    <ArrowUpRight size={14} />
                  </button>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      {/* Deep-Dive Technical Modal */}
      <Modal
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        title={selectedProject ? `${selectedProject.title} — System Specification` : ''}
      >
        {selectedProject && (
          <div className="space-y-6">
            {/* Header info */}
            <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-[var(--border-card)] bg-[var(--bg-subtle)] p-4 font-mono text-xs">
              <span className="text-blue-600 dark:text-blue-400 font-bold uppercase">
                {selectedProject.platform}
              </span>
              <span className="text-[var(--text-muted)]">
                Client: {selectedProject.client}
              </span>
              <span className="text-emerald-500 font-semibold">
                Status: Production Verified
              </span>
            </div>

            {/* Architecture Diagram inside Modal */}
            <div>
              <h4 className="font-serif text-lg font-bold text-[var(--text-heading)] mb-3">
                System Architectural Flow
              </h4>
              {selectedProject.slug === 'ora-pos' ? (
                <PosArchitectureDiagram />
              ) : (
                <EnterpriseArchitectureDiagram />
              )}
            </div>

            {/* Problem & Approach */}
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-xl border border-[var(--border-card)] bg-[var(--bg-subtle)] p-5">
                <h4 className="font-mono text-xs uppercase tracking-wider text-rose-500 font-semibold mb-2">
                  The Problem &amp; Operational Challenge
                </h4>
                <p className="text-sm text-[var(--text-body)] leading-relaxed">
                  {selectedProject.problem}
                </p>
              </div>

              <div className="rounded-xl border border-[var(--border-card)] bg-[var(--bg-subtle)] p-5">
                <h4 className="font-mono text-xs uppercase tracking-wider text-blue-600 dark:text-blue-400 font-semibold mb-2">
                  Engineering Architecture &amp; Solution
                </h4>
                <p className="text-sm text-[var(--text-body)] leading-relaxed">
                  {selectedProject.approach}
                </p>
              </div>
            </div>

            {/* Measurable Outcomes */}
            <div className="rounded-xl border border-[var(--border-card)] bg-[var(--bg-subtle)] p-5">
              <h4 className="font-mono text-xs uppercase tracking-wider text-emerald-600 dark:text-emerald-400 font-semibold mb-3">
                Key Production Outcomes &amp; Standards
              </h4>
              <div className="space-y-2.5">
                {selectedProject.outcomes.map((out) => (
                  <div key={out} className="flex items-start gap-2.5 text-sm text-[var(--text-body)]">
                    <CheckCircle size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                    <span>{out}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack */}
            <div>
              <h4 className="font-mono text-xs uppercase tracking-wider text-[var(--text-muted)] font-semibold mb-2">
                Production Technology Stack
              </h4>
              <div className="flex flex-wrap gap-2">
                {selectedProject.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-3 py-1 font-mono text-xs text-slate-800 dark:text-slate-200 font-semibold shadow-2xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Modal CTA */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-t border-[var(--border-subtle)] pt-6">
              <div>
                <p className="text-xs text-[var(--text-muted)]">
                  Need a similar system architecture engineered for your organization?
                </p>
              </div>
              <a
                href="#contact"
                onClick={() => setSelectedProject(null)}
                className="inline-flex items-center gap-1.5 rounded-xl bg-blue-600 px-5 py-2.5 text-xs font-semibold text-white hover:bg-blue-500 shadow-md transition-colors"
              >
                <span>Discuss Your System Architecture</span>
                <ArrowRight size={14} />
              </a>
            </div>
          </div>
        )}
      </Modal>
    </Section>
  )
}
