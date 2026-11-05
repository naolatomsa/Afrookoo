import { Container } from '../ui.jsx'
import { footerColumns, companyInfo } from '../data.js'
import { GitHub, LinkedIn, Telegram, Mail } from './Icons.jsx'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-[var(--border-subtle)] bg-[var(--bg-page)] pt-16 pb-12 text-[var(--text-body)] transition-colors">
      <Container>
        <div className="grid grid-cols-2 gap-10 lg:grid-cols-5 lg:gap-8 mb-12">
          {/* Brand Column */}
          <div className="col-span-2">
            <a href="#top" className="flex items-center gap-2.5 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-blue-700 via-blue-600 to-sky-400 font-serif font-bold text-xl text-white shadow-md">
                A
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-2xl font-bold tracking-tight text-[var(--text-heading)]">
                  Afrookoo
                </span>
                <span className="text-[10px] font-mono tracking-wider uppercase text-blue-500 font-semibold -mt-1">
                  Software
                </span>
              </div>
            </a>

            <p className="max-w-sm text-sm text-[var(--text-muted)] leading-relaxed mb-6">
              Engineering mission-critical enterprise systems, AI agent platforms, and native mobile apps designed for high availability and measurable business value.
            </p>

            <div className="flex items-center gap-3">
              <a
                href={companyInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-[var(--border-subtle)] text-[var(--text-muted)] hover:text-blue-500 hover:border-blue-500 transition-colors shadow-sm"
                title="GitHub"
              >
                <GitHub size={17} />
              </a>
              <a
                href={companyInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-[var(--border-subtle)] text-[var(--text-muted)] hover:text-blue-500 hover:border-blue-500 transition-colors shadow-sm"
                title="LinkedIn"
              >
                <LinkedIn size={17} />
              </a>
              <a
                href={companyInfo.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-[var(--border-subtle)] text-[var(--text-muted)] hover:text-sky-500 hover:border-sky-500 transition-colors shadow-sm"
                title="Telegram"
              >
                <Telegram size={17} />
              </a>
              <a
                href={`mailto:${companyInfo.email}`}
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-[var(--border-subtle)] text-[var(--text-muted)] hover:text-rose-500 hover:border-rose-500 transition-colors shadow-sm"
                title="Direct Email"
              >
                <Mail size={17} />
              </a>
            </div>
          </div>

          {/* Nav Columns */}
          {footerColumns.map((col) => (
            <div key={col.title} className="col-span-1">
              <h4 className="font-mono text-xs font-semibold uppercase tracking-wider text-[var(--text-heading)] mb-4">
                {col.title}
              </h4>
              <ul className="space-y-2.5 text-xs sm:text-sm text-[var(--text-muted)]">
                {col.links.map(([label, href]) => (
                  <li key={label}>
                    <a
                      href={href}
                      className="hover:text-blue-500 transition-colors inline-flex items-center gap-1"
                    >
                      <span>{label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between border-t border-[var(--border-subtle)] pt-8 gap-4 text-xs font-mono text-[var(--text-muted)]">
          <p>© {currentYear} Afrookoo Software. Engineered with pride in Addis Ababa, Ethiopia.</p>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-emerald-500">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              Systems Operational
            </span>
            <span>·</span>
            <span className="text-[var(--text-muted)] font-medium">Afrookoo Engineering Collective</span>
          </div>
        </div>
      </Container>
    </footer>
  )
}
