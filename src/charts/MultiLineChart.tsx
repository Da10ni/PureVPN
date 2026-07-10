import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

export interface LineSeries {
  key: string
  color: string
  name: string
}

export function MultiLineChart({
  data,
  series,
  xKey = 'x',
  height = 260,
}: {
  data: Record<string, number | string>[]
  series: LineSeries[]
  xKey?: string
  height?: number
}) {
  return (
    <ResponsiveContainer width="100%" height={height}>
      <LineChart data={data} margin={{ top: 8, right: 12, bottom: 0, left: -12 }}>
        <CartesianGrid stroke="#EEECEC" vertical={false} />
        <XAxis dataKey={xKey} tickLine={false} axisLine={false} tick={{ fill: '#98A2B3', fontSize: 12 }} />
        <YAxis tickLine={false} axisLine={false} tick={{ fill: '#98A2B3', fontSize: 12 }} width={44} />
        <Tooltip
          cursor={{ stroke: '#D9D9D9' }}
          contentStyle={{ borderRadius: 12, border: '1px solid #EEECEC', fontSize: 12, boxShadow: '0 8px 24px rgba(16,24,40,0.08)' }}
        />
        {series.map((s) => (
          <Line key={s.key} type="monotone" dataKey={s.key} name={s.name} stroke={s.color} strokeWidth={2} dot={false} activeDot={{ r: 4 }} />
        ))}
      </LineChart>
    </ResponsiveContainer>
  )
}
