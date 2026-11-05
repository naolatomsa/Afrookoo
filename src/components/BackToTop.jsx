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
      className={`fixed bottom-6 right-6 z-40 flex h-12 w-12 cursor-pointer items-center justify-center rounded-2xl border border-slate-300 dark:border-slate-700/80 bg-white/90 dark:bg-slate-900/90 text-slate-800 dark:text-white shadow-xl backdrop-blur-md transition-all duration-300 hover:border-blue-500 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 hover:-translate-y-1 hover:shadow-blue-500/25 ${
        shown ? 'visible scale-100 opacity-100' : 'invisible scale-75 opacity-0 pointer-events-none'
      }`}
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M12 19V5M5 12l7-7 7 7" />
      </svg>
    </button>
  )
}
