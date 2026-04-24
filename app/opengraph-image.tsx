import { ImageResponse } from "next/og";

export const alt = "Łukasz Miądowicz - AI Product Leader & AI Strategy Lead";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "rgb(10, 10, 15)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          padding: "60px 70px",
          position: "relative",
          fontFamily: "sans-serif",
        }}
      >
        {/* Grid dot pattern */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />

        {/* Indigo glow */}
        <div
          style={{
            position: "absolute",
            top: "20%",
            left: "60%",
            width: "500px",
            height: "400px",
            background:
              "radial-gradient(ellipse, rgba(99,102,241,0.18) 0%, transparent 70%)",
          }}
        />

        {/* Top badge */}
        <div
          style={{
            position: "absolute",
            top: "52px",
            left: "70px",
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <div
            style={{
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              background: "#22c55e",
            }}
          />
          <span
            style={{
              color: "rgba(161,161,170,0.7)",
              fontSize: "13px",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
            }}
          >
            Available for new engagements
          </span>
        </div>

        {/* Logo */}
        <div
          style={{
            position: "absolute",
            top: "52px",
            right: "70px",
            display: "flex",
            alignItems: "baseline",
            fontSize: "24px",
            fontWeight: 700,
            color: "white",
            letterSpacing: "-0.02em",
          }}
        >
          <span>miadowicz</span>
          <span style={{ color: "#818cf8" }}>.</span>
        </div>

        {/* Main content */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              marginBottom: "4px",
            }}
          >
            <span
              style={{
                color: "#818cf8",
                fontSize: "13px",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                fontFamily: "monospace",
              }}
            >
              01 — Hello
            </span>
            <div
              style={{
                height: "1px",
                width: "48px",
                background: "rgba(99,102,241,0.4)",
              }}
            />
          </div>

          <div
            style={{
              fontSize: "62px",
              fontWeight: 800,
              color: "white",
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
            }}
          >
            Łukasz Miądowicz
          </div>

          <div
            style={{
              fontSize: "26px",
              fontWeight: 500,
              background:
                "linear-gradient(135deg, rgb(129,140,248), rgb(167,139,250))",
              backgroundClip: "text",
              color: "transparent",
              letterSpacing: "-0.01em",
            }}
          >
            AI Product Leader · AI Strategy Lead
          </div>

          <div
            style={{
              fontSize: "17px",
              color: "rgba(161,161,170,0.8)",
              marginTop: "4px",
              maxWidth: "700px",
              lineHeight: 1.5,
            }}
          >
            $80M ARR scaled · 98% task time reduction · PhD Quantum Physics ·
            Ex-Google SWE
          </div>
        </div>

        {/* Bottom tags */}
        <div
          style={{
            position: "absolute",
            bottom: "52px",
            right: "70px",
            display: "flex",
            gap: "10px",
          }}
        >
          {["Agentic AI", "Claude Code", "0→1"].map((tag) => (
            <div
              key={tag}
              style={{
                padding: "4px 12px",
                borderRadius: "4px",
                background: "rgba(99,102,241,0.15)",
                border: "1px solid rgba(99,102,241,0.3)",
                color: "rgba(129,140,248,0.9)",
                fontSize: "12px",
                letterSpacing: "0.05em",
                fontFamily: "monospace",
              }}
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}
