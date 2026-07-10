import { type ReactNode, useState } from 'react'
import { ArrowUpDown } from 'lucide-react'
import { cn } from '@/lib/cn'

export interface Column<T> {
  key: string
  header: ReactNode
  render?: (row: T, index: number) => ReactNode
  align?: 'left' | 'right' | 'center'
  headerClassName?: string
  cellClassName?: string
  sortable?: boolean
}

export interface DataTableProps<T> {
  columns: Column<T>[]
  rows: T[]
  tone?: 'light' | 'dark'
  selectable?: boolean
  getRowKey?: (row: T, i: number) => string
  minWidth?: number
  className?: string
}

const alignCls = (a?: string) => (a === 'right' ? 'text-right' : a === 'center' ? 'text-center' : 'text-left')

export function DataTable<T>({
  columns,
  rows,
  tone = 'light',
  selectable,
  getRowKey,
  minWidth = 720,
  className,
}: DataTableProps<T>) {
  const [selected, setSelected] = useState<Set<string>>(new Set())
  const keyOf = (row: T, i: number) => (getRowKey ? getRowKey(row, i) : String(i))
  const allKeys = rows.map(keyOf)
  const allSelected = rows.length > 0 && selected.size === rows.length
  const someSelected = selected.size > 0 && !allSelected
  const dark = tone === 'dark'

  return (
    <div className={cn('w-full overflow-x-auto', className)}>
      <table className="w-full border-collapse text-left" style={{ minWidth }}>
        <thead>
          <tr className={cn(dark ? 'text-lav-2' : 'bg-band text-subtle')}>
            {selectable && (
              <th className={cn('w-10 px-4 py-3', !dark && 'rounded-l-lg')}>
                <input
                  type="checkbox"
                  aria-label="Select all"
                  className="size-4 accent-brand-600"
                  checked={allSelected}
                  ref={(el) => {
                    if (el) el.indeterminate = someSelected
                  }}
                  onChange={() => setSelected(allSelected ? new Set() : new Set(allKeys))}
                />
              </th>
            )}
            {columns.map((c, ci) => (
              <th
                key={c.key}
                className={cn(
                  'px-4 py-3 text-xs font-semibold uppercase tracking-[0.04em]',
                  alignCls(c.align),
                  !dark && ci === columns.length - 1 && !selectable && 'rounded-r-lg',
                  c.headerClassName,
                )}
              >
                <span className={cn('inline-flex items-center gap-1', c.align === 'right' && 'flex-row-reverse')}>
                  {c.header}
                  {c.sortable && <ArrowUpDown className="size-3 opacity-60" />}
                </span>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => {
            const k = keyOf(row, i)
            return (
              <tr key={k} className={cn('border-b', dark ? 'border-white/5' : 'border-hair')}>
                {selectable && (
                  <td className="px-4 py-4">
                    <input
                      type="checkbox"
                      aria-label="Select row"
                      className="size-4 accent-brand-600"
                      checked={selected.has(k)}
                      onChange={() =>
                        setSelected((prev) => {
                          const n = new Set(prev)
                          if (n.has(k)) n.delete(k)
                          else n.add(k)
                          return n
                        })
                      }
                    />
                  </td>
                )}
                {columns.map((c) => (
                  <td
                    key={c.key}
                    className={cn('px-4 py-4 text-sm', alignCls(c.align), dark ? 'text-lav-1' : 'text-ink-body', c.cellClassName)}
                  >
                    {c.render ? c.render(row, i) : (row as Record<string, ReactNode>)[c.key]}
                  </td>
                ))}
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
