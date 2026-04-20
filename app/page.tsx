export default function Home() {
  const merch = [
    {
      name: "Rotary Chaos Tee",
      era: "1970s",
      eraColor: "bg-amber-100 text-amber-800",
      badge: "Signature Drop",
      desc: "Squiggle tangled in the rotary cord, sweating at the bar. Front-chest print. The hero piece — first thing fans want after watching the reel.",
      retail: "$28",
      margin: "~68% margin",
      href: "https://store.lilsquiggle.com/products/rotary-chaos-tee",
    },
    {
      name: "Flip Fails Hoodie",
      era: "1990s",
      eraColor: "bg-blue-100 text-blue-800",
      badge: null,
      desc: "Squiggle mid-fumble with a flip phone, neon grid behind him. Back print + small chest logo. Premium feel, high AOV.",
      retail: "$55",
      margin: "~60% margin",
      href: "https://store.lilsquiggle.com/products/flip-fails-hoodie",
    },
    {
      name: "Saved Phone Case",
      era: "Modern",
      eraColor: "bg-emerald-100 text-emerald-800",
      badge: null,
      desc: "The finale scene — Squiggle looking relieved, phone showing Saved. MagSafe compatible. Perfect ironic merch for the person who needs this reminder.",
      retail: "$25",
      margin: "~64% margin",
      href: "https://store.lilsquiggle.com/products/saved-phone-case",
    },
    {
      name: "Era Sticker Pack",
      era: "All Eras",
      eraColor: "bg-amber-100 text-amber-800",
      badge: null,
      desc: "5-sticker set: Rotary Squiggle, Flip Squiggle, Modern Squiggle, DON'T DIAL warning sign, and Rasta-colored logo. Ultimate impulse buy.",
      retail: "$12",
      margin: "~67% margin",
      href: "https://store.lilsquiggle.com/products/era-sticker-pack",
    },
    {
      name: "Squiggle Keychain",
      era: "Modern",
      eraColor: "bg-emerald-100 text-emerald-800",
      badge: null,
      desc: "Die-cut acrylic Squiggle in Drunk Regret Eyes face — the most memeable expression from the character sheet. Easy gifting item.",
      retail: "$11",
      margin: "~64% margin",
      href: "https://store.lilsquiggle.com/products/squiggle-keychain",
    },
    {
      name: "One Guy. Three Eras. Poster",
      era: "All Eras",
      eraColor: "bg-amber-100 text-amber-800",
      badge: null,
      desc: "The campaign triptych — 70s, 90s, and Modern Squiggle side by side with the tagline at the bottom. 18x24 matte. Wall-worthy.",
      retail: "$22",
      margin: "~68% margin",
      href: "https://store.lilsquiggle.com/products/one-guy-three-eras-poster",
    },
  ];

  const faqs = [
    {
      q: "When does the drop ship?",
      a: "Orders are printed on demand and ship within 3-7 business days via Printful. No pre-orders, no waiting rooms — just straight vibes to your door.",
    },
    {
      q: "What sizes do the tees and hoodies come in?",
      a: "XS through 3XL. Size charts are on each product page. If you are between sizes, go up — Squiggle wears his fits relaxed.",
    },
    {
      q: "Is the phone case MagSafe compatible?",
      a: "Yes — the Saved Phone Case supports MagSafe for iPhone 12 and later. Compatible models listed at checkout.",
    },
    {
      q: "Can I bundle items?",
      a: "Bundle any Tee + Sticker Pack and save $8 at checkout. More combos coming soon.",
    },
    {
      q: "Do you ship internationally?",
      a: "Yes! Printful ships worldwide. International shipping rates are calculated at checkout.",
    },
  ];

  /* Inline SVG background: soft repeating disco/brick pattern at low opacity */
  const bgPattern = `url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='120' height='120' fill='none'/%3E%3Crect x='0' y='0' width='60' height='20' rx='2' fill='%23C8A97A' fill-opacity='0.07'/%3E%3Crect x='60' y='0' width='60' height='20' rx='2' fill='%23C8A97A' fill-opacity='0.07'/%3E%3Crect x='30' y='22' width='60' height='20' rx='2' fill='%23C8A97A' fill-opacity='0.07'/%3E%3Crect x='0' y='44' width='60' height='20' rx='2' fill='%23C8A97A' fill-opacity='0.07'/%3E%3Crect x='60' y='44' width='60' height='20' rx='2' fill='%23C8A97A' fill-opacity='0.07'/%3E%3Crect x='30' y='66' width='60' height='20' rx='2' fill='%23C8A97A' fill-opacity='0.07'/%3E%3Crect x='0' y='88' width='60' height='20' rx='2' fill='%23C8A97A' fill-opacity='0.07'/%3E%3Crect x='60' y='88' width='60' height='20' rx='2' fill='%23C8A97A' fill-opacity='0.07'/%3E%3Ccircle cx='60' cy='60' r='8' fill='none' stroke='%23EF9F27' stroke-opacity='0.06' stroke-width='1'/%3E%3Ccircle cx='60' cy='60' r='14' fill='none' stroke='%23EF9F27' stroke-opacity='0.04' stroke-width='1'/%3E%3Ccircle cx='60' cy='60' r='20' fill='none' stroke='%23EF9F27' stroke-opacity='0.03' stroke-width='1'/%3E%3C/svg%3E")`;

  return (
    <main
      className="min-h-screen text-[#2C2C2A] overflow-x-hidden"
      style={{
        backgroundColor: "#FAFAF7",
        backgroundImage: bgPattern,
        backgroundRepeat: "repeat",
        backgroundSize: "120px 120px",
      }}
    >
      {/* NAV */}
      <nav className="sticky top-0 z-50 bg-[#FAFAF7]/90 backdrop-blur border-b border-black/10">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl">📵</span>
            <span className="font-black text-base tracking-tight">
              Lil <span className="text-[#1D9E75]">Squiggle</span>
            </span>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm text-[#5F5E5A]">
            <a href="#story" className="hover:text-[#1D9E75] transition-colors">Story</a>
            <a href="#shop" className="hover:text-[#1D9E75] transition-colors">Shop</a>
            <a href="#community" className="hover:text-[#1D9E75] transition-colors">Community</a>
            <a href="#faq" className="hover:text-[#1D9E75] transition-colors">FAQ</a>
          </div>
          <a
            href="#shop"
            className="bg-[#1D9E75] text-white text-sm font-medium px-4 py-2 rounded-full hover:bg-[#0F6E56] transition-colors"
          >
            Shop the Drop
          </a>
        </div>
      </nav>

      {/* SCARCITY BANNER TOP */}
      <div className="bg-[#D85A30] text-white text-center text-xs font-medium py-2 px-4 tracking-wide">
        🔥 Limited First Drop — Only 200 Units Per Item. Once They Are Gone, They Are Gone, Mon.
      </div>

      {/* HERO */}
      <section className="relative bg-[#2C2C2A] text-white overflow-hidden">
        <div className="flex h-1.5 w-full">
          <div className="flex-1 bg-[#1D9E75]" />
          <div className="flex-1 bg-[#EF9F27]" />
          <div className="flex-1 bg-[#D85A30]" />
        </div>
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#1D9E75]/10 -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-[#EF9F27]/10 translate-y-1/2 -translate-x-1/4 pointer-events-none" />
        <div className="relative max-w-6xl mx-auto px-4 py-20 md:py-32 text-center">
          <h1 className="text-5xl md:text-8xl font-black tracking-tight leading-none mb-4">
            DON&apos;T DRINK
            <br />
            <span className="text-[#EF9F27]">AND DIAL</span>
          </h1>
          <p className="text-white/60 text-lg md:text-xl mt-6 mb-2 italic">
            One call. Every era. Same regret.
          </p>
          <p className="text-white/40 text-sm mb-10">
            Make drunk-dialing uncool again — one funny, nostalgic Reel at a time.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="#shop"
              className="bg-[#1D9E75] text-white font-semibold px-8 py-4 rounded-full hover:bg-[#0F6E56] transition-colors text-base"
            >
              Shop the Drop
            </a>
            <a
              href="#story"
              className="border border-white/30 text-white/80 font-medium px-8 py-4 rounded-full hover:bg-white/10 transition-colors text-base"
            >
              Meet Lil Squiggle
            </a>
          </div>
        </div>
      </section>

      {/* VIDEO — looping autoplay */}
      <section className="bg-[#2C2C2A] pb-16">
        <div className="max-w-3xl mx-auto px-4">
          <div className="relative rounded-2xl overflow-hidden border border-white/10 aspect-video bg-[#1a1a18]">
            <video
              src="https://assets.lilsquiggle.com/campaign-reel.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            />
            {/* Fallback shown while video loads or if it fails */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="text-center opacity-0">
                <div className="text-6xl mb-4">🎬</div>
                <p className="text-white/60 text-sm font-medium">Campaign Reel</p>
                <p className="text-white/30 text-xs mt-1">#DontDrinkAndDialDecades</p>
              </div>
            </div>
            <div className="absolute top-0 left-0 flex h-1 w-24">
              <div className="flex-1 bg-[#1D9E75]" />
              <div className="flex-1 bg-[#EF9F27]" />
              <div className="flex-1 bg-[#D85A30]" />
            </div>
          </div>
        </div>
      </section>

      {/* STORY */}
      <section id="story" className="max-w-3xl mx-auto px-4 py-20">
        <div className="flex items-center gap-3 mb-6">
          <div className="h-px flex-1 bg-black/10" />
          <span className="text-xs font-medium tracking-widest uppercase text-[#5F5E5A]">The Story</span>
          <div className="h-px flex-1 bg-black/10" />
        </div>
        <h2 className="text-3xl md:text-4xl font-black text-center mb-6">
          One Guy. Three Eras.{" "}
          <span className="text-[#D85A30]">Same Regret.</span>
        </h2>
        <p className="text-[#5F5E5A] text-base md:text-lg leading-relaxed text-center">
          Lil Squiggle is your chibi Rasta Lego spirit guide through every decade of drunk-dialing disaster
          — from rotary chaos to smartphone temptation. A reggae-dub bop full of cringe, heartbreak, and
          hard-earned wisdom:{" "}
          <strong className="text-[#1D9E75]">put the phone down, mon.</strong>
        </p>
        <div className="mt-12 grid grid-cols-3 gap-3">
          {[
            { era: "1970s", label: "Rotary Chaos", icon: "☎️", color: "bg-amber-50 border-amber-200" },
            { era: "1990s", label: "Flip Fails", icon: "📱", color: "bg-blue-50 border-blue-200" },
            { era: "Modern", label: "Smartphone Temptation", icon: "📵", color: "bg-emerald-50 border-emerald-200" },
          ].map((item) => (
            <div key={item.era} className={`${item.color} border rounded-xl p-4 text-center`}>
              <div className="text-3xl mb-2">{item.icon}</div>
              <div className="text-xs font-bold text-[#2C2C2A] uppercase tracking-wide">{item.era}</div>
              <div className="text-xs text-[#5F5E5A] mt-1">{item.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* SHOP */}
      <section id="shop" className="bg-[#2C2C2A] py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px flex-1 bg-white/10" />
            <span className="text-xs font-medium tracking-widest uppercase text-[#1D9E75]">Merch Drop</span>
            <div className="h-px flex-1 bg-white/10" />
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-white text-center mb-2">
            Shop the Drop
          </h2>
          <p className="text-white/40 text-sm text-center mb-10">
            Bundle any Tee + Sticker Pack and save $8 at checkout.
          </p>
          <div className="flex h-1 rounded-full overflow-hidden mb-10 max-w-xs mx-auto">
            <div className="flex-1 bg-[#1D9E75]" />
            <div className="flex-1 bg-[#EF9F27]" />
            <div className="flex-1 bg-[#D85A30]" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {merch.map((item) => (
              <div
                key={item.name}
                className="bg-[#1a1a18] border border-white/10 rounded-2xl p-5 flex flex-col gap-3 hover:border-[#1D9E75]/50 transition-colors"
              >
                <div className="flex items-center gap-2 flex-wrap">
                  <span className={`text-xs font-medium px-3 py-1 rounded-full ${item.eraColor}`}>
                    {item.era}
                  </span>
                  {item.badge && (
                    <span className="text-xs font-medium px-3 py-1 rounded-full bg-amber-100 text-amber-800 border border-amber-400">
                      ★ {item.badge}
                    </span>
                  )}
                </div>
                <h3 className="text-white font-black text-base leading-tight">{item.name}</h3>
                <p className="text-white/50 text-xs leading-relaxed flex-1">{item.desc}</p>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-[#1D9E75] font-black text-xl">{item.retail}</span>
                  <span className="ml-auto text-xs bg-[#1D9E75]/20 text-[#1D9E75] px-2 py-1 rounded-full font-medium">
                    {item.margin}
                  </span>
                </div>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center bg-[#1D9E75] text-white text-sm font-semibold py-3 rounded-xl hover:bg-[#0F6E56] transition-colors"
                >
                  Shop Now
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SCARCITY BANNER 2 */}
      <div className="bg-[#EF9F27] text-[#2C2C2A] py-4 px-4 text-center">
        <p className="font-black text-sm md:text-base">
          ⏳ First Drop: April 1 – April 30, 2026 Only. No restocks. No excuses. No more dialing.
        </p>
      </div>

      {/* COMMUNITY */}
      <section id="community" className="max-w-6xl mx-auto px-4 py-20">
        <div className="flex items-center gap-3 mb-6">
          <div className="h-px flex-1 bg-black/10" />
          <span className="text-xs font-medium tracking-widest uppercase text-[#5F5E5A]">Community</span>
          <div className="h-px flex-1 bg-black/10" />
        </div>
        <h2 className="text-3xl md:text-4xl font-black text-center mb-3">
          Duet Your Fail.{" "}
          <span className="text-[#1D9E75]">Win the Drop.</span>
        </h2>
        <p className="text-[#5F5E5A] text-base text-center max-w-xl mx-auto mb-10">
          Share your worst drunk-dial era, duet with Squiggle, and tag{" "}
          <span className="font-semibold text-[#1D9E75]">#DontDrinkAndDialDecades</span>.
          Best entries get reposted — and could win the full merch bundle.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
            "My 70s dial fail",
            "Flip phone fumble!",
            "Saved by the screen... barely",
            "Squiggle is literally me",
          ].map((caption, i) => (
            <div
              key={i}
              className="aspect-square rounded-2xl bg-gradient-to-br from-[#1D9E75]/10 to-[#EF9F27]/10 border border-black/10 flex flex-col items-center justify-center text-center p-4 gap-2"
            >
              <div className="text-3xl">📵</div>
              <p className="text-xs text-[#5F5E5A] leading-snug">{caption}</p>
              <span className="text-[10px] text-[#1D9E75] font-medium">#DontDrinkAndDialDecades</span>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <a
            href="https://www.tiktok.com/@lilsquigglemon"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border-2 border-[#1D9E75] text-[#1D9E75] font-semibold px-8 py-3 rounded-full hover:bg-[#1D9E75] hover:text-white transition-colors text-sm"
          >
            Duet on TikTok
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-[#F1EFE8] py-20">
        <div className="max-w-2xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px flex-1 bg-black/10" />
            <span className="text-xs font-medium tracking-widest uppercase text-[#5F5E5A]">FAQ</span>
            <div className="h-px flex-1 bg-black/10" />
          </div>
          <h2 className="text-3xl font-black text-center mb-10">Got Questions, Mon?</h2>
          <div className="flex flex-col gap-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white border border-black/8 rounded-2xl p-5">
                <h3 className="font-bold text-sm text-[#2C2C2A] mb-2">{faq.q}</h3>
                <p className="text-[#5F5E5A] text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#2C2C2A] text-white pt-20 pb-10">
        <div className="flex h-1.5 w-full mb-16">
          <div className="flex-1 bg-[#1D9E75]" />
          <div className="flex-1 bg-[#EF9F27]" />
          <div className="flex-1 bg-[#D85A30]" />
        </div>
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div className="text-5xl mb-4">📵</div>
          <h2 className="text-4xl md:text-6xl font-black leading-tight mb-4">
            Put the Phone
            <br />
            <span className="text-[#EF9F27]">Down, Mon.</span>
          </h2>
          <p className="text-white/50 text-base mb-8 max-w-md mx-auto">
            One call. Every era. Same regret. Do not be Squiggle — unless you are wearing the tee.
          </p>
          <a
            href="#shop"
            className="inline-block bg-[#1D9E75] text-white font-bold px-10 py-4 rounded-full text-base hover:bg-[#0F6E56] transition-colors"
          >
            Shop the Drop Before It Is Gone
          </a>

          {/* Social links */}
          <div className="mt-12 flex flex-wrap justify-center gap-4 text-sm">
            <a
              href="https://www.tiktok.com/@lilsquigglemon"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/50 hover:text-white transition-colors"
            >
              TikTok @lilsquigglemon
            </a>
            <span className="text-white/20">·</span>
            <a
              href="https://www.instagram.com/lil.squiggle"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/50 hover:text-white transition-colors"
            >
              Instagram @lil.squiggle
            </a>
            <span className="text-white/20">·</span>
            <a
              href="https://x.com/lil_squigglemon"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/50 hover:text-white transition-colors"
            >
              X @lil_squigglemon
            </a>
            <span className="text-white/20">·</span>
            <a
              href="https://www.youtube.com/@lilsquigglemon"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/50 hover:text-white transition-colors"
            >
              YouTube @lilsquigglemon
            </a>
            <span className="text-white/20">·</span>
            <a
              href="mailto:lilsquigglemon@gmail.com"
              className="text-white/50 hover:text-white transition-colors"
            >
              lilsquigglemon@gmail.com
            </a>
          </div>

          <div className="mt-8 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/30">
            <span>2026 Lil Squiggle / Don&apos;t Drink and Dial Decades</span>
            <span>Produced by Donny Markowitz &amp; Gary Uffner &middot; Feat. Pat Smith</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
