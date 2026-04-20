"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = 0.5;
    audio.play().catch(() => {});
  }, []);

  const toggleMute = () => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.muted = !audio.muted;
    if (!audio.muted && audio.paused) audio.play().catch(() => {});
    setMuted(audio.muted);
  };

  const merch = [
    {
      name: "Rotary Chaos Tee",
      era: "1970s",
      eraColor: "bg-amber-100 text-amber-800",
      badge: "Signature Drop",
      desc: "Squiggle tangled in the rotary cord, sweating at the bar. Front-chest print. The hero piece.",
      retail: "$28",
      href: "https://store.lilsquiggle.com/products/rotary-chaos-tee",
    },
    {
      name: "Flip Fails Hoodie",
      era: "1990s",
      eraColor: "bg-blue-100 text-blue-800",
      badge: null,
      desc: "Squiggle mid-fumble with a flip phone, neon grid behind him. Back print + small chest logo.",
      retail: "$55",
      href: "https://store.lilsquiggle.com/products/flip-fails-hoodie",
    },
    {
      name: "Saved Phone Case",
      era: "Modern",
      eraColor: "bg-emerald-100 text-emerald-800",
      badge: null,
      desc: "The finale scene — Squiggle looking relieved, phone showing Saved. MagSafe compatible.",
      retail: "$25",
      href: "https://store.lilsquiggle.com/products/saved-phone-case",
    },
    {
      name: "Era Sticker Pack",
      era: "All Eras",
      eraColor: "bg-amber-100 text-amber-800",
      badge: null,
      desc: "5-sticker set across all three eras plus the DON'T DIAL warning sign and Rasta logo.",
      retail: "$12",
      href: "https://store.lilsquiggle.com/products/era-sticker-pack",
    },
    {
      name: "Squiggle Keychain",
      era: "Modern",
      eraColor: "bg-emerald-100 text-emerald-800",
      badge: null,
      desc: "Die-cut acrylic Squiggle in Drunk Regret Eyes face. The most memeable expression.",
      retail: "$11",
      href: "https://store.lilsquiggle.com/products/squiggle-keychain",
    },
    {
      name: "One Guy. Three Eras. Poster",
      era: "All Eras",
      eraColor: "bg-amber-100 text-amber-800",
      badge: null,
      desc: "The campaign triptych — 70s, 90s, Modern Squiggle side by side. 18x24 matte.",
      retail: "$22",
      href: "https://store.lilsquiggle.com/products/one-guy-three-eras-poster",
    },
  ];

  const faqs = [
    {
      q: "When does the drop ship?",
      a: "Orders print on demand and ship within 3-7 business days via Printful. No waiting rooms — just vibes to your door.",
    },
    {
      q: "What sizes are available?",
      a: "XS through 3XL. If you are between sizes, go up — Squiggle wears his fits relaxed.",
    },
    {
      q: "Is the phone case MagSafe compatible?",
      a: "Yes — supports MagSafe for iPhone 12 and later. Compatible models listed at checkout.",
    },
    {
      q: "Can I bundle items?",
      a: "Bundle any Tee + Sticker Pack and save $8 at checkout.",
    },
    {
      q: "Do you ship internationally?",
      a: "Yes. Printful ships worldwide. Rates calculated at checkout.",
    },
  ];

  const bgPattern = `url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='120' height='120' fill='none'/%3E%3Crect x='0' y='0' width='60' height='20' rx='2' fill='%23C8A97A' fill-opacity='0.06'/%3E%3Crect x='60' y='0' width='60' height='20' rx='2' fill='%23C8A97A' fill-opacity='0.06'/%3E%3Crect x='30' y='22' width='60' height='20' rx='2' fill='%23C8A97A' fill-opacity='0.06'/%3E%3Crect x='0' y='44' width='60' height='20' rx='2' fill='%23C8A97A' fill-opacity='0.06'/%3E%3Crect x='60' y='44' width='60' height='20' rx='2' fill='%23C8A97A' fill-opacity='0.06'/%3E%3Crect x='30' y='66' width='60' height='20' rx='2' fill='%23C8A97A' fill-opacity='0.06'/%3E%3Crect x='0' y='88' width='60' height='20' rx='2' fill='%23C8A97A' fill-opacity='0.06'/%3E%3Crect x='60' y='88' width='60' height='20' rx='2' fill='%23C8A97A' fill-opacity='0.06'/%3E%3C/svg%3E")`;

  return (
    <main
      className="min-h-screen text-[#2C2C2A] overflow-x-hidden"
      style={{ backgroundColor: "#FAFAF7", backgroundImage: bgPattern, backgroundRepeat: "repeat", backgroundSize: "120px 120px" }}
    >
      {/* AUDIO */}
      <audio ref={audioRef} src="/audio/dont-drink-and-dial.wav" loop muted preload="auto" />

      {/* MUTE TOGGLE */}
      <button
        onClick={toggleMute}
        aria-label={muted ? "Unmute music" : "Mute music"}
        className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-[#2C2C2A] border border-white/20 flex items-center justify-center text-white hover:bg-[#1D9E75] hover:border-[#1D9E75] transition-all shadow-xl"
      >
        {muted ? (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
            <path d="M13.5 4.06c0-1.336-1.616-2.005-2.56-1.06l-4.5 4.5H4.508c-1.141 0-2.318.664-2.66 1.905A9.76 9.76 0 001.5 12c0 .898.121 1.768.35 2.595.341 1.24 1.518 1.905 2.659 1.905h1.93l4.5 4.5c.945.945 2.561.276 2.561-1.06V4.06zM17.78 9.22a.75.75 0 10-1.06 1.06L18.44 12l-1.72 1.72a.75.75 0 001.06 1.06L19.5 13.06l1.72 1.72a.75.75 0 001.06-1.06L20.56 12l1.72-1.72a.75.75 0 00-1.06-1.06L19.5 10.94l-1.72-1.72z" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
            <path d="M13.5 4.06c0-1.336-1.616-2.005-2.56-1.06l-4.5 4.5H4.508c-1.141 0-2.318.664-2.66 1.905A9.76 9.76 0 001.5 12c0 .898.121 1.768.35 2.595.341 1.24 1.518 1.905 2.659 1.905h1.93l4.5 4.5c.945.945 2.561.276 2.561-1.06V4.06zM18.584 5.106a.75.75 0 011.06 0c3.808 3.807 3.808 9.98 0 13.788a.75.75 0 11-1.06-1.06 8.25 8.25 0 000-11.668.75.75 0 010-1.06z" />
          </svg>
        )}
      </button>

      {/* NAV */}
      <nav className="sticky top-0 z-40 bg-[#FAFAF7]/95 backdrop-blur-md border-b border-black/8">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className="text-2xl">📵</span>
            <span className="font-black text-lg tracking-tight">
              Lil <span className="text-[#1D9E75]">Squiggle</span>
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm text-[#5F5E5A]">
            <a href="#story" className="hover:text-[#1D9E75] transition-colors">Story</a>
            <a href="#shop" className="hover:text-[#1D9E75] transition-colors">Shop</a>
            <a href="#community" className="hover:text-[#1D9E75] transition-colors">Community</a>
            <a href="#faq" className="hover:text-[#1D9E75] transition-colors">FAQ</a>
          </div>
          <a href="#shop" className="bg-[#1D9E75] text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-[#0F6E56] transition-colors">
            Shop the Drop
          </a>
        </div>
      </nav>

      {/* SCARCITY BANNER */}
      <div className="bg-[#D85A30] text-white text-center text-xs font-medium py-2.5 px-4 tracking-wide">
        🔥 Limited First Drop — Only 200 Units Per Item. Once They Are Gone, They Are Gone, Mon.
      </div>

      {/* HERO */}
      <section className="relative text-white overflow-hidden min-h-[90vh] flex flex-col justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-bg.jpg"
            alt="Don't Drink and Dial campaign background"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-[#2C2C2A]/80" />
        </div>
        <div className="relative z-10 flex h-1.5 w-full absolute top-0">
          <div className="flex-1 bg-[#1D9E75]" />
          <div className="flex-1 bg-[#EF9F27]" />
          <div className="flex-1 bg-[#D85A30]" />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-6 py-32 md:py-44 text-center w-full">
          <h1 className="text-6xl sm:text-7xl md:text-9xl font-black tracking-tight leading-none mb-6">
            DON&apos;T DRINK
            <br />
            <span className="text-[#EF9F27]">AND DIAL</span>
          </h1>
          <p className="text-white/70 text-xl md:text-2xl mt-8 mb-3 italic font-light">
            One call. Every era. Same regret.
          </p>
          <p className="text-white/45 text-sm md:text-base mb-14 max-w-md mx-auto leading-relaxed">
            Make drunk-dialing uncool again — one funny, nostalgic Reel at a time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#shop" className="bg-[#1D9E75] text-white font-bold px-10 py-4 rounded-full hover:bg-[#0F6E56] transition-colors text-base">
              Shop the Drop
            </a>
            <a href="#story" className="border border-white/30 text-white/80 font-medium px-10 py-4 rounded-full hover:bg-white/10 transition-colors text-base">
              Meet Lil Squiggle
            </a>
          </div>
        </div>
      </section>

      {/* VIDEO */}
      <section className="bg-[#2C2C2A] py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6">
          <div className="relative rounded-3xl overflow-hidden border border-white/10 aspect-video bg-[#1a1a18] shadow-2xl">
            <video
              src="/video/flip-fails-1.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            />
            <div className="absolute top-0 left-0 flex h-1 w-32">
              <div className="flex-1 bg-[#1D9E75]" />
              <div className="flex-1 bg-[#EF9F27]" />
              <div className="flex-1 bg-[#D85A30]" />
            </div>
          </div>
          <p className="text-white/30 text-xs text-center mt-5 tracking-widest uppercase">#DontDrinkAndDialDecades</p>
        </div>
      </section>

      {/* STORY */}
      <section id="story" className="py-24 md:py-32">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <p className="text-xs font-medium tracking-widest uppercase text-[#5F5E5A] mb-6">The Story</p>
          <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight">
            One Guy. Three Eras.{" "}
            <span className="text-[#D85A30]">Same Regret.</span>
          </h2>
          <p className="text-[#5F5E5A] text-lg md:text-xl leading-relaxed">
            Lil Squiggle is your chibi Rasta Lego spirit guide through every decade of drunk-dialing disaster — from rotary chaos to smartphone temptation.{" "}
            <strong className="text-[#1D9E75]">Put the phone down, mon.</strong>
          </p>

          <div className="mt-16 rounded-2xl overflow-hidden border border-black/10 shadow-sm">
            <Image
              src="/images/three-eras.png"
              alt="One Guy. Three Eras. Same Regret."
              width={1200}
              height={600}
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* SHOP */}
      <section id="shop" className="bg-[#2C2C2A] py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-xs font-medium tracking-widest uppercase text-[#1D9E75] mb-4">Merch Drop</p>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">Shop the Drop</h2>
            <p className="text-white/40 text-base">Bundle any Tee + Sticker Pack and save $8 at checkout.</p>
          </div>

          <div className="flex h-px max-w-xs mx-auto mb-16 overflow-hidden rounded-full">
            <div className="flex-1 bg-[#1D9E75]" />
            <div className="flex-1 bg-[#EF9F27]" />
            <div className="flex-1 bg-[#D85A30]" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {merch.map((item) => (
              <div
                key={item.name}
                className="bg-[#1a1a18] border border-white/10 rounded-3xl overflow-hidden flex flex-col hover:border-[#1D9E75]/60 transition-all hover:-translate-y-1 duration-200"
              >
                {/* Product image placeholder */}
                <div className="w-full aspect-square bg-[#222220] flex flex-col items-center justify-center gap-3 border-b border-white/8">
                  <div className="w-20 h-20 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                    <span className="text-3xl">📵</span>
                  </div>
                  <p className="text-white/20 text-xs tracking-wide">Image coming soon</p>
                </div>

                <div className="p-7 flex flex-col gap-4 flex-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className={`text-xs font-semibold px-3 py-1 rounded-full ${item.eraColor}`}>
                      {item.era}
                    </span>
                    {item.badge && (
                      <span className="text-xs font-semibold px-3 py-1 rounded-full bg-amber-100 text-amber-800 border border-amber-300">
                        ★ {item.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="text-white font-black text-xl leading-tight">{item.name}</h3>
                  <p className="text-white/45 text-sm leading-relaxed flex-1">{item.desc}</p>

                  <div className="flex items-center justify-between mt-2">
                    <span className="text-[#1D9E75] font-black text-2xl">{item.retail}</span>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#1D9E75] text-white text-sm font-bold px-6 py-3 rounded-xl hover:bg-[#0F6E56] transition-colors"
                    >
                      Shop Now
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SCARCITY BANNER */}
      <div className="bg-[#EF9F27] text-[#2C2C2A] py-5 px-6 text-center">
        <p className="font-black text-sm md:text-base">
          ⏳ First Drop: April 1 – April 30, 2026 Only. No restocks. No excuses. No more dialing.
        </p>
      </div>

      {/* COMMUNITY */}
      <section id="community" className="py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-xs font-medium tracking-widest uppercase text-[#5F5E5A] mb-4">Community</p>
          <h2 className="text-3xl md:text-4xl font-black mb-4">
            Duet Your Fail.{" "}
            <span className="text-[#1D9E75]">Win the Drop.</span>
          </h2>
          <p className="text-[#5F5E5A] text-base max-w-lg mx-auto mb-12 leading-relaxed">
            Share your worst drunk-dial era, duet with Squiggle, and tag{" "}
            <span className="font-semibold text-[#1D9E75]">#DontDrinkAndDialDecades</span>.
            Best entries get reposted and could win the full merch bundle.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            {["My 70s dial fail", "Flip phone fumble!", "Saved by the screen", "Squiggle is me"].map((caption, i) => (
              <div
                key={i}
                className="aspect-square rounded-2xl bg-gradient-to-br from-[#1D9E75]/8 to-[#EF9F27]/8 border border-black/8 flex flex-col items-center justify-center text-center p-5 gap-3"
              >
                <div className="text-3xl">📵</div>
                <p className="text-xs text-[#5F5E5A] leading-snug font-medium">{caption}</p>
                <span className="text-[10px] text-[#1D9E75] font-semibold">#DontDrinkAndDialDecades</span>
              </div>
            ))}
          </div>

          <a
            href="https://www.tiktok.com/@lilsquigglemon"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border-2 border-[#1D9E75] text-[#1D9E75] font-bold px-10 py-4 rounded-full hover:bg-[#1D9E75] hover:text-white transition-colors text-sm"
          >
            Duet on TikTok
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-[#F1EFE8] py-24 md:py-32">
        <div className="max-w-2xl mx-auto px-6">
          <p className="text-xs font-medium tracking-widest uppercase text-[#5F5E5A] text-center mb-4">FAQ</p>
          <h2 className="text-3xl md:text-4xl font-black text-center mb-14">Got Questions, Mon?</h2>
          <div className="flex flex-col gap-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white border border-black/8 rounded-2xl p-6">
                <h3 className="font-black text-base text-[#2C2C2A] mb-2">{faq.q}</h3>
                <p className="text-[#5F5E5A] text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#2C2C2A] text-white pt-24 pb-12">
        <div className="flex h-1.5 w-full mb-20">
          <div className="flex-1 bg-[#1D9E75]" />
          <div className="flex-1 bg-[#EF9F27]" />
          <div className="flex-1 bg-[#D85A30]" />
        </div>
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="text-6xl mb-6">📵</div>
          <h2 className="text-5xl md:text-7xl font-black leading-tight mb-6">
            Put the Phone
            <br />
            <span className="text-[#EF9F27]">Down, Mon.</span>
          </h2>
          <p className="text-white/45 text-lg mb-10 max-w-sm mx-auto leading-relaxed">
            One call. Every era. Same regret. Do not be Squiggle — unless you are wearing the tee.
          </p>
          <a
            href="#shop"
            className="inline-block bg-[#1D9E75] text-white font-bold px-12 py-5 rounded-full text-base hover:bg-[#0F6E56] transition-colors"
          >
            Shop the Drop Before It Is Gone
          </a>

          <div className="mt-16 flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm">
            <a href="https://www.tiktok.com/@lilsquigglemon" target="_blank" rel="noopener noreferrer" className="text-white/45 hover:text-white transition-colors">TikTok @lilsquigglemon</a>
            <span className="text-white/15">·</span>
            <a href="https://www.instagram.com/lil.squiggle" target="_blank" rel="noopener noreferrer" className="text-white/45 hover:text-white transition-colors">Instagram @lil.squiggle</a>
            <span className="text-white/15">·</span>
            <a href="https://x.com/lil_squigglemon" target="_blank" rel="noopener noreferrer" className="text-white/45 hover:text-white transition-colors">X @lil_squigglemon</a>
            <span className="text-white/15">·</span>
            <a href="https://www.youtube.com/@lilsquigglemon" target="_blank" rel="noopener noreferrer" className="text-white/45 hover:text-white transition-colors">YouTube @lilsquigglemon</a>
            <span className="text-white/15">·</span>
            <a href="mailto:lilsquigglemon@gmail.com" className="text-white/45 hover:text-white transition-colors">lilsquigglemon@gmail.com</a>
          </div>

          <div className="mt-10 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/25">
            <span>2026 Lil Squiggle / Don&apos;t Drink and Dial Decades</span>
            <span>Produced by Donny Markowitz &amp; Gary Uffner &middot; Feat. Pat Smith</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
