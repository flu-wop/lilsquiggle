// Caps how many clips play at once so scrolling a wall of video stays smooth.
const MAX_PLAYING = 3
const playing: HTMLVideoElement[] = []

export function playManaged(el: HTMLVideoElement) {
  if (!playing.includes(el)) playing.push(el)
  while (playing.length > MAX_PLAYING) {
    const oldest = playing.shift()
    oldest?.pause()
  }
  el.play().catch(() => {})
}

export function pauseManaged(el: HTMLVideoElement) {
  const i = playing.indexOf(el)
  if (i !== -1) playing.splice(i, 1)
  el.pause()
}
