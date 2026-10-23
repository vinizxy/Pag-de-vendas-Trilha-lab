import type { MetadataRoute } from "next";
import { urlSite } from "@/lib/config";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${urlSite}/`, changeFrequency: "monthly", priority: 1 },
    { url: `${urlSite}/privacidade`, changeFrequency: "yearly", priority: 0.2 },
  ];
}
