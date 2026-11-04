import { Section, Heading, Tag } from '../ui.jsx'
import Reveal, { stagger } from './Reveal.jsx'
import { insightTopics } from '../data.js'

export default function Insights() {
  return (
    <Section id="insights" tone="alt">
      <Heading
        eyebrow="Insights & News"
        title="Knowledge. Innovation. Perspectives."
        intro="Latest insights, technical articles, research, and company updates."
      />
      <div className="flex flex-wrap gap-3">
        {insightTopics.map((t, i) => (
          <Reveal key={t} delay={stagger(i, 7, 60)}><Tag>{t}</Tag></Reveal>
        ))}
      </div>
    </Section>
  )
}
