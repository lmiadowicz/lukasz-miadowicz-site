import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, ArrowRight } from "lucide-react";
import { Nav } from "@/components/Nav";
import {
  personSchema,
  generateBreadcrumbSchema,
  generateFAQSchema,
} from "@/lib/schema";

export const metadata: Metadata = {
  title: "AI Product Advisory & Consulting | Łukasz Miądowicz",
  description:
    "Strategic AI product advisory for product leaders and CTOs. Expert reviews, workshops, and ongoing consulting from an AI Product Leader with $80M ARR scaled and 98% task time reduction documented.",
  alternates: { canonical: "https://miadowicz.com/advisory" },
  openGraph: {
    type: "website",
    url: "https://miadowicz.com/advisory",
    title: "AI Product Advisory & Consulting | Łukasz Miądowicz",
    description:
      "Strategic AI product advisory for product leaders and CTOs. Expert reviews, workshops, and ongoing consulting from an AI Product Leader with $80M ARR scaled and 98% task time reduction documented.",
  },
};

const BASE_URL = "https://miadowicz.com";

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: "Home", item: BASE_URL },
  { name: "Advisory", item: `${BASE_URL}/advisory` },
]);

const professionalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${BASE_URL}/advisory#advisory-service`,
  name: "AI Product Advisory & Consulting — Łukasz Miądowicz",
  url: `${BASE_URL}/advisory`,
  description:
    "Strategic AI product advisory for product leaders and CTOs. Expert reviews, workshops, and ongoing consulting from an AI Product Leader with $80M ARR scaled and 98% task time reduction documented.",
  provider: { "@id": `${BASE_URL}/#person` },
  areaServed: { "@type": "AdministrativeArea", name: "Remote Worldwide" },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "AI Advisory Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Expert Advisory Session",
          description:
            "90-minute deep-dive on a specific AI product challenge with a prioritized action list.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "AI Product Workshop",
          description:
            "Half-day or full-day hands-on working session for your product and leadership team.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Ongoing Advisory Retainer",
          description:
            "Monthly strategic AI product thinking with async Slack access and roadmap review.",
        },
      },
    ],
  },
};

const faqItems = [
  {
    question: "Is this consulting or coaching?",
    answer:
      "Pure consulting. I bring a point of view based on what I've built and shipped. I'll tell you what I think is wrong, what I'd prioritize, and why. This is not a facilitated discovery process — it's a senior practitioner giving you their honest assessment.",
  },
  {
    question: "What companies do you work with?",
    answer:
      "Early-stage to Series B AI-native startups, scale-ups adding AI to existing B2B products, and enterprise teams launching internal AI initiatives. I work best with teams that have something to audit — a product, a roadmap, a team, or an architecture — and want a sharp second opinion.",
  },
  {
    question: "How do I know if I need fractional or advisory?",
    answer:
      "Advisory is right if your team has the product leadership capacity but needs strategic AI expertise on a specific question or for a specific initiative. Fractional is right if you need someone owning the AI roadmap end-to-end, week in and week out.",
  },
];

const faqSchema = generateFAQSchema(faqItems);

const services = [
  {
    label: "01 — Expert Advisory Session",
    duration: "90 min",
    headline: "A sharp point of view on your hardest AI product question.",
    body: "Deep-dive on a specific AI product challenge. I come prepared with an audit of your product, stack, and competitive position. You leave with a decision framework and a prioritized action list.",
    bestFor:
      "Specific strategic decisions, second opinions, pre-raise product reviews.",
  },
  {
    label: "02 — AI Product Workshop",
    duration: "Half-day or full-day",
    headline: "A working session that produces a framework your team can use immediately.",
    body: "Hands-on working session for your product and leadership team. Topics: AI use case discovery, the 6 levers framework, Agentic UX patterns, agent spec writing, or roadmap prioritization. Deliverable: a documented framework your team can apply immediately.",
    bestFor:
      "Leadership offsites, quarterly planning, and teams beginning an AI transformation.",
  },
  {
    label: "03 — Ongoing Advisory",
    duration: "Monthly retainer",
    headline: "Strategic AI product thinking on tap.",
    body: "Monthly session, async Slack access, review of roadmap, positioning, and architecture decisions. Best for seed-stage founders building AI-native products or product leaders navigating AI transformation.",
    bestFor:
      "Seed-stage founders building AI-native products or product leaders navigating AI transformation.",
  },
];

const expertiseTags = [
  "AI Product Strategy",
  "Agentic AI Architecture",
  "LLM Behavior Design",
  "Agentic UX",
  "AI Business Case & ROI",
  "AI Adoption & Change Management",
];

const stats = [
  { value: "$80M", label: "ARR scaled" },
  { value: "98%", label: "Task time reduction" },
  { value: "$191/task", label: "Net savings documented" },
  { value: "7+ years", label: "Building with LLMs" },
];

