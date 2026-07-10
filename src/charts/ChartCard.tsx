import { type ReactNode } from 'react'
import { Info } from 'lucide-react'
import { cn } from '@/lib/cn'

export interface ChartCardProps {
  title: ReactNode
  info?: boolean
  legend?: ReactNode
  tone?: 'light' | 'dark'
  className?: string
  bodyClassName?: string
  children: ReactNode
}

export function ChartCard({ title, info, legend, tone = 'light', className, bodyClassName, children }: ChartCardProps) {
  return (
    <div
      className={cn(
        'rounded-2xl border p-5',
        tone === 'light' ? 'border-hair bg-white shadow-md' : 'border-white/10 bg-panel',
        className,
      )}
    >
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-1.5">
          <h3 className={cn('text-[15px] font-semibold', tone === 'light' ? 'text-ink' : 'text-white')}>{title}</h3>
          {info && <Info className={cn('size-3.5', tone === 'light' ? 'text-disabled' : 'text-white/40')} />}
        </div>
        {legend}
      </div>
      <div className={cn('mt-4', bodyClassName)}>{children}</div>
    </div>
  )
}
