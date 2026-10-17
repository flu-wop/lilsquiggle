'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { gsap, ScrollTrigger } from '@/lib/gsap'
import { scrollToY } from '@/lib/lenis'
import { ERAS, type Era } from '@/data/eras'
import { clipsForEra } from '@/data/clips'
import ClipModal from '@/components/ClipModal'
import { useReveal } from '@/lib/useReveal'

// Decorative rotary dial. Ten finger holes on a gold ring.
function RotaryDial() {
  const holes = Array.from({ length: 10 }, (_, i) => {
    const a = ((40 + i * 30) * Math.PI) / 180
    return { x: 200 + 135 * Math.sin(a), y: 200 - 135 * Math.cos(a) }
  })
  return (
    <svg viewBox="0 0 400 400" className="w-full h-full" aria-hidden>
      <circle cx="200" cy="200" r="192" fill="none" stroke="var(--color-gold)" strokeWidth="2" />
      <circle cx="200" cy="200" r="172" fill="none" stroke="var(--color-gold)" strokeWidth="1" opacity="0.5" />
      {holes.map((h, i) => (
        <circle key={i} cx={h.x} cy={h.y} r="26" fill="none" stroke="var(--color-gold)" strokeWidth="2" />
      ))}
      <circle cx="200" cy="200" r="64" fill="none" stroke="var(--rasta-green)" strokeWidth="2" />
      <circle cx="200" cy="200" r="8" fill="var(--rasta-green)" />
    </svg>
  )
}

function EraCopy({ era, onOpen }: { era: Era; onOpen: () => void }) {
  const count = clipsForEra(era.id).length
  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-center gap-3">
        <span className={`text-[10px] font-sans font-semibold px-2.5 py-1 rounded-sm ${era.badge}`}>{era.label}</span>
        <span className="text-xl" aria-hidden>{era.glyph}</span>
      </div>
      <h3 className="font-display leading-tight" style={{ fontSize: 'clamp(2rem, 4.5vw, 3.6rem)', color: 'var(--color-cream)', fontWeight: 500 }}>
        {era.device}
      </h3>
      <p className="text-[10px] uppercase tracking-[0.3em]" style={{ color: 'var(--rasta-green)' }}>{era.setting}</p>
      <p className="text-base leading-relaxed max-w-md" style={{ color: 'var(--color-mist)' }}>{era.desc}</p>
      <div>
        <button onClick={onOpen} className="btn-outline-gold">
          Watch the {count} {count === 1 ? 'clip' : 'clips'} ↗
        </button>
      </div>
    </div>
  )
}

