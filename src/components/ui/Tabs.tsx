import { type ReactNode } from 'react'
import { cn } from '@/lib/cn'

export interface TabItem {
  key: string
  label: string
  icon?: ReactNode
}

export interface TabsProps {
  items: TabItem[]
  active: string
  onChange: (key: string) => void
  className?: string
}

export function Tabs({ items, active, onChange, className }: TabsProps) {
  return (
    <div className={cn('relative border-b border-hair', className)}>
      <div className="flex gap-8 overflow-x-auto">
        {items.map((it) => {
          const on = it.key === active
          return (
            <button
              key={it.key}
              type="button"
              onClick={() => onChange(it.key)}
              className={cn(
                'relative flex items-center gap-2 whitespace-nowrap pb-3 pt-1 text-[16px] font-semibold transition-colors',
                on ? 'text-brand-600' : 'text-muted hover:text-ink',
              )}
            >
              {it.icon}
              {it.label}
              {on && <span className="absolute inset-x-0 -bottom-px h-0.5 rounded-full bg-brand-700" aria-hidden />}
            </button>
          )
        })}
      </div>
    </div>
  )
}
