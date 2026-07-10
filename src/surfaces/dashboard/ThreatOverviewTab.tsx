import { type ReactNode } from 'react'
import {
  Card,
  Badge,
  type SeverityLevel,
} from '@/components/ui'
import {
  ChartCard,
  LegendRow,
  MultiLineChart,
  SeverityAreaChart,
  VBarChart,
  StackedSegmentBar,
  type LineSeries,
  type VBarDatum,
} from '@/charts'
import { cn } from '@/lib/cn'

/* ------------------------------------------------------------------ *
 * Tokens / palette
 * ------------------------------------------------------------------ */
const SEV = {
  low: '#7DE3B0',
  medium: '#FFE300',
  high: '#FF5C47',
  critical: '#FF5C5C',
} as const

const sevLegend = [
  { label: 'Low', color: SEV.low },
  { label: 'Medium', color: SEV.medium },
  { label: 'High', color: SEV.high },
  { label: 'Critical', color: SEV.critical },
]

/* ------------------------------------------------------------------ *
 * Section header (bold title + muted one-liner)
 * ------------------------------------------------------------------ */
function SectionHead({ title, description }: { title: string; description: string }) {
  return (
    <div className="mb-4">
      <h3 className="text-[20px] font-bold leading-7 tracking-[-0.01em] text-ink">{title}</h3>
      <p className="mt-1 text-sm text-muted">{description}</p>
    </div>
  )
}

/* ------------------------------------------------------------------ *
 * Days-unresolved stat block
 * ------------------------------------------------------------------ */
function StatBlock({
  days,
  label,
  labelClass,
  className,
}: {
  days: string
  label: string
  labelClass: string
  className?: string
}) {
  return (
    <div className={cn('py-3', className)}>
      <div className="text-[22px] font-bold leading-tight text-ink">{days}</div>
      <div className={cn('mt-0.5 text-xs font-medium', labelClass)}>{label}</div>
    </div>
  )
}

/* ------------------------------------------------------------------ *
 * List row: title + muted subtext + right-aligned severity badge
 * ------------------------------------------------------------------ */
function ListRow({
  title,
  subtext,
  level,
  first,
}: {
  title: string
  subtext: string
  level: SeverityLevel
  first?: boolean
}) {
  const label = level.charAt(0).toUpperCase() + level.slice(1)
  return (
    <div className={cn('flex items-center justify-between gap-3 py-3.5', !first && 'border-t border-hair')}>
      <div className="min-w-0">
        <div className="truncate text-sm font-semibold text-ink">{title}</div>
        <div className="mt-0.5 truncate text-xs text-muted">{subtext}</div>
      </div>
      <Badge variant="severity" level={level} className="shrink-0">
        {label}
      </Badge>
    </div>
  )
}

/* ------------------------------------------------------------------ *
 * Axis-framed vertical stacked bar (Domain squatting · Unresolved Events)
 * ------------------------------------------------------------------ */
