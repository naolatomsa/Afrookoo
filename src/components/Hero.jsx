import { Section, Button } from '../ui.jsx'
import Reveal from './Reveal.jsx'
import { stats, partners } from '../data.js'
import { ArrowRight, ArrowUpRight } from './Icons.jsx'
import HeroGraphic from './HeroGraphic.jsx'

export default function Hero() {
  return (
    <Section id="top" tone="hero" pad="pt-28 pb-16 sm:pt-36 sm:pb-20 lg:pt-40 lg:pb-24">
      <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-8 xl:gap-12">
        {/* Left Column: Bold Headline & Value Proposition */}
        <div className="lg:col-span-7 text-left">
          <Reveal>
            <h1 className="text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-white sm:text-5xl lg:text-6xl xl:text-[62px] leading-[1.08] mb-6">
              Transforming Ideas into{' '}
              <span className="text-blue-600 dark:text-blue-500">
                Digital Products
              </span>
              .
            </h1>

            <p className="text-base text-zinc-600 dark:text-zinc-400 leading-relaxed sm:text-lg max-w-xl mb-8">
              We design and engineer enterprise web systems, native iOS &amp; Android applications, and resilient cloud architectures. Built for speed, scale, and high-impact business outcomes.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 mb-10">
              <Button
                href="#contact"
                variant="primary"
                className="rounded-full bg-blue-600 hover:bg-blue-500 text-white font-medium px-7 py-3 shadow-lg shadow-blue-600/30 border border-blue-500/30 text-sm"
              >
                <span>Start a Project</span>
                <ArrowRight size={15} />
              </Button>

              <Button
                href="#work"
                variant="outline"
                className="rounded-full border border-zinc-300 dark:border-white/15 bg-white/80 dark:bg-white/5 hover:bg-zinc-100 dark:hover:bg-white/10 hover:border-zinc-400 dark:hover:border-white/30 text-zinc-800 dark:text-white font-medium px-6 py-3 backdrop-blur-md text-sm"
              >
                <span>Explore Selected Work</span>
                <ArrowUpRight size={15} />
              </Button>
            </div>

            {/* Partner Proof Strip (Clean Typography, No Glowing Dots) */}
            <div className="border-t border-zinc-200 dark:border-white/10 pt-6">
              <p className="font-mono text-[11px] uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-2 font-medium">
                Trusted by institutional and enterprise partners
              </p>
              <div className="flex flex-wrap items-center gap-x-5 gap-y-1.5 text-xs font-mono text-zinc-600 dark:text-zinc-400">
                {partners.map((p, idx) => (
                  <span key={p.name} className="flex items-center gap-2">
                    <span className="font-medium text-zinc-700 dark:text-zinc-300">{p.name}</span>
                    {idx < partners.length - 1 && <span className="text-zinc-300 dark:text-zinc-600 select-none">/</span>}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        {/* Right Column: 3D Floating Isometric Geometric Glass Sculpture */}
        <div className="lg:col-span-5 flex items-center justify-center">
          <Reveal delay={120}>
            <HeroGraphic />
          </Reveal>
        </div>
      </div>

      {/* Core Metrics Cards (Matching Figma Statistics Ribbon) */}
      <Reveal delay={180} className="mt-16 sm:mt-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 border-t border-zinc-200 dark:border-white/10 pt-10">
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl border border-zinc-200/80 dark:border-white/10 bg-white/90 dark:bg-zinc-900/40 p-5 sm:p-6 backdrop-blur-xl shadow-sm dark:shadow-xl transition-all hover:border-blue-500/40 dark:hover:border-blue-500/30 hover:shadow-md dark:hover:bg-zinc-900/60"
            >
              <div className="font-mono text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mb-1">
                {s.value}
              </div>
              <div className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-1">
                {s.label}
              </div>
              <div className="text-xs text-zinc-600 dark:text-zinc-400 leading-snug">
                {s.detail}
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </Section>
  )
}
