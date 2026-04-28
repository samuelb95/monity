import type { ButtonHTMLAttributes, ReactNode } from 'react'

type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'ghost'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode
  variant?: ButtonVariant
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'bg-primary text-background shadow-glow hover:bg-fuchsia-300 focus:ring-primary',
  secondary:
    'border border-border bg-surface text-text-primary hover:bg-surface-elevated focus:ring-primary/50',
  danger: 'bg-danger text-white hover:bg-red-500 focus:ring-danger',
  ghost:
    'text-text-secondary hover:bg-surface-elevated hover:text-text-primary focus:ring-primary/50',
}

export function Button({
  children,
  className = '',
  type = 'button',
  variant = 'primary',
  ...props
}: ButtonProps) {
  return (
    <button
      className={[
        'inline-flex items-center justify-center rounded-button px-4 py-2.5 text-sm font-semibold transition',
        'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background disabled:cursor-not-allowed disabled:opacity-60',
        variantStyles[variant],
        className,
      ].join(' ')}
      type={type}
      {...props}
    >
      {children}
    </button>
  )
}
