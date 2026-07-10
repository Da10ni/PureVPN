import {
  LayoutGrid,
  ShieldCheck,
  Download,
  SlidersHorizontal,
  ScanFace,
  FileMinus,
  KeyRound,
  UserCog,
  Receipt,
  MessageSquareText,
  Gift,
  Star,
  Wrench,
  LifeBuoy,
} from 'lucide-react'
import type { SidebarItem } from '@/components/layout/Sidebar'

const ic = 'size-5'

/** Sidebar for the Identity Protection screens (Bending Spoons team). */
export const identityNav: SidebarItem[] = [
  { key: 'dashboard', label: 'Dashboard', icon: <LayoutGrid className={ic} />, muted: true },
  { key: 'setup', label: 'Setup VPN', icon: <ShieldCheck className={ic} />, muted: true },
  { key: 'downloads', label: 'Downloads', icon: <Download className={ic} />, muted: true },
  { key: 'manual', label: 'Manual Configuration', icon: <SlidersHorizontal className={ic} />, muted: true },
  { key: 'identity', label: 'Identity Protection', icon: <ScanFace className={ic} />, href: '/app/identity-protection' },
  { key: 'remove', label: 'Remove my Data', icon: <FileMinus className={ic} /> },
  { key: 'password', label: 'Password Manager', icon: <KeyRound className={ic} /> },
  { key: 'profile', label: 'Profile Settings', icon: <UserCog className={ic} /> },
  { key: 'subscription', label: 'Subscription', icon: <Receipt className={ic} /> },
  { key: 'feedback', label: 'Feedback', icon: <MessageSquareText className={ic} /> },
]

/** Sidebar for the Pro Plan screen. */
export const proPlanNav: SidebarItem[] = [
  { key: 'dashboard', label: 'Dashboard', icon: <LayoutGrid className={ic} /> },
  { key: 'setup', label: 'Setup VPN', icon: <ShieldCheck className={ic} /> },
  { key: 'downloads', label: 'Downloads', icon: <Download className={ic} /> },
  { key: 'proplan', label: 'Pro Plan', icon: <Star className={ic} />, href: '/app/pro-plan' },
  { key: 'credits', label: 'Earn Free Credits', icon: <Gift className={ic} /> },
  { key: 'security', label: 'Security Tools', icon: <Wrench className={ic} /> },
  { key: 'account', label: 'Account Settings', icon: <UserCog className={ic} /> },
  { key: 'subscription', label: 'Subscription', icon: <Receipt className={ic} /> },
  { key: 'help', label: 'Help Desk', icon: <LifeBuoy className={ic} /> },
]
