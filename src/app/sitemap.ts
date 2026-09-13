import type { MetadataRoute } from "next";

const BASE_URL = "https://lilsquiggle.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/merch",
    "/music",
    "/story",
  ];

  return staticRoutes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
  }));
}
