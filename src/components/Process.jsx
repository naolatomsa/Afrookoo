import { Section, Heading, Card } from '../ui.jsx'
import Reveal, { stagger } from './Reveal.jsx'
import { process } from '../data.js'
import { CheckCircle, Zap } from './Icons.jsx'

export default function Process() {
  return (
    <Section id="process" tone="default">
      <Heading
        eyebrow="Development Methodology"
        eyebrowIcon={Zap}
        title="Structured, collaborative, and radically transparent."
        intro="Every client engagement follows an iterative engineering cycle that minimizes risk, delivers working software early, and maintains strict quality control."
      />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {process.map((p, i) => (
          <Reveal as="article" key={p.step} delay={stagger(i)}>
            <div className="group relative flex h-full flex-col justify-between rounded-2xl border border-[var(--border-card)] bg-[var(--bg-card)] p-6 sm:p-7 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-blue-500/50 hover:shadow-xl">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-2xl font-black text-blue-600 dark:text-blue-400">
                    {p.step}
                  </span>
                  <span className="rounded-full bg-blue-500/10 px-2.5 py-0.5 font-mono text-[10px] font-semibold text-blue-600 dark:text-blue-400">
                    PHASE {i + 1}
                  </span>
                </div>

                <h3 className="font-serif text-xl font-bold text-[var(--text-heading)] mb-2.5 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {p.title}
                </h3>

                <p className="text-xs sm:text-sm leading-relaxed text-[var(--text-muted)] mb-5">
                  {p.desc}
                </p>
              </div>

              <div className="border-t border-[var(--border-subtle)] pt-4 mt-auto">
                <span className="block font-mono text-[10px] text-[var(--text-muted)] uppercase tracking-wider mb-1">
                  Key Milestone Deliverable
                </span>
                <div className="flex items-center gap-1.5 text-xs font-semibold text-[var(--text-heading)]">
                  <CheckCircle size={14} className="text-emerald-500 shrink-0" />
                  <span>{p.deliverable}</span>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
