import { type ReactNode } from 'react'
import { Bell, MessageSquare, Menu } from 'lucide-react'
import { IconButton } from '@/components/ui/IconButton'
import { Avatar } from '@/components/ui/Avatar'
import { cn } from '@/lib/cn'

export interface TopBarProps {
  title: ReactNode
  onMenu?: () => void
  right?: ReactNode
  avatarInitials?: string
  notify?: boolean
  className?: string
}

export function TopBar({ title, onMenu, right, avatarInitials = 'SA', notify, className }: TopBarProps) {
  return (
    <header className={cn('flex items-center justify-between gap-4 px-6 py-5 lg:px-8', className)}>
      <div className="flex min-w-0 items-center gap-3">
        {onMenu && (
          <button type="button" className="text-ink lg:hidden" onClick={onMenu} aria-label="Menu">
            <Menu />
          </button>
        )}
        <h1 className="truncate text-[28px] font-bold tracking-tight text-ink sm:text-[32px]">{title}</h1>
      </div>
      <div className="flex items-center gap-3">
        {right ?? (
          <>
            <button type="button" className="flex items-center gap-2 text-sm font-medium text-ink-body">
              <MessageSquare className="size-5" /> <span className="hidden sm:inline">Live Support</span>
            </button>
            <IconButton icon={<Bell className="size-5" />} label="Notifications" dot={notify} />
            <Avatar initials={avatarInitials} />
          </>
        )}
      </div>
    </header>
  )
}
