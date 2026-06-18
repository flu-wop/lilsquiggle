import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ShoppingBag } from "lucide-react"
import { Button }    from "@/components/ui/button"
import { Badge }     from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

export const metadata: Metadata = {
  title:       "The Story",
  description: "Meet Lil Squiggle — the reggae-dub chibi character who makes the worst possible call in every decade. Sung by Pat Smith, feat. Cash Hollywood.",
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
    img:     "/images/era-70s.png",
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
    img:     "/images/alternate-squiggle.png",
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
    img:     "/images/era-modern.png",
  },
]

export default function StoryPage() {
  return (
    <div className="pt-16 min-h-screen bg-studio-black">

      <section className="py-20 px-6 border-b border-studio-border/40 bg-studio-charcoal">
        <div className="mx-auto max-w-5xl">
          <div className="rasta-divider w-14 mb-8" />
          <Badge variant="outline" className="mb-4 text-[10px] tracking-widest uppercase">
            The Story
          </Badge>
          <h1 className="font-display text-5xl md:text-6xl text-cream mb-5 leading-tight">
            One character who can&apos;t{" "}
            <span className="text-gold-gradient italic">stop dialing</span>
          </h1>
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
          <div className="border-l-2 border-rasta-gold pl-5 py-2 mt-6 max-w-md">
            <p className="font-display text-xl text-cream/80 italic">
              &ldquo;One call. Every era. Same regret.&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* Production credits */}
      <section className="py-12 px-6 border-b border-studio-border/40">
        <div className="mx-auto max-w-5xl">
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { label: "Sung by",   name: "Pat Smith",                    sub: "Vocalist" },
              { label: "Feat.",     name: "Cash Hollywood",               sub: "Featured Artist" },
              { label: "Produced by", name: "Donny Markowitz & Gary Uffner", sub: "Mid City Sound Studios" },
            ].map(({ label, name, sub }) => (
              <div key={label} className="p-5 border border-studio-border bg-studio-card rounded-sm card-lift">
                <p className="text-[10px] tracking-[0.18em] uppercase text-mist/50 mb-1.5">{label}</p>
                <p className="text-cream font-medium text-sm">{name}</p>
                <p className="text-mist/50 text-[11px] mt-0.5">{sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Three-eras hero image */}
      <section className="py-20 px-6 bg-studio-charcoal border-b border-studio-border/40">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-10">
            <h2 className="font-display text-4xl text-cream">
              One Guy.{" "}
              <span className="text-gold-gradient italic">Three Eras.</span>
              {" "}Same Regret.
            </h2>
          </div>
          <div className="border border-studio-border rounded-sm overflow-hidden card-lift">
            <div className="px-5 py-3 border-b border-studio-border bg-studio-dark flex items-center justify-between">
              <p className="text-[10px] tracking-[0.18em] uppercase text-mist/50">Campaign Art</p>
              <div className="flex gap-1.5">
                <div className="w-2 h-2 rounded-full bg-rasta-red/50" />
                <div className="w-2 h-2 rounded-full bg-rasta-gold/50" />
                <div className="w-2 h-2 rounded-full bg-rasta-green/50" />
              </div>
            </div>
            <Image
              src="/images/three-eras.png"
              width={1200}
              height={500}
              alt="One Guy. Three Eras. Same Regret."
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Era deep-dives */}
      <section className="py-20 px-6">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-14">
            <Badge variant="outline" className="mb-4 text-[10px] tracking-widest uppercase">
              The Timeline
            </Badge>
            <h2 className="font-display text-4xl text-cream">
              Every era, the same <span className="italic text-gold-gradient">call</span>
            </h2>
          </div>

          <div className="relative">
            <div className="absolute left-7 top-0 bottom-0 w-px bg-studio-border hidden md:block" />
            <div className="space-y-0">
              {ERAS.map(({ id, era, device, setting, desc, color, badge, icon, img }) => (
                <div key={id} className="relative flex gap-0 md:gap-8 pb-14 last:pb-0 flex-col md:flex-row">
                  <div className="relative z-10 flex-shrink-0 hidden md:block">
                    <div className={`w-14 h-14 rounded-full border bg-studio-dark flex items-center justify-center text-xl ${color}`}>
                      {icon}
                    </div>
                  </div>
                  <div className={`flex-1 border bg-studio-card rounded-sm overflow-hidden transition-all card-lift ${color}`}>
                    <div className="px-6 py-3 border-b border-studio-border/40 bg-studio-dark flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="text-sm mr-1 md:hidden">{icon}</span>
                        <div className={`inline-block px-2 py-0.5 rounded text-[10px] font-sans font-medium ${badge}`}>
                          {era}
                        </div>
                        <span className="text-[10px] tracking-widest uppercase text-mist/50">{device}</span>
                      </div>
                      <span className="text-[10px] text-mist/30 italic">{setting}</span>
                    </div>
                    <div className="grid md:grid-cols-[180px_1fr] gap-0">
                      <div className="relative aspect-square md:aspect-auto overflow-hidden">
                        <Image src={img} alt={`Lil Squiggle ${era}`} fill className="object-cover" />
                      </div>
                      <div className="p-6 flex items-center">
                        <p className="text-mist text-sm leading-relaxed">{desc}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA footer */}
      <section className="py-16 px-6 border-t border-studio-border/40 bg-studio-charcoal">
        <div className="mx-auto max-w-xl text-center space-y-5">
          <h2 className="font-display text-3xl text-cream">Wear the <span className="italic text-gold-gradient">regret</span></h2>
          <p className="text-mist text-sm">Official Lil Squiggle merch — shipped from Mid City Sound.</p>
          <p className="text-mist/50 text-xs">No account needed · Ships in 3–5 days</p>
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
