import type { Metadata } from 'next'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import BrandSection from '@/components/sections/BrandSection'
import SubscribeCTA from '@/components/sections/SubscribeCTA'

export const metadata: Metadata = {
  title: 'About AIAdventure.ai',
  description: 'What AIAdventure.ai is, why it exists, and where it fits in the wider Collective Intelligence ecosystem.',
}

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="pt-16">
        <div className="mx-auto max-w-3xl px-6 lg:px-8 py-20">
          <p className="text-xs uppercase tracking-[0.2em] text-[var(--accent)] mb-3">About</p>
          <h1 className="font-[family-name:var(--font-sans)] text-4xl md:text-5xl font-semibold text-white mb-6 leading-tight">
            Signal over noise.
            <br />
            Editorial over template.
          </h1>
          <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
            AIAdventure.ai is a content-led intelligence platform for people who want to understand
            what is actually happening in AI — not just what is being announced.
          </p>
        </div>
        <BrandSection />
        <SubscribeCTA />
      </main>
      <Footer />
    </>
  )
}
