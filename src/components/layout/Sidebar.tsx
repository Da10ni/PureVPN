import { type ReactNode } from 'react'
import { NavLink } from 'react-router-dom'
import { Crown } from 'lucide-react'
import { Logo } from '@/components/ui/Logo'
import { Badge } from '@/components/ui/Badge'
import { Divider } from '@/components/ui/Divider'
import { cn } from '@/lib/cn'

export interface SidebarItem {
  key: string
  label: string
  icon: ReactNode
  href?: string
  muted?: boolean
}

export interface SidebarProps {
  items: SidebarItem[]
  activeKey: string
  teamName?: string
  showUpgrade?: boolean
  onNavigate?: (key: string) => void
  className?: string
}

export function Sidebar({ items, activeKey, teamName, showUpgrade, onNavigate, className }: SidebarProps) {
  return (
    <aside className={cn('flex h-full w-[264px] shrink-0 flex-col border-r border-hair bg-white', className)}>
      <div className="px-5 py-5">
        <Logo variant="dark" />
      </div>

      {teamName && (
        <div className="px-5 pb-4">
          <p className="text-xs text-muted">Team Name</p>
          <p className="text-sm font-semibold text-ink">{teamName}</p>
          <Divider className="mt-4" />
        </div>
      )}

      <nav className="flex-1 overflow-y-auto px-3 py-2">
        {items.map((it) => {
          const on = it.key === activeKey
          const content = (
            <span
              className={cn(
                'relative mb-0.5 flex items-center gap-3 rounded-[10px] px-3 py-2.5 text-[15px] font-medium transition-colors',
                on ? 'bg-purple-tint text-brand-600' : it.muted ? 'text-disabled hover:bg-neutral-100' : 'text-ink-body hover:bg-neutral-100',
              )}
            >
              {on && <span className="absolute -left-3 top-1/2 h-6 w-1 -translate-y-1/2 rounded-r bg-brand-700" aria-hidden />}
              <span className="grid size-5 place-items-center">{it.icon}</span>
              {it.label}
            </span>
          )
          return it.href ? (
            <NavLink key={it.key} to={it.href} onClick={() => onNavigate?.(it.key)}>
              {content}
            </NavLink>
          ) : (
            <button key={it.key} type="button" className="block w-full text-left" onClick={() => onNavigate?.(it.key)}>
              {content}
            </button>
          )
        })}
      </nav>

      {showUpgrade && (
        <div className="p-3">
          <div className="flex items-center justify-between rounded-xl bg-[#FFF7E6] px-4 py-3">
            <span className="flex items-center gap-2 text-sm font-semibold text-[#B7883B]">
              <Crown className="size-4" /> Upgrade Plan
            </span>
            <Badge variant="discount">-20%</Badge>
          </div>
        </div>
      )}
    </aside>
  )
}
