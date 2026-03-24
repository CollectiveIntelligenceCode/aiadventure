import Link from 'next/link'
import { TOPICS } from '@/content/topics'
import { cn } from '@/lib/utils'

interface TopicBadgeProps {
  topicSlug: string
  className?: string
  asLink?: boolean
}

export default function TopicBadge({ topicSlug, className, asLink = true }: TopicBadgeProps) {
  const topic = TOPICS.find((t) => t.slug === topicSlug)
  if (!topic) return null

  const badge = (
    <span
      className={cn(
        'inline-block text-xs uppercase tracking-widest font-medium px-2 py-0.5 rounded',
        'bg-white/5 border border-white/10',
        topic.color,
        className
      )}
    >
      {topic.label}
    </span>
  )

  if (!asLink) return badge
  return <Link href={`/topics/${topic.slug}`}>{badge}</Link>
}
