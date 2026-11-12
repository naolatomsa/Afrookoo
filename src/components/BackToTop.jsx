import { useEffect, useState } from 'react'

export default function BackToTop() {
  const [shown, setShown] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShown(window.scrollY > 400)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const goTop = () => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' })
  }

  return (
    <button
      type="button"
      onClick={goTop}
      aria-label="Scroll back to top"
      className={`fixed bottom-8 right-8 z-40 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-[var(--border-primary)] bg-[var(--bg-surface)] text-[var(--text-body)] shadow-sm backdrop-blur-md transition-all duration-300 hover:text-[var(--text-heading)] hover:border-[var(--text-muted)] hover:scale-105 active:scale-95 ${
        shown ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
    >
      <svg
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M12 19V5M5 12l7-7 7 7" />
      </svg>
    </button>
  )
}
