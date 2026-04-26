import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { HeroSection } from "@/components/HeroSection";
import { TrustBar } from "@/components/TrustBar";
import { StatsBar } from "@/components/StatsBar";
import {
  AboutSection,
  BelieveSection,
  ServicesSection,
  CTABanner,
  TestimonialsSection,
  PortfolioSection,
  CaseStudiesSection,
  ExperienceSection,
  BlogPreviewSection,
  ProcessSection,
  Footer,
} from "@/components/HomeSections";
import { ContactSection } from "@/components/ContactForm";
import { homeSchemas } from "@/lib/schema";

export const metadata: Metadata = {
  title: {
    absolute: "AI Product Leader & AI Strategy | Łukasz Miądowicz",
  },
  description:
    "AI Product Leader & Head of AI Product. I define how AI should behave. $80M ARR scaled, 98% task time reduction. PhD Quantum Physics. Ex-Google SWE. Full-time & contract.",
  keywords: [
    "AI Product Leader", "Head of AI Product", "AI Strategy", "AI Adoption", "Agentic AI",
    "Multi-Agent Systems", "Agent Harness Builder", "Senior AI PM",
    "Head of AI Product", "Solutions Engineering", "R&D AI",
    "Forward Deployed PM", "Agentic UX", "HITL Design",
    "LLM Orchestration", "RAG", "MCP", "Claude Code", "AI Product Engineer",
    "how should AI behave", "AI product roadmap", "AI business case",
  ],
  alternates: { canonical: "https://miadowicz.com" },
  openGraph: {
    type: "website",
    url: "https://miadowicz.com",
    title: "AI Product Leader & AI Strategy Lead | Łukasz Miądowicz",
    description: "AI Product Leader & Head of AI Product. I define how AI should behave. $80M ARR scaled. 98% task time reduction. PhD Quantum Physics. Ex-Google SWE.",
  },
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[oklch(0.1_0.005_265)]">
      {/* JSON-LD structured data - SSR'd in initial HTML for Google E-E-A-T */}
      {homeSchemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      <a href="#main-content" className="skip-link">Skip to main content</a>
      <Nav />

      <main id="main-content" role="main" tabIndex={-1}>
        <HeroSection />
        <TrustBar />
        <StatsBar />
        <AboutSection />
        <BelieveSection />
        <ServicesSection />
        <CTABanner />
        <TestimonialsSection />
        <PortfolioSection />
        <CaseStudiesSection />
        <ExperienceSection />
        <BlogPreviewSection />
        <ProcessSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
