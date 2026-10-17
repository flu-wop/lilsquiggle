'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { gsap } from '@/lib/gsap'
import { MERCH_URL, HERO_VIDEO, HERO_POSTER } from '@/data/site'

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const bgRef = useRef<HTMLDivElement>(null)

  // Light parallax on the background layer.
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    if (!sectionRef.current || !bgRef.current) return
    const tween = gsap.to(bgRef.current, {
      yPercent: 14,
      ease: 'none',
      scrollTrigger: { trigger: sectionRef.current, start: 'top top', end: 'bottom top', scrub: true },
    })
    return () => { tween.scrollTrigger?.kill(); tween.kill() }
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden grain-overlay"
      style={{ background: 'radial-gradient(ellipse 100% 80% at 50% -10%, #1f1a0e 0%, var(--color-black) 60%)' }}
    >
      {/* BG: vortex still, or a full-bleed loop once HERO_VIDEO is set */}
      <div ref={bgRef} className="absolute -inset-[8%]">
        <Image src="/images/hero-bg.jpg" alt="" fill className="object-cover" style={{ opacity: 0.22 }} priority />
        {HERO_VIDEO && (
          <video
            src={HERO_VIDEO} poster={HERO_POSTER ?? undefined}
            autoPlay muted loop playsInline preload="auto"
            className="absolute inset-0 w-full h-full object-cover" style={{ opacity: 0.5 }}
          />
        )}
      </div>
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, rgba(9,9,9,0.45) 0%, rgba(9,9,9,0.75) 65%, var(--color-black) 100%)' }} />
      <div className="absolute inset-0 vignette pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-4xl mx-auto pt-20 w-full">
        <div className="animate-fade-in mb-8">
          <a href="https://midcitysound.com" target="_blank" rel="noopener noreferrer"
            className="inline-flex flex-wrap items-center justify-center gap-2 px-4 py-2.5 rounded-sm group"
            style={{ border: '1px solid rgba(212,175,119,0.25)', background: 'rgba(9,9,9,0.55)', backdropFilter: 'blur(12px)' }}>
            <span className="text-[9px] uppercase tracking-[0.4em]" style={{ color: 'var(--color-mist)' }}>Mid City Sound Presents</span>
            <div className="w-px h-3" style={{ background: 'rgba(212,175,119,0.3)' }} />
            <span className="text-[9px] uppercase tracking-[0.3em]" style={{ color: 'var(--color-mist)' }}>midcitysound.com ↗</span>
          </a>
        </div>

        <div className="rasta-bar w-16 h-0.5 mb-8 rounded-full" />

        <h1 className="animate-fade-up font-display text-gold-gradient leading-[0.9] tracking-tight"
          style={{ fontSize: 'clamp(2.6rem, 11vw, 9rem)', fontWeight: 600 }}>
          Don&apos;t Drink
        </h1>
        <h1 className="animate-fade-up delay-100 font-display italic font-light leading-[0.9] tracking-tight mb-4"
          style={{ fontSize: 'clamp(2.6rem, 11vw, 9rem)', color: 'var(--color-cream)' }}>
          &amp; Dial
        </h1>
        <p className="animate-fade-up delay-200 font-display text-lg md:text-2xl italic tracking-[0.3em] mb-6"
          style={{ color: 'var(--color-mist)' }}>
          Decades
        </p>

        <div className="animate-fade-up delay-300 flex items-center gap-4 mb-10">
          <div className="gold-divider" />
          <span className="text-[10px] uppercase tracking-[0.3em] text-center" style={{ color: 'var(--color-mist)' }}>
            One call. Every era. Same regret.
          </span>
          <div className="gold-divider" />
        </div>

        <div className="animate-fade-up delay-400 flex flex-col sm:flex-row gap-3 mb-3 w-full sm:w-auto px-4 sm:px-0">
          <a href="#stream" className="btn-gold w-full sm:w-auto justify-center">Stream the Song ↓</a>
          <a href={MERCH_URL} target="_blank" rel="noopener noreferrer" className="btn-outline-gold w-full sm:w-auto justify-center">
            Shop the Drop ↗
          </a>
        </div>
        <p className="animate-fade-up delay-500 text-[11px]" style={{ color: 'var(--color-mist)' }}>
          Ships from Mid City Sound · No account needed
        </p>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-float">
        <span className="text-[9px] uppercase tracking-[0.4em]" style={{ color: 'var(--color-mist)' }}>Scroll</span>
        <div className="w-px h-10" style={{ background: 'linear-gradient(to bottom, rgba(212,175,119,0.5), transparent)' }} />
      </div>
    </section>
  )
}
