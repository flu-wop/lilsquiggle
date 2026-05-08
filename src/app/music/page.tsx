// src/app/music/page.tsx
import type { Metadata } from "next"
import Link              from "next/link"
import { Music, ArrowRight, ExternalLink, Play } from "lucide-react"
import { Button }    from "@/components/ui/button"
import { Badge }     from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

export const metadata: Metadata = {
  title:       "Music",
  description: "Don't Drink & Dial Decades — the original reggae-dub track by Pat Smith, produced by Donny Markowitz & Gary Uffner.",
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
            Written by Pat Smith. Produced at Mid City Sound Studios, New Orleans.
          </p>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="mx-auto max-w-5xl grid md:grid-cols-[1fr_320px] gap-14 items-start">

          {/* Track player card */}
          <div className="space-y-6">
            <div className="border border-studio-border bg-studio-card rounded-sm p-7 space-y-6">

              {/* Album art + info */}
              <div className="flex items-start gap-5">
                <div className="w-24 h-24 rounded-sm border border-studio-border bg-studio-dark flex items-center justify-center shrink-0 relative overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_80%,rgba(29,158,117,0.15),transparent)]" />
                  <Music className="w-8 h-8 text-rasta-green/40 relative z-10" />
                  {/* Replace with: <Image src="/images/album-art.jpg" fill className="object-cover" alt="" /> */}
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

              {/* Waveform */}
              <div className="flex items-center gap-[2px] h-10">
                {Array.from({ length: 80 }).map((_, i) => {
                  const h = Math.abs(Math.sin(i * 0.35)) * 22 + 4
                  const isGreen = i < 35
                  return (
                    <div key={i} className={`rounded-[1px] flex-shrink-0 ${isGreen ? "bg-rasta-green/60" : "bg-studio-border"}`}
                      style={{ width: "2.5px", height: `${h}px` }} />
                  )
                })}
              </div>

              {/* Play button + time */}
              <div className="flex items-center gap-4">
                <button className="w-12 h-12 rounded-full bg-rasta-green flex items-center justify-center hover:bg-rasta-green/80 transition-colors">
                  <Play className="w-5 h-5 text-cream ml-0.5" />
                </button>
                <div>
                  <p className="text-cream text-sm font-medium">Don&apos;t Drink &amp; Dial Decades</p>
                  <p className="text-mist text-xs">
                    {/* Replace with real audio: <audio src="/audio/dont-drink-and-dial.wav" /> */}
                    Add audio: /public/audio/dont-drink-and-dial.wav
                  </p>
                </div>
              </div>

              <Separator />

              <div className="grid grid-cols-2 gap-3 text-xs">
                <div>
                  <p className="text-mist/50 uppercase tracking-widest text-[9px] mb-0.5">Written by</p>
                  <p className="text-cream">Pat Smith</p>
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
                className="flex items-center justify-between p-4 border border-studio-border bg-studio-card rounded-sm hover:border-rasta-green/40 group transition-all">
                <div>
                  <p className="text-cream text-sm font-medium group-hover:text-rasta-green transition-colors">{name}</p>
                  <p className="text-mist/50 text-[11px]">{note}</p>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-mist/30 group-hover:text-rasta-green transition-colors" />
              </a>
            ))}
            <p className="text-mist/40 text-[10px] mt-3">← Replace # with real streaming links</p>
          </div>
        </div>
      </section>
    </div>
  )
}
