import type { SelectHTMLAttributes } from 'react'

type SelectOption = {
  label: string
  value: string
}

type SelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
  label?: string
  options: SelectOption[]
}

export function Select({
  className = '',
  id,
  label,
  options,
  ...props
}: SelectProps) {
  const selectId = id ?? props.name

  return (
    <label className="block text-sm font-medium text-text-primary">
      {label ? <span className="mb-2 block">{label}</span> : null}
      <select
        className={[
          'w-full rounded-button border border-border bg-surface px-3 py-2.5 text-sm text-text-primary',
          'focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20',
          className,
        ].join(' ')}
        id={selectId}
        {...props}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </label>
  )
}
