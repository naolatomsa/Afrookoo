import { useEffect, useRef, useState } from 'react'
import { navLinks } from '../data.js'
import { Button, Container } from '../ui.jsx'
import { Sun, Moon, MenuIcon, CloseIcon } from './Icons.jsx'
import AfrookooBrand from './AfrookooBrand.jsx'

export default function Navbar({ onOpenModal }) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [theme, setTheme] = useState('dark')
  const [activeSection, setActiveSection] = useState('')
  const [pillStyle, setPillStyle] = useState({ left: 0, width: 0, opacity: 0 })

  const navContainerRef = useRef(null)
  const linkRefs = useRef({})
  const isClickNavigatingRef = useRef(false)
  const navLockTimeoutRef = useRef(null)

  useEffect(() => {
    const isDark = document.documentElement.classList.contains('dark')
    setTheme(isDark ? 'dark' : 'light')

    const sectionIds = ['work', 'capabilities', 'engagement', 'contact']

    // On initial refresh/load, sync with URL hash or start at top cleanly
    const initialHash = window.location.hash
    if (initialHash && sectionIds.map((id) => `#${id}`).includes(initialHash)) {
      setActiveSection(initialHash)
      isClickNavigatingRef.current = true
      setTimeout(() => {
        const targetId = initialHash.replace('#', '')
        const targetEl = document.getElementById(targetId)
        if (targetEl) {
          const navbarOffset = 80
          const elementPosition = targetEl.getBoundingClientRect().top
          const offsetPosition = elementPosition + window.pageYOffset - navbarOffset
          window.scrollTo({ top: offsetPosition, behavior: 'auto' })
        }
        isClickNavigatingRef.current = false
      }, 50)
    } else {
      setActiveSection('')
      setPillStyle((prev) => ({ ...prev, opacity: 0 }))
    }

    const handleUserInteraction = () => {
      if (isClickNavigatingRef.current) {
        isClickNavigatingRef.current = false
        if (navLockTimeoutRef.current) clearTimeout(navLockTimeoutRef.current)
      }
    }

    const handleScroll = () => {
      setScrolled(window.scrollY > 15)

      if (isClickNavigatingRef.current) return

      // Near the top of the page / Hero section: clear active section completely
      if (window.scrollY < 200) {
        setActiveSection('')
        return
      }

      // Check if at the absolute bottom of the document
      const scrollBottom = window.innerHeight + window.scrollY
      const totalHeight = document.documentElement.scrollHeight
      if (totalHeight - scrollBottom < 80) {
        setActiveSection('#contact')
        return
      }

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
      } else {
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

  // Position fluid sliding glass pill
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

  const handleLogoClick = (e) => {
    if (e && e.preventDefault) e.preventDefault()
    close()

    setActiveSection('')
    isClickNavigatingRef.current = true
    if (navLockTimeoutRef.current) clearTimeout(navLockTimeoutRef.current)

    // Smoothly scroll to the very top
    window.scrollTo({ top: 0, behavior: 'smooth' })

    // Clean up hash from URL cleanly without reload
    if (window.location.hash) {
      try {
        history.replaceState(null, '', window.location.pathname + window.location.search)
      } catch (err) {}
    }

    navLockTimeoutRef.current = setTimeout(() => {
      isClickNavigatingRef.current = false
    }, 800)
  }

  const handleNavClick = (e, href) => {
    if (e && e.preventDefault) e.preventDefault()
    close()

    setActiveSection(href)
    isClickNavigatingRef.current = true
    if (navLockTimeoutRef.current) clearTimeout(navLockTimeoutRef.current)

    const targetId = href.replace('#', '')
    const targetEl = document.getElementById(targetId)
    if (targetEl) {
      const navbarOffset = 80
      const elementPosition = targetEl.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - navbarOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      })

      try {
        history.pushState(null, '', href)
      } catch (err) {}
    }

    navLockTimeoutRef.current = setTimeout(() => {
      isClickNavigatingRef.current = false
    }, 1000)
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
    if (onOpenModal) onOpenModal(modalId)
  }

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-500 ${
        scrolled
          ? 'bg-white/80 dark:bg-zinc-950/80 backdrop-blur-2xl border-b border-black/[0.06] dark:border-white/[0.08] py-3.5 shadow-sm dark:shadow-2xl'
          : 'bg-transparent py-5'
      }`}
    >
      <Container className="flex items-center justify-between gap-3 xl:gap-6">
        {/* Brand */}
        <AfrookooBrand onClick={handleLogoClick} />

        {/* Modern Frosted Glass Floating Navigation Capsule */}
        <nav
          ref={navContainerRef}
          aria-label="Main navigation"
          className="relative hidden lg:flex items-center gap-0.5 xl:gap-1 rounded-full border border-black/[0.07] dark:border-white/[0.1] bg-white/70 dark:bg-zinc-900/60 p-1 backdrop-blur-2xl shadow-xs shrink-0"
        >
          {/* Animated Fluid Glass Highlight Capsule */}
          <span
            className="absolute top-1 bottom-1 rounded-full bg-white dark:bg-white/15 backdrop-blur-md border border-black/5 dark:border-white/20 shadow-xs pointer-events-none transition-all duration-400 ease-out"
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
                className={`relative z-10 whitespace-nowrap px-3 xl:px-4 py-1.5 rounded-full text-xs font-medium transition-colors duration-200 select-none ${
                  isActive
                    ? 'text-[var(--text-heading)] font-semibold'
                    : 'text-[var(--text-body)] hover:text-[var(--text-heading)]'
                }`}
              >
                {l.label}
              </a>
            )
          })}

          <div className="hidden xl:block h-3 w-px bg-black/[0.08] dark:bg-white/[0.12] mx-1" />

          <button
            type="button"
            onClick={() => handleModalClick('about')}
            className="relative z-10 hidden xl:inline-block whitespace-nowrap px-3 py-1.5 rounded-full text-xs font-medium text-[var(--text-body)] hover:text-[var(--text-heading)] transition-colors cursor-pointer"
          >
            About
          </button>
          <button
            type="button"
            onClick={() => handleModalClick('insights')}
            className="relative z-10 hidden xl:inline-block whitespace-nowrap px-3 py-1.5 rounded-full text-xs font-medium text-[var(--text-body)] hover:text-[var(--text-heading)] transition-colors cursor-pointer"
          >
            Insights
          </button>
          <button
            type="button"
            onClick={() => handleModalClick('careers')}
            className="relative z-10 hidden xl:inline-block whitespace-nowrap px-3 py-1.5 rounded-full text-xs font-medium text-[var(--text-body)] hover:text-[var(--text-heading)] transition-colors cursor-pointer"
          >
            Careers
          </button>
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          {/* Theme Toggle Button */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="rounded-full p-2.5 text-[var(--text-body)] hover:text-[var(--text-heading)] hover:bg-black/5 dark:hover:bg-white/10 transition-all duration-300 hover:rotate-45 active:scale-90 cursor-pointer"
          >
            {theme === 'dark' ? <Sun size={15} /> : <Moon size={15} />}
          </button>

          {/* Start a Project CTA Button */}
          <Button
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            variant="primary"
            className="hidden sm:inline-flex rounded-full text-xs h-9 px-5 bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white shadow-md shadow-blue-500/20"
          >
            <span>Start a Project</span>
          </Button>

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setOpen(!open)}
            aria-label="Toggle mobile menu"
            className="rounded-full p-2 text-[var(--text-heading)] hover:bg-black/5 dark:hover:bg-white/10 lg:hidden cursor-pointer"
          >
            {open ? <CloseIcon size={18} /> : <MenuIcon size={18} />}
          </button>
        </div>
      </Container>

      {/* Mobile Drawer */}
      {open && (
        <div className="lg:hidden border-b border-black/[0.06] dark:border-white/[0.1] bg-white/95 dark:bg-zinc-950/95 backdrop-blur-2xl px-6 py-6 shadow-2xl animate-fade">
          <div className="flex flex-col space-y-3">
            {navLinks.map((l) => {
              const isActive = activeSection === l.href
              return (
                <a
                  key={l.label}
                  href={l.href}
                  onClick={(e) => handleNavClick(e, l.href)}
                  className={`py-2 px-3 rounded-xl text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-[var(--accent-muted)] text-[var(--accent)] font-semibold'
                      : 'text-[var(--text-body)] hover:text-[var(--text-heading)]'
                  }`}
                >
                  {l.label}
                </a>
              )
            })}

            <div className="h-px bg-black/[0.06] dark:bg-white/[0.08] my-2" />

            <button
              type="button"
              onClick={() => handleModalClick('about')}
              className="py-1 px-3 text-left text-sm text-[var(--text-body)] hover:text-[var(--text-heading)] cursor-pointer"
            >
              About Studio
            </button>
            <button
              type="button"
              onClick={() => handleModalClick('insights')}
              className="py-1 px-3 text-left text-sm text-[var(--text-body)] hover:text-[var(--text-heading)] cursor-pointer"
            >
              Engineering Insights
            </button>
            <button
              type="button"
              onClick={() => handleModalClick('careers')}
              className="py-1 px-3 text-left text-sm text-[var(--text-body)] hover:text-[var(--text-heading)] cursor-pointer"
            >
              Careers
            </button>

            <div className="pt-2">
              <Button
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                variant="primary"
                className="w-full text-xs rounded-full h-10"
              >
                <span>Start a Project</span>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
