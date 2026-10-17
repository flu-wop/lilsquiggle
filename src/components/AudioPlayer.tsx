'use client'

import { useRef, useState } from 'react'

// Tap-to-play. The track is large, so nothing downloads until the first tap.
export default function AudioPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [playing, setPlaying] = useState(false)
  const [muted, setMuted] = useState(false)
  const [vol, setVol] = useState(0.4)

  const togglePlay = () => {
    const a = audioRef.current
    if (!a) return
    if (a.paused) {
      a.volume = vol
      a.muted = false
      setMuted(false)
      a.play().catch(() => {})
    } else {
      a.pause()
    }
  }
  const toggleMute = () => {
    const a = audioRef.current
    if (!a) return
    a.muted = !a.muted
    setMuted(a.muted)
  }
  const handleVol = (e: React.ChangeEvent<HTMLInputElement>) => {
    const v = parseFloat(e.target.value)
    const a = audioRef.current
    if (!a) return
    a.volume = v
    a.muted = false
    setVol(v)
    setMuted(false)
  }

  return (
    <>
      <audio
        ref={audioRef}
        src="/audio/dont-drink-and-dial.wav"
        loop
        preload="none"
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
      />
      <div
        className="fixed bottom-5 right-5 z-50 flex items-center gap-2 px-3 py-2 rounded-full"
        style={{ background: 'rgba(9,9,9,0.88)', border: '1px solid rgba(212,175,119,0.25)', backdropFilter: 'blur(20px)' }}
      >
        <span className="hidden sm:block text-[9px] uppercase tracking-[0.25em] pl-1 pr-1" style={{ color: 'var(--color-mist)' }}>
          {playing ? 'Now playing' : 'Play the track'}
        </span>
        <input
          type="range" min={0} max={1} step={0.05} value={muted ? 0 : vol}
          onChange={handleVol} aria-label="Volume"
          className="w-14 h-px cursor-pointer" style={{ accentColor: 'var(--color-gold)' }}
        />
        <button
          onClick={toggleMute} aria-label={muted ? 'Unmute' : 'Mute'}
          className="w-6 h-6 flex items-center justify-center"
          style={{ color: muted ? 'rgba(212,175,119,0.3)' : 'var(--color-gold)' }}
        >
          {muted
            ? <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-3.5 h-3.5"><path strokeLinecap="round" d="M17.25 9.75L19.5 12m0 0l2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-6l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z"/></svg>
            : <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-3.5 h-3.5"><path strokeLinecap="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z"/></svg>}
        </button>
        <button
          onClick={togglePlay} aria-label={playing ? 'Pause' : 'Play'}
          className="w-7 h-7 rounded-full flex items-center justify-center"
          style={{ background: 'rgba(212,175,119,0.12)', border: '1px solid rgba(212,175,119,0.3)', color: 'var(--color-gold)' }}
        >
          {playing
            ? <svg viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3"><path fillRule="evenodd" d="M6.75 5.25a.75.75 0 01.75-.75H9a.75.75 0 01.75.75v13.5a.75.75 0 01-.75.75H7.5a.75.75 0 01-.75-.75V5.25zm7.5 0A.75.75 0 0115 4.5h1.5a.75.75 0 01.75.75v13.5a.75.75 0 01-.75.75H15a.75.75 0 01-.75-.75V5.25z" clipRule="evenodd"/></svg>
            : <svg viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3 ml-0.5"><path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd"/></svg>}
        </button>
      </div>
    </>
  )
}
