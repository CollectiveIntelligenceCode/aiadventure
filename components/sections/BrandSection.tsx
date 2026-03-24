import AnimatedSection from '@/components/ui/AnimatedSection'

const ECOSYSTEM = [
  { label: 'ChrisBradshaw.ai', href: 'https://chrisbradshaw.ai', desc: 'Speaker, thinker, public face' },
  { label: 'Collective Intelligence Co', href: 'https://collectiveintelligence.co', desc: 'Consultancy & strategy' },
  { label: 'Between Minds', href: 'https://betweenminds.fm', desc: 'Podcast on AI & humanity' },
]

export default function BrandSection() {
  return (
    <section className="border-t border-[var(--border)] bg-[var(--surface)]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left — about */}
          <AnimatedSection>
            <p className="text-xs uppercase tracking-[0.2em] text-[var(--accent)] mb-4">
              What this is
            </p>
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-semibold text-white mb-6 leading-snug">
              Signal over noise.
            </h2>
            <div className="space-y-4 text-[var(--text-secondary)] leading-relaxed">
              <p>
                AI moves fast. Most coverage moves faster — chasing announcements, amplifying hype,
                filling airtime. AIAdventure.ai is an attempt to do something different.
              </p>
              <p>
                We cover what actually matters: frontier models, agents, creative tools, the future
                of work, and the harder human questions underneath all of it. Not everything.
                Not every day. Just what is worth your time.
              </p>
              <p>
                For founders, operators, creators, and curious people navigating AI with intention.
              </p>
            </div>
          </AnimatedSection>

          {/* Right — ecosystem */}
          <AnimatedSection delay={0.1}>
            <p className="text-xs uppercase tracking-[0.2em] text-[var(--text-muted)] mb-6">
              Part of the ecosystem
            </p>
            <div className="space-y-3">
              {ECOSYSTEM.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between rounded-xl border border-[var(--border)] bg-[var(--background)] p-5 hover:border-[var(--border-strong)] transition-colors"
                >
                  <div>
                    <p className="text-sm font-medium text-white group-hover:text-[var(--accent)] transition-colors">
                      {item.label}
                    </p>
                    <p className="text-xs text-[var(--text-muted)] mt-0.5">{item.desc}</p>
                  </div>
                  <span className="text-[var(--text-muted)] group-hover:text-[var(--accent)] transition-colors text-sm">↗</span>
                </a>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
