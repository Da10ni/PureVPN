import { CaptureBar, DarkHeroFrame, DisplayHeadline, Divider, EyebrowLabel, PartnerLogoStrip } from '@/components/ui'

/** The landing's own dark hero — rounded card with a small outer margin (Figma-style). */
export function HeroExposed() {
  return (
    <div className="px-4 pt-4 sm:px-5 sm:pt-5">
      <DarkHeroFrame glow="top-right" className="px-6 py-10 sm:px-10 sm:py-12 lg:px-14 lg:py-14">
        <div className="max-w-[620px]">
          <EyebrowLabel tone="lavender">PUREVPN FOR TEAMS · DARK WEB EXPOSURE SCAN</EyebrowLabel>
          <DisplayHeadline className="mt-5 leading-[52px]">
            See what's exposed.
            <br />
            <span className="text-danger">Understand the threat.</span>
            <br />
            Take back control.
          </DisplayHeadline>
          <p className="mt-5 max-w-[520px] text-[18px] leading-[28px] text-white/55">
            PureVPN for Teams brings your domain's dark web credential exposure, corporate system risk, and
            attack-surface intelligence into one scan — so you spot threats early and act faster.
          </p>
          <CaptureBar
            className="mt-8 max-w-[560px]"
            tone="dark"
            ctaVariant="gradient"
            cta="Free Check"
            placeholder="Enter your company domain"
          />
        </div>

        <div className="mt-12 lg:mt-14">
          <p className="text-xs font-bold uppercase tracking-[0.08em] text-lav-4">Trusted by 5000+ teams</p>
          <Divider tone="dark" className="mt-5" />
          <PartnerLogoStrip className="mt-8" />
        </div>
      </DarkHeroFrame>
    </div>
  )
}
