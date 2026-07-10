import { cn } from '@/lib/cn'

export interface LegendItem {
  label: string
  color: string
}

export function LegendRow({ items, tone = 'light', className }: { items: LegendItem[]; tone?: 'light' | 'dark'; className?: string }) {
  return (
    <div className={cn('flex flex-wrap items-center gap-4', className)}>
      {items.map((it) => (
        <span key={it.label} className={cn('flex items-center gap-1.5 text-xs', tone === 'light' ? 'text-muted' : 'text-lav-1')}>
          <span className="size-2 rounded-full" style={{ background: it.color }} aria-hidden />
          {it.label}
        </span>
      ))}
    </div>
  )
}
