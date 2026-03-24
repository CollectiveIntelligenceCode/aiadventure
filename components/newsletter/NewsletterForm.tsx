'use client'

import { useState } from 'react'

interface NewsletterFormProps {
  variant?: 'inline' | 'stacked'
}

export default function NewsletterForm({ variant = 'inline' }: NewsletterFormProps) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email) return
    setStatus('submitting')
    // TODO: wire to email provider (Resend / ConvertKit)
    await new Promise((r) => setTimeout(r, 800))
    setStatus('success')
  }

  if (status === 'success') {
    return (
      <p className="text-sm text-[var(--accent)]">
        You are on the list. We will be in touch with signal worth your time.
      </p>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={variant === 'inline' ? 'flex gap-3 flex-wrap' : 'flex flex-col gap-3'}
    >
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="your@email.com"
        required
        className="flex-1 min-w-0 rounded-full bg-white/5 border border-[var(--border)] px-5 py-3 text-sm text-white placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--accent)]/50 transition-colors"
      />
      <button
        type="submit"
        disabled={status === 'submitting'}
        className="rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-medium text-white hover:bg-blue-500 disabled:opacity-60 transition-colors whitespace-nowrap"
      >
        {status === 'submitting' ? 'Subscribing…' : 'Get the briefing'}
      </button>
    </form>
  )
}
