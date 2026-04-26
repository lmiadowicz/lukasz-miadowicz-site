import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight, ArrowRight, Globe, Github } from "lucide-react";
import { Nav } from "@/components/Nav";
import { personSchema, generateBreadcrumbSchema } from "@/lib/schema";

const BASE_URL = "https://miadowicz.com";
const CASE_STUDY_IMG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663586308671/LgBonsnnKaw8XvNGJedAgJ/case-study-ai-PWeyoXeHJPErL2jefgYazP.webp";

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: "Home", item: BASE_URL },
  { name: "Portfolio", item: `${BASE_URL}/portfolio` },
]);

export const metadata: Metadata = {
  title: "Portfolio — AI Products Built & Shipped | Łukasz Miądowicz",
  description:
    "AI products, tools, and case studies from Łukasz Miądowicz — AI Product Leader. Agentic systems, semantic search, LLM pipelines, and published frameworks with documented outcomes.",
  alternates: { canonical: `${BASE_URL}/portfolio` },
  openGraph: {
    type: "website",
    url: `${BASE_URL}/portfolio`,
    title: "Portfolio — AI Products Built & Shipped | Łukasz Miądowicz",
    description:
      "AI products and case studies with documented outcomes: 98% task time reduction, +80% conversion, 3× capacity increase.",
  },
};

type Status = "live" | "writing" | "soon";

const STATUS_STYLES: Record<Status, string> = {
  live: "bg-emerald-500/15 text-emerald-400 border-emerald-500/30",
  writing: "bg-blue-500/15 text-blue-400 border-blue-500/30",
  soon: "bg-zinc-500/15 text-zinc-400 border-zinc-500/30",
};
const STATUS_LABELS: Record<Status, string> = { live: "Live", writing: "Published", soon: "Coming soon" };

interface PortfolioItem {
  title: string;
  desc: string;
  tags: string[];
  status: Status;
  links: { github?: string; demo?: string };
  metrics: string;
}

const portfolio: PortfolioItem[] = [
  {
    title: "appspeaker.io",
    desc: "AI Agent for Google Play App Reviews. Automatically monitors, analyzes, and responds to user reviews using LLMs. Built end-to-end with Claude Agent API.",
    tags: ["Claude Agent API", "AI Agent", "NLP", "Google Play", "Python"],
    status: "live",
    links: { demo: "https://appspeaker.io" },
    metrics: "Automated review intelligence",
  },
  {
    title: "Semantic Travel Search",
    desc: "NLP-powered search engine for Qtravel.ai. Intent detection, semantic matching, and personalized recommendations.",
    tags: ["NLP", "Semantic Search", "Python", "Qtravel.ai"],
    status: "live",
    links: { demo: "https://qtravel.ai" },
    metrics: "Semantic search at scale",
  },
  {
    title: "AI Agentic Playbook",
    desc: "End-to-end playbook for building 0→1 AI-native products from first principles. 98% task time reduction documented.",
    tags: ["Agentic AI", "0→1", "Multi-Agent", "HITL", "Playbook"],
    status: "writing",
    links: { demo: "/blog/the-agentic-ai-playbook-building-0-to-1-products-from-first-principles" },
    metrics: "98% task time reduction",
  },
  {
    title: "AI Decision Framework for PMs",
    desc: "A structured decision tree for product managers: when to use AI, which architecture to choose, and how to evaluate build vs. buy vs. fine-tune.",
    tags: ["Product Strategy", "Framework", "AI", "Open Source"],
    status: "writing",
    links: { demo: "/blog/when-should-you-use-ai-decision-framework-for-pms" },
    metrics: "Published article",
  },
  {
    title: "Your project here",
    desc: "Coming soon — a Claude Code experiment, open-source tool, or case study from current work.",
    tags: ["Coming Soon"],
    status: "soon",
    links: {},
    metrics: "",
  },
  {
    title: "Your project here",
    desc: "Coming soon — a RAG-powered tool, growth experiment write-up, or enterprise feature case study.",
    tags: ["Coming Soon"],
    status: "soon",
    links: {},
    metrics: "",
  },
];

const cases = [
  {
    tag: "AI Travel Platform · 0→1",
    company: "Qtravel.ai",
    title: "From 4-Hour Proposals to 5 Minutes — 3× Capacity, +80% Conversion",
    desc: "Travel agents were spending 4 hours per proposal. I found the niche: semantic search and AI personalization that no competitor had built yet. Designed the system, led cross-functional product and engineering, and shipped it. Proposal creation dropped from 4 hours to 5 minutes of human review. Capacity tripled. Conversion increased 80%. Net savings: $191 per task · 1.3-year payback period.",
    metrics: [
      { value: "+80%", label: "Conversion increase" },
      { value: "98%", label: "Task time reduction" },
      { value: "3×", label: "Capacity increase" },
    ],
    img: CASE_STUDY_IMG,
    tags: ["Multi-Agent", "LLMs", "Semantic Search", "HITL", "0→1"],
  },
  {
    tag: "Applied AI · SaaS · 2024–Present",
    company: "ButterCMS (Tiugo)",
    title: "0 to Alpha in Under 3 Months — 40% Conversion Lift, Executive Buy-In",
    desc: "Content teams were losing time to manual CMS workflows. I identified the opportunity, built the business case, and personally coded the prototype end-to-end using Claude Code. Alpha adoption signals secured a full executive strategy shift. 40% conversion increase, 30% reduction in content creation time.",
    metrics: [
      { value: "+40%", label: "Conversion increase" },
      { value: "-30%", label: "Content creation time" },
      { value: "<3mo", label: "0 to Alpha" },
    ],
    img: null,
    tags: ["Claude Code", "AI Agents", "LLM", "SaaS", "Applied AI"],
  },
];

