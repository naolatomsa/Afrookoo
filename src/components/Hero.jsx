import { Section, Eyebrow, Button, Card } from '../ui.jsx'
import Reveal from './Reveal.jsx'
import { capabilities } from '../data.js'

export default function Hero() {
  return (
    <Section id="top" tone="dark" pad="pt-12 pb-14 sm:pb-16 lg:pt-24 lg:pb-24">
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
        <Reveal>
          <Eyebrow>Software engineering company</Eyebrow>
          <h1 className="text-[34px] sm:text-[44px] lg:text-[54px] xl:text-6xl">
            Building Intelligent Technology. Transforming Businesses.
          </h1>
          <p className="mt-6 mb-8 max-w-[560px] text-lg text-(--muted)">
            We deliver innovative, scalable, and secure digital solutions, turning ideas into impactful products through
            software engineering, artificial intelligence, automation, and emerging technologies.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button href="#services" className="max-sm:w-full">Explore Our Solutions</Button>
            <Button href="#contact" variant="outline" className="max-sm:w-full">Start a Project</Button>
          </div>
        </Reveal>
        <Reveal delay={160}>
          <Card className="lg:p-9">
            <Eyebrow>Our capabilities</Eyebrow>
            <ul>
              {capabilities.map((c) => (
                <li key={c} className="border-b border-[#374151] py-3 first:pt-0 last:border-0 last:pb-0">{c}</li>
              ))}
            </ul>
          </Card>
        </Reveal>
      </div>
    </Section>
  )
}
