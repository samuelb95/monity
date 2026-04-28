import logoUrl from '../../assets/brand/logomonity.svg'

type LogoVariant = 'full' | 'mark'
type LogoSize = 'sm' | 'md' | 'lg'

type LogoProps = {
  className?: string
  size?: LogoSize
  variant?: LogoVariant
}

const markSizes: Record<LogoSize, string> = {
  sm: 'h-8 w-8',
  md: 'h-10 w-10',
  lg: 'h-12 w-12',
}

const textSizes: Record<LogoSize, string> = {
  sm: 'text-base',
  md: 'text-lg',
  lg: 'text-xl',
}

export function Logo({
  className = '',
  size = 'md',
  variant = 'full',
}: LogoProps) {
  return (
    <a
      className={[
        'inline-flex items-center gap-3 rounded-button focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background',
        className,
      ].join(' ')}
      href="#/"
    >
      <span
        className={[
          'relative flex shrink-0 items-center justify-center overflow-hidden rounded-card bg-primary/10 text-sm font-bold text-primary ring-1 ring-border',
          markSizes[size],
        ].join(' ')}
      >
        <span aria-hidden="true" className="absolute">
          M
        </span>
        <img
          alt="Monity"
          className="relative h-full w-full object-contain"
          src={logoUrl}
        />
      </span>
      {variant === 'full' ? (
        <span className="leading-tight">
          <span
            className={[
              'block font-semibold tracking-tight text-text-primary',
              textSizes[size],
            ].join(' ')}
          >
            Monity
          </span>
          <span className="block text-xs font-medium text-text-secondary">
            Budget manager
          </span>
        </span>
      ) : null}
    </a>
  )
}
