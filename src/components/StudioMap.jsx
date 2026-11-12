import { useState, useEffect } from 'react'
import { ArrowUpRight, Copy, Check, Navigation, Maximize2, Minimize2, MapPin } from './Icons.jsx'

const LAT = 9.032242240219936
const LNG = 38.76158757141308
const LAT_STR = '9.032242'
const LNG_STR = '38.761588'

/**
 * Calculates whether Afrookoo Studio in 4 Kilo, Addis Ababa is currently open
 * (Monday to Friday, 8:30 AM to 6:00 PM EAT, UTC+3)
 */
function getStudioStatus() {
  const now = new Date()
  const utcHours = now.getUTCHours()
  const utcMinutes = now.getUTCMinutes()
  const utcDay = now.getUTCDay()

  let eatHours = utcHours + 3
  let eatDay = utcDay
  if (eatHours >= 24) {
    eatHours -= 24
    eatDay = (eatDay + 1) % 7
  }

  const eatMinutes = utcMinutes
  const totalMinutes = eatHours * 60 + eatMinutes

  const isWeekday = eatDay >= 1 && eatDay <= 5
  const isOpen = isWeekday && totalMinutes >= 510 && totalMinutes < 1080

  const timeFormat = `${eatHours % 12 || 12}:${String(eatMinutes).padStart(2, '0')} ${
    eatHours >= 12 ? 'PM' : 'AM'
  } EAT`

  if (isOpen) {
    return {
      isOpen: true,
      label: 'Open Now',
      subtext: `Closes 6:00 PM EAT (${timeFormat})`,
    }
  }

  let nextOpen = 'Opens Mon 8:30 AM EAT'
  if (isWeekday && totalMinutes < 510) {
    nextOpen = 'Opens today at 8:30 AM EAT'
  } else if (eatDay >= 1 && eatDay <= 4 && totalMinutes >= 1080) {
    nextOpen = 'Opens tomorrow at 8:30 AM EAT'
  }

  return {
    isOpen: false,
    label: 'Closed Now',
    subtext: `${nextOpen} (${timeFormat})`,
  }
}

