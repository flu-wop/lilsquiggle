// src/components/layout/Navbar.tsx
// ─────────────────────────────────────────────────────────────────────────────
// Lil Squiggle navbar — premium quality, same structure as MCS.
// Uses the same sticky/blur/border treatment.
// Logo: "LIL SQUIGGLE" in display type with Rasta-gold accent.
// The Rasta stripe replaces the gold underline indicator from MCS.
// ─────────────────────────────────────────────────────────────────────────────

"use client";

import Link            from "next/link";
import { usePathname } from "next/navigation";
import { useState }    from "react";
import { Menu, X, ShoppingBag } from "lucide-react";

const NAV_LINKS = [
  { label: "Home",   href: "/" },
  { label: "Story",  href: "/story" },
  { label: "Music",  href: "/music" },
  { label: "Merch",  href: "/merch" },
] as const;

export function Navbar() {
  const pathname        = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-studio-border/60 bg-studio-black/95 backdrop-blur-md">
      <div className="mx-auto max-w-6xl px-6 flex items-center justify-between h-16">

        {/* ── Logo ──────────────────────────────────────────────────────── */}
        <Link
          href="/"
          onClick={() => setOpen(false)}
          className="flex flex-col leading-none group shrink-0"
        >
          {/* Three-stripe Rasta bar under logo — brand fingerprint */}
          <div className="flex gap-[2px] mb-1.5">
            <div className="h-[2px] w-6 bg-rasta-red rounded-full" />
            <div className="h-[2px] w-6 bg-rasta-gold rounded-full" />
            <div className="h-[2px] w-6 bg-rasta-green rounded-full" />
          </div>
          <span className="font-display text-[16px] tracking-[0.12em] uppercase text-cream/90 group-hover:text-gold transition-colors">
            Lil Squiggle
          </span>
          <span className="text-[8px] tracking-[0.22em] uppercase text-mist/50 mt-0.5 font-sans">
            Mid City Sound Presents
          </span>
        </Link>

        {/* ── Desktop Nav ───────────────────────────────────────────────── */}
        <nav className="hidden md:flex items-center gap-7">
          {NAV_LINKS.map(({ label, href }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={[
                  "relative text-[12px] font-sans font-medium tracking-[0.08em] uppercase transition-colors",
                  "after:absolute after:bottom-[-4px] after:left-0 after:h-[2px]",
                  "after:transition-all after:duration-300 after:rounded-full",
                  isActive
                    ? "text-rasta-gold after:w-full after:bg-rasta-gold"
                    : "text-mist hover:text-cream after:w-0 after:bg-rasta-gold hover:after:w-full",
                ].join(" ")}
              >
                {label}
              </Link>
            );
          })}

          {/* Shop CTA — mirrors MCS "Book Now" treatment */}
          <Link
            href="/merch"
            className="ml-2 flex items-center gap-1.5 px-4 py-1.5 text-[11px] font-medium tracking-widest uppercase border border-gold text-gold hover:bg-gold hover:text-studio-black transition-all duration-200 rounded-sm"
          >
            <ShoppingBag className="w-3 h-3" />
            Shop the Drop
          </Link>
        </nav>

        {/* ── Mobile Hamburger ──────────────────────────────────────────── */}
        <button
          className="md:hidden p-2 text-mist hover:text-cream transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* ── Mobile Drawer ────────────────────────────────────────────────── */}
      {open && (
        <div className="md:hidden border-t border-studio-border bg-studio-black">
          {/* Rasta header strip */}
          <div className="h-[3px] rasta-bar" />

          <div className="px-6 py-5 border-b border-studio-border/40">
            <p className="font-display text-xl text-cream">Lil Squiggle</p>
            <p className="text-[10px] tracking-[0.22em] uppercase text-mist/50 mt-1 font-sans">
              Mid City Sound Presents
            </p>
          </div>
          <nav className="flex flex-col px-6 pb-5 pt-2 gap-1">
            {NAV_LINKS.map(({ label, href }) => {
              const isActive = pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setOpen(false)}
                  className={[
                    "py-3 text-sm font-medium border-b border-studio-border/40 transition-colors",
                    isActive ? "text-rasta-gold" : "text-mist hover:text-cream",
                  ].join(" ")}
                >
                  {label}
                </Link>
              );
            })}
            <Link
              href="/merch"
              onClick={() => setOpen(false)}
              className="mt-3 flex items-center justify-center gap-2 py-2.5 border border-gold text-gold text-sm font-medium tracking-widest uppercase hover:bg-gold hover:text-studio-black transition-all rounded-sm"
            >
              <ShoppingBag className="w-4 h-4" />
              Shop the Drop
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
