import { useState } from 'react'
import { Section, Eyebrow, Button, AddisAbabaClock } from '../ui.jsx'
import Reveal from './Reveal.jsx'
import { stats } from '../data.js'
import { ArrowRight, Sparkles, Code, Cpu, Cloud, CheckCircle, Shield } from './Icons.jsx'

export default function Hero() {
  const [activeTab, setActiveTab] = useState(0)

  // 5 Core Pillars as requested: Software Engineering, Architecture, Consulting, Cloud & Infrastructure, AI
  const pillars = [
    {
      id: 'software-engineering',
      title: 'Software Engineering',
      shortTitle: 'Software',
      tag: 'FULL-STACK & SYSTEMS',
      icon: Code,
      headline: 'Mission-Critical Full-Stack Software',
      description:
        'Custom web applications, distributed backends, transactional engines, and robust APIs engineered for high reliability, maintainability, and scale.',
      metrics: ['Production-Grade Clean Code', 'Strict Type-Safety & Automated Tests', 'Zero Technical Debt Standard'],
      tech: ['React / Next.js', 'Node.js / Express', 'TypeScript', 'PostgreSQL', 'REST / GraphQL'],
    },
    {
      id: 'architecture',
      title: 'Architecture',
      shortTitle: 'Architecture',
      tag: 'SYSTEM DESIGN & RESILIENCE',
      icon: Shield,
      headline: 'Decoupled, Resilient System Design',
      description:
        'Hexagonal domain boundaries, event-driven pipelines, and microservices engineered for high concurrency, fault isolation, and uninterrupted business continuity.',
      metrics: ['99.9% Uptime Standard', 'Sub-50ms Low Latency APIs', 'ACID Data Integrity & Fault Tolerance'],
      tech: ['Hexagonal Architecture', 'Microservices', 'Redis', 'Docker', 'Event Streams'],
    },
    {
      id: 'consulting',
      title: 'Consulting',
      shortTitle: 'Consulting',
      tag: 'DIGITAL TRANSFORMATION',
      icon: Cpu,
      headline: 'Enterprise Systems & Digital Advisory',
      description:
        'Strategic technology advisory, operational workflow digitalization, architecture audits, and legacy system modernization to accelerate enterprise agility.',
      metrics: ['Operational Bottleneck Elimination', 'Paperless Workflow Modernization', 'Executive Technology Advisory'],
      tech: ['Workflow Audits', 'Architecture Blueprints', 'API Integration', 'Data Modernization'],
    },
    {
      id: 'cloud-infrastructure',
      title: 'Cloud & Infrastructure',
      shortTitle: 'Cloud & Infra',
      tag: 'DEVOPS / CI-CD / SRE',
      icon: Cloud,
      headline: 'Automated Zero-Downtime Infrastructure',
      description:
        'Containerized orchestration, automated CI/CD release pipelines, multi-region cloud foundations, automated backups, and 24/7 health telemetry.',
      metrics: ['Zero-Downtime Blue/Green Deployments', 'Automated Failover & Backups', 'Real-Time Health Telemetry'],
      tech: ['Docker & Kubernetes', 'AWS & Cloud', 'GitHub Actions', 'Nginx', 'Prometheus & Grafana'],
    },
    {
      id: 'ai',
      title: 'AI',
      shortTitle: 'AI & Agents',
      tag: 'INTELLIGENCE & AUTOMATION',
      icon: Sparkles,
      headline: 'Intelligent AI Systems & Multi-Agent Platforms',
      description:
        'Production-ready artificial intelligence: autonomous multi-agent coordination, retrieval-augmented generation (RAG), semantic search, and document intelligence.',
      metrics: ['Enterprise Context & RAG Grounding', 'Autonomous Agent Workflows', 'Private & Secure LLM Pipelines'],
      tech: ['LangChain / LlamaIndex', 'Vector Databases', 'OpenAI / Claude / Gemini', 'FastAPI', 'Python'],
    },
  ]

  const activeShowcase = pillars[activeTab]
  const TabIcon = activeShowcase.icon

  return (
    <Section id="top" tone="hero" pad="pt-28 pb-16 sm:pt-36 sm:pb-24 lg:pt-40 lg:pb-28">
      {/* Background ambient lighting and grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 dark:opacity-25 pointer-events-none" />
      <div className="absolute -top-40 right-1/4 h-96 w-96 rounded-full bg-blue-500/10 dark:bg-blue-600/25 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 left-10 h-96 w-96 rounded-full bg-cyan-500/10 dark:bg-cyan-500/20 blur-3xl pointer-events-none" />

      <div className="relative z-10 grid items-center gap-12 lg:grid-cols-12 lg:gap-14">
        {/* Left Column: Headline and CTAs */}
        <div className="lg:col-span-7">
          <Reveal>
            <div className="flex flex-wrap items-center gap-3 mb-5">
              <Eyebrow icon={Sparkles}>Software Engineering &amp; AI Studio</Eyebrow>
              <AddisAbabaClock />
            </div>

            <h1 className="font-serif text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-5xl lg:text-6xl xl:text-[64px] leading-[1.08]">
              Building{' '}
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-sky-500 dark:from-blue-400 dark:via-sky-300 dark:to-indigo-300 bg-clip-text text-transparent">
                Intelligent Technology
              </span>
              . Transforming Businesses.
            </h1>

            <p className="mt-6 mb-8 max-w-2xl text-lg text-slate-600 dark:text-slate-300 sm:text-xl leading-relaxed">
              We engineer custom software platforms, decoupled system architectures, strategic digital consulting, resilient cloud infrastructure, and enterprise AI solutions from Addis Ababa to global organizations.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Button href="#services" variant="primary" className="text-base px-7 py-3.5">
                <span>Explore Solutions</span>
                <ArrowRight size={16} />
              </Button>

              <Button
                href="#contact"
                variant="outline"
                className="border-slate-300 bg-white/80 dark:border-slate-700 dark:bg-slate-900/60 text-slate-900 dark:text-white hover:border-blue-500 hover:text-blue-600 dark:hover:border-blue-400 px-6 py-3.5"
              >
                Start a Project
              </Button>

              <a
                href="#work"
                className="inline-flex items-center gap-1.5 px-4 py-3 text-sm font-semibold text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <span>View Featured Projects</span>
                <span>→</span>
              </a>
            </div>

            {/* Quick Metrics */}
            <div className="mt-12 grid grid-cols-2 gap-4 border-t border-slate-200 dark:border-slate-800/80 pt-8 sm:grid-cols-4">
              {stats.map((s) => (
                <div key={s.label}>
                  <div className="font-mono text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
                    {s.value}
                  </div>
                  <div className="text-xs font-semibold text-blue-600 dark:text-blue-400 mt-0.5 uppercase tracking-wider">
                    {s.label}
                  </div>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 leading-snug">
                    {s.detail}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Right Column: Interactive System Preview (5 Pillars) */}
        <div className="lg:col-span-5">
          <Reveal delay={150}>
            <div className="relative rounded-2xl border border-slate-200/90 bg-white p-5 sm:p-7 shadow-xl shadow-slate-200/50 backdrop-blur-xl dark:shadow-2xl dark:border-slate-800 dark:bg-slate-900/90">
              {/* Window Header */}
              <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-4 mb-5">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-rose-500/80" />
                  <span className="h-3 w-3 rounded-full bg-amber-500/80" />
                  <span className="h-3 w-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 font-mono text-xs text-slate-600 dark:text-slate-400 font-medium">
                    afrookoo-pillars.spec
                  </span>
                </div>
                <span className="rounded-full border border-blue-500/20 bg-blue-50 dark:border-blue-800/60 dark:bg-blue-950/60 px-2.5 py-0.5 font-mono text-[11px] text-blue-700 dark:text-blue-400 font-bold">
                  CORE PILLARS
                </span>
              </div>

              {/* Selector Tabs (5 Pillars: Software, Architecture, Consulting, Cloud & Infra, AI) */}
              <div className="grid grid-cols-3 sm:grid-cols-5 gap-1.5 rounded-xl border border-slate-200/80 bg-slate-100 p-1.5 dark:border-slate-800 dark:bg-slate-950 mb-5">
                {pillars.map((arch, idx) => (
                  <button
                    key={arch.id}
                    type="button"
                    onClick={() => setActiveTab(idx)}
                    className={`rounded-lg py-2 px-1 text-[11px] sm:text-xs font-semibold transition-all text-center cursor-pointer ${
                      activeTab === idx
                        ? 'bg-blue-600 text-white shadow-sm'
                        : 'text-slate-700 hover:text-slate-900 hover:bg-white dark:text-slate-400 dark:hover:text-white dark:hover:bg-slate-800/60'
                    }`}
                  >
                    {arch.shortTitle}
                  </button>
                ))}
              </div>

              {/* Active Pillar Content */}
              <div className="rounded-xl border border-slate-200 bg-slate-50/90 p-4 sm:p-5 dark:border-slate-800/80 dark:bg-slate-950/60">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-blue-700 dark:text-blue-400 font-bold">
                    {activeShowcase.tag}
                  </span>
                  <TabIcon size={18} className="text-blue-600 dark:text-blue-400" />
                </div>

                <h3 className="font-serif text-lg font-bold text-slate-900 dark:text-white mb-2">
                  {activeShowcase.headline}
                </h3>

                <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                  {activeShowcase.description}
                </p>

                {/* Key Metrics Checklist */}
                <div className="space-y-2 mb-4 border-y border-slate-200 dark:border-slate-800 py-3">
                  {activeShowcase.metrics.map((m) => (
                    <div key={m} className="flex items-center gap-2 text-xs text-slate-800 dark:text-slate-200 font-medium">
                      <CheckCircle size={14} className="text-emerald-600 dark:text-emerald-400 shrink-0" />
                      <span>{m}</span>
                    </div>
                  ))}
                </div>

                {/* Tech chips */}
                <div className="flex flex-wrap gap-1.5">
                  {activeShowcase.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-md border border-slate-200/90 bg-white px-2.5 py-1 font-mono text-[11px] text-slate-800 font-semibold shadow-2xs dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Footer reassurance */}
              <div className="mt-4 flex items-center justify-between text-xs text-slate-600 dark:text-slate-400 pt-2 border-t border-slate-200/80 dark:border-slate-800/60">
                <span className="flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                  Engineering for 99.9% reliability
                </span>
                <a href="#work" className="text-blue-600 dark:text-blue-400 hover:underline font-semibold">
                  View Projects →
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  )
}
