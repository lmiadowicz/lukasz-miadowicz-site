import { NextResponse } from "next/server";

// SEP-1649 / MCP Server Card
const SERVER_CARD = {
  $schema:
    "https://static.modelcontextprotocol.io/schemas/2025-10-17/server.schema.json",
  serverInfo: {
    name: "com.miadowicz/portfolio",
    version: "1.0.0",
    title: "Łukasz Miądowicz – AI Product Leader",
    description:
      "MCP server exposing portfolio content: blog posts, books, and professional background of Łukasz Miądowicz, AI Product Leader & Strategy Lead.",
    websiteUrl: "https://miadowicz.com",
  },
  transport: {
    type: "http",
    install: {
      url: "https://miadowicz.com/mcp",
    },
  },
  capabilities: {
    resources: [],
    tools: [],
    prompts: [],
  },
};

export function GET() {
  return new NextResponse(JSON.stringify(SERVER_CARD, null, 2), {
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "public, max-age=300, must-revalidate",
    },
  });
}
