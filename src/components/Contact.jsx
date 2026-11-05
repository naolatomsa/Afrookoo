import { useState } from 'react'
import { Section, Eyebrow, Button, Card, AddisAbabaClock } from '../ui.jsx'
import Reveal from './Reveal.jsx'
import { serviceOptions, companyInfo } from '../data.js'
import { MapPin, Mail, Phone, Clock, Shield, Send, CheckCircle, Copy, Telegram, LinkedIn, GitHub } from './Icons.jsx'

const empty = {
  name: '',
  organization: '',
  email: '',
  phone: '',
  service: serviceOptions[0],
  budget: 'Under $10k',
  description: '',
}

export default function Contact() {
  const [form, setForm] = useState(empty)
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const [copied, setCopied] = useState(false)

  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const copyEmail = () => {
    navigator.clipboard.writeText(companyInfo.email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2500)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)

    // Simulate rapid dispatch / integration
    setTimeout(() => {
      setLoading(false)
      setSent(true)
      setForm(empty)
    }, 800)
  }

  const labelCls = 'mb-1.5 block text-xs font-semibold uppercase tracking-wider text-[var(--text-body)]'
  const inputCls =
    'min-h-[46px] w-full rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-card)] px-4 py-2.5 text-sm text-[var(--text-heading)] transition-all duration-200 placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none'

  return (
    <Section id="contact" tone="surface">
      <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-14">
        {/* Left Column: Direct Info & Client Commitments */}
        <div className="lg:col-span-5 space-y-8">
          <Reveal>
            <Eyebrow icon={Mail}>Get in Touch</Eyebrow>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[var(--text-heading)] mt-3 leading-[1.15]">
              Let’s build something extraordinary together.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[var(--text-muted)]">
              Have a software vision, enterprise infrastructure challenge, or AI initiative? Our engineering leadership is ready to analyze your technical needs.
            </p>
          </Reveal>

          {/* Contact Details List */}
          <Reveal delay={100}>
            <div className="space-y-4 rounded-2xl border border-[var(--border-card)] bg-[var(--bg-card)] p-6 shadow-sm">
              <div className="flex items-start gap-3.5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400">
                  <MapPin size={18} />
                </div>
                <div>
                  <h4 className="font-serif text-sm font-bold text-[var(--text-heading)]">
                    Headquarters
                  </h4>
                  <p className="text-xs text-[var(--text-muted)] mt-0.5">
                    {companyInfo.address}
                  </p>
                  <p className="text-[11px] font-mono text-blue-500 mt-1">
                    {companyInfo.location}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 border-t border-[var(--border-subtle)] pt-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400">
                  <Mail size={18} />
                </div>
                <div className="flex-1">
                  <h4 className="font-serif text-sm font-bold text-[var(--text-heading)]">
                    Direct Email
                  </h4>
                  <div className="flex items-center gap-2 mt-0.5">
                    <a
                      href={`mailto:${companyInfo.email}`}
                      className="text-xs text-blue-600 dark:text-blue-400 hover:underline font-mono"
                    >
                      {companyInfo.email}
                    </a>
                    <button
                      type="button"
                      onClick={copyEmail}
                      className="rounded p-1 text-slate-400 hover:text-blue-500 transition-colors cursor-pointer"
                      title="Copy email to clipboard"
                    >
                      {copied ? <CheckCircle size={14} className="text-emerald-500" /> : <Copy size={14} />}
                    </button>
                    {copied && <span className="font-mono text-[10px] text-emerald-500">Copied!</span>}
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3.5 border-t border-[var(--border-subtle)] pt-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400">
                  <Clock size={18} />
                </div>
                <div>
                  <h4 className="font-serif text-sm font-bold text-[var(--text-heading)]">
                    Operational Hours
                  </h4>
                  <p className="text-xs text-[var(--text-muted)] mt-0.5">
                    {companyInfo.hours}
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Client Commitment & Response Promise Card */}
          <Reveal delay={150}>
            <div className="rounded-2xl border border-[var(--border-card)] bg-[var(--bg-card)] p-6 shadow-sm">
              <div className="flex items-center gap-3.5 mb-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400">
                  <Shield size={18} />
                </div>
                <div>
                  <h4 className="font-serif text-base font-bold text-[var(--text-heading)]">
                    Enterprise Client Commitment
                  </h4>
                  <span className="text-[11px] font-mono text-blue-600 dark:text-blue-400 font-medium">
                    Direct Architect Engagement
                  </span>
                </div>
              </div>

              <p className="text-xs text-[var(--text-muted)] leading-relaxed mb-4">
                We treat every inquiry with senior architectural care. Submit your project requirements to receive a structured technical assessment and scope estimate within 24 hours.
              </p>

              <div className="space-y-2.5 border-t border-[var(--border-subtle)] pt-4 text-xs text-[var(--text-body)]">
                <div className="flex items-center gap-2.5">
                  <CheckCircle size={15} className="text-emerald-500 shrink-0" />
                  <span>24-Hour Technical Proposal Turnaround</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle size={15} className="text-emerald-500 shrink-0" />
                  <span>Mutual Non-Disclosure Agreement (NDA) Protected</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle size={15} className="text-emerald-500 shrink-0" />
                  <span>Direct Senior Software Architect Access</span>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Direct Telegram & Social Links */}
          <Reveal delay={200}>
            <div className="flex items-center gap-3">
              <a
                href={companyInfo.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-card)] py-2.5 text-xs font-semibold text-[var(--text-heading)] hover:border-blue-500 hover:text-blue-500 transition-colors shadow-sm"
              >
                <Telegram size={16} className="text-sky-500" />
                <span>Chat on Telegram</span>
              </a>

              <a
                href={companyInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-card)] p-2.5 text-[var(--text-muted)] hover:text-blue-500 hover:border-blue-500 transition-colors shadow-sm"
                title="LinkedIn"
              >
                <LinkedIn size={18} />
              </a>

              <a
                href={companyInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-card)] p-2.5 text-[var(--text-muted)] hover:text-blue-500 hover:border-blue-500 transition-colors shadow-sm"
                title="GitHub"
              >
                <GitHub size={18} />
              </a>
            </div>
          </Reveal>
        </div>

        {/* Right Column: Interactive Proposal Form */}
        <div className="lg:col-span-7">
          <Reveal delay={120}>
            <div className="rounded-3xl border border-[var(--border-card)] bg-[var(--bg-card)] p-6 sm:p-10 shadow-xl">
              <h3 className="font-serif text-2xl font-bold text-[var(--text-heading)] mb-2">
                Request a Detailed Proposal
              </h3>
              <p className="text-xs sm:text-sm text-[var(--text-muted)] mb-8">
                Fill out the brief below and our architects will review your requirements and respond within 24 business hours.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className={labelCls}>
                      Your Full Name *
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="e.g. Abebe Bikila"
                      value={form.name}
                      onChange={update}
                      className={inputCls}
                    />
                  </div>

                  <div>
                    <label htmlFor="organization" className={labelCls}>
                      Company / Organization
                    </label>
                    <input
                      id="organization"
                      name="organization"
                      type="text"
                      placeholder="e.g. Enterprise Ltd."
                      value={form.organization}
                      onChange={update}
                      className={inputCls}
                    />
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="email" className={labelCls}>
                      Work Email *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="name@company.com"
                      value={form.email}
                      onChange={update}
                      className={inputCls}
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className={labelCls}>
                      Phone / WhatsApp / Telegram
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+251 9... or international"
                      value={form.phone}
                      onChange={update}
                      className={inputCls}
                    />
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="service" className={labelCls}>
                      Primary Service Required
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={form.service}
                      onChange={update}
                      className={inputCls}
                    >
                      {serviceOptions.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="budget" className={labelCls}>
                      Target Budget Range
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={form.budget}
                      onChange={update}
                      className={inputCls}
                    >
                      <option value="Under $5k">Under $5k (Prototyping / MVP)</option>
                      <option value="$5k - $15k">$5k - $15k (Standard Build)</option>
                      <option value="$15k - $50k">$15k - $50k (Enterprise Platform)</option>
                      <option value="$50k+">$50k+ (Comprehensive Modernization)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="description" className={labelCls}>
                    Project Overview &amp; Technical Requirements *
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    rows={4}
                    required
                    placeholder="Briefly describe your objectives, intended users, current technology stack, and desired launch timeline..."
                    value={form.description}
                    onChange={update}
                    className={`${inputCls} resize-y min-h-[110px]`}
                  />
                </div>

                <Button
                  as="button"
                  type="submit"
                  variant="primary"
                  className="w-full text-base py-3 min-h-[50px]"
                  disabled={loading}
                >
                  {loading ? (
                    <span>Submitting Request...</span>
                  ) : (
                    <>
                      <span>Submit Project Proposal Request</span>
                      <Send size={16} />
                    </>
                  )}
                </Button>

                {sent && (
                  <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-4 text-emerald-600 dark:text-emerald-400">
                    <div className="flex items-center gap-2 font-semibold text-sm">
                      <CheckCircle size={18} />
                      <span>Request successfully received!</span>
                    </div>
                    <p className="text-xs mt-1 text-slate-300">
                      Our lead software architect will review your project requirements and follow up via email at <strong className="font-mono">{form.email || 'your address'}</strong>.
                    </p>
                  </div>
                )}
              </form>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  )
}
