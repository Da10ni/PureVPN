import { cn } from '@/lib/cn'

export interface DividerProps {
  orientation?: 'horizontal' | 'vertical'
  tone?: 'light' | 'dark'
  className?: string
}

export function Divider({ orientation = 'horizontal', tone = 'light', className }: DividerProps) {
  return (
    <span
      role="separator"
      aria-orientation={orientation}
      className={cn(
        tone === 'light' ? 'bg-hair' : 'bg-white/10',
        orientation === 'horizontal' ? 'block h-px w-full' : 'block w-px self-stretch',
        className,
      )}
    />
  )
}
