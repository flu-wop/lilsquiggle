import type { Era } from './eras'

export type Clip = {
  id: string
  era: Era['id']
  title: string
  // Template format the clip remakes (working title, swap freely).
  template: string
  // PLACEHOLDER while null: the tile shows a "clip drops soon" state.
  // Add clips by dropping files in /public/video and setting src (+ poster).
  // Encode: 720x1280 H.264, 2–4 sec loop, <=1.5 MB.
  src: string | null
  poster: string | null
  caption: string
  // 'vertical' = 9:16 (default), 'wide' = 16:9.
  aspect?: 'vertical' | 'wide'
}

export const CLIPS: Clip[] = [
  {
    id: 'flip-fails-1',
    era: '90s',
    title: 'Flip Fails',
    template: 'Official PSA',
    src: '/video/flip-fails-1.mp4',
    poster: null,
    caption: 'The snap of a flip. The regret of a 2am call.',
    aspect: 'wide',
  },
  { id: 'drake',        era: '70s',    title: 'Hang Up / Dial',      template: 'Drake approves / rejects', src: null, poster: null, caption: 'Hang up: no. Dial the ex: yes.' },
  { id: 'brain',        era: '70s',    title: 'Expanding Brain',     template: 'Expanding brain',          src: null, poster: null, caption: 'Four levels of terrible ideas.' },
  { id: 'this-is-fine', era: '90s',    title: 'This Is Fine',        template: 'This is fine',             src: null, poster: null, caption: 'Calm. Absolutely calm.' },
  { id: 'expectation',  era: '90s',    title: 'Expectation vs Reality', template: 'Expectation vs reality', src: null, poster: null, caption: 'What he said vs what he sent.' },
  { id: 'booth',        era: 'modern', title: 'Phone Booth',         template: 'Phone booth scene',        src: null, poster: null, caption: 'Last phone booth in town.' },
  { id: 'read-receipt', era: 'modern', title: 'Read Receipt',        template: 'Reaction pose',            src: null, poster: null, caption: 'Delivered. Read. Regretted.' },
  { id: 'two-buttons',  era: 'modern', title: 'Two Buttons',         template: 'Two buttons',              src: null, poster: null, caption: 'Call / Don’t call. Sweating.' },
]

export const clipsForEra = (era: Era['id']) => CLIPS.filter(c => c.era === era)
