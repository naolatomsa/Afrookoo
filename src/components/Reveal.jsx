import { useEffect, useRef, useState } from 'react'

export const stagger = (i, cols = 3, step = 60) => (i % cols) * step

export default function Reveal({
  as: Tag = 'div',
  delay = 0,
  type = 'up',
  className = '',
  children,
  ...rest
}) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el || !('IntersectionObserver' in window)) {
      setVisible(true)
      return
    }

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) {
      setVisible(true)
      return
    }

    // Smooth initial mount: if already inside viewport on page load, reveal smoothly without initial blank flash
    const rect = el.getBoundingClientRect()
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      setVisible(true)
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting)
      },
      { threshold: 0.05, rootMargin: '80px 0px 80px 0px' }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  const typeClass = {
    up: 'reveal-up',
    fade: 'reveal-fade',
    scale: 'reveal-scale',
  }[type] || 'reveal-up'

  return (
    <Tag
      ref={ref}
      style={{ transitionDelay: visible ? `${delay}ms` : '0ms' }}
      className={`${typeClass} ${visible ? 'revealed' : ''} ${className}`}
      {...rest}
    >
      {children}
    </Tag>
  )
}
