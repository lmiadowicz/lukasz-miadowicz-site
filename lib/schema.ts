const BASE_URL = "https://miadowicz.com";

export const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${BASE_URL}/#person`,
  name: "Łukasz Miądowicz",
  alternateName: ["Lukasz Miadowicz", "Łukasz Miądowicz AI Product"],
  url: BASE_URL,
  image: {
    "@type": "ImageObject",
    "@id": `${BASE_URL}/#person-image`,
    url: "https://d36hbw14aib5lz.cloudfront.net/310519663586308671/LgBonsnnKaw8XvNGJedAgJ/lukasz-profile-v2_0ad88aa4.png",
    width: 400,
    height: 400,
    caption: "Łukasz Miądowicz — AI Product Leader & AI Strategy Lead",
  },
  jobTitle: "AI Product Leader & AI Strategy Lead",
  description:
    "I help companies grow revenue, cut costs, and move faster using AI as the lever. AI Product Leader, AI Strategy & Adoption Lead, Builder. $80M ARR scaled. 98% task time reduction documented. PhD Quantum Physics. Ex-Software Engineer at Google for Startups.",
  email: "l.miadowicz@gmail.com",
  knowsAbout: [
    "Revenue Growth via AI", "Cost Reduction via AI", "AI Product Leadership",
    "Head of AI Product", "AI Strategy & Adoption", "Niche & Differentiator Discovery",
    "Product Discovery", "Business Case for AI", "ROI Analysis", "GTM Strategy",
    "Multi-Agent Systems", "Agentic AI", "Rapid AI Prototyping", "LLM Agent Building",
    "Retrieval-Augmented Generation", "Claude Code", "Anthropic MCP", "HITL Design",
    "Agentic UX", "Enterprise AI Readiness", "Forward-Deployed Solutions",
    "Python", "TypeScript", "LangGraph", "CrewAI",
  ],
  hasCredential: [
    { "@type": "EducationalOccupationalCredential", name: "Quantum Physics Research (doctoral-level)", credentialCategory: "training" },
    { "@type": "EducationalOccupationalCredential", name: "Haas School of Business - Product Management", credentialCategory: "certificate" },
    { "@type": "EducationalOccupationalCredential", name: "Anthropic Claude Code Certification", credentialCategory: "certificate" },
  ],
  worksFor: { "@type": "Organization", name: "miadowicz. - AI Product Studio", url: BASE_URL },
  alumniOf: [
    { "@type": "Organization", name: "Google for Startups", url: "https://startup.google.com" },
    { "@type": "Organization", name: "AirHelp", url: "https://airhelp.com" },
    { "@type": "Organization", name: "ButterCMS", url: "https://buttercms.com" },
    { "@type": "Organization", name: "Huuuge Games", url: "https://huuugegames.com" },
  ],
  sameAs: [
    "https://www.linkedin.com/in/lukaszmiadowicz/",
    "https://x.com/miadowicz",
    "https://miadowicz.com/blog",
    "https://github.com/miadowicz",
  ],
  mainEntityOfPage: { "@type": "ProfilePage", "@id": `${BASE_URL}/#profile` },
};

export const profilePageSchema = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "@id": `${BASE_URL}/#profile`,
  url: BASE_URL,
  name: "Łukasz Miądowicz — AI Product Leader & AI Strategy Lead",
  description: "I help companies grow revenue, cut costs, and move faster using AI. $80M ARR scaled. 98% task time reduction documented. $191 net savings per task.",
  dateCreated: "2025-01-01",
  dateModified: new Date().toISOString().split("T")[0],
  mainEntity: { "@id": `${BASE_URL}/#person` },
  speakable: {
    "@type": "SpeakableSpecification",
    cssSelector: [".hero-headline", ".hero-subtitle", ".post-excerpt"],
  },
};

