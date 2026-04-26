import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight, ArrowRight } from "lucide-react";
import { Nav } from "@/components/Nav";
import { personSchema, generateBreadcrumbSchema } from "@/lib/schema";

const BASE_URL = "https://miadowicz.com";
const PROFILE_IMG = "/avatars/lukasz.png";

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: "Home", item: BASE_URL },
  { name: "About", item: `${BASE_URL}/about` },
]);

export const metadata: Metadata = {
  title: "About Łukasz Miądowicz — AI Product Leader & AI Strategy Lead",
  description:
    "AI Product Leader with 10+ years building AI-native products. PhD Quantum Physics. Ex-Google SWE. $80M ARR scaled, 98% task time reduction documented. I define how AI should behave.",
  alternates: { canonical: `${BASE_URL}/about` },
  openGraph: {
    type: "profile",
    url: `${BASE_URL}/about`,
    title: "About Łukasz Miądowicz — AI Product Leader",
    description:
      "AI Product Leader with 10+ years building AI-native products. PhD Quantum Physics. Ex-Google SWE. $80M ARR scaled.",
  },
};

const metrics = [
  { value: "$80M", label: "ARR scaled", context: "multi-product portfolio" },
  { value: "98%", label: "Task time reduction", context: "Qtravel.ai agentic system" },
  { value: "3×", label: "Capacity increase", context: "same headcount" },
  { value: "+80%", label: "Conversion increase", context: "AI personalisation layer" },
];

const beliefs = [
  {
    num: "01",
    title: "My job shifted from 'what to build?' to 'how should AI behave?'",
    body: "I no longer just define features. I define the character, knowledge, and capabilities of intelligent systems. Every LLM has fundamental constraints — hallucination, context limits, knowledge cutoff, inconsistency. My edge is knowing which of the six levers to pull — instructions, knowledge, memory, tools, reasoning, fine-tuning — to shape AI behavior that reliably solves real problems, not just demos well.",
  },
  {
    num: "02",
    title: "The best AI product is the one users don't notice.",
    body: "AI should operate inside existing workflows, not demand new ones. The moment a user has to learn a new interface to use your AI feature, you've already lost. I design AI systems that fit the job to be done — not the other way around.",
  },
  {
    num: "03",
    title: "Outcomes first. Question the constraint first.",
    body: "I don't start with 'how do we add AI to this?' I start with 'which old constraints no longer exist — and what's now possible that wasn't before?' AI unlocks new problem spaces: previously impossible problems become solvable at scale, speed, and complexity. Sometimes that changes everything. Sometimes it doesn't. I know the difference.",
  },
  {
    num: "04",
    title: "The PM who can prototype wins.",
    body: "Every major feature I've shipped started as a working prototype I built myself — before a single sprint was committed. This is the biggest leverage point in modern product: de-risk the roadmap in 48 hours instead of 6 weeks. I do this with Claude Code, Python, and LLM APIs.",
  },
];

const jobs = [
  {
    company: "ButterCMS (Tiugo)",
    role: "Senior Technical PM — AI & Strategy",
    period: "2024 – Present",
    desc: "Sole AI PM at a Series A SaaS. Defined the AI roadmap, secured C-suite buy-in, and personally coded the first prototype in Claude Code. Shipped AI-native CMS Alpha in under 3 months with 20 enterprise customers. +40% conversion increase. Won Tiugo AI Leadership Spotlight Award and Unsung Hero 2025.",
  },
  {
    company: "Qtravel.ai",
    role: "Head of AI Product",
    period: "2022 – 2024",
    desc: "Led AI product 0→1 for an LLM-based Travel Search Engine. Owned the full AI roadmap, led cross-functional product and engineering teams, and shipped an agentic proposal system. 98% task time reduction, $191 net savings per task, 3× capacity increase, +80% conversion, +25% revenue growth.",
  },
  {
    company: "Google for Startups",
    role: "Product Advisor & Software Engineer",
    period: "2021 – 2022 · part-time",
    desc: "Coached 15 startup product teams on AI product strategy, success metrics, and GTM. Enabled 30% faster GTM via AI-powered social UA testing. Introduced Firebase analytics — 10% reduction in churn.",
  },
  {
    company: "Huuuge Games",
    role: "Senior Product Manager",
    period: "2018 – 2022",
    desc: "Built an AI/ML-driven market intelligence platform for M&A — +70% target acquisition rate. Predictive analytics dashboard — 20% faster deal closure. Led gaming products with millions of daily active users.",
  },
  {
    company: "AirHelp Inc.",
    role: "AI Product Manager",
    period: "2015 – 2017",
    desc: "Launched a claim-check bot — reduced processing time from 20s to 20ms (1000× faster). Led B2B data integration with Expedia & Kayak via ML-powered eligibility prediction.",
  },
];

const skills = [
  "AI Strategy", "AI Adoption", "Agentic AI", "Multi-Agent Systems", "Agentic UX",
  "HITL Design", "Product Discovery", "LLM Agent Building", "RAG", "MCP",
  "Claude Code", "Python", "0→1", "Enterprise SaaS", "GTM for AI",
  "LangGraph", "CrewAI", "TypeScript",
];

