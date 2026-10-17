'use client'

import { PLATFORMS } from '@/data/site'
import { useReveal } from '@/lib/useReveal'

export default function Stream() {
  const { ref, revealed } = useReveal()
  return (
    <section
      id="stream"
      ref={ref}
      className={`py-24 md:py-32 px-6 transition-all duration-700 ${revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      style={{ background: 'var(--color-charcoal)' }}
    >
      <div className="max-w-4xl mx-auto text-center flex flex-col items-center gap-6">
        <div className="flex items-center gap-4">
          <div className="gold-divider" />
          <span className="text-[10px] uppercase tracking-[0.4em]" style={{ color: 'var(--color-gold)' }}>The Song</span>
          <div className="gold-divider" />
        </div>
        <h2 className="font-display" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', color: 'var(--color-cream)', fontWeight: 500 }}>
          Stream it. <span className="italic text-gold-gradient">Then don&apos;t call.</span>
        </h2>
        <p className="text-sm" style={{ color: 'var(--color-mist)' }}>
          Sung by <span style={{ color: 'var(--color-cream)' }}>Pat Smith</span> · Feat.{' '}
          <span style={{ color: 'var(--color-cream)' }}>Cash Hollywood</span> · Produced by{' '}
          <span style={{ color: 'var(--color-cream)' }}>Donny Markowitz</span> &amp;{' '}
          <span style={{ color: 'var(--color-cream)' }}>Gary Uffner</span>
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full max-w-2xl mt-4">
          {PLATFORMS.map(p => {
            const live = !!p.href
            const body = (
              <>
                <div className="text-left">
                  <p className="text-sm font-medium" style={{ color: 'var(--color-cream)' }}>{p.name}</p>
                  <p className="text-[11px]" style={{ color: 'var(--color-mist)' }}>{live ? p.note : 'Coming soon'}</p>
                </div>
                <span style={{ color: live ? 'var(--color-gold)' : 'rgba(168,152,128,0.4)' }}>{live ? '↗' : '·'}</span>
              </>
            )
            const cls = 'flex items-center justify-between p-4 border rounded-sm'
            const style = { background: 'var(--color-dark)', borderColor: 'rgba(212,175,119,0.15)' }
            return live ? (
              <a key={p.name} href={p.href!} target="_blank" rel="noopener noreferrer" className={`${cls} card-lift`} style={style}>{body}</a>
            ) : (
              <div key={p.name} className={cls} style={{ ...style, opacity: 0.6 }} aria-disabled>{body}</div>
            )
          })}
        </div>
        <p className="text-[11px]" style={{ color: 'var(--color-mist)' }}>
          Hit play on the player, bottom right — it&apos;s the full track.
        </p>
      </div>
    </section>
  )
}
