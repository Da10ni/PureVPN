import { type ReactNode } from 'react'
import { cn } from '@/lib/cn'

export interface DarkHeroFrameProps {
  children: ReactNode
  glow?: 'top-right' | 'top-center' | 'none'
  rounded?: boolean
  className?: string
  innerClassName?: string
}

/** Navy rounded hero/report container with the signature purple radial glow layer. */
export function DarkHeroFrame({ children, glow = 'top-right', rounded = true, className, innerClassName }: DarkHeroFrameProps) {
  return (
    <div
      className={cn(
        'relative overflow-hidden bg-navy',
        rounded && 'rounded-[24px] ring-1 ring-inset ring-white/10',
        className,
      )}
    >
      {glow !== 'none' && (
        <div
          aria-hidden
          className={cn(
            'glow-purple pointer-events-none absolute z-0 size-[720px]',
            glow === 'top-right' ? '-right-48 -top-56' : '-top-80 left-1/2 -translate-x-1/2',
          )}
        />
      )}
      <div className={cn('relative z-10', innerClassName)}>{children}</div>
    </div>
  )
}
