import { Section, Heading } from '../ui.jsx'
import Reveal, { stagger } from './Reveal.jsx'
import { Award, CheckCircle, Shield } from './Icons.jsx'

export const partners = [
  {
    name: 'Awash Bank',
    category: 'Commercial Banking & Financial Services',
    shortCode: 'AB',
    tagline: 'Leading Private Commercial Bank in Ethiopia',
  },
  {
    name: 'Oromo Research Association (ORA)',
    category: 'Research & Institutional Systems',
    shortCode: 'ORA',
    tagline: 'Academic Research, Digital Archives & Operations',
  },
  {
    name: 'Kerchanshe',
    category: 'Commercial Enterprise & Agriculture',
    shortCode: 'KC',
    tagline: 'Global Agro-Commodity & Enterprise Producer',
  },
  {
    name: 'Rift Valley University',
    category: 'Higher Education & Academic Systems',
    shortCode: 'RVU',
    tagline: 'Pioneering Higher Education Institution',
  },
]

export default function Clients() {
  return (
    <Section id="clients" tone="surface">
      <Heading
        eyebrow="Institutional Partners"
        eyebrowIcon={Award}
        title="Trusted by Ethiopia's leading enterprises and institutions."
        intro="We collaborate with prominent financial institutions, research associations, agricultural conglomerates, and universities to build high-performance digital systems."
      />

      {/* Institutional Partner Grid - Only Partner Names & Profiles, No Testimonials */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6 mb-12">
        {partners.map((p, i) => (
          <Reveal key={p.name} delay={stagger(i, 4, 80)}>
            <div className="group relative flex h-full flex-col justify-between rounded-2xl border border-[var(--border-card)] bg-[var(--bg-card)] p-6 sm:p-7 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-blue-500/50 hover:shadow-xl dark:hover:shadow-blue-500/10">
              {/* Top Accent Bar */}
              <div
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-gradient-to-r from-blue-600 via-sky-400 to-indigo-500 transition-transform duration-300 group-hover:scale-x-100 rounded-t-2xl"
              />

              <div>
                {/* Monogram Badge */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 font-mono text-sm font-bold text-blue-600 dark:text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                    {p.shortCode}
                  </div>
                  <span className="rounded-full border border-blue-500/20 bg-blue-50 dark:bg-blue-950/60 dark:border-blue-800/60 px-2.5 py-0.5 font-mono text-[10px] text-blue-700 dark:text-blue-300 font-semibold">
                    Verified Partner
                  </span>
                </div>

                {/* Partner Name (Only Partner Name as requested) */}
                <h3 className="font-serif text-xl font-bold text-[var(--text-heading)] group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {p.name}
                </h3>

                {/* Partner Category */}
                <p className="mt-2 text-xs font-mono text-blue-600 dark:text-blue-400 font-medium">
                  {p.category}
                </p>

                <p className="mt-2 text-xs text-[var(--text-muted)] leading-relaxed">
                  {p.tagline}
                </p>
              </div>

              {/* Status indicator */}
              <div className="mt-6 flex items-center gap-2 border-t border-[var(--border-subtle)] pt-4 text-[11px] font-mono text-[var(--text-muted)]">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                <span>Enterprise Technology Partner</span>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      {/* Enterprise SLA & Trust Assurance Bar */}
      <Reveal delay={150}>
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-card)] p-4 sm:p-5 text-xs font-mono text-[var(--text-muted)]">
          <div className="flex items-center gap-2">
            <CheckCircle size={15} className="text-emerald-500" />
            <span>99.9% Production SLA Standards</span>
          </div>
          <div className="flex items-center gap-2">
            <Shield size={15} className="text-blue-500" />
            <span>Strict NDA &amp; Source Code Confidentiality</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle size={15} className="text-emerald-500" />
            <span>100% On-Time Milestone Delivery</span>
          </div>
        </div>
      </Reveal>
    </Section>
  )
}
