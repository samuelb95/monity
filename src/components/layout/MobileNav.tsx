import type { AppRoute } from '../../app/routes'

type MobileNavProps = {
  currentPath: string
  routes: AppRoute[]
}

function NavIcon({ path }: { path: string }) {
  const iconClass = 'h-5 w-5'

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

  if (path === '/more') {
    return (
      <svg className={iconClass} fill="none" viewBox="0 0 24 24">
        <path
          d="M5 7h14M5 12h14M5 17h14"
          stroke="currentColor"
          strokeLinecap="round"
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

export function MobileNav({ currentPath, routes }: MobileNavProps) {
  return (
    <nav
      className="fixed inset-x-0 bottom-0 z-10 border-t border-border bg-background/90 pb-3 pt-2 shadow-nav backdrop-blur lg:hidden"
      aria-label="Navigation mobile"
    >
      <div className="relative left-[50dvw] grid w-[calc(100dvw-1rem)] -translate-x-1/2 grid-cols-5 gap-1 rounded-card border border-border bg-surface p-1">
        {routes
          .filter((route) => route.mobileNav)
          .map((route) => {
            const isActive =
              route.path === currentPath ||
              Boolean(route.mobileActivePaths?.includes(currentPath))

            return (
              <a
                key={route.path}
                href={`#${route.path}`}
                className={[
                  'relative flex min-h-14 min-w-0 flex-col items-center justify-center gap-1 rounded-button px-1 text-[11px] font-semibold transition',
                  isActive
                    ? 'bg-primary/15 text-primary'
                    : 'text-text-secondary hover:bg-surface-elevated hover:text-text-primary',
                ].join(' ')}
                aria-current={isActive ? 'page' : undefined}
              >
                <NavIcon path={route.path} />
                <span className="max-w-full truncate">{route.shortLabel}</span>
                {isActive ? (
                  <span className="absolute bottom-1 h-1 w-5 rounded-full bg-primary shadow-glow" />
                ) : null}
              </a>
            )
          })}
      </div>
    </nav>
  )
}
