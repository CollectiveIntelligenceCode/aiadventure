import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import ArticleGrid from '@/components/content/ArticleGrid'
import { TOPICS } from '@/content/topics'
import { getArticlesByTopic } from '@/lib/mdx'
import { cn } from '@/lib/utils'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return TOPICS.map((t) => ({ slug: t.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const topic = TOPICS.find((t) => t.slug === slug)
  if (!topic) return {}
  return { title: topic.label, description: topic.description }
}

export default async function TopicPage({ params }: Props) {
  const { slug } = await params
  const topic = TOPICS.find((t) => t.slug === slug)
  if (!topic) notFound()

  const articles = getArticlesByTopic(slug)

  return (
    <>
      <Header />
      <main className="pt-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16 border-b border-[var(--border)]">
          <p className={cn('text-xs uppercase tracking-[0.2em] font-medium mb-3', topic.color)}>
            Topic
          </p>
          <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-semibold text-white mb-4">
            {topic.label}
          </h1>
          <p className="text-[var(--text-secondary)] max-w-xl">{topic.description}</p>
        </div>

        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
          {articles.length > 0 ? (
            <ArticleGrid articles={articles} />
          ) : (
            <p className="text-[var(--text-muted)] text-sm">
              No articles in this topic yet. Check back soon.
            </p>
          )}
        </div>
      </main>
      <Footer />
    </>
  )
}
