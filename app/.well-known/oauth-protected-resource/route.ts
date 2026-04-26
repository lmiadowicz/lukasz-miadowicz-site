import { NextResponse } from "next/server";

// RFC 9728 — OAuth 2.0 Protected Resource Metadata
const METADATA = {
  resource: "https://miadowicz.com",
  authorization_servers: ["https://miadowicz.com"],
  scopes_supported: ["read"],
};

export function GET() {
  return new NextResponse(JSON.stringify(METADATA, null, 2), {
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "public, max-age=300, must-revalidate",
    },
  });
}
