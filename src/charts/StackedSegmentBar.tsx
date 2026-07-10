import { cn } from '@/lib/cn'

export interface Segment {
  label: string
  value: number
  color: string
}

/** A single bar split into flat color segments (domain-squatting). Vertical by default. */
export function StackedSegmentBar({
  segments,
  orientation = 'vertical',
  className,
}: {
  segments: Segment[]
  orientation?: 'vertical' | 'horizontal'
  className?: string
}) {
  const total = segments.reduce((s, x) => s + x.value, 0) || 1
  return (
    <div
      className={cn(
        'flex overflow-hidden rounded-lg',
        orientation === 'vertical' ? 'h-full w-full flex-col' : 'h-full w-full flex-row',
        className,
      )}
    >
      {segments.map((s, i) => (
        <div
          key={s.label + i}
          title={`${s.label}: ${s.value}`}
          style={
            orientation === 'vertical'
              ? { height: `${(s.value / total) * 100}%`, background: s.color }
              : { width: `${(s.value / total) * 100}%`, background: s.color }
          }
        />
      ))}
    </div>
  )
}
