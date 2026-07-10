import { useState } from 'react'
import { Minus, Plus } from 'lucide-react'
import { Container } from '@/components/layout'
import { cn } from '@/lib/cn'

interface FaqEntry {
  q: string
  a: string
}

const faqs: FaqEntry[] = [
  {
    q: 'How does a domain scan work without network integration or agents?',
    a: "We never touch your infrastructure. You enter a business email, we extract the domain, and match it against breach compilations and infostealer logs we already aggregate from external dark web sources. There's nothing to install, no agent, and no access to your systems required.",
  },
  {
    q: 'Is it safe to enter my business email?',
    a: 'Yes. The email is used only to identify your domain and deliver the report. We never ask for a password and never attempt to log in to any of your systems.',
  },
  {
    q: 'How often is the dark web data updated?',
    a: 'Our sources are refreshed continuously. New breach dumps and infostealer logs are ingested as they surface, so your exposure picture reflects the latest available data.',
  },
  {
    q: "What's the difference between an infrastructure breach and an infostealer leak?",
    a: 'An infrastructure breach means an attacker broke into your servers or perimeter. An infostealer leak happens on an employee or contractor device — malware silently exfiltrates browser-saved passwords without ever touching your network.',
  },
  {
    q: 'Will this alert the exposed employees or trigger anything?',
    a: 'No. The scan is entirely passive and confidential. It does not notify exposed employees, reset any credentials, or trigger alerts in any of your systems.',
  },
  {
    q: 'What do I actually get, and what does it cost?',
    a: 'The free scan returns a confidential report of exposed corporate emails, domain accounts, the systems they open, and the malware and infection sources behind them. Continuous monitoring is available on a paid team plan.',
  },
]

function FaqRow({ entry, open, onToggle }: { entry: FaqEntry; open: boolean; onToggle: () => void }) {
  return (
    <div className="border-b border-line">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className="flex w-full items-start justify-between gap-6 py-7 text-left"
      >
        <span className="text-[20px] font-medium leading-7 tracking-[-0.01em] text-ink">{entry.q}</span>
        <span className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-full border border-neutral-800/80 text-ink">
          {open ? <Minus className="size-4" /> : <Plus className="size-4" />}
        </span>
      </button>
      <div className={cn('overflow-hidden transition-all', open ? 'max-h-96 pb-7' : 'max-h-0')}>
        <p className="max-w-[560px] text-[16px] leading-6 text-muted">{entry.a}</p>
      </div>
    </div>
  )
}

/** White band — FAQ "Teams ask. We answer." two-column accordion. */
export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  return (
    <section className="bg-white py-20 sm:py-24">
      <Container>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,380px)_1fr] lg:gap-16">
          <div className="lg:pt-2">
            <h2 className="text-[40px] font-bold leading-[46px] tracking-[-0.02em] text-ink">
              Teams ask.
              <br />
              We answer.
            </h2>
            <p className="mt-5 text-[16px] leading-6 text-muted">
              Read on to frequently asked questions about PureVPN teams
            </p>
          </div>

          <div>
            {faqs.map((entry, i) => (
              <FaqRow
                key={entry.q}
                entry={entry}
                open={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
