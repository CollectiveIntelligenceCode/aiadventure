import Link from 'next/link'

const ECOSYSTEM_LINKS = [
  { href: 'https://chrisbradshaw.ai', label: 'ChrisBradshaw.ai' },
  { href: 'https://collectiveintelligence.co', label: 'Collective Intelligence Co' },
  { href: 'https://betweenminds.fm', label: 'Between Minds Podcast' },
]

const SITE_LINKS = [
  { href: '/articles', label: 'Latest' },
  { href: '/topics', label: 'Topics' },
  { href: '/about', label: 'About' },
  { href: '/newsletter', label: 'Newsletter' },
]

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--surface)] mt-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <p className="font-[family-name:var(--font-playfair)] text-lg font-semibold text-white mb-3">
              AIVenture<span className="text-[var(--accent)]">.ai</span>
            </p>
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed max-w-xs">
              Curated intelligence on AI that actually matters. Signal over noise.
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-widest text-[var(--text-muted)] mb-4">Explore</p>
            <ul className="space-y-2">
              {SITE_LINKS.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-[var(--text-secondary)] hover:text-white transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs uppercase tracking-widest text-[var(--text-muted)] mb-4">Ecosystem</p>
            <ul className="space-y-2">
              {ECOSYSTEM_LINKS.map(({ href, label }) => (
                <li key={href}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-[var(--text-secondary)] hover:text-white transition-colors"
                  >
                    {label} ↗
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-[var(--border)] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[var(--text-muted)]">
            © {new Date().getFullYear()} AIVenture.ai — Part of the{' '}
            <a href="https://collectiveintelligence.co" className="hover:text-[var(--text-secondary)] transition-colors">
              Collective Intelligence Group
            </a>
          </p>
          <p className="text-xs text-[var(--text-muted)]">Signal over noise.</p>
        </div>
      </div>
    </footer>
  )
}
