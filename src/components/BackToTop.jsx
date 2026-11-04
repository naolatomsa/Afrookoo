import { useEffect, useState } from 'react'

// Appears at the bottom-left once the hero (#top) has scrolled out of view.
export default function BackToTop() {
  const [shown, setShown] = useState(false)

  useEffect(() => {
    const hero = document.getElementById('top')
    if (!hero || !('IntersectionObserver' in window)) return
    const io = new IntersectionObserver(([entry]) => setShown(!entry.isIntersecting), { threshold: 0 })
    io.observe(hero)
    return () => io.disconnect()
  }, [])

  const goTop = () => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' })
  }

  return (
    <button
      type="button"
      onClick={goTop}
      aria-label="Back to top"
      className={`group fixed bottom-4 left-4 z-40 flex size-12 cursor-pointer items-center justify-center rounded-full border border-[#374151] bg-navy text-white shadow-[0_12px_28px_-10px_rgba(17,24,39,.6)] transition duration-300 hover:-translate-y-1 hover:border-brand-deep hover:bg-brand-deep hover:shadow-[0_16px_30px_-10px_rgba(40,120,240,.7)] sm:bottom-6 sm:left-6 sm:size-13 ${
        shown ? 'visible translate-y-0 scale-100 opacity-100' : 'invisible translate-y-4 scale-75 opacity-0'
      }`}
    >
      <svg className="transition-transform duration-200 group-hover:-translate-y-0.5" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 19V5M5 12l7-7 7 7" />
      </svg>
    </button>
  )
}
