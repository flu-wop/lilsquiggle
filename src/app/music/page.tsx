import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Music, ArrowRight, ExternalLink } from "lucide-react"
import { Button }    from "@/components/ui/button"
import { Badge }     from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { TrackPlayer } from "@/components/TrackPlayer"

export const metadata: Metadata = {
  title:       "Music",
  description: "Don't Drink & Dial Decades — sung by Pat Smith, featuring Cash Hollywood, produced by Donny Markowitz & Gary Uffner.",
}

const PLATFORMS = [
  { name: "Spotify",       href: "#", note: "Stream free" },
  { name: "Apple Music",   href: "#", note: "Stream & download" },
  { name: "YouTube Music", href: "#", note: "Watch the video" },
  { name: "SoundCloud",    href: "#", note: "Free stream" },
]

export default function MusicPage() {
  return (
    <div className="pt-16 min-h-screen bg-studio-black">

      <section className="py-20 px-6 border-b border-studio-border/40 bg-studio-charcoal">
        <div className="mx-auto max-w-5xl">
          <div className="rasta-divider w-14 mb-8" />
          <Badge variant="outline" className="mb-4 text-[10px] tracking-widest uppercase">The Music</Badge>
          <h1 className="font-display text-5xl md:text-6xl text-cream mb-4 leading-tight">
            The sound behind
            <br />
            <span className="text-rasta-gradient italic">every bad call</span>
          </h1>
          <p className="text-mist text-sm max-w-lg leading-relaxed">
            The original reggae-dub track that powers the #DontDrinkAndDialDecades campaign.
            Sung by Pat Smith, featuring Cash Hollywood. Produced at Mid City Sound Studios, New Orleans.
          </p>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="mx-auto max-w-5xl grid md:grid-cols-[1fr_320px] gap-14 items-start">

          {/* Track player card */}
          <div className="space-y-6">
            <div className="border border-studio-border bg-studio-card rounded-sm p-7 space-y-6 card-lift">

              {/* Album art + info */}
              <div className="flex items-start gap-5">
                <div className="w-24 h-24 rounded-sm border border-studio-border bg-studio-dark flex items-center justify-center shrink-0 relative overflow-hidden">
                  <Image
                    src="/images/tipsy-smile.jpg"
                    alt="Lil Squiggle"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="text-[10px] tracking-[0.2em] uppercase text-rasta-green/70 mb-1.5">Original Track</p>
                  <p className="font-display text-2xl text-cream leading-tight">Don&apos;t Drink &amp; Dial Decades</p>
                  <p className="text-mist text-sm mt-1">Lil Squiggle</p>
                  <div className="flex gap-1.5 mt-2">
                    <span className="text-[9px] px-2 py-0.5 border border-studio-border text-mist/50 rounded-sm">Reggae-Dub</span>
                    <span className="text-[9px] px-2 py-0.5 border border-studio-border text-mist/50 rounded-sm">Mid City Sound</span>
                  </div>
                </div>
              </div>

              {/* Player — real audio playback, see components/TrackPlayer.tsx */}
              <TrackPlayer />

              <Separator />

              <div className="grid grid-cols-2 gap-3 text-xs">
                <div>
                  <p className="text-mist/50 uppercase tracking-widest text-[9px] mb-0.5">Sung by</p>
                  <p className="text-cream">Pat Smith</p>
                </div>
                <div>
                  <p className="text-mist/50 uppercase tracking-widest text-[9px] mb-0.5">Featuring</p>
                  <p className="text-cream">Cash Hollywood</p>
                </div>
                <div>
                  <p className="text-mist/50 uppercase tracking-widest text-[9px] mb-0.5">Produced by</p>
                  <p className="text-cream">Donny Markowitz &amp; Gary Uffner</p>
                </div>
                <div>
                  <p className="text-mist/50 uppercase tracking-widest text-[9px] mb-0.5">Studio</p>
                  <p className="text-cream">Mid City Sound, New Orleans</p>
                </div>
                <div>
                  <p className="text-mist/50 uppercase tracking-widest text-[9px] mb-0.5">Genre</p>
                  <p className="text-cream">Reggae-Dub</p>
                </div>
              </div>
            </div>
          </div>

          {/* Streaming platforms */}
          <div className="space-y-4">
            <p className="text-[10px] tracking-[0.18em] uppercase text-gold/70 mb-5">Stream &amp; Download</p>
            {PLATFORMS.map(({ name, href, note }) => (
              <a key={name} href={href} target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-between p-4 border border-studio-border bg-studio-card rounded-sm hover:border-rasta-green/40 group transition-all card-lift">
                <div>
                  <p className="text-cream text-sm font-medium group-hover:text-rasta-green transition-colors">{name}</p>
                  <p className="text-mist/50 text-[11px]">{note}</p>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-mist/30 group-hover:text-rasta-green transition-colors" />
              </a>
            ))}
            <p className="text-mist/40 text-[10px] mt-3">← Replace # with real streaming links when available</p>

            {/* Don't Drink and Dial hero image */}
            <div className="mt-6 rounded-sm overflow-hidden border border-studio-border card-lift">
              <Image
                src="/images/dont-drink-and-dial-hero.png"
                alt="Don't Drink and Dial — When the call follows you through time"
                width={600}
                height={338}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
