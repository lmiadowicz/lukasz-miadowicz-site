import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Clock, Calendar, Tag, ChevronRight } from "lucide-react";
import { Nav } from "@/components/Nav";
import { marked } from "marked";
import { getAllPosts, getPost, formatDate } from "@/lib/blog";
import {
  generateBlogPostingSchema,
  generateFAQSchema,
  generateBreadcrumbSchema,
} from "@/lib/schema";
import { ShareButton } from "@/components/ShareButton";

const BASE_URL = "https://miadowicz.com";
const PROFILE_IMG = "/avatars/lukasz.png";

marked.setOptions({ gfm: true, breaks: true });

export const dynamicParams = false;

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};

  const postUrl = `${BASE_URL}/blog/${post.slug}`;
  const fullTitle = `${post.title} | Łukasz Miądowicz`;
  const titleTag = post.metaTitle
    ? { absolute: `${post.metaTitle} | miadowicz.` }
    : post.title;

  return {
    title: titleTag,
    description: post.excerpt.length > 155
      ? post.excerpt.slice(0, post.excerpt.lastIndexOf(" ", 152)) + "..."
      : post.excerpt,
    keywords: post.tags,
    authors: [{ name: "Łukasz Miądowicz", url: BASE_URL }],
    alternates: { canonical: postUrl },
    openGraph: {
      type: "article",
      url: postUrl,
      title: fullTitle,
      description: post.excerpt.length > 155
        ? post.excerpt.slice(0, post.excerpt.lastIndexOf(" ", 152)) + "..."
        : post.excerpt,
      siteName: "miadowicz.",
      locale: "en_US",
      publishedTime: post.date,
      modifiedTime: post.updated || post.date,
      authors: [`${BASE_URL}/#person`],
      section: post.category,
      tags: post.tags,
      ...(post.image && {
        images: [{ url: post.image, width: 1200, height: 630, alt: post.title }],
      }),
    },
    twitter: {
      card: "summary_large_image",
      site: "@miadowicz",
      creator: "@miadowicz",
      title: fullTitle,
      description: post.excerpt.length > 155
        ? post.excerpt.slice(0, post.excerpt.lastIndexOf(" ", 152)) + "..."
        : post.excerpt,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const contentWithoutH1 = post.content.trimStart().replace(/^#[^#][^\n]*\n?/, "");
  const html = marked.parse(contentWithoutH1) as string;
  const postUrl = `${BASE_URL}/blog/${post.slug}`;
  const fullTitle = `${post.title} | Łukasz Miądowicz`;

  const allPosts = getAllPosts();
  const related = allPosts
    .filter((r) => r.slug !== slug && r.category === post.category)
    .slice(0, 2);

  const blogPostingSchema = generateBlogPostingSchema(post);
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", item: BASE_URL },
    { name: "Blog", item: `${BASE_URL}/blog` },
    { name: post.title, item: postUrl },
  ]);
  const faqSchema = post.faq?.length ? generateFAQSchema(post.faq) : null;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {faqSchema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      )}

      <div className="min-h-screen bg-[oklch(0.1_0.005_265)]">
        <a href="#article-main" className="skip-link">Skip to article</a>
        <Nav />

        <main id="article-main" className="pt-28 pb-24" tabIndex={-1}>
          <div className="max-w-3xl mx-auto px-4 md:px-6">
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-zinc-500 mb-8 mt-4">
              <ol className="flex items-center gap-2" role="list">
                <li><Link href="/" className="hover:text-zinc-300 transition-colors">Home</Link></li>
                <li aria-hidden="true"><ChevronRight size={12} /></li>
                <li><Link href="/blog" className="hover:text-zinc-300 transition-colors">Blog</Link></li>
                <li aria-hidden="true"><ChevronRight size={12} /></li>
                <li aria-current="page"><span className="text-zinc-400 truncate max-w-48">{post.title}</span></li>
              </ol>
            </nav>

            <header>
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="text-xs px-2 py-0.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-400 font-mono">
                  {post.category}
                </span>
                <span className="flex items-center gap-1 text-xs text-zinc-400">
                  <Clock size={11} aria-hidden="true" /> {post.readTime}
                </span>
                <time dateTime={post.date} className="flex items-center gap-1 text-xs text-zinc-400">
                  <Calendar size={11} aria-hidden="true" /> {formatDate(post.date)}
                </time>
              </div>

              <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight" style={{ fontFamily: "var(--font-display)" }}>
                {post.title}
              </h1>
              <p className="post-excerpt text-zinc-400 text-lg leading-relaxed mb-6" itemProp="description">
                {post.excerpt}
              </p>

              <div className="flex items-center justify-between py-4 border-y border-white/8 mb-8">
                <div className="flex items-center gap-3">
                  <Image
                    src={PROFILE_IMG}
                    alt="Łukasz Miądowicz"
                    width={36}
                    height={36}
                    className="rounded-full object-cover object-top border border-indigo-500/30"
                    priority
                  />
                  <div>
                    <p className="text-sm text-white font-medium">Łukasz Miądowicz</p>
                    <p className="text-xs text-zinc-500">AI Product Leader & AI Strategy Lead</p>
                  </div>
                </div>
                <ShareButton url={postUrl} />
              </div>
            </header>

            <div
              className="prose prose-invert prose-lg max-w-none
                prose-headings:font-bold prose-headings:text-white
                prose-h1:text-3xl prose-h2:text-2xl prose-h3:text-xl
                prose-p:text-zinc-300 prose-p:leading-relaxed
                prose-a:text-indigo-400 prose-a:no-underline hover:prose-a:text-indigo-300
                prose-strong:text-white
                prose-code:text-indigo-300 prose-code:bg-white/8 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm prose-code:font-mono
                prose-pre:bg-[oklch(0.14_0.008_265)] prose-pre:border prose-pre:border-white/8 prose-pre:rounded-xl
                prose-blockquote:border-l-indigo-500 prose-blockquote:text-zinc-300 prose-blockquote:bg-indigo-600/5 prose-blockquote:rounded-r-lg prose-blockquote:py-1
                prose-table:text-sm prose-th:text-zinc-300 prose-td:text-zinc-400
                prose-hr:border-white/10
                prose-li:text-zinc-300"
              dangerouslySetInnerHTML={{ __html: html }}
            />

            <ul className="flex flex-wrap gap-2 mt-12 pt-8 border-t border-white/8" aria-label="Article tags" role="list">
              {post.tags.map((tag) => (
                <li key={tag}>
                  <Link href={`/blog?tag=${encodeURIComponent(tag)}`} aria-label={`View posts tagged: ${tag}`} className="flex items-center gap-1 text-xs text-zinc-400 bg-white/5 hover:bg-white/10 px-3 py-2 rounded-full transition-colors min-h-[36px]">
                    <Tag size={10} aria-hidden="true" /> {tag}
                  </Link>
                </li>
              ))}
            </ul>

            {post.faq && post.faq.length > 0 && (
              <section
                className="mt-12 pt-8 border-t border-white/8"
                aria-label="Frequently Asked Questions"
                itemScope
                itemType="https://schema.org/FAQPage"
              >
                <h2 className="text-xl font-bold text-white mb-2" style={{ fontFamily: "var(--font-display)" }}>
                  Frequently Asked Questions
                </h2>
                <p className="text-zinc-500 text-sm mb-6">Quick answers to the most common questions about this topic.</p>
                <div className="space-y-3">
                  {post.faq.map((item, i) => (
                    <div key={i} itemScope itemType="https://schema.org/Question" itemProp="mainEntity">
                      <details className="group border border-white/8 rounded-xl bg-[oklch(0.14_0.008_265)] overflow-hidden">
                        <summary className="flex items-center justify-between p-5 cursor-pointer text-white font-medium text-sm hover:text-indigo-300 transition-colors list-none">
                          <span itemProp="name">{item.question}</span>
                          <ChevronRight size={16} className="text-zinc-500 group-open:rotate-90 transition-transform shrink-0 ml-3" aria-hidden="true" />
                        </summary>
                        <div
                          className="px-5 pb-5 text-zinc-400 text-sm leading-relaxed border-t border-white/5 pt-4"
                          itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer"
                        >
                          <span itemProp="text">{item.answer}</span>
                        </div>
                      </details>
                    </div>
                  ))}
                </div>
              </section>
            )}

            <section className="mt-12 p-6 rounded-xl border border-indigo-500/20 bg-indigo-600/5">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-indigo-600/30 border border-indigo-500/30 flex items-center justify-center text-indigo-400 text-lg font-bold shrink-0">Ł</div>
                <div>
                  <p className="text-white font-semibold mb-1" style={{ fontFamily: "var(--font-display)" }}>Łukasz Miądowicz</p>
                  <p className="text-zinc-400 text-sm leading-relaxed mb-3">
                    AI Product Leader, AI Strategy & Adoption Lead, Agent Harness Builder. I design AI systems that deliver business outcomes — not just features that respond. Ex-Software Engineer at Google for Startups. PhD Quantum Physics. $80M ARR scaled. 10+ years in product.
                  </p>
                  <Link href="/#contact" className="inline-flex items-center gap-1.5 text-sm text-indigo-400 hover:text-indigo-300 transition-colors font-medium">
                    Work with me <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            </section>

            {related.length > 0 && (
              <section className="mt-12">
                <h2 className="text-lg font-bold text-white mb-5" style={{ fontFamily: "var(--font-display)" }}>Related posts</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {related.map((r) => (
                    <Link key={r.slug} href={`/blog/${r.slug}`} aria-label={`Read related post: ${r.title}`} className="p-4 rounded-xl border border-white/8 hover:border-indigo-500/30 bg-[oklch(0.14_0.008_265)] hover:bg-[oklch(0.15_0.01_265)] transition-all block">
                      <p className="text-xs text-indigo-400 font-mono mb-2">{r.category}</p>
                      <p className="text-sm text-white font-medium leading-snug mb-2">{r.title}</p>
                      <p className="text-xs text-zinc-400 line-clamp-2">{r.excerpt}</p>
                    </Link>
                  ))}
                </div>
              </section>
            )}

            <div className="mt-12 pt-8 border-t border-white/8">
              <Link href="/blog" className="flex items-center gap-2 text-sm text-zinc-500 hover:text-zinc-300 transition-colors">
                <ArrowLeft size={14} /> Back to all posts
              </Link>
            </div>
          </div>
        </main>

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
