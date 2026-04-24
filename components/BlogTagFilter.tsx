"use client";

import { useRouter, useSearchParams } from "next/navigation";

interface BlogTagFilterProps {
  allTags: string[];
  activeTag: string | null;
}

export function BlogTagFilter({ allTags, activeTag }: BlogTagFilterProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const setTag = (tag: string | null) => {
    const params = new URLSearchParams(searchParams.toString());
    if (tag) {
      params.set("tag", tag);
    } else {
      params.delete("tag");
    }
    router.push(`/blog?${params.toString()}`, { scroll: false });
  };

  if (!allTags.length) return null;

  return (
    <section aria-label="Filter posts by tag" className="py-6 border-b border-white/5 bg-[oklch(0.12_0.006_265)]">
      <div className="container">
        <div className="flex flex-wrap gap-2" role="group" aria-label="Tag filters">
          <button
            onClick={() => setTag(null)}
            aria-pressed={activeTag === null}
            className={`text-xs px-4 py-2 rounded-full border transition-all min-h-[36px] ${
              activeTag === null
                ? "border-indigo-500 bg-indigo-500/15 text-indigo-300"
                : "border-white/10 text-zinc-400 hover:border-white/20 hover:text-zinc-200"
            }`}
          >
            All posts
          </button>
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setTag(activeTag === tag ? null : tag)}
              aria-pressed={activeTag === tag}
              className={`text-xs px-4 py-2 rounded-full border transition-all min-h-[36px] ${
                activeTag === tag
                  ? "border-indigo-500 bg-indigo-500/15 text-indigo-300"
                  : "border-white/10 text-zinc-400 hover:border-white/20 hover:text-zinc-200"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
