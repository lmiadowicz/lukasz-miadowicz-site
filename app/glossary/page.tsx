import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Nav } from "@/components/Nav";

export const metadata: Metadata = {
  title: { absolute: "AI Product Glossary: Agent Harness, HITL, Circuit Breaker, Unit Economics | miadowicz." },
  description:
    "Definitions of key AI product terms: Agent Harness, Agentic UX, HITL, Circuit Breaker, Unit Economics, 6 Levers, 4D Framework, RAG, MCP. By Łukasz Miądowicz, AI Product Leader.",
  keywords: [
    "Agent Harness definition", "Agentic UX", "HITL meaning", "AI product glossary",
    "circuit breaker pattern AI", "unit economics agentic AI", "6 levers LLM", "4D Framework AI",
    "RAG definition", "MCP model context protocol", "multi-agent systems", "AI product management terms",
    "Orchestrator of Intelligence", "agentic AI definition",
  ],
  alternates: { canonical: "https://miadowicz.com/glossary" },
  openGraph: {
    type: "website",
    url: "https://miadowicz.com/glossary",
    title: "AI Product Glossary — Agent Harness, Circuit Breaker, Unit Economics & More | Łukasz Miądowicz",
    description: "Definitions of key AI product terms: Agent Harness, Agentic UX, HITL, Circuit Breaker, Unit Economics, 6 Levers, RAG, MCP. By Łukasz Miądowicz, AI Product Leader.",
    images: [
      {
        url: "https://miadowicz.com/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Łukasz Miądowicz — AI Product Leader & AI Strategy Lead",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@miadowicz",
    creator: "@miadowicz",
    images: ["https://miadowicz.com/opengraph-image"],
  },
};

const BASE_URL = "https://miadowicz.com";

const glossarySchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": `${BASE_URL}/glossary#faq`,
  mainEntity: [
    {
      "@type": "Question",
      name: "What is an Agent Harness?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "An Agent Harness is the infrastructure layer that wraps an LLM and transforms it into a reliable, production-ready AI agent. It handles five things the model itself cannot: the execution loop (prompt → output → tool → feedback), tool calls, context and memory management, state tracking across steps, and safety guardrails. Without a harness, you have a demo. With one, you have a product.",
      },
    },
    {
      "@type": "Question",
      name: "What is an Orchestrator of Intelligence?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "An Orchestrator of Intelligence is an AI Product Leader whose job has shifted from 'what should we build?' to 'how should AI behave?' They define the character, knowledge, and capabilities of intelligent systems by pulling the right levers — instructions, knowledge, memory, tools, reasoning, and fine-tuning — to shape AI behavior that reliably solves real problems.",
      },
    },
    {
      "@type": "Question",
      name: "What is Agentic UX?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Agentic UX is the design discipline of embedding AI agents inside existing user workflows rather than creating separate chatbot interfaces. The principle: an AI agent should operate where the work already happens. Four patterns work — Embedded Agent, Agent in Work Queue, Agent as Project Participant, and Parallel Agent as Management Interface. If the user has to learn a new interface, the UX has already failed.",
      },
    },
    {
      "@type": "Question",
      name: "What is HITL (Human-in-the-Loop) in AI systems?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "HITL (Human-in-the-Loop) is a design pattern where a human reviews, approves, or corrects an AI agent's output before it takes a consequential action. HITL is not a sign of AI weakness — it's a risk management mechanism for irreversible or high-stakes decisions. The goal is to find the minimum number of HITL touchpoints that maintain trust while preserving automation value.",
      },
    },
    {
      "@type": "Question",
      name: "What are the 6 Levers of AI behavior?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The 6 Levers are the mechanisms an AI Product Leader uses to shape how an LLM behaves: (1) Instructions — system prompts that define role, tone, and constraints; (2) Knowledge — context, documents, and retrieval that the model can access; (3) Memory — persistent state across sessions; (4) Tools — external APIs and actions the model can execute; (5) Reasoning — chain-of-thought and structured thinking patterns; (6) Post-Training — fine-tuning on domain-specific data. Knowing which lever to pull for which problem is the core skill.",
      },
    },
    {
      "@type": "Question",
      name: "What is the 4D Framework for AI products?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The 4D Framework is a methodology for building AI products from first principles: (1) AI Discovery — identify use cases where AI expands the problem space, not just automates existing steps; (2) AI Design — architecture, prototype, and configure the 6 levers; (3) AI Development — build, evaluate, and refine with observability; (4) AI Deployment — launch, monetize, and build the economic case with unit economics and payback period.",
      },
    },
    {
      "@type": "Question",
      name: "What are the 8 fundamental LLM constraints?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The 8 constraints every AI product leader must understand: (1) Hallucination — models generate plausible-sounding but false information; (2) Knowledge cutoff — models don't know what happened after training; (3) Context limits — finite window; (4) Inconsistency — same input, different output; (5) Reasoning gaps — poor at multi-step logic without scaffolding; (6) Safety risks — prompt injection and jailbreaks; (7) Cost and latency — inference is not free; (8) Model drift — behavior changes between model versions.",
      },
    },
    {
      "@type": "Question",
      name: "What is RAG (Retrieval-Augmented Generation)?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "RAG (Retrieval-Augmented Generation) is a technique that extends an LLM's knowledge beyond its training cutoff by retrieving relevant documents at inference time and injecting them into the prompt. Instead of fine-tuning, you query a vector database for semantically similar content and give the model the right context for each question. RAG solves the knowledge cutoff constraint without the cost of retraining.",
      },
    },
    {
      "@type": "Question",
      name: "What is MCP (Model Context Protocol)?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MCP (Model Context Protocol) is an open standard developed by Anthropic that defines how AI models connect to external tools, data sources, and APIs. Think of it as USB-C for AI agents — a universal connector that lets any compatible tool plug into any compatible model. MCP replaces bespoke tool integrations with a standardized protocol, making agent systems more modular and maintainable.",
      },
    },
    {
      "@type": "Question",
      name: "What is a multi-agent system?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A multi-agent system is an AI architecture where multiple specialized agents collaborate to complete a complex task — each with a defined role, a subset of tools, and a defined handoff protocol. One agent might research, another draft, another review, another execute. Multi-agent systems outperform single large agents on tasks that benefit from parallelism, specialization, or role separation.",
      },
    },
    {
      "@type": "Question",
      name: "What does an AI Product Leader do?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "An AI Product Leader owns the AI roadmap end-to-end: from identifying high-value AI use cases (discovery) to designing system behavior (the 6 levers), to shipping in production, to measuring business outcomes. Unlike a traditional PM, they must understand both the business goal and the technical constraints of probabilistic systems — knowing not just what to build but how AI should behave to reliably deliver it.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between agentic AI and traditional AI?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Traditional AI takes an input and produces an output — one step, then done. Agentic AI operates in loops: it plans, acts, observes the result, adjusts, and continues until a goal is reached. Agentic AI uses tools, maintains state, and makes sequential decisions. The shift from 'AI that answers' to 'AI that acts' is the defining change in the current generation of AI products.",
      },
    },
    {
      "@type": "Question",
      name: "What is a circuit breaker pattern in agentic AI?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A circuit breaker is a production safety mechanism that stops an AI agent from running indefinitely. It monitors multiple thresholds: max iterations, max cost, max execution time, and stale iterations (no forward progress detected via state hashing). When any threshold is breached, the system escalates to a human with full context rather than continuing to consume API budget.",
      },
    },
    {
      "@type": "Question",
      name: "What are unit economics for agentic AI systems?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Unit economics for AI means calculating cost per task against value created. Key components: LLM cost, API and data costs, infrastructure, and human review time (usually the dominant cost). Example: a 6-agent travel proposal system costs $5/task ($0.58 LLM + $0.20 API + $0.05 infra + $4.17 human review). Before automation: $200/task. Net savings: $191/task. Payback: 1.3 years on $150K build cost at 600 proposals/year.",
      },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
    { "@type": "ListItem", position: 2, name: "Glossary", item: `${BASE_URL}/glossary` },
  ],
};

