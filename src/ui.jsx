import Reveal from './components/Reveal.jsx'

export const Container = ({ className = '', children }) => (
  <div className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>
)

export function Section({ id, tone = 'default', pad = 'py-16 sm:py-20 lg:py-24', className = '', children }) {
  const tones = {
    default: 'bg-[var(--bg-page)] text-[var(--text-body)]',
    surface: 'bg-[var(--bg-surface)] text-[var(--text-body)] border-y border-[var(--border-subtle)]',
    subtle: 'bg-[var(--bg-subtle)] text-[var(--text-body)]',
    hero: 'bg-[var(--bg-page)] text-[var(--text-body)] relative',
  }

  return (
    <section id={id} className={`relative ${tones[tone] || tones.default} ${pad} ${className}`}>
      <Container>{children}</Container>
    </section>
  )
}

export function TagBadge({ children, className = '' }) {
  return (
    <span className={`inline-flex items-center gap-1.5 font-mono text-[11px] font-medium tracking-wide uppercase text-blue-600 dark:text-blue-400 ${className}`}>
      {children}
    </span>
  )
}

export function Heading({ eyebrow, title, intro, align = 'left', className = '' }) {
  const alignCls = align === 'center' ? 'mx-auto text-center items-center' : 'text-left'
  const maxCls = align === 'center' ? 'max-w-2xl mx-auto' : 'max-w-2xl'

  return (
    <Reveal className={`mb-10 lg:mb-14 flex flex-col ${alignCls} ${className}`}>
      {eyebrow && (
        <span className="font-mono text-xs uppercase tracking-widest text-zinc-500 dark:text-zinc-400 mb-2 font-medium">
          {eyebrow}
        </span>
      )}
      <h2 className={`${maxCls} text-3xl font-extrabold tracking-tight text-zinc-900 dark:text-white sm:text-4xl lg:text-5xl leading-tight`}>
        {title}
      </h2>
      {intro && (
        <p className={`mt-3.5 ${maxCls} text-sm sm:text-base leading-relaxed text-zinc-600 dark:text-zinc-400`}>
          {intro}
        </p>
      )}
    </Reveal>
  )
}

const btnBase =
  'inline-flex min-h-[42px] cursor-pointer items-center justify-center gap-2 rounded-full px-6 py-2.5 text-center text-xs sm:text-sm font-medium transition-all duration-200 select-none'

const btnVariants = {
  primary:
    'bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-500/25 border border-blue-500/30 active:scale-[0.98]',
  secondary:
    'bg-zinc-100 dark:bg-white/10 hover:bg-zinc-200 dark:hover:bg-white/15 text-zinc-900 dark:text-white border border-zinc-200 dark:border-white/15 backdrop-blur-md active:scale-[0.98]',
  outline:
    'border border-zinc-300 dark:border-white/15 bg-white/80 dark:bg-white/5 hover:bg-zinc-100 dark:hover:bg-white/10 hover:border-zinc-400 dark:hover:border-white/30 text-zinc-800 dark:text-white backdrop-blur-md active:scale-[0.98]',
  ghost:
    'text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-white/10',
}

export function Button({ as: Tag = 'a', variant = 'primary', className = '', children, ...props }) {
  return (
    <Tag className={`${btnBase} ${btnVariants[variant]} ${className}`} {...props}>
      {children}
    </Tag>
  )
}

export function Card({ className = '', children, ...props }) {
  return (
    <div
      className={`relative rounded-2xl border border-zinc-200/80 dark:border-white/10 bg-white/90 dark:bg-zinc-900/40 p-6 sm:p-7 backdrop-blur-xl shadow-lg dark:shadow-xl transition-all duration-300 hover:border-blue-500/40 dark:hover:border-blue-500/40 hover:bg-white dark:hover:bg-zinc-900/60 ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}

export const cardTitle = 'text-xl font-bold tracking-tight text-zinc-900 dark:text-white'
