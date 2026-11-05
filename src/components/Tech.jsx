import { useState } from 'react'
import { Section, Heading, Card, Eyebrow } from '../ui.jsx'
import Reveal, { stagger } from './Reveal.jsx'
import { stack, architecturePrinciples } from '../data.js'
import { Code, Cpu, Database, Cloud, Layers, Smartphone, Shield, Zap, CheckCircle } from './Icons.jsx'

export default function Tech() {
  const [activeCategory, setActiveCategory] = useState(0)

  const categoryIcons = [Code, Cpu, Smartphone, Database, Cloud, Layers]

  return (
    <Section id="technology" tone="default">
      <Heading
        eyebrow="Technology & Architecture"
        eyebrowIcon={Cpu}
        title="Modern, resilient, future-ready engineering stack."
        intro="We choose our technology stack based on proven operational reliability, developer ergonomics, long-term maintainability, and sub-second performance."
      />

      {/* Tech Stack Cards */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-14">
        {stack.map((s, i) => {
          const Icon = categoryIcons[i % categoryIcons.length]
          return (
            <Reveal key={s.category} delay={stagger(i)}>
              <Card lift className="h-full flex flex-col justify-between p-6 sm:p-7">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                      {s.label}
                    </span>
                    <Icon size={18} className="text-blue-500" />
                  </div>

                  <h3 className="font-serif text-xl font-bold text-[var(--text-heading)] mb-2">
                    {s.category}
                  </h3>

                  <p className="text-xs text-[var(--text-muted)] mb-5">
                    {s.highlight}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 border-t border-[var(--border-subtle)] pt-4 mt-auto">
                  {s.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-100/90 dark:bg-slate-800/80 px-2.5 py-1 font-mono text-xs text-slate-800 dark:text-slate-200 font-semibold shadow-2xs hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </Card>
            </Reveal>
          )
        })}
      </div>

      {/* Architecture Principles Deep Dive */}
      <Reveal>
        <div className="rounded-2xl border border-[var(--border-card)] bg-[var(--bg-surface)] p-6 sm:p-10 shadow-lg">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between border-b border-[var(--border-subtle)] pb-6 mb-8 gap-4">
            <div>
              <span className="rounded-full border border-blue-500/20 bg-blue-50 dark:bg-blue-950/60 dark:border-blue-800/60 px-3 py-1 font-mono text-xs font-bold text-blue-700 dark:text-blue-400 uppercase tracking-wider">
                Engineering Blueprint
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[var(--text-heading)] mt-2">
                Core Architectural Principles
              </h3>
            </div>
            <p className="max-w-md text-xs sm:text-sm text-[var(--text-muted)]">
              How we isolate business logic from infrastructure churn to build software that lasts decades.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {architecturePrinciples.map((arch, idx) => (
              <div
                key={arch.name}
                className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 p-5 shadow-xs transition-colors hover:border-blue-500/40"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full border border-blue-500/20 bg-blue-50 dark:bg-blue-950 font-mono text-xs font-bold text-blue-600 dark:text-blue-400">
                    0{idx + 1}
                  </span>
                  <h4 className="font-serif text-base font-bold text-slate-900 dark:text-white">
                    {arch.name}
                  </h4>
                </div>
                <p className="text-xs leading-relaxed text-slate-600 dark:text-slate-300">
                  {arch.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </Section>
  )
}
