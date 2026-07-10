import { type HTMLAttributes, type ReactNode } from 'react'
import { cn } from '@/lib/cn'

export type SeverityLevel = 'low' | 'medium' | 'high' | 'critical'

const severityStyles: Record<SeverityLevel, { wrap: string; dot: string }> = {
  low: { wrap: 'bg-[#7de3b0]/20 text-[#1f9d63]', dot: 'bg-sev-low' },
  medium: { wrap: 'bg-[#ffe300]/20 text-[#94810a]', dot: 'bg-sev-medium' },
  high: { wrap: 'bg-[#ff5c47]/15 text-[#d1451f]', dot: 'bg-sev-high' },
  critical: { wrap: 'bg-[#ff5c5c]/15 text-[#dc2626]', dot: 'bg-sev-critical' },
}

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: 'severity' | 'status' | 'danger-outline' | 'confidential' | 'neutral' | 'filter' | 'discount'
  level?: SeverityLevel
  dot?: boolean
  active?: boolean
  count?: number
  leftIcon?: ReactNode
}

const baseCls = 'inline-flex items-center gap-1.5 rounded-full text-xs font-medium leading-none'

export function Badge({
  variant = 'neutral',
  level = 'low',
  dot,
  active,
  count,
  leftIcon,
  className,
  children,
  ...props
}: BadgeProps) {
  if (variant === 'severity') {
    const s = severityStyles[level]
    return (
      <span className={cn(baseCls, 'px-2.5 py-1', s.wrap, className)} {...props}>
        <span className={cn('size-1.5 rounded-full', s.dot)} aria-hidden />
        {children}
      </span>
    )
  }
  if (variant === 'status') {
    return (
      <span className={cn(baseCls, 'bg-purple-tint px-2.5 py-1 text-brand-600', className)} {...props}>
        {children}
      </span>
    )
  }
  if (variant === 'danger-outline') {
    return (
      <span className={cn(baseCls, 'border border-danger-soft/60 px-2.5 py-1 text-danger-soft', className)} {...props}>
        {dot && <span className="size-1.5 rounded-full bg-danger-soft" aria-hidden />}
        {children}
      </span>
    )
  }
  if (variant === 'confidential') {
    return (
      <span
        className={cn(baseCls, 'bg-danger-bg px-3 py-1 font-semibold uppercase tracking-[0.04em] text-danger', className)}
        {...props}
      >
        {leftIcon}
        {children}
      </span>
    )
  }
  if (variant === 'filter') {
    return (
      <button
        type="button"
        className={cn(
          baseCls,
          'border px-3 py-1.5 transition-colors',
          active ? 'border-transparent bg-purple-tint text-brand-600' : 'border-line text-muted hover:bg-neutral-100',
          className,
        )}
      >
        {children}
        {typeof count === 'number' && <span className="opacity-70">({count})</span>}
      </button>
    )
  }
  if (variant === 'discount') {
    return (
      <span className={cn(baseCls, 'bg-[#FFF3D6] px-2 py-0.5 font-bold text-[#B7883B]', className)} {...props}>
        {children}
      </span>
    )
  }
  return (
    <span className={cn(baseCls, 'bg-neutral-100 px-2.5 py-1 text-ink-body', className)} {...props}>
      {children}
    </span>
  )
}
