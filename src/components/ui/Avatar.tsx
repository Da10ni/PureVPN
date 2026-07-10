import { cn } from '@/lib/cn'

export interface AvatarProps {
  initials?: string
  src?: string
  size?: 'sm' | 'md'
  className?: string
}

export function Avatar({ initials, src, size = 'md', className }: AvatarProps) {
  const sz = size === 'sm' ? 'size-8 text-xs' : 'size-10 text-sm'
  if (src) {
    return <img src={src} alt="" className={cn('rounded-full object-cover', sz, className)} />
  }
  return (
    <span className={cn('inline-grid place-items-center rounded-full bg-purple-tint font-semibold text-brand-600', sz, className)}>
      {initials}
    </span>
  )
}
