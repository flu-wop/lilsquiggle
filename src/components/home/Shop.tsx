'use client'

import { MERCH_STORE_URL } from '@/data/site'

export default function Shop() {
  return (
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

        <h2 className="font-display" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', color: 'var(--color-cream)', fontWeight: 500 }}>
          Wear the <span className="italic text-gold-gradient">era</span>
        </h2>

        <p className="text-base max-w-lg leading-relaxed" style={{ color: 'var(--color-mist)' }}>
          Official Lil Squiggle drops alongside the full Mid City Sound and Street Beat collections.
          One store. Three brands. Limitless regret.
        </p>

        <div className="flex flex-col items-center gap-2 mt-4">
          <a href={MERCH_STORE_URL} target="_blank" rel="noopener noreferrer" className="btn-gold"
            style={{ fontSize: '0.75rem', letterSpacing: '0.25em', padding: '1.1rem 3rem' }}>
            Shop at midcitysound.com/merch ↗
          </a>
          <p className="text-[11px]" style={{ color: 'var(--color-mist)' }}>Lil Squiggle · Mid City Sound · Street Beat</p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mt-2">
          {([['Lil Squiggle', true], ['Mid City Sound', false], ['Street Beat', false]] as const).map(([brand, green]) => (
            <span key={brand} className="text-[10px] uppercase tracking-[0.2em] px-3 py-1 rounded-full"
              style={{
                background: green ? 'rgba(29,158,117,0.12)' : 'rgba(212,175,119,0.08)',
                color: green ? 'var(--rasta-green)' : 'var(--color-gold)',
                border: `1px solid ${green ? 'rgba(29,158,117,0.25)' : 'rgba(212,175,119,0.2)'}`,
              }}>
              {brand}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