export default function AboutPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />

      <div className="min-h-screen bg-[oklch(0.1_0.005_265)]">
        <a href="#about-main" className="skip-link">Skip to main content</a>
        <Nav />

        <main id="about-main" role="main" tabIndex={-1}>
          {/* Hero */}
          <section className="pt-32 pb-20 relative overflow-hidden">
            <div
              className="pointer-events-none absolute inset-0 opacity-30"
              aria-hidden="true"
              style={{ background: "radial-gradient(ellipse 70% 50% at 50% 0%, oklch(0.62 0.22 264 / 18%), transparent)" }}
            />
            <div className="container relative">
              <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-zinc-500 mb-8">
                <Link href="/" className="hover:text-zinc-300 transition-colors">Home</Link>
                <ChevronRight size={12} />
                <span className="text-zinc-300">About</span>
              </nav>

              <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-16 max-w-5xl">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-5">
                    <span className="section-number">01 - About</span>
                    <div className="h-px flex-1 max-w-16 bg-indigo-500/40" aria-hidden="true" />
                  </div>

                  <h1
                    className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    AI Native PM.<br />
                    <span className="gradient-text">Own the roadmap.</span>
                  </h1>

                  <p className="text-xl text-zinc-400 font-medium mb-6">
                    I define how AI should behave — not just what to build.
                  </p>

                  <p className="text-zinc-400 text-lg leading-relaxed mb-10 max-w-2xl">
                    I&apos;m an <strong className="text-zinc-200">AI Product Leader</strong> who owns the AI roadmap end-to-end and personally prototypes the first version of every major feature before committing engineering resources. Being AI Native means I ask &ldquo;what new experience is now possible?&rdquo; before settling for making existing ones faster.
                  </p>

                  <div className="flex flex-wrap gap-2 mb-8">
                    <span className="tech-tag">7+ Years in AI</span>
                    <span className="tech-tag">PhD Quantum Physics</span>
                    <span className="tech-tag">UC Berkeley Haas</span>
                    <span className="tech-tag">Ex-Google SWE</span>
                  </div>

                  <div className="flex gap-3">
                    <a
                      href="/#contact"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-md transition-all duration-200 hover:shadow-lg hover:shadow-indigo-500/30"
                    >
                      Let&apos;s talk <ArrowRight size={16} aria-hidden="true" />
                    </a>
                    <Link
                      href="/fractional"
                      className="inline-flex items-center gap-2 px-6 py-3 border border-white/10 hover:border-indigo-500/40 text-zinc-300 hover:text-white font-medium rounded-md transition-all duration-200"
                    >
                      Hire me
                    </Link>
                  </div>
                </div>

                <div className="shrink-0 lg:mt-4">
                  <div className="relative w-48 h-48 lg:w-56 lg:h-56">
                    <div className="absolute inset-0 rounded-full bg-indigo-600/20 blur-xl" aria-hidden="true" />
                    <Image
                      src={PROFILE_IMG}
                      alt="Łukasz Miądowicz — AI Product Leader"
                      width={224}
                      height={224}
                      className="relative rounded-full object-cover border-2 border-indigo-500/30 w-full h-full"
                      priority
                    />
                  </div>
                  <p className="text-xs text-zinc-500 text-center mt-3 font-mono">Łukasz Miądowicz</p>
                </div>
              </div>
            </div>
          </section>

          {/* Metrics */}
          <section aria-label="Key results" className="border-y border-white/5 bg-[oklch(0.12_0.006_265)]">
            <div className="container py-10">
              <dl className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 md:divide-x md:divide-white/5">
                {metrics.map((m) => (
                  <div key={m.label} className="flex flex-col items-start md:items-center md:px-8 gap-1">
                    <dt className="text-xs text-zinc-500 uppercase tracking-widest font-mono order-3">{m.label}</dt>
                    <dd className="text-4xl font-bold text-indigo-400 order-1" style={{ fontFamily: "var(--font-display)" }}>{m.value}</dd>
                    <dd className="text-xs text-zinc-600 order-2">{m.context}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </section>

          {/* Bio */}
          <section aria-labelledby="bio-heading" className="py-24 border-b border-white/5">
            <div className="container">
              <div className="max-w-3xl">
                <div className="flex items-center gap-3 mb-4">
                  <span className="section-number">02 - Background</span>
                  <div className="h-px flex-1 max-w-16 bg-indigo-500/40" aria-hidden="true" />
                </div>
                <h2
                  id="bio-heading"
                  className="text-3xl md:text-4xl font-bold text-white mb-8 leading-tight"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  The background behind the work
                </h2>

                <div className="space-y-5 text-zinc-400 leading-relaxed">
                  <p>
                    At <strong className="text-zinc-200">Qtravel.ai</strong> as AI Product Leader, I owned the full AI roadmap, led the team, and shipped an agentic proposal system — 98% task time reduction, 3× capacity, +80% conversion. At <strong className="text-zinc-200">ButterCMS</strong> as Senior Technical PM, I owned AI &amp; Strategy — defined the AI roadmap, coded the prototype end-to-end in Claude Code, secured C-suite buy-in, and shipped AI Alpha in under 3 months. +40% conversion.
                  </p>
                  <p>
                    I started as a Software Engineer — including at <strong className="text-zinc-200">Google for Startups</strong> — moved into product, never stopped coding. I can prototype in 24–48 hours what most teams spend a quarter planning. This is the biggest leverage point in modern product: de-risk the roadmap before a single sprint is committed.
                  </p>
                  <p>
                    My academic foundation is in <strong className="text-zinc-200">Quantum Physics research</strong> (doctoral-level). I completed the Product Management programme at <strong className="text-zinc-200">Haas School of Business, UC Berkeley</strong>. That combination — hard science, commercial product thinking, and hands-on AI engineering — is what makes the work different.
                  </p>
                </div>

                <div className="mt-8">
                  <p className="text-xs text-zinc-500 uppercase tracking-wider mb-3 font-mono">Technical skills</p>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((s) => (
                      <span key={s} className="tech-tag">{s}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* What I believe */}
          <section aria-labelledby="beliefs-heading" className="py-24 border-b border-white/5 bg-[oklch(0.12_0.006_265)] relative">
            <div className="absolute inset-0 dot-grid opacity-10" aria-hidden="true" />
            <div className="container relative">
              <div className="flex items-center gap-3 mb-4">
                <span className="section-number">03 - Principles</span>
                <div className="h-px flex-1 max-w-16 bg-indigo-500/40" aria-hidden="true" />
              </div>
              <h2
                id="beliefs-heading"
                className="text-3xl md:text-4xl font-bold text-white mb-12 leading-tight"
                style={{ fontFamily: "var(--font-display)" }}
              >
                How I think about <span className="gradient-text">AI products.</span>
              </h2>

              <div className="grid md:grid-cols-2 gap-5">
                {beliefs.map((b) => (
                  <div
                    key={b.num}
                    className="relative p-6 rounded-xl border border-white/8 bg-[oklch(0.14_0.008_265)] hover:border-indigo-500/40 hover:bg-indigo-500/5 transition-all duration-300"
                  >
                    <span className="text-xs font-mono text-indigo-400/60 mb-3 block">{b.num}</span>
                    <h3
                      className="text-base font-bold text-white mb-3 leading-snug"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {b.title}
                    </h3>
                    <p className="text-zinc-400 text-sm leading-relaxed">{b.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Experience timeline */}
          <section aria-labelledby="experience-heading" className="py-24 border-b border-white/5">
            <div className="container">
              <div className="flex items-center gap-3 mb-4">
                <span className="section-number">04 - Experience</span>
                <div className="h-px flex-1 max-w-16 bg-indigo-500/40" aria-hidden="true" />
              </div>
              <h2
                id="experience-heading"
                className="text-3xl md:text-4xl font-bold text-white mb-12 leading-tight"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Where I&apos;ve <span className="gradient-text">been shaped.</span>
              </h2>

              <div className="relative">
                <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500/50 via-indigo-500/20 to-transparent" />
                <div className="space-y-8">
                  {jobs.map((j) => (
                    <div key={j.company} className="relative pl-8">
                      <div className="absolute left-0 top-3 w-3 h-3 rounded-full bg-indigo-500 border-2 border-[oklch(0.1_0.005_265)] -translate-x-1/2 z-10" />
                      <div className="p-6 rounded-xl border border-white/8 bg-[oklch(0.13_0.007_265)] hover:border-indigo-500/25 transition-colors">
                        <div className="flex items-start justify-between gap-4 mb-2">
                          <div>
                            <div className="font-semibold text-white" style={{ fontFamily: "var(--font-display)" }}>{j.company}</div>
                            <div className="text-indigo-400 text-sm">{j.role}</div>
                          </div>
                          <span className="text-xs text-zinc-500 whitespace-nowrap font-mono shrink-0">{j.period}</span>
                        </div>
                        <p className="text-zinc-400 text-sm leading-relaxed">{j.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
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
                  <span className="section-number mb-4 block">Ready when you are</span>
                  <h2
                    id="cta-heading"
                    className="text-4xl md:text-5xl font-bold text-white mb-5 leading-tight"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    Let&apos;s build something <span className="gradient-text">together.</span>
                  </h2>
                  <p className="text-zinc-400 leading-relaxed mb-8 text-lg">
                    Open to full-time AI Product Leader and Senior AI PM roles, and fractional engagements. A 30-minute discovery call is enough to know if we&apos;re the right fit.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <a
                      href="/#contact"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-medium rounded-md transition-all duration-200 hover:shadow-lg hover:shadow-indigo-500/30"
                    >
                      Get in touch <ArrowRight size={16} aria-hidden="true" />
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
