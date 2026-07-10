import { Container } from '@/components/layout'
import { CaptureBar, DarkHeroFrame, DisplayHeadline, Divider, EyebrowLabel, PartnerLogoStrip } from '@/components/ui'

/** The landing's own dark hero — inset navy frame with the exposure-scan capture bar. */
export function HeroExposed() {
  return (
    <Container className="pt-6 sm:pt-8">
      <DarkHeroFrame glow="top-right" className="px-6 pb-12 pt-14 sm:px-12 sm:pb-16 sm:pt-20 lg:px-[72px] lg:pb-16 lg:pt-[136px]">
        <div className="max-w-[640px]">
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
            className="mt-9 max-w-[560px]"
            tone="dark"
            ctaVariant="gradient"
            cta="Free Check"
            placeholder="Enter your company domain"
          />
        </div>

        <div className="mt-20 sm:mt-24 lg:mt-28">
          <p className="text-xs font-bold uppercase tracking-[0.08em] text-lav-4">Trusted by 5000+ teams</p>
          <Divider tone="dark" className="mt-5" />
          <PartnerLogoStrip className="mt-8" />
        </div>
      </DarkHeroFrame>
    </Container>
  )
}
