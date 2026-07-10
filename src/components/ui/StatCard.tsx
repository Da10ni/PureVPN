import { type ReactNode } from 'react'
import { Info } from 'lucide-react'
import { cn } from '@/lib/cn'

export type StatAccent = 'neutral' | 'red' | 'orange' | 'blue' | 'white'

const accentText: Record<StatAccent, string> = {
  neutral: 'text-ink',
  red: 'text-danger',
  orange: 'text-warning-strong',
  blue: 'text-info-soft',
  white: 'text-white',
}

export interface StatCardProps {
  label?: ReactNode
  value: ReactNode
  caption?: ReactNode
  info?: boolean
  accent?: StatAccent
  variant?: 'marketing' | 'dashboard' | 'report'
  className?: string
}

export function StatCard({ label, value, caption, info, accent = 'neutral', variant = 'dashboard', className }: StatCardProps) {
  if (variant === 'marketing') {
    return (
      <div className={cn('flex flex-col gap-2.5', className)}>
        <div className={cn('text-[48px] font-extrabold leading-none tracking-[-0.02em] sm:text-[56px]', accent === 'neutral' ? 'text-ink' : accentText[accent])}>
          {value}
        </div>
        {caption && <p className="text-[15px] leading-[1.4] text-[#717171]">{caption}</p>}
      </div>
    )
  }
  if (variant === 'report') {
    return (
      <div className={cn('relative overflow-hidden rounded-[10px] border border-white/10 bg-panel p-4', className)}>
        <span
          className={cn(
            'absolute inset-x-0 top-0 h-0.5',
            accent === 'red' ? 'bg-danger-soft' : accent === 'orange' ? 'bg-warning-strong' : accent === 'blue' ? 'bg-info-soft' : 'bg-white/40',
          )}
        />
        <div className={cn('text-[28px] font-extrabold leading-none', accentText[accent === 'neutral' ? 'white' : accent])}>{value}</div>
        {label && <p className="mt-2 text-xs text-lav-2">{label}</p>}
      </div>
    )
  }
  return (
    <div className={cn('rounded-2xl border border-hair bg-white p-5 shadow-md', className)}>
      <div className="flex items-center gap-1.5 text-sm text-muted">
        {label}
        {info && <Info className="size-3.5 text-disabled" />}
      </div>
      <div className={cn('mt-3 text-[40px] font-extrabold leading-none tracking-[-0.01em]', accent === 'neutral' ? 'text-ink' : accentText[accent])}>
        {value}
      </div>
      {caption && <p className="mt-1 text-sm text-muted">{caption}</p>}
    </div>
  )
}
