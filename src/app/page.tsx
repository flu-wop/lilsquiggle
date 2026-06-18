'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

const MERCH_URL = 'https://midcitysound.com/merch'

const ERAS = [
  {
    decade: '70s',
    label: "The '70s",
    device: 'Rotary Phone',
    glyph: '📞',
    desc: "Squiggle spins the dial. Avocado-green kitchen. Same mistake, analog edition.",
    img: '/images/era-70s.png',
    badge: 'era-badge-70s',
  },
  {
    decade: '90s',
    label: "The '90s",
    device: 'Flip Phone',
    glyph: '📱',
    desc: 'The satisfying snap of a flip. The unsatisfying aftermath of a 2am call.',
    img: '/images/era-90s.png',
    badge: 'era-badge-90s',
  },
  {
    decade: 'Now',
    label: 'Modern',
    device: 'Smartphone',
    glyph: '📲',
    desc: 'Face ID. Read receipts. Zero excuses. Maximum regret.',
    img: '/images/era-modern.png',
    badge: 'era-badge-modern',
  },
]

function useReveal(threshold = 0.12) {
  const ref = useRef<HTMLElement>(null)
  const [revealed, setRevealed] = useState(false)
  useEffect(() => {
    if (!ref.current) return
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setRevealed(true); obs.disconnect() } },
      { threshold }
    )
    obs.observe(ref.current)
    return () => obs.disconnect()
  }, [threshold])
  return { ref, revealed }
}

function AudioPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [playing, setPlaying] = useState(false)
  const [muted, setMuted] = useState(false)
  const [vol, setVol] = useState(0.2)

  useEffect(() => {
    const a = audioRef.current
    if (!a) return
    a.volume = vol
    a.muted = false
    a.play().then(() => setPlaying(true)).catch(() => {})
  }, [])

  const togglePlay = () => {
    const a = audioRef.current; if (!a) return
    if (playing) { a.pause() } else { a.muted = false; setMuted(false); a.play().catch(() => {}) }
    setPlaying(p => !p)
  }
  const toggleMute = () => {
    const a = audioRef.current; if (!a) return
    a.muted = !a.muted; setMuted(a.muted)
  }
  const handleVol = (e: React.ChangeEvent<HTMLInputElement>) => {
    const v = parseFloat(e.target.value)
    const a = audioRef.current; if (!a) return
    a.volume = v; a.muted = false; setVol(v); setMuted(false)
  }

  return (
    <>
      <audio ref={audioRef} src="/audio/dont-drink-and-dial.wav" loop />
      <div className="fixed bottom-5 right-5 z-50 flex items-center gap-2 px-3 py-2 rounded-full"
        style={{ background: 'rgba(9,9,9,0.88)', border: '1px solid rgba(212,175,119,0.25)', backdropFilter: 'blur(20px)' }}>
        <input type="range" min={0} max={1} step={0.05} value={muted ? 0 : vol}
          onChange={handleVol} className="w-14 h-px cursor-pointer" style={{ accentColor: 'var(--color-gold)' }} />
        <button onClick={toggleMute} className="w-6 h-6 flex items-center justify-center"
          style={{ color: muted ? 'rgba(212,175,119,0.3)' : 'var(--color-gold)' }}>
          {muted
            ? <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-3.5 h-3.5"><path strokeLinecap="round" d="M17.25 9.75L19.5 12m0 0l2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-6l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z"/></svg>
            : <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-3.5 h-3.5"><path strokeLinecap="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z"/></svg>
          }
        </button>
        <button onClick={togglePlay}
          className="w-7 h-7 rounded-full flex items-center justify-center"
          style={{ background: 'rgba(212,175,119,0.12)', border: '1px solid rgba(212,175,119,0.3)', color: 'var(--color-gold)' }}>
          {playing
            ? <svg viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3"><path fillRule="evenodd" d="M6.75 5.25a.75.75 0 01.75-.75H9a.75.75 0 01.75.75v13.5a.75.75 0 01-.75.75H7.5a.75.75 0 01-.75-.75V5.25zm7.5 0A.75.75 0 0115 4.5h1.5a.75.75 0 01.75.75v13.5a.75.75 0 01-.75.75H15a.75.75 0 01-.75-.75V5.25z" clipRule="evenodd"/></svg>
            : <svg viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3 ml-0.5"><path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd"/></svg>
          }
        </button>
      </div>
    </>
  )
}

