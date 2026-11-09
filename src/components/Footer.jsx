import { Container } from '../ui.jsx'
import { footerColumns, companyInfo } from '../data.js'
import { GitHub, LinkedIn, Telegram, Mail } from './Icons.jsx'

export default function Footer({ onOpenModal }) {
  const currentYear = new Date().getFullYear()

  const handleLinkClick = (e, item) => {
    if (item.type === 'modal' && item.modalId) {
      e.preventDefault()
      if (onOpenModal) onOpenModal(item.modalId)
    }
  }

  return (
    <footer className="border-t border-zinc-200/80 dark:border-white/10 bg-zinc-50 dark:bg-zinc-950 pt-16 pb-12 text-zinc-600 dark:text-zinc-300">
      <Container>
        <div className="grid grid-cols-2 gap-10 lg:grid-cols-5 lg:gap-8 mb-12">
          {/* Brand Column */}
          <div className="col-span-2">
            <a href="#top" className="flex items-center gap-2 mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-blue-600 font-mono font-bold text-xs text-white shadow-md shadow-blue-500/25">
                A
              </div>
              <div className="flex items-baseline gap-1.5">
                <span className="font-mono text-sm font-semibold tracking-tight text-zinc-900 dark:text-white">
                  AFROOKOO
                </span>
                <span className="text-[10px] font-mono text-blue-600 dark:text-blue-400 uppercase tracking-wider font-semibold">
                  SOFTWARE
                </span>
              </div>
            </a>

            <p className="max-w-sm text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed mb-5">
              Custom software systems, offline-first POS engines, and enterprise web architectures engineered in Addis Ababa for East African and global leaders.
            </p>

            <div className="flex items-center gap-2">
              <a
                href={companyInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-7 w-7 items-center justify-center rounded border border-zinc-300 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white transition-colors"
                title="GitHub"
              >
                <GitHub size={13} />
              </a>
              <a
                href={companyInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-7 w-7 items-center justify-center rounded border border-zinc-300 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white transition-colors"
                title="LinkedIn"
              >
                <LinkedIn size={13} />
              </a>
              <a
                href={companyInfo.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-7 w-7 items-center justify-center rounded border border-zinc-300 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white transition-colors"
                title="Telegram"
              >
                <Telegram size={13} />
              </a>
              <a
                href={`mailto:${companyInfo.email}`}
                className="flex h-7 w-7 items-center justify-center rounded border border-zinc-300 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white transition-colors"
                title="Email"
              >
                <Mail size={13} />
              </a>
            </div>
          </div>

          {/* Navigation Columns */}
          {footerColumns.map((col) => (
            <div key={col.title} className="col-span-1">
              <h4 className="font-mono text-xs font-semibold uppercase tracking-wider text-zinc-900 dark:text-zinc-100 mb-3.5">
                {col.title}
              </h4>
              <ul className="space-y-2 text-xs font-mono text-zinc-600 dark:text-zinc-400">
                {col.links.map((link) => (
                  <li key={link.label}>
                    {link.type === 'modal' ? (
                      <button
                        type="button"
                        onClick={(e) => handleLinkClick(e, link)}
                        className="hover:text-zinc-950 dark:hover:text-white transition-colors text-left cursor-pointer"
                      >
                        {link.label}
                      </button>
                    ) : (
                      <a
                        href={link.href}
                        className="hover:text-zinc-950 dark:hover:text-white transition-colors"
                      >
                        {link.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-zinc-200/80 dark:border-zinc-800/80 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-zinc-500 dark:text-zinc-500">
          <div>
            &copy; {currentYear} {companyInfo.name}. All rights reserved.
          </div>
          <div>
            Addis Ababa, Ethiopia · 4 Kilo
          </div>
        </div>
      </Container>
    </footer>
  )
}
