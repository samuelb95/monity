import type { ReactNode } from 'react'
import { FinanceDataContext, initialFinanceData } from './financeData'

type FinanceDataProviderProps = {
  children: ReactNode
}

export function FinanceDataProvider({ children }: FinanceDataProviderProps) {
  return (
    <FinanceDataContext.Provider value={initialFinanceData}>
      {children}
    </FinanceDataContext.Provider>
  )
}
