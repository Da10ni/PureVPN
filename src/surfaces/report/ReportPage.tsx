import { type ReactNode } from 'react'
import { Badge, EyebrowLabel, StatCard, DataTable, type Column } from '@/components/ui'
import { ChartCard, HBarChart } from '@/charts'
import { cn } from '@/lib/cn'
import { MetaBar } from './MetaBar'
import { CalloutBanner } from './CalloutBanner'

/* ----------------------------------------------------------------- */
/*  Mock data                                                         */
/* ----------------------------------------------------------------- */

const infectionData = [
  { label: 'Historical / Public Leak', value: 133 },
  { label: 'Raccoon', value: 94 },
  { label: 'Meta', value: 54 },
  { label: 'Vidar', value: 41 },
  { label: 'Generic', value: 38 },
  { label: 'Lumma', value: 36 },
  { label: 'Stealc', value: 24 },
  { label: 'Redline', value: 9 },
  { label: 'Risepro', value: 6 },
  { label: 'Silencer', value: 3 },
  { label: 'Taurus', value: 2 },
]

const applicationData = [
  { label: 'UntrackedURL', value: 133 },
  { label: 'Www E-Sanalmagaza Com', value: 94 },
  { label: 'ikwbad9071324986fghj…', value: 54 },
  { label: 'Portal', value: 41 },
  { label: 'Jira', value: 38 },
  { label: 'ADFS', value: 36 },
  { label: 'Login.Microsoftonline.Com', value: 24 },
  { label: 'Asa.Eczacibasi.Com.Tr', value: 9 },
  { label: 'Casd7&4923d579i wqh…', value: 6 },
  { label: 'EBIFlow', value: 3 },
  { label: 'iloyj180520f6Mfghjklz…', value: 2 },
]

interface ServiceLink {
  href: string
  text: string
}

interface EmailRow {
  email: string
  application: string
  service: ServiceLink | null
  password: string
}

const emailRows: EmailRow[] = [
  {
    email: 'f********r@destek.eczacibasi.com.tr',
    application: 'Proxy',
    service: { href: 'http://proxy2.eczacibasi.com.tr:8080/', text: 'http://proxy2.eczacibasi.com.tr:8080/' },
    password: 'F******6',
  },
  {
    email: 'k*******n@eczacibasi.com.tr',
    application: 'Untracked URL',
    service: null,
    password: 'd******7',
  },
  {
    email: 'k***********i@eczacibasi.com.tr',
    application: 'Untracked URL',
    service: null,
    password: 'k*****n',
  },
  {
    email: 'f********r@destek.eczacibasi.com.tr',
    application: 'www.e-sanalmagaza.com',
    service: {
      href: 'https://www.e-sanalmagaza.com/pages/login.aspx',
      text: 'https://www.e-sanalmagaza.com/pages/login.aspx',
    },
    password: 'j***Q',
  },
  {
    email: 'a*******c@eczacibasi.com.tr',
    application: 'Jira',
    service: { href: 'https://jira.eczacibasi.com.tr/login', text: 'https://jira.eczacibasi.com.tr/login' },
    password: 'A*****9',
  },
]

interface UsernameRow {
  username: string
  type: string
  application: ServiceLink | string
  service: string
}

const usernameRows: UsernameRow[] = [
  {
    username: 'c********m',
    type: 'Username',
    application: { href: '#', text: 'ikwbad9071324986fghjklzcvbnm…' },
    service: 'F******6',
  },
  { username: 'k*******n@eczacibasi.com.tr', type: 'Untracked URL', application: '—', service: 'd******7' },
  { username: 'k***********i@eczacibasi.com.tr', type: 'Untracked URL', application: '—', service: 'k*****n' },
  {
    username: 'f********r@destek.eczacibasi.com.tr',
    type: 'www.e-sanalmagaza.com',
    application: {
      href: 'https://www.e-sanalmagaza.com/pages/login.aspx',
      text: 'https://www.e-sanalmagaza.com/pages/login.aspx',
    },
    service: 'j***Q',
  },
]

