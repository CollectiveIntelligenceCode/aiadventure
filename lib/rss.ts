import { XMLParser } from 'fast-xml-parser'

// TODO: Replace with AIAdventure.ai Substack RSS URL once live
export const SUBSTACK_RSS_URL = 'https://www.oneusefulthing.org/feed'
export const SUBSTACK_URL = 'https://www.oneusefulthing.org'

// TODO: Replace with AIAdventure.ai YouTube channel ID once live
// Currently: Andrej Karpathy's channel as placeholder
export const YOUTUBE_CHANNEL_ID = 'UCPk8m_r6fkUSIfmfhtm3-JA'
export const YOUTUBE_CHANNEL_URL = 'https://www.youtube.com/@AndrejKarpathy'

export interface SubstackPost {
  title: string
  link: string
  excerpt: string
  date: string
  author: string
}

export interface YouTubeVideo {
  id: string
  title: string
  link: string
  thumbnail: string
  date: string
  description: string
}

export async function getSubstackPosts(limit = 3): Promise<SubstackPost[]> {
  try {
    const res = await fetch(SUBSTACK_RSS_URL, {
      next: { revalidate: 3600 }, // revalidate every hour
    })
    if (!res.ok) return []
    const xml = await res.text()
    const parser = new XMLParser({ ignoreAttributes: false, attributeNamePrefix: '@_' })
    const parsed = parser.parse(xml)
    const items = parsed?.rss?.channel?.item ?? []
    const arr = Array.isArray(items) ? items : [items]
    return arr.slice(0, limit).map((item: Record<string, unknown>) => {
      const description = String(item['description'] ?? item['content:encoded'] ?? '')
      const plainExcerpt = description
        .replace(/<[^>]+>/g, '')
        .replace(/&nbsp;/g, ' ')
        .replace(/&amp;/g, '&')
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
        .replace(/&#[0-9]+;/g, '')
        .trim()
        .slice(0, 160)
      return {
        title: String(item['title'] ?? ''),
        link: String(item['link'] ?? SUBSTACK_URL),
        excerpt: plainExcerpt + (plainExcerpt.length === 160 ? '…' : ''),
        date: String(item['pubDate'] ?? ''),
        author: String(item['dc:creator'] ?? item['author'] ?? 'AIAdventure.ai'),
      }
    })
  } catch {
    return []
  }
}

export async function getYouTubeVideos(limit = 3): Promise<YouTubeVideo[]> {
  try {
    const feedUrl = `https://www.youtube.com/feeds/videos.xml?channel_id=${YOUTUBE_CHANNEL_ID}`
    const res = await fetch(feedUrl, {
      next: { revalidate: 3600 },
    })
    if (!res.ok) return []
    const xml = await res.text()
    const parser = new XMLParser({ ignoreAttributes: false, attributeNamePrefix: '@_' })
    const parsed = parser.parse(xml)
    const entries = parsed?.feed?.entry ?? []
    const arr = Array.isArray(entries) ? entries : [entries]
    return arr.slice(0, limit).map((entry: Record<string, unknown>) => {
      const videoId = String(entry['yt:videoId'] ?? '')
      const mediaGroup = entry['media:group'] as Record<string, unknown> | undefined
      const thumbnail =
        (mediaGroup?.['media:thumbnail'] as Record<string, unknown>)?.['@_url'] as string ??
        `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
      const description = String(
        (mediaGroup?.['media:description'] as string) ?? ''
      ).trim().slice(0, 140)
      return {
        id: videoId,
        title: String(entry['title'] ?? ''),
        link: `https://www.youtube.com/watch?v=${videoId}`,
        thumbnail: String(thumbnail),
        date: String(entry['published'] ?? ''),
        description: description + (description.length === 140 ? '…' : ''),
      }
    })
  } catch {
    return []
  }
}
