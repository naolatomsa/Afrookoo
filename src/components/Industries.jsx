import { Section, Heading, Card, cardTitle } from '../ui.jsx'
import Reveal, { stagger } from './Reveal.jsx'
import { industries } from '../data.js'
import { Shield, BarChart, Zap, Layers, Code, Cloud, FileText, Users, ArrowRight } from './Icons.jsx'

const iconMap = {
  Shield,
  BarChart,
  Zap,
  Layers,
  Code,
  Cloud,
  FileText,
  Users,
}

export default function Industries() {
  return (
    <Section id="industries" tone="surface">
      <Heading
        eyebrow="Industries We Empower"
        eyebrowIcon={Shield}
        title="Engineered for high-stakes operational environments."
        intro="We tailor software systems to specific regulatory, security, and operational workflows across key sectors."
      />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {industries.map((ind, n) => {
          const IconComponent = iconMap[ind.iconName] || Shield
          return (
            <Reveal key={ind.name} delay={stagger(n, 4, 70)}>
              <Card lift className="h-full flex flex-col justify-between p-6">
                <div>
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 mb-4">
                    <IconComponent size={20} />
                  </div>

                  <h3 className="font-serif text-lg font-bold text-[var(--text-heading)] mb-2">
                    {ind.name}
                  </h3>

                  <p className="text-xs leading-relaxed text-[var(--text-muted)] mb-4">
                    {ind.desc}
                  </p>
                </div>

                <div className="border-t border-[var(--border-subtle)] pt-3.5 mt-auto">
                  <span className="block font-mono text-[10px] text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-1">
                    Delivered Capabilities
                  </span>
                  <p className="text-xs font-medium text-[var(--text-body)]">
                    {ind.examples}
                  </p>
                </div>
              </Card>
            </Reveal>
          )
        })}
      </div>
    </Section>
  )
}
