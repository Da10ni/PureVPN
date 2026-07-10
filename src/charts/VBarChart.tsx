import { useId } from 'react'
import { Bar, BarChart, Cell, ResponsiveContainer, XAxis, YAxis } from 'recharts'

export interface VBarDatum {
  label: string
  value: number
  color?: string
}

/** Vertical bars with y-axis ticks, rounded tops, per-bar gradient/solid fill. */
export function VBarChart({ data, height = 240 }: { data: VBarDatum[]; height?: number }) {
  const gid = useId().replace(/:/g, '')
  return (
    <ResponsiveContainer width="100%" height={height}>
      <BarChart data={data} margin={{ top: 8, right: 8, bottom: 0, left: -12 }}>
        <defs>
          <linearGradient id={`${gid}-hot`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#FF928E" />
            <stop offset="100%" stopColor="#FFB454" />
          </linearGradient>
        </defs>
        <XAxis dataKey="label" tickLine={false} axisLine={false} tick={{ fill: '#98A2B3', fontSize: 12 }} />
        <YAxis tickLine={false} axisLine={false} tick={{ fill: '#98A2B3', fontSize: 12 }} width={44} />
        <Bar dataKey="value" radius={[6, 6, 0, 0]} maxBarSize={40}>
          {data.map((d, i) => (
            <Cell key={i} fill={d.color ?? `url(#${gid}-hot)`} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  )
}
