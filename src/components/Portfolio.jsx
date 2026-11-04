import { Section, Heading, Button, Placeholder } from '../ui.jsx'
import Reveal, { stagger } from './Reveal.jsx'

export default function Portfolio() {
  return (
    <Section id="work" tone="alt">
      <Heading
        eyebrow="Portfolio & Case Studies"
        title="Our work shows more than promises."
        intro="Each case study covers the overview, client, challenge, solution, stack, and results."
      />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {[0, 1, 2].map((i) => (
          <Reveal as="article" key={i} delay={stagger(i)}>
            <Placeholder alt>[PROJECT SCREENSHOT]</Placeholder>
            <h3 className="mt-4 text-xl">[PROJECT NAME]</h3>
            <p className="mt-1 text-sm text-(--muted)">[CLIENT / INDUSTRY]</p>
          </Reveal>
        ))}
      </div>
      <Reveal className="mt-12"><Button href="#work">Explore Our Projects</Button></Reveal>
    </Section>
  )
}
