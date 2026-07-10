import { type ButtonHTMLAttributes, type ReactNode, forwardRef } from 'react'
import { cn } from '@/lib/cn'

export interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: ReactNode
  label: string
  variant?: 'plain' | 'bordered'
  dot?: boolean
}

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(function IconButton(
  { icon, label, variant = 'plain', dot, className, ...props },
  ref,
) {
  return (
    <button
      ref={ref}
      type="button"
      aria-label={label}
      title={label}
      className={cn(
        'relative inline-grid size-9 place-items-center rounded-full text-muted transition-colors hover:bg-neutral-100 hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600/40',
        variant === 'bordered' && 'border border-line',
        className,
      )}
      {...props}
    >
      {icon}
      {dot && <span className="absolute right-1.5 top-1.5 size-2 rounded-full bg-danger ring-2 ring-white" aria-hidden />}
    </button>
  )
})
