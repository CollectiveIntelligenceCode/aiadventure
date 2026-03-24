import type { Metadata } from 'next'
import { Space_Grotesk, DM_Mono } from 'next/font/google'
import './globals.css'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

const dmMono = DM_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://aiadventure.ai'),
  title: {
    default: 'AIAdventure.ai — Signal Over Noise',
    template: '%s | AIAdventure.ai',
  },
  description:
    'Curated intelligence on AI that actually matters. For founders, operators, creators, and curious minds navigating the frontier.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://aiadventure.ai',
    siteName: 'AIAdventure.ai',
    title: 'AIAdventure.ai — Signal Over Noise',
    description: 'Curated intelligence on AI that actually matters.',
    images: [{ url: '/og-default.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AIAdventure.ai — Signal Over Noise',
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
    <html lang="en" className={`${spaceGrotesk.variable} ${dmMono.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  )
}