const terms = [
  {
    id: "agent-harness",
    question: "What is an Agent Harness?",
    answer: "An Agent Harness is the infrastructure layer that wraps an LLM and transforms it into a reliable, production-ready AI agent. It handles five things the model itself cannot: the execution loop (prompt → output → tool → feedback), tool calls, context and memory management, state tracking across steps, and safety guardrails.",
    detail: "Without a harness, you have a demo. With one, you have a product. The harness is invisible when it works and catastrophic when it's missing — which is why 90% of AI builders skip it until something breaks in production.",
    related: { label: "Deep dive: What Is an Agent Harness", href: "/blog/what-is-agent-harness" },
  },
  {
    id: "orchestrator-of-intelligence",
    question: "What is an Orchestrator of Intelligence?",
    answer: "An Orchestrator of Intelligence is an AI Product Leader whose job has shifted from \"what should we build?\" to \"how should AI behave?\" They define the character, knowledge, and capabilities of intelligent systems by pulling the right levers to shape AI behavior that reliably solves real problems — not just demos well.",
    detail: "The shift is fundamental. A traditional PM manages features. An Orchestrator of Intelligence manages probabilistic systems — understanding that every output is a distribution, not a guarantee, and designing products that are reliable despite that.",
    related: null,
  },
  {
    id: "agentic-ux",
    question: "What is Agentic UX?",
    answer: "Agentic UX is the design discipline of embedding AI agents inside existing user workflows rather than creating a separate chatbot interface. The principle: an AI agent should operate where the work already happens — not demand that users come to it.",
    detail: "Four patterns work in practice: Embedded Agent (inline in the editor), Agent in Work Queue (processes items in the background), Agent as Project Participant (reviews and comments like a colleague), and Parallel Agent as Management Interface (runs alongside the user at a higher level of abstraction). If the user has to learn a new UI, the Agentic UX has already failed.",
    related: null,
  },
  {
    id: "hitl",
    question: "What is HITL (Human-in-the-Loop)?",
    answer: "HITL (Human-in-the-Loop) is a design pattern where a human reviews, approves, or corrects an AI agent's output before it takes a consequential action. It is not a sign of AI weakness — it's a risk management mechanism for irreversible or high-stakes decisions.",
    detail: "The goal is to find the minimum number of HITL touchpoints that maintain trust while preserving automation value. Too many HITL gates and you've automated nothing. Too few and one hallucination causes real damage. The right HITL design is a product decision, not a technical one.",
    related: { label: "Deep dive: HITL design in the Agentic AI Playbook", href: "/blog/the-agentic-ai-playbook-building-0-to-1-products-from-first-principles" },
  },
  {
    id: "6-levers",
    question: "What are the 6 Levers of LLM behavior?",
    answer: "The 6 Levers are the mechanisms an AI Product Leader uses to shape how a model behaves: (1) Instructions — system prompts that define role, tone, and constraints; (2) Knowledge — context, documents, and retrieval the model can access; (3) Memory — persistent state across sessions; (4) Tools — external APIs and actions the model can execute; (5) Reasoning — chain-of-thought patterns; (6) Post-Training — fine-tuning on domain data.",
    detail: "Knowing which lever to pull for which problem is the core skill that separates an Orchestrator of Intelligence from a prompt engineer. Most AI quality issues are lever problems — the wrong knowledge, missing memory, or no tools — not model problems.",
    related: null,
  },
  {
    id: "4d-framework",
    question: "What is the 4D Framework for AI products?",
    answer: "The 4D Framework is a methodology for building AI products from first principles: (1) AI Discovery — identify where AI expands the problem space; (2) AI Design — architecture, prototyping, and 6-lever configuration; (3) AI Development — build, evaluate, iterate with observability; (4) AI Deployment — launch, monetize, and build the economic case.",
    detail: "Each phase has a distinct output: Discovery outputs a prioritized use case. Design outputs a working prototype. Development outputs a production-ready system with evals. Deployment outputs a business case with unit economics — payback period, cost per task, capacity multiplier.",
    related: { label: "Full playbook: 4D Framework in practice (Qtravel.ai case study)", href: "/blog/the-agentic-ai-playbook-building-0-to-1-products-from-first-principles" },
  },
  {
    id: "8-llm-constraints",
    question: "What are the 8 fundamental LLM constraints?",
    answer: "The 8 constraints every AI product builder must understand: hallucination, knowledge cutoff, context window limits, output inconsistency, reasoning gaps in multi-step logic, safety risks (prompt injection), cost and latency, and model drift between versions.",
    detail: "These aren't bugs — they're fundamental properties of the current generation of language models. Every product decision in AI is ultimately about working within or around these constraints. The 6 Levers are the tools you use to do that.",
    related: null,
  },
  {
    id: "rag",
    question: "What is RAG (Retrieval-Augmented Generation)?",
    answer: "RAG extends an LLM's knowledge beyond its training cutoff by retrieving relevant documents at inference time and injecting them into the prompt. Instead of retraining the model, you query a vector database for semantically similar content and give the model the right context for each query.",
    detail: "RAG solves the knowledge cutoff constraint — the model can answer questions about your internal docs, recent events, or proprietary data without being retrained. It's the most widely deployed Knowledge lever in production AI systems today.",
    related: null,
  },
  {
    id: "mcp",
    question: "What is MCP (Model Context Protocol)?",
    answer: "MCP is an open standard by Anthropic that defines how AI models connect to external tools, data sources, and APIs. Think of it as USB-C for AI agents — a universal connector that lets any compatible tool plug into any compatible model without bespoke integration work.",
    detail: "MCP replaces one-off tool integrations with a standardized protocol, making agent systems modular and maintainable. Instead of writing custom code every time you want your agent to talk to Notion, Slack, or a database, you install the MCP server and the protocol handles the rest.",
    related: null,
  },
  {
    id: "multi-agent",
    question: "What is a multi-agent system?",
    answer: "A multi-agent system is an AI architecture where multiple specialized agents collaborate to complete a task too complex for a single agent — each with a defined role, a subset of tools, and explicit handoff protocols between them.",
    detail: "Multi-agent systems outperform single large agents on tasks that benefit from parallelism, specialization, or role separation: one agent researches, one drafts, one reviews, one executes. The architectural challenge is designing clean handoffs and deciding which agent has final authority.",
    related: { label: "Case study: 6-agent travel system architecture", href: "/blog/the-agentic-ai-playbook-building-0-to-1-products-from-first-principles" },
  },
  {
    id: "agentic-ai",
    question: "What is the difference between agentic AI and traditional AI?",
    answer: "Traditional AI takes an input and produces an output — one step, then done. Agentic AI operates in loops: it plans, acts, observes the result, adjusts, and continues until a goal is reached. Agentic AI uses tools, maintains state, and makes sequential decisions autonomously.",
    detail: "The shift from 'AI that answers' to 'AI that acts' is the defining change in the current generation of AI products. It's also what makes the Agent Harness necessary — without it, a looping, tool-calling agent in production is a liability, not an asset.",
    related: { label: "What Is an Agent Harness", href: "/blog/what-is-agent-harness" },
  },
  {
    id: "circuit-breaker",
    question: "What is a circuit breaker pattern in agentic AI?",
    answer: "A circuit breaker is a production safety mechanism that stops an AI agent from running indefinitely. It monitors multiple thresholds simultaneously: max iterations, max cost (e.g. $5), max execution time, and stale iterations (no forward progress). When any threshold is breached, the system escalates to a human with full context rather than continuing to consume API budget.",
    detail: "State hashing detects when an agent is looping without progress — a key failure mode where the agent keeps relaxing constraints but never reaches a solution. The circuit breaker is what makes agentic systems safe to deploy in production: bounded cost, bounded time, graceful degradation. Without it, one edge case can exhaust your monthly LLM budget in a single task.",
    related: { label: "Circuit breaker implementation: Agentic AI Playbook", href: "/blog/the-agentic-ai-playbook-building-0-to-1-products-from-first-principles" },
  },
  {
    id: "unit-economics-ai",
    question: "What are unit economics for agentic AI systems?",
    answer: "Unit economics for AI means calculating cost per task and comparing it against value created. The key components: LLM cost (token usage × model pricing), API and data costs, infrastructure, and — critically — human review time (usually the dominant cost, not the LLM). Net savings per task = value delivered minus total cost per task.",
    detail: "Example benchmark: a 6-agent travel proposal system costs $5 total per task ($0.58 LLM + $0.20 API + $0.05 infra + $4.17 human review at 5 min). Before automation: $200 per task (4 hours of agent time). Net savings: $191 per task. Payback period: 1.3 years on a $150,000 build cost at 600 proposals/year. The insight: human review time, not LLM cost, is the primary expense — which means accuracy and reliability are the real ROI drivers.",
    related: { label: "Full unit economics model: Agentic AI Playbook", href: "/blog/the-agentic-ai-playbook-building-0-to-1-products-from-first-principles" },
  },
];

