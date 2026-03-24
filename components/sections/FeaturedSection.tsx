import { getFeaturedArticles } from '@/lib/mdx'
import FeaturedArticleCard from '@/components/content/FeaturedArticleCard'
import AnimatedSection from '@/components/ui/AnimatedSection'

export default function FeaturedSection() {
  const featured = getFeaturedArticles()
  const [primary, ...secondary] = featured

  if (!primary) return null

  return (
    <section className="mx-auto max-w-7xl px-6 lg:px-8 py-20">
      <AnimatedSection>
        <div className="flex items-center gap-4 mb-10">
          <span className="text-xs uppercase tracking-[0.2em] text-[var(--text-muted)]">
            Editor&apos;s selection
          </span>
          <div className="flex-1 h-px bg-[var(--border)]" />
        </div>
      </AnimatedSection>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <AnimatedSection delay={0.1} className="md:col-span-2">
          <FeaturedArticleCard article={primary} isPrimary />
        </AnimatedSection>

        <div className="flex flex-col gap-6">
          {secondary.slice(0, 2).map((article, i) => (
            <AnimatedSection key={article.slug} delay={0.15 + i * 0.05}>
              <FeaturedArticleCard article={article} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
