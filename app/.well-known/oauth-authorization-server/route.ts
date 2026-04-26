import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

// RFC 8414 — issuer must match the URL this document is served from
export function GET(request: NextRequest) {
  const origin = `https://${request.headers.get("x-forwarded-host") ?? request.headers.get("host") ?? "miadowicz.com"}`;

  return new NextResponse(
    JSON.stringify(
      {
        issuer: origin,
        authorization_endpoint: `${origin}/oauth/authorize`,
        token_endpoint: `${origin}/oauth/token`,
        jwks_uri: `${origin}/.well-known/http-message-signatures-directory`,
        grant_types_supported: ["client_credentials"],
        response_types_supported: ["code"],
        token_endpoint_auth_methods_supported: ["none"],
        subject_types_supported: ["public"],
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