export const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${BASE_URL}/#service`,
  name: "miadowicz. - AI Product Studio",
  url: BASE_URL,
  description: "I help companies grow revenue, cut costs, and move faster using AI as the lever. AI Product Leader, AI Strategy & Adoption Lead, Builder.",
  provider: { "@id": `${BASE_URL}/#person` },
  areaServed: [
    { "@type": "Country", name: "Poland" },
    { "@type": "Continent", name: "Europe" },
    { "@type": "AdministrativeArea", name: "Remote Worldwide" },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "AI Product & Strategy Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "AI Product Leader", description: "End-to-end AI product leadership: vision, roadmap, team, stakeholder alignment. $80M ARR scaled. 98% task time reduction. $191 net savings per task." } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "AI Product Strategy & Roadmap", description: "Build AI product strategy from first principles. Translate business goals into a prioritized AI roadmap with clear success metrics." } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "AI Business Case & C-Suite Communication", description: "Build the economic case for AI investments. Documented: 98% task time reduction, 3× capacity increase, $191 net savings per task, 1.3-year payback." } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "AI Adoption & Team Enablement", description: "Move from AI experiments to AI operating models. Frameworks, workshops, and hands-on coaching for real business outcomes." } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Rapid AI Prototyping", description: "Validate ideas in working code in 24-48 hours using Claude Code, Python, and LLM APIs." } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "AI System Architecture", description: "End-to-end design of multi-agent AI systems with HITL, MCP, and observability." } },
    ],
  },
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${BASE_URL}/#website`,
  url: BASE_URL,
  name: "miadowicz.",
  description: "Łukasz Miądowicz — AI Product Leader & AI Strategy Lead",
  publisher: { "@id": `${BASE_URL}/#person` },
  potentialAction: {
    "@type": "SearchAction",
    target: { "@type": "EntryPoint", urlTemplate: `${BASE_URL}/blog?q={search_term_string}` },
    "query-input": "required name=search_term_string",
  },
};

export const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "@id": `${BASE_URL}/#methodology`,
  name: "How I Build AI Products That Deliver Business Outcomes — The 4D Framework",
  description: "My four-phase methodology for building AI products that deliver business outcomes: shaping AI behavior through six levers to expand problem spaces and create new solution categories.",
  author: { "@id": `${BASE_URL}/#person` },
  step: [
    { "@type": "HowToStep", position: 1, name: "AI Discovery", text: "Identify high-value AI use cases from first principles. Not every problem should be solved with AI — I find the ones where AI expands the problem space: previously unsolvable at scale, speed, or complexity." },
    { "@type": "HowToStep", position: 2, name: "AI Design", text: "Architecture, prototype, and configure the six levers — Instructions, Knowledge, Memory, Tools, Reasoning, Post-Training — to shape reliable AI behavior. Define HITL touchpoints and safety guardrails." },
    { "@type": "HowToStep", position: 3, name: "AI Development", text: "Build the prototype in code before committing engineering resources. Validate in 24-48 hours. Evaluate, refine, and ship with observability and evals." },
    { "@type": "HowToStep", position: 4, name: "AI Deployment", text: "Launch, monetize, and operate. Build the economic case: unit economics, payback period, pricing model, GTM strategy. Documented: $191 net savings per task, 1.3-year payback, 3× capacity." },
  ],
};

export const homepageFAQSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": `${BASE_URL}/#faq`,
  mainEntity: [
    {
      "@type": "Question",
      name: "What does a Head of AI Product actually do?",
      acceptedAnswer: { "@type": "Answer", text: "A Head of AI Product — or AI Product Leader — shifts focus from 'what should we build?' to 'how should AI behave?' — defining the character, knowledge, and capabilities of intelligent systems. They understand the eight fundamental LLM constraints (hallucination, knowledge cutoff, context limits, inconsistency, reasoning gaps, safety risks, cost & latency, model drift) and know which of the six levers — instructions, knowledge, memory, tools, reasoning, fine-tuning — to pull to build AI products that reliably solve real problems." },
    },
    {
      "@type": "Question",
      name: "How do you measure the ROI of an AI product?",
      acceptedAnswer: { "@type": "Answer", text: "Measure ROI by comparing the cost of the AI system (build + run) against the value it creates (time saved × hourly rate, revenue uplift, or cost avoided). A documented example: Qtravel.ai achieved 98% task time reduction (4 hours → 5 minutes per proposal), 3× capacity increase, and $191 net savings per task with a 1.3-year payback period." },
    },
    {
      "@type": "Question",
      name: "What is an Agent Harness in AI systems?",
      acceptedAnswer: { "@type": "Answer", text: "An Agent Harness is the infrastructure layer that makes AI agents production-ready. It consists of: an execution loop, a tool execution layer, context and memory management, state tracking, and safety guardrails. 90% of AI builders focus on the LLM prompt and miss the harness - which is why most AI agents fail in production." },
    },
    {
      "@type": "Question",
      name: "How do you adopt AI in a product without disrupting existing workflows?",
      acceptedAnswer: { "@type": "Answer", text: "The key is Agentic UX: design AI agents to operate inside existing workflows, not as separate chatbot interfaces. Four patterns work: Embedded Agent, Agents in Work Queue, Agents as Project Participants, and Parallel Agents as Management Interface." },
    },
  ],
};

