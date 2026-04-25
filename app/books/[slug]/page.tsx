import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Star, ChevronRight, ExternalLink } from "lucide-react";
import { Nav } from "@/components/Nav";
import { marked } from "marked";
import { getAllBooks, getBook, formatDate } from "@/lib/books";
import { generateBreadcrumbSchema } from "@/lib/schema";
import { ShareButton } from "@/components/ShareButton";

const BASE_URL = "https://miadowicz.com";
const PROFILE_IMG = "/avatars/lukasz.png";

marked.setOptions({ gfm: true, breaks: true });

export const dynamicParams = false;

export async function generateStaticParams() {
  const books = getAllBooks();
  return books.map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const book = getBook(slug);
  if (!book) return {};

  const bookUrl = `${BASE_URL}/books/${book.slug}`;
  const fullTitle = `${book.title} - Notes | Łukasz Miądowicz`;
  const description = book.excerpt.length > 155
    ? book.excerpt.slice(0, book.excerpt.lastIndexOf(" ", 152)) + "..."
    : book.excerpt;

  return {
    title: { absolute: `${book.title} | miadowicz.` },
    description,
    keywords: book.tags,
    authors: [{ name: "Łukasz Miądowicz", url: BASE_URL }],
    alternates: { canonical: bookUrl },
    openGraph: {
      type: "article",
      url: bookUrl,
      title: fullTitle,
      description,
      siteName: "miadowicz.",
      locale: "en_US",
      publishedTime: book.date,
    },
    twitter: {
      card: "summary_large_image",
      site: "@miadowicz",
      creator: "@miadowicz",
      title: fullTitle,
      description,
    },
  };
}

function RatingStars({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1" aria-label={`Rating: ${rating} out of 5`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={14}
          className={i < rating ? "text-indigo-400 fill-indigo-400" : "text-zinc-700"}
        />
      ))}
      <span className="ml-1 text-xs text-zinc-500">{rating}/5</span>
    </div>
  );
}

export default async function BookPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const book = getBook(slug);
  if (!book) notFound();

  const contentWithoutH1 = book.content.trimStart().replace(/^#[^#][^\n]*\n?/, "");
  const html = marked.parse(contentWithoutH1) as string;
  const bookUrl = `${BASE_URL}/books/${book.slug}`;

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", item: BASE_URL },
    { name: "Books", item: `${BASE_URL}/books` },
    { name: book.title, item: bookUrl },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="min-h-screen bg-[oklch(0.1_0.005_265)]">
        <a href="#book-main" className="skip-link">Skip to content</a>
        <Nav />

        <main id="book-main" className="pt-28 pb-24" tabIndex={-1}>
          <div className="max-w-3xl mx-auto px-4 md:px-6">
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-zinc-500 mb-8 mt-4">
              <ol className="flex items-center gap-2" role="list">
                <li><Link href="/" className="hover:text-zinc-300 transition-colors">Home</Link></li>
                <li aria-hidden="true"><ChevronRight size={12} /></li>
                <li><Link href="/books" className="hover:text-zinc-300 transition-colors">Books</Link></li>
                <li aria-hidden="true"><ChevronRight size={12} /></li>
                <li aria-current="page"><span className="text-zinc-400 truncate max-w-48">{book.title}</span></li>
              </ol>
            </nav>

            <header className="mb-10">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="text-xs px-2 py-0.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-400 font-mono">
                  {book.category}
                </span>
                <time dateTime={book.date} className="text-xs text-zinc-400">
                  Read {formatDate(book.date)}
                </time>
              </div>

              <div className="flex items-start gap-6 mb-6">
                {book.image ? (
                  <Image
                    src={book.image}
                    alt={`${book.title} cover`}
                    width={80}
                    height={114}
                    className="rounded object-cover shrink-0 shadow-lg"
                    priority
                  />
                ) : (
                  <div className="w-20 h-28 rounded bg-gradient-to-br from-indigo-900/60 to-indigo-950/80 border border-indigo-500/20 flex flex-col items-center justify-center p-2 shrink-0 shadow-lg">
                    <span className="text-indigo-300 text-[8px] font-bold text-center leading-tight line-clamp-5 mb-1">{book.title}</span>
                    <span className="text-indigo-500 text-[7px] text-center leading-tight">{book.bookAuthor}</span>
                  </div>
                )}
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold text-white mb-2 leading-tight" style={{ fontFamily: "var(--font-display)" }}>
                    {book.title}
                  </h1>
                  <p className="text-zinc-400 text-base mb-3">by <span className="text-zinc-300">{book.bookAuthor}</span></p>
                  <div className="flex flex-wrap items-center gap-4">
                    <RatingStars rating={book.rating} />
                    {book.buyLink && (
                      <a
                        href={book.buyLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs text-indigo-400 hover:text-indigo-300 transition-colors"
                      >
                        Get the book <ExternalLink size={11} />
                      </a>
                    )}
                  </div>
                </div>
              </div>

              <p className="text-zinc-400 text-lg leading-relaxed mb-6">
                {book.excerpt}
              </p>

              <div className="flex items-center justify-between py-4 border-y border-white/8">
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
                <ShareButton url={bookUrl} />
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
                prose-hr:border-white/10
                prose-li:text-zinc-300"
              dangerouslySetInnerHTML={{ __html: html }}
            />

            <ul className="flex flex-wrap gap-2 mt-12 pt-8 border-t border-white/8" aria-label="Tags" role="list">
              {book.tags.map((tag) => (
                <li key={tag}>
                  <span className="flex items-center gap-1 text-xs text-zinc-400 bg-white/5 px-3 py-2 rounded-full">
                    {tag}
                  </span>
                </li>
              ))}
            </ul>

            <section className="mt-12 p-6 rounded-xl border border-indigo-500/20 bg-indigo-600/5">
              <div className="flex items-start gap-4">
                <Image
                  src={PROFILE_IMG}
                  alt="Łukasz Miądowicz"
                  width={48}
                  height={48}
                  className="rounded-full object-cover object-top border border-indigo-500/30 shrink-0"
                />
                <div>
                  <p className="text-white font-semibold mb-1" style={{ fontFamily: "var(--font-display)" }}>Łukasz Miądowicz</p>
                  <p className="text-zinc-400 text-sm leading-relaxed mb-3">
                    AI Product Leader, AI Strategy & Adoption Lead, Agent Harness Builder. I design AI systems that deliver business outcomes - not just features that respond. Ex-Software Engineer at Google for Startups. PhD Quantum Physics. $80M ARR scaled. 10+ years in product.
                  </p>
                  <Link href="/#contact" className="inline-flex items-center gap-1.5 text-sm text-indigo-400 hover:text-indigo-300 transition-colors font-medium">
                    Work with me <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            </section>

            <div className="mt-12 pt-8 border-t border-white/8">
              <Link href="/books" className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-zinc-300 transition-colors">
                <ArrowLeft size={14} /> Back to all books
              </Link>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
