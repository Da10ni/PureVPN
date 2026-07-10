import { useState } from 'react'
import { Shield, Layers, Users, Link2, Settings } from 'lucide-react'
import { DashboardLayout } from '@/components/layout/DashboardLayout'
import { Tabs } from '@/components/ui/Tabs'
import { identityNav } from './nav'
import { EmployeeExposureTab } from './EmployeeExposureTab'
import { ThreatOverviewTab } from './ThreatOverviewTab'

const tabItems = [
  { key: 'threat', label: 'Threat overview', icon: <Shield className="size-4" /> },
  { key: 'assets', label: 'Monitored assets', icon: <Layers className="size-4" /> },
  { key: 'employee', label: 'Employee exposure', icon: <Users className="size-4" /> },
  { key: 'domain', label: 'Domain squatting', icon: <Link2 className="size-4" /> },
  { key: 'alerts', label: 'Alerts & settings', icon: <Settings className="size-4" /> },
]

export function IdentityProtectionPage() {
  const [tab, setTab] = useState('threat')
  return (
    <DashboardLayout
      nav={identityNav}
      activeKey="identity"
      title="Identity theft protection"
      teamName="Bending Spoons"
      showUpgrade
      notify
      tabs={<Tabs items={tabItems} active={tab} onChange={setTab} />}
    >
      {tab === 'threat' && <ThreatOverviewTab />}
      {tab === 'employee' && <EmployeeExposureTab />}
      {tab !== 'threat' && tab !== 'employee' && <div className="py-24 text-center text-muted">Coming soon</div>}
    </DashboardLayout>
  )
}
