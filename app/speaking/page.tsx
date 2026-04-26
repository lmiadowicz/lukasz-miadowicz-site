import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, ArrowRight } from "lucide-react";
import { Nav } from "@/components/Nav";
import {
  personSchema,
  generateBreadcrumbSchema,
} from "@/lib/schema";

export const metadata: Metadata = {
  title: "Speaking & Media | Łukasz Miądowicz — AI Product Leader",
  description:
    "Book Łukasz Miądowicz for keynotes, panel discussions, and podcast appearances on AI product management, agentic AI, agentic UX, and the future of AI-native products.",
  alternates: { canonical: "https://miadowicz.com/speaking" },
  openGraph: {
    type: "website",
    url: "https://miadowicz.com/speaking",
    title: "Speaking & Media | Łukasz Miądowicz — AI Product Leader",
    description:
      "Book Łukasz Miądowicz for keynotes, panel discussions, and podcast appearances on AI product management, agentic AI, agentic UX, and the future of AI-native products.",
  },
};

const BASE_URL = "https://miadowicz.com";

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: "Home", item: BASE_URL },
  { name: "Speaking", item: `${BASE_URL}/speaking` },
]);

const speakerSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${BASE_URL}/#person`,
  name: "Łukasz Miądowicz",
  url: BASE_URL,
  jobTitle: "AI Product Leader & AI Strategy Lead",
  description:
    "Speaker on agentic AI, AI product strategy, agentic UX, and the frameworks developed from shipping AI-native products.",
  knowsAbout: [
    "Agentic AI",
    "AI Product Strategy",
    "Agentic UX",
    "LLM Behavior Design",
    "Agent Harness Architecture",
    "AI Competitive Strategy",
    "AI Product Leadership",
  ],
  sameAs: [
    "https://www.linkedin.com/in/lukaszmiadowicz/",
    "https://x.com/miadowicz",
  ],
};

const topics = [
  {
    slug: "age-of-amplification",
    title: "The Age of Amplification",
    description:
      "AI isn't replacing work; it's multiplying it. What the next 3 years look like from first principles.",
    blogSlug: "the-age-of-amplification-ai-predictions-2030-first-principles",
  },
  {
    slug: "agentic-ux",
    title: "Agentic UX",
    description:
      "How product design changes when AI agents are the primary user. Four patterns from Notion, Salesforce, and Cursor.",
    blogSlug: "agentic-ux-designing-in-product-experiences-for-ai-agents",
  },
  {
    slug: "agent-harness",
    title: "What Is an Agent Harness",
    description:
      "The infrastructure layer 90% of AI builders skip and why it breaks production every time.",
    blogSlug: "what-is-agent-harness",
  },
  {
    slug: "feature-moat",
    title: "The Feature Moat Is Dead",
    description:
      "First principles of competitive advantage in the AI era: the Product Moat Stack and Distribution Flywheel.",
    blogSlug: "the-feature-moat-is-dead-building-durable-products-in-the-ai-era",
  },
  {
    slug: "hire-ai-pm",
    title: "How to Hire and Evaluate AI Product Leaders",
    description:
      "What separates AI PMs who build reliable systems from those who build impressive demos.",
    blogSlug: null,
  },
];

const formats = [
  {
    label: "Keynote",
    duration: "45–60 min",
    description:
      "A structured talk with original frameworks and documented case studies. Built for conference main stages and company all-hands.",
  },
  {
    label: "Panel / Q&A",
    duration: "30–45 min",
    description:
      "Opinionated discussion format. Best combined with other AI practitioners or product leaders.",
  },
  {
    label: "Podcast / Interview",
    duration: "30–60 min",
    description:
      "Conversational deep-dive on AI product leadership, agentic systems, or the business of AI. No prepared script needed.",
  },
];

const expectations = [
  "Always original material, grounded in documented case studies from real AI products I've shipped.",
  "Opinionated takes, not safe consensus. I'll defend a position.",
  "Prepared with research specific to your audience, industry, and maturity level.",
];

const furtherReading = [
  {
    title: "Agentic UX: Designing In-Product Experiences for AI Agents",
    href: "/blog/agentic-ux-designing-in-product-experiences-for-ai-agents",
  },
  {
    title: "The Feature Moat Is Dead: Building Durable Products in the AI Era",
    href: "/blog/the-feature-moat-is-dead-building-durable-products-in-the-ai-era",
  },
  {
    title: "The Age of Amplification: AI Predictions to 2030 from First Principles",
    href: "/blog/the-age-of-amplification-ai-predictions-2030-first-principles",
  },
  {
    title: "What Is an Agent Harness — and Why Most AI Systems Break Without One",
    href: "/blog/what-is-agent-harness",
  },
];

