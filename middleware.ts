import { NextRequest, NextResponse } from "next/server";

// Prevents the middleware from recursively intercepting its own subrequest
const GUARD = "x-md-internal";

// Served directly from middleware so it runs before Vercel's CDN cache layer,
// bypassing the stale prerendered version left by the old app/robots.ts.
const ROBOTS_TXT = `User-agent: *
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

# Training data crawlers — opt out (search/retrieval bots are allowed via * rule above)
User-agent: anthropic-ai
Disallow: /

User-agent: CCBot
Disallow: /

# Content usage preferences (https://contentsignals.org/)
Content-Signal: ai-train=no, search=yes, ai-input=yes

Sitemap: https://miadowicz.com/sitemap.xml
Host: https://miadowicz.com
`;

function htmlToMarkdown(html: string): string {
  let md = html
    // Drop non-content sections entirely
    .replace(/<head[\s\S]*?<\/head>/gi, "")
    .replace(/<(script|style|nav|footer|noscript|aside)[^>]*>[\s\S]*?<\/\1>/gi, "");

  // Headings
  md = md
    .replace(/<h1[^>]*>([\s\S]*?)<\/h1>/gi, "\n# $1\n")
    .replace(/<h2[^>]*>([\s\S]*?)<\/h2>/gi, "\n## $1\n")
    .replace(/<h3[^>]*>([\s\S]*?)<\/h3>/gi, "\n### $1\n")
    .replace(/<h4[^>]*>([\s\S]*?)<\/h4>/gi, "\n#### $1\n");

  // Links before stripping tags so href is preserved
  md = md.replace(/<a[^>]+href="([^"]*)"[^>]*>([\s\S]*?)<\/a>/gi, "[$2]($1)");

  // Inline formatting
  md = md
    .replace(/<(strong|b)[^>]*>([\s\S]*?)<\/\1>/gi, "**$2**")
    .replace(/<(em|i)[^>]*>([\s\S]*?)<\/\1>/gi, "*$2*");

  // Code — blocks before inline
  md = md
    .replace(/<pre[^>]*><code[^>]*>([\s\S]*?)<\/code><\/pre>/gi, "\n```\n$1\n```\n")
    .replace(/<code[^>]*>([\s\S]*?)<\/code>/gi, "`$1`");

  // Lists
  md = md
    .replace(/<li[^>]*>([\s\S]*?)<\/li>/gi, "\n- $1")
    .replace(/<\/?[uo]l[^>]*>/gi, "\n");

  // Block-level spacing
  md = md
    .replace(/<p[^>]*>([\s\S]*?)<\/p>/gi, "\n\n$1\n\n")
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/<hr\s*\/?>/gi, "\n---\n");

  // Strip all remaining tags
  md = md.replace(/<[^>]+>/g, "");

  // Decode common HTML entities
  md = md
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&nbsp;/g, " ")
    .replace(/&#x27;/g, "'")
    .replace(/&#x2F;/g, "/");

  // Normalise whitespace
  return md
    .replace(/\t/g, " ")
    .replace(/ {2,}/g, " ")
    .replace(/\n[ \t]+/g, "\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

export async function middleware(request: NextRequest) {
  // Serve robots.txt directly — bypasses CDN cache layer entirely
  if (request.nextUrl.pathname === "/robots.txt") {
    return new NextResponse(ROBOTS_TXT, {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Cache-Control": "no-store",
      },
    });
  }

  const accept = request.headers.get("accept") ?? "";

  if (!accept.includes("text/markdown") || request.headers.has(GUARD)) {
    return NextResponse.next();
  }

  const htmlRes = await fetch(request.nextUrl.toString(), {
    headers: { accept: "text/html", [GUARD]: "1" },
  });

  if (!htmlRes.ok) return NextResponse.next();

  const html = await htmlRes.text();
  const markdown = htmlToMarkdown(html);

  return new NextResponse(markdown, {
    status: 200,
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "x-markdown-tokens": String(Math.ceil(markdown.length / 4)),
    },
  });
}

export const config = {
  matcher: ["/robots.txt", "/", "/blog/:path*", "/books/:path*", "/glossary/:path*", "/fractional", "/advisory", "/speaking"],
};
