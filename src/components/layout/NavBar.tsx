import { useState } from 'react'
import { ChevronDown, Menu, X } from 'lucide-react'
import { Logo } from '@/components/ui/Logo'
import { Button } from '@/components/ui/Button'
import { Container } from './Container'

const links = [
  { label: 'Solutions', caret: true },
  { label: 'Use Cases', caret: true },
  { label: 'Industries', caret: true },
  { label: 'Pricing' },
  { label: 'Case Studies' },
  { label: 'Blog' },
]

export function NavBar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-50 border-b border-hair bg-white/90 backdrop-blur">
      <Container className="flex h-[72px] items-center justify-between">
        <Logo variant="dark" />
        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <a key={l.label} href="#" className="flex items-center gap-1 text-[15px] font-medium text-ink-body transition-colors hover:text-ink">
              {l.label}
              {l.caret && <ChevronDown className="size-4 text-disabled" />}
            </a>
          ))}
        </nav>
        <div className="hidden items-center gap-4 lg:flex">
          <a href="#" className="text-[15px] font-medium text-ink-body hover:text-ink">
            Login
          </a>
          <Button variant="primary" shape="pill" size="sm">
            Get started
          </Button>
        </div>
        <button type="button" className="text-ink lg:hidden" onClick={() => setOpen((v) => !v)} aria-label="Menu">
          {open ? <X /> : <Menu />}
        </button>
      </Container>
      {open && (
        <div className="border-t border-hair bg-white lg:hidden">
          <Container className="flex flex-col gap-1 py-3">
            {links.map((l) => (
              <a key={l.label} href="#" className="py-2 text-ink-body">
                {l.label}
              </a>
            ))}
            <a href="#" className="py-2 text-ink-body">
              Login
            </a>
            <Button variant="primary" shape="pill" className="mt-2">
              Get started
            </Button>
          </Container>
        </div>
      )}
    </header>
  )
}
