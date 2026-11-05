import { useEffect, useState } from 'react'
import { navLinks, companyInfo } from '../data.js'
import { Button, Container } from '../ui.jsx'
import { Sun, Moon, MenuIcon, CloseIcon, ArrowRight } from './Icons.jsx'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [theme, setTheme] = useState('dark')

  useEffect(() => {
    // Check initial theme from html class
    const isDark = document.documentElement.classList.contains('dark')
    setTheme(isDark ? 'dark' : 'light')

    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(nextTheme)
    document.documentElement.classList.remove('light', 'dark')
    document.documentElement.classList.add(nextTheme)
    localStorage.setItem('afrookoo-theme', nextTheme)
  }

  const close = () => setOpen(false)

  const visibleLinks = navLinks.filter(
    (l) => l.label !== 'Contact' && l.label !== 'Process' && l.label !== 'Industries'
  )

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[var(--bg-surface)]/95 backdrop-blur-md shadow-sm border-b border-[var(--border-subtle)] py-3'
          : 'bg-[var(--bg-page)]/85 backdrop-blur-md border-b border-[var(--border-subtle)]/70 py-4'
      }`}
    >
      <Container className="flex items-center justify-between gap-4">
        {/* Brand */}
        <a
          href="#top"
          onClick={close}
          className="group flex items-center gap-2.5 text-decoration-none"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-blue-700 via-blue-600 to-sky-400 text-white font-serif font-bold text-xl shadow-md shadow-blue-500/20 group-hover:shadow-blue-500/40 transition-shadow">
            A
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-xl font-bold tracking-tight text-[var(--text-heading)] group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              Afrookoo
            </span>
            <span className="text-[10px] font-mono tracking-wider uppercase text-blue-600 dark:text-blue-400 font-semibold -mt-1">
              Software
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav aria-label="Main navigation" className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="px-3 py-1.5 rounded-lg text-sm font-medium text-[var(--text-body)] hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-100/90 dark:hover:bg-slate-800/80 transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-2 sm:gap-3">

          {/* Theme Toggle */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-300 dark:border-slate-700 bg-white/90 dark:bg-slate-800/90 text-[var(--text-heading)] hover:border-blue-500 hover:text-blue-600 dark:hover:border-blue-400 dark:hover:text-blue-400 shadow-xs transition-colors cursor-pointer"
          >
            {theme === 'dark' ? (
              <Sun size={17} className="text-amber-400" />
            ) : (
              <Moon size={17} className="text-slate-700" />
            )}
          </button>

          {/* CTA Button */}
          <Button href="#contact" variant="primary" className="hidden md:inline-flex text-xs px-4 py-2 min-h-[38px]">
            <span>Start a Project</span>
            <ArrowRight size={14} />
          </Button>

          {/* Mobile menu button */}
          <button
            type="button"
            aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-300 dark:border-slate-700 bg-white/90 dark:bg-slate-800/90 text-[var(--text-heading)] hover:bg-slate-100 dark:hover:bg-slate-800 lg:hidden cursor-pointer"
          >
            {open ? <CloseIcon size={20} /> : <MenuIcon size={20} />}
          </button>
        </div>
      </Container>

      {/* Mobile Drawer */}
      {open && (
        <div className="fixed inset-x-0 top-[65px] bg-[var(--bg-surface)]/98 backdrop-blur-xl border-b border-[var(--border-subtle)] px-6 py-6 shadow-2xl lg:hidden flex flex-col gap-2 max-h-[calc(100vh-70px)] overflow-y-auto">
          <div className="flex flex-col divide-y divide-[var(--border-subtle)] mb-4">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={close}
                className="py-3 text-base font-medium text-[var(--text-heading)] hover:text-blue-500 flex items-center justify-between"
              >
                <span>{l.label}</span>
                <span className="text-slate-400">→</span>
              </a>
            ))}
          </div>


          <Button href="#contact" onClick={close} className="w-full mt-2">
            Start a Project
          </Button>
        </div>
      )}
    </header>
  )
}
