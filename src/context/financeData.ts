import { createContext } from 'react'
import type { Budget, Group, Investment, Transaction } from '../types/finance'

export type FinanceDataContextValue = {
  budgets: Budget[]
  groups: Group[]
  investments: Investment[]
  transactions: Transaction[]
}

export const initialFinanceData: FinanceDataContextValue = {
  budgets: [],
  groups: [],
  investments: [],
  transactions: [],
}

export const FinanceDataContext = createContext<
  FinanceDataContextValue | undefined
>(undefined)
