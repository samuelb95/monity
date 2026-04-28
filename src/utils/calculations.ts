import type { Budget, Transaction } from '../types/finance'

export function calculateBalance(transactions: Transaction[]) {
  return transactions.reduce((balance, transaction) => {
    if (transaction.type === 'expense') {
      return balance - transaction.amount
    }

    if (transaction.type === 'income') {
      return balance + transaction.amount
    }

    return balance
  }, 0)
}

export function calculateBudgetProgress(budget: Budget) {
  if (budget.limit <= 0) {
    return 0
  }

  return Math.min((budget.spent / budget.limit) * 100, 100)
}