export default function DialSection() {
  const [mode, setMode] = useState<'stack' | 'pinned'>('stack')
  const [active, setActive] = useState(0)
  const [openEra, setOpenEra] = useState<Era['id'] | null>(null)

  const pinRef = useRef<HTMLDivElement>(null)
  const dialRef = useRef<HTMLDivElement>(null)
  const stRef = useRef<ScrollTrigger | null>(null)
  const reveal = useReveal()

  // Pinned scroll only on desktop with motion allowed. Everything else gets stacked cards.
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px) and (prefers-reduced-motion: no-preference)')
    const update = () => setMode(mq.matches ? 'pinned' : 'stack')
    update()
    mq.addEventListener('change', update)
    return () => mq.removeEventListener('change', update)
  }, [])

  useEffect(() => {
    if (mode !== 'pinned' || !pinRef.current) return
    const st = ScrollTrigger.create({
      trigger: pinRef.current,
      start: 'top top',
      end: '+=300%',
      pin: true,
      scrub: true,
      onUpdate: self => {
        const p = self.progress
        const idx = Math.min(ERAS.length - 1, Math.floor(p * ERAS.length))
        setActive(prev => (prev === idx ? prev : idx))
        if (dialRef.current) gsap.set(dialRef.current, { rotation: p * 540, transformOrigin: '50% 50%' })
      },
    })
    stRef.current = st
    return () => { st.kill(); stRef.current = null }
  }, [mode])

  const goTo = (i: number) => {
    const st = stRef.current
    if (!st) return
    scrollToY(st.start + (st.end - st.start) * ((i + 0.5) / ERAS.length))
  }

  return (
    <section id="eras" aria-label="The Eras">
      {mode === 'pinned' ? (
        <div ref={pinRef} className="relative h-screen overflow-hidden grain-overlay" style={{ background: 'var(--color-charcoal)' }}>
          {/* Big rotating dial, scroll-driven */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div ref={dialRef} className="w-[min(110vh,1000px)] aspect-square" style={{ opacity: 0.09 }}>
              <RotaryDial />
            </div>
          </div>
          <div className="absolute inset-0 vignette pointer-events-none" />

          <div className="relative z-10 h-full max-w-6xl mx-auto px-6 pt-24 pb-24 flex flex-col">
            <div className="flex items-center gap-4 mb-4">
              <div className="gold-divider" />
              <span className="text-[10px] uppercase tracking-[0.4em]" style={{ color: 'var(--color-gold)' }}>Dial the Eras</span>
            </div>
            <h2 className="font-display mb-6" style={{ fontSize: 'clamp(1.8rem, 3.2vw, 2.8rem)', color: 'var(--color-cream)', fontWeight: 500 }}>
              Every era, the same <span className="italic text-gold-gradient">call</span>
            </h2>

            <div className="relative flex-1 min-h-0">
              {ERAS.map((era, i) => {
                const on = i === active
                return (
                  <div
                    key={era.id}
                    aria-hidden={!on}
                    className="absolute inset-0 grid grid-cols-2 gap-14 items-center transition-all duration-700"
                    style={{
                      opacity: on ? 1 : 0,
                      transform: on ? 'translateY(0)' : `translateY(${i < active ? '-32px' : '32px'})`,
                      pointerEvents: on ? 'auto' : 'none',
                    }}
                  >
                    <div className="relative mx-auto h-full max-h-[56vh] aspect-[3/4] rounded-sm overflow-hidden border"
                      style={{ borderColor: 'rgba(212,175,119,0.18)', background: 'var(--color-dark)' }}>
                      <Image src={era.img} alt={`Lil Squiggle in the ${era.label}`} fill sizes="(min-width: 768px) 40vw, 90vw"
                        className="object-cover" priority={i === 0} />
                    </div>
                    <EraCopy era={era} onOpen={() => setOpenEra(era.id)} />
                  </div>
                )
              })}
            </div>

            {/* Era progress: rotary → flip → modern */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3">
              {ERAS.map((era, i) => (
                <button
                  key={era.id} onClick={() => goTo(i)} aria-label={`Go to ${era.label}`}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-full transition-all"
                  style={{
                    border: `1px solid ${i === active ? 'var(--color-gold)' : 'rgba(212,175,119,0.2)'}`,
                    color: i === active ? 'var(--color-gold)' : 'var(--color-mist)',
                    background: i === active ? 'rgba(212,175,119,0.1)' : 'transparent',
                  }}
                >
                  <span aria-hidden>{era.glyph}</span>
                  <span className="text-[10px] uppercase tracking-[0.2em]">{era.id === 'modern' ? 'Now' : era.id}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div
          ref={reveal.ref as React.RefObject<HTMLDivElement>}
          className={`py-24 px-6 transition-all duration-700 ${reveal.revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          style={{ background: 'var(--color-charcoal)' }}
        >
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <div className="gold-divider" />
              <span className="text-[10px] uppercase tracking-[0.4em]" style={{ color: 'var(--color-gold)' }}>Dial the Eras</span>
            </div>
            <h2 className="font-display mb-12" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', color: 'var(--color-cream)', fontWeight: 500 }}>
              Every era, the same <span className="italic text-gold-gradient">call</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {ERAS.map(era => (
                <div key={era.id} className="rasta-card-lift rounded-sm overflow-hidden flex flex-col border"
                  style={{ background: 'var(--color-dark)', borderColor: 'rgba(212,175,119,0.12)' }}>
                  <div className="relative w-full">
                    <Image src={era.img} alt={`Lil Squiggle in the ${era.label}`} width={600} height={800} className="w-full h-auto block" />
                    <div className="absolute top-3 left-3">
                      <span className={`text-[10px] font-sans font-semibold px-2.5 py-1 rounded-sm ${era.badge}`}>{era.label}</span>
                    </div>
                  </div>
                  <div className="p-5 flex flex-col gap-3 flex-1" style={{ borderTop: '1px solid rgba(212,175,119,0.1)' }}>
                    <div className="flex items-center justify-between">
                      <p className="text-[10px] uppercase tracking-[0.25em]" style={{ color: 'var(--rasta-green)' }}>{era.device}</p>
                      <span className="text-lg" aria-hidden>{era.glyph}</span>
                    </div>
                    <p className="text-sm leading-relaxed" style={{ color: 'var(--color-mist)' }}>{era.desc}</p>
                    <button onClick={() => setOpenEra(era.id)} className="btn-outline-gold mt-auto self-start">
                      Watch the clips ↗
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {openEra && <ClipModal eraId={openEra} onClose={() => setOpenEra(null)} />}
    </section>
  )
}
