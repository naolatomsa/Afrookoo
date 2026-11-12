import { Section } from '../ui.jsx'
import Reveal, { stagger } from './Reveal.jsx'
import { Code, Smartphone, Zap, Cloud, ArrowRight } from './Icons.jsx'

const capabilities = [
  {
    id: 'enterprise-web',
    num: '01',
    title: 'Web Platforms & APIs',
    description:
      'High-concurrency applications and distributed APIs engineered for speed, security, and zero downtime.',
    tech: ['React', 'Next.js', 'Nest.js', 'Spring Boot', 'PostgreSQL'],
    icon: Code,
  },
  {
    id: 'native-mobile',
    num: '02',
    title: 'Native Mobile',
    description:
      'Silky-smooth native apps that harness device hardware directly, with zero hybrid compromises.',
    tech: ['Swift', 'SwiftUI', 'Kotlin', 'Jetpack Compose'],
    icon: Smartphone,
  },
  {
    id: 'pos-retail',
    num: '03',
    title: 'Retail POS & Commerce Systems',
    description:
      'High-speed checkout terminals and synchronized multi-branch inventory engines with instant audit trails.',
    tech: ['React', 'WebSockets', 'PostgreSQL', 'Thermal Print'],
    icon: Zap,
  },
  {
    id: 'cloud-devops',
    num: '04',
    title: 'Cloud Infrastructure & SRE',
    description:
      'Automated orchestration, zero-downtime pipelines, and continuous monitoring for enterprise uptime.',
    tech: ['Docker', 'Kubernetes', 'CI/CD', 'Prometheus'],
    icon: Cloud,
  },
]

function CapabilityRow({ cap, index, isLast }) {
  return (
    <Reveal delay={stagger(index, 1, 120)}>
      <div
        className={`group py-10 sm:py-14 transition-colors duration-300 ${
          !isLast ? 'border-b border-[var(--border-primary)]' : ''
        }`}
      >
        {/* Number and Title with Micro Slide */}
        <div className="flex items-baseline justify-between mb-4">
          <div className="flex items-baseline gap-4 sm:gap-6">
            <span
              className="font-mono text-sm text-[var(--text-muted)] group-hover:text-[var(--accent)] group-hover:translate-x-1 tabular-nums select-none transition-all duration-300 inline-block"
              aria-hidden="true"
            >
              {cap.num}
            </span>
            <h3
              className="text-2xl sm:text-3xl font-semibold tracking-tight text-[var(--text-heading)] leading-tight transition-colors duration-200"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              {cap.title}
            </h3>
          </div>

          <span
            className="hidden sm:inline-flex opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300 text-[var(--text-muted)] group-hover:text-[var(--accent)]"
            aria-hidden="true"
          >
            <ArrowRight size={18} />
          </span>
        </div>

        {/* Description */}
        <p className="text-[var(--text-body)] text-base sm:text-lg leading-relaxed max-w-xl sm:pl-[2.75rem]">
          {cap.description}
        </p>

        {/* Tech Pills with Micro Hover */}
        <div className="flex flex-wrap gap-2 mt-5 sm:pl-[2.75rem]">
          {cap.tech.map((t) => (
            <span
              key={t}
              className="rounded-full border border-[var(--border-primary)] group-hover:border-zinc-300 dark:group-hover:border-zinc-700 bg-transparent px-3 py-1 font-mono text-[11px] text-[var(--text-muted)] group-hover:text-[var(--text-heading)] tracking-wide transition-colors duration-200"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </Reveal>
  )
}

export default function Services() {
  return (
    <Section id="capabilities" pad="py-24 sm:py-32 lg:py-40">
      <div className="lg:grid lg:grid-cols-12 lg:gap-16 xl:gap-24">
        {/* Left Column: Sticky Header */}
        <div className="lg:col-span-4 mb-12 lg:mb-0">
          <div className="lg:sticky lg:top-32">
            <Reveal>
              <p className="font-mono text-xs uppercase tracking-widest text-[var(--accent)] mb-4">
                Capabilities
              </p>
              <h2
                className="text-4xl sm:text-5xl lg:text-[3.5rem] font-semibold tracking-tight text-[var(--text-heading)] leading-[1.05]"
              >
                What We
                <br />
                Build
              </h2>
              <div className="h-px w-16 bg-[var(--accent)] mt-8 opacity-40" />
            </Reveal>
          </div>
        </div>

        {/* Right Column: Scrollable Capabilities */}
        <div className="lg:col-span-8">
          <div className="border-t border-[var(--border-primary)]">
            {capabilities.map((cap, i) => (
              <CapabilityRow
                key={cap.id}
                cap={cap}
                index={i}
                isLast={i === capabilities.length - 1}
              />
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}
