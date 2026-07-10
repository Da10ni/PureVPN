import { cn } from '@/lib/cn'

/** Trusted-by partner-logo row — single composited SVG (Samsung … Bending Spoons). */
export interface PartnerLogoStripProps {
  className?: string
}

export function PartnerLogoStrip({ className }: PartnerLogoStripProps) {
  return (
    <img
      src="/brand/partners.svg"
      alt="Trusted by Samsung, HelloRache, Sitecore, Hiive, Ruby Ribbon, KD, Bending Spoons"
      className={cn('h-auto w-full max-w-full', className)}
    />
  )
}
