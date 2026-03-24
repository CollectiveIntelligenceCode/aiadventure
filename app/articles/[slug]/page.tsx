import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import ArticleMeta from '@/components/content/ArticleMeta'
import TopicBadge from '@/components/content/TopicBadge'
import ReadingProgress from '@/components/ui/ReadingProgress'
import ArticleCard from '@/components/content/ArticleCard'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { getArticleBySlug, getAllArticleSlugs, getLatestArticles } from '@/lib/mdx'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return getAllArticleSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const article = getArticleBySlug(slug)
  if (!article) return {}
  return {
    title: article.title,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: 'article',
      publishedTime: article.date,
      authors: [article.author],
    },
  }
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params
  const article = getArticleBySlug(slug)
  if (!article) notFound()

  const related = getLatestArticles(4).filter((a) => a.slug !== slug).slice(0, 3)

  return (
    <>
      <ReadingProgress />
      <Header />
      <main className="pt-24">
        <div className="mx-auto max-w-3xl px-6 lg:px-8 py-16">
          <div className="flex items-center gap-3 mb-8">
            <TopicBadge topicSlug={article.topic} />
          </div>
          <h1 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl lg:text-5xl font-semibold text-white leading-tight mb-6">
            {article.title}
          </h1>
          <p className="text-lg text-[var(--text-secondary)] leading-relaxed mb-8">
            {article.excerpt}
          </p>
          <ArticleMeta article={article} className="text-sm" />
          <div className="mt-8 h-px bg-gradient-to-r from-[var(--accent)]/30 via-[var(--border)] to-transparent" />
        </div>

        <div className="mx-auto max-w-3xl px-6 lg:px-8 pb-16">
          <div className="prose prose-invert max-w-none
            prose-headings:font-[family-name:var(--font-playfair)] prose-headings:font-semibold
            prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4 prose-h2:text-white
            prose-p:text-[var(--text-secondary)] prose-p:leading-8
            prose-a:text-[var(--accent)] prose-a:no-underline hover:prose-a:underline
            prose-blockquote:border-l-[var(--accent)] prose-blockquote:text-[var(--text-secondary)]
            prose-strong:text-white
            prose-hr:border-[var(--border)]">
            <MDXRemote source={article.content} />
          </div>
        </div>

        {related.length > 0 && (
          <div className="border-t border-[var(--border)] bg-[var(--surface)]">
            <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
              <p className="text-xs uppercase tracking-[0.2em] text-[var(--text-muted)] mb-8">
                Continue reading
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {related.map((a) => (
                  <ArticleCard key={a.slug} article={a} />
                ))}
              </div>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </>
  )
}
