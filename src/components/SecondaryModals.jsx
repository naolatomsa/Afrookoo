import { useEffect } from 'react'
import {
  aboutDetails,
  industriesData,
  insightsData,
  careerOpenings,
  careerPerks,
  companyInfo,
} from '../data.js'
import {
  CloseIcon,
  Check,
  Mail,
} from './Icons.jsx'

export default function SecondaryModals({ isOpen, activeTab, onClose, onSelectTab }) {
  useEffect(() => {
    if (!isOpen) return
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  const tabs = [
    { id: 'about', label: 'About' },
    { id: 'industries', label: 'Industries' },
    { id: 'insights', label: 'Insights' },
    { id: 'careers', label: 'Careers' },
  ]

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 lg:p-8">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Dialog Card */}
      <div className="relative z-10 max-h-[88vh] w-full max-w-4xl flex flex-col rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-925 text-zinc-900 dark:text-zinc-100 shadow-xl overflow-hidden">
        {/* Header with Tabs */}
        <div className="flex flex-wrap items-center justify-between border-b border-zinc-200 dark:border-zinc-800 p-4 sm:p-6 pb-4">
          <div className="flex flex-wrap gap-1.5">
            {tabs.map((t) => {
              const isCurrent = activeTab === t.id
              return (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => onSelectTab(t.id)}
                  className={`rounded-full px-3.5 sm:px-4 py-1.5 font-mono text-xs font-medium transition-all cursor-pointer ${
                    isCurrent
                      ? 'bg-blue-600 text-white font-semibold shadow-md shadow-blue-500/25'
                      : 'bg-zinc-100 dark:bg-zinc-800/60 text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white hover:bg-zinc-200 dark:hover:bg-zinc-800'
                  }`}
                >
                  {t.label}
                </button>
              )
            })}
          </div>

          <button
            type="button"
            onClick={onClose}
            className="rounded p-1.5 text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors cursor-pointer"
            aria-label="Close dialog"
          >
            <CloseIcon size={18} />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto p-5 sm:p-8 space-y-6">
          {/* TAB 1: ABOUT */}
          {activeTab === 'about' && (
            <div className="space-y-6">
              <div>
                <span className="font-mono text-xs font-medium uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                  Engineering Principles
                </span>
                <h3 className="text-xl sm:text-2xl font-semibold text-zinc-950 dark:text-zinc-50 mt-1">
                  {aboutDetails.title}
                </h3>
                <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed max-w-2xl">
                  {aboutDetails.story}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-zinc-100 dark:border-zinc-800">
                {aboutDetails.principles.map((pr) => (
                  <div
                    key={pr.title}
                    className="rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/40 p-4"
                  >
                    <h4 className="text-sm font-semibold text-zinc-950 dark:text-zinc-100 mb-1">
                      {pr.title}
                    </h4>
                    <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                      {pr.desc}
                    </p>
                  </div>
                ))}
              </div>

              <div className="rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/40 p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 font-mono text-xs">
                <div>
                  <span className="font-semibold text-zinc-900 dark:text-zinc-100">
                    Addis Ababa Engineering Center
                  </span>
                  <p className="text-zinc-500 font-sans mt-0.5">
                    {companyInfo.address}
                  </p>
                </div>
                <a
                  href="#contact"
                  onClick={onClose}
                  className="rounded-lg bg-zinc-900 dark:bg-zinc-100 px-4 py-2 text-zinc-50 dark:text-zinc-900 text-center hover:opacity-90 shrink-0 font-sans text-xs font-medium"
                >
                  Start a Project
                </a>
              </div>
            </div>
          )}

          {/* TAB 2: INDUSTRIES */}
          {activeTab === 'industries' && (
            <div className="space-y-6">
              <div>
                <span className="font-mono text-xs font-medium uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                  Domain Experience
                </span>
                <h3 className="text-xl sm:text-2xl font-semibold text-zinc-950 dark:text-zinc-50 mt-1">
                  Industries We Engineer For
                </h3>
                <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                  Tailored architectural patterns that address industry-specific compliance, throughput, and reliability constraints.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {industriesData.map((ind) => (
                  <div
                    key={ind.name}
                    className="rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/40 p-4 space-y-2"
                  >
                    <h4 className="text-sm font-semibold text-zinc-950 dark:text-zinc-100">
                      {ind.name}
                    </h4>
                    <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                      {ind.desc}
                    </p>
                    <div className="pt-2 border-t border-zinc-100 dark:border-zinc-800 font-mono text-[11px] text-zinc-500 dark:text-zinc-400">
                      {ind.highlight}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: INSIGHTS */}
          {activeTab === 'insights' && (
            <div className="space-y-6">
              <div>
                <span className="font-mono text-xs font-medium uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                  Engineering Notes
                </span>
                <h3 className="text-xl sm:text-2xl font-semibold text-zinc-950 dark:text-zinc-50 mt-1">
                  Technical Insights &amp; Architecture
                </h3>
                <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                  Notes from our technical team on system design, offline persistence, and low-latency APIs.
                </p>
              </div>

              <div className="space-y-4">
                {insightsData.map((ins) => (
                  <div
                    key={ins.slug}
                    className="rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/40 p-5 space-y-3"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2 font-mono text-xs">
                      <span className="rounded bg-zinc-200 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 px-2 py-0.5 text-[11px]">
                        {ins.category}
                      </span>
                      <span className="text-zinc-500">
                        {ins.date} · {ins.readTime}
                      </span>
                    </div>

                    <h4 className="text-base font-semibold text-zinc-950 dark:text-zinc-100">
                      {ins.title}
                    </h4>

                    <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                      {ins.summary}
                    </p>

                    <div className="space-y-1.5 pt-2 border-t border-zinc-100 dark:border-zinc-800">
                      {ins.points.map((pt) => (
                        <div key={pt} className="flex items-start gap-2 text-xs text-zinc-600 dark:text-zinc-400">
                          <Check size={13} className="text-zinc-400 dark:text-zinc-500 shrink-0 mt-0.5" />
                          <span>{pt}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 4: CAREERS */}
          {activeTab === 'careers' && (
            <div className="space-y-6">
              <div>
                <span className="font-mono text-xs font-medium uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                  Engineering Careers
                </span>
                <h3 className="text-xl sm:text-2xl font-semibold text-zinc-950 dark:text-zinc-50 mt-1">
                  Positions &amp; Opportunities
                </h3>
                <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                  We are not actively recruiting for open roles right now.
                </p>
              </div>

              <div className="rounded-xl border border-dashed border-zinc-200 dark:border-zinc-800 p-8 text-center bg-zinc-50/50 dark:bg-zinc-900/20">
                <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                  No Open Roles Currently
                </p>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-2 max-w-sm mx-auto leading-relaxed">
                  We hire on an exceptional basis for specialized system architecture requirements. If you build high-performance systems and want to introduce yourself, you may send your GitHub or portfolio to{' '}
                  <a
                    href={`mailto:${companyInfo.email}`}
                    className="text-blue-600 dark:text-blue-400 underline font-mono"
                  >
                    {companyInfo.email}
                  </a>.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
