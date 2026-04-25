import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Nav } from "@/components/Nav";

export const metadata: Metadata = {
  title: { absolute: "AI Product Glossary: Feature Moat, Product Moat Stack, Agent Spec, Agent Harness | miadowicz." },
  description:
    "Definitions of key AI product terms: Feature Moat, Product Moat Stack, Distribution Flywheel, Context Graph, Decision Traces, AI Decision Framework, Agent Spec, Agent Harness, HITL, Circuit Breaker, RAG, MCP. By Łukasz Miądowicz, AI Product Leader.",
  keywords: [
    "feature moat AI era", "product moat stack", "moat durability matrix", "distribution flywheel",
    "decision traces AI product", "context graph AI", "viral artifacts product strategy",
    "AI decision framework", "when to use AI", "AI feature anti-patterns",
    "Agent Spec definition", "Translation Tax software development", "Agent Orchestrator AI development",
    "Agent Harness definition", "Agentic UX", "HITL meaning", "AI product glossary",
    "circuit breaker pattern AI", "unit economics agentic AI", "6 levers LLM", "4D Framework AI",
    "RAG definition", "MCP model context protocol", "multi-agent systems", "AI product management terms",
    "Orchestrator of Intelligence", "agentic AI definition", "AEO agent engine optimization", "GEO generative engine optimization",
    "PM Spec", "Dev Spec", "user stories vs agent specs",
    "Venture Builder definition", "corporate venture building", "PM to venture builder", "corporate spin-out",
  ],
  alternates: { canonical: "https://miadowicz.com/glossary" },
  openGraph: {
    type: "website",
    url: "https://miadowicz.com/glossary",
    title: "AI Product Glossary - Feature Moat, Product Moat Stack, Distribution Flywheel, Agent Harness & More | Łukasz Miądowicz",
    description: "Definitions of key AI product terms: Feature Moat, Product Moat Stack, Distribution Flywheel, Context Graph, Decision Traces, Agent Spec, Agent Harness, HITL, Circuit Breaker, RAG, MCP. By Łukasz Miądowicz, AI Product Leader.",
    images: [
      {
        url: "https://miadowicz.com/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Łukasz Miądowicz - AI Product Leader & AI Strategy Lead",
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
        text: "An Orchestrator of Intelligence is an AI Product Leader whose job has shifted from 'what should we build?' to 'how should AI behave?' They define the character, knowledge, and capabilities of intelligent systems by pulling the right levers - instructions, knowledge, memory, tools, reasoning, and fine-tuning - to shape AI behavior that reliably solves real problems.",
      },
    },
    {
      "@type": "Question",
      name: "What is Agentic UX?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Agentic UX is the design discipline of embedding AI agents inside existing user workflows rather than creating separate chatbot interfaces. The principle: an AI agent should operate where the work already happens. Four patterns work - Embedded Agent, Agent in Work Queue, Agent as Project Participant, and Parallel Agent as Management Interface. If the user has to learn a new interface, the UX has already failed.",
      },
    },
    {
      "@type": "Question",
      name: "What is HITL (Human-in-the-Loop) in AI systems?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "HITL (Human-in-the-Loop) is a design pattern where a human reviews, approves, or corrects an AI agent's output before it takes a consequential action. HITL is not a sign of AI weakness - it's a risk management mechanism for irreversible or high-stakes decisions. The goal is to find the minimum number of HITL touchpoints that maintain trust while preserving automation value.",
      },
    },
    {
      "@type": "Question",
      name: "What are the 6 Levers of AI behavior?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The 6 Levers are the mechanisms an AI Product Leader uses to shape how an LLM behaves: (1) Instructions - system prompts that define role, tone, and constraints; (2) Knowledge - context, documents, and retrieval that the model can access; (3) Memory - persistent state across sessions; (4) Tools - external APIs and actions the model can execute; (5) Reasoning - chain-of-thought and structured thinking patterns; (6) Post-Training - fine-tuning on domain-specific data. Knowing which lever to pull for which problem is the core skill.",
      },
    },
    {
      "@type": "Question",
      name: "What is the 4D Framework for AI products?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The 4D Framework is a methodology for building AI products from first principles: (1) AI Discovery - identify use cases where AI expands the problem space, not just automates existing steps; (2) AI Design - architecture, prototype, and configure the 6 levers; (3) AI Development - build, evaluate, and refine with observability; (4) AI Deployment - launch, monetize, and build the economic case with unit economics and payback period.",
      },
    },
    {
      "@type": "Question",
      name: "What are the 8 fundamental LLM constraints?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The 8 constraints every AI product leader must understand: (1) Hallucination - models generate plausible-sounding but false information; (2) Knowledge cutoff - models don't know what happened after training; (3) Context limits - finite window; (4) Inconsistency - same input, different output; (5) Reasoning gaps - poor at multi-step logic without scaffolding; (6) Safety risks - prompt injection and jailbreaks; (7) Cost and latency - inference is not free; (8) Model drift - behavior changes between model versions.",
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
        text: "MCP (Model Context Protocol) is an open standard developed by Anthropic that defines how AI models connect to external tools, data sources, and APIs. Think of it as USB-C for AI agents - a universal connector that lets any compatible tool plug into any compatible model. MCP replaces bespoke tool integrations with a standardized protocol, making agent systems more modular and maintainable.",
      },
    },
    {
      "@type": "Question",
      name: "What is a multi-agent system?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A multi-agent system is an AI architecture where multiple specialized agents collaborate to complete a complex task - each with a defined role, a subset of tools, and a defined handoff protocol. One agent might research, another draft, another review, another execute. Multi-agent systems outperform single large agents on tasks that benefit from parallelism, specialization, or role separation.",
      },
    },
    {
      "@type": "Question",
      name: "What does an AI Product Leader do?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "An AI Product Leader owns the AI roadmap end-to-end: from identifying high-value AI use cases (discovery) to designing system behavior (the 6 levers), to shipping in production, to measuring business outcomes. Unlike a traditional PM, they must understand both the business goal and the technical constraints of probabilistic systems - knowing not just what to build but how AI should behave to reliably deliver it.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between agentic AI and traditional AI?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Traditional AI takes an input and produces an output - one step, then done. Agentic AI operates in loops: it plans, acts, observes the result, adjusts, and continues until a goal is reached. Agentic AI uses tools, maintains state, and makes sequential decisions. The shift from 'AI that answers' to 'AI that acts' is the defining change in the current generation of AI products.",
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
    {
      "@type": "Question",
      name: "What is an Agent Spec?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "An Agent Spec is a detailed, structured document designed to be consumed by both human engineers and AI coding agents. Unlike a user story, it is a contract: it declares exactly what a feature must do, how it behaves in every scenario, and what is explicitly not allowed. It is split into two parts - a PM Spec (business context, success metrics, fallbacks, guardrails) and a Dev Spec (architecture, API contracts, data models, executable test commands, code style rules).",
      },
    },
    {
      "@type": "Question",
      name: "What is the Translation Tax in software development?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Translation Tax is the invisible time, effort, and cognitive work engineers spend interpreting vague user stories - filling in missing context, making silent assumptions, and translating 'why' into 'how.' Human engineers manage this through experience and dialogue. AI coding agents do not: they follow instructions exactly, including their omissions. The Translation Tax must become visible for AI-assisted development to succeed.",
      },
    },
    {
      "@type": "Question",
      name: "What is an Agent Orchestrator?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "An Agent Orchestrator is the evolved role of a software developer in an AI-assisted development workflow. Rather than writing all code manually, they direct AI coding agents using detailed Agent Specs, review generated code, enforce architectural integrity, and ensure quality and security. Agent Specs do not replace developers - they give developers the structure to orchestrate AI agents more effectively.",
      },
    },
    {
      "@type": "Question",
      name: "What is AEO (Agent Engine Optimization) or GEO (Generative Engine Optimization)?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AEO (Agent Engine Optimization), also called GEO (Generative Engine Optimization), is the evolution of traditional SEO for an AI-first world. Where SEO optimizes content for human-read keywords and search crawlers, AEO focuses on making content perfectly parsable, structured, and trustworthy for AI agents and large language models. Best practices include structured headings, FAQ schema markup, definitive answers to specific questions, semantic entity coverage, authoritative citations, and API-accessible structured content.",
      },
    },
    {
      "@type": "Question",
      name: "What is a Venture Builder inside a company?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A Venture Builder is the single-threaded owner of a new business from inception to scale - the de facto CEO of a startup wholly owned (for now) by a larger company. Unlike a Product Manager who owns the product backlog and roadmap, a Venture Builder owns the entire venture: product, GTM, sales, finance, legal, and governance. The core mental model shifts from shipping features to building a business.",
      },
    },
    {
      "@type": "Question",
      name: "What is Corporate Venture Building?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Corporate Venture Building is a structured capability for established companies to launch new businesses adjacent to their core product. It has a defined lifecycle - Validation, MVP, and Incubation - with explicit go/no-go gates at each stage, dedicated P&L accountability, and a clear path to spin-out. AI has compressed the average break-even investment from $125M to $77M in a single year, making this model viable for companies of any size.",
      },
    },
    {
      "@type": "Question",
      name: "What is an AI decision framework?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "An AI decision framework is a structured 5-question test that determines whether AI is the right solution for a product feature or workflow. The five conditions: (1) a real, documented user problem exists; (2) the task involves language, pattern recognition, or prediction at scale; (3) the cost of a wrong AI output is acceptable or HITL is in place; (4) the model has the data and context it needs; (5) the value justifies the added complexity (minimum 5–10× ROI over the simpler alternative). If any condition fails, the simpler solution wins.",
      },
    },
    {
      "@type": "Question",
      name: "What are AI feature anti-patterns?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AI feature anti-patterns are five recurring mistakes in AI product development: (1) The Magic Chatbot - wrapping an LLM in a chat UI without task justification; (2) The Solution Looking for a Problem - technology-first product decisions; (3) The False Automation - automating tasks where review overhead exceeds time savings; (4) The Overconfident Oracle - deploying AI in high-stakes, irreversible decisions without HITL; (5) The Empty Stage - placing an AI feature in a low-traffic or low-engagement part of the product.",
      },
    },
    {
      "@type": "Question",
      name: "What is a feature moat and why is it no longer defensible?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A feature moat is the belief that a sufficiently advanced or unique product feature will protect a business from competition. In 2026 it is no longer defensible because any AI feature can be replicated in days using the same frontier models, open-source frameworks, and agentic coding tools available to any team with a credit card. When the cost of building software drops to near zero, any advantage tied to building difficulty is also near zero. Features are the front door of a product - not its foundation.",
      },
    },
    {
      "@type": "Question",
      name: "What is the Product Moat Stack?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Product Moat Stack is a 6-layer hierarchy of product defensibility, ordered from most fragile to most durable: (1) Model - essential but zero defensibility, your LLM choice is a tactical call; (2) Features - necessary for acquisition but easily copied; (3) Workflow Embedding - creates switching costs through daily habit; (4) Data & Decision Traces - proprietary behavioral context that compounds with use; (5) Distribution Network - viral artifacts and product-led growth loops that make the product self-distributing; (6) Trust & Brand - the last fortress, built on consistency, authenticity, and community.",
      },
    },
    {
      "@type": "Question",
      name: "What is the Moat Durability Matrix?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Moat Durability Matrix is a 2×2 prioritization framework that maps product moats on two dimensions: how easily a well-funded competitor can replicate them, and how fast they compound over time. The four quadrants are: Fragile (high replication, low compounding - AI features, UI polish), Temporary (low replication, low compounding - SEO authority, team velocity), Structural (low replication, high compounding - workflow embedding, data flywheel), and Fortress (both high - distribution channels, brand trust). The strategic mandate: starve the fragile, feed the fortress.",
      },
    },
    {
      "@type": "Question",
      name: "What are decision traces in AI product strategy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Decision traces are records of the full context surrounding a user's choice inside a product - not just the final outcome, but the alternatives considered, time spent deliberating, edits made before committing, and the downstream result. A product that logs decision traces knows why users decide, not just what they decided. This context is proprietary by definition: only your product captured it. Accumulated decision traces form a Context Graph that no competitor can replicate by starting from scratch.",
      },
    },
    {
      "@type": "Question",
      name: "What is a Context Graph in AI product strategy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A Context Graph is the accumulation of decision traces from every user interaction - a proprietary map of how specific users and cohorts think, decide, and act within a product. It goes beyond raw behavioral data: it encodes the intent, alternatives, and outcomes behind every interaction. A Context Graph allows a product to predict what a user will want next, improve recommendations for their specific context, and compound in value every time the product is used. It is impossible to replicate because it requires the complete decision history that only your product has ever captured.",
      },
    },
    {
      "@type": "Question",
      name: "What is the Distribution Flywheel?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Distribution Flywheel is a self-reinforcing product growth loop where each stage of usage actively drives the next. The five stages: (1) Workflow Embedding - the product becomes essential for a daily task, generating consistent use; (2) Viral Artifacts - product outputs are inherently shareable, turning every user action into a marketing moment; (3) Data Flywheel - shared artifacts and usage generate data that improves the core product; (4) Trust & Brand - high-quality outputs compound into category ownership; (5) Network Effects - a growing community makes the product more valuable for each user, increasing lock-in. Products designed with this flywheel sell themselves.",
      },
    },
    {
      "@type": "Question",
      name: "What are viral artifacts in product strategy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Viral artifacts are the shareable outputs of a product - the things users create or receive that they want to distribute publicly, and that carry the product's identity when they do. Examples: a Perplexity answer shared as a link, a Gamma presentation viewed online, a Midjourney image posted to social media. Viral artifacts turn every act of product use into a distribution event. The best viral artifacts are genuinely useful to share, not just promotional. Designing for viral artifacts - through watermarks, public links, rich previews, or 'made with' badges - is one of the highest-leverage growth investments in an AI-native product.",
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
    detail: "Without a harness, you have a demo. With one, you have a product. The harness is invisible when it works and catastrophic when it's missing - which is why 90% of AI builders skip it until something breaks in production.",
    related: { label: "Deep dive: What Is an Agent Harness", href: "/blog/what-is-agent-harness" },
  },
  {
    id: "orchestrator-of-intelligence",
    question: "What is an Orchestrator of Intelligence?",
    answer: "An Orchestrator of Intelligence is an AI Product Leader whose job has shifted from \"what should we build?\" to \"how should AI behave?\" They define the character, knowledge, and capabilities of intelligent systems by pulling the right levers to shape AI behavior that reliably solves real problems - not just demos well.",
    detail: "The shift is fundamental. A traditional PM manages features. An Orchestrator of Intelligence manages probabilistic systems - understanding that every output is a distribution, not a guarantee, and designing products that are reliable despite that.",
    related: null,
  },
  {
    id: "agentic-ux",
    question: "What is Agentic UX?",
    answer: "Agentic UX is the design discipline of embedding AI agents inside existing user workflows rather than creating a separate chatbot interface. The principle: an AI agent should operate where the work already happens - not demand that users come to it.",
    detail: "Four patterns work in practice: Embedded Agent (inline in the editor), Agent in Work Queue (processes items in the background), Agent as Project Participant (reviews and comments like a colleague), and Parallel Agent as Management Interface (runs alongside the user at a higher level of abstraction). If the user has to learn a new UI, the Agentic UX has already failed.",
    related: { label: "Deep dive: 4 AUX patterns with real case studies (Notion, Salesforce, Cursor 3)", href: "/blog/agentic-ux-designing-in-product-experiences-for-ai-agents" },
  },
  {
    id: "hitl",
    question: "What is HITL (Human-in-the-Loop)?",
    answer: "HITL (Human-in-the-Loop) is a design pattern where a human reviews, approves, or corrects an AI agent's output before it takes a consequential action. It is not a sign of AI weakness - it's a risk management mechanism for irreversible or high-stakes decisions.",
    detail: "The goal is to find the minimum number of HITL touchpoints that maintain trust while preserving automation value. Too many HITL gates and you've automated nothing. Too few and one hallucination causes real damage. The right HITL design is a product decision, not a technical one.",
    related: { label: "Deep dive: HITL design in the Agentic AI Playbook", href: "/blog/the-agentic-ai-playbook-building-0-to-1-products-from-first-principles" },
  },
  {
    id: "6-levers",
    question: "What are the 6 Levers of LLM behavior?",
    answer: "The 6 Levers are the mechanisms an AI Product Leader uses to shape how a model behaves: (1) Instructions - system prompts that define role, tone, and constraints; (2) Knowledge - context, documents, and retrieval the model can access; (3) Memory - persistent state across sessions; (4) Tools - external APIs and actions the model can execute; (5) Reasoning - chain-of-thought patterns; (6) Post-Training - fine-tuning on domain data.",
    detail: "Knowing which lever to pull for which problem is the core skill that separates an Orchestrator of Intelligence from a prompt engineer. Most AI quality issues are lever problems - the wrong knowledge, missing memory, or no tools - not model problems.",
    related: null,
  },
  {
    id: "4d-framework",
    question: "What is the 4D Framework for AI products?",
    answer: "The 4D Framework is a methodology for building AI products from first principles: (1) AI Discovery - identify where AI expands the problem space; (2) AI Design - architecture, prototyping, and 6-lever configuration; (3) AI Development - build, evaluate, iterate with observability; (4) AI Deployment - launch, monetize, and build the economic case.",
    detail: "Each phase has a distinct output: Discovery outputs a prioritized use case. Design outputs a working prototype. Development outputs a production-ready system with evals. Deployment outputs a business case with unit economics - payback period, cost per task, capacity multiplier.",
    related: { label: "Full playbook: 4D Framework in practice (Qtravel.ai case study)", href: "/blog/the-agentic-ai-playbook-building-0-to-1-products-from-first-principles" },
  },
  {
    id: "8-llm-constraints",
    question: "What are the 8 fundamental LLM constraints?",
    answer: "The 8 constraints every AI product builder must understand: hallucination, knowledge cutoff, context window limits, output inconsistency, reasoning gaps in multi-step logic, safety risks (prompt injection), cost and latency, and model drift between versions.",
    detail: "These aren't bugs - they're fundamental properties of the current generation of language models. Every product decision in AI is ultimately about working within or around these constraints. The 6 Levers are the tools you use to do that.",
    related: null,
  },
  {
    id: "rag",
    question: "What is RAG (Retrieval-Augmented Generation)?",
    answer: "RAG extends an LLM's knowledge beyond its training cutoff by retrieving relevant documents at inference time and injecting them into the prompt. Instead of retraining the model, you query a vector database for semantically similar content and give the model the right context for each query.",
    detail: "RAG solves the knowledge cutoff constraint - the model can answer questions about your internal docs, recent events, or proprietary data without being retrained. It's the most widely deployed Knowledge lever in production AI systems today.",
    related: null,
  },
  {
    id: "mcp",
    question: "What is MCP (Model Context Protocol)?",
    answer: "MCP is an open standard by Anthropic that defines how AI models connect to external tools, data sources, and APIs. Think of it as USB-C for AI agents - a universal connector that lets any compatible tool plug into any compatible model without bespoke integration work.",
    detail: "MCP replaces one-off tool integrations with a standardized protocol, making agent systems modular and maintainable. Instead of writing custom code every time you want your agent to talk to Notion, Slack, or a database, you install the MCP server and the protocol handles the rest.",
    related: null,
  },
  {
    id: "multi-agent",
    question: "What is a multi-agent system?",
    answer: "A multi-agent system is an AI architecture where multiple specialized agents collaborate to complete a task too complex for a single agent - each with a defined role, a subset of tools, and explicit handoff protocols between them.",
    detail: "Multi-agent systems outperform single large agents on tasks that benefit from parallelism, specialization, or role separation: one agent researches, one drafts, one reviews, one executes. The architectural challenge is designing clean handoffs and deciding which agent has final authority.",
    related: { label: "Case study: 6-agent travel system architecture", href: "/blog/the-agentic-ai-playbook-building-0-to-1-products-from-first-principles" },
  },
  {
    id: "agentic-ai",
    question: "What is the difference between agentic AI and traditional AI?",
    answer: "Traditional AI takes an input and produces an output - one step, then done. Agentic AI operates in loops: it plans, acts, observes the result, adjusts, and continues until a goal is reached. Agentic AI uses tools, maintains state, and makes sequential decisions autonomously.",
    detail: "The shift from 'AI that answers' to 'AI that acts' is the defining change in the current generation of AI products. It's also what makes the Agent Harness necessary - without it, a looping, tool-calling agent in production is a liability, not an asset.",
    related: { label: "What Is an Agent Harness", href: "/blog/what-is-agent-harness" },
  },
  {
    id: "circuit-breaker",
    question: "What is a circuit breaker pattern in agentic AI?",
    answer: "A circuit breaker is a production safety mechanism that stops an AI agent from running indefinitely. It monitors multiple thresholds simultaneously: max iterations, max cost (e.g. $5), max execution time, and stale iterations (no forward progress). When any threshold is breached, the system escalates to a human with full context rather than continuing to consume API budget.",
    detail: "State hashing detects when an agent is looping without progress - a key failure mode where the agent keeps relaxing constraints but never reaches a solution. The circuit breaker is what makes agentic systems safe to deploy in production: bounded cost, bounded time, graceful degradation. Without it, one edge case can exhaust your monthly LLM budget in a single task.",
    related: { label: "Circuit breaker implementation: Agentic AI Playbook", href: "/blog/the-agentic-ai-playbook-building-0-to-1-products-from-first-principles" },
  },
  {
    id: "aeo-geo",
    question: "What is AEO (Agent Engine Optimization) / GEO (Generative Engine Optimization)?",
    answer: "AEO (Agent Engine Optimization), also called GEO (Generative Engine Optimization), is the evolution of traditional SEO for an AI-first world. Where SEO optimizes content for human-read keywords and search engine crawlers, AEO focuses on making content perfectly parsable, structured, and trustworthy for AI agents and large language models. The goal: appear in AI-generated answers, not just ranked search results.",
    detail: "As AI agents increasingly mediate how people find information - through ChatGPT, Perplexity, Claude, and AI Overviews in search - the audience for your content is no longer just human readers. AEO best practices include: structured headings, FAQ schema markup, definitive answers to specific questions, semantic entity coverage, authoritative citations, and API-accessible structured content. A headless CMS architecture is naturally AEO-ready because it separates content from presentation, allowing the same structured content to serve both human-facing UI and agent-facing API endpoints simultaneously.",
    related: { label: "The Age of Amplification: SEO → AEO transition", href: "/blog/the-age-of-amplification-ai-predictions-2030-first-principles" },
  },
  {
    id: "unit-economics-ai",
    question: "What are unit economics for agentic AI systems?",
    answer: "Unit economics for AI means calculating cost per task and comparing it against value created. The key components: LLM cost (token usage × model pricing), API and data costs, infrastructure, and - critically - human review time (usually the dominant cost, not the LLM). Net savings per task = value delivered minus total cost per task.",
    detail: "Example benchmark: a 6-agent travel proposal system costs $5 total per task ($0.58 LLM + $0.20 API + $0.05 infra + $4.17 human review at 5 min). Before automation: $200 per task (4 hours of agent time). Net savings: $191 per task. Payback period: 1.3 years on a $150,000 build cost at 600 proposals/year. The insight: human review time, not LLM cost, is the primary expense - which means accuracy and reliability are the real ROI drivers.",
    related: { label: "Full unit economics model: Agentic AI Playbook", href: "/blog/the-agentic-ai-playbook-building-0-to-1-products-from-first-principles" },
  },
  {
    id: "agent-spec",
    question: "What is an Agent Spec?",
    answer: "An Agent Spec is a detailed, structured document designed to be consumed by both human engineers and AI coding agents. Unlike a user story, it is a contract: it declares exactly what a feature must do, how it behaves in every scenario, and what is explicitly not allowed. It has two parts: a PM Spec (the why and what) and a Dev Spec (the how).",
    detail: "User stories rely on experienced engineers to fill in the gaps. AI coding agents don't fill in gaps - they follow instructions exactly, including their omissions. An Agent Spec makes all assumptions explicit: scope boundaries (the wedge), success metrics, fallback scenarios, security guardrails, API contracts, and executable test commands. The result is fewer production surprises, regardless of whether the developer is human or AI.",
    related: { label: "Full guide: Beyond User Stories - Why Agent Specs Are the Future", href: "/blog/beyond-user-stories-why-agent-specs-are-the-future-software-development" },
  },
  {
    id: "translation-tax",
    question: "What is the Translation Tax?",
    answer: "The Translation Tax is the invisible time, effort, and cognitive work engineers spend interpreting vague requirements - filling in missing context, making silent assumptions, and translating 'why' into 'how.' It is unpaid, undocumented, and in traditional development it's managed through experience and dialogue.",
    detail: "When your developer is an AI coding agent, the Translation Tax becomes catastrophic: agents execute instructions exactly, including their omissions. A vague user story produces code that technically satisfies the stated requirement but misses retry logic, security signatures, or timeout handling. Making the Translation Tax visible - capturing all the implicit knowledge in an Agent Spec - is the foundational shift in AI-assisted software development.",
    related: { label: "How Agent Specs eliminate the Translation Tax", href: "/blog/beyond-user-stories-why-agent-specs-are-the-future-software-development" },
  },
  {
    id: "agent-orchestrator",
    question: "What is an Agent Orchestrator?",
    answer: "An Agent Orchestrator is the evolved role of a software developer in an AI-assisted development workflow. Rather than writing all code manually, they direct AI coding agents using detailed Agent Specs, review generated code, validate logic and edge cases, enforce architectural integrity, and ensure quality and security.",
    detail: "Agent Specs do not replace developers - they restructure what developers do. The Agent Orchestrator provides the PM Spec context to the AI agent, writes the Dev Spec that constrains the agent's implementation choices, and then reviews the output with the full context of what was intended. The human element remains indispensable; what changes is how that expertise is applied.",
    related: { label: "Agent Orchestrator role explained: Beyond User Stories", href: "/blog/beyond-user-stories-why-agent-specs-are-the-future-software-development" },
  },
  {
    id: "venture-builder",
    question: "What is a Venture Builder inside a company?",
    answer: "A Venture Builder is the single-threaded owner of a new business from inception to scale - the de facto CEO of a startup wholly owned (for now) by a larger company. Unlike a Product Manager who owns the product backlog and roadmap, a Venture Builder owns the entire venture: product, GTM, sales, finance, legal, and governance.",
    detail: "The core mental model shifts from shipping features to building a business. A PM asks 'how should we build this?' A Venture Builder asks 'should we build this at all - and can it stand on its own?' KPIs shift from engagement and retention to revenue, CAC, LTV, gross margin, and spin-out readiness. The time horizon shifts from quarters to years.",
    related: { label: "Deep dive: From PM to Venture Builder", href: "/blog/from-pm-to-venture-builder-the-definitive-guide-to-the-career-move-nobody-talks-about" },
  },
  {
    id: "corporate-venture-building",
    question: "What is Corporate Venture Building?",
    answer: "Corporate Venture Building is a structured, repeatable capability for established companies to launch new businesses adjacent to their core product - with explicit go/no-go gates at each stage, dedicated P&L accountability, and a clear path to spin-out. AI has compressed the average break-even investment from $125M to $77M in a single year, making this model viable for companies of any size.",
    detail: "The three-phase lifecycle: (1) Validation (weeks 1-4) - search for a painful problem and 3-5 signed LOIs; (2) MVP (weeks 5-12) - build a concierge MVP, then a real one, targeting 60%+ gross margin; (3) Incubation (weeks 13-28) - build a repeatable GTM motion and make the spin-out decision. Most ventures fail not because the idea was bad, but because of internal politics, budget cycles, and IP disputes that weren't resolved upfront.",
    related: { label: "Full playbook: From PM to Venture Builder", href: "/blog/from-pm-to-venture-builder-the-definitive-guide-to-the-career-move-nobody-talks-about" },
  },
  {
    id: "ai-decision-framework",
    question: "What is an AI decision framework?",
    answer: "An AI decision framework is a structured 5-question test that determines whether AI is the right solution for a product feature or workflow. The five conditions that must all pass: documented user problem, right task type (language/patterns/prediction at scale), acceptable error cost or HITL in place, data readiness, and proportional ROI (minimum 5–10× over the simpler alternative).",
    detail: "The framework exists because the wrong question in AI product development is 'how do we add AI?' The right question is 'should we?' Starting with the technology and working backward to the use case is the most common reason AI features underdeliver - the problem selection is already compromised before the build begins.",
    related: { label: "Full framework: When Should You Use AI?", href: "/blog/when-should-you-use-ai-decision-framework-for-pms" },
  },
  {
    id: "ai-anti-patterns",
    question: "What are AI feature anti-patterns?",
    answer: "AI feature anti-patterns are five named failure modes in AI product development that predictably produce low adoption or wasted investment: (1) The Magic Chatbot - chat UI without task justification; (2) The Solution Looking for a Problem - technology-first decisions; (3) The False Automation - automating tasks where review overhead exceeds savings; (4) The Overconfident Oracle - high-stakes decisions without HITL; (5) The Empty Stage - AI features where users don't spend time.",
    detail: "Naming anti-patterns makes them easier to catch before they reach the roadmap. Most failed AI features trace back to exactly one of these five. The Magic Chatbot and Solution Looking for a Problem are the most common; the Overconfident Oracle is the most dangerous; the Empty Stage is the most surprising post-launch.",
    related: { label: "Full anti-pattern guide: When Should You Use AI?", href: "/blog/when-should-you-use-ai-decision-framework-for-pms" },
  },
  {
    id: "feature-moat",
    question: "What is a feature moat - and why is it no longer defensible?",
    answer: "A feature moat is the belief that a sufficiently advanced or unique product feature will protect a business from competition. In 2026 it is no longer defensible: any AI feature can be replicated in days using the same frontier models and agentic coding tools available to any team. When the cost of building software drops to near zero, any advantage tied to building difficulty is also near zero.",
    detail: "Features are the front door of a product - the reason someone tries it. But they are not the reason someone stays. The shift to AI-native development means the effort required to replicate a feature is now measured in hours, not months. Teams that anchor their strategy on feature superiority find themselves on a treadmill: always shipping to stay relevant, never getting ahead. The first step toward a real moat is accepting that your features are fragile by definition.",
    related: { label: "Full analysis: The Feature Moat Is Dead", href: "/blog/the-feature-moat-is-dead-building-durable-products-in-the-ai-era" },
  },
  {
    id: "product-moat-stack",
    question: "What is the Product Moat Stack?",
    answer: "The Product Moat Stack is a 6-layer hierarchy of product defensibility, ordered from most fragile to most durable: (1) Model - your LLM choice is a tactical call, not a strategic one; (2) Features - necessary for acquisition but easily copied; (3) Workflow Embedding - creates switching costs through daily cognitive habit; (4) Data & Decision Traces - proprietary context that compounds with every use; (5) Distribution Network - viral artifacts and product-led growth loops; (6) Trust & Brand - the last and hardest fortress to destroy.",
    detail: "The stack is built from the bottom up but defended from the top down. Most teams invest almost entirely in Layers 1 and 2 - the two most fragile layers. The strategic reframe: features are a prerequisite for entry into a market, not a source of durable advantage. Every product decision should be mapped against the stack. If most of your roadmap is in Layers 1 and 2, you have a feature treadmill, not a business.",
    related: { label: "Deep dive: The Product Moat Stack", href: "/blog/the-feature-moat-is-dead-building-durable-products-in-the-ai-era" },
  },
  {
    id: "moat-durability-matrix",
    question: "What is the Moat Durability Matrix?",
    answer: "The Moat Durability Matrix is a 2×2 prioritization framework that plots product moats on two axes: ease of replication by a well-funded competitor (x) and compounding speed over time (y). Four quadrants result: Fragile (AI features, UI polish), Temporary (SEO authority, team velocity), Structural (workflow embedding, data flywheel), and Fortress (distribution channels, brand trust).",
    detail: "The matrix is a tactical audit tool, not a strategy statement. Map your current roadmap against it. If more than half your initiatives land in the Fragile quadrant, you're burning runway on work your competitors will copy in a sprint. The strategic mandate: starve the fragile, feed the fortress. A feature that doesn't contribute to a Structural or Fortress moat is a feature that's burning your runway.",
    related: { label: "Moat Durability Matrix in practice", href: "/blog/the-feature-moat-is-dead-building-durable-products-in-the-ai-era" },
  },
  {
    id: "decision-traces",
    question: "What are decision traces in AI product strategy?",
    answer: "Decision traces are records of the full context surrounding a user's choice - not just the final outcome, but the alternatives considered, time spent deliberating, edits made before committing, and the downstream result. A product with decision traces knows why users decide, not just what they decided.",
    detail: "The difference is profound. A product that logs 'user accepted suggestion A' has data. A product that logs 'user saw suggestions A, B, C; hovered over B for 3 seconds; edited A before accepting; the result had a 40% response rate' has a decision trace. Decision traces are contextually rich and proprietary by definition - only your product captured the deliberation. Accumulated across millions of user actions, they form a Context Graph that makes your product's intelligence impossible to replicate.",
    related: { label: "How to instrument a decision trace", href: "/blog/the-feature-moat-is-dead-building-durable-products-in-the-ai-era" },
  },
  {
    id: "context-graph",
    question: "What is a Context Graph in AI product strategy?",
    answer: "A Context Graph is the accumulation of decision traces from every user interaction - a proprietary map of how specific users and cohorts think, decide, and act inside a product. It encodes intent, alternatives, and outcomes, not just behavior. It allows the product to predict what a user will want next and improve for their specific context.",
    detail: "Volume is not the goal - contextual richness is. A competitor can buy access to the same frontier model. They cannot buy your Context Graph, because they don't have the behavioral history that created it. The first turn of the Context Graph flywheel is simple: identify the single most important decision in your product, instrument the full context around it, and build one feedback loop that uses that context to improve the next recommendation. That's the seed. The compounding starts immediately.",
    related: { label: "Building a Context Graph: step-by-step", href: "/blog/the-feature-moat-is-dead-building-durable-products-in-the-ai-era" },
  },
  {
    id: "distribution-flywheel",
    question: "What is the Distribution Flywheel?",
    answer: "The Distribution Flywheel is a self-reinforcing product growth loop where each stage of usage actively drives the next. In order: workflow embedding → daily use → viral artifacts → data generation → product improvement → brand trust → lower CAC → community network effects → deeper workflow embedding. Products designed with this flywheel sell themselves through the act of being used.",
    detail: "Most products are designed to be consumed. The best products are designed to be shared. The engine of the flywheel is the viral artifact - the shareable output that turns every user action into a distribution event. Figma didn't beat Sketch with better features; it made collaboration the default mode of working, so every shared file was a Figma advertisement. Perplexity didn't out-model Google; it created a more shareable answer format. Designing for the Distribution Flywheel means asking one question before every feature: 'what does this produce that a user would want to share?'",
    related: { label: "Distribution Flywheel deep dive", href: "/blog/the-feature-moat-is-dead-building-durable-products-in-the-ai-era" },
  },
  {
    id: "viral-artifacts",
    question: "What are viral artifacts in product strategy?",
    answer: "Viral artifacts are the shareable outputs of a product - things users create or receive that they want to distribute, and that carry the product's identity when they do. Examples: a Perplexity answer shared as a link, a Gamma presentation viewed online, a Midjourney image posted to social media. Every act of sharing is a free acquisition event.",
    detail: "The best viral artifacts are genuinely useful to share, not just promotional. A Perplexity answer is shared because it's a good answer, not because it has a logo on it. Designing for viral artifacts means asking: can the output of this product exist publicly? Does sharing it add value for the recipient? Does it carry the product's identity clearly without being intrusive? Watermarks, public share links, rich previews, and 'made with' badges are tactical implementations of the same idea: turn product output into distribution.",
    related: { label: "How to design a viral artifact", href: "/blog/the-feature-moat-is-dead-building-durable-products-in-the-ai-era" },
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
                Clear definitions of the terms that matter in AI product management - from Feature Moat and Product Moat Stack to Distribution Flywheel, Context Graph, Agent Harness, HITL, and the 6 Levers. No hype, no padding.
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
                AI Product Leader · Head of AI Product · Agent Harness Builder. I help companies build AI products that deliver business outcomes - not just demos. $80M ARR scaled. 98% task time reduction. PhD Quantum Physics. Ex-Software Engineer at Google for Startups.
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
