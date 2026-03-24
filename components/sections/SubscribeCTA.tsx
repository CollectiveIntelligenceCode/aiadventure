import AnimatedSection from '@/components/ui/AnimatedSection'
import { SUBSTACK_URL, YOUTUBE_CHANNEL_URL } from '@/lib/rss'

export default function SubscribeCTA() {
  return (
    <section className="border-t border-[var(--border)]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24">
        <AnimatedSection className="max-w-2xl mx-auto text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-[var(--accent)] mb-4">
            Join the conversation
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-semibold text-white mb-4 leading-snug">
            Stay close to what matters
          </h2>
          <p className="text-[var(--text-secondary)] leading-relaxed mb-10">
            Subscribe for the newsletter, watch for the video essays.
            No noise. No daily overwhelm. Just signal worth your time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={SUBSTACK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--accent)] px-8 py-3.5 text-sm font-medium text-white hover:bg-blue-500 transition-colors"
            >
              Subscribe on Substack
            </a>
            <a
              href={YOUTUBE_CHANNEL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 px-8 py-3.5 text-sm text-[var(--text-secondary)] hover:text-white hover:border-white/20 transition-colors"
            >
              Subscribe on YouTube
            </a>
          </div>
          <p className="mt-6 text-xs text-[var(--text-muted)]">
            Part of the Collective Intelligence Group
          </p>
        </AnimatedSection>
      </div>
    </section>
  )
}
