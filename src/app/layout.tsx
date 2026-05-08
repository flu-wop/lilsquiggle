// src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: {
    default:  "Lil Squiggle — Don't Drink & Dial Decades",
    template: "%s | Lil Squiggle",
  },
  description:
    "One call. Every era. Same regret. The reggae-dub chibi Lego campaign from Mid City Sound Studios. " +
    "Original track by Pat Smith. Produced by Donny Markowitz & Gary Uffner.",
  keywords: [
    "Lil Squiggle", "Don't Drink and Dial", "DontDrinkAndDialDecades",
    "reggae dub", "chibi", "Lego", "Mid City Sound", "New Orleans",
    "Pat Smith", "Donny Markowitz", "Gary Uffner",
  ],
  metadataBase: new URL("https://lilsquiggle.vercel.app"),
  icons: { icon: "/favicon.png" },
  openGraph: {
    type:        "website",
    url:         "https://lilsquiggle.vercel.app",
    siteName:    "Lil Squiggle",
    title:       "Lil Squiggle — Don't Drink & Dial Decades",
    description: "One call. Every era. Same regret.",
  },
  twitter: {
    card:        "summary_large_image",
    site:        "@lilsquigglemon",
    title:       "Lil Squiggle — Don't Drink & Dial Decades",
    description: "One call. Every era. Same regret.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className="bg-studio-black text-cream antialiased">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
