"use client";

import { useEffect } from "react";

const SECTION_MAP: Record<string, string> = {
  about: "/#about",
  blog: "/blog",
  books: "/books",
  portfolio: "/#portfolio",
  contact: "/#contact",
  glossary: "/glossary",
};

export function WebMCPTools() {
  useEffect(() => {
    if (!("modelContext" in navigator)) return;

    const ac = new AbortController();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const ctx = (navigator as any).modelContext;

    ctx.registerTool(
      {
        name: "navigate_to_section",
        title: "Navigate to Section",
        description:
          "Navigate to a specific section of the miadowicz.com site: about, blog, books, portfolio, contact, or glossary",
        inputSchema: {
          type: "object",
          properties: {
            section: {
              type: "string",
              enum: Object.keys(SECTION_MAP),
              description: "Which section to navigate to",
            },
          },
          required: ["section"],
        },
        execute: async (input: { section: string }) => {
          const url = SECTION_MAP[input.section] ?? "/";
          window.location.href = url;
          return { navigated: true, url };
        },
        annotations: { readOnlyHint: false },
      },
      { signal: ac.signal }
    );

    ctx.registerTool(
      {
        name: "get_site_overview",
        title: "Get Site Overview",
        description:
          "Returns a machine-readable overview of Łukasz Miądowicz's professional background, expertise, and portfolio",
        inputSchema: { type: "object", properties: {} },
        execute: async () => {
          const res = await fetch("/llms.txt");
          return { content: await res.text() };
        },
        annotations: { readOnlyHint: true },
      },
      { signal: ac.signal }
    );

    ctx.registerTool(
      {
        name: "get_content_list",
        title: "Get Content List",
        description: "Returns a list of published blog posts and books on the site",
        inputSchema: {
          type: "object",
          properties: {
            type: {
              type: "string",
              enum: ["blog", "books", "all"],
              description: "Filter by content type; defaults to all",
            },
          },
        },
        execute: async (input: { type?: string }) => {
          const res = await fetch("/sitemap.xml");
          const xml = await res.text();
          const all = [...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map((m) => m[1]);
          const t = input.type ?? "all";
          const urls =
            t === "all" ? all : all.filter((u) => u.includes(`/${t}/`));
          return { urls, count: urls.length };
        },
        annotations: { readOnlyHint: true },
      },
      { signal: ac.signal }
    );

    return () => ac.abort();
  }, []);

  return null;
}
