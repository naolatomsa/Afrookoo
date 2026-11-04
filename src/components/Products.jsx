import { Section, Heading, Tag } from '../ui.jsx'
import Reveal, { stagger } from './Reveal.jsx'
import { products } from '../data.js'

export default function Products() {
  return (
    <Section id="products" tone="alt">
      <Heading
        eyebrow="Products & Solutions"
        title="Products designed for scale, usability, and security."
        intro="Beyond our products, we build customized platforms around the unique requirements of each organization."
      />
      <div className="flex flex-wrap gap-3">
        {products.map((p, i) => (
          <Reveal key={p} delay={stagger(i, 7, 60)}><Tag>{p}</Tag></Reveal>
        ))}
      </div>
    </Section>
  )
}
