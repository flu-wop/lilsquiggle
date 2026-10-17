// Single source of truth for links, handles and placeholders.
// Anything set to null is a placeholder: the UI renders a "coming soon" state.

export const MERCH_URL = 'https://midcitysound.com/merch/brand/squiggle'
export const MERCH_STORE_URL = 'https://midcitysound.com/merch'
export const HASHTAG = '#DontDrinkAndDialDecades'

// PLACEHOLDER: drop a 2–4 sec looping hero video (1080p, <=6 MB) at this path,
// e.g. '/video/hero-loop.mp4'. While null, the hero uses the still image.
export const HERO_VIDEO: string | null = null
// PLACEHOLDER: optional poster frame for the hero video.
export const HERO_POSTER: string | null = null

export const PLATFORMS: { name: string; note: string; href: string | null }[] = [
  // PLACEHOLDER: add the real streaming URLs.
  { name: 'Spotify',       note: 'Stream free',       href: null },
  { name: 'Apple Music',   note: 'Stream & download', href: null },
  { name: 'YouTube Music', note: 'Watch the video',   href: null },
  { name: 'SoundCloud',    note: 'Free stream',       href: null },
]

export const SOCIALS = [
  { label: 'TikTok',    handle: '@lilsquigglemon', href: 'https://tiktok.com/@lilsquigglemon',  color: 'var(--rasta-green)' },
  { label: 'Instagram', handle: '@lil.squiggle',   href: 'https://instagram.com/lil.squiggle',  color: 'var(--color-gold)' },
  { label: 'YouTube',   handle: '@lilsquigglemon', href: 'https://youtube.com/@lilsquigglemon', color: 'var(--color-gold)' },
  { label: 'X',         handle: '@lilsquigglemon', href: 'https://x.com/lilsquigglemon',        color: 'var(--color-mist)' },
]

export const CAPCUT_TEMPLATES: { slot: string; blurb: string; href: string | null }[] = [
  // PLACEHOLDER: add the CapCut template share links.
  { slot: 'Morning',   blurb: 'Dial before coffee.',   href: null },
  { slot: 'Afternoon', blurb: 'Dial on a lunch break.', href: null },
  { slot: 'Evening',   blurb: 'Dial after one more.',  href: null },
]
