import { Container } from '../ui.jsx'
import { footerColumns, companyInfo } from '../data.js'
import { GitHub, LinkedIn, Telegram, Mail, ArrowUpRight } from './Icons.jsx'

export default function Footer({ onOpenModal }) {
  const currentYear = new Date().getFullYear()

  const handleLinkClick = (e, item) => {
    if (item.type === 'modal' && item.modalId) {
      e.preventDefault()
      if (onOpenModal) onOpenModal(item.modalId)
    }
  }

  return (
    <footer className="border-t border-[var(--border-primary)] bg-[var(--bg-page)] pt-20 pb-12 transition-colors duration-300">
      <Container>
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16 mb-16">
          {/* Brand & Positioning */}
          <div className="lg:col-span-5 space-y-6">
            <a href="#top" className="inline-flex items-center gap-3 group">
              <div className="relative w-8 h-8 rounded-xl bg-black/5 dark:bg-white/5 border border-black/[0.08] dark:border-white/[0.12] p-1 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                <img
                  src="/afrookoo-logo.png"
                  alt="Afrookoo Logo"
                  className="w-full h-full object-contain filter drop-shadow-sm select-none"
                  loading="lazy"
                />
              </div>
              <div className="flex items-baseline gap-1.5">
                <span className="text-xl font-semibold tracking-tight text-[var(--text-heading)] group-hover:text-[var(--accent)] transition-colors">
                  Afrookoo
                </span>
                <span className="text-[10px] font-mono font-semibold tracking-widest text-[var(--accent)] uppercase">
                  Software
                </span>
              </div>
            </a>

            <p className="text-sm text-[var(--text-body)] leading-relaxed max-w-sm">
              High-performance software systems, modern retail commerce engines, and custom applications for ambitious teams.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={companyInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border-primary)] text-[var(--text-muted)] hover:text-[var(--text-heading)] hover:border-zinc-400 dark:hover:border-zinc-600 hover:-translate-y-1 active:scale-95 transition-all duration-200"
                title="GitHub"
              >
                <GitHub size={15} />
              </a>
              <a
                href={companyInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border-primary)] text-[var(--text-muted)] hover:text-[var(--text-heading)] hover:border-zinc-400 dark:hover:border-zinc-600 hover:-translate-y-1 active:scale-95 transition-all duration-200"
                title="LinkedIn"
              >
                <LinkedIn size={15} />
              </a>
              <a
                href={companyInfo.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border-primary)] text-[var(--text-muted)] hover:text-[var(--text-heading)] hover:border-zinc-400 dark:hover:border-zinc-600 hover:-translate-y-1 active:scale-95 transition-all duration-200"
                title="Telegram"
              >
                <Telegram size={15} />
              </a>
              <a
                href={`mailto:${companyInfo.email}`}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border-primary)] text-[var(--text-muted)] hover:text-[var(--text-heading)] hover:border-zinc-400 dark:hover:border-zinc-600 hover:-translate-y-1 active:scale-95 transition-all duration-200"
                title="Email"
              >
                <Mail size={15} />
              </a>
            </div>
          </div>

          {/* Navigation Links Columns */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {footerColumns.map((col) => (
              <div key={col.title}>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-[var(--text-heading)] mb-4">
                  {col.title}
                </h4>
                <ul className="space-y-3 text-sm text-[var(--text-body)]">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      {link.type === 'modal' ? (
                        <button
                          type="button"
                          onClick={(e) => handleLinkClick(e, link)}
                          className="hover:text-[var(--text-heading)] transition-colors text-left cursor-pointer"
                        >
                          {link.label}
                        </button>
                      ) : (
                        <a
                          href={link.href}
                          className="hover:text-[var(--text-heading)] transition-colors inline-flex items-center gap-1 group"
                        >
                          <span>{link.label}</span>
                          {link.type === 'external' && (
                            <ArrowUpRight size={11} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                          )}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Utility Bar */}
        <div className="border-t border-[var(--border-primary)] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[var(--text-muted)]">
          <div>
            &copy; {currentYear} {companyInfo.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span>Enterprise Software Systems</span>
          </div>
        </div>
      </Container>
    </footer>
  )
}
