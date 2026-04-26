// Stub — this site has no protected APIs requiring authorization.
export function GET() {
  return Response.json(
    { error: "not_supported", error_description: "This site has no protected APIs." },
    { status: 501 }
  );
}
