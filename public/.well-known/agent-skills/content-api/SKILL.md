---
name: content-api
description: Access miadowicz.com content in machine-readable formats — markdown negotiation, llms.txt, sitemap, and API catalog
---

# Content API — miadowicz.com

## Markdown Negotiation
All pages return Markdown when requested with `Accept: text/markdown`:

```
curl https://miadowicz.com -H "Accept: text/markdown"
curl https://miadowicz.com/blog -H "Accept: text/markdown"
curl https://miadowicz.com/books -H "Accept: text/markdown"
```

Response includes `Content-Type: text/markdown` and `x-markdown-tokens`.

## Machine-Readable Descriptions
- `https://miadowicz.com/llms.txt` — concise site description for LLMs
- `https://miadowicz.com/llms-full.txt` — extended LLM profile

## Sitemap
`https://miadowicz.com/sitemap.xml` — all blog posts, books, and pages with metadata

## API Catalog
`https://miadowicz.com/.well-known/api-catalog` — RFC 9727 linkset+json catalog

## Health
`https://miadowicz.com/api/health` — returns `{"status":"ok"}`
