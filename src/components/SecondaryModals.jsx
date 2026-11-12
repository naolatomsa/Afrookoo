import { useEffect } from 'react'
import {
  aboutDetails,
  industriesData,
  insightsData,
  companyInfo,
} from '../data.js'
import { CloseIcon, ArrowUpRight } from './Icons.jsx'

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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 animate-fade">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Dialog */}
      <div className="relative z-10 max-h-[85vh] w-full max-w-3xl flex flex-col rounded-2xl border border-[var(--border-primary)] bg-[var(--bg-surface)] text-[var(--text-heading)] shadow-2xl overflow-hidden transition-all duration-300">
        {/* Header with Navigation Tabs */}
        <div className="flex items-center justify-between border-b border-[var(--border-primary)] px-6 py-4">
          <div className="flex items-center gap-1 sm:gap-2">
            {tabs.map((t) => {
              const isCurrent = activeTab === t.id
              return (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => onSelectTab(t.id)}
                  className={`rounded-full px-4 py-1.5 text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                    isCurrent
                      ? 'bg-[var(--accent)] text-white'
                      : 'text-[var(--text-body)] hover:text-[var(--text-heading)] hover:bg-[var(--bg-subtle)]'
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
            className="rounded-full p-2 text-[var(--text-muted)] hover:text-[var(--text-heading)] hover:bg-[var(--bg-subtle)] transition-colors cursor-pointer"
            aria-label="Close dialog"
          >
            <CloseIcon size={16} />
          </button>
        </div>

        {/* Scrollable Content Body */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-8">
          {/* TAB 1: ABOUT */}
          {activeTab === 'about' && (
            <div className="space-y-8">
              <div>
                <p className="text-xs font-mono uppercase tracking-widest text-[var(--accent)] mb-2">
                  Company Principles
                </p>
                <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[var(--text-heading)]">
                  {aboutDetails.title}
                </h3>
                <p className="mt-4 text-sm sm:text-base text-[var(--text-body)] leading-relaxed">
                  {aboutDetails.story}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-[var(--border-primary)]">
                {aboutDetails.principles.map((pr) => (
                  <div
                    key={pr.title}
                    className="p-5 rounded-xl border border-[var(--border-primary)] bg-[var(--bg-subtle)]"
                  >
                    <h4 className="text-sm font-semibold text-[var(--text-heading)] mb-1.5">
                      {pr.title}
                    </h4>
                    <p className="text-xs text-[var(--text-body)] leading-relaxed">
                      {pr.desc}
                    </p>
                  </div>
                ))}
              </div>

              <div className="p-4 rounded-xl border border-[var(--border-primary)] flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs">
                <div>
                  <span className="font-semibold text-[var(--text-heading)]">
                    Engineering Studio
                  </span>
                  <p className="text-[var(--text-muted)] mt-0.5">
                    {companyInfo.address}
                  </p>
                </div>
                <a
                  href="#contact"
                  onClick={onClose}
                  className="rounded-full bg-[var(--accent)] text-white px-5 py-2 font-medium text-center shrink-0 hover:bg-[var(--accent-hover)] transition-colors"
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
                <p className="text-xs font-mono uppercase tracking-widest text-[var(--accent)] mb-2">
                  Operational Domains
                </p>
                <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[var(--text-heading)]">
                  Industries We Engineer For
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {industriesData.map((ind) => (
                  <div
                    key={ind.name}
                    className="p-5 rounded-xl border border-[var(--border-primary)] bg-[var(--bg-subtle)] space-y-2"
                  >
                    <h4 className="text-sm font-semibold text-[var(--text-heading)]">
                      {ind.name}
                    </h4>
                    <p className="text-xs text-[var(--text-body)] leading-relaxed">
                      {ind.desc}
                    </p>
                    <p className="text-[11px] font-mono text-[var(--accent)] pt-1">
                      {ind.highlight}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: INSIGHTS */}
          {activeTab === 'insights' && (
            <div className="space-y-6">
              <div>
                <p className="text-xs font-mono uppercase tracking-widest text-[var(--accent)] mb-2">
                  Engineering Notes
                </p>
                <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[var(--text-heading)]">
                  System Architecture Insights
                </h3>
              </div>

              <div className="space-y-4">
                {insightsData.map((ins) => (
                  <div
                    key={ins.slug}
                    className="p-5 rounded-xl border border-[var(--border-primary)] bg-[var(--bg-subtle)] space-y-2.5"
                  >
                    <div className="flex items-center justify-between text-xs text-[var(--text-muted)] font-mono">
                      <span className="text-[var(--accent)]">{ins.category}</span>
                      <span>{ins.date} · {ins.readTime}</span>
                    </div>

                    <h4 className="text-base font-semibold text-[var(--text-heading)]">
                      {ins.title}
                    </h4>

                    <p className="text-xs text-[var(--text-body)] leading-relaxed">
                      {ins.summary}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 4: CAREERS */}
          {activeTab === 'careers' && (
            <div className="space-y-6">
              <div>
                <p className="text-xs font-mono uppercase tracking-widest text-[var(--accent)] mb-2">
                  Careers
                </p>
                <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[var(--text-heading)]">
                  Engineering at Afrookoo
                </h3>
              </div>

              <div className="rounded-xl border border-dashed border-[var(--border-primary)] p-10 text-center space-y-3">
                <p className="text-sm font-medium text-[var(--text-heading)]">
                  No Open Headcount Currently
                </p>
                <p className="text-xs text-[var(--text-muted)] max-w-sm mx-auto leading-relaxed">
                  We hire selectively for specialized systems architecture and low-level performance roles. Reach out directly at{' '}
                  <a
                    href={`mailto:${companyInfo.email}`}
                    className="text-[var(--accent)] hover:underline font-mono"
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