export default function AdvisoryPage() {
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
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(professionalServiceSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="min-h-screen bg-[oklch(0.1_0.005_265)]">
        <a href="#advisory-main" className="skip-link">
          Skip to main content
        </a>
        <Nav />

        <main id="advisory-main" role="main" tabIndex={-1}>
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
                <span className="text-zinc-300">Advisory</span>
              </nav>

              <div className="max-w-3xl">
                <div className="flex items-center gap-3 mb-5">
                  <span className="section-number">01 - Advisory</span>
                  <div className="h-px flex-1 max-w-16 bg-indigo-500/40" />
                </div>

                <h1
                  className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  AI Product Advisory{" "}
                  <span className="gradient-text">&amp; Consulting</span>
                </h1>

                <p className="text-xl text-zinc-400 font-medium mb-6">
                  Strategic thinking without the headcount.
                </p>

                <p className="text-zinc-400 text-lg leading-relaxed max-w-2xl">
                  For product leaders, CTOs, and founders who need a clear point
                  of view on AI strategy — not a six-month hiring process.
                </p>

                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                  <a
                    href="/#contact"
                    className="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-medium rounded-md transition-colors duration-200 inline-flex items-center gap-2"
                  >
                    Start with a Discovery Call <ArrowRight size={16} />
                  </a>
                  <Link
                    href="/fractional"
                    className="px-6 py-3 border border-white/10 hover:border-indigo-500/30 text-zinc-300 hover:text-white font-medium rounded-md transition-all duration-200 inline-flex items-center gap-2"
                  >
                    See Fractional AI PM <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* ── Services ── */}
          <section className="py-24 border-b border-white/5">
            <div className="container">
              <div className="max-w-xl mb-14">
                <div className="flex items-center gap-3 mb-4">
                  <span className="section-number">02 - Services</span>
                  <div className="h-px flex-1 max-w-16 bg-indigo-500/40" />
                </div>
                <h2
                  className="text-3xl md:text-4xl font-bold text-white"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Three ways to work together
                </h2>
              </div>

              <div className="grid md:grid-cols-3 gap-5">
                {services.map((s) => (
                  <div
                    key={s.label}
                    className="p-5 rounded-xl border border-white/8 bg-[oklch(0.14_0.008_265)] hover:border-indigo-500/30 transition-colors duration-200 flex flex-col gap-4"
                  >
                    <div>
                      <p className="text-xs font-mono text-indigo-400 tracking-widest uppercase mb-2">
                        {s.label}
                      </p>
                      <span className="inline-block text-[11px] font-mono px-2 py-0.5 rounded bg-indigo-600/15 border border-indigo-500/25 text-indigo-300 mb-3">
                        {s.duration}
                      </span>
                      <h3
                        className="text-lg font-bold text-white leading-snug mb-3"
                        style={{ fontFamily: "var(--font-display)" }}
                      >
                        {s.headline}
                      </h3>
                      <p className="text-zinc-400 text-sm leading-relaxed">{s.body}</p>
                    </div>
                    <div className="mt-auto pt-4 border-t border-white/5">
                      <p className="text-xs text-zinc-500 uppercase tracking-wide font-mono mb-1">
                        Best for
                      </p>
                      <p className="text-zinc-300 text-sm">{s.bestFor}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ── Expertise tags ── */}
          <section className="py-20 border-b border-white/5">
            <div className="container">
              <div className="max-w-xl mb-10">
                <div className="flex items-center gap-3 mb-4">
                  <span className="section-number">03 - Expertise</span>
                  <div className="h-px flex-1 max-w-16 bg-indigo-500/40" />
                </div>
                <h2
                  className="text-3xl md:text-4xl font-bold text-white"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Areas of expertise
                </h2>
              </div>

              <div className="flex flex-wrap gap-3">
                {expertiseTags.map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-2 rounded-full border border-indigo-500/25 bg-indigo-600/10 text-indigo-300 text-sm font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </section>

          {/* ── Results strip ── */}
          <section className="py-16 border-b border-white/5 bg-[oklch(0.12_0.006_265)]">
            <div className="container">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {stats.map((s) => (
                  <div key={s.label} className="text-center">
                    <div
                      className="text-3xl md:text-4xl font-bold text-indigo-400 mb-1"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {s.value}
                    </div>
                    <div className="text-sm text-zinc-400">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ── FAQ ── */}
          <section className="py-24 border-b border-white/5">
            <div className="container">
              <div className="max-w-xl mb-14">
                <div className="flex items-center gap-3 mb-4">
                  <span className="section-number">04 - FAQ</span>
                  <div className="h-px flex-1 max-w-16 bg-indigo-500/40" />
                </div>
                <h2
                  className="text-3xl md:text-4xl font-bold text-white"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Common questions
                </h2>
              </div>

              <div className="max-w-3xl space-y-4">
                {faqItems.map((item) => (
                  <div
                    key={item.question}
                    className="p-5 rounded-xl border border-white/8 bg-[oklch(0.14_0.008_265)] hover:border-indigo-500/30 transition-colors duration-200"
                  >
                    <h3
                      className="text-white font-semibold text-lg mb-3"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {item.question}
                    </h3>
                    <p className="text-zinc-400 leading-relaxed text-sm">{item.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ── CTA ── */}
          <section className="py-24">
            <div className="container">
              <div className="max-w-2xl mx-auto text-center">
                <h2
                  className="text-3xl md:text-4xl font-bold text-white mb-4"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Ready to bring in a sharp second opinion?
                </h2>
                <p className="text-zinc-400 mb-8 text-lg">
                  Start with a 30-minute discovery call — no pitch deck required.
                </p>
                <a
                  href="/#contact"
                  className="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-medium rounded-md transition-colors duration-200 inline-flex items-center gap-2"
                >
                  Start with a Discovery Call <ArrowRight size={16} />
                </a>

                <p className="mt-8 text-sm text-zinc-500">
                  Looking for more hands-on AI product leadership?{" "}
                  <Link
                    href="/fractional"
                    className="text-indigo-400 hover:text-indigo-300 transition-colors"
                  >
                    See the Fractional AI PM offering →
                  </Link>
                </p>
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
