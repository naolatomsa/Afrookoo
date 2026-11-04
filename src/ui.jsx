import Reveal from './components/Reveal.jsx'

// Overrides the light-section CSS variables (see index.css) for dark backgrounds.
export const darkVars =
  '[--muted:#D1D5DB] [--eyebrow:#7FB0FF] [--card-bg:#1F2937] [--card-line:#374151] [--card-hover:#7FB0FF] ' +
  '[--btn-line:#6B7280] [--btn-ink:#FFFFFF] [--btn-hover-bg:#FFFFFF] [--btn-hover-ink:#111827]'

export const Container = ({ className = '', children }) => (
  <div className={`mx-auto max-w-[1200px] px-5 sm:px-6 lg:px-8 ${className}`}>{children}</div>
)

const tones = {
  light: 'bg-white text-navy',
  alt: 'bg-tint text-navy',
  dark: `bg-navy text-white ${darkVars}`,
}

export function Section({ id, tone = 'light', pad = 'py-14 sm:py-16 lg:py-24', className = '', children }) {
  return (
    <section id={id} className={`${pad} ${tones[tone]} ${className}`}>
      <Container>{children}</Container>
    </section>
  )
}

export const Eyebrow = ({ children }) => (
  <p className="mb-4 text-[13px] font-semibold tracking-[0.12em] text-(--eyebrow) uppercase">{children}</p>
)

export function Heading({ eyebrow, title, intro }) {
  return (
    <Reveal className="mb-10 lg:mb-12">
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 className="max-w-[680px] text-[27px] sm:text-3xl lg:text-[40px]">{title}</h2>
      {intro && <p className="mt-4 max-w-[640px] text-(--muted)">{intro}</p>}
    </Reveal>
  )
}

const btnBase =
  'inline-flex min-h-11 cursor-pointer items-center justify-center rounded-lg border px-6 py-3 text-center text-[15px] font-semibold transition duration-200 hover:-translate-y-0.5 active:translate-y-0'
const btnVariants = {
  primary:
    'border-transparent bg-brand-deep text-white hover:bg-brand hover:shadow-[0_12px_24px_-10px_rgba(40,120,240,.75)]',
  outline:
    'border-(--btn-line) text-(--btn-ink) hover:border-(--btn-hover-bg) hover:bg-(--btn-hover-bg) hover:text-(--btn-hover-ink)',
}

export function Button({ as: Tag = 'a', variant = 'primary', className = '', ...props }) {
  return <Tag className={`${btnBase} ${btnVariants[variant]} ${className}`} {...props} />
}

export function Card({ lift = true, className = '', children, ...props }) {
  return (
    <div
      className={`group/card relative h-full overflow-hidden rounded-[14px] border border-(--card-line) bg-(--card-bg) p-6 transition duration-300 sm:p-7 ${
        lift ? 'hover:-translate-y-1.5 hover:border-(--card-hover) hover:shadow-[0_22px_44px_-20px_rgba(17,24,39,.35)]' : ''
      } ${className}`}
      {...props}
    >
      {lift && (
        <span
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-linear-to-r from-brand to-brand-light transition-transform duration-300 group-hover/card:scale-x-100"
        />
      )}
      {children}
    </div>
  )
}

export const cardTitle = 'text-xl transition-colors duration-200 group-hover/card:text-brand-text lg:text-[22px]'

export const Tag = ({ children }) => (
  <span className="inline-block cursor-default rounded-full border border-[#C5D1E6] bg-white px-4 py-2 text-sm text-navy transition duration-200 hover:-translate-y-0.5 hover:border-brand-deep hover:bg-brand-deep hover:text-white hover:shadow-[0_10px_20px_-10px_rgba(40,120,240,.7)]">
    {children}
  </span>
)

export const Placeholder = ({ children, small = false, alt = false }) => (
  <div
    className={`flex items-center justify-center rounded-[14px] border border-dashed border-[#8FA3C7] text-sm text-(--muted) transition duration-200 hover:border-solid hover:border-brand hover:bg-[#DCE8FB] ${
      small ? 'min-h-[100px]' : 'min-h-[220px]'
    } ${alt ? 'bg-[#E8EEF8]' : 'bg-tint'}`}
  >
    {children}
  </div>
)
