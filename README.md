# miadowicz.com

Personal portfolio and blog of [Łukasz Miądowicz](https://miadowicz.com) — AI Product Leader & Strategy Lead.

## Features

- **Blog** — long-form writing on AI product strategy and leadership
- **Books** — reading list with notes and reflections
- **Glossary** — definitions for AI/product concepts
- **Portfolio** — selected work and case studies
- Dynamic Open Graph images, sitemap, and `robots.txt`
- `llms.txt` and `llms-full.txt` for AI agent discovery
- Link response headers for agent discovery (RFC 8288)
- PostHog analytics (EU region)

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | [Next.js 15](https://nextjs.org) (App Router) |
| Language | TypeScript 5 |
| Styling | Tailwind CSS v4 |
| Animations | Framer Motion |
| Content | Markdown via `gray-matter` + `marked` |
| Analytics | PostHog |
| Deployment | Vercel |
| Package manager | pnpm |

## Getting Started

**Prerequisites:** Node.js 20+, pnpm 10+

```bash
# Install dependencies
pnpm install

# Start dev server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Available Scripts

```bash
pnpm dev          # Development server with hot reload
pnpm build        # Production build
pnpm start        # Start production server
pnpm lint         # ESLint
pnpm type-check   # TypeScript check (no emit)
pnpm format       # Prettier
```

## Project Structure

```
app/
├── blog/[slug]/   Blog posts (Markdown in public/posts/)
├── books/[slug]/  Book entries (Markdown in public/books/)
├── glossary/      Glossary page
├── layout.tsx     Root layout, metadata, fonts
├── page.tsx       Homepage
├── robots.ts      robots.txt generation
└── sitemap.ts     sitemap.xml generation
components/        Shared React components
lib/               Utilities (blog, books, schema helpers)
public/
├── posts/         Blog post Markdown files
├── books/         Book Markdown files
├── llms.txt       Machine-readable site description
└── llms-full.txt  Extended machine-readable description
```

## Adding Content

**Blog post** — create `public/posts/your-slug.md` with frontmatter:

```markdown
---
title: "Post Title"
date: "2026-01-15"
description: "Short description for SEO and listings."
---

Post content here.
```

**Book** — create `public/books/your-slug.md` with frontmatter:

```markdown
---
title: "Book Title"
author: "Author Name"
date: "2026-01-15"
rating: 5
cover: "https://..."
description: "Short description."
---

Notes and reflections here.
```

## Deployment

Deployed on Vercel. Every push to `main` triggers a production deployment.

Security headers, caching rules, and Link headers are configured in [`vercel.json`](./vercel.json).

## License

[MIT](./LICENSE) © 2026 Łukasz Miądowicz
