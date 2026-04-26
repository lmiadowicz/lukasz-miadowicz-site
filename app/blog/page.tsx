import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { ChevronRight, Clock } from "lucide-react";
import { getAllPosts, formatDate } from "@/lib/blog";
import { BlogTagFilter } from "@/components/BlogTagFilter";
import { Nav } from "@/components/Nav";

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<{ category?: string; q?: string }>;
}): Promise<Metadata> {
  const { category } = await searchParams;
  const base: Metadata = {
    title: { absolute: "AI Agents, Product Leadership & Prototyping | miadowicz." },
    description:
      "Insights on AI agents, agent harness architecture, product discovery, and building AI-native products. By Łukasz Miądowicz - AI Product Leader.",
    keywords: "AI agents blog, agent harness, AI product management, LLM engineering, product discovery, AI prototyping, agentic AI",
    alternates: { canonical: "https://miadowicz.com/blog" },
    openGraph: {
      type: "website",
      url: "https://miadowicz.com/blog",
      title: "Blog - AI Agents, Product Leadership & Prototyping | Łukasz Miądowicz",
      description: "Insights on AI agents, agent harness architecture, product discovery, and building AI-native products.",
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
  if (category) {
    base.robots = { index: false, follow: true };
    base.alternates = { canonical: "https://miadowicz.com/blog" };
  }
  return base;
}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://miadowicz.com" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://miadowicz.com/blog" },
  ],
};

const blogListSchema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  "@id": "https://miadowicz.com/blog#blog",
  name: "Łukasz Miądowicz - AI Product Blog",
  description: "Insights on AI agents, product leadership, rapid prototyping, and building AI-native products.",
  url: "https://miadowicz.com/blog",
  author: {
    "@type": "Person",
    "@id": "https://miadowicz.com/#person",
    name: "Łukasz Miądowicz",
    url: "https://miadowicz.com",
    jobTitle: "AI Product Leader & AI Strategy Lead",
  },
};

interface BlogPageProps {
  searchParams: Promise<{ category?: string; q?: string }>;
}

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const { category: activeCategory } = await searchParams;
  const allPosts = getAllPosts();

  // Ordered, deduplicated list of categories from posts
  const categories = Array.from(new Set(allPosts.map((p) => p.category)));

  const filtered = activeCategory
    ? allPosts.filter((p) => p.category === activeCategory)
    : allPosts;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogListSchema) }}
      />

      <div className="min-h-screen bg-[oklch(0.1_0.005_265)]">
        <a href="#blog-main" className="skip-link">Skip to main content</a>
        <Nav />

        <section className="pt-32 pb-16 border-b border-white/5">
          <div className="container">
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-zinc-500 mb-8">
              <Link href="/" className="hover:text-zinc-300 transition-colors">Home</Link>
              <ChevronRight size={12} />
              <span className="text-zinc-300">Blog</span>
            </nav>
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-mono text-indigo-400 tracking-widest uppercase">Writing</span>
                <div className="h-px flex-1 max-w-12 bg-indigo-500/40" />
              </div>
              <h1
                className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Thinking out loud<br /><span className="text-indigo-400">on AI &amp; Product.</span>
              </h1>
              <p className="text-zinc-400 text-lg leading-relaxed">
                Practical insights on AI agents, agent harness architecture, product discovery, and building AI-native products that bring real business value.
              </p>
            </div>
          </div>
        </section>

        <Suspense fallback={null}>
          <BlogTagFilter categories={categories} activeCategory={activeCategory ?? null} />
        </Suspense>

        <section id="blog-main" className="py-12" aria-label="Blog posts">
          <div className="container">
            {filtered.length === 0 ? (
              <div className="text-center py-24" role="status">
                <p className="text-zinc-500 text-lg">No posts found.</p>
                <Link href="/blog" className="mt-4 inline-block text-indigo-400 hover:text-indigo-300 text-sm">
                  Clear filter
                </Link>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 gap-4">
                {filtered.map((post) => (
                  <article key={post.slug} aria-labelledby={`post-title-${post.slug}`}>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="group flex flex-col gap-3 h-full p-6 rounded-xl border border-white/8 bg-[oklch(0.13_0.007_265)] hover:border-indigo-500/30 hover:bg-[oklch(0.14_0.008_265)] transition-all duration-200"
                    >
                      <span className="text-[11px] font-mono px-2 py-0.5 rounded border border-indigo-500/20 bg-indigo-600/10 text-indigo-400 uppercase tracking-widest self-start">
                        {post.category}
                      </span>
                      <h2
                        id={`post-title-${post.slug}`}
                        className="text-base md:text-lg font-bold text-white group-hover:text-indigo-300 transition-colors leading-snug"
                        style={{ fontFamily: "var(--font-display)" }}
                      >
                        {post.title}
                      </h2>
                      <p className="text-zinc-400 text-sm leading-relaxed line-clamp-2 flex-1">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center gap-3 pt-2 border-t border-white/5 text-xs text-zinc-500">
                        <time dateTime={post.date}>{formatDate(post.date)}</time>
                        <span className="flex items-center gap-1">
                          <Clock size={11} aria-hidden="true" />
                          {post.readTime}
                        </span>
                      </div>
                    </Link>
                  </article>
                ))}
              </div>
            )}
          </div>
        </section>

        <footer role="contentinfo" className="border-t border-white/5 py-8">
          <div className="container flex items-center justify-between text-xs text-zinc-400">
            <span>© {new Date().getFullYear()} Łukasz Miądowicz</span>
            <Link href="/" className="hover:text-zinc-400 transition-colors">← Back to home</Link>
          </div>
        </footer>
      </div>
    </>
  );
}
