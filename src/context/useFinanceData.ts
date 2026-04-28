import { useContext } from 'react'
import { FinanceDataContext } from './financeData'

export function useFinanceData() {
  const context = useContext(FinanceDataContext)

  if (!context) {
    throw new Error('useFinanceData must be used within FinanceDataProvider')
  }

  return context
}
