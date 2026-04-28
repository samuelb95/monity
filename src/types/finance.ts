export type CurrencyCode = 'EUR' | 'USD'

export type TransactionType = 'income' | 'expense' | 'transfer'

export type Transaction = {
  id: string
  amount: number
  currency: CurrencyCode
  date: string
  label: string
  type: TransactionType
}

export type Budget = {
  id: string
  category: string
  currency: CurrencyCode
  limit: number
  spent: number
}

export type Group = {
  id: string
  name: string
}

export type Investment = {
  id: string
  currency: CurrencyCode
  label: string
  value: number
}