function FramedSegmentBar({ segments }: { segments: { label: string; value: number; color: string }[] }) {
  const yTicks = [1000, 750, 500, 250, 0]
  const xTicks = [0, 100, 200, 300, 400, 500, 600, 700, 800, 900]
  const total = segments.reduce((s, x) => s + x.value, 0)
  // total maps onto a 0-1000 axis → fraction of the plot height the bar fills
  const fillPct = Math.min(total / 1000, 1) * 100
  return (
    <div className="flex">
      <div className="flex w-10 flex-col justify-between py-1 text-right text-[11px] text-[#8C8C8C]">
        {yTicks.map((t) => (
          <span key={t} className="leading-none">
            {t}
          </span>
        ))}
      </div>
      <div className="min-w-0 flex-1">
        <div className="relative h-[240px] border-l border-hair">
          {/* horizontal gridlines */}
          {yTicks.map((t, i) => (
            <div
              key={t}
              className="absolute inset-x-0 border-t border-hair"
              style={{ top: `${(i / (yTicks.length - 1)) * 100}%` }}
            />
          ))}
          {/* the single stacked bar, anchored to baseline */}
          <div className="absolute inset-x-4 bottom-0 flex justify-center" style={{ height: `${fillPct}%` }}>
            <StackedSegmentBar segments={segments} orientation="vertical" className="w-full max-w-[720px]" />
          </div>
        </div>
        <div className="mt-2 flex justify-between px-1 text-[11px] text-[#8C8C8C]">
          {xTicks.map((t) => (
            <span key={t}>{t}</span>
          ))}
        </div>
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ *
 * Mock data
 * ------------------------------------------------------------------ */
const lineSeries: LineSeries[] = [
  { key: 'low', name: 'Low', color: SEV.low },
  { key: 'medium', name: 'Medium', color: SEV.medium },
  { key: 'high', name: 'High', color: SEV.high },
  { key: 'critical', name: 'Critical', color: SEV.critical },
]

const unresolvedComments = [
  { x: 0, low: 380, medium: 560, high: 210, critical: 300 },
  { x: 100, low: 520, medium: 800, high: 470, critical: 470 },
  { x: 200, low: 460, medium: 260, high: 520, critical: 420 },
  { x: 300, low: 300, medium: 470, high: 620, critical: 340 },
  { x: 400, low: 720, medium: 780, high: 760, critical: 560 },
  { x: 500, low: 560, medium: 600, high: 470, critical: 560 },
  { x: 600, low: 470, medium: 10, high: 420, critical: 300 },
  { x: 700, low: 520, medium: 240, high: 480, critical: 800 },
  { x: 800, low: 360, medium: 600, high: 300, critical: 210 },
  { x: 850, low: 130, medium: 120, high: 120, critical: 130 },
  { x: 900, low: 90, medium: 210, high: 560, critical: 540 },
]

// Overlapping severity bands: green dominant left → coral/red dominant right
const eventsBySeverity = [
  { x: 0, low: 560, medium: 120, high: 60, critical: 40 },
  { x: 80, low: 470, medium: 180, high: 120, critical: 60 },
  { x: 160, low: 320, medium: 240, high: 150, critical: 90 },
  { x: 240, low: 360, medium: 210, high: 180, critical: 120 },
  { x: 320, low: 300, medium: 620, high: 220, critical: 150 },
  { x: 400, low: 280, medium: 470, high: 620, critical: 210 },
  { x: 480, low: 300, medium: 360, high: 470, critical: 300 },
  { x: 560, low: 260, medium: 320, high: 300, critical: 470 },
  { x: 640, low: 240, medium: 280, high: 300, critical: 560 },
  { x: 720, low: 300, medium: 260, high: 470, critical: 680 },
  { x: 800, low: 200, medium: 180, high: 620, critical: 720 },
  { x: 880, low: 160, medium: 120, high: 300, critical: 780 },
  { x: 900, low: 120, medium: 90, high: 210, critical: 820 },
]

const leakedEvents: VBarDatum[] = [
  { label: 'Mon', value: 0 },
  { label: 'Tue', value: 0 },
  { label: 'Wed', value: 55 }, // coral (default hot gradient)
  { label: 'Thr', value: 44, color: '#FFB454' }, // amber
  { label: 'Fri', value: 0, color: '#FFB454' },
  { label: 'Sat', value: 19, color: '#8145FF' }, // purple
  { label: 'Sun', value: 0, color: '#8145FF' },
]

const leakedRows: { title: string; subtext: string; level: SeverityLevel }[] = [
  { title: 'Faheem A', subtext: 'RockYou20…', level: 'low' },
  { title: 'Bilal Naiyer', subtext: 'SWVL Brea…', level: 'high' },
  { title: 'Pir Ahmed', subtext: 'SWVL Brea…', level: 'critical' },
  { title: 'Sahib', subtext: 'Adsqua…', level: 'critical' },
]

const domainRows: { title: string; subtext: string; level: SeverityLevel }[] = [
  { title: 'purevpm.com', subtext: '91% similari…', level: 'critical' },
  { title: 'purevpn.us', subtext: '80% similari…', level: 'critical' },
  { title: 'purevpnn.io', subtext: '75% similari…', level: 'high' },
  { title: 'pvreupn.com', subtext: '75% similari…', level: 'medium' },
]

/* ------------------------------------------------------------------ *
 * Screen
 * ------------------------------------------------------------------ */
export function ThreatOverviewTab() {
  return (
    <div className="flex flex-col gap-10">
      {/* ---------------------------------------------------------- *
       * 1 · General Summary
       * ---------------------------------------------------------- */}
      <section>
        <SectionHead
          title="General Summary"
          description="A high-level overview of the security assessment findings, overall risk posture, and key recommendations."
        />
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,1.9fr)_minmax(0,1fr)]">
          <ChartCard title="Unresolved comments" info bodyClassName="mt-3">
            <LegendRow items={sevLegend} className="mb-4" />
            <div className="min-w-0 overflow-x-auto">
              <div className="min-w-[520px]">
                <MultiLineChart data={unresolvedComments} series={lineSeries} height={260} />
              </div>
            </div>
          </ChartCard>

          <Card padded={false} className="p-5">
            <div className="flex items-center gap-1.5">
              <h3 className="text-[15px] font-semibold text-ink">Days unresolved</h3>
              <InfoDot />
            </div>
            <LegendRow
              className="mt-3"
              items={[
                { label: 'Low', color: '#5CC8FF' },
                { label: 'Medium', color: SEV.medium },
                { label: 'High', color: SEV.high },
                { label: 'Critical', color: SEV.critical },
              ]}
            />
            <div className="mt-4 grid grid-cols-2">
              <StatBlock days="8 Days" label="Critical Events" labelClass="text-[#FF5C5C]" className="pr-4" />
              <StatBlock
                days="6 Days"
                label="Low Events"
                labelClass="text-[#00BA00]"
                className="border-l border-hair pl-4"
              />
              <StatBlock
                days="6 Days"
                label="High Events"
                labelClass="text-ink-body"
                className="col-span-2 border-t border-hair"
              />
              <StatBlock
                days="3 Days"
                label="Medium Events"
                labelClass="text-[#B7883B]"
                className="col-span-2 border-t border-hair"
              />
            </div>
          </Card>
        </div>
      </section>

      {/* ---------------------------------------------------------- *
       * 2 · Events by severity (full width)
       * ---------------------------------------------------------- */}
      <section>
        <ChartCard title="Events by severity" info bodyClassName="mt-3">
          <LegendRow items={sevLegend} className="mb-4" />
          <div className="min-w-0 overflow-x-auto">
            <div className="min-w-[640px]">
              <SeverityAreaChart data={eventsBySeverity} series={lineSeries} height={300} />
            </div>
          </div>
        </ChartCard>
      </section>

      {/* ---------------------------------------------------------- *
       * 3 · Leaked Data
       * ---------------------------------------------------------- */}
      <section>
        <SectionHead
          title="Leaked Data"
          description="Details on exposed credentials, sensitive files, and other data found leaked across public sources."
        />
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <ChartCard title="Total amount of events" info bodyClassName="mt-3">
            <LegendRow
              className="mb-4"
              items={[
                { label: 'Combo List', color: '#FFB454' },
                { label: 'Exposed', color: '#8145FF' },
                { label: 'Info Stealer', color: '#FF5C5C' },
              ]}
            />
            <div className="min-w-0 overflow-x-auto">
              <div className="min-w-[360px]">
                <VBarChart data={leakedEvents} height={260} />
              </div>
            </div>
          </ChartCard>

          <ChartCard title="Leaked data top unresolved events" info bodyClassName="mt-3">
            <LegendRow items={sevLegend} className="mb-2" />
            <div>
              {leakedRows.map((r, i) => (
                <ListRow key={r.title} {...r} first={i === 0} />
              ))}
            </div>
          </ChartCard>
        </div>
      </section>

      {/* ---------------------------------------------------------- *
       * 4 · Domain Squatting
       * ---------------------------------------------------------- */}
      <section>
        <SectionHead
          title="Domain Squatting"
          description="Details on lookalike domains registered by third parties that may be used for phishing or brand impersonation."
        />
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <ChartCard title="Unresolved Events" info bodyClassName="mt-3">
            <LegendRow
              className="mb-4"
              items={[
                { label: 'Combo List', color: '#FFE300' },
                { label: 'Exposed Credentials', color: '#FFB454' },
                { label: 'Infostealers', color: '#FF5C5C' },
              ]}
            />
            <div className="min-w-0 overflow-x-auto">
              <div className="min-w-[360px]">
                <FramedSegmentBar
                  segments={[
                    { label: 'Infostealers', value: 300, color: '#FF5C5C' },
                    { label: 'Exposed Credentials', value: 250, color: '#FFB454' },
                    { label: 'Combo List', value: 200, color: '#FFE300' },
                  ]}
                />
              </div>
            </div>
          </ChartCard>

          <ChartCard title="Leaked data top unresolved rvents" info bodyClassName="mt-3">
            <LegendRow items={sevLegend} className="mb-2" />
            <div>
              {domainRows.map((r, i) => (
                <ListRow key={r.title} {...r} first={i === 0} />
              ))}
            </div>
          </ChartCard>
        </div>
      </section>
    </div>
  )
}

/* small (i) affordance matching ChartCard's info dot */
function InfoDot(): ReactNode {
  return (
    <span className="grid size-3.5 place-items-center rounded-full text-disabled" aria-hidden>
      <svg viewBox="0 0 24 24" fill="none" className="size-3.5" stroke="currentColor" strokeWidth={2}>
        <circle cx="12" cy="12" r="10" />
        <path strokeLinecap="round" d="M12 16v-4M12 8h.01" />
      </svg>
    </span>
  )
}
