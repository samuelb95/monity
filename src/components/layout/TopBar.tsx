import { Logo } from '../brand/Logo'

export function TopBar() {
  return (
    <header className="border-b border-border bg-background/95 backdrop-blur">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center gap-3 px-4 sm:px-6 lg:px-8">
        <div className="lg:hidden">
          <Logo size="sm" variant="mark" />
        </div>
        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-medium text-text-secondary">
            Une base claire pour piloter vos finances.
          </p>
        </div>
      </div>
    </header>
  )
}
