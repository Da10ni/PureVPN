import { type ReactNode } from 'react'
import { cn } from '@/lib/cn'
import { EyebrowLabel, type EyebrowTone } from './EyebrowLabel'

export interface SectionHeaderProps {
  eyebrow?: string
  eyebrowTone?: EyebrowTone
  title: ReactNode
  description?: ReactNode
  align?: 'center' | 'left'
  tone?: 'light' | 'dark'
  className?: string
}

export function SectionHeader({
  eyebrow,
  eyebrowTone = 'purple',
  title,
  description,
  align = 'center',
  tone = 'light',
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        'flex flex-col',
        align === 'center' ? 'items-center text-center' : 'items-start text-left',
        className,
      )}
    >
      {eyebrow && <EyebrowLabel tone={eyebrowTone}>{eyebrow}</EyebrowLabel>}
      {/* Figma: 40px / 700 / line-height 115% / #222222 / tracking 0 */}
      <h2
        className={cn(
          'text-[30px] font-bold leading-[1.15] tracking-[0] sm:text-[40px]',
          eyebrow && 'mt-4',
          tone === 'light' ? 'text-ink' : 'text-white',
        )}
      >
        {title}
      </h2>
      {/* Figma: 18px / 400 / line-height 143% / #717171 */}
      {description && (
        <p
          className={cn(
            'mt-4 max-w-[680px] text-[18px] font-normal leading-[1.43]',
            tone === 'light' ? 'text-[#717171]' : 'text-lav-1',
          )}
        >
          {description}
        </p>
      )}
    </div>
  )
}
