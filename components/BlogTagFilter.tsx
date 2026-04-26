"use client";

import { useRouter, useSearchParams } from "next/navigation";

interface BlogCategoryFilterProps {
  categories: string[];
  activeCategory: string | null;
}

export function BlogTagFilter({ categories, activeCategory }: BlogCategoryFilterProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const setCategory = (cat: string | null) => {
    const params = new URLSearchParams(searchParams.toString());
    if (cat) {
      params.set("category", cat);
    } else {
      params.delete("category");
    }
    router.push(`/blog?${params.toString()}`, { scroll: false });
  };

  if (!categories.length) return null;

  return (
    <section aria-label="Filter posts by category" className="py-5 border-b border-white/5 bg-[oklch(0.12_0.006_265)]">
      <div className="container">
        <div className="flex flex-wrap gap-2" role="group" aria-label="Category filters">
          <button
            onClick={() => setCategory(null)}
            aria-pressed={activeCategory === null}
            className={`text-xs px-4 py-2 rounded-full border transition-all min-h-[36px] ${
              activeCategory === null
                ? "border-indigo-500 bg-indigo-500/15 text-indigo-300"
                : "border-white/10 text-zinc-400 hover:border-white/20 hover:text-zinc-200"
            }`}
          >
            All posts
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(activeCategory === cat ? null : cat)}
              aria-pressed={activeCategory === cat}
              className={`text-xs px-4 py-2 rounded-full border transition-all min-h-[36px] ${
                activeCategory === cat
                  ? "border-indigo-500 bg-indigo-500/15 text-indigo-300"
                  : "border-white/10 text-zinc-400 hover:border-white/20 hover:text-zinc-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
