import { cn } from '@/lib/cn'

export interface LogoProps {
  variant?: 'light' | 'dark' | 'mark'
  className?: string
}

/**
 * Official PureVPN logo assets (real brand SVGs).
 * - `dark`  → purple circle badge + DARK wordmark  → use on LIGHT backgrounds (nav, sidebar)
 * - `light` → white badge + WHITE wordmark          → use on DARK backgrounds (hero, footer)
 */
export function Logo({ variant = 'dark', className }: LogoProps) {
  const src = variant === 'light' ? '/brand/logo-alt.svg' : '/brand/purevpn-logo.svg'
  return <img src={src} alt="PureVPN" draggable={false} className={cn('h-9 w-auto select-none', className)} />
}
