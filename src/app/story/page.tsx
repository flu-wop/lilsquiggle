// src/app/story/page.tsx
// Premium story/timeline layout — fixes the broken prose of the original.
// Max content width, generous whitespace, proper type hierarchy throughout.

import type { Metadata } from "next"
import Link              from "next/link"
import { ArrowRight, ShoppingBag } from "lucide-react"
import { Button }    from "@/components/ui/button"
import { Badge }     from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

export const metadata: Metadata = {
  title:       "The Story",
  description: "Meet Lil Squiggle — the reggae-dub chibi character who makes the worst possible call in every decade.",
}

const ERAS = [
  {
    id:      "70s",
    era:     "'70s",
    device:  "Rotary Phone",
    setting: "Avocado-green kitchen",
    desc:    "Squiggle spins the dial. He shouldn't — he knows he shouldn't — but the record's playing, the disco ball is spinning, and his thumb finds the rotary anyway. Same mistake, analog edition.",
    color:   "border-rasta-red/30",
    accent:  "text-rasta-red",
    badge:   "era-badge-70s",
    icon:    "📞",
  },
  {
    id:      "90s",
    era:     "'90s",
    device:  "Flip Phone",
    setting: "Neon-lit club bathroom",
    desc:    "The satisfying snap of a flip. The unsatisfying aftermath of a 2am call. He found the number. He dialed it. The flip phone closes with finality — but the call already went through.",
    color:   "border-[#7B2FBE]/30",
    accent:  "text-[#B060FF]",
    badge:   "era-badge-90s",
    icon:    "📱",
  },
  {
    id:      "modern",
    era:     "Modern",
    device:  "Smartphone",
    setting: "His own couch",
    desc:    "Face ID. Read receipts. Zero excuses. Maximum regret. The modern era gave us every tool to avoid this mistake — Lil Squiggle uses every tool to make it anyway.",
    color:   "border-rasta-green/30",
    accent:  "text-rasta-green",
    badge:   "era-badge-modern",
    icon:    "📲",
  },
]

