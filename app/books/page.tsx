import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight, ArrowRight, Star } from "lucide-react";
import { getAllBooks, formatDate } from "@/lib/books";
import { Nav } from "@/components/Nav";

const BASE_URL = "https://miadowicz.com";

export const metadata: Metadata = {
  title: { absolute: "Books - Reading Notes & Takeaways | miadowicz." },
  description:
    "Books I've read, what I learned from them, and how valuable they were. Notes from an AI Product Leader on strategy, product, and technology.",
  keywords: "book notes, product strategy books, AI books, product management books, reading list",
  alternates: { canonical: `${BASE_URL}/books` },
  openGraph: {
    type: "website",
    url: `${BASE_URL}/books`,
    title: "Books - Reading Notes & Takeaways | Lukasz Miadowicz",
    description:
      "Books I've read, what I learned from them, and how valuable they were.",
    images: [
      {
        url: `${BASE_URL}/opengraph-image`,
        width: 1200,
        height: 630,
        alt: "Lukasz Miadowicz - AI Product Leader & AI Strategy Lead",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@miadowicz",
    creator: "@miadowicz",
    images: [`${BASE_URL}/opengraph-image`],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
    { "@type": "ListItem", position: 2, name: "Books", item: `${BASE_URL}/books` },
  ],
};

function RatingStars({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`Rating: ${rating} out of 5`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={11}
          className={i < rating ? "text-indigo-400 fill-indigo-400" : "text-zinc-700"}
        />
      ))}
    </div>
  );
}

function BookCoverPlaceholder({ title, author }: { title: string; author: string }) {
  return (
    <div className="w-14 h-20 rounded-sm bg-gradient-to-br from-indigo-900/60 to-indigo-950/80 border border-indigo-500/20 flex flex-col items-center justify-center p-1.5 shrink-0 shadow-md">
      <span className="text-indigo-300 text-[7px] font-bold text-center leading-tight line-clamp-4 mb-1">{title}</span>
      <span className="text-indigo-500 text-[6px] text-center leading-tight line-clamp-2">{author}</span>
    </div>
  );
}

export default async function BooksPage() {
  const books = getAllBooks();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="min-h-screen bg-[oklch(0.1_0.005_265)]">
        <a href="#books-main" className="skip-link">Skip to main content</a>
        <Nav />

        <section className="pt-32 pb-16 border-b border-white/5">
          <div className="container">
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-zinc-500 mb-8">
              <Link href="/" className="hover:text-zinc-300 transition-colors">Home</Link>
              <ChevronRight size={12} />
              <span className="text-zinc-300">Books</span>
            </nav>
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-mono text-indigo-400 tracking-widest uppercase">Reading</span>
                <div className="h-px flex-1 max-w-12 bg-indigo-500/40" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight" style={{ fontFamily: "var(--font-display)" }}>
                Books I've read<br /><span className="text-indigo-400">& what I took away.</span>
              </h1>
              <p className="text-zinc-400 text-lg leading-relaxed">
                Notes on books that shaped how I think about product, strategy, and AI - what I learned, what I disagreed with, and whether they're worth your time.
              </p>
            </div>
          </div>
        </section>

        <section id="books-main" className="py-12" aria-label="Books">
          <div className="container">
            {books.length === 0 ? (
              <div className="text-center py-24">
                <p className="text-zinc-500 text-lg">No books yet.</p>
              </div>
            ) : (
              <div className="max-w-3xl">
                {books.map((book) => (
                  <article
                    key={book.slug}
                    className="group border-b border-white/8 last:border-b-0"
                  >
                    <Link
                      href={`/books/${book.slug}`}
                      className="flex items-center gap-5 py-6 transition-all duration-150"
                    >
                      {book.image ? (
                        <Image
                          src={book.image}
                          alt={`${book.title} cover`}
                          width={56}
                          height={80}
                          className="rounded-sm object-cover shrink-0 shadow-md"
                        />
                      ) : (
                        <BookCoverPlaceholder title={book.title} author={book.bookAuthor} />
                      )}

                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-mono text-indigo-400 tracking-widest uppercase mb-1.5">
                          {book.category}
                        </p>
                        <h2
                          className="text-lg md:text-xl font-bold text-white group-hover:text-indigo-300 transition-colors leading-snug mb-1"
                          style={{ fontFamily: "var(--font-display)" }}
                        >
                          {book.title}
                        </h2>
                        <p className="text-xs text-zinc-500 mb-2">by {book.bookAuthor}</p>
                        <RatingStars rating={book.rating} />
                      </div>

                      <ArrowRight
                        size={15}
                        className="text-zinc-600 group-hover:text-indigo-400 transition-colors flex-shrink-0 hidden sm:block"
                        aria-hidden="true"
                      />
                    </Link>
                  </article>
                ))}
              </div>
            )}
          </div>
        </section>

        <footer role="contentinfo" className="border-t border-white/5 py-8">
          <div className="container flex items-center justify-between text-xs text-zinc-400">
            <span>© {new Date().getFullYear()} Lukasz Miadowicz</span>
            <Link href="/" className="hover:text-zinc-300 transition-colors">Back to home</Link>
          </div>
        </footer>
      </div>
    </>
  );
}
