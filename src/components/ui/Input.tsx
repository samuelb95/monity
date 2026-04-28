import type { InputHTMLAttributes } from 'react'

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string
}

export function Input({ className = '', id, label, ...props }: InputProps) {
  const inputId = id ?? props.name

  return (
    <label className="block text-sm font-medium text-text-primary">
      {label ? <span className="mb-2 block">{label}</span> : null}
      <input
        className={[
          'w-full rounded-button border border-border bg-surface px-3 py-2.5 text-sm text-text-primary',
          'placeholder:text-text-secondary/70 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20',
          className,
        ].join(' ')}
        id={inputId}
        {...props}
      />
    </label>
  )
}
