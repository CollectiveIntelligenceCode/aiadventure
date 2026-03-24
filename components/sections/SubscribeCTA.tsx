import AnimatedSection from '@/components/ui/AnimatedSection'

export default function SubscribeCTA() {
  return (
    <section className="border-t border-[var(--border)]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24">
        <AnimatedSection className="max-w-2xl mx-auto text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-[var(--accent)] mb-4">
            Coming soon
          </p>
          <h2 className="font-[family-name:var(--font-sans)] text-3xl md:text-4xl font-semibold text-white mb-4 leading-snug">
            Stay close to what matters
          </h2>
          <p className="text-[var(--text-secondary)] leading-relaxed mb-10">
            A newsletter and video series on the AI developments worth your attention.
            No noise. No daily overwhelm. Just signal.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <span className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--accent)]/10 border border-[var(--accent)]/20 px-8 py-3.5 text-sm font-medium text-[var(--accent)] cursor-default">
              Newsletter — coming soon
            </span>
            <span className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 px-8 py-3.5 text-sm text-[var(--text-muted)] cursor-default">
              Video — coming soon
            </span>
          </div>
          <p className="mt-6 text-xs text-[var(--text-muted)]">
            Part of the Collective Intelligence Group
          </p>
        </AnimatedSection>
      </div>
    </section>
  )
}
