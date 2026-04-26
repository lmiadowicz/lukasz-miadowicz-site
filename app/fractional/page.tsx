import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, ArrowRight, Check } from "lucide-react";
import { Nav } from "@/components/Nav";
import { personSchema, serviceSchema, websiteSchema } from "@/lib/schema";

const PROFILE_IMG = "/avatars/lukasz.png";
const BASE_URL = "https://miadowicz.com";

// ─── Structured data ──────────────────────────────────────────────────────────

const fractionalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${BASE_URL}/fractional#service`,
  name: "Fractional AI Product Leader",
  description:
    "Part-time AI product leadership for startups and scale-ups — owns roadmap, ships prototypes, builds business cases.",
  provider: { "@id": `${BASE_URL}/#person` },
  serviceType: "Fractional AI Product Management",
  areaServed: "Worldwide",
  url: `${BASE_URL}/fractional`,
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
    {
      "@type": "ListItem",
      position: 2,
      name: "Fractional AI PM",
      item: `${BASE_URL}/fractional`,
    },
  ],
};

const faqPageSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": `${BASE_URL}/fractional#faq`,
  mainEntity: [
    {
      "@type": "Question",
      name: "What does a fractional AI PM actually do day-to-day?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Owns the AI roadmap end-to-end: prioritizes use cases, designs AI behavior (the 6 levers), ships prototypes to validate, writes Agent Specs for engineering, builds the business case, and aligns stakeholders. Available 2–3 days/week, async-first.",
      },
    },
    {
      "@type": "Question",
      name: "How quickly can you start?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Typically within 1–2 weeks of the discovery call. No onboarding bureaucracy — I embed directly with the product team.",
      },
    },
    {
      "@type": "Question",
      name: "What makes you different from a generalist PM who has used AI?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "I build the AI systems, not just the roadmap for someone else to build. PhD-level understanding of model behavior, 7+ years building with LLMs, and a documented track record: 98% task reduction, $191/task savings. I can prototype in 24-48 hours what most teams spend a quarter planning.",
      },
    },
    {
      "@type": "Question",
      name: "What engagement model options are there?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Fractional (2–3 days/week, minimum 3 months), project-based (specific deliverable with clear scope and timeline), and advisory (strategic review, workshops, and Slack access). Contact me and we'll match the right format to your stage.",
      },
    },
  ],
};

const schemas = [
  personSchema,
  serviceSchema,
  websiteSchema,
  fractionalServiceSchema,
  breadcrumbSchema,
  faqPageSchema,
];

