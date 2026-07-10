import { type ReactNode } from 'react'
import { ArrowRight, Check } from 'lucide-react'
import { Container } from '@/components/layout'
import { EyebrowLabel, SectionHeader } from '@/components/ui'
import { cn } from '@/lib/cn'

interface ComparisonCardProps {
  eyebrow: string
  title: string
  bullets: string[]
  tone: 'lavender' | 'gray'
}

function GreenCheck() {
  return (
    <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-success" aria-hidden>
      <Check className="size-3 text-white" strokeWidth={3} />
    </span>
  )
}

function ComparisonCard({ eyebrow, title, bullets, tone }: ComparisonCardProps) {
  return (
    <div className={cn('rounded-[20px] p-8 sm:p-10', tone === 'lavender' ? 'bg-purple-tint' : 'bg-band')}>
      <EyebrowLabel tone="purple">{eyebrow}</EyebrowLabel>
      <h3 className="mt-4 text-[24px] font-bold leading-8 tracking-[-0.01em] text-ink">{title}</h3>
      <ul className="mt-6 flex flex-col gap-4">
        {bullets.map((b) => (
          <li key={b} className="flex items-start gap-3 text-[16px] leading-6 text-ink-body">
            <GreenCheck />
            <span>{b}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

interface FlowChip {
  emoji: string
  label: string
}

const flowChips: FlowChip[] = [
  { emoji: '👤', label: 'Employee device' },
  { emoji: '🔑', label: 'Browser-saved passwords' },
  { emoji: '🦠', label: 'Infostealer (Raccoon, Meta, Vidar)' },
  { emoji: '🏢', label: 'Your corporate systems' },
]

function FlowBar() {
  return (
    <div className="bg-hero-sweep overflow-hidden rounded-[20px] px-5 py-5 sm:px-8 sm:py-7">
      <div className="flex flex-col items-center gap-3 md:flex-row md:flex-wrap md:justify-center">
        {flowChips.map((chip, i) => (
          <div key={chip.label} className="flex flex-col items-center gap-3 md:flex-row">
            <span className="inline-flex items-center gap-2 rounded-[10px] border border-white/15 bg-white/10 px-4 py-2.5 text-[15px] font-medium text-white backdrop-blur-sm">
              <span aria-hidden>{chip.emoji}</span>
              {chip.label}
            </span>
            {i < flowChips.length - 1 && (
              <ArrowRight className="size-5 rotate-90 text-white/50 md:rotate-0" aria-hidden />
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

/** "Your firewall is fine" — comparison cards + infostealer flow bar + red callout. */
export function FirewallSection() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <Container>
        <SectionHeader
          eyebrow="THE INFOSTEALER REALITY"
          title={
            <>
              Your firewall is fine. Your employees'
              <br className="hidden sm:block" /> browsers are the problem.
            </>
          }
          description="Most corporate credential leaks don't come from someone breaking into your infrastructure. They come from your own people — and your sellers, contractors and partners — saving work passwords in personal browsers on personal devices. One malware infection exports every saved password. Including the ones that unlock your company."
          className="mx-auto max-w-[760px]"
        />

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <ComparisonCard
            tone="lavender"
            eyebrow="THE BREACH YOU'RE BUDGETING FOR"
            title="A targeted attack on your servers"
            bullets={[
              'Firewalls, VPNs and endpoint agents',
              'Detectable, logged, alertable',
              'Requires breaking your perimeter',
              'Comparatively rare',
            ]}
          />
          <ComparisonCard
            tone="gray"
            eyebrow="THE BREACH ALREADY IN PROGRESS"
            title="Malware on a personal device"
            bullets={[
              "Runs on an employee's or contractor's own machine",
              'Silently exfiltrates browser-saved passwords',
              'Your Shopify admin, Workspace and ERP sold on dark web markets',
              'Invisible to your tools — it never touched your network',
            ]}
          />
        </div>

        <div className="mt-6">
          <FlowBar />
        </div>

        <p className="mx-auto mt-12 max-w-[860px] text-center text-[26px] font-bold leading-[36px] tracking-[-0.01em] text-ink sm:text-[30px] sm:leading-[42px]">
          In a single real-world domain scan, we found{' '}
          <Highlight>440 leaked credential records</Highlight> — reaching into Microsoft 365, SAP, Jira, ADFS
          and internal admin portals, and including Windows domain accounts. The company had no idea.
        </p>
      </Container>
    </section>
  )
}

function Highlight({ children }: { children: ReactNode }) {
  return <span className="text-danger">{children}</span>
}
