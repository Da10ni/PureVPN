import { type ReactNode } from 'react'
import { NavBar } from './NavBar'
import { Footer } from './Footer'

export function MarketingLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-white">
      <NavBar />
      <main>{children}</main>
      <Footer />
    </div>
  )
}
