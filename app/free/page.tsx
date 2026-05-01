import type { Metadata } from 'next'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import SubscribeCTA from '@/components/sections/SubscribeCTA'

export const metadata: Metadata = {
  title: 'Free AI Course for Professionals | Learn AI in 60 Minutes',
  description:
    'Five practical lessons. No jargon, no tech background needed. Learn how AI works, which tools matter, and how to use AI in your actual job. Free forever.',
  alternates: { canonical: 'https://aiadventure.ai/free' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Who is this AI course for?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'This course is for professionals in marketing, operations, HR, finance, and any non-technical role who want practical AI skills without the jargon. No coding or tech background required.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does the course take?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The full course takes approximately 62 minutes across 5 lessons. Each lesson is 8–15 minutes long, so you can fit it into a lunch break.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is the AI course really free?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, completely free. No credit card, no trial period, no upsell at the end. The course is free forever.',
      },
    },
    {
      '@type': 'Question',
      name: 'What will I be able to do after this course?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "After completing the 5 lessons, you'll understand how AI works, know which tools are most relevant to your job, be able to write effective AI prompts, and have a clear next step for continuing your AI learning.",
      },
    },
  ],
}

export default function FreePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Header />
      <main className="pt-16">
        <div className="mx-auto max-w-3xl px-6 lg:px-8 py-20">
          <p className="text-xs uppercase tracking-[0.2em] text-[var(--accent)] mb-3">
            Free Course
          </p>
          <h1 className="font-[family-name:var(--font-sans)] text-4xl md:text-5xl font-semibold text-white mb-4 leading-tight">
            Free AI Course for Professionals
          </h1>
          <p className="text-lg font-medium text-[var(--accent)] mb-6">
            The 60-minute AI course built for professionals, not programmers.
          </p>
          <p className="text-lg text-[var(--text-secondary)] leading-relaxed mb-12">
            Five practical lessons. No jargon, no tech background needed. Learn how AI works,
            which tools matter, and how to use AI in your actual job. Free forever.
          </p>

          {/* FAQ Section */}
          <section aria-label="Frequently asked questions" className="mt-16">
            <h2 className="font-[family-name:var(--font-sans)] text-2xl font-semibold text-white mb-8">
              Frequently asked questions
            </h2>
            <dl className="space-y-8">
              <div>
                <dt className="text-base font-semibold text-white mb-2">
                  Who is this AI course for?
                </dt>
                <dd className="text-[var(--text-secondary)] leading-relaxed">
                  This course is for professionals in marketing, operations, HR, finance, and any
                  non-technical role who want practical AI skills without the jargon. No coding or
                  tech background required.
                </dd>
              </div>
              <div>
                <dt className="text-base font-semibold text-white mb-2">
                  How long does the course take?
                </dt>
                <dd className="text-[var(--text-secondary)] leading-relaxed">
                  The full course takes approximately 62 minutes across 5 lessons. Each lesson is
                  8–15 minutes long, so you can fit it into a lunch break.
                </dd>
              </div>
              <div>
                <dt className="text-base font-semibold text-white mb-2">
                  Is the AI course really free?
                </dt>
                <dd className="text-[var(--text-secondary)] leading-relaxed">
                  Yes, completely free. No credit card, no trial period, no upsell at the end. The
                  course is free forever.
                </dd>
              </div>
              <div>
                <dt className="text-base font-semibold text-white mb-2">
                  What will I be able to do after this course?
                </dt>
                <dd className="text-[var(--text-secondary)] leading-relaxed">
                  After completing the 5 lessons, you&apos;ll understand how AI works, know which
                  tools are most relevant to your job, be able to write effective AI prompts, and
                  have a clear next step for continuing your AI learning.
                </dd>
              </div>
            </dl>
          </section>
        </div>
        <SubscribeCTA />
      </main>
      <Footer />
    </>
  )
}
