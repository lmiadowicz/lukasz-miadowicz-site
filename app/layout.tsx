import type { Metadata } from "next";
import { Inter, Syne, Fira_Code } from "next/font/google";
import { Providers } from "@/components/Providers";
import "./globals.css";

const WEBMCP_REGISTER_SCRIPT = `(function(){
  var ctx=navigator.modelContext;
  if(!ctx||typeof ctx.registerTool!=="function")return;
  var tools=[
    {name:"navigate_to_section",title:"Navigate to Section",
     description:"Navigate to a section of miadowicz.com: about, blog, books, portfolio, contact, or glossary",
     inputSchema:{type:"object",properties:{section:{type:"string",enum:["about","blog","books","portfolio","contact","glossary"]}},required:["section"]},
     execute:function(i){var m={about:"/#about",blog:"/blog",books:"/books",portfolio:"/#portfolio",contact:"/#contact",glossary:"/glossary"};window.location.href=m[i.section]||"/";return Promise.resolve({content:[{type:"text",text:"Navigated to "+i.section}]});}},
    {name:"get_site_overview",title:"Get Site Overview",
     description:"Returns machine-readable overview of Łukasz Miądowicz's professional background",
     inputSchema:{type:"object",properties:{}},
     execute:function(){return fetch("/llms.txt").then(function(r){return r.text();}).then(function(t){return{content:[{type:"text",text:t}]};});}},
    {name:"get_content_list",title:"Get Content List",
     description:"Returns list of published blog posts and books on the site",
     inputSchema:{type:"object",properties:{type:{type:"string",enum:["blog","books","all"]}}},
     execute:function(i){return fetch("/sitemap.xml").then(function(r){return r.text();}).then(function(x){var u=Array.from(x.matchAll(/<loc>(.*?)<\\/loc>/g)).map(function(m){return m[1];});var t=(i&&i.type)||"all";if(t!=="all")u=u.filter(function(s){return s.indexOf("/"+t+"/")>-1;});return{content:[{type:"text",text:JSON.stringify({urls:u,count:u.length})}]};});}}
  ];
  tools.forEach(function(tool){try{ctx.registerTool(tool);}catch(e){}});
})();`;

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
    default: "Łukasz Miądowicz - AI Product Leader & Strategy",
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
    title: "Łukasz Miądowicz - AI Product Leader & Strategy",
    description: "I help companies grow revenue and move faster with AI. $80M ARR scaled. 98% task time reduction. PhD Quantum Physics. Ex-Google SWE.",
    images: [
      {
        url: "https://miadowicz.com/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Łukasz Miądowicz - AI Product Leader & Head of AI Product",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@miadowicz",
    creator: "@miadowicz",
    title: "Łukasz Miądowicz - AI Product Leader & Strategy",
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
        {/* WebMCP: polyfill creates navigator.modelContext in any browser, then register tools */}
        <script dangerouslySetInnerHTML={{ __html: "window.__webMCPPolyfillOptions={installTestingShim:'if-missing'};" }} />
        <script src="/webmcp-polyfill.js" />
        <script dangerouslySetInnerHTML={{ __html: WEBMCP_REGISTER_SCRIPT }} />
      </head>
      <body><Providers>{children}</Providers></body>
    </html>
  );
}
