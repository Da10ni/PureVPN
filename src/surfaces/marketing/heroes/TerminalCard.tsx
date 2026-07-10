import { ChevronRight } from 'lucide-react'
import { Badge } from '@/components/ui'
import { Sparkline } from '@/charts'
import { cn } from '@/lib/cn'

/** Upward-jagged exposure timeline (2020 → 2026), single red series. */
const timeline = [
  { year: '2020', value: 12 },
  { year: '2021', value: 18 },
  { year: '2022', value: 15 },
  { year: '2023', value: 28 },
  { year: '2024', value: 24 },
  { year: '2025', value: 40 },
  { year: '2026', value: 52 },
]

interface StatTile {
  value: string
  label: string
  color: string
}

const stats: StatTile[] = [
  { value: '266', label: 'Corporate identities leaked', color: '#FF5C5C' },
  { value: '105', label: 'Systems & apps exposed', color: '#FFB454' },
  { value: '10', label: 'Malware families', color: '#5CC8FF' },
]

/** macOS-window-style dark terminal card showing a mock dark-web exposure scan. */
export function TerminalCard({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        'w-full overflow-hidden rounded-2xl bg-[#0b0e14] font-mono text-[13px] leading-none ring-1 ring-white/10 shadow-[0_24px_70px_-20px_rgba(0,0,0,0.7)]',
        className,
      )}
    >
      {/* Title bar */}
      <div className="flex items-center gap-3 border-b border-white/10 px-4 py-3.5">
        <div className="flex items-center gap-2" aria-hidden>
          <span className="size-3 rounded-full bg-[#FF5C5C]" />
          <span className="size-3 rounded-full bg-[#FFC668]" />
          <span className="size-3 rounded-full bg-[#7DE3B0]" />
        </div>
        <span className="truncate text-neutral-450">exposure_scan — yourcompany.com</span>
      </div>

      {/* Body */}
      <div className="p-5 sm:p-6">
        {/* Domain header row */}
        <div className="flex items-center justify-between gap-3">
          <div className="flex min-w-0 items-center gap-1.5">
            <ChevronRight className="size-4 shrink-0 text-neutral-700" aria-hidden />
            <span className="truncate text-[15px] font-medium text-white">yourcompany.com</span>
          </div>
          <Badge
            variant="danger-outline"
            dot
            className="shrink-0 bg-danger-soft/10 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.06em]"
          >
            COMPROMISED
          </Badge>
        </div>

        {/* Stat tiles */}
        <div className="mt-5 grid grid-cols-3 gap-2.5 sm:gap-3">
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-[10px] border border-white/[0.07] bg-white/[0.02] p-3 sm:p-4"
            >
              <div className="text-[26px] font-extrabold leading-none sm:text-[30px]" style={{ color: s.color }}>
                {s.value}
              </div>
              <p className="mt-2 text-[11px] font-medium leading-[1.35] text-neutral-500 sm:text-[12px]">
                {s.label}
              </p>
            </div>
          ))}
        </div>

        {/* Exposure timeline chart */}
        <div className="mt-4 rounded-[10px] border border-white/[0.06] bg-black/30 p-4">
          <div className="flex items-center justify-between text-[12px] text-neutral-500">
            <span>exposure timeline</span>
            <span>2020 → 2026</span>
          </div>
          <div className="mt-3">
            <Sparkline data={timeline} color="#FF5C5C" height={64} />
          </div>
        </div>

        {/* Credential result row */}
        <div className="mt-5 flex items-center gap-2 text-[12px] sm:text-[13px]">
          <span className="truncate text-info-soft">c**********2@yourcompany.com</span>
          <ChevronRight className="size-3.5 shrink-0 text-neutral-700" aria-hidden />
          <span className="truncate text-neutral-450">login.microsoftonline.com</span>
          <span className="ml-auto shrink-0 rounded-[6px] bg-danger-soft/15 px-1.5 py-0.5 text-[11px] text-danger-soft">
            meta
          </span>
        </div>

        {/* Caption */}
        <p className="mt-4 text-center text-[12px] italic text-neutral-600 sm:text-[13px]">
          Figures shown are from an anonymized real scan.
        </p>
      </div>
    </div>
  )
}
