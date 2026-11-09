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
      className={`fixed bottom-6 right-6 z-40 flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white/90 dark:bg-zinc-900/90 text-zinc-700 dark:text-zinc-300 shadow-sm backdrop-blur-md transition-all duration-200 hover:border-zinc-400 dark:hover:border-zinc-600 hover:text-black dark:hover:text-white ${
        shown ? 'visible scale-100 opacity-100' : 'invisible scale-75 opacity-0 pointer-events-none'
      }`}
    >
      <svg
        width="16"
        height="16"
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
