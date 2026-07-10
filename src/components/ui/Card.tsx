import { type HTMLAttributes, forwardRef } from 'react'
import { cn } from '@/lib/cn'

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  padded?: boolean
  tone?: 'light' | 'dark'
}

export const Card = forwardRef<HTMLDivElement, CardProps>(function Card(
  { padded = true, tone = 'light', className, children, ...props },
  ref,
) {
  return (
    <div
      ref={ref}
      className={cn(
        'rounded-2xl border shadow-md',
        tone === 'light' ? 'border-hair bg-white' : 'border-white/10 bg-panel',
        padded && 'p-6',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  )
})
