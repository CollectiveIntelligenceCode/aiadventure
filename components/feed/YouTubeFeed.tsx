import AnimatedSection from '@/components/ui/AnimatedSection'

const TEASER_VIDEOS = [
  { title: 'What the next frontier model actually means' },
  { title: 'Agents are not ready — but they will be' },
  { title: 'The creative tools frontier is moving fast' },
]

export default function YouTubeFeed() {
  return (
    <section className="mx-auto max-w-7xl px-6 lg:px-8 py-20 border-t border-[var(--border)]">
      <AnimatedSection>
        <div className="flex items-center justify-between mb-10">
          <div className="flex items-center gap-4">
            <span className="text-xs uppercase tracking-[0.2em] text-[var(--text-muted)]">
              Video
            </span>
            <div className="w-8 h-px bg-[var(--border)]" />
            <span className="text-xs px-2 py-0.5 rounded-full border border-red-500/20 bg-red-500/5 text-red-400">
              YouTube — coming soon
            </span>
          </div>
        </div>
      </AnimatedSection>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {TEASER_VIDEOS.map((video, i) => (
          <AnimatedSection key={video.title} delay={i * 0.06}>
            <div className="relative rounded-xl border border-[var(--border)] bg-[var(--surface)] overflow-hidden">
              {/* Fake thumbnail area */}
              <div className="relative aspect-video bg-[var(--surface-raised)] flex items-center justify-center overflow-hidden">
                {/* Subtle grid pattern */}
                <div
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage:
                      'linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)',
                    backgroundSize: '32px 32px',
                  }}
                />
                {/* Ghost play button */}
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center">
                  <svg className="w-4 h-4 text-[var(--text-muted)] ml-0.5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                {/* Coming soon label */}
                <span className="absolute bottom-3 left-3 text-xs uppercase tracking-widest text-[var(--text-muted)]">
                  Coming soon
                </span>
              </div>

              <div className="p-5">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs uppercase tracking-widest text-red-400 font-medium bg-white/5 border border-white/10 px-2 py-0.5 rounded">
                    YouTube
                  </span>
                </div>
                <h3 className="font-[family-name:var(--font-sans)] text-sm font-semibold text-[var(--text-secondary)] leading-snug">
                  {video.title}
                </h3>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </section>
  )
}
