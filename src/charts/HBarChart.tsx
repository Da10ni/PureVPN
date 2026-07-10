import { cn } from '@/lib/cn'

export interface HBarDatum {
  label: string
  value: number
}

export interface HBarChartProps {
  data: HBarDatum[]
  variant?: 'infection' | 'application'
  tone?: 'dark' | 'light'
  className?: string
}

/** Ranked horizontal bars on a track: left label · bar · right value. No axes. (Report charts) */
export function HBarChart({ data, variant = 'infection', tone = 'dark', className }: HBarChartProps) {
  const max = Math.max(...data.map((d) => d.value), 1)
  const dark = tone === 'dark'
  return (
    <div className={cn('flex flex-col gap-3', className)}>
      {data.map((d) => (
        <div key={d.label} className="flex items-center gap-3">
          <span className={cn('w-28 shrink-0 truncate text-xs', dark ? 'text-lav-1' : 'text-muted')} title={d.label}>
            {d.label}
          </span>
          <div className={cn('relative h-2.5 flex-1 rounded-full', dark ? 'bg-white/5' : 'bg-neutral-100')}>
            <div
              className="absolute inset-y-0 left-0 rounded-full"
              style={{
                width: `${(d.value / max) * 100}%`,
                background: variant === 'infection' ? 'var(--gradient-infection)' : '#70CFFE',
              }}
            />
          </div>
          <span className={cn('w-8 shrink-0 text-right text-xs font-semibold', dark ? 'text-white' : 'text-ink')}>{d.value}</span>
        </div>
      ))}
    </div>
  )
}
