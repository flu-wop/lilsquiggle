"use client"
// src/components/TrackPlayer.tsx
// Real audio playback for the /music page's track card. The waveform
// bars fill in (green) to track actual playback progress instead of
// being a static decorative split, and the caption shows real elapsed
// / total time instead of the old "Add audio: ..." placeholder text.

import { useEffect, useRef, useState } from "react"
import { Play, Pause } from "lucide-react"

function formatTime(seconds: number) {
  if (!isFinite(seconds) || seconds < 0) return "0:00"
  const m = Math.floor(seconds / 60)
  const s = Math.floor(seconds % 60)
  return `${m}:${s.toString().padStart(2, "0")}`
}

export function TrackPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [playing, setPlaying]   = useState(false)
  const [progress, setProgress] = useState(0) // 0–1
  const [current, setCurrent]   = useState(0)
  const [duration, setDuration] = useState(0)

  useEffect(() => {
    const a = audioRef.current
    if (!a) return
    const onTime = () => {
      setCurrent(a.currentTime)
      setProgress(a.duration ? a.currentTime / a.duration : 0)
    }
    const onLoaded = () => setDuration(a.duration)
    const onEnded  = () => { setPlaying(false); setProgress(0) }
    a.addEventListener("timeupdate", onTime)
    a.addEventListener("loadedmetadata", onLoaded)
    a.addEventListener("ended", onEnded)
    return () => {
      a.removeEventListener("timeupdate", onTime)
      a.removeEventListener("loadedmetadata", onLoaded)
      a.removeEventListener("ended", onEnded)
    }
  }, [])

  function toggle() {
    const a = audioRef.current
    if (!a) return
    if (playing) {
      a.pause()
      setPlaying(false)
    } else {
      a.play().then(() => setPlaying(true)).catch(() => {})
    }
  }

  return (
    <>
      <audio ref={audioRef} src="/audio/dont-drink-and-dial.wav" preload="metadata" />

      {/* Waveform — fills in with real playback progress */}
      <div className="flex items-center gap-[2px] h-10">
        {Array.from({ length: 80 }).map((_, i) => {
          const h = Math.abs(Math.sin(i * 0.35)) * 22 + 4
          const played = i / 80 < progress
          return (
            <div
              key={i}
              className={`rounded-[1px] flex-shrink-0 transition-colors ${played ? "bg-rasta-green/60" : "bg-studio-border"}`}
              style={{ width: "2.5px", height: `${h}px` }}
            />
          )
        })}
      </div>

      {/* Play button + time */}
      <div className="flex items-center gap-4">
        <button
          onClick={toggle}
          aria-label={playing ? "Pause" : "Play"}
          className="w-12 h-12 rounded-full bg-rasta-green flex items-center justify-center hover:bg-rasta-green/80 transition-colors"
        >
          {playing
            ? <Pause className="w-5 h-5 text-cream" />
            : <Play className="w-5 h-5 text-cream ml-0.5" />}
        </button>
        <div>
          <p className="text-cream text-sm font-medium">Don&apos;t Drink &amp; Dial Decades</p>
          <p className="text-mist text-xs">{formatTime(current)} / {formatTime(duration)}</p>
        </div>
      </div>
    </>
  )
}
