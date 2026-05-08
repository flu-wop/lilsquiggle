// src/app/page.tsx
// ─────────────────────────────────────────────────────────────────────────────
// LIL SQUIGGLE HOMEPAGE — Complete redesign.
//
// What was wrong before:
//   - No padding/margin control — text ran edge-to-edge
//   - No visual containment — images just floated
//   - No hierarchy — every section looked the same weight
//   - No breathing room — sections stacked with no separation
//   - Nav had no logo treatment or premium feel
//
// What this fixes:
//   - max-w-6xl content container with generous px-6 padding on everything
//   - Each section is a properly bordered, spaced visual unit
//   - MCS card system applied to every block
//   - Rasta palette used precisely (like MCS uses gold) — as accent, not wallpaper
//   - The three-eras image is contained in a bordered, rounded card
//   - Clear typographic hierarchy: display titles → body → captions
//
// Sections:
//   1. Hero          — cinematic, contained, MCS-quality
//   2. Tagline strip — one-liner with Rasta stripe
//   3. Video         — contained player card, same as MCS treatment
//   4. Story / Meet  — proper prose layout, constrained line length
//   5. Three Eras    — image in a premium card frame
//   6. Campaign info — production credits, styled like MCS legacy
//   7. Shop CTA      — clean merch callout
// ─────────────────────────────────────────────────────────────────────────────

import type { Metadata } from "next"
import Link              from "next/link"
import { ArrowRight, ShoppingBag, ChevronDown, Music, Play } from "lucide-react"
import { Button }    from "@/components/ui/button"
import { Badge }     from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

export const metadata: Metadata = {
  title: "Don't Drink & Dial Decades",
  description: "One call. Every era. Same regret. The Lil Squiggle campaign from Mid City Sound Studios.",
}

