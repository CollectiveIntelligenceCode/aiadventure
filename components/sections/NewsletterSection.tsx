import AnimatedSection from '@/components/ui/AnimatedSection'
import NewsletterForm from '@/components/newsletter/NewsletterForm'

export default function NewsletterSection() {
  return (
    <section className="border-t border-[var(--border)] bg-[var(--surface)]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24">
        <AnimatedSection className="max-w-2xl mx-auto text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-[var(--accent)] mb-4">
            The briefing
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-semibold text-white mb-4 leading-snug">
            Stay ahead of what matters
          </h2>
          <p className="text-[var(--text-secondary)] leading-relaxed mb-8">
            Periodic dispatches covering the developments, ideas, and implications worth your attention.
            No noise. No daily overwhelm. Just signal.
          </p>
          <NewsletterForm />
          <p className="mt-4 text-xs text-[var(--text-muted)]">
            No spam. Unsubscribe at any time.
          </p>
        </AnimatedSection>
      </div>
    </section>
  )
}