export const homeSchemas = [
  personSchema,
  profilePageSchema,
  serviceSchema,
  websiteSchema,
  howToSchema,
  homepageFAQSchema,
];

export function generateBlogPostingSchema(post: {
  slug: string; title: string; excerpt: string; date: string;
  updated?: string; tags: string[]; category: string; readTime: string; image?: string;
  faq?: { question: string; answer: string }[];
  content: string;
}) {
  const url = `${BASE_URL}/blog/${post.slug}`;
  const plainText = post.content
    .replace(/```[\s\S]*?```/g, "")
    .replace(/`[^`]+`/g, "")
    .replace(/#{1,6}\s+/g, "")
    .replace(/[*_~]{1,2}([^*_~\n]+)[*_~]{1,2}/g, "$1")
    .replace(/!\[.*?\]\(.*?\)/g, "")
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/^\s*[-*+]\s+/gm, "")
    .replace(/^\s*\d+\.\s+/gm, "")
    .replace(/\n{2,}/g, " ")
    .trim();
  const words = plainText.split(/\s+/).filter(Boolean).length;
  const articleBody = plainText.split(/\s+/).filter(Boolean).slice(0, 200).join(" ");
  const minutes = parseInt(post.readTime) || 5;

  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${url}#article`,
    headline: post.title,
    description: post.excerpt,
    url,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    datePublished: post.date,
    dateModified: post.updated || post.date,
    author: {
      "@type": "Person", "@id": `${BASE_URL}/#person`,
      name: "Łukasz Miądowicz", url: BASE_URL,
      jobTitle: "AI Product Leader & AI Strategy Lead",
      sameAs: ["https://www.linkedin.com/in/lukaszmiadowicz/", "https://x.com/miadowicz"],
    },
    publisher: {
      "@type": "Organization", "@id": `${BASE_URL}/#organization`,
      name: "miadowicz.", url: BASE_URL,
      logo: { "@type": "ImageObject", url: `${BASE_URL}/favicon.svg`, width: 32, height: 32 },
    },
    articleBody,
    wordCount: words,
    timeRequired: `PT${minutes}M`,
    articleSection: post.category,
    keywords: post.tags.join(", "),
    inLanguage: "en-US",
    isAccessibleForFree: true,
    isPartOf: {
      "@type": "Blog", "@id": `${BASE_URL}/blog#blog`,
      name: "miadowicz. — AI Product Blog", url: `${BASE_URL}/blog`,
    },
    speakable: { "@type": "SpeakableSpecification", cssSelector: [".post-excerpt", "h1", "h2"] },
    about: post.tags.map((tag) => ({ "@type": "Thing", name: tag })),
  };

  if (post.faq?.length) {
    schema.teaches = post.faq.map((item) => ({ "@type": "DefinedTerm", name: item.question }));
  }
  if (post.image) {
    schema.image = { "@type": "ImageObject", url: post.image, width: 1200, height: 630 };
  }
  return schema;
}

export function generateFAQSchema(faq: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map(({ question, answer }) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: { "@type": "Answer", text: answer },
    })),
  };
}

export function generateBreadcrumbSchema(items: { name: string; item: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((el, i) => ({
      "@type": "ListItem", position: i + 1, name: el.name, item: el.item,
    })),
  };
}
