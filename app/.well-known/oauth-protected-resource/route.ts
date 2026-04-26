import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

// RFC 9728 — RFC requires resource to match the origin it is served from
export function GET(request: NextRequest) {
  const origin = `https://${request.headers.get("x-forwarded-host") ?? request.headers.get("host") ?? "miadowicz.com"}`;

  return new NextResponse(
    JSON.stringify(
      {
        resource: origin,
        authorization_servers: [origin],
        scopes_supported: ["read"],
      },
      null,
      2
    ),
    {
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "no-store",
      },
    }
  );
}