/* ----------------------------------------------------------------- */
/*  Cell helpers                                                      */
/* ----------------------------------------------------------------- */

const Masked = ({ children }: { children: ReactNode }) => <span className="text-[#B4B4B4]">{children}</span>

const LinkCell = ({ href, text }: ServiceLink) => (
  <a href={href} target="_blank" rel="noreferrer" className="break-all text-info-soft transition-colors hover:text-white">
    {text}
  </a>
)

const Dash = () => (
  <span className="text-white/30" aria-hidden>
    —
  </span>
)

const isLink = (v: ServiceLink | string): v is ServiceLink => typeof v === 'object' && v !== null

/* ----------------------------------------------------------------- */
/*  Table column defs                                                 */
/* ----------------------------------------------------------------- */

const emailColumns: Column<EmailRow>[] = [
  { key: 'email', header: 'Email', render: (r) => <Masked>{r.email}</Masked>, cellClassName: 'break-all' },
  { key: 'application', header: 'Application', render: (r) => <span className="text-white">{r.application}</span> },
  {
    key: 'service',
    header: 'Service / URL',
    render: (r) => (r.service ? <LinkCell {...r.service} /> : <Dash />),
  },
  { key: 'password', header: 'Password', align: 'right', render: (r) => <Masked>{r.password}</Masked> },
]

const usernameColumns: Column<UsernameRow>[] = [
  { key: 'username', header: 'Username', render: (r) => <Masked>{r.username}</Masked>, cellClassName: 'break-all' },
  { key: 'type', header: 'Type', render: (r) => <span className="text-white">{r.type}</span> },
  {
    key: 'application',
    header: 'Application',
    render: (r) =>
      isLink(r.application) ? <LinkCell {...r.application} /> : r.application === '—' ? <Dash /> : <span className="text-white">{r.application}</span>,
  },
  { key: 'service', header: 'Service / URL', align: 'right', render: (r) => <Masked>{r.service}</Masked> },
]

/* ----------------------------------------------------------------- */
/*  Co-located primitives                                             */
/* ----------------------------------------------------------------- */

function SectionTitle({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <h2 className={cn('text-[24px] font-bold leading-8 tracking-[-0.01em] text-white sm:text-[26px]', className)}>
      {children}
    </h2>
  )
}

function TableCard({ children }: { children: ReactNode }) {
  return <div className="overflow-hidden rounded-[12px] border border-white/10 bg-panel p-2 sm:p-3">{children}</div>
}

/* ----------------------------------------------------------------- */
/*  Page                                                              */
/* ----------------------------------------------------------------- */

