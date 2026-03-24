import Link from 'next/link'
import { Article } from '@/lib/types'
import TopicBadge from './TopicBadge'
import ArticleMeta from './ArticleMeta'
import { cn } from '@/lib/utils'

interface FeaturedArticleCardProps {
  article: Article
  isPrimary?: boolean
}

export default function FeaturedArticleCard({
  article,
  isPrimary = false,
}: FeaturedArticleCardProps) {
  return (
    <Link
      href={`/articles/${article.slug}`}
      className={cn(
        'group relative block overflow-hidden rounded-xl border border-[var(--border)]',
        'bg-[var(--surface)] hover:border-[var(--border-strong)]',
        'transition-all duration-500'
      )}
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--accent)]/30 to-transparent" />

      <div className={cn('p-7', isPrimary && 'p-10')}>
        <div className="flex items-center gap-3 mb-6">
          <TopicBadge topicSlug={article.topic} asLink={false} />
          {isPrimary && (
            <span className="text-xs uppercase tracking-widest text-[var(--accent)] font-medium">
              Featured
            </span>
          )}
        </div>

        <h2
          className={cn(
            'font-[family-name:var(--font-sans)] font-semibold text-white leading-snug mb-4',
            'group-hover:text-[var(--accent)] transition-colors',
            isPrimary ? 'text-3xl md:text-4xl' : 'text-xl'
          )}
        >
          {article.title}
        </h2>

        <p
          className={cn(
            'text-[var(--text-secondary)] leading-relaxed mb-6',
            isPrimary ? 'text-base max-w-xl' : 'text-sm line-clamp-3'
          )}
        >
          {article.excerpt}
        </p>

        <ArticleMeta article={article} />
      </div>

      <div
        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at top left, rgba(79,127,255,0.04) 0%, transparent 60%)' }}
      />
    </Link>
  )
}
