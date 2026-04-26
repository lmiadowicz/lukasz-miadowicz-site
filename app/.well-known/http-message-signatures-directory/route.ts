import { NextResponse } from "next/server";
import crypto from "crypto";

export const dynamic = "force-dynamic";

// Public values are safe to embed; private key is loaded from env only
const KEY_X = "F_hD85QFz5w5SoNIAvbny6B8uyrNwDVETW4kX58bCnM";
const KEY_ID = "CzktAazZ50jeDEPyxO7uwh51Ir4qvIdC67bIkeIj-8Q";
const AUTHORITY = "miadowicz.com";

const JWKS = JSON.stringify({
  keys: [{ kty: "OKP", crv: "Ed25519", x: KEY_X }],
});

export async function GET() {
  const now = Math.floor(Date.now() / 1000);
  const expires = now + 300;

  const sigParams =
    `("@authority");tag="http-message-signatures-directory";` +
    `keyid="${KEY_ID}";created=${now};expires=${expires}`;

  // Signature base per RFC 9421 §2.5
  const sigBase = `"@authority": ${AUTHORITY}\n"@signature-params": ${sigParams}`;

  const headers: Record<string, string> = {
    "Content-Type": "application/http-message-signatures-directory+json",
  };

  const privKeyD = process.env.BOT_AUTH_PRIVATE_KEY_D;
  if (privKeyD) {
    const privKey = crypto.createPrivateKey({
      key: { kty: "OKP", crv: "Ed25519", x: KEY_X, d: privKeyD },
      format: "jwk",
    });
    const sig = crypto.sign(null, Buffer.from(sigBase), privKey);
    headers["Signature"] = `sig1=:${sig.toString("base64")}:`;
    headers["Signature-Input"] = `sig1=${sigParams}`;
  }

  return new NextResponse(JWKS, { headers });
}
