import { useState } from 'react'
import { navLinks } from '../data.js'
import { Button, Container, darkVars } from '../ui.jsx'

const linkCls =
  'relative py-1.5 text-[15px] text-[#D1D5DB] transition-colors duration-200 hover:text-white after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:origin-left after:scale-x-0 after:bg-brand-light after:transition-transform after:duration-300 hover:after:scale-x-100'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  return (
    <header className={`relative z-20 bg-navy text-white ${darkVars}`}>
      <Container className="flex items-center justify-between gap-6 py-5">
        <a href="#top" onClick={close} className="font-serif text-2xl font-semibold text-brand-light transition-colors hover:text-white">
          Afrookoo
        </a>

        <nav aria-label="Main" className="ml-auto hidden gap-6 lg:flex">
          {navLinks.filter((l) => l.label !== 'Contact').map((l) => (
            <a key={l.href} href={l.href} className={linkCls}>{l.label}</a>
          ))}
        </nav>
        <Button href="#contact" className="hidden lg:inline-flex">Start a Project</Button>

        <button
          type="button"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
          className="flex size-11 cursor-pointer items-center justify-center rounded-lg border border-[#6B7280] text-white transition-colors hover:bg-[#1F2937] lg:hidden"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </Container>

      {open && (
        <nav
          id="mobile-menu"
          aria-label="Mobile"
          className="absolute inset-x-0 top-full border-t border-[#374151] bg-navy px-5 pt-2 pb-6 shadow-[0_16px_32px_rgba(0,0,0,.35)] sm:px-6 lg:hidden"
        >
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={close}
              className="block border-b border-[#374151] py-3.5 text-[17px] transition-all duration-200 hover:pl-2 hover:text-brand-light"
            >
              {l.label}
            </a>
          ))}
          <Button href="#contact" onClick={close} className="mt-5 w-full">Start a Project</Button>
        </nav>
      )}
    </header>
  )
}
