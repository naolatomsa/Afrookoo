import { useState, useEffect } from 'react'
import { Section } from '../ui.jsx'
import Reveal from './Reveal.jsx'
import { projectTypes, timelines, companyInfo } from '../data.js'
import { Send, CheckCircle, Copy, ArrowUpRight, Code, Smartphone, Zap, Cloud, Check } from './Icons.jsx'
import StudioMap from './StudioMap.jsx'

// Clean icon map for the 4 project types
const projectIcons = {
  'web-nest': Code,
  'native-mobile': Smartphone,
  'pos-retail': Zap,
  'cloud-infra': Cloud,
}

export default function Contact({ preselectedLane }) {
  // Multi-select for services
  const [selectedServices, setSelectedServices] = useState(['web-nest'])
  // Timeline choice, including custom
  const [timeline, setTimeline] = useState('standard')
  const [customTimelineText, setCustomTimelineText] = useState('')

  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    email: '',
    scope: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [copiedEmail, setCopiedEmail] = useState(false)

  useEffect(() => {
    if (preselectedLane === 'sprint') setTimeline('immediate')
    if (preselectedLane === 'turnkey') setTimeline('standard')
    if (preselectedLane === 'pod') setTimeline('continuous')
  }, [preselectedLane])

  const copyEmail = () => {
    navigator.clipboard.writeText(companyInfo.email)
    setCopiedEmail(true)
    setTimeout(() => setCopiedEmail(false), 2500)
  }

  const handleInputChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const toggleService = (id) => {
    setSelectedServices((prev) => {
      if (prev.includes(id)) {
        // Keep at least one selected
        if (prev.length === 1) return prev
        return prev.filter((item) => item !== id)
      } else {
        return [...prev, id]
      }
    })
  }

  const handleSelectAllServices = () => {
    if (selectedServices.length === projectTypes.length) {
      setSelectedServices(['web-nest'])
    } else {
      setSelectedServices(projectTypes.map((p) => p.id))
    }
  }

  const generateMailtoUrl = () => {
    const selectedServiceTitles = selectedServices
      .map((id) => projectTypes.find((p) => p.id === id)?.title)
      .filter(Boolean)
      .join(', ')

    const timelineText =
      timeline === 'custom'
        ? `Custom Timeline: ${customTimelineText || 'Flexible / Specific Deadline'}`
        : `${currentTimeline?.title} (${currentTimeline?.detail})`

    const subject = `[Project Scope] ${formData.name || 'New Client'} - ${formData.organization || 'Inquiry'}`

    const bodyLines = [
      `Hello Afrookoo Engineering Team,`,
      ``,
      `I would like to request an architecture proposal and project scope evaluation.`,
      ``,
      `=== CLIENT INFORMATION ===`,
      `Name: ${formData.name}`,
      `Organization: ${formData.organization || 'N/A'}`,
      `Email: ${formData.email}`,
      ``,
      `=== CONFIGURED SCOPE ===`,
      `Selected Services: ${selectedServiceTitles}`,
      `Target Delivery Timeline: ${timelineText}`,
      ``,
      `=== PROJECT REQUIREMENTS & GOALS ===`,
      `${formData.scope}`,
      ``,
      `Best regards,`,
      `${formData.name}`,
    ]

    const body = bodyLines.join('\n')

    return `mailto:${companyInfo.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    const mailtoUrl = generateMailtoUrl()
    window.location.href = mailtoUrl

    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitted(true)
    }, 400)
  }

  const currentTimeline = timelines.find((t) => t.id === timeline) || timelines[1]

  const inputClasses =
    'w-full rounded-xl border border-zinc-200 dark:border-[#26262C] bg-white dark:bg-[#0E0E10] px-4 py-3.5 text-sm text-zinc-900 dark:text-white placeholder:text-zinc-400 dark:placeholder:text-zinc-500 focus:border-zinc-950 dark:focus:border-white focus:outline-none transition-all'

  return (
    <Section id="contact" pad="py-24 sm:py-32 lg:py-40">
      <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
        {/* Left Column: Direct Engineering Channels */}
        <div className="lg:col-span-5 space-y-8">
          <Reveal>
            <div className="text-xs font-mono uppercase tracking-widest text-[var(--accent)] font-semibold block mb-3">
              Direct Engineering Inquiries
            </div>
            <div className="text-mask">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[var(--text-heading)] leading-[1.1] text-slide-up">
                Start your build with our technical leads.
              </h2>
            </div>
            <div className="text-mask mt-4">
              <p className="text-base text-[var(--text-body)] leading-relaxed text-slide-up delay-1">
                Every inquiry is evaluated directly by our senior engineers within 4 business hours. We review architecture, tech stack fit, and project scope.
              </p>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="space-y-6 pt-4 border-t border-[var(--border-primary)]">
              {/* Direct Email with Copy */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs text-[var(--text-muted)] uppercase tracking-wider mb-1 font-mono font-medium">
                    Direct Email
                  </p>
                  <a
                    href={`mailto:${companyInfo.email}`}
                    className="text-sm font-mono font-medium text-[var(--text-heading)] hover:text-[var(--accent)] transition-colors"
                  >
                    {companyInfo.email}
                  </a>
                </div>
                <button
                  type="button"
                  onClick={copyEmail}
                  className="rounded-full p-2 text-[var(--text-muted)] hover:text-[var(--text-heading)] hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all active:scale-90 cursor-pointer"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? <CheckCircle size={16} /> : <Copy size={16} />}
                </button>
              </div>

              {/* Telegram Channel */}
              <div className="pt-4 border-t border-[var(--border-primary)]">
                <p className="text-xs text-[var(--text-muted)] uppercase tracking-wider mb-1 font-mono font-medium">
                  Telegram Direct
                </p>
                <a
                  href={companyInfo.telegram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-mono font-medium text-[var(--text-heading)] hover:text-[var(--accent)] transition-colors"
                >
                  <span>{companyInfo.telegramHandle}</span>
                  <ArrowUpRight size={13} />
                </a>
              </div>

              {/* Physical Studio & Interactive Map Integration */}
              <div className="pt-4 border-t border-[var(--border-primary)] space-y-3">
                <StudioMap />
              </div>

              {/* Response SLA */}
              <div className="pt-4 border-t border-[var(--border-primary)] flex items-center justify-between text-xs font-mono text-[var(--text-muted)]">
                <span>Response Time SLA:</span>
                <span className="text-emerald-500 font-semibold">&lt; 4 Hours</span>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Right Column: Interactive Multi-Scope Configurator */}
        <div className="lg:col-span-7">
          <Reveal delay={120}>
            {submitted ? (
              <div className="py-16 text-center space-y-5 border-t lg:border-t-0 border-[var(--border-primary)]">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-zinc-100 dark:bg-zinc-900 text-emerald-500">
                  <CheckCircle size={28} />
                </div>
                <h4 className="text-2xl font-semibold text-[var(--text-heading)]">
                  Scope Prepared &amp; Email Opened
                </h4>
                <p className="max-w-md mx-auto text-sm text-[var(--text-body)] leading-relaxed">
                  Your email client has been launched with your selected project specifications addressed to <span className="font-mono text-zinc-900 dark:text-white font-medium">{companyInfo.email}</span>. Simply click send in your mail app.
                </p>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href={generateMailtoUrl()}
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold bg-zinc-950 text-white dark:bg-white dark:text-zinc-950 transition-all hover:opacity-90"
                  >
                    <span>Open Mail App Again</span>
                    <ArrowUpRight size={13} />
                  </a>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="px-4 py-2.5 text-xs font-mono uppercase tracking-wider text-zinc-500 hover:text-zinc-950 dark:hover:text-white transition-colors cursor-pointer"
                  >
                    Modify Configured Scope
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8 border-t lg:border-t-0 border-[var(--border-primary)] pt-8 lg:pt-0">
                {/* 01. Select Project Services (Multi-Select Enabled) */}
                <div className="space-y-3">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1.5">
                    <div>
                      <span className="text-xs font-mono font-medium uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                        01. Select Project Services
                      </span>
                      <span className="text-[11px] font-mono text-zinc-400 dark:text-zinc-500 block">
                        Select one, multiple, or full-ecosystem build
                      </span>
                    </div>

                    <button
                      type="button"
                      onClick={handleSelectAllServices}
                      className="text-[11px] font-mono text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white underline underline-offset-4 cursor-pointer self-start sm:self-auto"
                    >
                      {selectedServices.length === projectTypes.length
                        ? 'Reset Selection'
                        : 'Select All Services'}
                    </button>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {projectTypes.map((pt) => {
                      const isSelected = selectedServices.includes(pt.id)
                      const IconComponent = projectIcons[pt.id] || Code

                      return (
                        <div
                          key={pt.id}
                          role="checkbox"
                          aria-checked={isSelected}
                          tabIndex={0}
                          onClick={() => toggleService(pt.id)}
                          onKeyDown={(e) => e.key === 'Enter' && toggleService(pt.id)}
                          className={`group relative flex flex-col justify-between p-4 rounded-2xl border cursor-pointer select-none transition-all duration-200 active:scale-[0.98] ${
                            isSelected
                              ? 'bg-zinc-50 dark:bg-[#141418] border-zinc-950 dark:border-white shadow-sm ring-1 ring-zinc-950/10 dark:ring-white/20'
                              : 'bg-white dark:bg-[#0E0E10] border-zinc-200/90 dark:border-[#26262C] hover:border-zinc-400 dark:hover:border-zinc-600'
                          }`}
                        >
                          {/* Top Row: Icon and Custom Checkbox Indicator */}
                          <div className="flex items-center justify-between mb-3">
                            <span
                              className={`p-2 rounded-xl transition-colors ${
                                isSelected
                                  ? 'bg-zinc-950 text-white dark:bg-white dark:text-zinc-950'
                                  : 'bg-zinc-100 text-zinc-600 dark:bg-[#181820] dark:text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-white'
                              }`}
                            >
                              <IconComponent size={16} />
                            </span>

                            <span
                              className={`w-5 h-5 rounded-md border flex items-center justify-center transition-colors ${
                                isSelected
                                  ? 'border-zinc-950 dark:border-white bg-zinc-950 dark:bg-white text-white dark:text-zinc-950'
                                  : 'border-zinc-300 dark:border-zinc-700 bg-transparent'
                              }`}
                            >
                              {isSelected && <Check size={11} />}
                            </span>
                          </div>

                          {/* Title & Desc */}
                          <div>
                            <h4 className="text-sm font-semibold text-zinc-950 dark:text-white mb-1 leading-snug">
                              {pt.title}
                            </h4>
                            <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
                              {pt.desc}
                            </p>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>

                {/* 02. Target Delivery Timeline (With Custom Timeline Option) */}
                <div className="space-y-3 pt-2">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-xs font-mono font-medium uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                        02. Target Delivery Timeline
                      </span>
                      <span className="text-[11px] font-mono text-zinc-400 dark:text-zinc-500 block">
                        Choose a standard cadence or specify custom launch milestones
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                    {timelines.map((tl) => {
                      const isSelected = timeline === tl.id

                      return (
                        <div
                          key={tl.id}
                          role="radio"
                          aria-checked={isSelected}
                          tabIndex={0}
                          onClick={() => setTimeline(tl.id)}
                          onKeyDown={(e) => e.key === 'Enter' && setTimeline(tl.id)}
                          className={`group relative flex flex-col justify-between p-4 rounded-2xl border cursor-pointer select-none transition-all duration-200 active:scale-[0.98] ${
                            isSelected
                              ? 'bg-zinc-50 dark:bg-[#141418] border-zinc-950 dark:border-white shadow-sm ring-1 ring-zinc-950/10 dark:ring-white/20'
                              : 'bg-white dark:bg-[#0E0E10] border-zinc-200/90 dark:border-[#26262C] hover:border-zinc-400 dark:hover:border-zinc-600'
                          }`}
                        >
                          <div className="flex items-center justify-between mb-2">
                            <span
                              className="font-medium text-xs tracking-tight text-zinc-900 dark:text-zinc-100 font-mono"
                              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                            >
                              {tl.id === 'custom' ? 'CUSTOM' : tl.detail.split(' ')[0]}
                            </span>

                            <span
                              className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center transition-colors ${
                                isSelected
                                  ? 'border-zinc-950 dark:border-white bg-zinc-950 dark:bg-white'
                                  : 'border-zinc-300 dark:border-zinc-700'
                              }`}
                            >
                              {isSelected && (
                                <span className="w-1 h-1 rounded-full bg-white dark:bg-zinc-950" />
                              )}
                            </span>
                          </div>

                          <div>
                            <h4 className="text-sm font-semibold text-zinc-950 dark:text-white mb-0.5">
                              {tl.title}
                            </h4>
                            <p className="text-[11px] text-zinc-500 dark:text-zinc-400 leading-snug">
                              {tl.detail.includes('(')
                                ? tl.detail.split('(')[1].replace(')', '')
                                : tl.detail}
                            </p>
                          </div>
                        </div>
                      )
                    })}
                  </div>

                  {/* Custom Timeline Input Prompt */}
                  {timeline === 'custom' && (
                    <div className="pt-2">
                      <label className="text-[11px] font-mono text-zinc-500 dark:text-zinc-400 block mb-1.5">
                        Target Launch Date or Milestone *
                      </label>
                      <input
                        type="text"
                        required
                        value={customTimelineText}
                        onChange={(e) => setCustomTimelineText(e.target.value)}
                        placeholder="e.g., Launch by Q3 2026, fixed deadline of November 15, flexible..."
                        className={inputClasses}
                      />
                    </div>
                  )}
                </div>

                {/* 03. Project & Contact Details */}
                <div className="space-y-4 pt-4 border-t border-zinc-200/80 dark:border-[#222228]">
                  <div className="flex items-center justify-between">
                    <label className="text-xs font-mono font-medium uppercase tracking-wider text-zinc-500 dark:text-zinc-400 block">
                      03. Project &amp; Contact Details
                    </label>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your Name *"
                      className={inputClasses}
                    />
                    <input
                      type="text"
                      name="organization"
                      value={formData.organization}
                      onChange={handleInputChange}
                      placeholder="Company / Organization"
                      className={inputClasses}
                    />
                  </div>

                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Work Email Address *"
                    className={inputClasses}
                  />

                  <textarea
                    name="scope"
                    rows={4}
                    required
                    value={formData.scope}
                    onChange={handleInputChange}
                    placeholder="Brief overview of system requirements, integration goals, or timeline..."
                    className={`${inputClasses} resize-none`}
                  />
                </div>

                {/* Live Real-Time Multi-Scope Configured Badge */}
                <div className="p-4 rounded-2xl border border-zinc-200/80 dark:border-[#222228] bg-zinc-50/70 dark:bg-[#111115] text-xs font-mono flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 transition-all">
                  <div className="flex items-center gap-2 min-w-0">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                    <span className="text-zinc-400 dark:text-zinc-500 shrink-0">Selected Scope:</span>
                    <span
                      key={selectedServices.join('-')}
                      className="font-medium text-zinc-900 dark:text-white truncate animate-text-appear"
                    >
                      {selectedServices.length === projectTypes.length
                        ? 'Full Ecosystem (All 4 Services)'
                        : selectedServices
                            .map((id) => projectTypes.find((p) => p.id === id)?.title.split(' ')[0])
                            .join(' + ')}
                    </span>
                  </div>

                  <span
                    key={timeline + (customTimelineText || '')}
                    className="text-zinc-500 dark:text-zinc-400 font-medium whitespace-nowrap shrink-0 animate-text-appear"
                  >
                    {timeline === 'custom'
                      ? customTimelineText
                        ? `Target: ${customTimelineText}`
                        : 'Custom Schedule'
                      : currentTimeline?.title}
                  </span>
                </div>

                {/* Action Submit Button */}
                <div className="space-y-3">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full rounded-xl bg-zinc-950 dark:bg-white hover:bg-zinc-800 dark:hover:bg-zinc-100 text-white dark:text-zinc-950 h-13 text-sm font-semibold tracking-wide transition-all cursor-pointer flex items-center justify-center gap-2.5 shadow-lg shadow-zinc-950/10 dark:shadow-none disabled:opacity-50"
                  >
                    <span>{isSubmitting ? 'Submitting Scope...' : 'Request Architecture Proposal'}</span>
                    <Send size={14} />
                  </button>

                  <p className="text-center font-mono text-[11px] text-zinc-400 dark:text-zinc-500">
                    Direct technical evaluation · Response guaranteed within &lt; 4 business hours
                  </p>
                </div>
              </form>
            )}
          </Reveal>
        </div>
      </div>
    </Section>
  )
}
