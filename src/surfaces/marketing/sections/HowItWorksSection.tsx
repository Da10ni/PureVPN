import { Check } from 'lucide-react'
import { Container } from '@/components/layout'
import { SectionHeader } from '@/components/ui'

interface Step {
  title: string
  body: string
}

const steps: Step[] = [
  {
    title: 'You enter your business email',
    body: 'We use it only to identify your domain and send the report. No password, no login, no access to your systems.',
  },
  {
    title: 'We check external dark web sources',
    body: 'Your domain is matched against breach compilations and infostealer malware logs we already monitor. Nothing is installed and nothing touches your network.',
  },
  {
    title: 'You get a confidential report',
    body: 'A breakdown of exposed corporate emails and domain accounts, mapped to the systems they open, the malware that stole them, and where the infections came from.',
  },
]

/** Gray band — "How the free domain scan works" split purple/dark panel with numbered steps. */
export function HowItWorksSection() {
  return (
    <section className="bg-band py-20 sm:py-24">
      <Container>
        <SectionHeader eyebrow="SAFE BY DESIGN" title="How the free domain scan works" className="mx-auto" />

        <div className="mt-14 grid grid-cols-1 overflow-hidden rounded-[16px] lg:grid-cols-2">
          <div className="min-h-[240px] bg-brand-500 lg:min-h-[560px]" aria-hidden />
          <div className="flex flex-col justify-center gap-9 bg-neutral-880 px-8 py-12 sm:px-12 sm:py-16">
            {steps.map((s) => (
              <div key={s.title} className="flex items-start gap-4">
                <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-white/10">
                  <Check className="size-3.5 text-white/70" strokeWidth={2.5} />
                </span>
                <div>
                  <h3 className="text-[20px] font-semibold leading-7 text-white">{s.title}</h3>
                  <p className="mt-2 max-w-[420px] text-[15px] leading-[22px] text-white/55">{s.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
