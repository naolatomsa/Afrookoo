import { Section, Eyebrow, Button, Card } from '../ui.jsx'
import Reveal, { stagger } from './Reveal.jsx'
import { careerCards } from '../data.js'

export default function Careers() {
  return (
    <Section id="careers">
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
        <Reveal>
          <Eyebrow>Careers</Eyebrow>
          <h2 className="text-[27px] sm:text-3xl lg:text-[40px]">Build the future with us.</h2>
          <p className="mt-5 mb-7 text-[17px] text-(--muted)">
            Join engineers, designers, researchers, and technology professionals passionate about solving real-world challenges through innovation.
          </p>
          <Button href="#careers">View Available Positions</Button>
        </Reveal>
        <div className="grid gap-4 sm:grid-cols-2">
          {careerCards.map((c, i) => (
            <Reveal key={c} delay={stagger(i, 2, 100)}><Card>{c}</Card></Reveal>
          ))}
        </div>
      </div>
    </Section>
  )
}
