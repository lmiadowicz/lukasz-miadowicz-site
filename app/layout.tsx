import type { Metadata } from "next";
import { Inter, Syne, Fira_Code } from "next/font/google";
import { Providers } from "@/components/Providers";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-fira-code",
  display: "swap",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://miadowicz.com"),
  title: {
    default: "Łukasz Miądowicz — AI Product Leader & Strategy",
    template: "%s | Łukasz Miądowicz",
  },
  description:
    "I help companies grow revenue and move faster with AI. AI Product Leader & Head of AI Product. $80M ARR scaled. 98% task time reduction. PhD Quantum Physics. Ex-Google SWE.",
  keywords: [
    "AI Product Leader", "Head of AI Product", "AI Strategy Lead", "AI Adoption Consultant",
    "Senior AI PM", "AI Product Manager", "Multi-Agent Systems",
    "Agentic AI", "LLM Agent Builder", "Claude Code", "Łukasz Miądowicz", "miadowicz",
    "how should AI behave", "AI product strategy", "AI roadmap", "AI system architecture",
  ],
  authors: [{ name: "Łukasz Miądowicz", url: "https://miadowicz.com" }],
  creator: "Łukasz Miądowicz",
  publisher: "miadowicz.",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/manifest.json",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://miadowicz.com",
    siteName: "miadowicz.",
    title: "Łukasz Miądowicz — AI Product Leader & Strategy",
    description: "I help companies grow revenue and move faster with AI. $80M ARR scaled. 98% task time reduction. PhD Quantum Physics. Ex-Google SWE.",
    images: [
      {
        url: "https://miadowicz.com/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Łukasz Miądowicz — AI Product Leader & Head of AI Product",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@miadowicz",
    creator: "@miadowicz",
    title: "Łukasz Miądowicz — AI Product Leader & Strategy",
    description: "I help companies grow revenue and move faster with AI. $80M ARR scaled. 98% task time reduction. PhD Quantum Physics.",
    images: ["https://miadowicz.com/opengraph-image"],
  },
  alternates: {
    canonical: "https://miadowicz.com",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${syne.variable} ${firaCode.variable} dark`}
    >
      <head>
        <link rel="preconnect" href="https://d2xsxph8kpxj0f.cloudfront.net" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://d36hbw14aib5lz.cloudfront.net" crossOrigin="anonymous" />
        <link rel="llms-txt" href="https://miadowicz.com/llms.txt" />
        <link rel="alternate" type="text/plain" title="LLMs Full Profile" href="https://miadowicz.com/llms-full.txt" />
        <meta name="llms-txt" content="https://miadowicz.com/llms.txt" />
      </head>
      <body><Providers>{children}</Providers></body>
    </html>
  );
}
