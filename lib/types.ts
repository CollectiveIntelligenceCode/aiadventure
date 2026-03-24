export interface ArticleFrontmatter {
  title: string
  slug: string
  excerpt: string
  date: string
  topic: string
  tags: string[]
  featured: boolean
  featuredRank?: number
  readTime: number
  author: string
  image?: string
  imageAlt?: string
}

export interface Article extends ArticleFrontmatter {
  content: string
}

export interface Topic {
  slug: string
  label: string
  description: string
  color: string
}