export default function PortfolioPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />

      <div className="min-h-screen bg-[oklch(0.1_0.005_265)]">
        <a href="#portfolio-main" className="skip-link">Skip to main content</a>
        <Nav />

        <main id="portfolio-main" role="main" tabIndex={-1}>
          {/* Hero */}
          <section className="pt-32 pb-20 border-b border-white/5 relative overflow-hidden">
            <div
              className="pointer-events-none absolute inset-0 opacity-30"
              aria-hidden="true"
              style={{ background: "radial-gradient(ellipse 70% 50% at 50% 0%, oklch(0.62 0.22 264 / 18%), transparent)" }}
            />
            <div className="container relative">
              <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-zinc-500 mb-8">
                <Link href="/" className="hover:text-zinc-300 transition-colors">Home</Link>
                <ChevronRight size={12} />
                <span className="text-zinc-300">Portfolio</span>
              </nav>

              <div className="max-w-3xl">
                <div className="flex items-center gap-3 mb-5">
                  <span className="section-number">01 - Portfolio</span>
                  <div className="h-px flex-1 max-w-16 bg-indigo-500/40" aria-hidden="true" />
                </div>

                <h1
                  className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Things I&apos;ve <span className="gradient-text">built &amp; shipped.</span>
                </h1>

                <p className="text-xl text-zinc-400 font-medium mb-6">
                  AI products, open-source tools, and frameworks — with documented outcomes.
                </p>

                <p className="text-zinc-400 text-lg leading-relaxed max-w-2xl">
                  Every project here started as a working prototype I built myself before committing engineering resources. The case studies below include real metrics — not estimates, not rounding.
                </p>
              </div>
            </div>
          </section>

          {/* Portfolio grid */}
          <section aria-labelledby="projects-heading" className="py-24 border-b border-white/5">
            <div className="container">
              <div className="flex items-center gap-3 mb-4">
                <span className="section-number">02 - Projects</span>
                <div className="h-px flex-1 max-w-16 bg-indigo-500/40" aria-hidden="true" />
              </div>
              <h2
                id="projects-heading"
                className="text-3xl md:text-4xl font-bold text-white mb-12 leading-tight"
                style={{ fontFamily: "var(--font-display)" }}
              >
                A mix of tools, frameworks,<br />and production products.
              </h2>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                {portfolio.map((p, i) => (
                  <div
                    key={p.title + i}
                    className={`flex flex-col p-6 rounded-xl border bg-[oklch(0.14_0.008_265)] transition-colors ${
                      p.status === "soon"
                        ? "border-white/5 opacity-50"
                        : "border-white/8 hover:border-indigo-500/30"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-2 mb-3">
                      <h3
                        className="text-base font-semibold text-white leading-snug"
                        style={{ fontFamily: "var(--font-display)" }}
                      >
                        {p.title}
                      </h3>
                      <span
                        className={`shrink-0 text-xs px-2 py-0.5 rounded-full border font-mono ${STATUS_STYLES[p.status]}`}
                      >
                        {STATUS_LABELS[p.status]}
                      </span>
                    </div>
                    <p className="text-zinc-400 text-sm leading-relaxed mb-4 flex-1">{p.desc}</p>
                    {p.metrics && (
                      <div className="text-indigo-400 text-sm font-medium mb-4 font-mono">→ {p.metrics}</div>
                    )}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {p.tags.map((t) => <span key={t} className="tech-tag">{t}</span>)}
                    </div>
                    {p.status !== "soon" && (
                      <div className="flex items-center gap-3 pt-3 border-t border-white/5">
                        {p.links.github && (
                          <a
                            href={p.links.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5 text-xs text-zinc-500 hover:text-zinc-300 transition-colors"
                          >
                            <Github size={13} /> Code
                          </a>
                        )}
                        {p.links.demo && (
                          <a
                            href={p.links.demo}
                            target={p.links.demo.startsWith("http") ? "_blank" : undefined}
                            rel={p.links.demo.startsWith("http") ? "noopener noreferrer" : undefined}
                            className="flex items-center gap-1.5 text-xs text-zinc-500 hover:text-indigo-400 transition-colors"
                          >
                            <Globe size={13} /> View project
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-8 p-6 rounded-xl border border-dashed border-indigo-500/30 bg-indigo-600/5 text-center">
                <p className="text-zinc-400 text-sm mb-3">
                  <span className="text-indigo-400 font-medium">More projects coming.</span> Currently building open-source AI tools and agent harness frameworks.
                </p>
                <a
                  href="/#contact"
                  className="inline-flex items-center gap-2 text-sm text-indigo-400 hover:text-indigo-300 transition-colors"
                >
                  Let&apos;s build something together <ArrowRight size={13} />
                </a>
              </div>
            </div>
          </section>

          {/* Case studies */}
          <section aria-labelledby="cases-heading" className="py-24 border-b border-white/5 bg-[oklch(0.12_0.006_265)]">
            <div className="container">
              <div className="flex items-center gap-3 mb-4">
                <span className="section-number">03 - Case Studies</span>
                <div className="h-px flex-1 max-w-16 bg-indigo-500/40" aria-hidden="true" />
              </div>
              <h2
                id="cases-heading"
                className="text-3xl md:text-4xl font-bold text-white mb-12 leading-tight"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Work that <span className="gradient-text">moved the needle.</span>
              </h2>

              <div className="space-y-6">
                {cases.map((c) => (
                  <article
                    key={c.company}
                    className="rounded-2xl border border-white/8 bg-[oklch(0.13_0.007_265)] overflow-hidden hover:border-indigo-500/25 transition-colors"
                  >
                    <div className="grid md:grid-cols-2 gap-0">
                      <div className="p-8 md:p-10">
                        <div className="flex items-center gap-2 mb-3">
                          <span className="tech-tag">{c.tag}</span>
                        </div>
                        <h3
                          className="text-2xl font-bold text-white mb-3 leading-snug"
                          style={{ fontFamily: "var(--font-display)" }}
                        >
                          {c.title}
                        </h3>
                        <p className="text-zinc-400 text-sm leading-relaxed mb-6">{c.desc}</p>
                        <div className="grid grid-cols-3 gap-4 mb-6">
                          {c.metrics.map((m) => (
                            <div key={m.label}>
                              <div
                                className="text-2xl font-bold text-indigo-400"
                                style={{ fontFamily: "var(--font-display)" }}
                              >
                                {m.value}
                              </div>
                              <div className="text-xs text-zinc-500">{m.label}</div>
                            </div>
                          ))}
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {c.tags.map((t) => <span key={t} className="tech-tag">{t}</span>)}
                        </div>
                      </div>

                      <div className="relative min-h-48 md:min-h-0 bg-[oklch(0.11_0.006_265)]">
                        {c.img ? (
                          <Image src={c.img} alt={c.title} fill className="object-cover opacity-80" loading="lazy" />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center p-8">
                            <div className="text-center">
                              <div
                                className="text-6xl font-bold gradient-text mb-2"
                                style={{ fontFamily: "var(--font-display)" }}
                              >
                                20
                              </div>
                              <div className="text-zinc-500 text-sm">enterprises in Alpha</div>
                              <div className="text-indigo-400 text-sm font-medium mt-2">NPS 99 · Alpha cohort</div>
                            </div>
                          </div>
                        )}
                        <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.13_0.007_265)] via-transparent to-transparent md:block hidden" />
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>

          {/* CTA */}
          <section aria-labelledby="cta-heading" className="py-24">
            <div className="container">
              <div className="relative rounded-2xl border border-indigo-500/20 bg-[oklch(0.14_0.008_265)] overflow-hidden">
                <div className="absolute inset-0 bg-indigo-600/5 pointer-events-none" aria-hidden="true" />
                <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/4" aria-hidden="true" />
                <div className="relative p-10 md:p-16 max-w-2xl">
                  <span className="section-number mb-4 block">Let&apos;s build</span>
                  <h2
                    id="cta-heading"
                    className="text-4xl md:text-5xl font-bold text-white mb-5 leading-tight"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    Want something like this <span className="gradient-text">for your team?</span>
                  </h2>
                  <p className="text-zinc-400 leading-relaxed mb-8 text-lg">
                    I prototype before committing engineering resources. If you have an AI use case you want validated fast, a 30-minute call is enough to figure out if it&apos;s worth building.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <a
                      href="/#contact"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-medium rounded-md transition-all duration-200 hover:shadow-lg hover:shadow-indigo-500/30"
                    >
                      Book a discovery call <ArrowRight size={16} aria-hidden="true" />
                    </a>
                    <Link
                      href="/fractional"
                      className="inline-flex items-center gap-2 px-6 py-3 border border-white/10 hover:border-indigo-500/40 text-zinc-300 hover:text-white font-medium rounded-md transition-all duration-200"
                    >
                      Fractional AI PM
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>

        <footer role="contentinfo" className="border-t border-white/5 py-8">
          <div className="container flex items-center justify-between text-xs text-zinc-400">
            <span>© {new Date().getFullYear()} Łukasz Miądowicz</span>
            <Link href="/" className="hover:text-zinc-300 transition-colors">← Back to home</Link>
          </div>
        </footer>
      </div>
    </>
  );
}
