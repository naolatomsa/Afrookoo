import { useState, useEffect } from 'react'
import { Section } from '../ui.jsx'
import Reveal from './Reveal.jsx'
import { projectTypes, timelines, companyInfo } from '../data.js'
import {
  MapPin,
  Mail,
  Send,
  CheckCircle,
  Copy,
  Telegram,
} from './Icons.jsx'

export default function Contact({ preselectedLane }) {
  const [projectType, setProjectType] = useState('web-nest')
  const [timeline, setTimeline] = useState('standard')
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

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitted(true)
    }, 600)
  }

  const selectedTypeObj = projectTypes.find((p) => p.id === projectType) || projectTypes[0]

  return (
    <Section id="contact" tone="default" pad="py-16 sm:py-20 lg:py-24">
      <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-12">
        {/* Left Column: Direct Info & Addis Ababa Positioning */}
        <div className="lg:col-span-5 space-y-6">
          <Reveal>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-zinc-900 dark:text-white leading-tight">
              Start your build with an engineering-led team.
            </h2>
            <p className="mt-4 text-sm sm:text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
              Your inquiry is evaluated directly by our technical leads within 4 business hours. We review architecture, tech stack, and deliver an actionable technical roadmap.
            </p>
          </Reveal>

          {/* Contact Details Card */}
          <Reveal delay={100}>
            <div className="space-y-4 rounded-2xl border border-zinc-200/80 dark:border-white/10 bg-white/90 dark:bg-zinc-900/40 p-6 backdrop-blur-xl shadow-lg dark:shadow-xl">
              <div className="flex items-start gap-3.5">
                <MapPin size={18} className="text-zinc-400 dark:text-zinc-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-zinc-950 dark:text-zinc-100">
                    Addis Ababa Engineering Studio
                  </h4>
                  <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-0.5">
                    {companyInfo.address}
                  </p>
                  <p className="text-[11px] font-mono text-zinc-400 dark:text-zinc-500 mt-1">
                    {companyInfo.location}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 border-t border-zinc-100 dark:border-zinc-800/80 pt-4">
                <Mail size={18} className="text-zinc-400 dark:text-zinc-500 shrink-0 mt-0.5" />
                <div className="flex-1">
                  <h4 className="text-sm font-semibold text-zinc-950 dark:text-zinc-100">
                    Direct Email
                  </h4>
                  <div className="flex items-center gap-2 mt-0.5">
                    <a
                      href={`mailto:${companyInfo.email}`}
                      className="text-xs text-zinc-700 dark:text-zinc-300 hover:text-black dark:hover:text-white font-mono font-medium"
                    >
                      {companyInfo.email}
                    </a>
                    <button
                      type="button"
                      onClick={copyEmail}
                      className="rounded p-1 text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200 transition-colors cursor-pointer"
                      title="Copy email to clipboard"
                    >
                      <Copy size={13} />
                    </button>
                    {copiedEmail && (
                      <span className="font-mono text-[10px] text-zinc-500 dark:text-zinc-400">
                        Copied
                      </span>
                    )}
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3.5 border-t border-zinc-100 dark:border-zinc-800/80 pt-4">
                <Telegram size={18} className="text-zinc-400 dark:text-zinc-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-zinc-950 dark:text-zinc-100">
                    Telegram Direct
                  </h4>
                  <a
                    href={companyInfo.telegram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-zinc-700 dark:text-zinc-300 hover:text-black dark:hover:text-white font-mono font-medium"
                  >
                    {companyInfo.telegramHandle}
                  </a>
                </div>
              </div>

              {/* SLA Guarantee */}
              <div className="rounded-lg bg-zinc-50 dark:bg-zinc-900/60 p-3 flex items-center justify-between font-mono text-xs text-zinc-600 dark:text-zinc-400 border border-zinc-100 dark:border-zinc-800/80">
                <span>Response Window: Under 4 Business Hours</span>
                <span className="text-zinc-400 dark:text-zinc-500 font-semibold">UTC+3</span>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Right Column: Project Scoping Form */}
        <div className="lg:col-span-7">
          <Reveal delay={120}>
            <div className="rounded-2xl border border-zinc-200/80 dark:border-white/10 bg-white/90 dark:bg-zinc-900/40 p-6 sm:p-8 backdrop-blur-xl shadow-lg dark:shadow-xl">
              <div className="border-b border-zinc-100 dark:border-zinc-800/80 pb-4 mb-6">
                <span className="font-mono text-xs font-medium uppercase tracking-wider text-zinc-500 dark:text-zinc-400 block mb-1">
                  Project Inquiry
                </span>
                <h3 className="text-xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
                  Tell us about your requirements
                </h3>
              </div>

              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100">
                    <CheckCircle size={24} />
                  </div>
                  <h4 className="text-xl font-semibold text-zinc-950 dark:text-zinc-50">
                    Scope Received
                  </h4>
                  <p className="max-w-md mx-auto text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    Thank you, {formData.name || 'Partner'}. Our engineering team is reviewing your {selectedTypeObj.title} specifications. We will send our technical assessment to {formData.email || 'your email'} shortly.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="rounded-lg border border-zinc-300 dark:border-zinc-700 px-4 py-2 text-xs font-mono font-medium text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 cursor-pointer"
                  >
                    Submit Another Scope
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Step 1: Select Project Type */}
                  <div>
                    <label className="font-mono text-xs font-medium uppercase tracking-wider text-zinc-700 dark:text-zinc-300 block mb-2.5">
                      1. Project Category
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {projectTypes.map((pt) => {
                        const isSelected = projectType === pt.id
                        return (
                          <button
                            key={pt.id}
                            type="button"
                            onClick={() => setProjectType(pt.id)}
                            className={`rounded-lg border p-3 text-left transition-all cursor-pointer ${
                              isSelected
                                ? 'border-zinc-900 bg-zinc-100 dark:border-zinc-100 dark:bg-zinc-800 text-zinc-950 dark:text-white'
                                : 'border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/40 text-zinc-600 dark:text-zinc-400 hover:border-zinc-300 dark:hover:border-zinc-700'
                            }`}
                          >
                            <div className="text-xs font-semibold">{pt.title}</div>
                            <div className="text-[11px] text-zinc-500 dark:text-zinc-400 mt-0.5">
                              {pt.desc}
                            </div>
                          </button>
                        )
                      })}
                    </div>
                  </div>

                  {/* Step 2: Desired Timeline */}
                  <div>
                    <label className="font-mono text-xs font-medium uppercase tracking-wider text-zinc-700 dark:text-zinc-300 block mb-2.5">
                      2. Target Velocity
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                      {timelines.map((tl) => {
                        const isSelected = timeline === tl.id
                        return (
                          <button
                            key={tl.id}
                            type="button"
                            onClick={() => setTimeline(tl.id)}
                            className={`rounded-lg border p-3 text-left transition-all cursor-pointer ${
                              isSelected
                                ? 'border-zinc-900 bg-zinc-100 dark:border-zinc-100 dark:bg-zinc-800 text-zinc-950 dark:text-white'
                                : 'border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/40 text-zinc-600 dark:text-zinc-400 hover:border-zinc-300 dark:hover:border-zinc-700'
                            }`}
                          >
                            <div className="text-xs font-semibold">{tl.title}</div>
                            <div className="text-[11px] text-zinc-500 dark:text-zinc-400 mt-0.5">
                              {tl.detail}
                            </div>
                          </button>
                        )
                      })}
                    </div>
                  </div>

                  {/* Step 3: Scope Description & Contact Details */}
                  <div className="space-y-3.5 pt-2 border-t border-zinc-100 dark:border-zinc-800/80">
                    <label className="font-mono text-xs font-medium uppercase tracking-wider text-zinc-700 dark:text-zinc-300 block">
                      3. Organization &amp; Project Details
                    </label>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Your Name *"
                          className="w-full rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50 px-3.5 py-2 text-xs text-zinc-900 dark:text-white focus:border-zinc-400 dark:focus:border-zinc-600 outline-none"
                        />
                      </div>
                      <div>
                        <input
                          type="text"
                          name="organization"
                          value={formData.organization}
                          onChange={handleInputChange}
                          placeholder="Organization / Company"
                          className="w-full rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50 px-3.5 py-2 text-xs text-zinc-900 dark:text-white focus:border-zinc-400 dark:focus:border-zinc-600 outline-none"
                        />
                      </div>
                    </div>

                    <div>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Work Email *"
                        className="w-full rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50 px-3.5 py-2 text-xs text-zinc-900 dark:text-white focus:border-zinc-400 dark:focus:border-zinc-600 outline-none"
                      />
                    </div>

                    <div>
                      <textarea
                        name="scope"
                        rows={3}
                        required
                        value={formData.scope}
                        onChange={handleInputChange}
                        placeholder="Brief overview of requirements, integrations, or operational goals..."
                        className="w-full rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50 px-3.5 py-2 text-xs text-zinc-900 dark:text-white focus:border-zinc-400 dark:focus:border-zinc-600 outline-none resize-none"
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full rounded-full bg-blue-600 hover:bg-blue-500 text-white py-3.5 text-xs font-mono font-medium shadow-lg shadow-blue-500/25 border border-blue-500/30 disabled:opacity-50 transition-all cursor-pointer flex items-center justify-center gap-2"
                  >
                    <span>
                      {isSubmitting ? 'Submitting...' : 'Request Architecture Proposal'}
                    </span>
                    <Send size={13} />
                  </button>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  )
}
