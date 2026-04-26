// Minimal MCP endpoint stub (Streamable HTTP transport).
// Returns a JSON-RPC 2.0 error — full server implementation pending.
export async function POST() {
  return Response.json(
    {
      jsonrpc: "2.0",
      id: null,
      error: {
        code: -32601,
        message: "MCP server not yet implemented.",
      },
    },
    { status: 200 }
  );
}
