import type { MetadataRoute } from "next";

import { routing } from "@/i18n/routing";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

const paths = ["/"] as const;

function buildUrl(locale: string, path: string) {
  const suffix = path === "/" ? "" : path;
  return `${siteUrl}/${locale}${suffix}`;
}

export default function sitemap(): MetadataRoute.Sitemap {
  return paths.flatMap((path) =>
    routing.locales.map((locale) => ({
      url: buildUrl(locale, path),
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: path === "/" ? 1 : 0.7,
      alternates: {
        languages: Object.fromEntries(
          routing.locales.map((alt) => [alt, buildUrl(alt, path)])
        )
      }
    }))
  );
}
