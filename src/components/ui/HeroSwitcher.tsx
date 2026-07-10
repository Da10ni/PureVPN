import { useState, type ReactNode } from 'react'
import { cn } from '@/lib/cn'

export interface HeroOption {
  key: string
  label: string
  node: ReactNode
}

/**
 * Renders the active hero. The A/B toggle floats over the page (fixed, bottom-center)
 * so it never affects layout height — keeping the landing pixel-perfect to the Figma.
 */
export function HeroSwitcher({ options, className }: { options: HeroOption[]; className?: string }) {
  const [active, setActive] = useState(options[0]?.key)
  const current = options.find((o) => o.key === active) ?? options[0]
  return (
    <div className={className}>
      {current?.node}
      {options.length > 1 && (
        <div className="fixed bottom-4 left-1/2 z-40 flex -translate-x-1/2 items-center gap-1 rounded-full border border-hair bg-white/90 p-1.5 shadow-lg backdrop-blur">
          {options.map((o) => (
            <button
              key={o.key}
              type="button"
              onClick={() => setActive(o.key)}
              className={cn(
                'rounded-full px-3.5 py-1.5 text-xs font-semibold transition-colors',
                o.key === active ? 'bg-brand-600 text-white' : 'text-muted hover:bg-neutral-100',
              )}
            >
              {o.label}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
