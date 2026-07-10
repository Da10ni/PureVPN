import { type HTMLAttributes } from 'react'
import { cn } from '@/lib/cn'

/**
 * Centered marketing content column. Figma frame = 1440 with a 1106px content
 * column (167px gutters). On xl+ we drop inner padding so the column is exactly
 * 1106px (a 806px heading then centers at left:317, matching the Figma spec).
 */
export function Container({ className, children, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn('mx-auto w-full max-w-[1106px] px-6 sm:px-8 xl:px-0', className)} {...props}>
      {children}
    </div>
  )
}
