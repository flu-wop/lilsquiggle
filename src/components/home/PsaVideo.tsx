'use client'

import { useReveal } from '@/lib/useReveal'
import { HASHTAG } from '@/data/site'

export default function PsaVideo() {
  const { ref, revealed } = useReveal()
  return (
    <section
      ref={ref}
      className={`py-20 px-6 transition-all duration-700 ${revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      style={{ background: 'var(--color-black)', borderTop: '1px solid rgba(212,175,119,0.08)' }}
    >
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-6">
          <div className="gold-divider" />
          <span className="text-[10px] uppercase tracking-[0.4em]" style={{ color: 'var(--color-gold)' }}>Official PSA</span>
        </div>
        <h2 className="font-display mb-8" style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', color: 'var(--color-cream)', fontWeight: 500 }}>
          Watch before you <span className="italic text-gold-gradient">dial</span>
        </h2>
        <div className="relative rounded-sm overflow-hidden card-lift" style={{ border: '1px solid rgba(212,175,119,0.15)' }}>
          <video src="/video/flip-fails-1.mp4" autoPlay loop muted playsInline preload="metadata"
            className="w-full aspect-video object-cover" />
          <div className="absolute inset-0 pointer-events-none vignette" />
          <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
            <span className="text-[10px] uppercase tracking-[0.2em] px-2.5 py-1.5 rounded-sm"
              style={{ background: 'rgba(9,9,9,0.75)', color: 'var(--color-gold)', backdropFilter: 'blur(8px)' }}>
              Flip Fails · Official PSA
            </span>
            <span className="text-[10px] uppercase tracking-[0.2em] px-2.5 py-1.5 rounded-sm"
              style={{ background: 'rgba(9,9,9,0.75)', color: 'var(--color-mist)', backdropFilter: 'blur(8px)' }}>
              {HASHTAG}
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
