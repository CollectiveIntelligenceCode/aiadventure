import type { Metadata } from 'next'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { TOPICS } from '@/content/topics'
import Link from 'next/link'
import { cn } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'Topics',
  description: 'Browse AIAdventure.ai by theme — from frontier models to the future of humans with AI.',
}

export default function TopicsPage() {
  return (
    <>
      <Header />
      <main className="pt-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16 border-b border-[var(--border)]">
          <p className="text-xs uppercase tracking-[0.2em] text-[var(--accent)] mb-3">Explore</p>
          <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-semibold text-white mb-4">Topics</h1>
          <p className="text-[var(--text-secondary)] max-w-xl">
            Eight themes at the intersection of AI and what it means to work, create, and think.
          </p>
        </div>

        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {TOPICS.map((topic) => (
              <Link
                key={topic.slug}
                href={`/topics/${topic.slug}`}
                className="group block rounded-xl border border-[var(--border)] bg-[var(--surface)] p-8 hover:border-[var(--border-strong)] hover:bg-[var(--surface-raised)] transition-all duration-300"
              >
                <p className={cn('text-base font-medium mb-2', topic.color)}>{topic.label}</p>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  {topic.description}
                </p>
                <p className="mt-4 text-xs text-[var(--text-muted)] group-hover:text-[var(--accent)] transition-colors">
                  Browse articles →
                </p>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
