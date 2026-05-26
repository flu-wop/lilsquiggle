'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navLinks = [
    { label: 'The Story', href: '#story' },
    { label: 'Shop the Drop', href: '#shop' },
    { label: 'Community', href: '#community' },
  ]

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled
          ? 'rgba(9,9,9,0.92)'
          : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(212,175,119,0.12)' : '1px solid transparent',
      }}
    >
      <nav className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <Link href="/" className="flex flex-col leading-none group">
          <span
            className="font-display text-lg md:text-xl font-semibold tracking-widest uppercase transition-all duration-300"
            style={{ color: 'var(--gold)', letterSpacing: '0.2em' }}
          >
            Lil Squiggle
          </span>
          <span
            className="text-[9px] uppercase tracking-[0.3em] transition-colors duration-300"
            style={{ color: 'var(--mist)' }}
          >
            Mid City Sound Presents
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm uppercase tracking-widest transition-colors duration-200"
              style={{ color: 'var(--mist)', letterSpacing: '0.15em' }}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.color = 'var(--gold)')}
              onMouseLeave={(e) => ((e.target as HTMLElement).style.color = 'var(--mist)')}
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://midcitysound.com/merch"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold text-[#090909] font-semibold text-xs uppercase tracking-widest px-5 py-2.5 rounded-sm"
          >
            Shop the Drop ↗
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className="block w-6 h-px transition-all duration-300"
            style={{
              background: 'var(--gold)',
              transform: menuOpen ? 'rotate(45deg) translate(3px, 3px)' : 'none',
            }}
          />
          <span
            className="block w-6 h-px transition-all duration-300"
            style={{
              background: 'var(--gold)',
              opacity: menuOpen ? 0 : 1,
            }}
          />
          <span
            className="block w-6 h-px transition-all duration-300"
            style={{
              background: 'var(--gold)',
              transform: menuOpen ? 'rotate(-45deg) translate(3px, -3px)' : 'none',
            }}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className="md:hidden overflow-hidden transition-all duration-400"
        style={{
          maxHeight: menuOpen ? '300px' : '0',
          background: 'rgba(9,9,9,0.97)',
          backdropFilter: 'blur(20px)',
          borderBottom: menuOpen ? '1px solid rgba(212,175,119,0.12)' : 'none',
        }}
      >
        <div className="px-6 py-6 flex flex-col gap-5">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="font-display text-2xl font-light italic"
              style={{ color: 'var(--cream)' }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://midcitysound.com/merch"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            className="btn-gold inline-block text-center text-[#090909] font-semibold text-xs uppercase tracking-widest px-5 py-3 rounded-sm mt-2"
          >
            Shop the Drop ↗
          </a>
        </div>
      </div>
    </header>
  )
}
