import type { Metadata } from 'next'
import { Space_Grotesk, DM_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { GA4Script } from './components/GA4Script'
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
  const schemaOrg = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        name: 'AI Adventure',
        alternateName: 'AIAdventure.ai',
        url: 'https://aiadventure.ai',
        description:
          'Curated intelligence on AI that actually matters. Signal over noise for founders, operators, and curious minds.',
      },
      {
        '@type': 'Organization',
        name: 'AI Adventure',
        url: 'https://aiadventure.ai',
        parentOrganization: {
          '@type': 'Organization',
          name: 'The Collective Intelligence',
          url: 'https://thecollectiveintelligence.co',
        },
        founder: {
          '@type': 'Person',
          name: 'Chris Bradshaw',
          url: 'https://chrisbradshaw.ai',
        },
      },
    ],
  }

  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${dmMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
        />
        <GA4Script />
      </head>
      <body className="antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