export default function StudioMap({ className = '' }) {
  const [activeTab, setActiveTab] = useState('map') // 'map' | 'satellite'
  const [copied, setCopied] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)
  const [hasError, setHasError] = useState(false)
  const [reloadKey, setReloadKey] = useState(0)
  const [status, setStatus] = useState(getStudioStatus())

  // Automatic network detection and seamless online recovery
  useEffect(() => {
    // If initially offline, seamlessly use local map
    if (typeof navigator !== 'undefined' && !navigator.onLine) {
      setHasError(true)
    }

    const handleOnline = () => {
      // Network restored: switch back to live map and force iframe reload
      setHasError(false)
      setReloadKey((prev) => prev + 1)
    }

    const handleOffline = () => {
      setHasError(true)
    }

    const handleFocus = () => {
      // If user returns to tab and connection is back, recover to live map
      if (typeof navigator !== 'undefined' && navigator.onLine && hasError) {
        setHasError(false)
        setReloadKey((prev) => prev + 1)
      }
    }

    window.addEventListener('online', handleOnline)
    window.addEventListener('offline', handleOffline)
    window.addEventListener('focus', handleFocus)

    // Periodically check if connection has returned when in fallback mode
    let retryTimer
    if (hasError) {
      retryTimer = setInterval(() => {
        if (typeof navigator !== 'undefined' && navigator.onLine) {
          setHasError(false)
          setReloadKey((prev) => prev + 1)
        }
      }, 5000)
    }

    setStatus(getStudioStatus())
    const interval = setInterval(() => {
      setStatus(getStudioStatus())
    }, 60000)

    return () => {
      window.removeEventListener('online', handleOnline)
      window.removeEventListener('offline', handleOffline)
      window.removeEventListener('focus', handleFocus)
      if (retryTimer) clearInterval(retryTimer)
      clearInterval(interval)
    }
  }, [hasError])

  // Iframe error/timeout fallback: if it doesn't load within 6s, show local map seamlessly
  useEffect(() => {
    let timeoutId
    if (!hasError) {
      timeoutId = setTimeout(() => {
        if (typeof navigator !== 'undefined' && !navigator.onLine) {
          setHasError(true)
        }
      }, 6000)
    }
    return () => clearTimeout(timeoutId)
  }, [activeTab, hasError, reloadKey])

  const copyCoordinates = () => {
    navigator.clipboard.writeText(`${LAT}, ${LNG}`)
    setCopied(true)
    setTimeout(() => setCopied(false), 2400)
  }

  const googleDirectionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${LAT},${LNG}`
  const appleMapsUrl = `https://maps.apple.com/?ll=${LAT},${LNG}&q=Afrookoo+Software+Studio`

  return (
    <div
      className={`rounded-2xl border border-[var(--border-primary)] bg-[var(--bg-surface)] p-4 transition-all duration-300 shadow-xs hover:border-zinc-400 dark:hover:border-zinc-700 ${className}`}
    >
      {/* Header: Studio Office & Live Working Hours */}
      <div className="flex flex-wrap items-center justify-between gap-2 pb-3 mb-3 border-b border-[var(--border-subtle)]">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--accent)] font-semibold">
              Studio Office
            </span>
            <span className="text-zinc-300 dark:text-zinc-700">•</span>
            <span className="text-xs font-semibold text-[var(--text-heading)]">
              4 Kilo, Ethiopia
            </span>
          </div>

          <p className="text-[11px] text-[var(--text-muted)] font-mono mt-0.5">
            Hours: Monday to Friday, 8:30 AM to 6:00 PM EAT
          </p>

          <div className="flex items-center gap-1.5 mt-1">
            <span
              className={`h-2 w-2 rounded-full ${
                status.isOpen
                  ? 'bg-emerald-500 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.6)]'
                  : 'bg-zinc-400 dark:bg-zinc-600'
              }`}
            />
            <span
              className={`text-[11px] font-mono font-medium ${
                status.isOpen ? 'text-emerald-600 dark:text-emerald-400' : 'text-[var(--text-muted)]'
              }`}
            >
              {status.label}
            </span>
            <span className="text-[10px] text-[var(--text-muted)] font-mono hidden sm:inline">
              · {status.subtext}
            </span>
          </div>
        </div>

        {/* View Switcher: ONLY Map and Satellite in Normal Conditions */}
        <div className="flex items-center gap-1 p-0.5 rounded-lg bg-black/[0.04] dark:bg-white/[0.06] border border-black/[0.04] dark:border-white/[0.06] text-[11px] font-mono">
          <button
            type="button"
            onClick={() => {
              setActiveTab('map')
              setHasError(false)
              setReloadKey((prev) => prev + 1)
            }}
            className={`px-3 py-1 rounded-md transition-all cursor-pointer font-medium ${
              activeTab === 'map'
                ? 'bg-white dark:bg-zinc-800 text-[var(--text-heading)] shadow-xs'
                : 'text-[var(--text-muted)] hover:text-[var(--text-heading)]'
            }`}
          >
            Live Map
          </button>
          <button
            type="button"
            onClick={() => {
              setActiveTab('satellite')
              setHasError(false)
              setReloadKey((prev) => prev + 1)
            }}
            className={`px-3 py-1 rounded-md transition-all cursor-pointer font-medium ${
              activeTab === 'satellite'
                ? 'bg-white dark:bg-zinc-800 text-[var(--text-heading)] shadow-xs'
                : 'text-[var(--text-muted)] hover:text-[var(--text-heading)]'
            }`}
          >
            Satellite
          </button>
        </div>
      </div>

      {/* Main Map Viewport */}
      <div
        className={`relative overflow-hidden rounded-xl border border-black/[0.08] dark:border-white/[0.1] bg-zinc-100 dark:bg-zinc-900 transition-all duration-300 ${
          isExpanded ? 'h-[400px]' : 'h-[250px]'
        }`}
      >
        {/* If an error occurs (offline, timeout, failed connection), show clean local map seamlessly */}
        {hasError ? (
          <div className="relative w-full h-full bg-zinc-100 dark:bg-zinc-900 select-none overflow-hidden">
            <svg
              className="absolute inset-0 w-full h-full"
              viewBox="0 0 400 250"
              preserveAspectRatio="xMidYMid slice"
            >
              <rect width="400" height="250" className="fill-zinc-100 dark:fill-[#141417]" />

              {/* Abrehot Library Zone */}
              <rect
                x="250"
                y="35"
                width="120"
                height="75"
                rx="6"
                className="fill-emerald-500/10 dark:fill-emerald-950/30 stroke-emerald-500/20"
                strokeWidth="1"
              />
              <text
                x="265"
                y="68"
                className="fill-emerald-700 dark:fill-emerald-400 font-sans font-medium text-[10px]"
              >
                Abrehot Public Library
              </text>
              <text
                x="265"
                y="83"
                className="fill-zinc-500 dark:fill-zinc-400 font-mono text-[8px]"
              >
                ~140m Northeast
              </text>

              {/* AAU Science Faculty */}
              <rect
                x="30"
                y="25"
                width="140"
                height="65"
                rx="6"
                className="fill-blue-500/10 dark:fill-blue-950/30 stroke-blue-500/20"
                strokeWidth="1"
              />
              <text
                x="45"
                y="55"
                className="fill-blue-700 dark:fill-blue-300 font-sans font-medium text-[10px]"
              >
                Addis Ababa University
              </text>
              <text
                x="45"
                y="70"
                className="fill-zinc-500 dark:fill-zinc-400 font-mono text-[8px]"
              >
                Faculty of Science (4 Kilo)
              </text>

              {/* Arat Kilo Monument */}
              <circle
                cx="80"
                cy="190"
                r="24"
                className="fill-zinc-200 dark:fill-zinc-800 stroke-zinc-300 dark:stroke-zinc-700"
                strokeWidth="2"
              />
              <circle
                cx="80"
                cy="190"
                r="7"
                className="fill-amber-500/30 stroke-amber-500"
                strokeWidth="1.5"
              />
              <text
                x="50"
                y="228"
                className="fill-zinc-700 dark:fill-zinc-300 font-sans font-medium text-[9px]"
              >
                Arat Kilo Square
              </text>

              {/* Streets */}
              <path
                d="M 20 220 L 220 110 L 390 40"
                fill="none"
                className="stroke-white dark:stroke-zinc-700"
                strokeWidth="16"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M 20 220 L 220 110 L 390 40"
                fill="none"
                className="stroke-zinc-300 dark:stroke-zinc-600"
                strokeWidth="14"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M 220 110 L 240 240"
                fill="none"
                className="stroke-zinc-300 dark:stroke-zinc-600"
                strokeWidth="10"
                strokeLinecap="round"
              />
              <path
                d="M 160 10 L 220 110"
                fill="none"
                className="stroke-zinc-300 dark:stroke-zinc-600"
                strokeWidth="10"
                strokeLinecap="round"
              />

              <text
                x="90"
                y="155"
                transform="rotate(-28, 90, 155)"
                className="fill-zinc-500 dark:fill-zinc-400 font-mono text-[8px] uppercase tracking-wider"
              >
                King George VI St
              </text>
            </svg>

            {/* Studio Pin */}
            <div
              style={{ left: '55%', top: '48%' }}
              className="absolute -translate-x-1/2 -translate-y-full z-10 flex flex-col items-center"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-600 text-white shadow-xl shadow-blue-500/40 ring-4 ring-white dark:ring-zinc-900">
                <MapPin size={18} />
              </div>
              <div className="h-2 w-2 rounded-full bg-blue-600 -mt-1" />

              <div className="mt-1 whitespace-nowrap px-3 py-1.5 rounded-lg bg-white/95 dark:bg-zinc-950/95 border border-black/10 dark:border-white/10 shadow-xl backdrop-blur-md text-center">
                <p className="text-xs font-bold text-zinc-900 dark:text-white flex items-center justify-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-emerald-500" />
                  Afrookoo Software
                </p>
                <p className="text-[10px] font-mono text-zinc-500 dark:text-zinc-400">
                  4 Kilo · Around Abrehot Library
                </p>
              </div>
            </div>
          </div>
        ) : activeTab === 'map' ? (
          /* Normal Condition: Live Map */
          <iframe
            key={`live-map-${reloadKey}`}
            title="Afrookoo Studio 4 Kilo Map"
            src={`https://maps.google.com/maps?q=${LAT},${LNG}&hl=en&z=17&output=embed`}
            onError={() => setHasError(true)}
            className="w-full h-full border-0 filter dark:invert-[0.9] dark:hue-rotate-180 dark:contrast-[1.1] transition-all"
            loading="lazy"
            allowFullScreen
          />
        ) : (
          /* Normal Condition: Satellite */
          <iframe
            key={`sat-map-${reloadKey}`}
            title="Afrookoo Studio Satellite View"
            src={`https://maps.google.com/maps?q=${LAT},${LNG}&t=k&z=17&output=embed`}
            onError={() => setHasError(true)}
            className="w-full h-full border-0"
            loading="lazy"
            allowFullScreen
          />
        )}

        {/* Floating Studio Badge (Normal Conditions) */}
        {!hasError && (
          <div className="absolute top-3 left-3 z-10 hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/95 dark:bg-zinc-950/95 backdrop-blur-md border border-black/10 dark:border-white/10 shadow-lg pointer-events-none">
            <div className="h-2 w-2 rounded-full bg-blue-600 animate-pulse" />
            <div className="text-left">
              <p className="text-[11px] font-semibold text-[var(--text-heading)] leading-none">
                Afrookoo Studio
              </p>
              <p className="text-[9px] font-mono text-[var(--text-muted)] mt-0.5 leading-none">
                4 Kilo · Abrehot Library Corridor
              </p>
            </div>
          </div>
        )}

        {/* Expand / Minimize Toggle */}
        <button
          type="button"
          onClick={() => setIsExpanded(!isExpanded)}
          aria-label={isExpanded ? 'Minimize map' : 'Expand map'}
          className="absolute bottom-2.5 right-2.5 z-20 flex h-7 w-7 items-center justify-center rounded-md bg-white/90 dark:bg-zinc-900/90 hover:bg-white dark:hover:bg-zinc-900 text-zinc-800 dark:text-zinc-200 border border-black/10 dark:border-white/10 backdrop-blur-md transition-all shadow-md cursor-pointer"
          title={isExpanded ? 'Collapse' : 'Expand view'}
        >
          {isExpanded ? <Minimize2 size={13} /> : <Maximize2 size={13} />}
        </button>
      </div>

      {/* Footer / Actions Bar */}
      <div className="mt-3 flex flex-wrap items-center justify-between gap-2 text-xs">
        {/* Copy Coordinates Button */}
        <button
          type="button"
          onClick={copyCoordinates}
          className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border border-[var(--border-primary)] hover:border-zinc-400 dark:hover:border-zinc-600 bg-black/[0.02] dark:bg-white/[0.04] text-[var(--text-body)] hover:text-[var(--text-heading)] transition-all font-mono text-[11px] cursor-pointer"
          title="Copy GPS coordinates"
        >
          {copied ? (
            <>
              <Check size={12} className="text-emerald-500" />
              <span className="text-emerald-600 dark:text-emerald-400 font-semibold">
                Copied: {LAT_STR}, {LNG_STR}
              </span>
            </>
          ) : (
            <>
              <Copy size={12} />
              <span>
                {LAT_STR}, {LNG_STR}
              </span>
            </>
          )}
        </button>

        {/* Direct Navigation Links */}
        <div className="flex items-center gap-2">
          <a
            href={appleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] font-mono text-[var(--text-muted)] hover:text-[var(--text-heading)] transition-colors hidden sm:inline"
          >
            Apple Maps
          </a>

          <a
            href={googleDirectionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white text-[11px] font-semibold shadow-xs shadow-blue-500/20 transition-all hover:gap-2 active:scale-95"
            title="Open turn-by-turn navigation in Google Maps"
          >
            <Navigation size={12} />
            <span>Get Directions</span>
            <ArrowUpRight size={11} />
          </a>
        </div>
      </div>
    </div>
  )
}
