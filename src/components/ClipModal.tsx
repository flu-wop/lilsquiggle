'use client'

import { useEffect, useRef } from 'react'
import { ERAS, type Era } from '@/data/eras'
import { clipsForEra } from '@/data/clips'
import ClipVideo from './ClipVideo'

export default function ClipModal({ eraId, onClose }: { eraId: Era['id']; onClose: () => void }) {
  const era = ERAS.find(e => e.id === eraId)!
  const clips = clipsForEra(eraId)
  const closeRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = prev
    }
  }, [onClose])

  return (
    <div
      role="dialog" aria-modal="true" aria-label={`${era.label} clips`}
      data-lenis-prevent
      className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-8"
      style={{ background: 'rgba(9,9,9,0.88)', backdropFilter: 'blur(14px)' }}
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-sm p-6 sm:p-10"
        style={{ background: 'var(--color-charcoal)', border: '1px solid rgba(212,175,119,0.2)' }}
        onClick={e => e.stopPropagation()}
      >
        <button
          ref={closeRef} onClick={onClose} aria-label="Close"
          className="absolute top-4 right-4 w-9 h-9 flex items-center justify-center rounded-full"
          style={{ border: '1px solid rgba(212,175,119,0.3)', color: 'var(--color-gold)' }}
        >
          ✕
        </button>

        <div className="rasta-bar w-14 h-0.5 mb-5 rounded-full" />
        <p className="text-[10px] uppercase tracking-[0.35em] mb-2" style={{ color: 'var(--rasta-green)' }}>
          {era.device} · {era.setting}
        </p>
        <h3 className="font-display mb-8" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', color: 'var(--color-cream)', fontWeight: 500 }}>
          {era.label} <span className="italic text-gold-gradient">clips</span>
        </h3>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 items-start">
          {clips.map(c => (
            <div key={c.id} className={c.aspect === 'wide' ? 'col-span-2' : ''}>
              <ClipVideo clip={c} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
