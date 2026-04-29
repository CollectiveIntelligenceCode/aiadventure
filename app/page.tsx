import type { Metadata } from 'next'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import HeroSection from '@/components/hero/HeroSection'
import SubstackFeed from '@/components/feed/SubstackFeed'
import YouTubeFeed from '@/components/feed/YouTubeFeed'
import BrandSection from '@/components/sections/BrandSection'
import SubscribeCTA from '@/components/sections/SubscribeCTA'

export const metadata: Metadata = {
  alternates: { canonical: 'https://aiadventure.ai' },
  robots: { index: false, follow: true },
}

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <SubstackFeed />
        <YouTubeFeed />
        <BrandSection />
        <SubscribeCTA />
      </main>
      <Footer />
    </>
  )
}
