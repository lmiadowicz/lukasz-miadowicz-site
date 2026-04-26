"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import {
  ArrowRight, ExternalLink, Linkedin, Mail, Twitter,
  Zap, Brain, Target, Code2, Layers, Search,
  TrendingUp, Building2, Globe, Github,
} from "lucide-react";

const CASE_STUDY_IMG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663586308671/LgBonsnnKaw8XvNGJedAgJ/case-study-ai-PWeyoXeHJPErL2jefgYazP.webp";

function Section({ id, children, className = "" }: { id?: string; children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.section
      id={id}
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.section>
  );
}

function SectionHeader({ num, label }: { num: string; label: string }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <span className="section-number">{num} - {label}</span>
      <div className="h-px flex-1 max-w-16 bg-indigo-500/40" />
    </div>
  );
}

export function AboutSection() {
  const process = [
    {
      phase: "01 · Discover",
      items: ["AI opportunity mapping", "Constraint & limitation audit", "ROI sizing"],
    },
    {
      phase: "02 · Design",
      items: ["AI behavior specification", "HITL & failure mode mapping", "Stack selection"],
    },
    {
      phase: "03 · Build",
      items: ["48-hr prototype", "Eval suite & red teaming", "Guardrail definition"],
    },
    {
      phase: "04 · Ship & Learn",
      items: ["Production deployment", "Drift monitoring", "Feedback pipeline"],
    },
  ];

  return (
    <Section id="about" className="py-24">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <p className="text-xs text-zinc-500 uppercase tracking-widest mb-5 font-mono">My process on the job</p>
            <div className="space-y-0">
              {process.map((step, i) => (
                <motion.div
                  key={step.phase}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="flex items-stretch gap-4"
                >
                  <div className="flex flex-col items-center shrink-0">
                    <div className="w-2.5 h-2.5 rounded-full bg-indigo-500 mt-0.5 shrink-0 ring-2 ring-indigo-500/20" />
                    {i < process.length - 1 && (
                      <div className="w-px flex-1 bg-gradient-to-b from-indigo-500/40 to-indigo-500/10 mt-1 mb-1" />
                    )}
                  </div>
                  <div className={`pb-5 flex-1 min-w-0 ${i === process.length - 1 ? "pb-0" : ""}`}>
                    <p className="text-xs font-mono text-indigo-400 mb-2">{step.phase}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {step.items.map((item) => (
                        <span
                          key={item}
                          className="text-xs text-zinc-400 bg-white/4 border border-white/8 px-2 py-0.5 rounded-md hover:border-indigo-500/30 hover:text-zinc-300 transition-colors"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.45, duration: 0.5 }}
              className="mt-5 p-4 rounded-xl border border-indigo-500/20 bg-indigo-600/5"
            >
              <p className="text-xs text-indigo-400 font-mono mb-3">→ Documented outcomes</p>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { value: "98%", label: "task reduction" },
                  { value: "3×", label: "capacity" },
                  { value: "+80%", label: "conversion" },
                ].map((m) => (
                  <div key={m.label}>
                    <div className="text-xl font-bold text-white" style={{ fontFamily: "var(--font-display)" }}>{m.value}</div>
                    <div className="text-xs text-zinc-500">{m.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            <div className="flex flex-wrap gap-2 mt-4">
              <span className="tech-tag">7+ Years in AI</span>
              <span className="tech-tag">PhD Quantum Physics</span>
              <span className="tech-tag">UC Berkeley Haas</span>
            </div>
          </div>
          <div>
            <SectionHeader num="02" label="About" />
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight" style={{ fontFamily: "var(--font-display)" }}>
              AI Native PM.<br /><span className="gradient-text">Own the roadmap. Empower the team.</span>
            </h2>
            <p className="text-zinc-400 leading-relaxed mb-4">
              I&apos;m an <strong className="text-zinc-200">AI Product Leader</strong> - I own the AI roadmap end-to-end and personally prototype the first version of every major feature before committing engineering resources.
              Being AI Native means I ask &ldquo;what new experience is now possible?&rdquo; before settling for making existing ones faster. I expand the problem space - solving at scale, speed, and complexity no human process could match - and build new solution categories: autonomous agents, generative interfaces, and adaptive systems.
            </p>
            <p className="text-zinc-400 leading-relaxed mb-4">
              At <strong className="text-zinc-200">Qtravel.ai</strong> as AI Product Leader, I owned the full AI roadmap, led the team, and shipped an agentic proposal system - 98% task time reduction, 3× capacity, +80% conversion.
              At <strong className="text-zinc-200">ButterCMS</strong> as Senior Technical PM, I owned AI & Strategy - defined the AI roadmap, coded the prototype end-to-end in Claude Code, secured C-suite buy-in, and shipped AI Alpha in under 3 months. +40% conversion.
            </p>
            <p className="text-zinc-400 leading-relaxed mb-8">
              I started as a Software Engineer - including at Google for Startups - moved into product, never stopped coding.
              Quantum Physics researcher. Haas School of Business alumnus (UC Berkeley).
            </p>
            <div className="flex flex-wrap gap-2 mb-8">
              {["AI Strategy", "AI Adoption", "Agentic AI", "Multi-Agent Systems", "Agentic UX", "HITL Design", "Product Discovery", "LLM Agent Building", "RAG", "MCP", "Claude Code", "Python", "0→1", "Enterprise SaaS", "GTM for AI"].map((t) => (
                <span key={t} className="tech-tag">{t}</span>
              ))}
            </div>
            <div className="flex items-center gap-2 text-sm text-zinc-500 flex-wrap">
              <span>Previously at</span>
              {["Google for Startups", "ButterCMS", "Qtravel.ai", "AirHelp", "Huuuge Games"].map((c, i) => (
                <span key={c}>
                  <span className="text-zinc-300 font-medium">{c}</span>
                  {i < 4 && <span className="mx-2">·</span>}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

export function BelieveSection() {
  const beliefs = [
    { num: "01", title: "My job shifted from 'what to build?' to 'how should AI behave?'", body: "I no longer just define features. I define the character, knowledge, and capabilities of intelligent systems. Every LLM has fundamental constraints - hallucination, context limits, knowledge cutoff, inconsistency. My edge is knowing which of the six levers to pull - instructions, knowledge, memory, tools, reasoning, fine-tuning - to shape AI behavior that reliably solves real problems, not just demos well." },
    { num: "02", title: "The best AI product is the one users don't notice.", body: "AI should operate inside existing workflows, not demand new ones. The moment a user has to learn a new interface to use your AI feature, you've already lost. I design AI systems that fit the job to be done - not the other way around." },
    { num: "03", title: "Outcomes first. Question the constraint first.", body: "I don't start with 'how do we add AI to this?' I start with 'which old constraints no longer exist - and what's now possible that wasn't before?' AI unlocks new problem spaces: previously impossible problems become solvable at scale, speed, and complexity. Sometimes that changes everything. Sometimes it doesn't. I know the difference." },
    { num: "04", title: "The PM who can prototype wins.", body: "Every major feature I've shipped started as a working prototype I built myself - before a single sprint was committed. This is the biggest leverage point in modern product: de-risk the roadmap in 48 hours instead of 6 weeks. I do this with Claude Code, Python, and LLM APIs." },
  ];
  return (
    <Section id="believe" className="py-24 relative">
      <div className="absolute inset-0 dot-grid opacity-10" />
      <div className="container relative">
        <SectionHeader num="02.5" label="What I Believe" />
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 leading-tight" style={{ fontFamily: "var(--font-display)" }}>
          How I think about<br /><span className="gradient-text">AI products.</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {beliefs.map((b, i) => (
            <motion.div
              key={b.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative p-6 rounded-xl border border-white/8 bg-white/3 hover:border-indigo-500/40 hover:bg-indigo-500/5 transition-all duration-300 group"
            >
              <span className="text-xs font-mono text-indigo-400/60 mb-3 block" style={{ fontFamily: "var(--font-mono)" }}>{b.num}</span>
              <h3 className="text-lg font-bold text-white mb-3 leading-snug group-hover:text-indigo-200 transition-colors" style={{ fontFamily: "var(--font-display)" }}>{b.title}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">{b.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}

export function ServicesSection() {
  const primary = [
    { icon: <Brain size={22} />, title: "AI Product Leader (Full-Time / Fractional)", desc: "I own the AI roadmap end-to-end: vision, strategy, team alignment, and shipping. I translate probabilistic AI behavior into reliable products - knowing which levers to pull, how to build the business case, and how to get C-suite buy-in. Not advise. Deliver.", tags: ["AI Product Leader", "AI Roadmap", "0→1", "Team Leadership", "C-Suite"] },
    { icon: <Search size={22} />, title: "AI Product Strategy & Roadmap Ownership", desc: "I build AI product strategy from first principles: where is the niche, what is the real differentiator, which AI architecture fits the use case. I translate ambiguous business goals into a prioritized AI roadmap.", tags: ["AI Strategy", "Product Roadmap", "JTBD", "Differentiation", "OKRs"] },
    { icon: <TrendingUp size={22} />, title: "AI Business Case & C-Suite Communication", desc: "I build the economic case for AI investments and present it to boards in language they trust. My documented case: 98% task time reduction, 3× capacity increase, $191 net savings per task, 1.3-year payback.", tags: ["ROI Analysis", "Business Case", "C-Suite", "Unit Economics", "GTM"] },
  ];

  const secondary = [
    { icon: <Target size={22} />, title: "AI Adoption & Team Enablement", desc: "Workflow mapping, highest-ROI automation targets, first sprint, team training." },
    { icon: <Code2 size={22} />, title: "Rapid AI Prototyping", desc: "Hypothesis to functional prototype in 24–48 hours using Claude Code, Python, LLM APIs." },
    { icon: <Layers size={22} />, title: "AI System Architecture", desc: "End-to-end design using the 4D framework: Discovery, Design, Development, Deployment." },
    { icon: <Zap size={22} />, title: "Agentic UX Design", desc: "AI agents operating inside existing workflows - four B2B patterns." },
    { icon: <Building2 size={22} />, title: "Enterprise AI Readiness", desc: "SSO, RBAC, audit logs, multi-tenancy, LLMOps, evals - the layer enterprise buyers require." },
    { icon: <Globe size={22} />, title: "Forward-Deployed Solutions", desc: "Embed with customers to deploy and configure AI in their environment." },
  ];

  return (
    <Section id="services" className="py-24 relative">
      <div className="absolute inset-0 dot-grid opacity-20" />
      <div className="container relative">
        <SectionHeader num="03" label="Services" />
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight" style={{ fontFamily: "var(--font-display)" }}>
            What I bring<br /><span className="gradient-text">to your team.</span>
          </h2>
          <p className="text-zinc-400 max-w-sm text-sm leading-relaxed">
            Primarily targeting full-time AI Product Leader and Head of AI Product roles. Fractional engagements available.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4 mb-4">
          {primary.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="card-hover p-6 rounded-xl border border-indigo-500/25 bg-indigo-600/5 group"
            >
              <div className="w-10 h-10 rounded-lg bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400 mb-4 group-hover:bg-indigo-600/30 transition-colors">
                {s.icon}
              </div>
              <h3 className="text-base font-semibold text-white mb-2" style={{ fontFamily: "var(--font-display)" }}>{s.title}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed mb-4">{s.desc}</p>
              <div className="flex flex-wrap gap-1.5">
                {s.tags.map((t) => <span key={t} className="tech-tag">{t}</span>)}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="p-6 rounded-xl border border-white/8 bg-[oklch(0.13_0.007_265)]"
        >
          <p className="text-xs text-zinc-500 uppercase tracking-wider mb-4" style={{ fontFamily: "var(--font-mono)" }}>Additional capabilities</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {secondary.map((s) => (
              <div key={s.title} className="flex gap-3">
                <div className="shrink-0 w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-indigo-400/70">
                  {s.icon}
                </div>
                <div>
                  <p className="text-sm font-medium text-zinc-300 mb-0.5">{s.title}</p>
                  <p className="text-xs text-zinc-500 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="mt-8 text-center">
          <a href="#contact" className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-medium rounded-md transition-all duration-200 hover:shadow-lg hover:shadow-indigo-500/25">
            Discuss your project <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </Section>
  );
}

export function CTABanner() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/10 via-indigo-500/5 to-transparent" />
      <div className="absolute inset-0 dot-grid opacity-10" />
      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-between gap-8 p-10 rounded-2xl border border-indigo-500/20 bg-indigo-600/5"
        >
          <div className="max-w-xl text-center md:text-left">
            <p className="text-xs font-mono text-indigo-400 tracking-widest uppercase mb-3">Ready when you are</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-3" style={{ fontFamily: "var(--font-display)" }}>
              Let&apos;s build something<br /><span className="gradient-text">together.</span>
            </h2>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Open to full-time AI Product Leader and Senior AI PM roles, and fractional engagements - I lead your AI roadmap end-to-end, build the business case, or ship a working prototype in 48 hours.
            </p>
          </div>
          <div className="shrink-0">
            <a
              href="#contact"
              className="flex items-center gap-2 px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-lg transition-all duration-200 hover:shadow-xl hover:shadow-indigo-500/25 text-base"
            >
              Work with me <ArrowRight size={18} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function TestimonialsSection() {
  const testimonials = [
    { quote: "Łukasz approaches AI strategically - thinking in systems, agentic workflows, decision boundaries, and durable differentiation. He defines where AI creates real leverage for users and the business. A unique combination of deep technical knowledge, AI fluency, and strategic depth with a product sense.", name: "Michael Sonier", role: "Co-Founder, Delano Bat Company · ex-ButterCMS (managed Łukasz directly)", initials: "MS", avatar: "/avatars/michael-sonier.png", placeholder: false },
    { quote: "He developed a sharp perspective on how AI can be applied strategically - prototyping AI-powered concepts himself to evaluate feasibility before involving larger teams, keeping exploration lean, grounded, and tied to real product value. Genuinely technical, high-agency, and the kind of PM who creates momentum: problems get unstuck, decisions get made, things ship.", name: "Wiktor Walc", role: "CTO, Tiugo Technologies · managed Łukasz directly at ButterCMS", initials: "WW", avatar: "/avatars/wiktor-walc.png", placeholder: false },
    { quote: "He designed our multi-agent system architecture alongside engineering - model selection, cost optimisation across LLM tiers, circuit breaker patterns for production reliability, and observability design. His AI personalisation layer drove +80% conversion and 25% revenue growth. These were not lucky wins - the result of disciplined strategic thinking and relentless follow-through.", name: "Tomasz Krupa", role: "Head of AI, QTravel.ai · built the LLM travel engine with Łukasz", initials: "TK", avatar: "/avatars/tomasz-krupa.jpg", placeholder: false },
  ];
  return (
    <Section id="testimonials" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 80% 50% at 50% 50%, oklch(0.18 0.04 265 / 0.4), transparent)" }} />
      <div className="container relative">
        <SectionHeader num="05.5" label="Testimonials" />
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight" style={{ fontFamily: "var(--font-display)" }}>
            What people<br /><span className="gradient-text">say about me.</span>
          </h2>
          <p className="text-zinc-400 text-xs max-w-xs leading-relaxed italic">
            Full letters of recommendation available on request.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className={`relative p-6 rounded-xl border flex flex-col gap-4 ${t.placeholder ? "border-dashed border-white/15 bg-white/2" : "border-white/8 bg-white/3 hover:border-indigo-500/40 hover:bg-indigo-500/5"} transition-all duration-300`}
            >
              <svg className="text-indigo-400/40 shrink-0" width="24" height="18" viewBox="0 0 24 18" fill="currentColor">
                <path d="M0 18V10.8C0 7.2 1.2 4.2 3.6 1.8L5.4 0l2.4 1.8C6.6 3 5.7 4.5 5.1 6H9V18H0zm15 0V10.8c0-3.6 1.2-6.6 3.6-9L20.4 0l2.4 1.8C21.6 3 20.7 4.5 20.1 6H24V18H15z" />
              </svg>
              <p className={`text-sm leading-relaxed flex-1 ${t.placeholder ? "text-zinc-500 italic" : "text-zinc-300"}`}>{t.quote}</p>
              <div className="flex items-center gap-3 pt-2 border-t border-white/6">
                {t.avatar ? (
                  <Image src={t.avatar} alt={t.name} width={32} height={32} className="w-8 h-8 rounded-full object-cover object-top border border-indigo-500/30 shrink-0" />
                ) : (
                  <div className="w-8 h-8 rounded-full bg-indigo-600/30 border border-indigo-500/30 flex items-center justify-center text-xs font-bold text-indigo-300 shrink-0">{t.initials}</div>
                )}
                <div>
                  <p className={`text-sm font-semibold ${t.placeholder ? "text-zinc-500" : "text-white"}`}>{t.name}</p>
                  <p className="text-xs text-zinc-400">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}

const STATUS_STYLES = {
  live: "bg-emerald-500/15 text-emerald-400 border-emerald-500/30",
  writing: "bg-blue-500/15 text-blue-400 border-blue-500/30",
  soon: "bg-zinc-500/15 text-zinc-400 border-zinc-500/30",
};
const STATUS_LABELS = { live: "Live", writing: "Published", soon: "Coming soon" };

interface PortfolioItem {
  title: string;
  desc: string;
  tags: string[];
  status: "live" | "writing" | "soon";
  links: { github?: string; demo?: string };
  metrics: string;
}

export function PortfolioSection() {
  const portfolio: PortfolioItem[] = [
    { title: "appspeaker.io", desc: "AI Agent for Google Play App Reviews. Automatically monitors, analyzes, and responds to user reviews using LLMs. Built end-to-end with Claude Agent API.", tags: ["Claude Agent API", "AI Agent", "NLP", "Google Play", "Python"], status: "live", links: { demo: "https://appspeaker.io" }, metrics: "Automated review intelligence" },
    { title: "Semantic Travel Search", desc: "NLP-powered search engine for Qtravel.ai. Intent detection, semantic matching, and personalized recommendations.", tags: ["NLP", "Semantic Search", "Python", "Qtravel.ai"], status: "live", links: { demo: "https://qtravel.ai" }, metrics: "Semantic search at scale" },
    { title: "AI Agentic Playbook", desc: "End-to-end playbook for building 0→1 AI-native products from first principles. 98% task time reduction documented.", tags: ["Agentic AI", "0→1", "Multi-Agent", "HITL", "Playbook"], status: "writing", links: { demo: "https://miadowicz.com/blog/the-agentic-ai-playbook-building-0-to-1-products-from-first-principles" }, metrics: "98% task time reduction" },
    { title: "AI Decision Framework for PMs", desc: "A structured decision tree for product managers: when to use AI, which architecture to choose, and how to evaluate build vs. buy vs. fine-tune.", tags: ["Product Strategy", "Framework", "AI", "Open Source"], status: "writing", links: { demo: "https://miadowicz.com/blog/when-should-you-use-ai-decision-framework-for-pms" }, metrics: "Published article" },
    { title: "Your project here", desc: "Coming soon - a Claude Code experiment, open-source tool, or case study from current work.", tags: ["Coming Soon"], status: "soon", links: {}, metrics: "" },
    { title: "Your project here", desc: "Coming soon - a RAG-powered tool, growth experiment write-up, or enterprise feature case study.", tags: ["Coming Soon"], status: "soon", links: {}, metrics: "" },
  ];

  return (
    <Section id="portfolio" className="py-24 bg-[oklch(0.12_0.006_265)]">
      <div className="container">
        <SectionHeader num="04" label="Portfolio" />
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight" style={{ fontFamily: "var(--font-display)" }}>
            Things I&apos;ve<br /><span className="gradient-text">built &amp; shipped.</span>
          </h2>
          <p className="text-zinc-400 max-w-sm text-sm leading-relaxed">A mix of open-source tools, frameworks, and production products.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {portfolio.map((p, i) => (
            <motion.div
              key={p.title + i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className={`card-hover flex flex-col p-6 rounded-xl border bg-[oklch(0.14_0.008_265)] ${p.status === "soon" ? "border-white/5 opacity-50" : "border-white/8"}`}
            >
              <div className="flex items-start justify-between gap-2 mb-3">
                <h3 className="text-base font-semibold text-white leading-snug" style={{ fontFamily: "var(--font-display)" }}>{p.title}</h3>
                <span className={`shrink-0 text-xs px-2 py-0.5 rounded-full border ${STATUS_STYLES[p.status]}`} style={{ fontFamily: "var(--font-mono)" }}>
                  {STATUS_LABELS[p.status]}
                </span>
              </div>
              <p className="text-zinc-400 text-sm leading-relaxed mb-4 flex-1">{p.desc}</p>
              {p.metrics && <div className="text-indigo-400 text-sm font-medium mb-4" style={{ fontFamily: "var(--font-mono)" }}>→ {p.metrics}</div>}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {p.tags.map((t) => <span key={t} className="tech-tag">{t}</span>)}
              </div>
              {p.status !== "soon" && (
                <div className="flex items-center gap-3 pt-3 border-t border-white/5">
                  {"github" in p.links && p.links.github && (
                    <a href={p.links.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-xs text-zinc-500 hover:text-zinc-300 transition-colors">
                      <Github size={13} /> Code
                    </a>
                  )}
                  {"demo" in p.links && p.links.demo && (
                    <a href={p.links.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-xs text-zinc-500 hover:text-indigo-400 transition-colors">
                      <Globe size={13} /> View project
                    </a>
                  )}
                </div>
              )}
            </motion.div>
          ))}
        </div>
        <div className="mt-8 p-6 rounded-xl border border-dashed border-indigo-500/30 bg-indigo-600/5 text-center">
          <p className="text-zinc-400 text-sm mb-3">
            <span className="text-indigo-400 font-medium">More projects coming.</span> Currently building open-source AI tools and agent harness frameworks.
          </p>
          <a href="#contact" className="inline-flex items-center gap-2 text-sm text-indigo-400 hover:text-indigo-300 transition-colors">
            Let&apos;s build something together <ArrowRight size={13} />
          </a>
        </div>
      </div>
    </Section>
  );
}

export function CaseStudiesSection() {
  const cases = [
    {
      tag: "AI Travel Platform · 0→1",
      company: "Qtravel.ai",
      title: "From 4-Hour Proposals to 5 Minutes - 3× Capacity, +80% Conversion",
      desc: "Travel agents were spending 4 hours per proposal. I found the niche: semantic search and AI personalization that no competitor had built yet. Designed the system, led cross-functional product and engineering, and shipped it. Proposal creation dropped from 4 hours to 5 minutes of human review. Capacity tripled. Conversion increased 80%. Net savings: $191 per task · 1.3-year payback period.",
      metrics: [{ value: "+80%", label: "Conversion increase" }, { value: "98%", label: "Task time reduction" }, { value: "3×", label: "Capacity increase" }],
      img: CASE_STUDY_IMG,
      tags: ["Multi-Agent", "LLMs", "Semantic Search", "HITL", "0→1"],
    },
    {
      tag: "Applied AI · SaaS · 2024–Present",
      company: "ButterCMS (Tiugo)",
      title: "0 to Alpha in Under 3 Months - 40% Conversion Lift, Executive Buy-In",
      desc: "Content teams were losing time to manual CMS workflows. I identified the opportunity, built the business case, and personally coded the prototype end-to-end using Claude Code. Alpha adoption signals secured a full executive strategy shift. 40% conversion increase, 30% reduction in content creation time.",
      metrics: [{ value: "+40%", label: "Conversion increase" }, { value: "-30%", label: "Content creation time" }, { value: "<3mo", label: "0 to Alpha" }],
      img: null,
      tags: ["Claude Code", "AI Agents", "LLM", "SaaS", "Applied AI"],
    },
  ];

  return (
    <Section id="work" className="py-24">
      <div className="container">
        <SectionHeader num="05" label="Case Studies" />
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 leading-tight" style={{ fontFamily: "var(--font-display)" }}>
          Work that<br /><span className="gradient-text">moved the needle.</span>
        </h2>
        <div className="space-y-6">
          {cases.map((c, i) => (
            <motion.div
              key={c.company}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.7 }}
              className="card-hover rounded-2xl border border-white/8 bg-[oklch(0.13_0.007_265)] overflow-hidden"
            >
              <div className="grid md:grid-cols-2 gap-0">
                <div className="p-8 md:p-10">
                  <div className="flex items-center gap-2 mb-3"><span className="tech-tag">{c.tag}</span></div>
                  <h3 className="text-2xl font-bold text-white mb-3 leading-snug" style={{ fontFamily: "var(--font-display)" }}>{c.title}</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed mb-6">{c.desc}</p>
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {c.metrics.map((m) => (
                      <div key={m.label}>
                        <div className="text-2xl font-bold text-indigo-400" style={{ fontFamily: "var(--font-display)" }}>{m.value}</div>
                        <div className="text-xs text-zinc-500">{m.label}</div>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-1.5">{c.tags.map((t) => <span key={t} className="tech-tag">{t}</span>)}</div>
                </div>
                <div className="relative min-h-48 md:min-h-0 bg-[oklch(0.11_0.006_265)]">
                  {c.img ? (
                    <Image src={c.img} alt={c.title} fill className="object-cover opacity-80" loading="lazy" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center p-8">
                      <div className="text-center">
                        <div className="text-6xl font-bold gradient-text mb-2" style={{ fontFamily: "var(--font-display)" }}>20</div>
                        <div className="text-zinc-500 text-sm">enterprises in Alpha</div>
                        <div className="text-indigo-400 text-sm font-medium mt-2">NPS 99 · Alpha cohort</div>
                      </div>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.13_0.007_265)] via-transparent to-transparent md:block hidden" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}

export function ExperienceSection() {
  const jobs = [
    { company: "ButterCMS (Tiugo)", role: "Senior Technical Product Manager - AI & Strategy", period: "2024 – Present", desc: "Sole AI PM at a Series A SaaS. Defined the AI roadmap, secured C-suite buy-in, and personally coded the first prototype in Claude Code. Shipped AI-native CMS Alpha in under 3 months with 20 enterprise customers. +40% conversion increase. Won Tiugo AI Leadership Spotlight Award and Unsung Hero 2025." },
    { company: "Qtravel.ai", role: "Head of AI Product", period: "2022 – 2024", desc: "Led AI product 0→1 for an LLM-based Travel Search Engine. Owned the full AI roadmap, led cross-functional product and engineering teams, and shipped an agentic proposal system. Results: 98% task time reduction, $191 net savings per task, 3× capacity increase, +80% conversion, +25% revenue growth." },
    { company: "Google for Startups", role: "Product Advisor & Software Engineer", period: "2021 – 2022 · part-time", desc: "Part-time advisory role concurrent with Huuuge Games. Coached 15 startup product teams on AI product strategy, success metrics, and GTM. Enabled 30% faster GTM via AI-powered social UA testing. Introduced Firebase analytics - 10% reduction in churn." },
    { company: "Huuuge Games", role: "Senior Product Manager", period: "2018 – 2022", desc: "Built an AI/ML-driven market intelligence platform for M&A - +70% target acquisition rate. Predictive analytics dashboard - 20% faster deal closure. Led gaming products with millions of daily active users across multiple titles." },
    { company: "AirHelp Inc.", role: "AI Product Manager", period: "2015 – 2017", desc: "Launched a claim-check bot - reduced processing time from 20s to 20ms (1000× faster). Led B2B data integration with Expedia & Kayak via ML-powered eligibility prediction." },
  ];

  return (
    <Section id="experience" className="py-24 bg-[oklch(0.12_0.006_265)]">
      <div className="container">
        <SectionHeader num="06" label="Experience" />
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-12" style={{ fontFamily: "var(--font-display)" }}>
          Where I&apos;ve<br /><span className="gradient-text">been shaped.</span>
        </h2>
        <div className="relative">
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500/50 via-indigo-500/20 to-transparent" />
          <div className="space-y-10">
            {jobs.map((j, i) => (
              <motion.div
                key={j.company}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className={`relative pl-8 md:pl-0 ${i % 2 === 0 ? "md:pr-[calc(50%+2rem)]" : "md:pl-[calc(50%+2rem)]"}`}
              >
                <div className="absolute left-0 md:left-1/2 top-2 w-3 h-3 rounded-full bg-indigo-500 border-2 border-[oklch(0.12_0.006_265)] -translate-x-1/2 z-10" />
                <div className="p-6 rounded-xl border border-white/8 bg-[oklch(0.14_0.008_265)]">
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <div>
                      <div className="font-semibold text-white" style={{ fontFamily: "var(--font-display)" }}>{j.company}</div>
                      <div className="text-indigo-400 text-sm">{j.role}</div>
                    </div>
                    <span className="text-xs text-zinc-500 whitespace-nowrap" style={{ fontFamily: "var(--font-mono)" }}>{j.period}</span>
                  </div>
                  <p className="text-zinc-400 text-sm leading-relaxed">{j.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

export function BlogPreviewSection() {
  const posts = [
    { title: "What Is an Agent Harness - and Why 90% of AI Builders Miss It", excerpt: "Most AI builders focus on the LLM prompt. The Agent Harness is the infrastructure that makes an AI agent actually reliable in production - handling loops, tools, state, safety, and context.", tag: "AI Engineering", href: "/blog/what-is-agent-harness" },
    { title: "The Age of Amplification: What I See Coming in AI by 2030", excerpt: "A first-principles analysis of AI's trajectory to 2030 - exponential acceleration, self-improving systems, multi-agent coordination, and why this is the Age of Amplification, not automation.", tag: "AI Strategy", href: "/blog/the-age-of-amplification-ai-predictions-2030-first-principles" },
    { title: "From PM to Venture Builder: The Definitive Guide to the Career Move Nobody Talks About", excerpt: "A comprehensive guide to moving from Product Manager to Venture Builder - skills to build, a venture launch playbook, metrics & governance, AI moats, and how to pitch the role internally.", tag: "Corporate Innovation", href: "/blog/from-pm-to-venture-builder-the-definitive-guide-to-the-career-move-nobody-talks-about" },
  ];

  return (
    <Section id="blog" className="py-24">
      <div className="container">
        <SectionHeader num="07" label="Writing" />
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight" style={{ fontFamily: "var(--font-display)" }}>
            Thinking out<br /><span className="gradient-text">loud.</span>
          </h2>
          <Link href="/blog" className="flex items-center gap-2 text-indigo-400 hover:text-indigo-300 text-sm transition-colors">
            All articles <ExternalLink size={14} />
          </Link>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {posts.map((p, i) => {
            const isExternal = p.href.startsWith("http");
            const cardClass = "card-hover group block p-6 rounded-xl border border-white/8 bg-[oklch(0.13_0.007_265)]";
            const inner = (
              <>
                <span className="tech-tag mb-4 inline-block">{p.tag}</span>
                <h3 className="text-base font-semibold text-white mb-3 leading-snug group-hover:text-indigo-300 transition-colors" style={{ fontFamily: "var(--font-display)" }}>{p.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-4">{p.excerpt}</p>
                <div className="flex items-center gap-1 text-indigo-400 text-sm group-hover:gap-2 transition-all" aria-hidden="true">
                  Read more <ArrowRight size={14} />
                </div>
              </>
            );
            return (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                {isExternal ? (
                  <a href={p.href} target="_blank" rel="noopener noreferrer" aria-label={`Read article: ${p.title}`} className={cardClass}>
                    {inner}
                  </a>
                ) : (
                  <Link href={p.href} aria-label={`Read article: ${p.title}`} className={cardClass}>
                    {inner}
                  </Link>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}

export function ProcessSection() {
  const steps = [
    {
      num: "01",
      title: "Discovery call (30 min)",
      desc: "We map your AI opportunity, current state, and what success looks like. No slides, no sales pitch — just a focused conversation about where AI creates real leverage for your business.",
    },
    {
      num: "02",
      title: "Proposal & scoping",
      desc: "I send a plain-language proposal within 24 hours: scope, engagement model (full-time, fractional, or sprint), timeline, and expected outcomes with measurable milestones.",
    },
    {
      num: "03",
      title: "First week: rapid audit",
      desc: "I embed quickly. In week one I audit your product, data, and team, identify the highest-ROI AI opportunities, and present a prioritized roadmap with the business case built in.",
    },
    {
      num: "04",
      title: "Build, ship, iterate",
      desc: "From roadmap to running code. I work alongside your team, own the AI product decisions, and stay until the metric moves — not until the contract ends.",
    },
  ];

  return (
    <Section id="process" className="py-24 relative">
      <div className="absolute inset-0 dot-grid opacity-15" />
      <div className="container relative">
        <SectionHeader num="04" label="How we work together" />
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight" style={{ fontFamily: "var(--font-display)" }}>
            From first call<br /><span className="gradient-text">to shipping AI.</span>
          </h2>
          <p className="text-zinc-400 max-w-sm text-sm leading-relaxed">
            A repeatable process I&apos;ve refined across five AI 0→1 builds. Fast to start, focused on outcomes.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="relative p-6 rounded-xl border border-white/8 bg-[oklch(0.13_0.007_265)] group hover:border-indigo-500/30 transition-colors"
            >
              <span className="text-[11px] font-mono text-indigo-400/60 tracking-widest mb-3 block">{step.num}</span>
              <h3 className="text-base font-semibold text-white mb-2" style={{ fontFamily: "var(--font-display)" }}>{step.title}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            href="/fractional"
            className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-medium rounded-md transition-all duration-200 hover:shadow-lg hover:shadow-indigo-500/25 mr-3"
          >
            See engagement models <ArrowRight size={16} />
          </Link>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 border border-white/10 hover:border-indigo-500/40 text-zinc-300 hover:text-white font-medium rounded-md transition-all duration-200"
          >
            Book a call
          </a>
        </div>
      </div>
    </Section>
  );
}

export function Footer() {
  return (
    <footer role="contentinfo" className="border-t border-white/5 py-8">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-zinc-400">
        <div className="font-bold text-zinc-400" style={{ fontFamily: "var(--font-display)" }}>
          miadowicz<span className="text-indigo-500">.</span>
        </div>
        <div>© {new Date().getFullYear()} Łukasz Miądowicz</div>
        <div className="flex items-center gap-4">
          <Link href="/fractional" className="hover:text-zinc-400 transition-colors">Hire Me</Link>
          <Link href="/speaking" className="hover:text-zinc-400 transition-colors">Speaking</Link>
          <Link href="/blog" className="hover:text-zinc-400 transition-colors">Blog</Link>
          <Link href="/glossary" className="hover:text-zinc-400 transition-colors">Glossary</Link>
          <a href="https://www.linkedin.com/in/lukaszmiadowicz/" target="_blank" rel="noopener noreferrer me" className="hover:text-zinc-400 transition-colors">LinkedIn</a>
          <a href="https://x.com/miadowicz" target="_blank" rel="noopener noreferrer me" className="hover:text-zinc-400 transition-colors">X</a>
        </div>
      </div>
    </footer>
  );
}
