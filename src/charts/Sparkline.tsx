import { useId } from 'react'
import { Area, AreaChart, ResponsiveContainer } from 'recharts'

/** Small area sparkline, no axes (hero-passwords exposure timeline). */
export function Sparkline({
  data,
  dataKey = 'value',
  color = '#FF5C5C',
  height = 64,
}: {
  data: Record<string, number | string>[]
  dataKey?: string
  color?: string
  height?: number
}) {
  const gid = useId().replace(/:/g, '')
  return (
    <ResponsiveContainer width="100%" height={height}>
      <AreaChart data={data} margin={{ top: 4, right: 0, bottom: 0, left: 0 }}>
        <defs>
          <linearGradient id={gid} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={color} stopOpacity={0.35} />
            <stop offset="100%" stopColor={color} stopOpacity={0} />
          </linearGradient>
        </defs>
        <Area type="monotone" dataKey={dataKey} stroke={color} strokeWidth={2} fill={`url(#${gid})`} dot={false} />
      </AreaChart>
    </ResponsiveContainer>
  )
}
