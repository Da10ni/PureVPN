import { ChevronDown, Search } from 'lucide-react'
import { Badge, Button, DataTable, Input, StatCard } from '@/components/ui'
import { type Column } from '@/components/ui'
import { type SeverityLevel } from '@/components/ui'
import { cn } from '@/lib/cn'

interface ExposureRow {
  name: string
  email: string
  source: string
  sourceType: string
  severity: SeverityLevel
  severityLabel: string
  status: string
  date: string
}

const rows: ExposureRow[] = [
  {
    name: 'Faheem A.',
    email: 'faheem@purevpn.com',
    source: 'RockYou2024',
    sourceType: 'Combo List',
    severity: 'medium',
    severityLabel: 'Medium',
    status: 'Open',
    date: 'May 15th, 2026',
  },
  {
    name: 'John Doe',
    email: 'john.doe@purevpn.com',
    source: 'SWVL Breach',
    sourceType: 'Combo List',
    severity: 'medium',
    severityLabel: 'Medium',
    status: 'Open',
    date: 'May 15th, 2026',
  },
  {
    name: 'Sarah Chen',
    email: 'sarah.chen@purevpn.com',
    source: 'SWVL Breach',
    sourceType: 'Exposed creds',
    severity: 'high',
    severityLabel: 'High',
    status: 'Open',
    date: 'May 15th, 2026',
  },
  {
    name: 'Bilal Naiyer',
    email: 'bilal.naiyer@purevpn.com',
    source: 'Indolj Breach',
    sourceType: 'Exposed creds',
    severity: 'high',
    severityLabel: 'High',
    status: 'Open',
    date: 'May 15th, 2026',
  },
  {
    name: 'Ayesha Khan',
    email: 'ayesha.khan@purevpn.com',
    source: 'Ticketmaster Breach',
    sourceType: 'Infostealer',
    severity: 'critical',
    severityLabel: 'Critical',
    status: 'Open',
    date: 'May 14th, 2026',
  },
  {
    name: 'Omar Farooq',
    email: 'omar.farooq@purevpn.com',
    source: 'LinkedIn Scrape',
    sourceType: 'Phished',
    severity: 'low',
    severityLabel: 'Low',
    status: 'Open',
    date: 'May 14th, 2026',
  },
]

const filters: { label: string; count: number }[] = [
  { label: 'All', count: 85 },
  { label: 'Combo lists', count: 10 },
  { label: 'Exposed creds', count: 5 },
  { label: 'Exposed cards', count: 5 },
  { label: 'Infostealer', count: 20 },
  { label: 'Phished', count: 10 },
  { label: 'Exfiltrated', count: 5 },
  { label: 'Unclassified', count: 30 },
]

const columns: Column<ExposureRow>[] = [
  {
    key: 'type',
    header: 'Type',
    cellClassName: 'py-4',
    render: (r) => (
      <div className="min-w-0">
        <div className="text-[15px] font-semibold text-ink">{r.name}</div>
        <div className="truncate text-[13px] text-muted max-w-[180px]">{r.email}</div>
      </div>
    ),
  },
  {
    key: 'source',
    header: 'Source',
    render: (r) => <span className="text-[15px] text-ink-body">{r.source}</span>,
  },
  {
    key: 'sourceType',
    header: 'Source type',
    render: (r) => (
      <Badge variant="neutral" className="rounded-[8px] bg-inset px-2.5 py-1.5 text-[13px] font-medium text-ink">
        {r.sourceType}
      </Badge>
    ),
  },
  {
    key: 'severity',
    header: 'Severity',
    render: (r) => (
      <Badge variant="severity" level={r.severity} className="px-2.5 py-1.5 text-[13px]">
        {r.severityLabel}
      </Badge>
    ),
  },
  {
    key: 'status',
    header: 'Status',
    render: (r) => (
      <Badge variant="status" className="px-2.5 py-1.5 text-[13px]">
        {r.status}
        <ChevronDown className="size-3.5" aria-hidden />
      </Badge>
    ),
  },
  {
    key: 'date',
    header: 'Date added',
    sortable: true,
    render: (r) => <span className="whitespace-nowrap text-[15px] text-ink-body">{r.date}</span>,
  },
]

export function EmployeeExposureTab() {
  return (
    <div className="space-y-6">
      {/* Page header */}
      <header className="space-y-1">
        <h3 className="text-[24px] font-bold leading-[32px] tracking-[-0.01em] text-ink">Employee exposure</h3>
        <p className="text-[15px] text-muted">
          Details on employee exposure including identified risks and current mitigation measures.
        </p>
      </header>

      {/* Stat cards */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4 xl:gap-6">
        <StatCard variant="dashboard" info label="Total records" value="256" />
        <StatCard variant="dashboard" info label="Employee records" value="182" />
        <StatCard variant="dashboard" info label="Distinct emails" value="150" />
        <StatCard variant="dashboard" info label="Infected machines" value="32" accent="red" />
      </div>

      {/* Search */}
      <Input
        variant="search"
        leftIcon={<Search className="size-5" />}
        placeholder="Search records"
        aria-label="Search records"
        className="text-[15px]"
      />

      {/* Filter pills + Filters dropdown */}
      <div className="flex items-center gap-3">
        <div className="-mx-1 flex-1 overflow-x-auto px-1">
          <div className="flex w-max items-center gap-2">
            {filters.map((f, i) => (
              <Badge
                key={f.label}
                variant="filter"
                active={i === 0}
                count={f.count}
                className={cn(
                  'shrink-0 px-3.5 py-2 text-[13px]',
                  i === 0 ? 'border-brand/30' : 'text-ink',
                )}
              >
                {f.label}
              </Badge>
            ))}
          </div>
        </div>
        <Button
          variant="secondary"
          size="sm"
          rightIcon={<ChevronDown className="size-4" />}
          className="h-[38px] shrink-0 rounded-full font-medium text-ink-body"
        >
          Filters
        </Button>
      </div>

      {/* Data table */}
      <DataTable<ExposureRow>
        columns={columns}
        rows={rows}
        selectable
        minWidth={900}
        getRowKey={(r) => r.email}
      />
    </div>
  )
}
