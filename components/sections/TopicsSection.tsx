import Link from 'next/link'
import { TOPICS } from '@/content/topics'
import AnimatedSection from '@/components/ui/AnimatedSection'
import { cn } from '@/lib/utils'

export default function TopicsSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 lg:px-8 py-20 border-t border-[var(--border)]">
      <AnimatedSection>
        <div className="flex items-center gap-4 mb-10">
          <span className="text-xs uppercase tracking-[0.2em] text-[var(--text-muted)]">
            Browse by topic
          </span>
          <div className="flex-1 h-px bg-[var(--border)]" />
        </div>
      </AnimatedSection>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {TOPICS.map((topic, i) => (
          <AnimatedSection key={topic.slug} delay={i * 0.04}>
            <Link
              href={`/topics/${topic.slug}`}
              className="group block rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6 hover:border-[var(--border-strong)] hover:bg-[var(--surface-raised)] transition-all duration-300"
            >
              <p className={cn('text-sm font-medium mb-2', topic.color)}>{topic.label}</p>
              <p className="text-xs text-[var(--text-muted)] leading-relaxed line-clamp-2">
                {topic.description}
              </p>
            </Link>
          </AnimatedSection>
        ))}
      </div>
    </section>
  )
}
