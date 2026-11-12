import Reveal from './components/Reveal.jsx'

export const Container = ({ className = '', children }) => (
  <div className={`mx-auto w-full max-w-[1200px] px-5 sm:px-8 lg:px-10 ${className}`}>{children}</div>
)

export const WideContainer = ({ className = '', children }) => (
  <div className={`mx-auto w-full max-w-[1400px] px-5 sm:px-8 lg:px-10 ${className}`}>{children}</div>
)

export function Section({ id, pad = 'py-24 sm:py-32 lg:py-40', className = '', children, wide = false }) {
  const Wrapper = wide ? WideContainer : Container
  return (
    <section id={id} className={`relative ${pad} ${className}`}>
      <Wrapper>{children}</Wrapper>
    </section>
  )
}

export function SectionDivider() {
  return (
    <div className="mx-auto max-w-[1200px] px-5 sm:px-8 lg:px-10">
      <div className="h-px bg-[var(--border-primary)]" />
    </div>
  )
}

export function Heading({ title, subtitle, align = 'left', className = '' }) {
  const alignCls = align === 'center' ? 'text-center mx-auto' : 'text-left'
  return (
    <Reveal className={`mb-16 lg:mb-20 ${alignCls} ${className}`}>
      <div className="text-mask">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[var(--text-heading)] leading-[1.1] max-w-3xl text-slide-up">
          {title}
        </h2>
      </div>
      {subtitle && (
        <div className="text-mask mt-5">
          <p className="text-base sm:text-lg text-[var(--text-body)] max-w-xl leading-relaxed text-slide-up delay-1">
            {subtitle}
          </p>
        </div>
      )}
    </Reveal>
  )
}

const btnBase =
  'inline-flex items-center justify-center gap-2 font-medium transition-all duration-300 ease-out select-none cursor-pointer active:scale-[0.97] hover:-translate-y-0.5'

const btnVariants = {
  primary:
    'bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white h-11 px-7 text-sm rounded-full',
  secondary:
    'bg-[var(--bg-subtle)] hover:bg-[var(--bg-muted)] text-[var(--text-heading)] h-11 px-7 text-sm rounded-full border border-[var(--border-primary)]',
  ghost:
    'text-[var(--text-body)] hover:text-[var(--text-heading)] h-10 px-4 text-sm rounded-lg',
  outline:
    'border border-[var(--border-primary)] hover:border-[var(--text-muted)] bg-transparent text-[var(--text-heading)] h-11 px-7 text-sm rounded-full',
}

export function Button({ as: Tag = 'a', variant = 'primary', className = '', children, ...props }) {
  return (
    <Tag className={`${btnBase} ${btnVariants[variant]} ${className}`} {...props}>
      {children}
    </Tag>
  )
}
