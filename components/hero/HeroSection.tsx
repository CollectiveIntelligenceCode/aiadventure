'use client'

import dynamic from 'next/dynamic'
import { motion } from 'framer-motion'

const AmbientCanvas = dynamic(() => import('./AmbientCanvas'), { ssr: false })

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[var(--background)]">
      <AmbientCanvas />

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 40%, rgba(79,127,255,0.06) 0%, transparent 70%), radial-gradient(ellipse 100% 80% at 50% 100%, rgba(8,10,15,0.9) 0%, transparent 60%)',
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 pt-32 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl"
        >
          <p className="text-xs uppercase tracking-[0.25em] text-[var(--accent)] mb-6 font-medium">
            Intelligence for the frontier
          </p>

          <h1 className="font-[family-name:var(--font-sans)] text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-semibold leading-[1.05] tracking-tight text-white mb-8">
            What actually
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent)] via-violet-400 to-[var(--accent)]">
              matters in AI
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-[var(--text-secondary)] leading-relaxed max-w-2xl mb-12">
            Not every breakthrough deserves your attention. We track what is worth knowing —
            the developments, ideas, and implications shaping how we work, create,
            and think alongside AI.
          </p>

          {/* Coming soon CTA */}
          <div className="flex flex-wrap items-center gap-4">
            <span className="inline-flex items-center gap-2 rounded-full bg-[var(--accent)]/10 border border-[var(--accent)]/20 px-6 py-3 text-sm font-medium text-[var(--accent)]">
              Newsletter — coming soon
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 px-6 py-3 text-sm text-[var(--text-muted)]">
              Video — coming soon
            </span>
          </div>

          {/* Platform pills */}
          <div className="flex items-center gap-3 mt-8">
            <span className="text-xs text-[var(--text-muted)]">Launching on</span>
            <span className="text-xs px-2.5 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400">
              Substack
            </span>
            <span className="text-xs px-2.5 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400">
              YouTube
            </span>
          </div>
        </motion.div>
      </div>

      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, transparent, var(--background))' }}
      />
    </section>
  )
}
