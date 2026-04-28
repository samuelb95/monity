import type { ReactNode } from 'react'
import type { AppRoute } from '../../app/routes'
import { MobileNav } from './MobileNav'
import { Sidebar } from './Sidebar'
import { TopBar } from './TopBar'

type AppLayoutProps = {
  children: ReactNode
  currentPath: string
  routes: AppRoute[]
}

export function AppLayout({ children, currentPath, routes }: AppLayoutProps) {
  return (
    <div className="min-h-screen bg-background text-text-primary">
      <Sidebar currentPath={currentPath} routes={routes} />
      <div className="min-h-screen pb-24 lg:ml-64 lg:pb-0">
        <TopBar />
        <main className="mx-auto w-full max-w-6xl px-4 py-5 sm:px-6 lg:px-8 lg:py-7">
          {children}
        </main>
      </div>
      <MobileNav currentPath={currentPath} routes={routes} />
    </div>
  )
}
