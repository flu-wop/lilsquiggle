'use client'

import Image from 'next/image'
import { useReveal } from '@/lib/useReveal'

export default function Story() {
  const { ref, revealed } = useReveal()
  return (
    <section
      id="story"
      ref={ref}
      className={`py-24 md:py-36 px-6 transition-all duration-700 ${revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      style={{ background: 'var(--color-black)' }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-14">
          <div className="gold-divider" />
          <span className="text-[10px] uppercase tracking-[0.4em]" style={{ color: 'var(--color-gold)' }}>The Story</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="flex flex-col gap-6">
            <h2 className="font-display leading-tight" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: 'var(--color-cream)', fontWeight: 500 }}>
              One character who can&apos;t <span className="italic text-gold-gradient">stop dialing</span>
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
              <p className="text-[10px] uppercase tracking-[0.25em] pt-3" style={{ color: 'var(--color-mist)' }}>A Mid City Sound Production</p>
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

          <div className="relative card-lift rounded-sm overflow-hidden" style={{ border: '1px solid rgba(212,175,119,0.15)' }}>
            <Image src="/images/dont-drink-and-dial-hero.png"
              alt="Don't Drink and Dial — When the call follows you through time"
              width={800} height={450} className="w-full h-auto" />
          </div>
        </div>
      </div>
    </section>
  )
}
