// src/components/layout/Footer.tsx
// ─────────────────────────────────────────────────────────────────────────────
// Lil Squiggle footer — same structure as MCS footer, Rasta-accented.
// Strong cross-link to Mid City Sound. Credits Donny, Gary, Pat.
// ─────────────────────────────────────────────────────────────────────────────

import Link  from "next/link";
import Image from "next/image";
import { Instagram, Twitter, Youtube, ExternalLink, Mail } from "lucide-react";

const SITE_LINKS = [
  { label: "Home",   href: "/" },
  { label: "Story",  href: "/story" },
  { label: "Music",  href: "/music" },
  { label: "Merch",  href: "/merch" },
];

// Real handles from the brand bible
const SOCIALS = [
  { icon: Instagram, href: "https://instagram.com/lil.squiggle",     label: "@lil.squiggle" },
  { icon: Twitter,   href: "https://twitter.com/lilsquigglemon",      label: "@lilsquigglemon" },
  { icon: Youtube,   href: "https://youtube.com/@lilsquigglemon",     label: "YouTube" },
  { icon: Mail,      href: "mailto:lilsquigglemon@gmail.com",         label: "Email" },
];

export function Footer() {
  return (
    <footer className="border-t border-studio-border bg-studio-charcoal">

      {/* Rasta stripe top accent */}
      <div className="rasta-bar h-[2px]" />

      <div className="mx-auto max-w-6xl px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">

        {/* ── Brand column ── */}
        <div className="space-y-5 md:col-span-1">
          {/* Wordmark */}
          <div>
            <div className="flex gap-[3px] mb-2">
              <div className="h-[2px] w-5 bg-rasta-red rounded-full" />
              <div className="h-[2px] w-5 bg-rasta-gold rounded-full" />
              <div className="h-[2px] w-5 bg-rasta-green rounded-full" />
            </div>
            <p className="font-display text-2xl text-cream tracking-wide">Lil Squiggle</p>
            <p className="text-[10px] tracking-[0.2em] uppercase text-mist/50 mt-1">
              #DontDrinkAndDialDecades
            </p>
          </div>

          <p className="text-mist text-sm leading-relaxed max-w-xs">
            One call. Every era. Same regret.
            The reggae-dub chibi Lego campaign from Mid City Sound Studios.
          </p>

          {/* Credits */}
          <div className="space-y-1.5 text-xs text-mist/70 pt-1">
            <p>Original track by <span className="text-cream">Pat Smith</span></p>
            <p>Produced by <span className="text-cream">Donny Markowitz</span> &amp; <span className="text-cream">Gary Uffner</span></p>
            <p className="text-[10px] tracking-[0.15em] uppercase text-mist/40 mt-2">
              A Mid City Sound Production
            </p>
          </div>

          {/* Socials */}
          <div className="flex gap-3 pt-1">
            {SOCIALS.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                aria-label={label}
                className="w-9 h-9 border border-studio-border rounded-sm flex items-center justify-center text-mist hover:text-rasta-green hover:border-rasta-green transition-colors"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        {/* ── Site links ── */}
        <div className="space-y-4">
          <p className="text-[11px] font-medium tracking-[0.15em] uppercase text-gold/80">Navigate</p>
          <ul className="space-y-2.5">
            {SITE_LINKS.map(({ label, href }) => (
              <li key={label}>
                <Link href={href} className="text-sm text-mist hover:text-cream transition-colors">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="pt-4 space-y-2.5">
            <p className="text-[11px] font-medium tracking-[0.15em] uppercase text-gold/80">Store</p>
            <a
              href={`https://store.lilsquiggle.com`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-mist hover:text-cream transition-colors flex items-center gap-1.5"
            >
              Shop All Products
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

        {/* ── MCS ecosystem crosslink ── (same as MCS footer pattern) */}
        <div className="space-y-4">
          <p className="text-[11px] font-medium tracking-[0.15em] uppercase text-gold/80">The Studio</p>

          <Link
            href="https://midcitysound.com"
            target="_blank"
            rel="noopener noreferrer"
            className="block p-4 border border-studio-border/60 rounded-sm hover:border-gold/40 transition-all group"
          >
            <div className="relative w-[160px] h-[52px] mb-3 opacity-70 group-hover:opacity-100 transition-opacity">
              <Image
                src="/images/mcs-logo.jpg"
                alt="Mid City Sound Studios"
                fill
                className="object-contain object-left"
                sizes="160px"
              />
            </div>
            <p className="text-mist text-xs leading-relaxed group-hover:text-cream transition-colors">
              The New Orleans studio behind Lil Squiggle. Book studio sessions with Donny Markowitz.
            </p>
            <div className="flex items-center gap-1.5 mt-3 text-gold/50 text-[10px] group-hover:text-gold transition-colors">
              <span>midcitysound.com</span>
              <ExternalLink className="w-3 h-3" />
            </div>
          </Link>

          <Link
            href="https://donaldmarkowitz.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-3 border border-studio-border/40 rounded-sm hover:border-gold/30 group transition-all"
          >
            <div>
              <p className="text-cream text-xs font-medium group-hover:text-gold transition-colors">Donald Markowitz</p>
              <p className="text-mist/50 text-[10px]">Composer · Producer · Founder</p>
            </div>
            <ExternalLink className="w-3.5 h-3.5 text-mist/30 group-hover:text-gold transition-colors" />
          </Link>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="border-t border-studio-border/50">
        <div className="mx-auto max-w-6xl px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-mist/50 text-xs">
            © {new Date().getFullYear()} Lil Squiggle · Mid City Sound Studios · New Orleans, LA
          </p>
          <p className="text-mist/30 text-xs italic font-display">
            "One call. Every era. Same regret."
          </p>
        </div>
      </div>
    </footer>
  );
}
