import type { Metadata } from 'next'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import NewsletterForm from '@/components/newsletter/NewsletterForm'

export const metadata: Metadata = {
  title: 'The Briefing — Newsletter',
  description: 'Periodic dispatches on AI signal worth your attention. No noise. No daily overwhelm.',
}

export default function NewsletterPage() {
  return (
    <>
      <Header />
      <main className="pt-24 min-h-screen flex items-center">
        <div className="mx-auto max-w-2xl px-6 lg:px-8 py-24 w-full">
          <p className="text-xs uppercase tracking-[0.2em] text-[var(--accent)] mb-4">
            The briefing
          </p>
          <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-semibold text-white mb-6 leading-tight">
            Intelligence delivered
            <br />
            without the noise
          </h1>
          <p className="text-lg text-[var(--text-secondary)] leading-relaxed mb-10">
            Periodic dispatches covering developments, ideas, and implications worth your attention.
            Written for founders, operators, strategists, creators, and curious minds navigating AI
            with care and intentionality.
          </p>

          <div className="space-y-3 mb-10">
            {[
              'No daily overwhelm or inbox spam',
              'Curated signal, not aggregated noise',
              'Analysis that goes beyond the headline',
              'Connected to the wider Collective Intelligence ecosystem',
            ].map((point) => (
              <div key={point} className="flex items-center gap-3 text-sm text-[var(--text-secondary)]">
                <div className="w-1 h-1 rounded-full bg-[var(--accent)] flex-shrink-0" />
                {point}
              </div>
            ))}
          </div>

          <NewsletterForm variant="stacked" />
          <p className="mt-4 text-xs text-[var(--text-muted)]">
            No spam. Unsubscribe at any time. Part of the Collective Intelligence Group.
          </p>
        </div>
      </main>
      <Footer />
    </>
  )
}