export default function GlossaryPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(glossarySchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <div className="min-h-screen bg-[oklch(0.1_0.005_265)]">
        <a href="#glossary-main" className="skip-link">Skip to glossary</a>
        <Nav />

        <section className="pt-32 pb-16 border-b border-white/5">
          <div className="container">
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-zinc-500 mb-8">
              <Link href="/" className="hover:text-zinc-300 transition-colors">Home</Link>
              <ChevronRight size={12} aria-hidden="true" />
              <span className="text-zinc-300">Glossary</span>
            </nav>
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-mono text-indigo-400 tracking-widest uppercase">Reference</span>
                <div className="h-px flex-1 max-w-12 bg-indigo-500/40" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight" style={{ fontFamily: "var(--font-display)" }}>
                AI Product<br /><span className="text-indigo-400">Glossary.</span>
              </h1>
              <p className="text-zinc-400 text-lg leading-relaxed">
                Clear definitions of the terms that matter in AI product management — from Agent Harness to Agentic UX, HITL to the 6 Levers. No hype, no padding.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 mt-8">
              {terms.map((t) => (
                <a
                  key={t.id}
                  href={`#${t.id}`}
                  className="text-xs px-3 py-1.5 rounded-full border border-white/10 text-zinc-400 hover:border-indigo-500/40 hover:text-indigo-300 transition-all"
                >
                  {t.question.replace("What is ", "").replace("What are the ", "").replace("What does an ", "").replace("?", "")}
                </a>
              ))}
            </div>
          </div>
        </section>

        <main id="glossary-main" tabIndex={-1} className="py-16">
          <div className="max-w-3xl mx-auto px-4 md:px-6">
            <div className="space-y-0">
              {terms.map((term, i) => (
                <article
                  key={term.id}
                  id={term.id}
                  className={`py-12 ${i < terms.length - 1 ? "border-b border-white/8" : ""}`}
                  itemScope
                  itemType="https://schema.org/DefinedTerm"
                >
                  <h2
                    className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight scroll-mt-24"
                    style={{ fontFamily: "var(--font-display)" }}
                    itemProp="name"
                  >
                    {term.question}
                  </h2>
                  <p className="text-zinc-200 text-lg leading-relaxed mb-4" itemProp="description">
                    {term.answer}
                  </p>
                  <p className="text-zinc-400 leading-relaxed">
                    {term.detail}
                  </p>
                  {term.related && (
                    <Link
                      href={term.related.href}
                      className="inline-flex items-center gap-1.5 mt-5 text-sm text-indigo-400 hover:text-indigo-300 transition-colors font-medium"
                    >
                      {term.related.label} →
                    </Link>
                  )}
                </article>
              ))}
            </div>

            <div className="mt-16 p-8 rounded-2xl border border-indigo-500/20 bg-indigo-600/5">
              <p className="text-xs font-mono text-indigo-400 tracking-widest uppercase mb-3">About the author</p>
              <p className="text-white font-semibold mb-2" style={{ fontFamily: "var(--font-display)" }}>Łukasz Miądowicz</p>
              <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                AI Product Leader · Head of AI Product · Agent Harness Builder. I help companies build AI products that deliver business outcomes — not just demos. $80M ARR scaled. 98% task time reduction. PhD Quantum Physics. Ex-Software Engineer at Google for Startups.
              </p>
              <div className="flex flex-wrap gap-4 text-sm">
                <Link href="/#contact" className="text-indigo-400 hover:text-indigo-300 transition-colors font-medium">Work with me →</Link>
                <Link href="/blog" className="text-zinc-400 hover:text-zinc-300 transition-colors">Read the blog →</Link>
              </div>
            </div>
          </div>
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
