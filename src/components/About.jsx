import { Section, Heading, Card, cardTitle, TagBadge } from '../ui.jsx'
import Reveal, { stagger } from './Reveal.jsx'
import { aboutCards, companyInfo } from '../data.js'
import { Award, Briefcase, CheckCircle, Code, Coffee, Cpu, Users } from './Icons.jsx'

export default function About() {
  return (
    <Section id="about" tone="surface">
      <Heading
        eyebrow="About Afrookoo"
        eyebrowIcon={Users}
        title="Engineering software that drives measurable business transformation."
        intro="We combine rigorous computer science fundamentals, deep domain expertise, and modern AI acceleration to engineer digital ecosystems that stand the test of time."
      />

      <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-14">
        {/* Story & Philosophy */}
        <div className="lg:col-span-7 space-y-5 text-base sm:text-lg leading-relaxed text-[var(--text-body)]">
          <Reveal>
            <p className="font-medium text-[var(--text-heading)]">
              Headquartered in Addis Ababa, Ethiopia, <strong className="text-blue-600 dark:text-blue-400">Afrookoo Software</strong> was built with a singular conviction: that modern enterprises require software engineered with relentless attention to architectural clarity, high availability, and measurable business impact.
            </p>
          </Reveal>

          <Reveal delay={100}>
            <p>
              We collaborate with commercial enterprises, growing retail businesses, and organizations to design high-performance platforms — including our flagship ORA POS &amp; Inventory Intelligence platform, enterprise digital systems consulting, and tailor-made business management software.
            </p>
          </Reveal>

          <Reveal delay={150}>
            <p>
              Our engineering philosophy rejects fragile monolithic shortcuts. We build with clean domain boundaries, automated testing pipelines, and robust API contracts, ensuring your technology evolves as your operations scale.
            </p>
          </Reveal>

          {/* Key Engineering Differentiators */}
          <Reveal delay={200} className="pt-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {[
                { icon: Code, text: 'Custom Enterprise & POS Platforms' },
                { icon: Cpu, text: 'Digital Systems & Operations Consulting' },
                { icon: Award, text: 'Battle-Tested in Production Retail' },
                { icon: Coffee, text: 'Ethiopian Buna Powered Engineering' },
              ].map((item) => {
                const IconComponent = item.icon
                return (
                  <div
                    key={item.text}
                    className="flex items-center gap-2.5 rounded-xl border border-[var(--border-card)] bg-[var(--bg-card)] p-3 text-sm font-medium text-[var(--text-heading)]"
                  >
                    <IconComponent size={16} className="text-blue-500 shrink-0" />
                    <span>{item.text}</span>
                  </div>
                )
              })}
            </div>
          </Reveal>
        </div>

        {/* Team & Engineering Leadership Spotlight */}
        <div className="lg:col-span-5">
          <Reveal delay={180}>
            <div className="relative overflow-hidden rounded-2xl border border-[var(--border-card)] bg-[var(--bg-card)] p-6 sm:p-7 shadow-lg">
              <div className="flex items-center gap-4 border-b border-[var(--border-subtle)] pb-5 mb-5">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-600 font-serif text-2xl font-bold text-white shadow-md">
                  AF
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-[var(--text-heading)]">
                    Afrookoo Engineering Team
                  </h3>
                  <p className="text-xs font-mono text-blue-600 dark:text-blue-400 font-semibold uppercase tracking-wider">
                    Software &amp; Digital Systems Collective
                  </p>
                  <p className="text-xs text-[var(--text-muted)] mt-0.5">
                    4 Kilo (Abrehot Library / RVU), Addis Ababa · EAT (UTC+3)
                  </p>
                </div>
              </div>

              <p className="text-sm text-[var(--text-body)] leading-relaxed mb-5">
                A dedicated software engineering and systems consulting team based in Addis Ababa, experienced in building scalable retail point-of-sale platforms, enterprise inventory synchronization, and custom digital business systems.
              </p>

              <div className="space-y-2 border-t border-[var(--border-subtle)] pt-4 text-xs text-[var(--text-muted)]">
                <div className="flex items-center justify-between">
                  <span>Core Focus:</span>
                  <span className="font-semibold text-[var(--text-heading)]">Software Engineering, Architecture &amp; AI</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Flagship Platform:</span>
                  <span className="font-semibold text-[var(--text-heading)]">ORA POS &amp; Inventory Intelligence</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Enterprise Solutions:</span>
                  <span className="font-semibold text-[var(--text-heading)]">Afrookoo Custom Enterprise Platforms</span>
                </div>
              </div>

              <div className="mt-5 pt-4 border-t border-[var(--border-subtle)] flex items-center justify-between">
                <a
                  href="#work"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline"
                >
                  <span>Explore Team Case Studies</span>
                  <span>→</span>
                </a>
                <a
                  href="#contact"
                  className="text-xs text-[var(--text-muted)] hover:text-blue-500 font-semibold"
                >
                  Collaborate With Us →
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Vision, Mission, Values */}
      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {aboutCards.map((c, i) => (
          <Reveal key={c.title} delay={stagger(i)}>
            <Card lift className="h-full flex flex-col justify-between">
              <div>
                <span className="mb-2 block font-mono text-xs font-semibold tracking-wider uppercase text-blue-600 dark:text-blue-400">
                  Pillar 0{i + 1}
                </span>
                <h3 className={cardTitle}>{c.title}</h3>
                <p className="mt-3 text-sm sm:text-base leading-relaxed text-[var(--text-muted)]">
                  {c.text}
                </p>
              </div>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