export default function SpeakingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(speakerSchema) }}
      />

      <div className="min-h-screen bg-[oklch(0.1_0.005_265)]">
        <a href="#speaking-main" className="skip-link">
          Skip to main content
        </a>
        <Nav />

        <main id="speaking-main" role="main" tabIndex={-1}>
          {/* ── Hero ── */}
          <section className="pt-32 pb-20 border-b border-white/5 relative overflow-hidden">
            <div
              className="pointer-events-none absolute inset-0 opacity-30"
              aria-hidden="true"
              style={{
                background:
                  "radial-gradient(ellipse 70% 50% at 50% 0%, oklch(0.62 0.22 264 / 18%), transparent)",
              }}
            />
            <div className="container relative">
              <nav
                aria-label="Breadcrumb"
                className="flex items-center gap-2 text-xs text-zinc-500 mb-8"
              >
                <Link href="/" className="hover:text-zinc-300 transition-colors">
                  Home
                </Link>
                <ChevronRight size={12} />
                <span className="text-zinc-300">Speaking</span>
              </nav>

              <div className="max-w-3xl">
                <div className="flex items-center gap-3 mb-5">
                  <span className="section-number">01 - Speaking</span>
                  <div className="h-px flex-1 max-w-16 bg-indigo-500/40" />
                </div>

                <h1
                  className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Speaking <span className="gradient-text">&amp; Media</span>
                </h1>

                <p className="text-xl text-zinc-400 font-medium mb-6">
                  AI product leadership for the people building the future.
                </p>

                <p className="text-zinc-400 text-lg leading-relaxed max-w-2xl">
                  I speak on agentic AI, AI product strategy, agentic UX, and
                  the frameworks I've developed from shipping AI-native products.
                  Available for keynotes, panels, podcasts, and executive
                  workshops.
                </p>

                <div className="mt-8">
                  <a
                    href="/#contact"
                    className="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-medium rounded-md transition-colors duration-200 inline-flex items-center gap-2"
                  >
                    Invite me to speak <ArrowRight size={16} />
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* ── Topics ── */}
          <section className="py-24 border-b border-white/5">
            <div className="container">
              <div className="max-w-xl mb-14">
                <div className="flex items-center gap-3 mb-4">
                  <span className="section-number">02 - Topics</span>
                  <div className="h-px flex-1 max-w-16 bg-indigo-500/40" />
                </div>
                <h2
                  className="text-3xl md:text-4xl font-bold text-white"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Topics I speak on
                </h2>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {topics.map((topic, i) => (
                  <div
                    key={topic.slug}
                    className="p-5 rounded-xl border border-white/8 bg-[oklch(0.14_0.008_265)] hover:border-indigo-500/30 transition-colors duration-200 flex flex-col gap-3"
                  >
                    <span className="text-xs font-mono text-indigo-400 tracking-widest uppercase">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3
                      className="text-white font-bold text-lg leading-snug"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {topic.title}
                    </h3>
                    <p className="text-zinc-400 text-sm leading-relaxed flex-1">
                      {topic.description}
                    </p>
                    {topic.blogSlug && (
                      <Link
                        href={`/blog/${topic.blogSlug}`}
                        className="text-xs text-indigo-400 hover:text-indigo-300 transition-colors flex items-center gap-1 mt-auto"
                      >
                        Read the article <ArrowRight size={11} />
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ── Formats ── */}
          <section className="py-24 border-b border-white/5">
            <div className="container">
              <div className="max-w-xl mb-14">
                <div className="flex items-center gap-3 mb-4">
                  <span className="section-number">03 - Formats</span>
                  <div className="h-px flex-1 max-w-16 bg-indigo-500/40" />
                </div>
                <h2
                  className="text-3xl md:text-4xl font-bold text-white"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Formats
                </h2>
              </div>

              <div className="grid md:grid-cols-3 gap-5">
                {formats.map((f) => (
                  <div
                    key={f.label}
                    className="p-5 rounded-xl border border-white/8 bg-[oklch(0.14_0.008_265)] hover:border-indigo-500/30 transition-colors duration-200"
                  >
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <h3
                        className="text-white font-bold text-lg"
                        style={{ fontFamily: "var(--font-display)" }}
                      >
                        {f.label}
                      </h3>
                      <span className="shrink-0 text-[11px] font-mono px-2 py-0.5 rounded bg-indigo-600/15 border border-indigo-500/25 text-indigo-300">
                        {f.duration}
                      </span>
                    </div>
                    <p className="text-zinc-400 text-sm leading-relaxed">
                      {f.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ── What to expect ── */}
          <section className="py-24 border-b border-white/5 bg-[oklch(0.12_0.006_265)]">
            <div className="container">
              <div className="max-w-3xl mx-auto">
                <div className="flex items-center gap-3 mb-4">
                  <span className="section-number">04 - What to expect</span>
                  <div className="h-px flex-1 max-w-16 bg-indigo-500/40" />
                </div>
                <h2
                  className="text-3xl md:text-4xl font-bold text-white mb-10"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  What to expect
                </h2>

                <ul className="space-y-5" role="list">
                  {expectations.map((item) => (
                    <li key={item} className="flex items-start gap-4">
                      <span
                        className="shrink-0 mt-1 w-5 h-5 rounded-full bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center"
                        aria-hidden="true"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                      </span>
                      <p className="text-zinc-300 leading-relaxed">{item}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* ── Past appearances ── */}
          <section className="py-20 border-b border-white/5">
            <div className="container">
              <div className="max-w-2xl">
                <div className="flex items-center gap-3 mb-4">
                  <span className="section-number">05 - Appearances</span>
                  <div className="h-px flex-1 max-w-16 bg-indigo-500/40" />
                </div>
                <h2
                  className="text-3xl font-bold text-white mb-4"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Past appearances
                </h2>
                <p className="text-zinc-400 leading-relaxed">
                  I've spoken at{" "}
                  <span className="text-indigo-400 font-medium">Gamecamp.io</span>{" "}
                  and contributed to community conversations on AI product
                  leadership and agentic systems. Event organizers are welcome
                  to reach out — I'm happy to discuss topic fit, audience, and
                  format.
                </p>
              </div>
            </div>
          </section>

          {/* ── CTA ── */}
          <section className="py-24 border-b border-white/5">
            <div className="container">
              <div className="max-w-2xl mx-auto">
                <div
                  className="p-8 md:p-10 rounded-xl border border-white/8 bg-[oklch(0.14_0.008_265)] hover:border-indigo-500/30 transition-colors duration-200 text-center"
                >
                  <h2
                    className="text-3xl font-bold text-white mb-3"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    Invite me to speak
                  </h2>
                  <p className="text-zinc-400 mb-6 leading-relaxed">
                    Include your event date, format, audience, and topic
                    interest. I'll respond within 48 hours.
                  </p>
                  <a
                    href="/#contact"
                    className="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-medium rounded-md transition-colors duration-200 inline-flex items-center gap-2"
                  >
                    Get in touch <ArrowRight size={16} />
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* ── Further reading ── */}
          <section className="py-20">
            <div className="container">
              <div className="max-w-3xl">
                <div className="flex items-center gap-3 mb-4">
                  <span className="section-number">06 - Further reading</span>
                  <div className="h-px flex-1 max-w-16 bg-indigo-500/40" />
                </div>
                <h2
                  className="text-2xl font-bold text-white mb-8"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Go deeper on the topics
                </h2>

                <ul className="space-y-3" role="list">
                  {furtherReading.map((post) => (
                    <li key={post.href}>
                      <Link
                        href={post.href}
                        className="group flex items-center justify-between gap-4 py-4 px-5 rounded-xl border border-white/8 bg-[oklch(0.14_0.008_265)] hover:border-indigo-500/30 transition-colors duration-200"
                      >
                        <span className="text-zinc-300 group-hover:text-white transition-colors text-sm font-medium">
                          {post.title}
                        </span>
                        <ArrowRight
                          size={14}
                          className="shrink-0 text-zinc-600 group-hover:text-indigo-400 transition-colors"
                          aria-hidden="true"
                        />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        </main>

        <footer role="contentinfo" className="border-t border-white/5 py-8">
          <div className="container flex items-center justify-between text-xs text-zinc-400">
            <span>© {new Date().getFullYear()} Łukasz Miądowicz</span>
            <Link href="/" className="hover:text-zinc-300 transition-colors">
              ← Back to home
            </Link>
          </div>
        </footer>
      </div>
    </>
  );
}