export default function Home() {
  const storyReveal = useReveal()
  const eraReveal   = useReveal()
  const videoReveal = useReveal()
  const ugcReveal   = useReveal()

  return (
    <>
      <Navbar />
      <AudioPlayer />

      {/* ══════════════════════════════ HERO ═════════════════════════════════ */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden grain-overlay"
        style={{ background: 'radial-gradient(ellipse 100% 80% at 50% -10%, #1f1a0e 0%, var(--color-black) 60%)' }}>

        {/* BG image — vortex scene */}
        <div className="absolute inset-0">
          <Image src="/images/hero-bg.jpg" alt="" fill className="object-cover" style={{ opacity: 0.22 }} priority />
          <div className="absolute inset-0"
            style={{ background: 'linear-gradient(to bottom, rgba(9,9,9,0.45) 0%, rgba(9,9,9,0.75) 65%, var(--color-black) 100%)' }} />
        </div>
        <div className="absolute inset-0 vignette pointer-events-none" />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-4xl mx-auto pt-20">

          {/* MCS badge */}
          <div className="animate-fade-in mb-8">
            <a href="https://midcitysound.com" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-5 py-2.5 rounded-sm group"
              style={{ border: '1px solid rgba(212,175,119,0.25)', background: 'rgba(9,9,9,0.55)', backdropFilter: 'blur(12px)' }}>
              <span className="text-[9px] uppercase tracking-[0.4em]" style={{ color: 'var(--color-mist)' }}>Mid City Sound Presents</span>
              <div className="w-px h-3" style={{ background: 'rgba(212,175,119,0.3)' }} />
              <span className="text-[9px] uppercase tracking-[0.3em]" style={{ color: 'var(--color-mist)' }}>midcitysound.com ↗</span>
            </a>
          </div>

          {/* Rasta stripe */}
          <div className="rasta-bar w-16 h-0.5 mb-8 rounded-full" />

          {/* Main title */}
          <h1 className="animate-fade-up font-display text-gold-gradient leading-[0.9] tracking-tight"
            style={{ fontSize: 'clamp(3.5rem, 12vw, 9rem)', fontWeight: 600 }}>
            Don&apos;t Drink
          </h1>
          <h1 className="animate-fade-up delay-100 font-display italic font-light leading-[0.9] tracking-tight mb-4"
            style={{ fontSize: 'clamp(3.5rem, 12vw, 9rem)', color: 'var(--color-cream)' }}>
            &amp; Dial
          </h1>
          <p className="animate-fade-up delay-200 font-display text-lg md:text-2xl italic tracking-[0.3em] mb-6"
            style={{ color: 'var(--color-mist)' }}>
            Decades
          </p>

          {/* Tagline */}
          <div className="animate-fade-up delay-300 flex items-center gap-4 mb-10">
            <div className="gold-divider" />
            <span className="text-[10px] uppercase tracking-[0.4em] whitespace-nowrap" style={{ color: 'var(--color-mist)' }}>
              One call. Every era. Same regret.
            </span>
            <div className="gold-divider" />
          </div>

          {/* CTAs */}
          <div className="animate-fade-up delay-400 flex flex-col sm:flex-row gap-3 mb-3">
            <a href={MERCH_URL} target="_blank" rel="noopener noreferrer" className="btn-gold">
              Shop the Drop ↗
            </a>
            <a href="#story" className="btn-outline-gold">
              The Story ↓
            </a>
          </div>
          <p className="animate-fade-up delay-500 text-[11px]" style={{ color: 'var(--color-mist)' }}>
            Ships from Mid City Sound · No account needed
          </p>
        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-float">
          <span className="text-[9px] uppercase tracking-[0.4em]" style={{ color: 'var(--color-mist)' }}>Scroll</span>
          <div className="w-px h-10" style={{ background: 'linear-gradient(to bottom, rgba(212,175,119,0.5), transparent)' }} />
        </div>
      </section>

      {/* ══════════════════════════ CAMPAIGN ART ═════════════════════════════ */}
      <section style={{ background: 'var(--color-charcoal)', borderTop: '1px solid rgba(212,175,119,0.08)' }}>
        <div className="max-w-5xl mx-auto px-6 py-16 md:py-20">
          <div className="relative rounded-sm overflow-hidden card-lift"
            style={{ border: '1px solid rgba(212,175,119,0.15)' }}>
            <div className="px-5 py-3 flex items-center justify-between"
              style={{ background: 'rgba(9,9,9,0.6)', borderBottom: '1px solid rgba(212,175,119,0.12)' }}>
              <div className="flex items-center gap-3">
                <div className="rasta-divider w-6" />
                <span className="text-[9px] uppercase tracking-[0.3em]" style={{ color: 'var(--color-mist)' }}>Campaign Art</span>
              </div>
              <div className="flex gap-1.5">
                <span className="w-2 h-2 rounded-full" style={{ background: 'rgba(216,90,48,0.6)' }} />
                <span className="w-2 h-2 rounded-full" style={{ background: 'rgba(239,159,39,0.6)' }} />
                <span className="w-2 h-2 rounded-full" style={{ background: 'rgba(29,158,117,0.6)' }} />
              </div>
            </div>
            <Image src="/images/three-eras.png" alt="One Guy. Three Eras. Same Regret."
              width={1200} height={520} className="w-full h-auto" />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════ THE STORY ═══════════════════════════════ */}
      <section
        id="story"
        ref={storyReveal.ref as React.RefObject<HTMLElement>}
        className={`py-24 md:py-36 px-6 transition-all duration-700 ${storyReveal.revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        style={{ background: 'var(--color-black)' }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-14">
            <div className="gold-divider" />
            <span className="text-[10px] uppercase tracking-[0.4em]" style={{ color: 'var(--color-gold)' }}>The Story</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="flex flex-col gap-6">
              <h2 className="font-display leading-tight"
                style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: 'var(--color-cream)', fontWeight: 500 }}>
                One character who can&apos;t{' '}
                <span className="italic text-gold-gradient">stop dialing</span>
              </h2>
              <p className="text-base leading-relaxed" style={{ color: 'var(--color-mist)' }}>
                He&apos;s small, he&apos;s chibi, he&apos;s got Rasta colors and zero impulse control.
                Lil Squiggle is the reggae-dub character who somehow finds himself making
                the worst possible phone call — in every decade, on every device.
              </p>
              <p className="font-display text-xl italic font-light leading-relaxed"
                style={{ color: 'var(--color-gold)', borderLeft: '2px solid rgba(212,175,119,0.3)', paddingLeft: '1.25rem' }}>
                &ldquo;One call. Every era. Same regret.&rdquo;
              </p>
              <div className="flex flex-col gap-1.5 pt-2" style={{ borderTop: '1px solid rgba(212,175,119,0.12)' }}>
                <p className="text-[10px] uppercase tracking-[0.25em] pt-3" style={{ color: 'var(--color-mist)' }}>
                  A Mid City Sound Production
                </p>
                <p className="text-sm" style={{ color: 'var(--color-mist)' }}>
                  Sung by <span style={{ color: 'var(--color-cream)' }}>Pat Smith</span>
                  {' '}· Feat. <span style={{ color: 'var(--color-cream)' }}>Cash Hollywood</span>
                </p>
                <p className="text-sm" style={{ color: 'var(--color-mist)' }}>
                  Produced by <span style={{ color: 'var(--color-cream)' }}>Donny Markowitz</span>
                  {' '}&amp; <span style={{ color: 'var(--color-cream)' }}>Gary Uffner</span>
                </p>
              </div>
            </div>

            {/* Don't Drink and Dial hero image */}
            <div className="relative card-lift rounded-sm overflow-hidden"
              style={{ border: '1px solid rgba(212,175,119,0.15)' }}>
              <Image src="/images/dont-drink-and-dial-hero.png"
                alt="Don't Drink and Dial — When the call follows you through time"
                width={800} height={450} className="w-full h-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════ ERA CARDS ══════════════════════════════ */}
      <section
        ref={eraReveal.ref as React.RefObject<HTMLElement>}
        className={`py-24 md:py-32 px-6 transition-all duration-700 ${eraReveal.revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        style={{ background: 'var(--color-charcoal)' }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <div className="gold-divider" />
            <span className="text-[10px] uppercase tracking-[0.4em]" style={{ color: 'var(--color-gold)' }}>The Eras</span>
          </div>
          <h2 className="font-display mb-12"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', color: 'var(--color-cream)', fontWeight: 500 }}>
            Every era, the same <span className="italic text-gold-gradient">call</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {ERAS.map((era, i) => (
              <div key={era.decade}
                className="rasta-card-lift rounded-sm overflow-hidden flex flex-col border"
                style={{ background: 'var(--color-dark)', borderColor: 'rgba(212,175,119,0.12)', transitionDelay: `${i * 60}ms` }}>
                {/* Character image — natural dimensions, zero padding, tight frame */}
                <div className="relative w-full">
                  <Image
                    src={era.img}
                    alt={`Lil Squiggle in the ${era.label}`}
                    width={600}
                    height={800}
                    className="w-full h-auto block"
                    style={{ display: 'block' }}
                  />
                  {/* Era badge overlay */}
                  <div className="absolute top-3 left-3">
                    <span className={`text-[10px] font-sans font-semibold px-2.5 py-1 rounded-sm ${era.badge}`}>
                      {era.label}
                    </span>
                  </div>
                </div>
                {/* Content */}
                <div className="p-5 flex flex-col gap-2 flex-1"
                  style={{ borderTop: '1px solid rgba(212,175,119,0.1)' }}>
                  <div className="flex items-center justify-between">
                    <p className="text-[10px] uppercase tracking-[0.25em]" style={{ color: 'var(--rasta-green)' }}>
                      {era.device}
                    </p>
                    <span className="text-lg">{era.glyph}</span>
                  </div>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--color-mist)' }}>
                    {era.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════ VIDEO ════════════════════════════════ */}
      <section
        ref={videoReveal.ref as React.RefObject<HTMLElement>}
        className={`py-20 px-6 transition-all duration-700 ${videoReveal.revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        style={{ background: 'var(--color-black)', borderTop: '1px solid rgba(212,175,119,0.08)' }}
      >
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <div className="gold-divider" />
            <span className="text-[10px] uppercase tracking-[0.4em]" style={{ color: 'var(--color-gold)' }}>Official PSA</span>
          </div>
          <h2 className="font-display mb-8"
            style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', color: 'var(--color-cream)', fontWeight: 500 }}>
            Watch before you <span className="italic text-gold-gradient">dial</span>
          </h2>
          <div className="relative rounded-sm overflow-hidden card-lift"
            style={{ border: '1px solid rgba(212,175,119,0.15)' }}>
            <video src="/video/flip-fails-1.mp4" autoPlay loop muted playsInline
              className="w-full aspect-video object-cover" />
            <div className="absolute inset-0 pointer-events-none vignette" />
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
              <span className="text-[10px] uppercase tracking-[0.2em] px-2.5 py-1.5 rounded-sm"
                style={{ background: 'rgba(9,9,9,0.75)', color: 'var(--color-gold)', backdropFilter: 'blur(8px)' }}>
                Flip Fails · Official PSA
              </span>
              <span className="text-[10px] uppercase tracking-[0.2em] px-2.5 py-1.5 rounded-sm"
                style={{ background: 'rgba(9,9,9,0.75)', color: 'var(--color-mist)', backdropFilter: 'blur(8px)' }}>
                #DontDrinkAndDialDecades
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════ SHOP ════════════════════════════════ */}
      <section
        id="shop"
        className="py-24 md:py-32 px-6 relative grain-overlay"
        style={{ background: 'radial-gradient(ellipse 80% 50% at 50% 50%, #131008 0%, var(--color-black) 70%)' }}
      >
        <div className="max-w-4xl mx-auto relative z-10 text-center flex flex-col items-center gap-6">
          <div className="flex items-center gap-4">
            <div className="gold-divider" />
            <span className="text-[10px] uppercase tracking-[0.4em]" style={{ color: 'var(--color-gold)' }}>The Drop</span>
            <div className="gold-divider" />
          </div>

          <h2 className="font-display"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', color: 'var(--color-cream)', fontWeight: 500 }}>
            Wear the <span className="italic text-gold-gradient">era</span>
          </h2>

          <p className="text-base max-w-lg leading-relaxed" style={{ color: 'var(--color-mist)' }}>
            Official Lil Squiggle drops alongside the full Mid City Sound and Street Beat collections.
            One store. Three brands. Limitless regret.
          </p>

          {/* Single merch CTA — clean, no fake product grid */}
          <div className="flex flex-col items-center gap-2 mt-4">
            <a href={MERCH_URL} target="_blank" rel="noopener noreferrer" className="btn-gold"
              style={{ fontSize: '0.75rem', letterSpacing: '0.25em', padding: '1.1rem 3rem' }}>
              Shop at midcitysound.com/merch ↗
            </a>
            <p className="text-[11px]" style={{ color: 'var(--color-mist)' }}>
              Lil Squiggle · Mid City Sound · Street Beat
            </p>
          </div>

          {/* Brand tags */}
          <div className="flex flex-wrap justify-center gap-2 mt-2">
            {[['Lil Squiggle', true], ['Mid City Sound', false], ['Street Beat', false]].map(([brand, green]) => (
              <span key={brand as string} className="text-[10px] uppercase tracking-[0.2em] px-3 py-1 rounded-full"
                style={{
                  background: green ? 'rgba(29,158,117,0.12)' : 'rgba(212,175,119,0.08)',
                  color: green ? 'var(--rasta-green)' : 'var(--color-gold)',
                  border: `1px solid ${green ? 'rgba(29,158,117,0.25)' : 'rgba(212,175,119,0.2)'}`,
                }}>
                {brand as string}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════ COMMUNITY ════════════════════════════════ */}
      <section
        id="community"
        ref={ugcReveal.ref as React.RefObject<HTMLElement>}
        className={`py-24 md:py-36 px-6 transition-all duration-700 ${ugcReveal.revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        style={{ background: 'var(--color-charcoal)' }}
      >
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center gap-8">
          <div className="flex items-center gap-4">
            <div className="gold-divider" />
            <span className="text-[10px] uppercase tracking-[0.4em]" style={{ color: 'var(--color-gold)' }}>Community</span>
            <div className="gold-divider" />
          </div>

          <h2 className="font-display"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', color: 'var(--color-cream)', fontWeight: 500 }}>
            Own your <span className="italic text-gold-gradient">era</span>
          </h2>

          <p className="text-base max-w-lg leading-relaxed" style={{ color: 'var(--color-mist)' }}>
            Share your worst decade-appropriate drunk dial story. Tag us.
            Use the hashtag. Lil Squiggle will feel slightly less alone.
          </p>

          <div className="px-10 py-8 rounded-sm"
            style={{ background: 'var(--color-dark)', border: '1px solid rgba(212,175,119,0.2)' }}>
            <p className="font-display text-2xl md:text-3xl italic font-light" style={{ color: 'var(--color-gold)' }}>
              #DontDrinkAndDialDecades
            </p>
            <p className="text-xs mt-2 uppercase tracking-widest" style={{ color: 'var(--color-mist)' }}>
              Tag your era. Own your regret.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {[
              { label: 'TikTok', handle: '@lilsquigglemon', href: 'https://tiktok.com/@lilsquigglemon', color: 'var(--rasta-green)' },
              { label: 'Instagram', handle: '@lil.squiggle', href: 'https://instagram.com/lil.squiggle', color: 'var(--color-gold)' },
              { label: 'YouTube', handle: '@lilsquigglemon', href: 'https://youtube.com/@lilsquigglemon', color: 'var(--color-gold)' },
              { label: 'X', handle: '@lilsquigglemon', href: 'https://x.com/lilsquigglemon', color: 'var(--color-mist)' },
            ].map(s => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-sm card-lift border"
                style={{ background: 'var(--color-dark)', borderColor: 'rgba(212,175,119,0.12)', textDecoration: 'none' }}>
                <span className="text-[9px] uppercase tracking-[0.2em]" style={{ color: s.color }}>{s.label}</span>
                <span className="text-sm" style={{ color: 'var(--color-mist)' }}>{s.handle}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════ MCS BRIDGE ═══════════════════════════════ */}
      <section className="py-16 px-6" style={{ background: 'var(--color-black)', borderTop: '1px solid rgba(212,175,119,0.08)' }}>
        <div className="max-w-5xl mx-auto">
          <div className="relative rounded-sm overflow-hidden p-8 md:p-12 flex flex-col md:flex-row items-center gap-8"
            style={{ background: 'linear-gradient(135deg, #141008 0%, #0e0e0e 60%, #0a1208 100%)', border: '1px solid rgba(212,175,119,0.18)' }}>
            <div className="absolute inset-0 pointer-events-none"
              style={{ background: 'radial-gradient(ellipse 60% 80% at 0% 50%, rgba(212,175,119,0.05) 0%, transparent 60%)' }} />
            <div className="relative flex-1 text-center md:text-left flex flex-col gap-3">
              <p className="text-[10px] uppercase tracking-[0.4em]" style={{ color: 'var(--color-gold)' }}>
                Part of the Mid City Sound family
              </p>
              <h3 className="font-display"
                style={{ fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', color: 'var(--color-cream)', fontWeight: 500 }}>
                Three Brands. <span className="italic text-gold-gradient">One Studio.</span>
              </h3>
              <p className="text-sm max-w-md" style={{ color: 'var(--color-mist)' }}>
                Lil Squiggle lives inside the Mid City Sound universe alongside the full studio catalog and Street Beat.
              </p>
              <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                {[['Lil Squiggle', true], ['Mid City Sound', false], ['Street Beat', false]].map(([b, g]) => (
                  <span key={b as string} className="text-[9px] uppercase tracking-[0.2em] px-3 py-1 rounded-full"
                    style={{
                      background: g ? 'rgba(29,158,117,0.1)' : 'rgba(212,175,119,0.07)',
                      color: g ? 'var(--rasta-green)' : 'var(--color-gold)',
                      border: `1px solid ${g ? 'rgba(29,158,117,0.25)' : 'rgba(212,175,119,0.18)'}`,
                    }}>
                    {b as string}
                  </span>
                ))}
              </div>
            </div>
            <div className="relative flex flex-col gap-3 w-full md:w-auto shrink-0">
              <a href={MERCH_URL} target="_blank" rel="noopener noreferrer" className="btn-gold text-center">
                Shop All Merch ↗
              </a>
              <a href="https://midcitysound.com" target="_blank" rel="noopener noreferrer" className="btn-outline-gold text-center">
                midcitysound.com ↗
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
