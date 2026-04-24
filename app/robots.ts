import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/"],
      },
      // Citation-time crawlers — these determine if you appear in live AI answers
      { userAgent: "PerplexityBot", allow: "/" },
      { userAgent: "OAI-SearchBot", allow: "/" },
      { userAgent: "Applebot-Extended", allow: "/" },
      { userAgent: "FacebookBot", allow: "/" },
      // Google-Extended — Gemini training + Gemini grounding in Search
      { userAgent: "Google-Extended", allow: "/" },
      // Training data crawlers — opt out to control what feeds future model weights
      { userAgent: "GPTBot", disallow: "/" },
      { userAgent: "ClaudeBot", disallow: "/" },
      { userAgent: "anthropic-ai", disallow: "/" },
      { userAgent: "CCBot", disallow: "/" },
    ],
    sitemap: "https://miadowicz.com/sitemap.xml",
    host: "https://miadowicz.com",
  };
}
