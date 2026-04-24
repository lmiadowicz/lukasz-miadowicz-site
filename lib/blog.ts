import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface BlogPost {
  slug: string;
  title: string;
  metaTitle?: string;
  date: string;
  updated?: string;
  author: string;
  excerpt: string;
  tags: string[];
  category: string;
  readTime: string;
  image?: string;
  canonical?: string;
  faq?: { question: string; answer: string }[];
  content: string;
}

const POSTS_DIR = path.join(process.cwd(), "public", "posts");

export function getAllPosts(): Omit<BlogPost, "content">[] {
  try {
    const indexPath = path.join(POSTS_DIR, "index.json");
    const raw = fs.readFileSync(indexPath, "utf-8");
    const posts: Omit<BlogPost, "content">[] = JSON.parse(raw);
    return posts
      .map((p) => ({ ...p, content: "" }))
      .sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
      );
  } catch {
    return [];
  }
}

export function getPost(slug: string): BlogPost | null {
  try {
    const filePath = path.join(POSTS_DIR, `${slug}.md`);
    if (!fs.existsSync(filePath)) return null;
    const raw = fs.readFileSync(filePath, "utf-8");
    const { data, content } = matter(raw);
    return {
      slug: (data.slug as string) || slug,
      title: data.title as string,
      metaTitle: data.metaTitle as string | undefined,
      date: data.date as string,
      updated: data.updated as string | undefined,
      author: (data.author as string) || "Łukasz Miądowicz",
      excerpt: data.excerpt as string,
      tags: (data.tags as string[]) || [],
      category: data.category as string,
      readTime: data.readTime as string,
      image: data.image as string | undefined,
      canonical: data.canonical as string | undefined,
      faq: data.faq as { question: string; answer: string }[] | undefined,
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

export function estimateReadTime(content: string): string {
  const words = content.replace(/```[\s\S]*?```/g, "").split(/\s+/).length;
  const minutes = Math.ceil(words / 200);
  return `${minutes} min read`;
}
