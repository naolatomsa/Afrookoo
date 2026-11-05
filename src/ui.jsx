import { useEffect, useState } from 'react'
import Reveal from './components/Reveal.jsx'

export const Container = ({ className = '', children }) => (
  <div className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>
)

export function Section({ id, tone = 'default', pad = 'py-16 sm:py-20 lg:py-28', className = '', children }) {
  const tones = {
    default: 'bg-[var(--bg-page)] text-[var(--text-body)]',
    surface: 'bg-[var(--bg-surface)] text-[var(--text-body)] border-y border-[var(--border-subtle)]',
    subtle: 'bg-[var(--bg-subtle)] text-[var(--text-body)]',
    hero: 'bg-[var(--bg-page)] text-[var(--text-body)] relative overflow-hidden transition-colors duration-300',
    darkHero: 'bg-[#060b16] text-slate-100 relative overflow-hidden',
  }

  return (
    <section id={id} className={`relative ${tones[tone] || tones.default} ${pad} ${className}`}>
      <Container>{children}</Container>
    </section>
  )
}

export function Eyebrow({ children, icon: Icon, className = '' }) {
  return (
    <div className={`inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-3.5 py-1 text-xs font-semibold tracking-wider text-blue-600 dark:text-blue-400 uppercase ${className}`}>
      {Icon && <Icon size={14} className="shrink-0 text-blue-500" />}
      <span>{children}</span>
    </div>
  )
}

export function Heading({ eyebrow, eyebrowIcon, title, intro, align = 'left', className = '' }) {
  const alignCls = align === 'center' ? 'mx-auto text-center items-center' : 'text-left'
  const maxCls = align === 'center' ? 'max-w-3xl mx-auto' : 'max-w-3xl'

  return (
    <Reveal className={`mb-12 lg:mb-16 flex flex-col ${alignCls} ${className}`}>
      {eyebrow && (
        <div className="mb-4">
          <Eyebrow icon={eyebrowIcon}>{eyebrow}</Eyebrow>
        </div>
      )}
      <h2 className={`${maxCls} font-serif text-3xl font-bold tracking-tight text-[var(--text-heading)] sm:text-4xl lg:text-5xl leading-[1.15]`}>
        {title}
      </h2>
      {intro && (
        <p className={`mt-4 ${maxCls} text-base sm:text-lg leading-relaxed text-[var(--text-muted)]`}>
          {intro}
        </p>
      )}
    </Reveal>
  )
}

const btnBase =
  'inline-flex min-h-[46px] cursor-pointer items-center justify-center gap-2.5 rounded-xl px-6 py-2.5 text-center text-sm font-semibold transition-all duration-200 active:scale-[0.98] select-none'

const btnVariants = {
  primary:
    'bg-blue-600 text-white shadow-lg shadow-blue-500/25 hover:bg-blue-500 hover:shadow-blue-500/35 hover:-translate-y-0.5 border border-blue-500/30',
  secondary:
    'bg-slate-900 text-white dark:bg-white dark:text-slate-950 hover:bg-slate-800 dark:hover:bg-slate-100 hover:-translate-y-0.5 shadow-md',
  outline:
    'border border-slate-300 dark:border-slate-700 bg-transparent text-[var(--text-heading)] hover:border-blue-500 hover:text-blue-500 dark:hover:border-blue-400 dark:hover:text-blue-400 hover:bg-blue-500/5 hover:-translate-y-0.5',
  glass:
    'backdrop-blur-md bg-white/70 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/60 text-[var(--text-heading)] hover:border-blue-500/50 hover:bg-white dark:hover:bg-slate-800 hover:-translate-y-0.5 shadow-sm',
  ghost:
    'text-[var(--text-heading)] hover:text-blue-500 hover:bg-blue-500/10 dark:hover:text-blue-400',
}

export function Button({ as: Tag = 'a', variant = 'primary', className = '', children, ...props }) {
  return (
    <Tag className={`${btnBase} ${btnVariants[variant]} ${className}`} {...props}>
      {children}
    </Tag>
  )
}

export function Card({ lift = true, glow = false, className = '', children, ...props }) {
  return (
    <div
      className={`group relative overflow-hidden rounded-2xl border border-[var(--border-card)] bg-[var(--bg-card)] p-6 sm:p-7 transition-all duration-300 ${
        lift
          ? 'hover:-translate-y-1.5 hover:border-blue-500/40 hover:shadow-xl hover:shadow-blue-500/5 dark:hover:shadow-blue-500/10'
          : ''
      } ${glow ? 'ring-1 ring-blue-500/20' : ''} ${className}`}
      {...props}
    >
      {lift && (
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-gradient-to-r from-blue-600 via-sky-400 to-indigo-500 transition-transform duration-300 group-hover:scale-x-100"
        />
      )}
      {children}
    </div>
  )
}

export const cardTitle =
  'text-lg sm:text-xl font-bold font-serif text-[var(--text-heading)] transition-colors duration-200 group-hover:text-blue-600 dark:group-hover:text-blue-400'

export function TagBadge({ children, className = '' }) {
  return (
    <span
      className={`inline-flex items-center rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-100/90 dark:bg-slate-800/80 px-3 py-1 text-xs font-mono font-semibold text-slate-800 dark:text-slate-200 transition-all duration-200 hover:border-blue-500/50 hover:text-blue-600 dark:hover:text-blue-400 ${className}`}
    >
      {children}
    </span>
  )
}

// Live Addis Ababa clock component
export function AddisAbabaClock() {
  const [timeStr, setTimeStr] = useState('')

  useEffect(() => {
    const updateTime = () => {
      try {
        const now = new Date()
        const options = {
          timeZone: 'Africa/Addis_Ababa',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: true,
        }
        setTimeStr(new Intl.DateTimeFormat('en-US', options).format(now))
      } catch (e) {
        setTimeStr('EAT (UTC+3)')
      }
    }
    updateTime()
    const timer = setInterval(updateTime, 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-mono text-emerald-600 dark:text-emerald-400">
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
        <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
      </span>
      <span>Addis Ababa: {timeStr || 'EAT'}</span>
    </div>
  )
}

// Modal component for viewing case studies and deep dives
export function Modal({ isOpen, onClose, title, children }) {
  useEffect(() => {
    if (!isOpen) return
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose()
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKey)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <div
        className="fixed inset-0 bg-slate-950/75 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />
      <div className="relative z-10 max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-3xl border border-[var(--border-card)] bg-[var(--bg-surface)] p-6 sm:p-8 text-[var(--text-body)] shadow-2xl">
        <div className="flex items-center justify-between border-b border-[var(--border-subtle)] pb-4">
          <h3 className="font-serif text-2xl font-bold text-[var(--text-heading)]">{title}</h3>
          <button
            type="button"
            onClick={onClose}
            className="rounded-full p-2 text-[var(--text-muted)] hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-[var(--text-heading)] transition-colors cursor-pointer"
            aria-label="Close dialog"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="mt-6">{children}</div>
      </div>
    </div>
  )
}
