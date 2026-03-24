'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

const NAV_LINKS = [
  { href: '/articles', label: 'Latest' },
  { href: '/topics', label: 'Topics' },
  { href: '/about', label: 'About' },
]

export default function Header() {
  const pathname = usePathname()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[var(--background)]/80 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link
            href="/"
            className="font-[family-name:var(--font-playfair)] text-lg font-semibold tracking-tight text-white hover:text-[var(--accent)] transition-colors"
          >
            AIVenture<span className="text-[var(--accent)]">.ai</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={cn(
                  'text-sm tracking-wide transition-colors',
                  pathname === href || pathname.startsWith(href + '/')
                    ? 'text-white'
                    : 'text-[var(--text-secondary)] hover:text-white'
                )}
              >
                {label}
              </Link>
            ))}
          </nav>

          <Link
            href="/newsletter"
            className="hidden md:inline-flex items-center gap-2 rounded-full border border-[var(--accent)]/40 bg-[var(--accent)]/10 px-4 py-1.5 text-sm text-[var(--accent)] hover:bg-[var(--accent)]/20 transition-colors"
          >
            Subscribe
          </Link>

          <div className="flex md:hidden items-center gap-4">
            {NAV_LINKS.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="text-xs text-[var(--text-secondary)] hover:text-white transition-colors"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  )
}
