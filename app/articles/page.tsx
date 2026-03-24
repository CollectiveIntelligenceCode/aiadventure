import type { Metadata } from 'next'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import ArticleGrid from '@/components/content/ArticleGrid'
import { getLatestArticles } from '@/lib/mdx'
import { TOPICS } from '@/content/topics'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Latest Intelligence',
  description: 'All published articles — AI signal, commentary, and analysis.',
}

export default function ArticlesPage() {
  const articles = getLatestArticles()

  return (
    <>
      <Header />
      <main className="pt-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16 border-b border-[var(--border)]">
          <p className="text-xs uppercase tracking-[0.2em] text-[var(--accent)] mb-3">
            All articles
          </p>
          <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-semibold text-white mb-4">
            Latest intelligence
          </h1>
          <p className="text-[var(--text-secondary)] max-w-xl">
            Signal worth your attention, on AI that actually matters.
          </p>
        </div>

        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-6 border-b border-[var(--border)]">
          <div className="flex flex-wrap gap-2 items-center">
            <span className="text-xs text-[var(--text-muted)] mr-2">Filter:</span>
            {TOPICS.map((topic) => (
              <Link
                key={topic.slug}
                href={`/topics/${topic.slug}`}
                className="text-xs px-3 py-1.5 rounded-full border border-[var(--border)] text-[var(--text-secondary)] hover:text-white hover:border-[var(--border-strong)] transition-colors"
              >
                {topic.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
          <ArticleGrid articles={articles} />
        </div>
      </main>
      <Footer />
    </>
  )
}
