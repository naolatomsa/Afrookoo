import { useState } from 'react'
import { Section, Heading } from '../ui.jsx'
import Reveal, { stagger } from './Reveal.jsx'
import { Check, Code, Smartphone, Zap, Cloud } from './Icons.jsx'

export default function Services() {
  const [activeNetworkMode, setActiveNetworkMode] = useState('online')

  const capabilities = [
    {
      id: 'enterprise-web',
      num: '01',
      title: 'Web Platforms & Distributed APIs',
      tag: 'WEB & BACKEND',
      icon: Code,
      accentBg: 'bg-blue-500/10 border-blue-500/20 text-blue-600 dark:text-blue-400',
      description:
        'High-concurrency web applications, microservices, and decoupled domain APIs engineered for speed, security, and zero downtime.',
      techStack: ['React', 'Next.js', 'Nest.js', 'Spring Boot', 'PostgreSQL', 'Redis'],
      highlights: [
        'Sub-second page speeds & type-safe backend architectures',
        'Scalable relational modeling and in-memory cache clustering',
        'Responsive, accessible interfaces with light & dark theme excellence',
      ],
    },
    {
      id: 'native-mobile',
      num: '02',
      title: 'Native Mobile: iOS & Android',
      tag: 'DUAL NATIVE PERFORMANCE',
      icon: Smartphone,
      accentBg: 'bg-emerald-500/10 border-emerald-500/20 text-emerald-600 dark:text-emerald-400',
      description:
        'Silky-smooth 120 FPS native mobile apps that harness device hardware directly with zero hybrid web-wrapper compromises.',
      techStack: ['SwiftUI', 'SwiftData', 'Kotlin', 'Jetpack Compose', 'Room SQLite'],
      highlights: [
        'True native compilation for iOS (Swift) & Android (Kotlin)',
        'Local SQLite persistence & background synchronization',
        'Direct hardware access: camera scanners, sensors, and Bluetooth',
      ],
    },
    {
      id: 'pos-retail',
      num: '03',
      title: 'Offline-First POS & Commerce',
      tag: 'EDGE RETAIL COMPUTING',
      icon: Zap,
      accentBg: 'bg-amber-500/10 border-amber-500/20 text-amber-600 dark:text-amber-400',
      description:
        'Resilient edge checkout terminals that continue sales without skipping a beat during internet cuts, reconciling atomically upon reconnect.',
      techStack: ['IndexedDB', 'SQLite', 'WebSockets', 'Thermal Print', 'Barcode HW'],
      hasSimulation: true,
      highlights: [
        '100% offline checkout continuity during total ISP blackouts',
        'Automated multi-branch ledger reconciliation with zero data drift',
        'Direct hardware drivers for scanners, scales, and thermal printers',
      ],
    },
    {
      id: 'cloud-devops',
      num: '04',
      title: 'Cloud Infrastructure & SRE',
      tag: 'DEVOPS / RELIABILITY',
      icon: Cloud,
      accentBg: 'bg-purple-500/10 border-purple-500/20 text-purple-600 dark:text-purple-400',
      description:
        'Automated container orchestration, zero-downtime deployment pipelines, and continuous monitoring built for enterprise uptime.',
      techStack: ['Docker', 'Kubernetes', 'AWS', 'GitHub Actions', 'Prometheus'],
      highlights: [
        'Automated blue/green zero-downtime release workflows',
        'High-availability Kubernetes clusters with auto-scaling',
        'End-to-end telemetry, distributed error tracing, and alerts',
      ],
    },
  ]

  return (
    <Section id="capabilities" tone="default" pad="py-16 sm:py-20 lg:py-24">
      <Heading
        title="Engineering Capabilities & Architecture"
        intro="We combine rigorous software architecture with pragmatic engineering to build dependable digital systems."
      />

      <div className="grid gap-6 md:grid-cols-2">
        {capabilities.map((cap, idx) => {
          const IconComponent = cap.icon
          return (
            <Reveal key={cap.id} delay={stagger(idx, 2, 70)}>
              <div className="rounded-2xl border border-zinc-200/80 dark:border-white/10 bg-white/90 dark:bg-zinc-900/40 p-6 sm:p-8 h-full flex flex-col justify-between backdrop-blur-xl shadow-lg dark:shadow-xl transition-all duration-300 hover:border-blue-500/40 dark:hover:border-blue-500/40 hover:shadow-xl hover:-translate-y-1">
                <div>
                  {/* Top Bar: Icon & Category */}
                  <div className="flex items-center justify-between mb-5">
                    <div className={`flex h-11 w-11 items-center justify-center rounded-xl border ${cap.accentBg}`}>
                      <IconComponent size={20} />
                    </div>
                    <span className="font-mono text-xs font-semibold text-zinc-500 dark:text-zinc-400">
                      {cap.num} // {cap.tag}
                    </span>
                  </div>

                  {/* Title & 1-Line Benefit */}
                  <h3 className="text-xl font-bold tracking-tight text-zinc-900 dark:text-white mb-2">
                    {cap.title}
                  </h3>

                  <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-5">
                    {cap.description}
                  </p>

                  {/* Visual Tech Stack Pills */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {cap.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md border border-zinc-200 dark:border-white/10 bg-zinc-100/70 dark:bg-white/5 px-2.5 py-1 font-mono text-[11px] text-zinc-700 dark:text-zinc-300 font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Interactive Failover Simulation (Only on POS card) */}
                  {cap.hasSimulation && (
                    <div className="mb-5 rounded-xl border border-zinc-200/80 dark:border-white/10 bg-zinc-50 dark:bg-zinc-950/70 p-3 font-mono text-xs">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[10px] text-zinc-500 dark:text-zinc-400 uppercase tracking-wider font-semibold">
                          Live ISP Failover Test
                        </span>
                        <div className="flex gap-1.5">
                          <button
                            type="button"
                            onClick={() => setActiveNetworkMode('online')}
                            className={`px-2.5 py-0.5 rounded text-[10px] font-semibold cursor-pointer transition-colors ${
                              activeNetworkMode === 'online'
                                ? 'bg-blue-600 text-white shadow-xs'
                                : 'bg-zinc-200 dark:bg-white/10 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white'
                            }`}
                          >
                            Online
                          </button>
                          <button
                            type="button"
                            onClick={() => setActiveNetworkMode('offline')}
                            className={`px-2.5 py-0.5 rounded text-[10px] font-semibold cursor-pointer transition-colors ${
                              activeNetworkMode === 'offline'
                                ? 'bg-amber-600 text-white shadow-xs'
                                : 'bg-zinc-200 dark:bg-white/10 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white'
                            }`}
                          >
                            Network Cut
                          </button>
                        </div>
                      </div>
                      <div className="text-[11px] text-zinc-700 dark:text-zinc-300 font-sans flex items-center gap-2">
                        <span className={`h-2 w-2 rounded-full shrink-0 ${activeNetworkMode === 'online' ? 'bg-emerald-500' : 'bg-amber-500'}`} />
                        <span>
                          {activeNetworkMode === 'online'
                            ? 'Cloud sync active · Bidirectional WebSocket stream running.'
                            : 'ISP blackout active · Local IndexedDB engaged. Cashier checkout unaffected.'}
                        </span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Scannable Delivery Highlights */}
                <div className="border-t border-zinc-200/80 dark:border-white/10 pt-4 space-y-2">
                  {cap.highlights.map((h) => (
                    <div key={h} className="flex items-start gap-2.5 text-xs text-zinc-700 dark:text-zinc-300">
                      <Check size={14} className="text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          )
        })}
      </div>
    </Section>
  )
}