// ─── Metadata ─────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "Fractional AI Product Leader | Łukasz Miądowicz",
  description:
    "Hire a Fractional AI Product Leader with 10+ years building AI-native B2B products. $80M ARR scaled. 98% task time reduction documented. Ex-Google SWE. PhD. Available 2–3 days/week.",
  alternates: {
    canonical: `${BASE_URL}/fractional`,
  },
  openGraph: {
    type: "article",
    url: `${BASE_URL}/fractional`,
    title: "Fractional AI Product Leader | Łukasz Miądowicz",
    description:
      "Hire a Fractional AI Product Leader with 10+ years building AI-native B2B products. $80M ARR scaled. 98% task time reduction documented. Ex-Google SWE. PhD. Available 2–3 days/week.",
    siteName: "miadowicz.",
    locale: "en_US",
    images: [
      {
        url: `${BASE_URL}/opengraph-image`,
        width: 1200,
        height: 630,
        alt: "Łukasz Miądowicz — Fractional AI Product Leader",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@miadowicz",
    creator: "@miadowicz",
    title: "Fractional AI Product Leader | Łukasz Miądowicz",
    description:
      "Hire a Fractional AI Product Leader with 10+ years building AI-native B2B products. $80M ARR scaled. 98% task time reduction documented.",
    images: [`${BASE_URL}/opengraph-image`],
  },
  keywords: [
    "fractional AI product manager",
    "fractional AI CPO",
    "fractional AI PM",
    "fractional head of AI product",
    "hire fractional AI product leader",
    "part-time AI product manager",
    "AI product leadership for startups",
    "fractional AI product strategy",
  ],
};

// ─── Data ─────────────────────────────────────────────────────────────────────

const whoForCards = [
  {
    stage: "Startup",
    stageDetail: "Pre-Seed to Series B",
    body: "You need AI in the product but can't justify a full AI PM headcount yet. Get senior AI product leadership on day one — without the full-time cost and risk.",
  },
  {
    stage: "Scale-up",
    stageDetail: "Series B+",
    body: "You need to move faster on AI than hiring allows — someone who can start in days, not months. Immediate impact, no recruiting pipeline required.",
  },
  {
    stage: "Enterprise team",
    stageDetail: "Specific initiative",
    body: "You need AI product leadership for a specific initiative or product line without disrupting existing org structure. Clean scope, clear outcomes.",
  },
];

const deliverables = [
  {
    num: "01",
    title: "AI use case discovery and prioritization",
    body: "Systematic analysis of your product, workflows, and data to surface the highest-value AI bets — ranked by impact, feasibility, and build cost.",
  },
  {
    num: "02",
    title: "AI product roadmap (90-day and annual)",
    body: "A concrete roadmap with milestones, success metrics, and dependency mapping — built to get C-suite sign-off and keep engineering unblocked.",
  },
  {
    num: "03",
    title: "First prototype shipped in 24–48 hours",
    body: "I build before committing resources. Working prototype in code before the first sprint is planned — de-risking the roadmap in days, not quarters.",
  },
  {
    num: "04",
    title: "Business case built with unit economics",
    body: "Time saved, cost avoided, revenue uplift — modeled in real numbers with payback period. Built to survive a CFO review.",
  },
  {
    num: "05",
    title: "Team capability uplift",
    body: "Your team learns by doing. I bring frameworks, Agent Specs, and hands-on reviews so the uplift compounds long after the engagement ends.",
  },
  {
    num: "06",
    title: "HITL and governance design",
    body: "Human-in-the-loop checkpoints, safety guardrails, and AI governance documentation — built in from day one, not bolted on after launch.",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Discovery call",
    duration: "30 min",
    body: "We map your AI opportunity and your stage. I ask the questions most consultants skip: what constraints no longer exist, what outcomes matter most, and where you're leaving leverage on the table.",
  },
  {
    step: "02",
    title: "Alignment",
    duration: "1 week",
    body: "I audit your product, stack, and roadmap gaps. You get a clear picture of where AI can move the needle — and a prioritized plan to get there.",
  },
  {
    step: "03",
    title: "Engagement",
    duration: "Ongoing",
    body: "2–3 days/week, async-first, full AI roadmap ownership. I embed with your team, ship prototypes, write specs, and keep stakeholders aligned.",
  },
  {
    step: "04",
    title: "Outcomes",
    duration: "Every sprint",
    body: "Shipped products, documented ROI, and an upskilled team. Every engagement ends with your team more capable than when we started.",
  },
];

const metrics = [
  { value: "$80M", label: "ARR scaled" },
  { value: "98%", label: "Task time reduction" },
  { value: "$191", label: "Net savings/task" },
  { value: "10+", label: "Years in product" },
];

const testimonials = [
  {
    name: "Michael Sonier",
    role: "Co-founder & CEO",
    company: "BAT Company",
    quote:
      "Łukasz brings a rare combination of technical depth and product thinking that most AI hires simply don't have.",
    initials: "MS",
  },
  {
    name: "Wiktor Walc",
    role: "CTO",
    company: "Tiugo Technologies",
    quote:
      "Within weeks, Łukasz had reshaped how we thought about AI in our product — and had a working prototype to prove it.",
    initials: "WW",
  },
  {
    name: "Tomasz Krupa",
    role: "Head of AI",
    company: "Qtravel.ai",
    quote:
      "The system Łukasz built reduced proposal time by 98%. That's not an improvement — it's a different category of product.",
    initials: "TK",
  },
];

const faqs = [
  {
    q: "What does a fractional AI PM actually do day-to-day?",
    a: "Owns the AI roadmap end-to-end: prioritizes use cases, designs AI behavior (the 6 levers), ships prototypes to validate, writes Agent Specs for engineering, builds the business case, and aligns stakeholders. Available 2–3 days/week, async-first.",
  },
  {
    q: "How quickly can you start?",
    a: "Typically within 1–2 weeks of the discovery call. No onboarding bureaucracy — I embed directly with the product team.",
  },
  {
    q: "What makes you different from a generalist PM who has used AI?",
    a: "I build the AI systems, not just the roadmap for someone else to build. PhD-level understanding of model behavior, 7+ years building with LLMs, and a documented track record: 98% task reduction, $191/task savings. I can prototype in 24-48 hours what most teams spend a quarter planning.",
  },
  {
    q: "What engagement model options are there?",
    a: "Fractional (2–3 days/week, minimum 3 months), project-based (specific deliverable with clear scope and timeline), and advisory (strategic review, workshops, and Slack access). Contact me and we'll match the right format to your stage.",
  },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function FractionalPage() {
  return (
    <>
      {/* JSON-LD structured data */}
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      <div className="min-h-screen bg-[oklch(0.1_0.005_265)]">
        <a href="#fractional-main" className="skip-link">
          Skip to main content
        </a>
        <Nav />

        <main id="fractional-main" role="main" tabIndex={-1}>
          {/* ── Hero ──────────────────────────────────────────────────────── */}
          <section
            aria-labelledby="hero-heading"
            className="relative pt-36 pb-24 overflow-hidden"
          >
            {/* subtle dot grid */}
            <div
              className="dot-grid absolute inset-0 opacity-40 pointer-events-none"
              aria-hidden="true"
            />
            {/* indigo radial glow */}
            <div
              className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full bg-indigo-600/10 blur-[120px] pointer-events-none"
              aria-hidden="true"
            />

            <div className="container relative">
              {/* Breadcrumb */}
              <nav
                aria-label="Breadcrumb"
                className="flex items-center gap-2 text-xs text-zinc-500 mb-10"
              >
                <Link href="/" className="hover:text-zinc-300 transition-colors">
                  Home
                </Link>
                <ChevronRight size={12} aria-hidden="true" />
                <span className="text-zinc-300">Fractional AI PM</span>
              </nav>

              <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-16 max-w-5xl">
              {/* Left — text */}
              <div className="flex-1 min-w-0">
                {/* available badge */}
                <div className="inline-flex items-center gap-2.5 mb-6 px-3.5 py-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/5">
                  <span className="relative flex h-2 w-2 shrink-0">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                  </span>
                  <span className="text-[12px] font-medium text-emerald-400">
                    Available immediately · 2–3 days/week
                  </span>
                </div>

                <h1
                  id="hero-heading"
                  className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] mb-5"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Fractional{" "}
                  <span className="gradient-text">AI Product Leader</span>
                </h1>

                <p
                  className="text-xl md:text-2xl font-semibold text-zinc-300 mb-6 leading-snug"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Own your AI roadmap. Proven results. No full-time risk.
                </p>

                <p className="text-zinc-400 text-lg leading-relaxed mb-10 max-w-2xl">
                  I embed with your team 2–3 days/week and own the AI roadmap
                  end-to-end — from use case discovery to shipped product. No
                  recruiting pipeline. No ramp time. Just a builder with a
                  documented track record: <strong className="text-zinc-200">$80M ARR scaled</strong>,{" "}
                  <strong className="text-zinc-200">98% task time reduction</strong>,{" "}
                  <strong className="text-zinc-200">first prototype in 24–48 hours</strong>.
                </p>

                <a
                  href="/#contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-md transition-all duration-200 hover:shadow-lg hover:shadow-indigo-500/30 hover:-translate-y-0.5 text-base"
                >
                  Book a Discovery Call <ArrowRight size={16} aria-hidden="true" />
                </a>
              </div>

              {/* Right — headshot */}
              <div className="shrink-0 lg:mt-4">
                <div className="relative w-48 h-48 lg:w-56 lg:h-56">
                  {/* glow ring */}
                  <div className="absolute inset-0 rounded-full bg-indigo-600/20 blur-xl" aria-hidden="true" />
                  <img
                    src={PROFILE_IMG}
                    alt="Łukasz Miądowicz — Fractional AI Product Leader"
                    width={224}
                    height={224}
                    className="relative rounded-full object-cover border-2 border-indigo-500/30 w-full h-full"
                  />
                </div>
                <p className="text-xs text-zinc-500 text-center mt-3 font-mono">Łukasz Miądowicz</p>
              </div>
            </div>
            </div>
          </section>

          {/* ── Metrics strip ─────────────────────────────────────────────── */}
          <section
            aria-label="Key results"
            className="border-y border-white/5 bg-[oklch(0.12_0.006_265)]"
          >
            <div className="container py-10">
              <dl className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 md:divide-x md:divide-white/5">
                {metrics.map((m) => (
                  <div
                    key={m.label}
                    className="flex flex-col items-start md:items-center md:px-8 gap-1"
                  >
                    <dt className="text-xs text-zinc-500 uppercase tracking-widest font-mono order-2">
                      {m.label}
                    </dt>
                    <dd
                      className="text-4xl font-bold text-indigo-400 order-1"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {m.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </section>

          {/* ── Who this is for ───────────────────────────────────────────── */}
          <section aria-labelledby="who-heading" className="py-24">
            <div className="container">
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-4">
                  <span className="section-number">01 - Who this is for</span>
                  <div className="h-px flex-1 max-w-16 bg-indigo-500/40" aria-hidden="true" />
                </div>
                <h2
                  id="who-heading"
                  className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  The right fit for{" "}
                  <span className="gradient-text">your stage</span>
                </h2>
                <p className="text-zinc-400 leading-relaxed max-w-2xl">
                  Fractional AI product leadership works best when you need senior expertise
                  without the timeline or cost of a full-time hire.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-5">
                {whoForCards.map((card) => (
                  <article
                    key={card.stage}
                    className="p-5 rounded-xl border border-white/8 bg-[oklch(0.14_0.008_265)] hover:border-indigo-500/30 transition-colors card-hover"
                  >
                    <div className="mb-4">
                      <span className="inline-block px-2.5 py-1 rounded-md bg-indigo-600/15 border border-indigo-500/20 text-xs font-mono text-indigo-400 uppercase tracking-widest mb-3">
                        {card.stageDetail}
                      </span>
                      <h3
                        className="text-xl font-bold text-white mb-3"
                        style={{ fontFamily: "var(--font-display)" }}
                      >
                        {card.stage}
                      </h3>
                    </div>
                    <p className="text-zinc-400 leading-relaxed text-sm">{card.body}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          {/* ── What you get ──────────────────────────────────────────────── */}
          <section
            aria-labelledby="deliverables-heading"
            className="py-24 border-t border-white/5"
          >
            <div className="container">
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-4">
                  <span className="section-number">02 - What you get</span>
                  <div className="h-px flex-1 max-w-16 bg-indigo-500/40" aria-hidden="true" />
                </div>
                <h2
                  id="deliverables-heading"
                  className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Concrete deliverables.{" "}
                  <span className="gradient-text">Not slide decks.</span>
                </h2>
                <p className="text-zinc-400 leading-relaxed max-w-2xl">
                  Every engagement is scoped around working software, documented outcomes,
                  and an upskilled team — not recommendations you have to execute alone.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                {deliverables.map((d) => (
                  <div
                    key={d.num}
                    className="p-5 rounded-xl border border-white/8 bg-[oklch(0.14_0.008_265)] hover:border-indigo-500/30 transition-colors"
                  >
                    <div className="flex items-start gap-4">
                      <span
                        className="text-xs font-mono text-indigo-400 shrink-0 mt-0.5 tracking-widest"
                        aria-hidden="true"
                      >
                        {d.num}
                      </span>
                      <div>
                        <h3
                          className="text-base font-semibold text-white mb-2 leading-snug"
                          style={{ fontFamily: "var(--font-display)" }}
                        >
                          {d.title}
                        </h3>
                        <p className="text-zinc-400 text-sm leading-relaxed">{d.body}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ── How we work together ──────────────────────────────────────── */}
          <section
            aria-labelledby="process-heading"
            className="py-24 border-t border-white/5"
          >
            <div className="container">
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-4">
                  <span className="section-number">03 - How we work together</span>
                  <div className="h-px flex-1 max-w-16 bg-indigo-500/40" aria-hidden="true" />
                </div>
                <h2
                  id="process-heading"
                  className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  From discovery to{" "}
                  <span className="gradient-text">shipped product</span>
                </h2>
                <p className="text-zinc-400 leading-relaxed max-w-2xl">
                  Four steps. No months-long onboarding. Results visible within the first
                  sprint.
                </p>
              </div>

              <ol className="relative grid md:grid-cols-2 gap-5 list-none">
                {processSteps.map((s, idx) => (
                  <li
                    key={s.step}
                    className="p-5 rounded-xl border border-white/8 bg-[oklch(0.14_0.008_265)] hover:border-indigo-500/30 transition-colors"
                  >
                    <div className="flex items-start gap-4">
                      <div className="shrink-0 w-9 h-9 rounded-full bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center">
                        <span
                          className="text-xs font-mono text-indigo-400 font-semibold"
                          aria-hidden="true"
                        >
                          {s.step}
                        </span>
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1.5">
                          <h3
                            className="text-base font-bold text-white"
                            style={{ fontFamily: "var(--font-display)" }}
                          >
                            {s.title}
                          </h3>
                          <span className="text-xs font-mono text-zinc-500">{s.duration}</span>
                        </div>
                        <p className="text-zinc-400 text-sm leading-relaxed">{s.body}</p>
                      </div>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </section>

          {/* ── Testimonials ──────────────────────────────────────────────── */}
          <section
            aria-labelledby="testimonials-heading"
            className="py-24 border-t border-white/5"
          >
            <div className="container">
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-4">
                  <span className="section-number">04 - Results</span>
                  <div className="h-px flex-1 max-w-16 bg-indigo-500/40" aria-hidden="true" />
                </div>
                <h2
                  id="testimonials-heading"
                  className="text-4xl md:text-5xl font-bold text-white leading-tight"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  What founders &amp; CTOs say
                </h2>
              </div>

              <div className="grid md:grid-cols-3 gap-5">
                {testimonials.map((t) => (
                  <figure
                    key={t.name}
                    className="p-5 rounded-xl border border-white/8 bg-[oklch(0.14_0.008_265)] hover:border-indigo-500/30 transition-colors flex flex-col"
                  >
                    {/* quote marks */}
                    <div
                      className="text-4xl text-indigo-500/30 font-serif leading-none mb-3 select-none"
                      aria-hidden="true"
                    >
                      &ldquo;
                    </div>
                    <blockquote className="flex-1">
                      <p className="text-zinc-300 leading-relaxed text-sm italic mb-5">
                        {t.quote}
                      </p>
                    </blockquote>
                    <figcaption className="flex items-center gap-3 pt-4 border-t border-white/5">
                      <div
                        className="w-9 h-9 rounded-full bg-indigo-600/25 border border-indigo-500/30 flex items-center justify-center shrink-0"
                        aria-hidden="true"
                      >
                        <span className="text-xs font-mono text-indigo-400 font-semibold">
                          {t.initials}
                        </span>
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-white">{t.name}</div>
                        <div className="text-xs text-zinc-500">
                          {t.role} at {t.company}
                        </div>
                      </div>
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>
          </section>

          {/* ── FAQ ───────────────────────────────────────────────────────── */}
          <section
            id="faq"
            aria-labelledby="faq-heading"
            className="py-24 border-t border-white/5"
          >
            <div className="container">
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-4">
                  <span className="section-number">07 - FAQ</span>
                  <div className="h-px flex-1 max-w-16 bg-indigo-500/40" aria-hidden="true" />
                </div>
                <h2
                  id="faq-heading"
                  className="text-4xl md:text-5xl font-bold text-white leading-tight"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Common questions
                </h2>
              </div>

              <div className="max-w-3xl space-y-4">
                {faqs.map((faq, idx) => (
                  <details
                    key={idx}
                    className="group p-5 rounded-xl border border-white/8 bg-[oklch(0.14_0.008_265)] hover:border-indigo-500/30 transition-colors"
                  >
                    <summary className="flex items-start justify-between gap-4 cursor-pointer list-none">
                      <h3
                        className="text-base font-semibold text-white leading-snug"
                        style={{ fontFamily: "var(--font-display)" }}
                      >
                        {faq.q}
                      </h3>
                      <ChevronRight
                        size={16}
                        className="text-indigo-400 shrink-0 mt-0.5 transition-transform duration-200 group-open:rotate-90"
                        aria-hidden="true"
                      />
                    </summary>
                    <p className="mt-4 text-zinc-400 text-sm leading-relaxed">{faq.a}</p>
                  </details>
                ))}
              </div>
            </div>
          </section>

          {/* ── From the blog ─────────────────────────────────────────────── */}
          <section
            aria-labelledby="blog-heading"
            className="py-24 border-t border-white/5"
          >
            <div className="container">
              <div className="mb-10">
                <div className="flex items-center gap-3 mb-4">
                  <span className="section-number">06 - From the blog</span>
                  <div className="h-px flex-1 max-w-16 bg-indigo-500/40" aria-hidden="true" />
                </div>
                <h2
                  id="blog-heading"
                  className="text-3xl md:text-4xl font-bold text-white mb-3 leading-tight"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  How I think about AI product
                </h2>
                <p className="text-zinc-400 max-w-2xl">
                  The frameworks I use in every engagement — available free, with the reasoning behind each one.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                {[
                  {
                    href: "/blog/the-agentic-ai-playbook-building-0-to-1-products-from-first-principles",
                    label: "Pillar",
                    title: "The Agentic AI Product Playbook",
                    excerpt: "The complete 0→1 framework: six design levers, HITL patterns, and a six-agent case study with documented unit economics.",
                  },
                  {
                    href: "/blog/when-should-you-use-ai-decision-framework-for-pms",
                    label: "Framework",
                    title: "When Should You Use AI?",
                    excerpt: "Five questions every AI PM should answer before committing to an AI feature. Includes a decision tree and 5 anti-patterns.",
                  },
                  {
                    href: "/blog/agentic-ux-designing-in-product-experiences-for-ai-agents",
                    label: "Design",
                    title: "Agentic UX",
                    excerpt: "Four UX patterns for embedding AI agents inside real product workflows — not as chatbots bolted on top of them.",
                  },
                  {
                    href: "/blog/what-is-agent-harness",
                    label: "Architecture",
                    title: "What Is an Agent Harness?",
                    excerpt: "The infrastructure layer 90% of AI builders miss — and why it's the difference between a demo and a production system.",
                  },
                  {
                    href: "/blog/ai-product-discovery-framework",
                    label: "Process",
                    title: "AI Product Discovery",
                    excerpt: "How to validate an AI feature in days, not sprints — with a repeatable discovery sprint template.",
                  },
                  {
                    href: "/blog/the-feature-moat-is-dead-building-durable-products-in-the-ai-era",
                    label: "Strategy",
                    title: "The Feature Moat Is Dead",
                    excerpt: "If AI commoditizes features, what actually creates durable competitive advantage? Data flywheels, community, and brand.",
                  },
                ].map((post) => (
                  <Link
                    key={post.href}
                    href={post.href}
                    className="group p-5 rounded-xl border border-white/8 bg-[oklch(0.14_0.008_265)] hover:border-indigo-500/30 transition-colors flex flex-col gap-3"
                  >
                    <span className="inline-block px-2 py-0.5 rounded text-[10px] font-mono uppercase tracking-widest border border-indigo-500/20 bg-indigo-600/10 text-indigo-400 self-start">
                      {post.label}
                    </span>
                    <h3
                      className="text-sm font-semibold text-white group-hover:text-indigo-300 transition-colors leading-snug"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {post.title}
                    </h3>
                    <p className="text-zinc-500 text-xs leading-relaxed flex-1">{post.excerpt}</p>
                    <span className="text-indigo-400 text-xs font-medium group-hover:underline">
                      Read →
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </section>

          {/* ── Final CTA ─────────────────────────────────────────────────── */}
          <section
            aria-labelledby="cta-heading"
            className="py-24 border-t border-white/5"
          >
            <div className="container">
              <div className="relative rounded-2xl border border-indigo-500/20 bg-[oklch(0.14_0.008_265)] overflow-hidden">
                {/* glow */}
                <div
                  className="absolute inset-0 bg-indigo-600/5 pointer-events-none"
                  aria-hidden="true"
                />
                <div
                  className="absolute top-0 right-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/4"
                  aria-hidden="true"
                />

                <div className="relative p-10 md:p-16 max-w-2xl">
                  <span className="section-number mb-4 block">
                    Ready when you are
                  </span>
                  <h2
                    id="cta-heading"
                    className="text-4xl md:text-5xl font-bold text-white mb-5 leading-tight"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    Ready to move faster on AI?
                  </h2>
                  <p className="text-zinc-400 leading-relaxed mb-8 text-lg">
                    I&apos;m currently available for new fractional engagements. A 30-minute
                    discovery call is enough to know if we&apos;re the right fit — and to leave
                    you with a clearer picture of your AI opportunity regardless.
                  </p>
                  <a
                    href="/#contact"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-medium rounded-md transition-all duration-200 hover:shadow-lg hover:shadow-indigo-500/30 hover:-translate-y-0.5"
                  >
                    Book a Discovery Call <ArrowRight size={16} aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>
          </section>
        </main>

        {/* ── Footer ──────────────────────────────────────────────────────── */}
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
