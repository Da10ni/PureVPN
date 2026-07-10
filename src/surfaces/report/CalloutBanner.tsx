import { type ReactNode } from 'react'
import { cn } from '@/lib/cn'

export interface CalloutBannerProps {
  lead: ReactNode
  children: ReactNode
  className?: string
}

/** Red-tinted full-width banner with a red left accent border (danger callout). */
export function CalloutBanner({ lead, children, className }: CalloutBannerProps) {
  return (
    <div
      className={cn(
        'rounded-[8px] border border-white/5 border-l-[3px] border-l-danger bg-panel-4 px-5 py-4',
        className,
      )}
    >
      <p className="text-[13px] leading-[1.55] text-[#B4B4B4]">
        <span className="font-bold text-white">{lead} </span>
        {children}
      </p>
    </div>
  )
}
