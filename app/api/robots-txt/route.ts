import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

const ROBOTS = `User-agent: *
Allow: /
Disallow: /api/
Disallow: /_next/

# Citation-time crawlers — appear in live AI answers
User-agent: PerplexityBot
Allow: /

User-agent: OAI-SearchBot
Allow: /

User-agent: Applebot-Extended
Allow: /

User-agent: FacebookBot
Allow: /

# Google-Extended — Gemini training + Gemini grounding in Search
User-agent: Google-Extended
Allow: /

# Training data crawlers — opt out
User-agent: GPTBot
Disallow: /

User-agent: ClaudeBot
Disallow: /

User-agent: anthropic-ai
Disallow: /

User-agent: CCBot
Disallow: /

# Content usage preferences (https://contentsignals.org/)
Content-Signal: ai-train=no, search=yes, ai-input=yes

Sitemap: https://miadowicz.com/sitemap.xml
Host: https://miadowicz.com
`;

export function GET() {
  return new NextResponse(ROBOTS, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "no-store",
    },
  });
}
