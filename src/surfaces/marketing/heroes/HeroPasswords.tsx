import { ShieldCheck } from 'lucide-react'
import { CaptureBar, DisplayHeadline, EyebrowLabel } from '@/components/ui'
import { Container } from '@/components/layout/Container'
import { TerminalCard } from './TerminalCard'

const trustItems = ['Free for a limited time', 'No credit card', 'Your email is only used to send the report']

/** Hero variant A — Dark Web Exposure Assessment for Business. */
export function HeroPasswords() {
  return (
    <section className="relative overflow-hidden bg-navy">
      {/* Ambient purple glow, top-right, behind content */}
      <div
        aria-hidden
        className="glow-purple pointer-events-none absolute -right-40 -top-40 hidden h-[720px] w-[720px] lg:block"
      />
      <div
        aria-hidden
        className="glow-purple pointer-events-none absolute -top-48 left-1/2 h-[560px] w-[560px] -translate-x-1/2 opacity-70 lg:hidden"
      />

      <Container className="relative py-16 lg:py-24">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* LEFT column */}
          <div className="max-w-[560px]">
            <EyebrowLabel tone="purple" className="text-brand-500">
              DARK WEB EXPOSURE ASSESSMENT FOR BUSINESS
            </EyebrowLabel>

            <DisplayHeadline className="mt-5 text-[36px] leading-[1.03] sm:text-[52px] sm:leading-[1.03] lg:text-[56px]">
              Your employees' passwords are{' '}
              <span className="text-[#7de3b0]">
                already on the dark web<span className="text-[#7de3b0]">.</span>
              </span>{' '}
              You just haven't looked.
            </DisplayHeadline>

            <p className="mt-6 max-w-[520px] text-[18px] leading-[1.5] text-lav-1">
              One scan shows every company login already leaked on the dark web — and exactly which systems they open.
            </p>

            <CaptureBar
              className="mt-8 max-w-[520px]"
              tone="dark"
              ctaVariant="green"
              cta="Scan Company Domain →"
              placeholder="Enter your business email"
            />

            {/* Reassurance line */}
            <div className="mt-6 flex max-w-[520px] items-start gap-2.5">
              <ShieldCheck className="mt-0.5 size-4 shrink-0 text-[#7de3b0]" aria-hidden />
              <p className="text-[16px] leading-[1.45] text-lav-2">
                No software to install and no network access required. We check your domain against dark web breach data
                externally — nothing ever touches your systems.
              </p>
            </div>

            {/* Bullet trust row */}
            <ul className="mt-5 flex flex-wrap items-center gap-x-2 gap-y-1 text-[14px] font-medium text-lav-3">
              {trustItems.map((item, i) => (
                <li key={item} className="flex items-center gap-2">
                  {i > 0 && <span aria-hidden className="text-lav-3/60">•</span>}
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT column */}
          <div className="lg:pl-4">
            <TerminalCard />
          </div>
        </div>
      </Container>
    </section>
  )
}
