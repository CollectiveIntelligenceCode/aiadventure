import type { Metadata } from 'next'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import NewsletterForm from '@/components/newsletter/NewsletterForm'

export const metadata: Metadata = {
  title: 'About',
  description: 'What AIVenture.ai is, why it exists, and where it fits in the wider Collective Intelligence ecosystem.',
}

const ECOSYSTEM = [
  {
    name: 'ChrisBradshaw.ai',
    href: 'https://chrisbradshaw.ai',
    description: 'Personal brand, thinking, speaking, and public writing from Chris Bradshaw.',
  },
  {
    name: 'Collective Intelligence Co',
    href: 'https://collectiveintelligence.co',
    description: 'Consultancy building AI strategy, systems, and products for organisations navigating the transition.',
  },
  {
    name: 'Between Minds',
    href: 'https://betweenminds.fm',
    description: 'A podcast exploring the future of AI and what it means to be human alongside it.',
  },
]

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="pt-24">
        <div className="mx-auto max-w-3xl px-6 lg:px-8 py-16 border-b border-[var(--border)]">
          <p className="text-xs uppercase tracking-[0.2em] text-[var(--accent)] mb-3">About</p>
          <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-semibold text-white mb-6 leading-tight">
            Signal over noise.
            <br />
            Editorial over template.
          </h1>
          <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
            AIVenture.ai is a content-led intelligence platform for people who want to understand
            what is actually happening in AI — not just what is being announced.
          </p>
        </div>

        <div className="mx-auto max-w-3xl px-6 lg:px-8 py-16 space-y-12">
          <section>
            <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-semibold text-white mb-4">What this is</h2>
            <div className="space-y-4 text-[var(--text-secondary)] leading-relaxed">
              <p>
                AI moves fast. Most coverage moves faster — chasing announcements, amplifying hype,
                filling airtime. We are trying to do something different: slow down enough to think,
                and then say something worth reading.
              </p>
              <p>
                AIVenture.ai covers frontier models, AI products, creative tools, agents, automation,
                work, media, society, and the deeper human questions that sit underneath all of it.
                Not everything. Not every day. But what matters, when it matters.
              </p>
              <p>
                The goal is to help founders, operators, strategists, creators, and curious professionals
                navigate a genuinely complex and consequential shift — with enough clarity to make good decisions.
              </p>
            </div>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-semibold text-white mb-4">Who is behind it</h2>
            <div className="space-y-4 text-[var(--text-secondary)] leading-relaxed">
              <p>
                AIVenture.ai is part of the Collective Intelligence Group, founded by{' '}
                <a href="https://chrisbradshaw.ai" className="text-[var(--accent)] hover:underline">
                  Chris Bradshaw
                </a>
                . The group works at the intersection of AI strategy, product thinking, and the
                longer human questions the technology raises.
              </p>
              <p>
                This platform is the public media and intelligence layer of that work — a place to
                think out loud, share what we are seeing, and build a community of people who take
                the question of AI seriously without losing their humanity in the process.
              </p>
            </div>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-semibold text-white mb-6">The wider ecosystem</h2>
            <div className="space-y-4">
              {ECOSYSTEM.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6 hover:border-[var(--border-strong)] transition-colors"
                >
                  <p className="text-sm font-medium text-white mb-1 group-hover:text-[var(--accent)] transition-colors">
                    {item.name} ↗
                  </p>
                  <p className="text-sm text-[var(--text-secondary)]">{item.description}</p>
                </a>
              ))}
            </div>
          </section>

          <section className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-8">
            <h2 className="font-[family-name:var(--font-playfair)] text-xl font-semibold text-white mb-2">Stay connected</h2>
            <p className="text-sm text-[var(--text-secondary)] mb-6">
              The briefing — periodic dispatches covering what is worth your attention.
            </p>
            <NewsletterForm variant="stacked" />
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}
