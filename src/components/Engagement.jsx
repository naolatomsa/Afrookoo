import { Section, Heading, Button } from '../ui.jsx'
import Reveal, { stagger } from './Reveal.jsx'
import { engagementModels } from '../data.js'
import { Check, ArrowRight } from './Icons.jsx'

export default function Engagement({ onSelectLane }) {
  const handleSelect = (laneId) => {
    if (onSelectLane) {
      onSelectLane(laneId)
    }
    const el = document.getElementById('contact')
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <Section id="engagement" tone="surface" pad="py-16 sm:py-20 lg:py-24">
      <Heading
        title="Predictable Software Delivery"
        intro="Direct senior engineering access, weekly production demos, and 100% intellectual property ownership."
      />

      {/* 3 Clean Engagement Lanes */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        {engagementModels.map((lane, idx) => {
          const isTurnkey = lane.popular
          return (
            <Reveal key={lane.id} delay={stagger(idx, 3, 70)}>
              <div
                className={`relative flex h-full flex-col justify-between rounded-2xl border p-6 sm:p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 ${
                  isTurnkey
                    ? 'border-blue-500/50 bg-white dark:bg-zinc-900/70 shadow-blue-500/10 shadow-xl'
                    : 'border-zinc-200/80 dark:border-white/10 bg-white/90 dark:bg-zinc-900/40 hover:border-zinc-300 dark:hover:border-white/25 hover:bg-white dark:hover:bg-zinc-900/60 shadow-lg dark:shadow-xl'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs font-semibold text-blue-600 dark:text-blue-400">
                      {lane.duration}
                    </span>
                    <span className="rounded-full bg-zinc-100 dark:bg-white/5 border border-zinc-200 dark:border-white/10 px-2.5 py-0.5 font-mono text-[10px] font-medium text-zinc-700 dark:text-zinc-300 uppercase tracking-wider">
                      {lane.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold tracking-tight text-zinc-900 dark:text-white mb-2">
                    {lane.title}
                  </h3>

                  <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6">
                    {lane.tagline}
                  </p>

                  <div className="rounded-xl bg-zinc-50 dark:bg-zinc-950/70 p-3.5 mb-6 border border-zinc-200/80 dark:border-white/10">
                    <span className="font-mono text-[10px] font-medium uppercase tracking-wider text-zinc-500 dark:text-zinc-400 block mb-1">
                      Best Suited For
                    </span>
                    <p className="text-xs text-zinc-700 dark:text-zinc-300 leading-snug">
                      {lane.bestFor}
                    </p>
                  </div>

                  {/* Deliverables */}
                  <div className="space-y-2.5 mb-6 border-t border-zinc-200/80 dark:border-white/10 pt-5">
                    <span className="font-mono text-[10px] uppercase font-medium text-zinc-500 dark:text-zinc-400 tracking-wider block">
                      Deliverables &amp; Terms
                    </span>
                    {lane.features.map((feat) => (
                      <div key={feat} className="flex items-start gap-2.5 text-xs text-zinc-700 dark:text-zinc-300">
                        <Check size={14} className="text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Button */}
                <div className="pt-4 border-t border-zinc-200/80 dark:border-white/10">
                  <Button
                    onClick={() => handleSelect(lane.id)}
                    variant={isTurnkey ? 'primary' : 'outline'}
                    className="w-full text-xs justify-center rounded-full"
                  >
                    <span>Select Model</span>
                    <ArrowRight size={13} />
                  </Button>
                </div>
              </div>
            </Reveal>
          )
        })}
      </div>
    </Section>
  )
}
