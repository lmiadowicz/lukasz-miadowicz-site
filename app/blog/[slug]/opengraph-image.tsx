import { ImageResponse } from "next/og";
import { getPost } from "@/lib/blog";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export async function generateImageMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  return [
    {
      id: slug,
      alt: post?.title ?? "Blog post - Łukasz Miądowicz",
    },
  ];
}

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);

  const title = post?.title ?? "AI Product Insights";
  const category = post?.category ?? "AI Strategy";
  const readTime = post?.readTime ?? "5 min read";

  return new ImageResponse(
    (
      <div
        style={{
          background: "rgb(10, 10, 15)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
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
            bottom: 0,
            right: "20%",
            width: "400px",
            height: "300px",
            background:
              "radial-gradient(ellipse, rgba(99,102,241,0.15) 0%, transparent 70%)",
          }}
        />

        {/* Top: logo + category */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
          }}
        >
          <span
            style={{
              fontSize: "22px",
              fontWeight: 700,
              color: "white",
              letterSpacing: "-0.02em",
            }}
          >
            miadowicz<span style={{ color: "#818cf8" }}>.</span>
          </span>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <div
              style={{
                padding: "6px 14px",
                borderRadius: "4px",
                background: "rgba(99,102,241,0.15)",
                border: "1px solid rgba(99,102,241,0.3)",
                color: "rgba(129,140,248,0.9)",
                fontSize: "13px",
                letterSpacing: "0.05em",
                fontFamily: "monospace",
              }}
            >
              {category}
            </div>
            <div
              style={{
                color: "rgba(161,161,170,0.5)",
                fontSize: "13px",
                fontFamily: "monospace",
              }}
            >
              {readTime}
            </div>
          </div>
        </div>

        {/* Main: title */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            flex: 1,
            justifyContent: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
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
              Article
            </span>
            <div
              style={{
                height: "1px",
                width: "40px",
                background: "rgba(99,102,241,0.4)",
              }}
            />
          </div>
          <div
            style={{
              fontSize: title.length > 60 ? "40px" : "52px",
              fontWeight: 800,
              color: "white",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              maxWidth: "900px",
            }}
          >
            {title}
          </div>
        </div>

        {/* Bottom: author */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "14px",
          }}
        >
          <div
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              background: "rgba(99,102,241,0.3)",
              border: "1px solid rgba(99,102,241,0.4)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "rgba(129,140,248,0.9)",
              fontSize: "18px",
              fontWeight: 700,
            }}
          >
            Ł
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
            <span style={{ color: "white", fontSize: "15px", fontWeight: 600 }}>
              Łukasz Miądowicz
            </span>
            <span
              style={{ color: "rgba(161,161,170,0.6)", fontSize: "13px" }}
            >
              AI Product Leader & AI Strategy Lead
            </span>
          </div>
          <div
            style={{
              marginLeft: "auto",
              color: "rgba(161,161,170,0.4)",
              fontSize: "13px",
              fontFamily: "monospace",
            }}
          >
            miadowicz.com/blog
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