export function ReportPage() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-report-bg">
      {/* top purple glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[240px]"
        style={{
          background:
            'radial-gradient(120% 100% at 30% -20%, rgba(124,48,247,0.55) 0%, rgba(46,14,63,0.35) 35%, rgba(14,10,44,0) 70%)',
        }}
      />

      <div className="relative mx-auto max-w-[1140px] px-6 pb-28 pt-14 sm:pt-20">
        {/* 1. Confidential badge */}
        <Badge
          variant="confidential"
          className="rounded-[6px] border border-danger/70 bg-danger-bg-dark px-3 py-1.5 text-[11px] tracking-[0.06em] text-danger-soft"
        >
          Confidential — Internal Security Use Only
        </Badge>

        {/* 2. Kicker + title + intro */}
        <div className="mt-8">
          <EyebrowLabel tone="red">Dark Web Exposure Assessment</EyebrowLabel>
          <h1 className="mt-3 text-[28px] font-bold leading-[1.15] tracking-[-0.02em] text-white sm:text-[32px]">
            eczacibasi.com.tr — Credential Exposure Report
          </h1>
          <p className="mt-4 max-w-[820px] text-[13px] leading-[1.55] text-[#808080]">
            Infostealer-malware and breach/public-leak findings sourced from PureVPN data for eczacibasi.com.tr. Values
            are normalized only where directly supported by the supplied JSON; passwords are masked throughout this
            document.
          </p>
        </div>

        {/* 3. Meta strip */}
        <MetaBar
          className="mt-7"
          items={[
            { label: 'Report generated', value: '03 July 2026' },
            { label: 'Records analyzed', value: '440' },
            { label: 'Exposure window', value: '2020-10-03 → 2026-02-17' },
            { label: 'Password handling', value: 'masked throughout this document' },
          ]}
        />

        {/* 4. Executive Summary */}
        <section className="mt-14">
          <SectionTitle>Executive Summary</SectionTitle>
          <p className="mt-3 max-w-[820px] text-[13px] leading-[1.55] text-[#808080]">
            The dataset contains credential exposure records associated with eczacibasi.com.tr hostnames, usernames,
            domain-style accounts, and valid email addresses. The counts below are computed directly from the uploaded
            JSON/SSE records.
          </p>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <StatCard variant="report" accent="red" value="155" label="Unique corporate email identities" />
            <StatCard variant="report" accent="orange" value="111" label="Unique username / domain identities" />
            <StatCard variant="report" accent="blue" value="105" label="Applications / host labels observed" />
            <StatCard variant="report" accent="white" value="440" label="Total credential records" />
          </div>
        </section>

        {/* 5. Highest priority callout */}
        <CalloutBanner lead="Highest priority:" className="mt-6">
          review records tied to valid corporate emails, Windows/domain-style accounts, administrator usernames,
          VPN/ADFS/SAP/Jira/Confluence records, and any passwords reused across multiple URLs. These findings are based
          only on fields present in the provided JSON.
        </CalloutBanner>

        {/* 6. Charts region */}
        <section className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div>
            <SectionTitle>Exposure by Infection Vector / Feed Source</SectionTitle>
            <p className="mt-3 text-[13px] leading-[1.55] text-[#808080]">
              The dataset contains credential exposure records associated with eczacibasi.com.tr hostnames, usernames,
              domain-style accounts, and valid email addresses. The counts below are computed directly from the uploaded
              JSON/SSE records.
            </p>
            <ChartCard title="Infection Vector / Feed Source" tone="dark" className="mt-5 rounded-[10px]">
              <HBarChart data={infectionData} variant="infection" tone="dark" />
            </ChartCard>
          </div>
          <div>
            <SectionTitle>Exposure by Application / Host Surface</SectionTitle>
            <p className="mt-3 text-[13px] leading-[1.55] text-[#808080]">
              Application names are only assigned where the hostname or path clearly identifies the application.
              Otherwise the hostname is used as the display label.
            </p>
            <ChartCard title="Application / Host Surface" tone="dark" className="mt-5 rounded-[10px]">
              <HBarChart data={applicationData} variant="application" tone="dark" />
            </ChartCard>
          </div>
        </section>

        {/* 7. Corporate Email Credentials table */}
        <section className="mt-14">
          <SectionTitle>Critical: Corporate Email Credentials</SectionTitle>
          <p className="mb-6 mt-3 text-[13px] leading-[1.55] text-[#808080]">
            Valid email addresses ending in eczacibasi.com.tr or a subdomain of it. Passwords are masked.
          </p>
          <TableCard>
            <DataTable tone="dark" columns={emailColumns} rows={emailRows} minWidth={760} getRowKey={(_, i) => `email-${i}`} />
          </TableCard>
        </section>

        {/* 8. Corporate Usernames & Domain Accounts table */}
        <section className="mt-14">
          <SectionTitle>Corporate Usernames &amp; Domain Accounts</SectionTitle>
          <p className="mb-6 mt-3 text-[13px] leading-[1.55] text-[#808080]">
            Values that are not valid email addresses are shown as usernames. This includes domain-style accounts such as
            DOMAIN\user, local usernames, and admin-style usernames when present in the source data.
          </p>
          <TableCard>
            <DataTable tone="dark" columns={usernameColumns} rows={usernameRows} minWidth={760} getRowKey={(_, i) => `user-${i}`} />
          </TableCard>
        </section>
      </div>
    </div>
  )
}
