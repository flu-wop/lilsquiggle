// src/app/not-found.tsx
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="pt-16 min-h-screen bg-studio-black flex items-center justify-center px-6">
      <div className="text-center space-y-6 max-w-sm">
        <div className="flex justify-center gap-2 mb-4">
          <div className="w-3 h-3 rounded-full bg-rasta-red" />
          <div className="w-3 h-3 rounded-full bg-rasta-gold" />
          <div className="w-3 h-3 rounded-full bg-rasta-green" />
        </div>
        <p className="font-display text-7xl text-gold/20">404</p>
        <h1 className="font-display text-3xl text-cream">Wrong number, mon.</h1>
        <p className="text-mist text-sm">That page doesn&apos;t exist — but the regret does.</p>
        <div className="flex gap-3 justify-center">
          <Button asChild><Link href="/">Home</Link></Button>
          <Button variant="outline" asChild><Link href="/story">The Story</Link></Button>
        </div>
      </div>
    </div>
  )
}
