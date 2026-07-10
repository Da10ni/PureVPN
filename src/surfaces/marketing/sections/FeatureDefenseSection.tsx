import { type LucideIcon, Bell, CreditCard, LayoutGrid, Search } from 'lucide-react'
import { Container } from '@/components/layout'
import { SectionHeader } from '@/components/ui'
import { cn } from '@/lib/cn'

interface Feature {
  icon: LucideIcon
  title: string
  body: string
}

const topRow: Feature[] = [
  {
    icon: Bell,
    title: 'Continuous domain monitoring & alerting',
    body: 'We watch your domain against new dark web dumps and infostealer logs around the clock. The moment a corporate credential surfaces, your team is alerted — not months later.',
  },
  {
    icon: Search,
    title: 'Employee & contractor exfiltrate detection',
    body: 'We watch your domain against new dark web dumps and infostealer logs around the clock. The moment a corporate credential surfaces, your team is alerted — not months later.',
  },
  {
    icon: LayoutGrid,
    title: 'Domain-account & password-reuse detection',
    body: 'Surface exposed Windows domain and admin-style accounts, and flag passwords reused across multiple systems — the exact patterns attackers exploit to move laterally once inside.',
  },
]

const bottomRow: Feature[] = [
  {
    icon: CreditCard,
    title: 'Centralized security command center',
    body: 'One dashboard for CISOs and IT admins: exposure trends, affected accounts, system-level risk mapping and infection sources across the whole org.',
  },
]

function FeatureCard({ feature, className }: { feature: Feature; className?: string }) {
  const Icon = feature.icon
  return (
    <div className={cn('flex flex-col items-center rounded-[20px] bg-inset px-7 py-10 text-center', className)}>
      <span className="flex size-16 items-center justify-center rounded-[16px] border border-purple-tint bg-white">
        <Icon className="size-6 text-brand-600" strokeWidth={1.75} />
      </span>
      <h3 className="mt-7 text-[19px] font-bold leading-7 tracking-[-0.01em] text-ink">{feature.title}</h3>
      <p className="mt-3 text-[16px] leading-6 text-muted">{feature.body}</p>
    </div>
  )
}

/** White band — "Continuous credential defense" 3-then-centered feature grid. */
export function FeatureDefenseSection() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <Container>
        <SectionHeader
          eyebrow="IDENTITY THREAT PROTECTION FOR TEAMS"
          title={
            <>
              Continuous credential defense across
              <br className="hidden sm:block" /> your organization
            </>
          }
          description="Monitor and detect credential exposure for every employee, contractor and partner tied to your domain."
          className="mx-auto max-w-[760px]"
        />

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {topRow.map((f) => (
            <FeatureCard key={f.title} feature={f} />
          ))}
        </div>
        <div className="mt-6 flex justify-center">
          {bottomRow.map((f) => (
            <FeatureCard key={f.title} feature={f} className="w-full md:max-w-[calc((100%-3rem)/3)]" />
          ))}
        </div>
      </Container>
    </section>
  )
}
