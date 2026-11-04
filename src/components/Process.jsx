import { Section, Heading } from '../ui.jsx'
import Reveal, { stagger } from './Reveal.jsx'
import { process } from '../data.js'

export default function Process() {
  return (
    <Section id="process" tone="alt">
      <Heading eyebrow="Our development process" title="Structured, collaborative, transparent." />
      <ol className="grid gap-x-5 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
        {process.map((p, i) => (
          <Reveal as="li" key={p} delay={stagger(i, 4, 80)}>
            <div className="border-t-2 border-brand pt-4 transition duration-300 hover:-translate-y-1.5 hover:border-navy">
              <span className="mb-2 block font-serif text-[15px] font-semibold text-(--eyebrow)">Step {i + 1}</span>
              <h3 className="text-[19px]">{p}</h3>
            </div>
          </Reveal>
        ))}
      </ol>
    </Section>
  )
}
