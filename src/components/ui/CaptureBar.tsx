import { type FormEvent } from 'react'
import { cn } from '@/lib/cn'
import { Button } from './Button'

export interface CaptureBarProps {
  placeholder?: string
  cta: string
  ctaVariant?: 'gradient' | 'green' | 'purple'
  tone?: 'dark' | 'light'
  onSubmit?: (value: string) => void
  className?: string
}

/** Signature rounded pill wrapping a bare input + inline CTA. Stacks on mobile. */
export function CaptureBar({
  placeholder = 'Enter your business email',
  cta,
  ctaVariant = 'gradient',
  tone = 'dark',
  onSubmit,
  className,
}: CaptureBarProps) {
  function handle(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const v = new FormData(e.currentTarget).get('capture') as string
    onSubmit?.(v ?? '')
  }
  const btnVariant = ctaVariant === 'purple' ? 'primary' : ctaVariant
  return (
    <form
      onSubmit={handle}
      className={cn(
        'flex flex-col gap-2 rounded-[14px] p-2 sm:flex-row sm:items-center',
        tone === 'dark' ? 'bg-white/5 ring-1 ring-inset ring-white/10' : 'bg-white ring-1 ring-inset ring-line',
        className,
      )}
    >
      <input
        name="capture"
        type="text"
        placeholder={placeholder}
        className={cn(
          'h-11 w-full flex-1 bg-transparent px-4 text-[16px] focus:outline-none',
          tone === 'dark' ? 'text-white placeholder:text-white/40' : 'text-ink placeholder:text-disabled',
        )}
      />
      <Button type="submit" variant={btnVariant} className="shrink-0">
        {cta}
      </Button>
    </form>
  )
}
