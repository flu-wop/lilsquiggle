import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Local /public images are always allowed — this config is here
    // in case you add external image domains later (e.g. Printful CDN)
    remotePatterns: [],
    // Serve images in next-gen formats
    formats: ["image/avif", "image/webp"],
  },
  // Turbopack compatibility
  turbopack: {},
};

export default nextConfig;
