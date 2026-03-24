import AnimatedSection from '@/components/ui/AnimatedSection'

const TEASER_POSTS = [
  {
    title: 'The signal that actually matters in AI',
    excerpt: 'Not every breakthrough deserves your attention. We will be tracking what does — the developments, ideas, and implications worth your time.',
  },
  {
    title: 'What frontier models mean for builders',
    excerpt: 'Every major release generates enormous coverage. Most of it misses the point. We will cover what actually changes for the people building with these systems.',
  },
  {
    title: 'The human side of AI',
    excerpt: 'Beyond the capability race, AI is raising harder questions about identity, cognition, and meaning. Those are the questions worth sitting with.',
  },
]

export default function SubstackFeed() {
  return (
    <section className="mx-auto max-w-7xl px-6 lg:px-8 py-20 border-t border-[var(--border)]">
      <AnimatedSection>
        <div className="flex items-center justify-between mb-10">
          <div className="flex items-center gap-4">
            <span className="text-xs uppercase tracking-[0.2em] text-[var(--text-muted)]">
              Intelligence
            </span>
            <div className="w-8 h-px bg-[var(--border)]" />
            <span className="text-xs px-2 py-0.5 rounded-full border border-orange-500/20 bg-orange-500/5 text-orange-400">
              Substack — coming soon
            </span>
          </div>
        </div>
      </AnimatedSection>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {TEASER_POSTS.map((post, i) => (
          <AnimatedSection key={post.title} delay={i * 0.06}>
            <div className="relative block h-full rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6 overflow-hidden">
              {/* Blur overlay — teaser effect */}
              <div className="absolute inset-0 backdrop-blur-[2px] bg-[var(--surface)]/40 z-10 flex items-end p-6">
                <span className="text-xs uppercase tracking-widest text-[var(--text-muted)]">
                  Coming soon
                </span>
              </div>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xs uppercase tracking-widest text-orange-400 font-medium bg-white/5 border border-white/10 px-2 py-0.5 rounded">
                  Substack
                </span>
              </div>
              <h3 className="font-[family-name:var(--font-sans)] text-base font-semibold text-white mb-3 leading-snug">
                {post.title}
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                {post.excerpt}
              </p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </section>
  )
}
