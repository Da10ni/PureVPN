import { ShieldCheck } from 'lucide-react'
import {
  CaptureBar,
  DarkHeroFrame,
  DisplayHeadline,
  PartnerLogoStrip,
} from '@/components/ui'
import { cn } from '@/lib/cn'

/** Hero variant B — "Is your company Already Breached?" (dark frame, yellow-glow media). */
export function HeroBreached() {
  return (
    <section className="bg-neutral-1000 p-3 sm:p-4 lg:p-6">
      <DarkHeroFrame
        glow="top-right"
        innerClassName="px-6 py-12 sm:px-10 sm:py-16 lg:px-20 lg:py-24"
      >
        {/* Top: two-column split */}
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* LEFT — content stack */}
          <div className="flex flex-col">
            <DisplayHeadline className="lg:text-[64px] lg:leading-[1.0]">
              Is your
              <br />
              company{' '}
              <span className="text-danger">
                Already
                <br />
                Breached?
              </span>
            </DisplayHeadline>

            <p className="mt-10 max-w-[400px] text-[18px] leading-[28px] text-lav-1/90 lg:mt-12">
              One scan shows every company login already leaked on the dark web
              {' — '}and exactly which systems they open.
            </p>

            <CaptureBar
              className="mt-8 max-w-[560px] bg-white/[0.06] ring-white/[0.08]"
              tone="dark"
              ctaVariant="purple"
              cta="Scan Company Domain"
              placeholder="Enter your business email"
            />

            {/* Reassurance line */}
            <div className="mt-6 flex max-w-[540px] items-start gap-2.5">
              <ShieldCheck
                aria-hidden
                className="mt-0.5 size-[18px] shrink-0 text-success-soft"
              />
              <p className="text-[15px] leading-[22px] text-white/45">
                No software to install and no network access required. We check
                your domain against dark web breach data externally — nothing
                ever touches your systems.
              </p>
            </div>

            {/* Micro-benefits row */}
            <p className="mt-4 flex flex-wrap items-center text-[15px] leading-[22px] text-white/40">
              <span>Free for a limited time</span>
              <Dot />
              <span>No credit card</span>
              <Dot />
              <span>Your email is only used to send the report</span>
            </p>

            {/* Trusted-by label */}
            <p className="mt-9 text-[13px] font-semibold uppercase tracking-[0.14em] text-white/55">
              Trusted by 5000+ teams
            </p>
          </div>

          {/* RIGHT — glowing media placeholder */}
          <div className="flex justify-center lg:justify-end">
            <div
              aria-label="Product preview"
              role="img"
              className="glow-yellow aspect-[11/10] w-full max-w-[600px] rounded-[24px] bg-[#D9D9D9] ring-2 ring-[#FFE300]"
            />
          </div>
        </div>

        {/* Divider */}
        <div className="mt-12 h-px w-full bg-white/10 lg:mt-16" />

        {/* Partner logo strip */}
        <PartnerLogoStrip className="mt-10 lg:mt-12" />
      </DarkHeroFrame>
    </section>
  )
}

/** Middot separator for the micro-benefits row. */
function Dot() {
  return (
    <span aria-hidden className={cn('mx-3 text-white/30')}>
      &middot;
    </span>
  )
}
