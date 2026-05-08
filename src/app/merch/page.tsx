// src/app/merch/page.tsx
import type { Metadata } from "next"
import Link              from "next/link"
import { ShoppingBag, ArrowRight, ExternalLink } from "lucide-react"
import { Button }  from "@/components/ui/button"
import { Badge }   from "@/components/ui/badge"

export const metadata: Metadata = {
  title:       "Merch — Shop the Drop",
  description: "Official Lil Squiggle merch. Tees, hats, stickers and more from the #DontDrinkAndDialDecades campaign.",
}

const PRODUCTS = [
  { title: "Lil Squiggle OG Tee",        price: "$35", tag: "Best Seller", slug: "og-tee",      desc: "The signature chibi graphic. 100% combed cotton." },
  { title: "Don't Dial Dad Hat",          price: "$28", tag: "New",         slug: "dad-hat",     desc: "Embroidered logo. One-size adjustable." },
  { title: "Mid City Crewneck",           price: "$65", tag: null,          slug: "crewneck",    desc: "Studio-weight fleece. MCS wordmark on chest." },
  { title: "Lil Squiggle Sticker Pack",   price: "$12", tag: null,          slug: "stickers",    desc: "6 die-cut vinyl stickers. Vibes certified." },
]

export default function MerchPage() {
  return (
    <div className="pt-16 min-h-screen bg-studio-black">

      {/* Header */}
      <section className="py-20 px-6 border-b border-studio-border/40 bg-studio-charcoal relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_60%_at_70%_50%,rgba(29,158,117,0.06),transparent)]" />
        <div className="relative mx-auto max-w-5xl">
          <div className="rasta-divider w-14 mb-8" />
          <Badge variant="outline" className="mb-4 text-[10px] tracking-widest uppercase">Official Merch</Badge>
          <h1 className="font-display text-5xl md:text-6xl text-cream mb-4 leading-tight">
            Shop the
            <br /><span className="text-gold-gradient italic">Drop</span>
          </h1>
          <p className="text-mist text-sm max-w-md leading-relaxed">
            Official Lil Squiggle gear from the #DontDrinkAndDialDecades campaign.
            All orders fulfilled via Printful — printed on demand, shipped worldwide.
          </p>
          <div className="flex gap-3 mt-8">
            <Button asChild>
              <a href="https://store.lilsquiggle.com" target="_blank" rel="noopener noreferrer">
                <ShoppingBag className="w-4 h-4" />
                Full Store
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Products grid */}
      <section className="py-20 px-6">
        <div className="mx-auto max-w-5xl">
          <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
            <h2 className="font-display text-4xl text-cream">Featured items</h2>
            <a href="https://store.lilsquiggle.com" target="_blank" rel="noopener noreferrer"
              className="text-mist text-sm hover:text-gold transition-colors flex items-center gap-1.5">
              View all <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {PRODUCTS.map(({ title, price, tag, slug, desc }) => (
              <a key={slug} href={`https://store.lilsquiggle.com/products/${slug}`} target="_blank" rel="noopener noreferrer"
                className="group block border border-studio-border bg-studio-card rounded-sm hover:border-rasta-green/40 transition-all card-lift overflow-hidden">
                {/* Product image placeholder */}
                <div className="aspect-square bg-studio-dark flex flex-col items-center justify-center text-mist/20 gap-2 relative overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_80%,rgba(29,158,117,0.05),transparent)]" />
                  <ShoppingBag className="w-10 h-10 relative z-10" />
                  {tag && <Badge className="absolute top-2 right-2 text-[9px]">{tag}</Badge>}
                </div>
                <div className="p-4">
                  <p className="font-sans font-medium text-cream text-sm mb-1">{title}</p>
                  <p className="text-mist text-xs mb-3 leading-relaxed">{desc}</p>
                  <div className="flex items-center justify-between">
                    <span className="font-display text-lg text-gold">{price}</span>
                    <div className="flex items-center gap-1 text-xs text-mist group-hover:text-rasta-green transition-colors">
                      <span>Shop</span><ExternalLink className="w-3 h-3" />
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Campaign callout */}
      <section className="py-16 px-6 border-t border-studio-border/40 bg-studio-charcoal">
        <div className="mx-auto max-w-5xl grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-4">
            <Badge variant="outline" className="text-[10px] tracking-widest uppercase">The Campaign</Badge>
            <h2 className="font-display text-3xl text-cream">#DontDrinkAndDialDecades</h2>
            <p className="text-mist text-sm leading-relaxed">
              Follow Lil Squiggle across every platform as he makes the same terrible call
              in every decade known to humanity.
            </p>
            <div className="space-y-1.5 text-[11px] font-mono">
              {["@lilsquigglemon (TikTok)","@lilsquigglemon (YouTube)","@lilsquigglemon (X)","@lil.squiggle (Instagram)"].map(h => (
                <p key={h} className="text-rasta-green/70">{h}</p>
              ))}
            </div>
          </div>
          <div className="space-y-3">
            <p className="text-[10px] tracking-widest uppercase text-mist/50">Quick links</p>
            {[
              { label: "Campaign Landing Page",  href: "/" },
              { label: "Full Merch Store",       href: "https://store.lilsquiggle.com", ext: true },
              { label: "Mid City Sound Studios", href: "https://midcitysound.com",      ext: true },
            ].map(({ label, href, ext }) => (
              <Link key={label} href={href} target={ext ? "_blank" : undefined} rel={ext ? "noopener noreferrer" : undefined}
                className="flex items-center justify-between p-3 border border-studio-border hover:border-rasta-green/40 rounded-sm group transition-all">
                <span className="text-sm text-mist group-hover:text-cream transition-colors">{label}</span>
                {ext ? <ExternalLink className="w-3.5 h-3.5 text-mist/30 group-hover:text-rasta-green" /> : <ArrowRight className="w-3.5 h-3.5 text-mist/30 group-hover:text-rasta-green" />}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
