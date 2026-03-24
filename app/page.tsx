import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import HeroSection from '@/components/hero/HeroSection'
import FeaturedSection from '@/components/sections/FeaturedSection'
import LatestFeed from '@/components/sections/LatestFeed'
import TopicsSection from '@/components/sections/TopicsSection'
import NewsletterSection from '@/components/sections/NewsletterSection'

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <FeaturedSection />
        <LatestFeed />
        <TopicsSection />
        <NewsletterSection />
      </main>
      <Footer />
    </>
  )
}
