import { NextResponse } from "next/server";

const BASE = "https://miadowicz.com";

const CATALOG = {
  linkset: [
    {
      // Content API — pages respond with text/markdown when Accept: text/markdown is sent
      anchor: BASE,
      "service-desc": [
        { href: `${BASE}/llms-full.txt`, type: "text/plain" },
      ],
      "service-doc": [
        { href: BASE, type: "text/html" },
      ],
      status: [
        { href: `${BASE}/api/health`, type: "application/json" },
      ],
    },
    {
      // Web Bot Auth — JWKS for verifying signed outgoing requests
      anchor: `${BASE}/.well-known/http-message-signatures-directory`,
      "service-desc": [
        {
          href: `${BASE}/.well-known/http-message-signatures-directory`,
          type: "application/http-message-signatures-directory+json",
        },
      ],
      "service-doc": [
        { href: "https://datatracker.ietf.org/wg/webbotauth/about/", type: "text/html" },
      ],
    },
  ],
};

export function GET() {
  return new NextResponse(JSON.stringify(CATALOG, null, 2), {
    headers: {
      "Content-Type": "application/linkset+json",
      "Cache-Control": "public, max-age=300, must-revalidate",
    },
  });
}
