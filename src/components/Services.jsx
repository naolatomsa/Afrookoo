import { Section, Heading, Card, Button, cardTitle, TagBadge } from '../ui.jsx'
import Reveal, { stagger } from './Reveal.jsx'
import { services, companyInfo } from '../data.js'
import { Code, Smartphone, Cpu, Layers, Cloud, Zap, Check, ArrowRight } from './Icons.jsx'

const iconMap = {
  Code,
  Smartphone,
  Cpu,
  Layers,
  Cloud,
  Zap,
}

export default function Services() {
  return (
    <Section id="services" tone="default">
      <Heading
        eyebrow="Specialized Services"
        eyebrowIcon={Code}
        title="Engineering excellence across every tier of the modern technology stack."
        intro="From foundational database schemas to fluid mobile screens and multi-agent AI loops, we deliver production-grade software engineered for reliability, security, and performance."
      />

      {/* Grid of 6 Services */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s, i) => {
          const IconComponent = iconMap[s.iconName] || Code
          return (
            <Reveal key={s.id} delay={stagger(i)}>
              <Card lift className="h-full flex flex-col justify-between p-6 sm:p-8">
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                      <IconComponent size={22} />
                    </div>
                    <span className="font-mono text-xs font-semibold text-[var(--text-muted)]">
                      0{i + 1}
                    </span>
                  </div>

                  <h3 className={`${cardTitle} mb-3`}>{s.title}</h3>
                  <p className="text-sm leading-relaxed text-[var(--text-muted)] mb-5">
                    {s.description}
                  </p>

                  {/* Feature Checklist */}
                  <div className="space-y-2 border-t border-[var(--border-subtle)] pt-4 mb-6">
                    {s.features.map((f) => (
                      <div key={f} className="flex items-start gap-2 text-xs text-[var(--text-body)]">
                        <Check size={14} className="text-blue-500 shrink-0 mt-0.5" />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech chips */}
                <div className="flex flex-wrap gap-1.5 border-t border-[var(--border-subtle)] pt-4">
                  {s.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-md border border-[var(--border-card)] bg-slate-50 dark:bg-slate-800/80 px-2 py-0.5 font-mono text-[11px] text-[var(--text-muted)]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </Card>
            </Reveal>
          )
        })}
      </div>

      {/* Bottom CTA Banner */}
      <Reveal className="mt-12">
        <div className="relative overflow-hidden rounded-3xl border border-blue-500/20 dark:border-blue-500/30 bg-gradient-to-br from-blue-50 via-sky-50/70 to-indigo-50/50 dark:from-blue-950/40 dark:via-slate-900/90 dark:to-blue-950/60 p-8 sm:p-10 shadow-xl backdrop-blur-md">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div className="max-w-2xl">
              <span className="inline-block rounded-full border border-blue-500/20 bg-blue-100/70 dark:bg-blue-500/20 px-3 py-1 font-mono text-xs font-bold text-blue-700 dark:text-blue-300 uppercase tracking-wider mb-2">
                Tailored Engagements
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
                Have a specialized engineering or enterprise challenge?
              </h3>
              <p className="mt-2 text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
                Whether you need a full greenfield build, legacy system modernization, or dedicated senior engineering augmentation, our team is ready to step in.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <Button href="#contact" variant="primary">
                <span>Start a Project</span>
                <ArrowRight size={16} />
              </Button>
              <Button
                href="#work"
                variant="outline"
                className="border-slate-300 bg-white dark:border-slate-700 dark:bg-transparent text-slate-800 dark:text-white hover:border-blue-500 hover:text-blue-600 dark:hover:border-white shadow-xs"
              >
                Explore Case Studies
              </Button>
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  )
}
