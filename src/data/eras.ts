export type Era = {
  id: '70s' | '90s' | 'modern'
  label: string
  device: string
  glyph: string
  setting: string
  desc: string
  img: string
  badge: string
}

export const ERAS: Era[] = [
  {
    id: '70s',
    label: "The '70s",
    device: 'Rotary Phone',
    glyph: '📞',
    setting: 'Avocado-green kitchen',
    desc: "Squiggle spins the dial. He shouldn't — he knows he shouldn't — but the record's playing, the disco ball is spinning, and his thumb finds the rotary anyway. Same mistake, analog edition.",
    img: '/images/era-70s.png',
    badge: 'era-badge-70s',
  },
  {
    id: '90s',
    label: "The '90s",
    device: 'Flip Phone',
    glyph: '📱',
    setting: 'Neon-lit club bathroom',
    desc: 'The satisfying snap of a flip. The unsatisfying aftermath of a 2am call. He found the number. He dialed it. The flip phone closes with finality — but the call already went through.',
    img: '/images/era-90s.png',
    badge: 'era-badge-90s',
  },
  {
    id: 'modern',
    label: 'Modern',
    device: 'Smartphone',
    glyph: '📲',
    setting: 'His own couch',
    desc: 'Face ID. Read receipts. Zero excuses. Maximum regret. The modern era gave us every tool to avoid this mistake — Lil Squiggle uses every tool to make it anyway.',
    img: '/images/era-modern.png',
    badge: 'era-badge-modern',
  },
]