export default function StoryPage() {
  return (
    <div className="pt-16 min-h-screen bg-studio-black">

      {/* ── Page header — same pattern as every MCS inner page ── */}
      <section className="py-20 px-6 border-b border-studio-border/40 bg-studio-charcoal">
        <div className="mx-auto max-w-5xl">

          {/* Rasta bar — Lil Squiggle's version of the MCS gold divider */}
          <div className="rasta-divider w-14 mb-8" />

          <Badge variant="outline" className="mb-4 text-[10px] tracking-widest uppercase">
            The Story
          </Badge>
          <h1 className="font-display text-5xl md:text-6xl text-cream mb-5 leading-tight">
            Meet{" "}
            <span className="text-gold-gradient italic">Lil Squiggle</span>
          </h1>

          {/* Constrained intro prose — THIS was the main problem before */}
          <div className="max-w-2xl space-y-4 text-mist text-sm leading-relaxed">
            <p>
              He&apos;s small, he&apos;s chibi, he&apos;s got Rasta colors and zero impulse control.
              Lil Squiggle is the reggae-dub character who somehow finds himself making the
              worst possible phone call — in every decade, on every device.
            </p>
            <p>
              1970s rotary? He&apos;s spinning it. 1990s flip phone? Snap.
              Modern smartphone with face ID, read receipts, and zero plausible deniability? Also him.
            </p>
          </div>

          {/* Pull quote — properly styled, not just floating italic text */}
          <div className="border-l-2 border-rasta-gold pl-5 py-2 mt-6 max-w-md">
            <p className="font-display text-xl text-cream/80 italic">
              &ldquo;One call. Every era. Same regret.&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* ── Production credits — MCS-quality presentation ── */}
      <section className="py-12 px-6 border-b border-studio-border/40">
        <div className="mx-auto max-w-5xl">
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { label: "Original Track by", name: "Pat Smith",                       sub: "Writer" },
              { label: "Produced by",       name: "Donny Markowitz & Gary Uffner",   sub: "Mid City Sound Studios" },
              { label: "Campaign",          name: "#DontDrinkAndDialDecades",         sub: "Lil Squiggle Universe" },
            ].map(({ label, name, sub }) => (
              <div key={label} className="p-5 border border-studio-border bg-studio-card rounded-sm">
                <p className="text-[10px] tracking-[0.18em] uppercase text-mist/50 mb-1.5">{label}</p>
                <p className="text-cream font-medium text-sm">{name}</p>
                <p className="text-mist/50 text-[11px] mt-0.5">{sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Three-eras image — contained in proper frame ── */}
      <section className="py-20 px-6 bg-studio-charcoal border-b border-studio-border/40">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-10">
            <h2 className="font-display text-4xl text-cream">
              One Guy.{" "}
              <span className="text-gold-gradient italic">Three Eras.</span>
              {" "}Same Regret.
            </h2>
          </div>

          {/* Contained image card */}
          <div className="border border-studio-border rounded-sm overflow-hidden">
            <div className="px-5 py-3 border-b border-studio-border bg-studio-dark flex items-center justify-between">
              <p className="text-[10px] tracking-[0.18em] uppercase text-mist/50">Campaign Art</p>
              <div className="flex gap-1.5">
                <div className="w-2 h-2 rounded-full bg-rasta-red/50" />
                <div className="w-2 h-2 rounded-full bg-rasta-gold/50" />
                <div className="w-2 h-2 rounded-full bg-rasta-green/50" />
              </div>
            </div>
            {/*
              Drop your three-eras.png here:
                <Image src="/images/three-eras.png" width={900} height={380}
                  className="w-full" alt="One Guy. Three Eras. Same Regret." />
            */}
            <div className="aspect-[21/8] bg-studio-dark flex items-center justify-center text-mist/30 text-sm">
              <div className="text-center space-y-2">
                <p>three-eras.png</p>
                <code className="text-rasta-green/40 text-[10px]">/public/images/three-eras.png</code>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Era deep-dives — timeline format, MCS legacy page style ── */}
      <section className="py-20 px-6">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-14">
            <Badge variant="outline" className="mb-4 text-[10px] tracking-widest uppercase">
              The Timeline
            </Badge>
            <h2 className="font-display text-4xl text-cream">
              Every era, the same call
            </h2>
          </div>

          {/* Timeline — mirrors MCS /legacy page structure */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-7 top-0 bottom-0 w-px bg-studio-border hidden md:block" />

            <div className="space-y-0">
              {ERAS.map(({ id, era, device, setting, desc, color, accent, badge, icon }) => (
                <div key={id} className="relative flex gap-0 md:gap-8 pb-14 last:pb-0 flex-col md:flex-row">

                  {/* Era node — mirrors MCS timeline icon nodes */}
                  <div className="relative z-10 flex-shrink-0 hidden md:block">
                    <div className={`w-14 h-14 rounded-full border bg-studio-dark flex items-center justify-center text-xl ${color}`}>
                      {icon}
                    </div>
                  </div>

                  {/* Content card */}
                  <div className={`flex-1 border bg-studio-card rounded-sm overflow-hidden transition-all card-lift ${color}`}>
                    <div className="px-6 py-3 border-b border-studio-border/40 bg-studio-dark flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className={`text-sm mr-1 md:hidden`}>{icon}</span>
                        <div className={`inline-block px-2 py-0.5 rounded text-[10px] font-sans font-medium ${badge}`}>
                          {era}
                        </div>
                        <span className="text-[10px] tracking-widest uppercase text-mist/50">{device}</span>
                      </div>
                      <span className="text-[10px] text-mist/30 italic">{setting}</span>
                    </div>
                    <div className="p-6">
                      <p className="text-mist text-sm leading-relaxed">{desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA footer for this page ── */}
      <section className="py-16 px-6 border-t border-studio-border/40 bg-studio-charcoal">
        <div className="mx-auto max-w-xl text-center space-y-5">
          <h2 className="font-display text-3xl text-cream">Ready to shop?</h2>
          <p className="text-mist text-sm">Official Lil Squiggle merch — wear the regret.</p>
          <div className="flex gap-3 justify-center">
            <Button asChild>
              <Link href="/merch">
                <ShoppingBag className="w-4 h-4" />
                Shop the Drop
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/music">
                Hear the Track
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
