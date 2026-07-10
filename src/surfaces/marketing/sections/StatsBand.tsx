import { Fragment } from 'react'
import { Container } from '@/components/layout'
import { Divider, SectionHeader, StatCard } from '@/components/ui'
import { cn } from '@/lib/cn'

export interface StatItem {
  value: string
  caption: string
}

export interface StatsBandProps {
  title: string
  description: string
  stats: StatItem[]
  tone?: 'white' | 'band'
}

/** Centered heading + 4-up marketing stat row with vertical dividers. Used on white and gray bands. */
export function StatsBand({ title, description, stats, tone = 'white' }: StatsBandProps) {
  return (
    <section className={cn('py-20 sm:py-24', tone === 'band' ? 'bg-band' : 'bg-white')}>
      <Container>
        <SectionHeader title={title} description={description} className="mx-auto max-w-[720px]" />
        <div className="mt-12 grid grid-cols-2 gap-x-6 gap-y-10 sm:mt-16 md:flex md:items-stretch md:gap-0">
          {stats.map((s, i) => (
            <Fragment key={s.value + s.caption}>
              {i > 0 && (
                <Divider orientation="vertical" className="mx-8 hidden bg-line-strong md:block" />
              )}
              <StatCard variant="marketing" value={s.value} caption={s.caption} className="md:flex-1" />
            </Fragment>
          ))}
        </div>
      </Container>
    </section>
  )
}
