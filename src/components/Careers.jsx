import { useState } from 'react'
import { Section, Heading, Card, Button, cardTitle, TagBadge } from '../ui.jsx'
import Reveal, { stagger } from './Reveal.jsx'
import { careerOpenings, careerPerks, companyInfo } from '../data.js'
import { Briefcase, Coffee, Award, Cpu, Clock, Check, ArrowRight, Mail } from './Icons.jsx'

const perkIconMap = {
  Coffee,
  Award,
  Cpu,
  Clock,
  Briefcase,
}

export default function Careers() {
  const [selectedRole, setSelectedRole] = useState(null)

  return (
    <Section id="careers" tone="default">
      <Heading
        eyebrow="Join Our Engineering Team"
        eyebrowIcon={Briefcase}
        title="Build the future of intelligent enterprise technology with us."
        intro="We are looking for engineers, architects, and designers who care deeply about craft, performance, and building systems that impact real industries."
      />

      {/* Open Positions Grid */}
      <div className="mb-14">
        <div className="flex items-center justify-between mb-6">
          <h3 className="font-serif text-2xl font-bold text-[var(--text-heading)]">
            Open Roles &amp; Hybrid Opportunities
          </h3>
          <span className="rounded-full bg-emerald-500/10 px-3 py-1 font-mono text-xs font-semibold text-emerald-600 dark:text-emerald-400">
            ● 4 Roles Available
          </span>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {careerOpenings.map((role, i) => (
            <Reveal key={role.id} delay={stagger(i, 2, 80)}>
              <Card lift className="h-full flex flex-col justify-between p-6 sm:p-7 border border-[var(--border-card)]">
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span className="rounded-md bg-blue-500/10 px-2.5 py-0.5 font-mono text-xs font-semibold text-blue-600 dark:text-blue-400">
                      {role.department}
                    </span>
                    <span className="font-mono text-xs text-[var(--text-muted)]">
                      {role.type} · {role.location}
                    </span>
                  </div>

                  <h4 className="font-serif text-xl font-bold text-[var(--text-heading)] group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mb-2">
                    {role.title}
                  </h4>

                  <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed mb-4">
                    {role.desc}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {role.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-md border border-slate-200 dark:border-slate-800 bg-slate-100/90 dark:bg-slate-800/80 px-2 py-0.5 font-mono text-[11px] font-semibold text-slate-800 dark:text-slate-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="border-t border-[var(--border-subtle)] pt-4 mt-auto flex items-center justify-between">
                  <span className="text-xs font-mono text-[var(--text-muted)]">
                    Exp: {role.experience}
                  </span>
                  <a
                    href={`mailto:${companyInfo.email}?subject=Application for ${encodeURIComponent(role.title)} - Afrookoo Careers`}
                    className="inline-flex items-center gap-1.5 rounded-lg bg-blue-600 px-4 py-1.5 text-xs font-semibold text-white hover:bg-blue-500 shadow-sm transition-all"
                  >
                    <span>Apply for Role</span>
                    <ArrowRight size={13} />
                  </a>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Culture & Perks Grid */}
      <Reveal>
        <div className="rounded-2xl border border-[var(--border-card)] bg-[var(--bg-surface)] p-6 sm:p-10 shadow-lg">
          <div className="mb-8">
            <span className="rounded-full bg-blue-500/10 px-3 py-1 font-mono text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
              Life at Afrookoo
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[var(--text-heading)] mt-2">
              Why engineers love building here.
            </h3>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {careerPerks.map((perk) => {
              const IconComp = perkIconMap[perk.iconName] || Coffee
              return (
                <div
                  key={perk.title}
                  className="rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-card)] p-5 transition-colors hover:border-blue-500/40"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 mb-3.5">
                    <IconComp size={20} />
                  </div>
                  <h4 className="font-serif text-base font-bold text-[var(--text-heading)] mb-1.5">
                    {perk.title}
                  </h4>
                  <p className="text-xs leading-relaxed text-[var(--text-muted)]">
                    {perk.desc}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </Reveal>
    </Section>
  )
}
