import { type HTMLAttributes } from 'react'
import { cn } from '@/lib/cn'

export type EyebrowTone = 'purple' | 'red' | 'muted' | 'lavender' | 'gray'

const tones: Record<EyebrowTone, string> = {
  purple: 'text-brand-600',
  red: 'text-danger-soft',
  muted: 'text-muted',
  lavender: 'text-lav-2',
  gray: 'text-neutral-500',
}

export interface EyebrowLabelProps extends HTMLAttributes<HTMLParagraphElement> {
  tone?: EyebrowTone
}

export function EyebrowLabel({ tone = 'purple', className, children, ...props }: EyebrowLabelProps) {
  return (
    <p
      className={cn('text-xs font-bold uppercase leading-4 tracking-[0.08em]', tones[tone], className)}
      {...props}
    >
      {children}
    </p>
  )
}