export default function HomePage() {
  return (
    <>
      {/* ════════════════════════════════════════════════════════════════ */}
      {/* 1. HERO                                                          */}
      {/* ════════════════════════════════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden grain-overlay">

        {/* ── Background — same atmospheric treatment as MCS ── */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#060606] via-[#0a0a08] to-[#0f0d08]" />

        {/* Rasta green atmospheric glow — bottom left */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_60%_at_15%_85%,rgba(29,158,117,0.07),transparent)]" />
        {/* Rasta gold glow — top right */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_80%_20%,rgba(239,159,39,0.06),transparent)]" />
        {/* Warm center */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_40%_at_50%_50%,rgba(212,175,119,0.04),transparent)]" />

        {/* ── Hero content — max-width contained, centered ── */}
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">

          {/* Presenter line */}
          <div
            className="flex items-center justify-center gap-3 mb-8 opacity-0 animate-fade-up delay-100"
            style={{ animationFillMode: "forwards" }}
          >
            <div className="rasta-divider w-8" />
            <span className="text-[11px] tracking-[0.28em] uppercase text-mist/70 font-sans">
              Mid City Sound Presents
            </span>
            <div className="rasta-divider w-8" />
          </div>

          {/* Campaign title — MCS-scale display type */}
          <h1
            className="font-display mb-3 opacity-0 animate-fade-up delay-200"
            style={{ animationFillMode: "forwards" }}
          >
            <span className="block text-[clamp(48px,9vw,110px)] text-cream leading-[0.9]">
              Don&apos;t Drink
            </span>
            <span className="block text-[clamp(48px,9vw,110px)] leading-[0.9]">
              <span className="text-gold-gradient">&amp; Dial</span>
            </span>
            <span className="block text-[clamp(22px,4vw,46px)] text-rasta-gold/80 italic font-light mt-3 tracking-wide">
              Decades
            </span>
          </h1>

          {/* Tagline — same constrained width treatment as MCS */}
          <p
            className="text-mist text-base md:text-lg max-w-md mx-auto leading-relaxed mt-6 mb-10 font-light opacity-0 animate-fade-up delay-300"
            style={{ animationFillMode: "forwards" }}
          >
            One call. Every era. Same regret.
          </p>

          {/* CTAs — same button sizing as MCS */}
          <div
            className="flex flex-col sm:flex-row gap-3 justify-center opacity-0 animate-fade-up delay-400"
            style={{ animationFillMode: "forwards" }}
          >
            <Button size="lg" asChild>
              <Link href="/merch">
                <ShoppingBag className="w-4 h-4" />
                Shop the Drop
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/story">
                The Story
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>

          {/* Ecosystem line — same as MCS eyebrow treatment */}
          <p
            className="text-mist/40 text-[11px] tracking-[0.18em] uppercase mt-12 opacity-0 animate-fade-up delay-500"
            style={{ animationFillMode: "forwards" }}
          >
            Lil Squiggle · Mid City Sound · Streetbeats — One Unified Store
          </p>
        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-mist/30 animate-bounce">
          <span className="text-[9px] tracking-widest uppercase">Scroll</span>
          <ChevronDown className="w-4 h-4" />
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════ */}
      {/* 2. RASTA TAGLINE STRIP                                           */}
      {/* ════════════════════════════════════════════════════════════════ */}
      <div className="border-y border-studio-border/50 bg-studio-charcoal py-4">
        <div className="mx-auto max-w-6xl px-6 flex items-center justify-center gap-8 flex-wrap">
          {[
            { color: "bg-rasta-red",   text: "1970s · Rotary" },
            { color: "bg-rasta-gold",  text: "1990s · Flip Phone" },
            { color: "bg-rasta-green", text: "Modern · Smartphone" },
          ].map(({ color, text }) => (
            <div key={text} className="flex items-center gap-2.5">
              <div className={`w-2 h-2 rounded-full ${color}`} />
              <span className="text-[11px] tracking-[0.18em] uppercase text-mist/60 font-sans">{text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ════════════════════════════════════════════════════════════════ */}
      {/* 3. VIDEO — contained card, same MCS treatment as trailer         */}
      {/* ════════════════════════════════════════════════════════════════ */}
      <section className="py-20 px-6 bg-studio-charcoal">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-10">
            <Badge variant="outline" className="mb-4 text-[10px] tracking-widest uppercase">
              Official Video
            </Badge>
            <h2 className="font-display text-4xl md:text-5xl text-cream">
              Watch the campaign
            </h2>
          </div>

          {/*
            ── Video placeholder card ──
            Drop your video file at /public/video/dont-drink-and-dial.mp4
            or embed a YouTube/Vimeo ID here.
            Same card treatment as the MCS trailer embed.
          */}
          <div
            className="relative aspect-video rounded-sm overflow-hidden border border-studio-border/60 bg-studio-dark shadow-2xl"
            style={{ boxShadow: "0 0 80px rgba(0,0,0,0.8), 0 0 30px rgba(29,158,117,0.04)" }}
          >
            {/*
              Replace this placeholder with:
                <video src="/video/dont-drink-and-dial.mp4" controls poster="/images/video-thumb.jpg"
                  className="absolute inset-0 w-full h-full object-cover" />
              Or YouTube embed:
                <iframe src="https://www.youtube.com/embed/YOUR_ID?rel=0" ... />
            */}
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-5">
              {/* Rasta gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#0a1a10] via-[#0d0c08] to-[#1a0d06] opacity-80" />
              <div className="relative z-10 flex flex-col items-center gap-4">
                <div className="w-16 h-16 rounded-full border border-gold/30 bg-studio-black/60 flex items-center justify-center">
                  <Play className="w-7 h-7 text-gold/60 ml-1" />
                </div>
                <div className="text-center">
                  <p className="font-display text-xl text-cream/70 italic">Don&apos;t Drink &amp; Dial Decades</p>
                  <p className="text-mist/40 text-xs mt-1">Drop your video file at /public/video/ or embed YouTube/Vimeo</p>
                </div>
                {/* Rasta color dots */}
                <div className="flex gap-2">
                  <div className="w-2 h-2 rounded-full bg-rasta-red animate-pulse" />
                  <div className="w-2 h-2 rounded-full bg-rasta-gold animate-pulse delay-200" />
                  <div className="w-2 h-2 rounded-full bg-rasta-green animate-pulse delay-400" />
                </div>
              </div>
            </div>
          </div>

          <p className="text-center text-mist/50 text-xs mt-4 tracking-wide">
            Original track by Pat Smith · Produced by Donny Markowitz &amp; Gary Uffner
          </p>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════ */}
      {/* 4. MEET LIL SQUIGGLE — proper prose layout                       */}
      {/* ════════════════════════════════════════════════════════════════ */}
      <section id="story" className="py-20 px-6 border-t border-studio-border/40">
        <div className="mx-auto max-w-5xl">
          <div className="grid md:grid-cols-[1fr_380px] gap-16 items-center">

            {/* Text — constrained, breathable, MCS-style */}
            <div className="space-y-6">
              <div>
                <Badge variant="outline" className="mb-4 text-[10px] tracking-widest uppercase">
                  The Story
                </Badge>
                <h2 className="font-display text-4xl md:text-5xl text-cream leading-tight">
                  Meet{" "}
                  <span className="text-gold-gradient italic">Lil Squiggle</span>
                </h2>
              </div>

              <Separator className="w-12 bg-rasta-green/40" />

              {/* Prose — max line length controlled by the column width, not raw text */}
              <div className="space-y-4 text-mist text-sm leading-relaxed">
                <p>
                  He&apos;s small, he&apos;s chibi, he&apos;s got Rasta colors and zero impulse control.
                  Lil Squiggle is the reggae-dub character who somehow finds himself making
                  the worst possible phone call — in every decade, on every device.
                </p>
                <p>
                  1970s rotary? He&apos;s spinning it. 1990s flip phone? Snap.
                  Modern smartphone with face ID, read receipts, and zero plausible
                  deniability? Also him.
                </p>
              </div>

              {/* Pull quote — same treatment as MCS blockquote */}
              <div className="border-l-2 border-rasta-gold pl-5 py-1">
                <p className="font-display text-lg text-cream/80 italic">
                  &ldquo;One call. Every era. Same regret.&rdquo;
                </p>
              </div>

              {/* Credits — MCS production style */}
              <div className="pt-2 space-y-1.5">
                <p className="text-[10px] tracking-[0.2em] uppercase text-rasta-green/80 font-sans mb-3">
                  A Mid City Sound Production
                </p>
                <p className="text-mist text-xs">
                  Original track by <span className="text-cream">Pat Smith</span>
                </p>
                <p className="text-mist text-xs">
                  Produced by <span className="text-cream">Donny Markowitz</span> &amp;{" "}
                  <span className="text-cream">Gary Uffner</span>
                </p>
              </div>

              <Button variant="outline" asChild>
                <Link href="/story">
                  Full Story &amp; Timeline
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>

            {/* Character visual — properly contained card */}
            <div className="relative">
              {/*
                Replace this placeholder with the character image:
                  <Image src="/images/meet-squiggle.png" width={380} height={400}
                    className="w-full rounded-sm" alt="Lil Squiggle" />
              */}
              <div className="aspect-[4/5] border border-studio-border bg-studio-card rounded-sm flex flex-col items-center justify-center gap-4 relative overflow-hidden">
                {/* Subtle rasta gradient background */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_80%,rgba(29,158,117,0.06),transparent)]" />
                {/* Corner accents — MCS style */}
                <div className="absolute top-4 left-4 w-8 h-8 border-t border-l border-rasta-green/40" />
                <div className="absolute bottom-4 right-4 w-8 h-8 border-b border-r border-rasta-green/40" />

                <div className="relative z-10 text-center space-y-3 px-6">
                  <div className="flex justify-center gap-1.5 mb-2">
                    <div className="w-4 h-4 rounded-full bg-rasta-red/60" />
                    <div className="w-4 h-4 rounded-full bg-rasta-gold/60" />
                    <div className="w-4 h-4 rounded-full bg-rasta-green/60" />
                  </div>
                  <p className="font-display text-2xl text-cream/60 italic">Lil Squiggle</p>
                  <p className="text-mist/40 text-xs">
                    Place character image here:
                    <br />
                    <code className="text-rasta-green/50 text-[10px]">/public/images/meet-squiggle.png</code>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════ */}
      {/* 5. THREE ERAS — image in a premium contained frame               */}
      {/* ════════════════════════════════════════════════════════════════ */}
      <section className="py-20 px-6 bg-studio-charcoal border-y border-studio-border/40">
        <div className="mx-auto max-w-5xl">

          {/* Section header */}
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4 text-[10px] tracking-widest uppercase">
              The Campaign
            </Badge>
            <h2 className="font-display text-4xl md:text-5xl text-cream">
              One Guy.{" "}
              <span className="text-gold-gradient italic">Three Eras.</span>
              <br />Same Regret.
            </h2>
          </div>

          {/*
            Three eras image card — BEFORE this was just a raw image floating on the page.
            NOW it has proper containment, padding, border, and shadow.
          */}
          <div
            className="border border-studio-border rounded-sm overflow-hidden shadow-2xl"
            style={{ boxShadow: "0 0 60px rgba(0,0,0,0.7), 0 0 20px rgba(29,158,117,0.04)" }}
          >
            {/* Header bar */}
            <div className="px-6 py-3 border-b border-studio-border bg-studio-dark flex items-center justify-between">
              <p className="text-[10px] tracking-[0.2em] uppercase text-mist/50">The Three Eras</p>
              <div className="flex gap-1.5">
                <div className="w-2 h-2 rounded-full bg-rasta-red/60" />
                <div className="w-2 h-2 rounded-full bg-rasta-gold/60" />
                <div className="w-2 h-2 rounded-full bg-rasta-green/60" />
              </div>
            </div>

            {/*
              Replace placeholder with:
                <Image src="/images/three-eras.png" width={900} height={400}
                  className="w-full" alt="One Guy. Three Eras. Same Regret." />
            */}
            <div className="aspect-[21/8] bg-studio-dark flex items-center justify-center text-mist/30 text-sm relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_50%,rgba(29,158,117,0.05),transparent)]" />
              <div className="relative z-10 text-center space-y-2">
                <div className="flex justify-center gap-8 mb-4">
                  {["1970s", "1990s", "Modern"].map((era, i) => (
                    <div
                      key={era}
                      className={`px-4 py-2 rounded text-sm font-sans font-medium ${
                        i === 0 ? "era-badge-70s" : i === 1 ? "era-badge-90s" : "era-badge-modern"
                      }`}
                    >
                      {era}
                    </div>
                  ))}
                </div>
                <p className="text-[11px]">Place three-eras image here:</p>
                <code className="text-rasta-green/50 text-[10px]">/public/images/three-eras.png</code>
              </div>
            </div>
          </div>

          {/* Era descriptions — properly spaced, contained */}
          <div className="grid sm:grid-cols-3 gap-4 mt-8">
            {[
              {
                era:    "'70s",
                device: "Rotary Phone",
                desc:   "Squiggle spins the dial. Avocado-green kitchen. Same mistake, analog edition.",
                color:  "border-rasta-red/30 hover:border-rasta-red/50",
                badge:  "era-badge-70s",
              },
              {
                era:    "'90s",
                device: "Flip Phone",
                desc:   "The satisfying snap of a flip. The unsatisfying aftermath of a 2am call.",
                color:  "border-studio-border hover:border-[#7B2FBE]/50",
                badge:  "era-badge-90s",
              },
              {
                era:    "Now",
                device: "Smartphone",
                desc:   "Face ID. Read receipts. Zero excuses. Maximum regret.",
                color:  "border-rasta-green/30 hover:border-rasta-green/50",
                badge:  "era-badge-modern",
              },
            ].map(({ era, device, desc, color, badge }) => (
              <div
                key={era}
                className={`p-5 border bg-studio-card rounded-sm transition-all card-lift ${color}`}
              >
                <div className={`inline-block px-2 py-0.5 rounded text-[10px] font-sans font-medium mb-3 ${badge}`}>
                  {era}
                </div>
                <p className="text-[10px] tracking-widest uppercase text-mist/50 mb-1.5">{device}</p>
                <p className="text-cream text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════ */}
      {/* 6. MUSIC — track section                                         */}
      {/* ════════════════════════════════════════════════════════════════ */}
      <section className="py-20 px-6">
        <div className="mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-10 items-center">

            {/* Track card */}
            <div className="border border-studio-border bg-studio-card rounded-sm p-7 space-y-5">
              <div className="flex items-start gap-4">
                {/* Album art placeholder */}
                <div className="w-16 h-16 rounded-sm border border-studio-border bg-studio-dark flex items-center justify-center shrink-0">
                  <Music className="w-6 h-6 text-rasta-green/50" />
                </div>
                <div>
                  <Badge variant="outline" className="mb-2 text-[9px]">Original Track</Badge>
                  <p className="font-display text-xl text-cream leading-tight">
                    Don&apos;t Drink &amp; Dial Decades
                  </p>
                  <p className="text-mist text-xs mt-0.5">Lil Squiggle · Reggae-Dub</p>
                </div>
              </div>

              {/* Fake waveform — decorative */}
              <div className="flex items-center gap-[2px] h-8">
                {Array.from({ length: 60 }).map((_, i) => {
                  const h = Math.abs(Math.sin(i * 0.4)) * 18 + 4
                  return (
                    <div
                      key={i}
                      className="rounded-[1px] flex-shrink-0 bg-studio-border"
                      style={{ width: "2.5px", height: `${h}px` }}
                    />
                  )
                })}
              </div>

              <div className="flex items-center justify-between pt-1">
                <div className="space-y-0.5">
                  <p className="text-mist text-xs">Written by <span className="text-cream">Pat Smith</span></p>
                  <p className="text-mist text-xs">Produced by <span className="text-cream">Donny Markowitz</span> &amp; <span className="text-cream">Gary Uffner</span></p>
                </div>
                <Button size="sm" variant="outline" asChild>
                  <Link href="/music">Listen</Link>
                </Button>
              </div>
            </div>

            {/* Text */}
            <div className="space-y-5">
              <Badge variant="outline" className="text-[10px] tracking-widest uppercase">
                The Music
              </Badge>
              <h2 className="font-display text-4xl text-cream leading-tight">
                The sound
                <br />
                <span className="text-rasta-gradient italic">behind the call</span>
              </h2>
              <Separator className="w-10 bg-rasta-green/40" />
              <p className="text-mist text-sm leading-relaxed">
                The original reggae-dub track written by Pat Smith and produced at Mid City Sound
                Studios in New Orleans — a sound that carries the weight of every bad decision
                Lil Squiggle has ever made across every decade.
              </p>
              <Button asChild>
                <Link href="/music">
                  Hear the Track
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════ */}
      {/* 7. SHOP / MERCH CTA — clean, premium, MCS-style                  */}
      {/* ════════════════════════════════════════════════════════════════ */}
      <section className="py-20 px-6 border-t border-studio-border/40 bg-studio-charcoal">
        <div className="mx-auto max-w-5xl">
          <div className="border border-studio-border/60 rounded-sm overflow-hidden grid md:grid-cols-[1fr_auto] items-center"
            style={{ boxShadow: "0 0 40px rgba(0,0,0,0.5)" }}
          >
            <div className="p-10 space-y-5">
              <Badge variant="outline" className="text-[10px] tracking-widest uppercase">
                Shop the Drop
              </Badge>
              <h2 className="font-display text-4xl text-cream leading-tight">
                Wear the
                <br />
                <span className="text-gold-gradient italic">regret</span>
              </h2>
              <p className="text-mist text-sm leading-relaxed max-w-sm">
                Official Lil Squiggle merch — tees, hats, stickers, and more.
                Fulfilled via Printful. Ships worldwide.
              </p>
              <div className="flex gap-3">
                <Button asChild>
                  <Link href="/merch">
                    <ShoppingBag className="w-4 h-4" />
                    Shop All Products
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link
                    href="https://store.lilsquiggle.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Full Store
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Product visual placeholder */}
            <div className="hidden md:flex border-l border-studio-border bg-studio-dark p-10 items-center justify-center min-w-[220px]">
              <div className="text-center space-y-3">
                <div className="w-20 h-20 mx-auto border border-studio-border rounded-sm bg-studio-card flex items-center justify-center">
                  <ShoppingBag className="w-8 h-8 text-rasta-green/40" />
                </div>
                <p className="text-mist/40 text-[10px] tracking-widest uppercase">Coming Soon</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
