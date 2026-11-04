import { Section, Eyebrow, Card, cardTitle } from '../ui.jsx'
import Reveal, { stagger } from './Reveal.jsx'
import { aboutCards } from '../data.js'

export default function About() {
  return (
    <Section id="about" tone="alt">
      <div className="grid items-start gap-8 lg:grid-cols-2 lg:gap-14">
        <Reveal>
          <Eyebrow>Who we are</Eyebrow>
          <h2 className="text-[27px] sm:text-3xl lg:text-[40px]">Technology-driven, built around your challenges.</h2>
        </Reveal>
        <Reveal delay={160} className="space-y-4 text-[17px] text-(--muted)">
          <p>Our team combines technical expertise, industry knowledge, and creative problem-solving to design, develop, and implement digital solutions that create measurable business value.</p>
          <p>We work with government institutions, enterprises, startups, and organizations to accelerate digital transformation and build sustainable technology ecosystems.</p>
        </Reveal>
      </div>
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {aboutCards.map((c, i) => (
          <Reveal key={c.title} delay={stagger(i)}>
            <Card>
              <h3 className={cardTitle}>{c.title}</h3>
              <p className="mt-2.5 text-(--muted)">{c.text}</p>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
