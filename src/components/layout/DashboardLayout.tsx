import { type ReactNode, useState } from 'react'
import { Sidebar, type SidebarItem } from './Sidebar'
import { TopBar } from './TopBar'

export interface DashboardLayoutProps {
  nav: SidebarItem[]
  activeKey: string
  title: ReactNode
  teamName?: string
  showUpgrade?: boolean
  tabs?: ReactNode
  banner?: ReactNode
  avatarInitials?: string
  notify?: boolean
  children: ReactNode
}

export function DashboardLayout({
  nav,
  activeKey,
  title,
  teamName,
  showUpgrade,
  tabs,
  banner,
  avatarInitials,
  notify,
  children,
}: DashboardLayoutProps) {
  const [drawer, setDrawer] = useState(false)
  return (
    <div className="flex min-h-screen bg-canvas">
      <div className="hidden lg:block">
        <Sidebar items={nav} activeKey={activeKey} teamName={teamName} showUpgrade={showUpgrade} />
      </div>

      {drawer && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-black/40" onClick={() => setDrawer(false)} />
          <div className="absolute left-0 top-0 h-full">
            <Sidebar items={nav} activeKey={activeKey} teamName={teamName} showUpgrade={showUpgrade} onNavigate={() => setDrawer(false)} />
          </div>
        </div>
      )}

      <div className="flex min-w-0 flex-1 flex-col">
        <TopBar title={title} onMenu={() => setDrawer(true)} avatarInitials={avatarInitials} notify={notify} />
        {banner}
        {tabs && <div className="px-6 lg:px-8">{tabs}</div>}
        <main className="flex-1 px-6 py-6 lg:px-8">{children}</main>
      </div>
    </div>
  )
}
