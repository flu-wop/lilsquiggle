'use client'

import { useEffect, useRef } from 'react'
import type { Clip } from '@/data/clips'
import { playManaged, pauseManaged } from '@/lib/videoPool'

// One clip tile. Plays only while on screen (max 3 at once). With no src yet it
// renders an intentional "drops soon" placeholder tile.
export default function ClipVideo({ clip, className = '' }: { clip: Clip; className?: string }) {
  const ref = useRef<HTMLVideoElement>(null)
  const wide = clip.aspect === 'wide'
  const aspect = wide ? 'aspect-video' : 'aspect-[9/16]'

  useEffect(() => {
    const el = ref.current
    if (!el || !clip.src) return
    const obs = new IntersectionObserver(
      ([e]) => (e.isIntersecting ? playManaged(el) : pauseManaged(el)),
      { threshold: 0.5 }
    )
    obs.observe(el)
    return () => { obs.disconnect(); pauseManaged(el) }
  }, [clip.src])

  if (!clip.src) {
    return (
      <div
        className={`relative ${aspect} rounded-sm overflow-hidden flex flex-col items-center justify-center text-center p-4 gap-2 border ${className}`}
        style={{ background: 'linear-gradient(160deg, #1f1a0e 0%, #111 70%)', borderColor: 'rgba(212,175,119,0.18)' }}
      >
        <div className="rasta-bar absolute top-0 left-0 right-0 h-0.5" />
        <span className="text-3xl" aria-hidden>📞</span>
        <p className="font-display text-lg leading-tight" style={{ color: 'var(--color-cream)' }}>{clip.title}</p>
        <p className="text-[9px] uppercase tracking-[0.25em]" style={{ color: 'var(--rasta-green)' }}>Clip drops soon</p>
        <p className="text-[10px] leading-snug" style={{ color: 'var(--color-mist)' }}>{clip.caption}</p>
      </div>
    )
  }

  return (
    <div
      className={`relative ${aspect} rounded-sm overflow-hidden border ${className}`}
      style={{ background: '#111', borderColor: 'rgba(212,175,119,0.18)' }}
    >
      <video
        ref={ref}
        src={clip.src}
        poster={clip.poster ?? undefined}
        muted loop playsInline preload="none"
        aria-label={clip.title}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 pointer-events-none vignette" />
      <div className="absolute bottom-3 left-3 right-3">
        <span
          className="text-[10px] uppercase tracking-[0.2em] px-2.5 py-1.5 rounded-sm inline-block"
          style={{ background: 'rgba(9,9,9,0.75)', color: 'var(--color-gold)', backdropFilter: 'blur(8px)' }}
        >
          {clip.title}
        </span>
      </div>
    </div>
  )
}
