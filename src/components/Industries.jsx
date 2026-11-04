import { Section, Heading, Card } from '../ui.jsx'
import Reveal, { stagger } from './Reveal.jsx'
import { industries } from '../data.js'

export default function Industries() {
  return (
    <Section id="industries">
      <Heading eyebrow="Industries we serve" title="Focused on real operational challenges." />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {industries.map((name, n) => (
          <Reveal key={name} delay={stagger(n, 4, 70)}>
            <Card>{name}</Card>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
