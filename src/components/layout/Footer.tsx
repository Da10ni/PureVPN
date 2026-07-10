import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaRedditAlien, FaDiscord } from 'react-icons/fa6'
import { Logo } from '@/components/ui/Logo'
import { Divider } from '@/components/ui/Divider'
import { Button } from '@/components/ui/Button'
import { Container } from './Container'

const columns: { title: string; links: string[] }[] = [
  { title: 'Solutions', links: ['Dedicated IPs', 'Port Forwarding', 'Remote Access VPN', 'Team Server'] },
  { title: 'Industries', links: ['Healthcare', 'IT Consulting & MSP', 'Software Teams', 'Fintech'] },
  { title: 'Industries', links: ['Case Studies', 'Pricing', 'Blog'] },
]

const socials = [FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaRedditAlien, FaDiscord]

export function Footer() {
  return (
    <footer className="bg-neutral-850 text-white">
      <Container className="py-14">
        {/* Row 1 — logo + socials */}
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <Logo variant="light" />
          <div className="flex gap-3">
            {socials.map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="social link"
                className="grid size-9 place-items-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
              >
                <Icon className="size-[15px]" />
              </a>
            ))}
          </div>
        </div>

        <Divider tone="dark" className="mt-8" />

        {/* Row 2 — link columns + email capture */}
        <div className="mt-10 grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-3 lg:grid-cols-[1fr_1fr_1fr_1.3fr]">
          {columns.map((col, i) => (
            <div key={col.title + i}>
              <h4 className="text-[15px] font-semibold text-white">{col.title}</h4>
              <ul className="mt-5 space-y-3.5">
                {col.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="text-[15px] text-white/60 transition-colors hover:text-white">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="col-span-2 sm:col-span-3 lg:col-span-1">
            <p className="text-[14px] text-white/70">Check your security in one click.</p>
            <p className="text-[20px] font-extrabold tracking-tight text-white">Fast. Simple. Effective.</p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-4 flex items-center gap-2 rounded-full bg-white/10 py-1 pl-4 pr-1"
            >
              <input
                type="email"
                placeholder="Enter your business email"
                className="h-9 min-w-0 flex-1 bg-transparent text-[14px] text-white placeholder:text-white/45 focus:outline-none"
              />
              <Button type="submit" variant="primary" shape="pill" size="sm" className="shrink-0">
                Scan Now
              </Button>
            </form>
            <p className="mt-3 text-[13px] leading-[1.5] text-white/45">
              By submitting your email, you agree to receive emails from us. Please enter a valid email.
            </p>
          </div>
        </div>

        <Divider tone="dark" className="mt-12" />

        {/* Copyright */}
        <p className="mt-6 text-[13px] text-white/50">
          © 2026 PureVPN. All rights reserved. For any queries, reach out at{' '}
          <a href="mailto:info@purevpn.com" className="underline underline-offset-2 hover:text-white">
            info@purevpn.com
          </a>
        </p>
      </Container>
    </footer>
  )
}
