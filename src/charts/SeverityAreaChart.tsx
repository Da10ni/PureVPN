import { useId } from 'react'
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import type { LineSeries } from './MultiLineChart'

/** Smooth severity area/stream chart with per-band fade-to-transparent gradients. */
export function SeverityAreaChart({
  data,
  series,
  xKey = 'x',
  height = 280,
  stacked = false,
}: {
  data: Record<string, number | string>[]
  series: LineSeries[]
  xKey?: string
  height?: number
  stacked?: boolean
}) {
  const gid = useId().replace(/:/g, '')
  return (
    <ResponsiveContainer width="100%" height={height}>
      <AreaChart data={data} margin={{ top: 8, right: 12, bottom: 0, left: -12 }}>
        <defs>
          {series.map((s) => (
            <linearGradient key={s.key} id={`${gid}-${s.key}`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={s.color} stopOpacity={0.55} />
              <stop offset="100%" stopColor={s.color} stopOpacity={0.03} />
            </linearGradient>
          ))}
        </defs>
        <CartesianGrid stroke="#EEECEC" vertical={false} />
        <XAxis dataKey={xKey} tickLine={false} axisLine={false} tick={{ fill: '#98A2B3', fontSize: 12 }} />
        <YAxis tickLine={false} axisLine={false} tick={{ fill: '#98A2B3', fontSize: 12 }} width={44} />
        <Tooltip contentStyle={{ borderRadius: 12, border: '1px solid #EEECEC', fontSize: 12 }} />
        {series.map((s) => (
          <Area
            key={s.key}
            type="monotone"
            dataKey={s.key}
            name={s.name}
            stroke={s.color}
            strokeWidth={2}
            fill={`url(#${gid}-${s.key})`}
            stackId={stacked ? '1' : undefined}
          />
        ))}
      </AreaChart>
    </ResponsiveContainer>
  )
}
