# AIAdventure.ai

Premium editorial platform for AI intelligence and commentary. Part of the Collective Intelligence Group ecosystem.

## Stack

- Next.js 16 (App Router)
- React 19
- TypeScript 5
- Tailwind CSS 4
- Framer Motion
- MDX via `next-mdx-remote` for content

## Content model

Content lives in `content/articles/` as MDX files with frontmatter. No CMS or database required at launch.

**Tradeoff:** MDX-in-repo gives fast iteration and editorial control with zero infrastructure. When content volume grows or multiple authors need access, migrate to a headless CMS (Sanity, Contentlayer, or Supabase + structured tables). The `lib/mdx.ts` loader abstracts the data source, making migration straightforward.

## Adding an article

Create a new `.mdx` file in `content/articles/`:

```mdx
---
title: "Article Title"
slug: "article-slug"
excerpt: "One to two sentence summary."
date: "2026-03-25"
topic: "frontier-models"
tags: ["tag1", "tag2"]
featured: false
readTime: 5
author: "Chris Bradshaw"
---

Article body in MDX...
```

Available topic slugs (see `content/topics.ts`):
- `frontier-models`
- `ai-products`
- `creative-tools`
- `work-productivity`
- `agents-automation`
- `media-culture`
- `society-ethics`
- `future-of-humans`

## Development

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Pages

| Route | Description |
|-------|-------------|
| `/` | Homepage — hero, featured stories, latest, topics, newsletter |
| `/articles` | All articles with topic filter |
| `/articles/[slug]` | Article detail with MDX body |
| `/topics` | All topics |
| `/topics/[slug]` | Filtered articles by topic |
| `/about` | About AIAdventure.ai and the ecosystem |
| `/newsletter` | Standalone newsletter signup |

## Deployment

Deployed to Vercel. Push to `main` triggers production deploy.

```bash
vercel --prod
```

## Future roadmap

- Wire newsletter form to Resend or ConvertKit
- Add `og-default.png` to `/public/`
- Author profiles
- Search
- Supabase-backed content when volume requires
