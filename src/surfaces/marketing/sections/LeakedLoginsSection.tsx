import { Lock } from 'lucide-react'
import { Container } from '@/components/layout'
import { Badge, SectionHeader } from '@/components/ui'

interface MediaCard {
  title: string
  body: string
}

const cards: MediaCard[] = [
  {
    title: "Know exactly who's exposed",
    body: 'We break your leaked logins down by identity type: corporate email accounts, Windows domain and admin-style usernames, and the applications each one opens. You see the real blast radius across your organization, not one scary number. Example figures from an anonymized real scan.',
  },
  {
    title: 'See which company systems are at risk',
    body: 'Every leaked password is matched to the exact system it opens — Microsoft 365, SAP, Jira, Confluence, ADFS, Identity Manager and internal portals — with the malware that stole it and the date it was taken. A recent date means the device may still be infected right now.',
  },
  {
    title: 'See where the leaks are coming from',
    body: 'Each infostealer capture carries the source IP and location of the infected device, so you can tell a one-off personal laptop from a cluster of infections in a single office, region or partner network — and focus your response where it matters.',
  },
]

/** Gray band — "See every leaked login before an attacker uses it" + confidential pill + 3 media cards. */
export function LeakedLoginsSection() {
  return (
    <section className="bg-band py-20 sm:py-24">
      <Container>
        <SectionHeader
          eyebrow="WHAT YOUR FREE SCAN UNLOCKS"
          title="See every leaked login before an attacker uses it"
          description="Your scan builds a confidential report on your domain — who's exposed, which systems are at risk, and where the infections are coming from. Here's what's inside."
          className="mx-auto max-w-[760px]"
        />

        <div className="mt-8 flex justify-center">
          <Badge
            variant="confidential"
            className="border border-danger/30 text-[13px] text-danger-soft"
            leftIcon={<Lock className="size-3" />}
          >
            Confidential — internal security use only
          </Badge>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {cards.map((c) => (
            <article key={c.title} className="overflow-hidden rounded-[20px] bg-white shadow-md">
              <div className="aspect-[4/3] w-full bg-neutral-1000" aria-hidden />
              <div className="p-7">
                <h3 className="text-[22px] font-bold leading-7 tracking-[-0.01em] text-ink">{c.title}</h3>
                <p className="mt-4 text-[16px] leading-6 text-muted">{c.body}</p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}
