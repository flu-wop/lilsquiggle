import type Lenis from 'lenis'

// Shared handle so components can scroll through Lenis when it is active.
let instance: Lenis | null = null

export const setLenis = (l: Lenis | null) => { instance = l }

export function scrollToY(y: number) {
  if (instance) instance.scrollTo(y, { duration: 1.1 })
  else window.scrollTo({ top: y, behavior: 'smooth' })
}
