import { Section, Heading, Card, Button, cardTitle, TagBadge } from '../ui.jsx'
import Reveal, { stagger } from './Reveal.jsx'
import { products } from '../data.js'
import { Layers, CheckCircle, ArrowRight, ArrowUpRight } from './Icons.jsx'

export default function Products() {
  return (
    <Section id="products" tone="surface">
      <Heading
        eyebrow="Platforms & Systems"
        eyebrowIcon={Layers}
        title="Proven software platforms and digital enterprise systems."
        intro="Centering around our flagship ORA POS &amp; Inventory Intelligence platform, systems consulting practice, and custom enterprise software builds."
      />

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
        {products.map((p, i) => (
          <Reveal key={p.id} delay={stagger(i)}>
            <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-[var(--border-card)] bg-[var(--bg-card)] shadow-md transition-all duration-300 hover:-translate-y-1.5 hover:border-blue-500/50 hover:shadow-xl">
              {/* Product Visual Banner */}
              <div className="relative h-48 w-full overflow-hidden bg-slate-900">
                <img
                  src={p.image}
                  alt={p.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-90"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
                
                <div className="absolute top-3.5 left-3.5">
                  <span className="rounded-full bg-slate-900/90 backdrop-blur-md border border-slate-700/80 px-3 py-1 font-mono text-[11px] font-semibold text-blue-400">
                    {p.category}
                  </span>
                </div>

                <div className="absolute top-3.5 right-3.5">
                  <span className="rounded-full bg-blue-600/90 backdrop-blur-md px-2.5 py-1 text-[11px] font-bold text-white shadow-sm">
                    {p.badge}
                  </span>
                </div>
              </div>

              {/* Product Body */}
              <div className="flex flex-1 flex-col justify-between p-6">
                <div>
                  <h3 className="font-serif text-xl font-bold text-[var(--text-heading)] group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {p.title}
                  </h3>
                  <p className="font-mono text-xs text-blue-600 dark:text-blue-400 font-medium mt-1 mb-3">
                    {p.tagline}
                  </p>
                  <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed mb-4">
                    {p.description}
                  </p>

                  {/* Key Features */}
                  <div className="space-y-1.5 border-t border-[var(--border-subtle)] pt-3.5 mb-5">
                    {p.features.map((feat) => (
                      <div key={feat} className="flex items-start gap-2 text-xs text-[var(--text-body)]">
                        <CheckCircle size={13} className="text-emerald-500 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer with Stack and Demo CTA */}
                <div className="border-t border-[var(--border-subtle)] pt-4 mt-auto">
                  <div className="flex flex-wrap gap-1 mb-4">
                    {p.stack.map((item) => (
                      <span
                        key={item}
                        className="rounded bg-slate-100 dark:bg-slate-800/80 px-2 py-0.5 font-mono text-[10px] text-[var(--text-muted)]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:gap-2.5 transition-all"
                  >
                    <span>Request Product Demo &amp; Pricing</span>
                    <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
