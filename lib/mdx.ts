import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { Article, ArticleFrontmatter } from './types'

const ARTICLES_DIR = path.join(process.cwd(), 'content', 'articles')

export function getAllArticleSlugs(): string[] {
  if (!fs.existsSync(ARTICLES_DIR)) return []
  return fs
    .readdirSync(ARTICLES_DIR)
    .filter((f) => f.endsWith('.mdx'))
    .map((f) => f.replace(/\.mdx$/, ''))
}

export function getArticleBySlug(slug: string): Article | null {
  const filePath = path.join(ARTICLES_DIR, `${slug}.mdx`)
  if (!fs.existsSync(filePath)) return null
  const raw = fs.readFileSync(filePath, 'utf-8')
  const { data, content } = matter(raw)
  return { ...(data as ArticleFrontmatter), slug, content }
}

export function getAllArticles(): Article[] {
  return getAllArticleSlugs()
    .map((slug) => getArticleBySlug(slug))
    .filter(Boolean) as Article[]
}

export function getFeaturedArticles(): Article[] {
  return getAllArticles()
    .filter((a) => a.featured)
    .sort((a, b) => (a.featuredRank ?? 99) - (b.featuredRank ?? 99))
}

export function getLatestArticles(limit?: number): Article[] {
  const sorted = getAllArticles().sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )
  return limit ? sorted.slice(0, limit) : sorted
}

export function getArticlesByTopic(topicSlug: string): Article[] {
  return getAllArticles()
    .filter((a) => a.topic === topicSlug)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}
