'use client'

import { useReveal } from '@/lib/useReveal'
import { HASHTAG, SOCIALS, CAPCUT_TEMPLATES } from '@/data/site'

export default function Community() {
  const { ref, revealed } = useReveal()
  return (
    <section
      id="community"
      ref={ref}
      className={`py-24 md:py-36 px-6 transition-all duration-700 ${revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      style={{ background: 'var(--color-charcoal)' }}
    >
      <div className="max-w-4xl mx-auto text-center flex flex-col items-center gap-8">
        <div className="flex items-center gap-4">
          <div className="gold-divider" />
          <span className="text-[10px] uppercase tracking-[0.4em]" style={{ color: 'var(--color-gold)' }}>Make Your Own</span>
          <div className="gold-divider" />
        </div>

        <h2 className="font-display" style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', color: 'var(--color-cream)', fontWeight: 500 }}>
          Own your <span className="italic text-gold-gradient">era</span>
        </h2>

        <p className="text-base max-w-lg leading-relaxed" style={{ color: 'var(--color-mist)' }}>
          Share your worst decade-appropriate drunk dial story. Tag us.
          Use the hashtag. Lil Squiggle will feel slightly less alone.
        </p>

        <div className="px-10 py-8 rounded-sm" style={{ background: 'var(--color-dark)', border: '1px solid rgba(212,175,119,0.2)' }}>
          <p className="font-display text-2xl md:text-3xl italic font-light" style={{ color: 'var(--color-gold)' }}>{HASHTAG}</p>
          <p className="text-xs mt-2 uppercase tracking-widest" style={{ color: 'var(--color-mist)' }}>Tag your era. Own your regret.</p>
        </div>

        {/* CapCut templates: links are placeholders until the share URLs are added in data/site.ts */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full">
          {CAPCUT_TEMPLATES.map(t => {
            const live = !!t.href
            const body = (
              <>
                <p className="text-[10px] uppercase tracking-[0.25em] mb-1" style={{ color: 'var(--rasta-green)' }}>{t.slot} template</p>
                <p className="font-display text-lg italic" style={{ color: 'var(--color-cream)' }}>{t.blurb}</p>
                <p className="text-[11px] mt-2" style={{ color: 'var(--color-mist)' }}>{live ? 'Open in CapCut ↗' : 'Template link coming soon'}</p>
              </>
            )
            const style = { background: 'var(--color-dark)', borderColor: 'rgba(212,175,119,0.15)' }
            return live ? (
              <a key={t.slot} href={t.href!} target="_blank" rel="noopener noreferrer" className="p-5 border rounded-sm card-lift text-left" style={style}>{body}</a>
            ) : (
              <div key={t.slot} className="p-5 border rounded-sm text-left" style={{ ...style, opacity: 0.65 }} aria-disabled>{body}</div>
            )
          })}
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          {SOCIALS.map(s => (
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
  )
}
