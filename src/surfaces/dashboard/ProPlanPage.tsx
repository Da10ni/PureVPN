import { useState } from 'react'
import { Check } from 'lucide-react'
import { FaLinkedin } from 'react-icons/fa6'
import { DashboardLayout } from '@/components/layout'
import { Button, Card, EyebrowLabel, Input } from '@/components/ui'
import { proPlanNav } from './nav'

const REFERRAL_URL = 'https://my.purevpn.com/v2/dashboard/refer'

const CHECKLIST = [
  'Start a free trial via your referral link.',
  'Purchase any paid Intercom plan.',
  'Stay subscribed for 2 months.',
]

/** Full-bleed purple→white "Coming Soon" promo strip shown under the top bar. */
function ComingSoonBanner() {
  return (
    <div
      className="w-full"
      style={{
        background: 'linear-gradient(90deg, #7C2FF7 0%, #9151F8 54.81%, #FFFFFF 100%)',
      }}
    >
      <div className="flex min-h-[52px] items-center px-6 py-3 lg:px-10">
        <p className="text-[15px] leading-6 text-white sm:text-[16px]">
          <span className="font-semibold">Coming Soon</span>
          <span className="mx-2 text-white/60">|</span>
          Scan your company domain for leaked passwords, breached accounts &amp; employee
          exposure.{' '}
          <a href="#" className="underline decoration-white/80 underline-offset-2 hover:decoration-white">
            Join the waitlist
          </a>
        </p>
      </div>
    </div>
  )
}

function ChecklistItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-center gap-4">
      <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-brand-600">
        <Check className="size-3.5 text-white" strokeWidth={3} />
      </span>
      <span className="text-[16px] leading-6 text-muted">{children}</span>
    </li>
  )
}

export function ProPlanPage() {
  const [copied, setCopied] = useState(false)

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(REFERRAL_URL)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch {
      setCopied(false)
    }
  }

  return (
    <DashboardLayout
      nav={proPlanNav}
      activeKey="credits"
      title="Pro Plan"
      banner={<ComingSoonBanner />}
    >
      <div className="mx-auto w-full max-w-[1000px] space-y-10">
        {/* Referral hero card */}
        <Card padded={false} className="overflow-hidden p-8 lg:p-12">
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_minmax(0,0.85fr)]">
            <div>
              <h2 className="text-[30px] font-bold leading-9 tracking-[-0.01em] text-ink">
                Share Intercom and <span className="text-brand-600">earn $100</span>
              </h2>
              <p className="mt-5 max-w-[460px] text-[16px] leading-6 text-muted">
                Know a business that could benefit from Intercom? Share your unique referral link
                and when they sign up and stay subscribed for 2 months, you'll each get $100
                credited to your Intercom account.
              </p>

              <h3 className="mt-10 text-[24px] font-semibold leading-8 tracking-[-0.01em] text-ink">
                What they need to do:
              </h3>
              <ul className="mt-5 space-y-4">
                {CHECKLIST.map((item) => (
                  <ChecklistItem key={item}>{item}</ChecklistItem>
                ))}
              </ul>

              <a
                href="#"
                className="mt-8 inline-block text-[16px] font-medium text-ink underline underline-offset-2"
              >
                Referral terms and conditions.
              </a>
            </div>

            <div className="flex justify-center lg:justify-end">
              <img
                src="/brand/referral-illustration.svg"
                alt="Referral rewards illustration"
                className="w-full max-w-[420px]"
              />
            </div>
          </div>
        </Card>

        {/* Referral link card */}
        <Card padded={false} className="p-8 lg:px-10 lg:py-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-[16px] font-semibold leading-6 text-ink">Your referral link</p>
              <p className="mt-1 text-[14px] leading-5 text-muted">
                Use this link wherever you talk about Intercom.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Input
                readOnly
                value={REFERRAL_URL}
                aria-label="Your referral link"
                className="text-[15px] text-muted sm:w-[340px]"
                onFocus={(e) => e.currentTarget.select()}
              />
              <Button variant="primary" onClick={copyLink} className="shrink-0">
                {copied ? 'Copied!' : 'Copy link'}
              </Button>
            </div>
          </div>
        </Card>

        {/* More ways to share */}
        <div>
          <EyebrowLabel tone="muted" className="mb-4">
            More ways to share
          </EyebrowLabel>
          <Card padded={false} className="p-8 lg:p-10">
            <h3 className="text-[24px] font-semibold leading-8 tracking-[-0.01em] text-ink">
              Post to LinkedIn
            </h3>
            <p className="mt-2 text-[16px] leading-6 text-muted">
              Recommend Intercom to your network. Your referral link is included automatically.
            </p>
            <Button
              variant="secondary"
              size="sm"
              className="mt-6"
              leftIcon={<FaLinkedin className="size-5 text-[#0A66C2]" />}
            >
              Share on Linkedin
            </Button>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  )
}
