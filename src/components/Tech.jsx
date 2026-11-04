import { Section, Heading, Card, Eyebrow } from '../ui.jsx'
import Reveal, { stagger } from './Reveal.jsx'
import { stack, architecture } from '../data.js'

export default function Tech() {
  return (
    <Section id="technology">
      <Heading eyebrow="Technology & Innovation" title="Modern, future-ready stack." />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {stack.map((s, i) => (
          <Reveal key={s.label} delay={stagger(i)}>
            <Card>
              <p className="mb-2 text-[13px] font-semibold tracking-[0.12em] text-(--eyebrow) uppercase">{s.label}</p>
              <p>{s.items}</p>
            </Card>
          </Reveal>
        ))}
      </div>
      <Reveal className="mt-6">
        <Card>
          <p className="mb-2 text-[13px] font-semibold tracking-[0.12em] text-(--eyebrow) uppercase">Architecture</p>
          <p>{architecture}</p>
        </Card>
      </Reveal>
    </Section>
  )
}
