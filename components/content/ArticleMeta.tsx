import { formatDateShort } from '@/lib/utils'
import { ArticleFrontmatter } from '@/lib/types'

interface ArticleMetaProps {
  article: Pick<ArticleFrontmatter, 'date' | 'author' | 'readTime'>
  className?: string
}

export default function ArticleMeta({ article, className }: ArticleMetaProps) {
  return (
    <div className={`flex items-center gap-3 text-xs text-[var(--text-muted)] ${className ?? ''}`}>
      <span>{article.author}</span>
      <span>·</span>
      <span>{formatDateShort(article.date)}</span>
      <span>·</span>
      <span>{article.readTime} min read</span>
    </div>
  )
}
