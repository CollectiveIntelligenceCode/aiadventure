import Link from 'next/link'
import { getLatestArticles } from '@/lib/mdx'
import ArticleCard from '@/components/content/ArticleCard'
import AnimatedSection from '@/components/ui/AnimatedSection'

export default function LatestFeed() {
  const articles = getLatestArticles(6)

  return (
    <section className="mx-auto max-w-7xl px-6 lg:px-8 py-20 border-t border-[var(--border)]">
      <AnimatedSection>
        <div className="flex items-center justify-between mb-10">
          <div className="flex items-center gap-4">
            <span className="text-xs uppercase tracking-[0.2em] text-[var(--text-muted)]">
              Latest intelligence
            </span>
            <div className="w-8 h-px bg-[var(--border)]" />
          </div>
          <Link
            href="/articles"
            className="text-sm text-[var(--text-secondary)] hover:text-white transition-colors"
          >
            View all →
          </Link>
        </div>
      </AnimatedSection>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article, i) => (
          <AnimatedSection key={article.slug} delay={i * 0.05}>
            <ArticleCard article={article} />
          </AnimatedSection>
        ))}
      </div>
    </section>
  )
}
