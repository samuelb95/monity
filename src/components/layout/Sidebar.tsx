import type { AppRoute } from '../../app/routes'
import { Logo } from '../brand/Logo'

type SidebarProps = {
  currentPath: string
  isOpen: boolean
  onToggle: () => void
  routes: AppRoute[]
}

function RouteIcon({ path }: { path: string }) {
  const iconClass = 'h-5 w-5 shrink-0'

  if (path === '/') {
    return (
      <svg className={iconClass} fill="none" viewBox="0 0 24 24">
        <path
          d="M4 10.5 12 4l8 6.5V20a1 1 0 0 1-1 1h-5v-6h-4v6H5a1 1 0 0 1-1-1v-9.5Z"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.8"
        />
      </svg>
    )
  }

  if (path === '/transactions') {
    return (
      <svg className={iconClass} fill="none" viewBox="0 0 24 24">
        <path
          d="M7 8h10M7 12h10M7 16h6"
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth="1.8"
        />
      </svg>
    )
  }

  if (path === '/budgets') {
    return (
      <svg className={iconClass} fill="none" viewBox="0 0 24 24">
        <path
          d="M5 7h14v10H5zM8 7V5h8v2M8 12h3"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.8"
        />
      </svg>
    )
  }

  if (path === '/groups') {
    return (
      <svg className={iconClass} fill="none" viewBox="0 0 24 24">
        <path
          d="M9 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM17 10a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM4 19a5 5 0 0 1 10 0M14.5 18.5A4 4 0 0 1 21 19"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.8"
        />
      </svg>
    )
  }

  if (path === '/investments') {
    return (
      <svg className={iconClass} fill="none" viewBox="0 0 24 24">
        <path
          d="m5 17 4-4 3 3 7-8M15 8h4v4"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.8"
        />
      </svg>
    )
  }

  return (
    <svg className={iconClass} fill="none" viewBox="0 0 24 24">
      <path
        d="M12 8.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7ZM19 12a7 7 0 0 0-.1-1.2l2-1.5-2-3.4-2.4 1a7.5 7.5 0 0 0-2-1.2L14.2 3h-4.4l-.4 2.7a7.5 7.5 0 0 0-2 1.2l-2.4-1-2 3.4 2 1.5A7 7 0 0 0 5 12c0 .4 0 .8.1 1.2l-2 1.5 2 3.4 2.4-1a7.5 7.5 0 0 0 2 1.2l.4 2.7h4.4l.4-2.7a7.5 7.5 0 0 0 2-1.2l2.4 1 2-3.4-2-1.5c0-.4.1-.8.1-1.2Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.6"
      />
    </svg>
  )
}

export function Sidebar({ currentPath, isOpen, onToggle, routes }: SidebarProps) {
  return (
    <aside
      className={[
        'fixed inset-y-0 left-0 hidden border-r border-border bg-surface py-6 transition-[width] duration-200 ease-out lg:block',
        isOpen ? 'w-64 px-5' : 'w-20 px-3',
      ].join(' ')}
    >
      <div
        className={[
          'flex items-center gap-3',
          isOpen ? 'justify-between' : 'flex-col',
        ].join(' ')}
      >
        <Logo size={isOpen ? 'lg' : 'sm'} variant={isOpen ? 'full' : 'mark'} />
        <button
          aria-label={isOpen ? 'Réduire la sidebar' : 'Déplier la sidebar'}
          aria-pressed={isOpen}
          className="flex h-10 w-10 items-center justify-center rounded-button border border-border text-text-secondary transition hover:bg-surface-elevated hover:text-text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
          onClick={onToggle}
          type="button"
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24">
            <path
              d={isOpen ? 'M15 6l-6 6 6 6' : 'M9 6l6 6-6 6'}
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.8"
            />
          </svg>
        </button>
      </div>

      <nav className="mt-8 space-y-1" aria-label="Navigation principale">
        {routes
          .filter((route) => route.showInSidebar !== false)
          .map((route) => {
            const isActive = route.path === currentPath

            return (
              <a
                key={route.path}
                aria-label={route.label}
                href={`#${route.path}`}
                title={!isOpen ? route.label : undefined}
                className={[
                  'flex items-center rounded-button py-2.5 text-sm font-medium transition',
                  isOpen ? 'gap-3 px-3' : 'justify-center px-0',
                  isActive
                    ? 'bg-primary/15 text-primary ring-1 ring-primary/25'
                    : 'text-text-secondary hover:bg-surface-elevated hover:text-text-primary',
                ].join(' ')}
              >
                <RouteIcon path={route.path} />
                {isOpen ? <span className="truncate">{route.label}</span> : null}
              </a>
            )
          })}
      </nav>
    </aside>
  )
}
