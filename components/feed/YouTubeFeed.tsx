import Image from 'next/image'
import { getYouTubeVideos, YOUTUBE_CHANNEL_URL } from '@/lib/rss'
import AnimatedSection from '@/components/ui/AnimatedSection'

export default async function YouTubeFeed() {
  const videos = await getYouTubeVideos(3)

  return (
    <section className="mx-auto max-w-7xl px-6 lg:px-8 py-20 border-t border-[var(--border)]">
      <AnimatedSection>
        <div className="flex items-center justify-between mb-10">
          <div className="flex items-center gap-4">
            <span className="text-xs uppercase tracking-[0.2em] text-[var(--text-muted)]">
              Latest videos
            </span>
            <div className="w-8 h-px bg-[var(--border)]" />
            <span className="text-xs text-[var(--text-muted)]">via YouTube</span>
          </div>
          <a
            href={YOUTUBE_CHANNEL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-[var(--text-secondary)] hover:text-white transition-colors"
          >
            Watch all →
          </a>
        </div>
      </AnimatedSection>

      {videos.length === 0 ? (
        <AnimatedSection>
          <div className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-8 text-center">
            <p className="text-[var(--text-muted)] text-sm">Videos coming soon.</p>
          </div>
        </AnimatedSection>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {videos.map((video, i) => (
            <AnimatedSection key={video.id} delay={i * 0.06}>
              <a
                href={video.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group block rounded-xl border border-[var(--border)] bg-[var(--surface)] overflow-hidden hover:border-[var(--border-strong)] transition-all duration-300"
              >
                {/* Thumbnail */}
                <div className="relative aspect-video bg-[var(--surface-raised)] overflow-hidden">
                  <Image
                    src={video.thumbnail}
                    alt={video.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    unoptimized
                  />
                  {/* Play overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center">
                      <svg className="w-5 h-5 text-white ml-0.5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs uppercase tracking-widest text-red-400 font-medium bg-white/5 border border-white/10 px-2 py-0.5 rounded">
                      YouTube
                    </span>
                  </div>
                  <h3 className="font-[family-name:var(--font-playfair)] text-sm font-semibold text-white leading-snug group-hover:text-[var(--accent)] transition-colors line-clamp-2">
                    {video.title}
                  </h3>
                </div>
              </a>
            </AnimatedSection>
          ))}
        </div>
      )}
    </section>
  )
}
