import { Section, Heading, Card, Button, cardTitle } from '../ui.jsx'
import Reveal, { stagger } from './Reveal.jsx'
import { services } from '../data.js'

export default function Services() {
  return (
    <Section id="services">
      <Heading eyebrow="Services" title="End-to-end engineering, from idea to operation." />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s, i) => (
          <Reveal key={s.title} delay={stagger(i)}>
            <Card>
              <h3 className={cardTitle}>{s.title}</h3>
              <p className="mt-2.5 text-(--muted)">{s.text}</p>
            </Card>
          </Reveal>
        ))}
      </div>
      <Reveal className="mt-6">
        <Card className="flex flex-wrap items-center justify-between gap-6">
          <div>
            <h3 className={cardTitle}>IT Consulting &amp; Digital Transformation</h3>
            <p className="mt-2.5 max-w-[720px] text-(--muted)">
              We help organizations assess technology needs, define digital strategies, modernize existing systems, and implement effective solutions.
            </p>
          </div>
          <Button href="#contact" variant="outline">Discuss Your Project</Button>
        </Card>
      </Reveal>
    </Section>
  )
}
