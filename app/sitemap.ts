import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";

const LANGS = ["ko", "en", "vi"] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const languages = Object.fromEntries(
    LANGS.map((l) => [l, `${siteUrl}/${l}`]),
  );
  return LANGS.map((l) => ({
    url: `${siteUrl}/${l}`,
    changeFrequency: "monthly",
    priority: l === "ko" ? 1 : 0.9,
    alternates: { languages },
  }));
}
