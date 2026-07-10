import { type ButtonHTMLAttributes, type ReactNode, forwardRef } from 'react'
import { cn } from '@/lib/cn'

export type ButtonVariant = 'primary' | 'gradient' | 'green' | 'secondary' | 'text'
export type ButtonSize = 'sm' | 'md' | 'lg'
export type ButtonShape = 'rounded' | 'pill'

const base =
  'inline-flex items-center justify-center gap-2 font-semibold tracking-[0.005em] whitespace-nowrap transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600/40 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none'

const variants: Record<ButtonVariant, string> = {
  primary: 'bg-brand-600 text-white hover:bg-brand-500',
  gradient: 'bg-cta text-white hover:opacity-95',
  green: 'bg-[#2ECB8C] text-[#08324f] hover:bg-[#28b87e]',
  secondary: 'border border-line bg-white text-ink hover:bg-neutral-100',
  text: 'text-brand-600 hover:underline underline-offset-4',
}

const sizes: Record<ButtonSize, string> = {
  sm: 'h-9 px-4 text-sm',
  md: 'h-11 px-5 text-[16px]',
  lg: 'h-[52px] px-6 text-[16px]',
}

const shapes: Record<ButtonShape, string> = {
  rounded: 'rounded-lg',
  pill: 'rounded-full',
}

export function buttonVariants({
  variant = 'primary',
  size = 'md',
  shape = 'rounded',
}: { variant?: ButtonVariant; size?: ButtonSize; shape?: ButtonShape } = {}) {
  const isText = variant === 'text'
  return cn(base, variants[variant], !isText && sizes[size], !isText && shapes[shape])
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
  shape?: ButtonShape
  leftIcon?: ReactNode
  rightIcon?: ReactNode
  fullWidth?: boolean
  loading?: boolean
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { variant = 'primary', size = 'md', shape = 'rounded', leftIcon, rightIcon, fullWidth, loading, className, children, disabled, ...props },
  ref,
) {
  return (
    <button
      ref={ref}
      disabled={disabled || loading}
      className={cn(buttonVariants({ variant, size, shape }), fullWidth && 'w-full', className)}
      {...props}
    >
      {loading ? (
        <span className="size-4 animate-spin rounded-full border-2 border-current border-t-transparent" aria-hidden />
      ) : (
        leftIcon
      )}
      {children}
      {rightIcon}
    </button>
  )
})
