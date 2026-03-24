import Link from 'next/link'
import { Article } from '@/lib/types'
import TopicBadge from './TopicBadge'
import ArticleMeta from './ArticleMeta'

interface ArticleCardProps {
  article: Article
}

export default function ArticleCard({ article }: ArticleCardProps) {
  return (
    <Link
      href={`/articles/${article.slug}`}
      className="group block border border-[var(--border)] rounded-lg overflow-hidden bg-[var(--surface)] hover:border-[var(--border-strong)] hover:bg-[var(--surface-raised)] transition-all duration-300"
    >
      <div className="p-6">
        <TopicBadge topicSlug={article.topic} asLink={false} className="mb-4" />
        <h3 className="font-[family-name:var(--font-playfair)] text-lg font-semibold text-white mb-3 leading-snug group-hover:text-[var(--accent)] transition-colors line-clamp-2">
          {article.title}
        </h3>
        <p className="text-sm text-[var(--text-secondary)] leading-relaxed line-clamp-3 mb-4">
          {article.excerpt}
        </p>
        <ArticleMeta article={article} />
      </div>
    </Link>
  )
}
