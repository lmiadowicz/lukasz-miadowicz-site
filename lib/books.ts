import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface Book {
  slug: string;
  title: string;
  bookAuthor: string;
  date: string;
  excerpt: string;
  tags: string[];
  category: string;
  rating: number;
  image?: string;
  buyLink?: string;
  content: string;
}

const BOOKS_DIR = path.join(process.cwd(), "public", "books");

export function getAllBooks(): Omit<Book, "content">[] {
  try {
    const indexPath = path.join(BOOKS_DIR, "index.json");
    const raw = fs.readFileSync(indexPath, "utf-8");
    const books: Omit<Book, "content">[] = JSON.parse(raw);
    return books
      .map((b) => ({ ...b, content: "" }))
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  } catch {
    return [];
  }
}

export function getBook(slug: string): Book | null {
  try {
    const filePath = path.join(BOOKS_DIR, `${slug}.md`);
    if (!fs.existsSync(filePath)) return null;
    const raw = fs.readFileSync(filePath, "utf-8");
    const { data, content } = matter(raw);
    return {
      slug: (data.slug as string) || slug,
      title: data.title as string,
      bookAuthor: data.bookAuthor as string,
      date: data.date as string,
      excerpt: data.excerpt as string,
      tags: (data.tags as string[]) || [],
      category: data.category as string,
      rating: (data.rating as number) || 0,
      image: data.image as string | undefined,
      buyLink: data.buyLink as string | undefined,
      content,
    };
  } catch {
    return null;
  }
}

export function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
