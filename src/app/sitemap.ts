import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/url";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl();
  return [
    { url: `${base}/`, changeFrequency: "monthly", priority: 1 },
    { url: `${base}/gallery`, changeFrequency: "monthly", priority: 0.8 },
  ];
}
