import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Lil Squiggle site terms of service.",
};

export default function Page() {
  return (
    <div className="min-h-screen bg-studio-black py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="font-display text-4xl text-cream mb-2">Terms of Service</h1>
        <p className="text-mist/60 text-sm mb-10">Last updated: September 2026</p>
        <div className="bg-studio-charcoal border border-studio-border rounded-sm p-8 sm:p-12">
          <p className="text-mist leading-relaxed mb-6">
            This site showcases Lil Squiggle's music, merch, and story. All content is the property of the artist and may not be reproduced without permission. Purchases made through linked third-party stores are subject to those stores' terms.
          </p>
          <h2 className="font-display text-2xl text-gold mt-10 mb-3">Contact Us</h2>
          <p className="text-mist leading-relaxed mb-6">
            Email <a href="mailto:lilsquigglemon@gmail.com" className="text-gold hover:underline">lilsquigglemon@gmail.com</a>.
          </p>
        </div>
      </div>
    </div>
  );
}
