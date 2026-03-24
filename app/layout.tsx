import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://aiventure.ai'),
  title: {
    default: 'AIVenture.ai — Signal Over Noise',
    template: '%s | AIVenture.ai',
  },
  description:
    'Curated intelligence on AI that actually matters. For founders, operators, creators, and curious minds navigating the frontier.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://aiventure.ai',
    siteName: 'AIVenture.ai',
    title: 'AIVenture.ai — Signal Over Noise',
    description: 'Curated intelligence on AI that actually matters.',
    images: [{ url: '/og-default.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AIVenture.ai — Signal Over Noise',
    description: 'Curated intelligence on AI that actually matters.',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  )
}
