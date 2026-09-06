import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const siteOrigin = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://howethstudio.com"
).replace(/\/$/, "");

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/elevenward/admin/"],
    },
    sitemap: `${siteOrigin}/sitemap.xml`,
    host: siteOrigin,
  };
}
