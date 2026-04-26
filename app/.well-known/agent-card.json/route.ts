import { NextResponse } from "next/server";

// A2A Agent Card — https://a2a-protocol.org/latest/specification/
const AGENT_CARD = {
  name: "Łukasz Miądowicz Portfolio Agent",
  version: "1.0.0",
  description:
    "AI agent for miadowicz.com — exposes portfolio content, blog posts, books, and professional background of Łukasz Miądowicz, AI Product Leader & Strategy Lead.",
  url: "https://miadowicz.com",
  supportedInterfaces: [
    {
      type: "mcp",
      transport: "http",
      url: "https://miadowicz.com/mcp",
    },
  ],
  capabilities: {
    streaming: false,
    pushNotifications: false,
    stateTransition: false,
  },
  skills: [
    {
      id: "content-discovery",
      name: "Content Discovery",
      description:
        "Discover and access blog posts, books, and portfolio content. Supports Accept: text/markdown for machine-readable responses.",
    },
    {
      id: "portfolio-overview",
      name: "Portfolio Overview",
      description:
        "Get professional background, expertise, key metrics, and contact information for Łukasz Miądowicz.",
    },
  ],
};

export function GET() {
  return new NextResponse(JSON.stringify(AGENT_CARD, null, 2), {
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "public, max-age=300, must-revalidate",
    },
  });
}
