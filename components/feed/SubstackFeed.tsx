import { getSubstackPosts, SUBSTACK_URL } from '@/lib/rss'
import AnimatedSection from '@/components/ui/AnimatedSection'
import { formatDateShort } from '@/lib/utils'

export default async function SubstackFeed() {
  const posts = await getSubstackPosts(3)

  return (
    <section className="mx-auto max-w-7xl px-6 lg:px-8 py-20 border-t border-[var(--border)]">
      <AnimatedSection>
        <div className="flex items-center justify-between mb-10">
          <div className="flex items-center gap-4">
            <span className="text-xs uppercase tracking-[0.2em] text-[var(--text-muted)]">
              Latest intelligence
            </span>
            <div className="w-8 h-px bg-[var(--border)]" />
            <span className="text-xs text-[var(--text-muted)]">via Substack</span>
          </div>
          <a
            href={SUBSTACK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-[var(--text-secondary)] hover:text-white transition-colors"
          >
            Read all →
          </a>
        </div>
      </AnimatedSection>

      {posts.length === 0 ? (
        <AnimatedSection>
          <div className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-8 text-center">
            <p className="text-[var(--text-muted)] text-sm">Content coming soon.</p>
          </div>
        </AnimatedSection>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post, i) => (
            <AnimatedSection key={post.link} delay={i * 0.06}>
              <a
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group block h-full rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6 hover:border-[var(--border-strong)] hover:bg-[var(--surface-raised)] transition-all duration-300"
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-xs uppercase tracking-widest text-orange-400 font-medium bg-white/5 border border-white/10 px-2 py-0.5 rounded">
                    Substack
                  </span>
                </div>
                <h3 className="font-[family-name:var(--font-playfair)] text-base font-semibold text-white mb-3 leading-snug group-hover:text-[var(--accent)] transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed line-clamp-3 mb-4">
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-3 text-xs text-[var(--text-muted)]">
                  <span>{post.author}</span>
                  {post.date && (
                    <>
                      <span>·</span>
                      <span>
                        {(() => {
                          try { return formatDateShort(new Date(post.date).toISOString().split('T')[0]) }
                          catch { return '' }
                        })()}
                      </span>
                    </>
                  )}
                </div>
              </a>
            </AnimatedSection>
          ))}
        </div>
      )}
    </section>
  )
}
