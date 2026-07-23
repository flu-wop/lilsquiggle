// src/components/layout/BuiltBySignature.tsx
export function BuiltBySignature() {
  return (
    <div className="w-full py-6" style={{ borderTop: '1px solid rgba(212,175,119,0.15)' }}>
      <p
        className="text-center text-[11px] tracking-[0.15em] font-mono"
        style={{ color: 'var(--color-mist)' }}
      >
        BUILT BY{" "}
        <a
          href="https://in-flu-ential.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-colors duration-200"
          style={{ color: 'var(--color-gold)' }}
          onMouseEnter={(e) => ((e.target as HTMLElement).style.color = 'var(--color-gold-light)')}
          onMouseLeave={(e) => ((e.target as HTMLElement).style.color = 'var(--color-gold)')}
        >
          IN-FLU-ENTIAL LLC
        </a>
      </p>
    </div>
  );
}
