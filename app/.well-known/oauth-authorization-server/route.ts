import { NextResponse } from "next/server";

// RFC 8414 — OAuth 2.0 Authorization Server Metadata
// This site has no protected APIs; the document is published for agent
// discoverability. The JWKS reuses the Web Bot Auth signing key.
const METADATA = {
  issuer: "https://miadowicz.com",
  authorization_endpoint: "https://miadowicz.com/oauth/authorize",
  token_endpoint: "https://miadowicz.com/oauth/token",
  jwks_uri: "https://miadowicz.com/.well-known/http-message-signatures-directory",
  grant_types_supported: ["client_credentials"],
  response_types_supported: ["code"],
  token_endpoint_auth_methods_supported: ["none"],
  subject_types_supported: ["public"],
};

export function GET() {
  return new NextResponse(JSON.stringify(METADATA, null, 2), {
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "public, max-age=300, must-revalidate",
    },
  });
}
