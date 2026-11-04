import { Section, Heading, Card, Placeholder } from '../ui.jsx'
import Reveal, { stagger } from './Reveal.jsx'

const logos = ['[CLIENT LOGO]', '[CLIENT LOGO]', '[PARTNER LOGO]', '[PARTNER LOGO]']

export default function Clients() {
  return (
    <Section id="clients">
      <Heading eyebrow="Clients & Partners" title="Trusted technology partnerships." />
      <div className="grid grid-cols-2 gap-5 lg:grid-cols-4">
        {logos.map((l, i) => (
          <Reveal key={i} delay={stagger(i, 4, 80)}><Placeholder small>{l}</Placeholder></Reveal>
        ))}
      </div>
      <Reveal className="mt-6">
        <Card lift={false} className="p-6 lg:p-9">
          <blockquote className="mb-3 font-serif text-2xl leading-snug font-semibold">[CLIENT TESTIMONIAL]</blockquote>
          <p className="text-(--muted)">[NAME, ORGANIZATION]</p>
        </Card>
      </Reveal>
    </Section>
  )
}
