import { type InputHTMLAttributes, type ReactNode, forwardRef } from 'react'
import { cn } from '@/lib/cn'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  variant?: 'bordered' | 'bare' | 'search'
  leftIcon?: ReactNode
}

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { variant = 'bordered', leftIcon, className, ...props },
  ref,
) {
  const field = (
    <input
      ref={ref}
      className={cn(
        'w-full bg-transparent text-[16px] text-ink placeholder:text-disabled focus:outline-none',
        variant === 'bordered' && 'h-11 rounded-lg border border-line px-4 focus:border-brand-600',
        variant === 'search' && 'h-11',
        leftIcon && 'pl-0',
        className,
      )}
      {...props}
    />
  )

  if (variant === 'search') {
    return (
      <div className="flex h-11 items-center gap-2 rounded-full border border-line bg-white px-4">
        {leftIcon && <span className="text-disabled">{leftIcon}</span>}
        {field}
      </div>
    )
  }
  if (variant === 'bare') return field
  return field
})
