import { useState } from 'react'
import { Section, Eyebrow, Button, Card } from '../ui.jsx'
import Reveal from './Reveal.jsx'
import { serviceOptions } from '../data.js'

const empty = { name: '', organization: '', email: '', phone: '', service: serviceOptions[0], description: '' }

const labelCls = 'mb-1.5 block text-sm text-(--muted)'
const inputCls =
  'min-h-11 w-full rounded-lg border border-[#8FA3C7] bg-white px-3.5 py-3 text-navy transition duration-200 hover:border-brand focus:border-brand focus:ring-3 focus:ring-brand/25'

export default function Contact() {
  const [form, setForm] = useState(empty)
  const [sent, setSent] = useState(false)

  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    // TODO: send `form` to your backend or an email/form service here.
    setSent(true)
    setForm(empty)
  }

  return (
    <Section id="contact" tone="alt">
      <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-14">
        <Reveal>
          <Eyebrow>Contact us</Eyebrow>
          <h2 className="text-[27px] sm:text-3xl lg:text-[40px]">Let’s Build Something Great Together.</h2>
          <p className="mt-5 mb-8 text-[17px] text-(--muted)">
            Have a project idea, business challenge, or technology requirement? Our team is ready to understand your needs.
          </p>
          <ul className="space-y-1 text-(--muted)">
            <li>[OFFICE ADDRESS]</li>
            <li>[EMAIL ADDRESS]</li>
            <li>[PHONE NUMBER]</li>
            <li>[BUSINESS HOURS]</li>
          </ul>
        </Reveal>

        <Reveal delay={160}>
          <Card lift={false} className="sm:p-8">
            <form onSubmit={handleSubmit} className="grid gap-4">
              <div>
                <label htmlFor="name" className={labelCls}>Full name</label>
                <input id="name" name="name" type="text" autoComplete="name" required value={form.name} onChange={update} className={inputCls} />
              </div>
              <div>
                <label htmlFor="organization" className={labelCls}>Organization</label>
                <input id="organization" name="organization" type="text" autoComplete="organization" value={form.organization} onChange={update} className={inputCls} />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="email" className={labelCls}>Email address</label>
                  <input id="email" name="email" type="email" autoComplete="email" required value={form.email} onChange={update} className={inputCls} />
                </div>
                <div>
                  <label htmlFor="phone" className={labelCls}>Phone number</label>
                  <input id="phone" name="phone" type="tel" autoComplete="tel" value={form.phone} onChange={update} className={inputCls} />
                </div>
              </div>
              <div>
                <label htmlFor="service" className={labelCls}>Service required</label>
                <select id="service" name="service" value={form.service} onChange={update} className={inputCls}>
                  {serviceOptions.map((s) => <option key={s}>{s}</option>)}
                </select>
              </div>
              <div>
                <label htmlFor="description" className={labelCls}>Project description</label>
                <textarea id="description" name="description" rows="4" value={form.description} onChange={update} className={inputCls} />
              </div>
              <Button as="button" type="submit">Request a Proposal</Button>
              {sent && (
                <p role="status" className="font-medium text-brand-text">
                  Request received. We will reply to the email address you provided.
                </p>
              )}
            </form>
          </Card>
        </Reveal>
      </div>
    </Section>
  )
}
