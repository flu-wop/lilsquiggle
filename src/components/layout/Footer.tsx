'use client'

import Link from 'next/link'

const socialLinks = [
  {
    label: 'TikTok',
    handle: '@lilsquigglemon',
    href: 'https://tiktok.com/@lilsquigglemon',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.72a4.85 4.85 0 01-1.01-.03z"/>
      </svg>
    ),
  },
  {
    label: 'Instagram',
    handle: '@lil.squiggle',
    href: 'https://instagram.com/lil.squiggle',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
      </svg>
    ),
  },
  {
    label: 'YouTube',
    handle: '@lilsquigglemon',
    href: 'https://youtube.com/@lilsquigglemon',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
      </svg>
    ),
  },
  {
    label: 'X / Twitter',
    handle: '@lilsquigglemon',
    href: 'https://x.com/lilsquigglemon',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ),
  },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer
      className="relative"
      style={{ background: 'var(--color-charcoal)', borderTop: '1px solid rgba(212,175,119,0.15)' }}
    >
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, var(--color-gold), transparent)' }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">

          {/* Brand column */}
          <div className="flex flex-col gap-5">
            <div>
              <p className="text-[10px] uppercase tracking-[0.3em] mb-2" style={{ color: 'var(--color-mist)' }}>
                Mid City Sound Presents
              </p>
              <h3 className="font-display text-3xl font-semibold" style={{ color: 'var(--color-gold)' }}>
                Lil Squiggle
              </h3>
            </div>
            <p className="font-display text-base italic font-light leading-relaxed" style={{ color: 'var(--color-mist)' }}>
              &ldquo;One call. Every era. Same regret.&rdquo;
            </p>
            <div className="gold-divider" />
            <a
              href="mailto:lilsquigglemon@gmail.com"
              className="text-sm transition-colors duration-200"
              style={{ color: 'var(--color-mist)' }}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.color = 'var(--color-gold)')}
              onMouseLeave={(e) => ((e.target as HTMLElement).style.color = 'var(--color-mist)')}
            >
              lilsquigglemon@gmail.com
            </a>
          </div>

          {/* Links column */}
          <div className="flex flex-col gap-5">
            <h4 className="text-[10px] uppercase tracking-[0.25em] font-medium" style={{ color: 'var(--color-gold)' }}>
              Navigate
            </h4>
            <nav className="flex flex-col gap-3">
              {[
                { label: 'The Story', href: '#story' },
                { label: 'Shop the Drop', href: '#shop' },
                { label: 'Community', href: '#community' },
                { label: 'midcitysound.com/merch ↗', href: 'https://midcitysound.com/merch' },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm transition-colors duration-200 w-fit"
                  style={{ color: 'var(--color-mist)' }}
                  onMouseEnter={(e) => ((e.target as HTMLElement).style.color = 'var(--color-cream)')}
                  onMouseLeave={(e) => ((e.target as HTMLElement).style.color = 'var(--color-mist)')}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Social column */}
          <div className="flex flex-col gap-5">
            <h4 className="text-[10px] uppercase tracking-[0.25em] font-medium" style={{ color: 'var(--color-gold)' }}>
              Follow the Era
            </h4>
            <div className="flex flex-col gap-3">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 group transition-colors duration-200"
                  style={{ color: 'var(--color-mist)' }}
                >
                  <span className="transition-colors duration-200 group-hover:text-[var(--color-gold)]">
                    {s.icon}
                  </span>
                  <span className="text-sm group-hover:text-[var(--color-cream)] transition-colors duration-200">
                    {s.handle}
                  </span>
                  <span
                    className="text-[10px] uppercase tracking-widest ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                    style={{ color: 'var(--color-gold)' }}
                  >
                    {s.label}
                  </span>
                </a>
              ))}
            </div>
            <div
              className="mt-2 px-3 py-2 rounded-sm"
              style={{ border: '1px solid rgba(212,175,119,0.2)', background: 'rgba(212,175,119,0.04)' }}
            >
              <p className="font-display text-sm italic" style={{ color: 'var(--color-gold)' }}>
                #DontDrinkAndDialDecades
              </p>
            </div>
          </div>
        </div>

        {/* Mid City Sound band */}
        <div
          className="mt-14 mb-6 p-5 rounded-sm flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{
            background: 'linear-gradient(135deg, rgba(212,175,119,0.08) 0%, rgba(212,175,119,0.03) 100%)',
            border: '1px solid rgba(212,175,119,0.2)',
          }}
        >
          <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center shrink-0"
              style={{ background: 'rgba(212,175,119,0.12)', border: '1px solid rgba(212,175,119,0.3)' }}
            >
              <span className="text-xs" style={{ color: 'var(--color-gold)' }}>♪</span>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.3em]" style={{ color: 'var(--color-mist)' }}>
                A Mid City Sound Studios Campaign
              </p>
              <p className="font-display text-base italic font-light" style={{ color: 'var(--color-cream)' }}>
                Lil Squiggle · Mid City Sound · Streetbeats
              </p>
            </div>
          </div>
          <a
            href="https://midcitysound.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold shrink-0 text-[#090909] font-semibold text-[10px] uppercase tracking-[0.2em] px-5 py-2.5 rounded-sm whitespace-nowrap"
          >
            midcitysound.com ↗
          </a>
        </div>

        {/* Bottom bar */}
        <div
          className="pt-5 flex flex-col md:flex-row items-center justify-between gap-3"
          style={{ borderTop: '1px solid rgba(212,175,119,0.1)' }}
        >
          <p className="text-xs" style={{ color: 'var(--color-mist)' }}>
            © {year} Mid City Sound Studios. All rights reserved.
          </p>
          <p className="text-xs text-center" style={{ color: 'var(--color-mist)' }}>
            Sung by <span style={{ color: 'var(--color-cream)' }}>Pat Smith</span>
            {' '}· Feat. <span style={{ color: 'var(--color-cream)' }}>Cash Hollywood</span>
            {' '}· Produced by <span style={{ color: 'var(--color-cream)' }}>Donny Markowitz &amp; Gary Uffner</span>
          </p>
          <a
            href="https://midcitysound.com/merch"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs uppercase tracking-[0.2em] transition-colors duration-200"
            style={{ color: 'var(--color-mist)' }}
            onMouseEnter={(e) => ((e.target as HTMLElement).style.color = 'var(--color-gold)')}
            onMouseLeave={(e) => ((e.target as HTMLElement).style.color = 'var(--color-mist)')}
          >
            Shop All Merch ↗
          </a>
        </div>
      </div>
    </footer>
  )
}
