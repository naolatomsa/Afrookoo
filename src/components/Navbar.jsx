import { useEffect, useRef, useState } from 'react'
import { navLinks } from '../data.js'
import { Button, Container } from '../ui.jsx'
import { Sun, Moon, MenuIcon, CloseIcon } from './Icons.jsx'

export default function Navbar({ onOpenModal }) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [theme, setTheme] = useState('dark')
  const [activeSection, setActiveSection] = useState('#work')
  const [pillStyle, setPillStyle] = useState({ left: 0, width: 0, opacity: 0 })

  const navContainerRef = useRef(null)
  const linkRefs = useRef({})
  const isClickNavigatingRef = useRef(false)
  const navLockTimeoutRef = useRef(null)

  useEffect(() => {
    const isDark = document.documentElement.classList.contains('dark')
    setTheme(isDark ? 'dark' : 'light')

    const sectionIds = ['work', 'capabilities', 'engagement', 'contact']

    // If user manually scrolls with mouse wheel, touchpad, or touch drag, re-enable natural scroll tracking
    const handleUserInteraction = () => {
      if (isClickNavigatingRef.current) {
        isClickNavigatingRef.current = false
        if (navLockTimeoutRef.current) clearTimeout(navLockTimeoutRef.current)
      }
    }

    const handleScroll = () => {
      setScrolled(window.scrollY > 20)

      // When the user clicked a nav link to travel to a distant section, DO NOT let intermediate sections hijack the pill!
      if (isClickNavigatingRef.current) return

      // Robust bottom-of-page check: if near the page bottom, active section is always #contact
      const scrollBottom = window.innerHeight + window.scrollY
      const totalHeight = document.documentElement.scrollHeight
      if (totalHeight - scrollBottom < 220) {
        setActiveSection('#contact')
        return
      }

      // Check section crossing 35% of screen height
      const targetLine = window.scrollY + window.innerHeight * 0.35
      let current = ''

      for (const id of sectionIds) {
        const el = document.getElementById(id)
        if (el) {
          const top = el.offsetTop
          const height = el.offsetHeight
          if (targetLine >= top && targetLine < top + height) {
            current = `#${id}`
            break
          }
        }
      }

      if (current) {
        setActiveSection(current)
      } else if (window.scrollY < 200) {
        setActiveSection('')
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('wheel', handleUserInteraction, { passive: true })
    window.addEventListener('touchmove', handleUserInteraction, { passive: true })
    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('wheel', handleUserInteraction)
      window.removeEventListener('touchmove', handleUserInteraction)
      if (navLockTimeoutRef.current) clearTimeout(navLockTimeoutRef.current)
    }
  }, [])

  // Update sliding fluid glass pill position whenever activeSection changes
  useEffect(() => {
    if (!activeSection) {
      setPillStyle((prev) => ({ ...prev, opacity: 0 }))
      return
    }

    const activeEl = linkRefs.current[activeSection]
    const container = navContainerRef.current

    if (activeEl && container) {
      const containerRect = container.getBoundingClientRect()
      const linkRect = activeEl.getBoundingClientRect()

      setPillStyle({
        left: linkRect.left - containerRect.left,
        width: linkRect.width,
        opacity: 1,
      })
    }
  }, [activeSection, scrolled])

  const handleNavClick = (e, href) => {
    e.preventDefault()
    close()

    // 1. Instantly set the destination as active so the pill glides directly to it in one fluid motion
    setActiveSection(href)

    // 2. Lock scroll listener so intermediate sections during smooth scroll are ignored
    isClickNavigatingRef.current = true
    if (navLockTimeoutRef.current) clearTimeout(navLockTimeoutRef.current)

    // 3. Smooth scroll to the target section
    const targetId = href.replace('#', '')
    const targetEl = document.getElementById(targetId)
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: 'smooth' })
    }

    // 4. Release scroll lock after smooth scroll settles (1400ms is safe for even long page distances)
    navLockTimeoutRef.current = setTimeout(() => {
      isClickNavigatingRef.current = false
    }, 1400)
  }

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(nextTheme)
    document.documentElement.classList.remove('light', 'dark')
    document.documentElement.classList.add(nextTheme)
    localStorage.setItem('afrookoo-theme', nextTheme)
  }

  const close = () => setOpen(false)

  const handleModalClick = (modalId) => {
    close()
    if (onOpenModal) {
      onOpenModal(modalId)
    }
  }

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-white/85 dark:bg-zinc-950/85 backdrop-blur-2xl border-b border-zinc-200/80 dark:border-white/10 py-3 shadow-sm dark:shadow-2xl'
          : 'bg-transparent py-5'
      }`}
    >
      <Container className="flex items-center justify-between gap-4">
        {/* Brand */}
        <a
          href="#top"
          onClick={close}
          className="flex items-center gap-2.5 text-decoration-none group"
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-blue-600 text-white font-mono font-bold text-xs shadow-md shadow-blue-500/25 group-hover:scale-105 transition-transform">
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

        {/* Fluid Glass Navigation Pill */}
        <nav
          ref={navContainerRef}
          aria-label="Main navigation"
          className="relative hidden lg:flex items-center gap-1 rounded-full border border-zinc-200/80 dark:border-white/10 bg-zinc-100/70 dark:bg-zinc-900/60 p-1 backdrop-blur-xl shadow-inner"
        >
          {/* Animated Fluid Glass Capsule Pill */}
          <span
            className="absolute top-1 bottom-1 rounded-full bg-white dark:bg-white/15 backdrop-blur-md border border-zinc-300/80 dark:border-white/25 shadow-sm pointer-events-none transition-all duration-500 cubic-bezier(0.22, 1, 0.36, 1)"
            style={{
              left: `${pillStyle.left}px`,
              width: `${pillStyle.width}px`,
              opacity: pillStyle.opacity,
            }}
          />

          {navLinks.map((l) => {
            const isActive = activeSection === l.href
            return (
              <a
                key={l.label}
                href={l.href}
                ref={(el) => (linkRefs.current[l.href] = el)}
                onClick={(e) => handleNavClick(e, l.href)}
                className={`relative z-10 px-4 py-1.5 rounded-full text-xs font-mono transition-colors duration-200 select-none ${
                  isActive
                    ? 'text-zinc-950 dark:text-white font-semibold'
                    : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-zinc-200'
                }`}
              >
                {l.label}
              </a>
            )
          })}

          <div className="h-3 w-px bg-zinc-300 dark:bg-white/10 mx-1.5" />

          <button
            type="button"
            onClick={() => handleModalClick('about')}
            className="relative z-10 px-3 py-1.5 rounded-full text-xs font-mono text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white transition-colors cursor-pointer"
          >
            About
          </button>
          <button
            type="button"
            onClick={() => handleModalClick('insights')}
            className="relative z-10 px-3 py-1.5 rounded-full text-xs font-mono text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white transition-colors cursor-pointer"
          >
            Insights
          </button>
          <button
            type="button"
            onClick={() => handleModalClick('careers')}
            className="relative z-10 px-3 py-1.5 rounded-full text-xs font-mono text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white transition-colors cursor-pointer"
          >
            Careers
          </button>
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-2.5">
          {/* Theme toggle */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="rounded-full p-2 text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white hover:bg-zinc-200/60 dark:hover:bg-white/10 transition-colors cursor-pointer"
          >
            {theme === 'dark' ? <Sun size={15} /> : <Moon size={15} />}
          </button>

          <Button
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            variant="primary"
            className="hidden sm:inline-flex rounded-full text-xs py-2 px-5 min-h-[36px] bg-blue-600 hover:bg-blue-500 text-white font-medium shadow-md shadow-blue-600/30 border border-blue-500/40"
          >
            <span>Start a Project</span>
          </Button>

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setOpen(!open)}
            aria-label="Toggle mobile menu"
            className="rounded-full p-2 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-white/10 lg:hidden cursor-pointer"
          >
            {open ? <CloseIcon size={18} /> : <MenuIcon size={18} />}
          </button>
        </div>
      </Container>

      {/* Mobile Drawer */}
      {open && (
        <div className="lg:hidden border-b border-zinc-200 dark:border-white/10 bg-white/95 dark:bg-zinc-950/95 backdrop-blur-2xl px-6 py-6 shadow-2xl">
          <div className="flex flex-col space-y-3">
            {navLinks.map((l) => {
              const isActive = activeSection === l.href
              return (
                <a
                  key={l.label}
                  href={l.href}
                  onClick={(e) => handleNavClick(e, l.href)}
                  className={`py-2 px-3 rounded-lg text-sm font-mono transition-colors ${
                    isActive
                      ? 'bg-blue-600/15 text-blue-600 dark:text-blue-400 font-semibold border border-blue-500/30'
                      : 'text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white'
                  }`}
                >
                  {l.label}
                </a>
              )
            })}

            <div className="h-px bg-zinc-200 dark:bg-white/10 my-2" />

            <button
              type="button"
              onClick={() => handleModalClick('about')}
              className="py-1 text-left text-sm font-mono text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white"
            >
              About Studio
            </button>
            <button
              type="button"
              onClick={() => handleModalClick('insights')}
              className="py-1 text-left text-sm font-mono text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white"
            >
              Engineering Insights
            </button>
            <button
              type="button"
              onClick={() => handleModalClick('careers')}
              className="py-1 text-left text-sm font-mono text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white"
            >
              Careers
            </button>

            <div className="pt-2">
              <Button href="#contact" onClick={(e) => handleNavClick(e, '#contact')} variant="primary" className="w-full text-xs rounded-full bg-blue-600 hover:bg-blue-500 text-white">
                <span>Start a Project</span>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
