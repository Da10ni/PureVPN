import { type ReactNode } from 'react'
import { cn } from '@/lib/cn'

export interface DisplayHeadlineProps {
  children: ReactNode
  align?: 'left' | 'center'
  tone?: 'light' | 'dark'
  className?: string
}

/** ExtraBold multi-line hero headline. Supports inline <span> recolor for emphasis words. */
export function DisplayHeadline({ children, align = 'left', tone = 'dark', className }: DisplayHeadlineProps) {
  return (
    <h1
      className={cn(
        'text-[40px] font-extrabold leading-[1.05] tracking-[-0.02em] sm:text-[52px] sm:leading-[56px]',
        align === 'center' ? 'text-center' : 'text-left',
        tone === 'dark' ? 'text-white' : 'text-ink',
        className,
      )}
    >
      {children}
    </h1>
  )
}
