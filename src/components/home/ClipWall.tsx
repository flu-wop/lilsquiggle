'use client'

import { CLIPS } from '@/data/clips'
import { HASHTAG } from '@/data/site'
import { useReveal } from '@/lib/useReveal'
import ClipVideo from '@/components/ClipVideo'

export default function ClipWall() {
  const { ref, revealed } = useReveal()
  return (
    <section
      id="clips"
      ref={ref}
      className={`py-24 md:py-32 transition-all duration-700 ${revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      style={{ background: 'var(--color-black)' }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-6">
          <div className="gold-divider" />
          <span className="text-[10px] uppercase tracking-[0.4em]" style={{ color: 'var(--color-gold)' }}>Clip Wall</span>
        </div>
        <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
          <h2 className="font-display" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', color: 'var(--color-cream)', fontWeight: 500 }}>
            Recreated. <span className="italic text-gold-gradient">Regretted.</span>
          </h2>
          <span className="text-[10px] uppercase tracking-[0.3em]" style={{ color: 'var(--color-mist)' }}>
            {HASHTAG} · Swipe →
          </span>
        </div>
      </div>

      {/* Horizontal snap carousel. Edge padding lines up with the container above. */}
      <div
        className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-6 px-6 md:px-[max(1.5rem,calc((100vw-72rem)/2+1.5rem))]"
        style={{ scrollbarWidth: 'none' }}
      >
        {CLIPS.map(c => (
          <div key={c.id} className={`snap-start shrink-0 ${c.aspect === 'wide' ? 'w-[300px] sm:w-[420px]' : 'w-[200px] sm:w-[240px]'}`}>
            <ClipVideo clip={c} />
            <p className="text-[10px] uppercase tracking-[0.2em] mt-3" style={{ color: 'var(--color-mist)' }}>{c.template}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
