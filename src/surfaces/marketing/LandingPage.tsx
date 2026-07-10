import { MarketingLayout } from '@/components/layout'
import { HeroSwitcher } from '@/components/ui'
import { HeroExposed } from './heroes/HeroExposed'
import { HeroPasswords } from './heroes/HeroPasswords'
import { HeroBreached } from './heroes/HeroBreached'
import { StatsBand } from './sections/StatsBand'
import { FirewallSection } from './sections/FirewallSection'
import { LeakedLoginsSection } from './sections/LeakedLoginsSection'
import { FeatureDefenseSection } from './sections/FeatureDefenseSection'
import { HowItWorksSection } from './sections/HowItWorksSection'
import { FaqSection } from './sections/FaqSection'

export function LandingPage() {
  return (
    <MarketingLayout>
      <HeroSwitcher
        className="pb-4"
        options={[
          { key: 'exposed', label: "See what's exposed", node: <HeroExposed /> },
          { key: 'passwords', label: 'Dark web', node: <HeroPasswords /> },
          { key: 'breached', label: 'Already breached', node: <HeroBreached /> },
        ]}
      />

      <StatsBand
        tone="white"
        title="Your Company's Logins Are Already Moving Across the Dark Web"
        description="Infostealer malware, breach dumps and dark web marketplaces trade corporate credentials constantly — usually long before the company ever finds out."
        stats={[
          { value: '88%', caption: 'of web-app breaches involve stolen credentials' },
          { value: '30%', caption: 'of infostealer-infected devices are company-managed' },
          { value: '241', caption: 'days, on average, to even identify a breach' },
          { value: '$4.4M', caption: 'average cost of a single data breach' },
        ]}
      />

      <StatsBand
        tone="band"
        title="This is one real domain scan"
        description="Not a projection. Not an industry average. This is what a single free scan surfaced for one company — before they knew any of it."
        stats={[
          { value: '440', caption: 'leaked credential records tied to one company domain' },
          { value: '266', caption: 'corporate email and domain-account identities exposed' },
          { value: '10', caption: 'different infostealer malware families involved' },
          { value: '0', caption: 'of it was visible to their existing security tools' },
        ]}
      />

      <FirewallSection />
      <LeakedLoginsSection />
      <FeatureDefenseSection />
      <HowItWorksSection />
      <FaqSection />
    </MarketingLayout>
  )
}
