import { Fragment, type ReactNode } from 'react'
import { cn } from '@/lib/cn'

export interface MetaPair {
  label: string
  value: ReactNode
}

export interface MetaBarProps {
  items: MetaPair[]
  className?: string
}

/** Full-width dark rounded strip holding inline label:value pairs (report meta). */
export function MetaBar({ items, className }: MetaBarProps) {
  return (
    <div
      className={cn(
        'flex flex-wrap items-center gap-x-3 gap-y-2 rounded-[10px] border border-white/10 bg-panel px-5 py-3.5',
        className,
      )}
    >
      {items.map((item, i) => (
        <Fragment key={item.label}>
          {i > 0 && <span className="hidden text-white/15 sm:inline" aria-hidden>·</span>}
          <span className="text-[13px] leading-5">
            <span className="text-[#808080]">{item.label}: </span>
            <span className="font-semibold text-white">{item.value}</span>
          </span>
        </Fragment>
      ))}
    </div>
  )
}
