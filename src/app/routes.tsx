import type { ComponentType } from 'react'
import { BudgetsPage } from '../pages/Budgets/BudgetsPage'
import { DashboardPage } from '../pages/Dashboard/DashboardPage'
import { ForecastsPage } from '../pages/Forecasts/ForecastsPage'
import { GoalsPage } from '../pages/Goals/GoalsPage'
import { GroupsPage } from '../pages/Groups/GroupsPage'
import { InvestmentsPage } from '../pages/Investments/InvestmentsPage'
import { LoansPage } from '../pages/Loans/LoansPage'
import { MorePage } from '../pages/More/MorePage'
import { NotificationsPage } from '../pages/Notifications/NotificationsPage'
import { SettingsPage } from '../pages/Settings/SettingsPage'
import { TransactionsPage } from '../pages/Transactions/TransactionsPage'

export type AppRoute = {
  path: string
  label: string
  mobileActivePaths?: string[]
  mobileNav?: boolean
  shortLabel: string
  showInSidebar?: boolean
  Component: ComponentType
}

export const secondaryRoutePaths = [
  '/groups',
  '/forecasts',
  '/goals',
  '/loans',
  '/notifications',
  '/settings',
]

export const routes: AppRoute[] = [
  {
    path: '/',
    label: 'Accueil',
    mobileNav: true,
    shortLabel: 'Accueil',
    Component: DashboardPage,
  },
  {
    path: '/transactions',
    label: 'Transactions',
    mobileNav: true,
    shortLabel: 'Transac.',
    Component: TransactionsPage,
  },
  {
    path: '/budgets',
    label: 'Budgets',
    mobileNav: true,
    shortLabel: 'Budgets',
    Component: BudgetsPage,
  },
  {
    path: '/investments',
    label: 'Investissements',
    mobileNav: true,
    shortLabel: 'Invest.',
    Component: InvestmentsPage,
  },
  {
    path: '/more',
    label: 'Plus',
    mobileActivePaths: secondaryRoutePaths,
    mobileNav: true,
    shortLabel: 'Plus',
    showInSidebar: false,
    Component: MorePage,
  },
  {
    path: '/groups',
    label: 'Groupes',
    shortLabel: 'Groupes',
    Component: GroupsPage,
  },
  {
    path: '/forecasts',
    label: 'Prévisions',
    shortLabel: 'Prev.',
    showInSidebar: false,
    Component: ForecastsPage,
  },
  {
    path: '/goals',
    label: 'Objectifs',
    shortLabel: 'Obj.',
    showInSidebar: false,
    Component: GoalsPage,
  },
  {
    path: '/loans',
    label: 'Prêts',
    shortLabel: 'Prêts',
    showInSidebar: false,
    Component: LoansPage,
  },
  {
    path: '/notifications',
    label: 'Notifications',
    shortLabel: 'Notif.',
    showInSidebar: false,
    Component: NotificationsPage,
  },
  {
    path: '/settings',
    label: 'Paramètres',
    shortLabel: 'Params',
    Component: SettingsPage,
  },
]
