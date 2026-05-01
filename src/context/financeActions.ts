import type { Dispatch, SetStateAction } from 'react'
import type { Account, Transaction } from '../types/finance'
import type { FinanceDataActions, FinanceDataState } from './financeData'

function transactionDelta(transaction: Transaction) {
  if (transaction.type === 'income') {
    return transaction.amount
  }

  if (transaction.type === 'expense') {
    return -transaction.amount
  }

  return 0
}

function applyAccountDelta(accounts: Account[], accountId: string, delta: number) {
  return accounts.map((account) =>
    account.id === accountId
      ? { ...account, balance: account.balance + delta, updatedAt: new Date().toISOString() }
      : account,
  )
}

export function createFinanceDataActions(
  setData: Dispatch<SetStateAction<FinanceDataState>>,
): FinanceDataActions {
  return {
    addAccount: (account) =>
      setData((current) => ({ ...current, accounts: [...current.accounts, account] })),
    updateAccountBalance: (accountId, balance) =>
      setData((current) => ({
        ...current,
        accounts: current.accounts.map((account) =>
          account.id === accountId
            ? { ...account, balance, updatedAt: new Date().toISOString() }
            : account,
        ),
      })),
    addTransaction: (transaction) =>
      setData((current) => ({
        ...current,
        accounts: applyAccountDelta(
          current.accounts,
          transaction.accountId,
          transactionDelta(transaction),
        ),
        transactions: [...current.transactions, transaction],
      })),
    updateTransaction: (transaction) =>
      setData((current) => {
        const previous = current.transactions.find((item) => item.id === transaction.id)
        const accounts = applyAccountDelta(
          current.accounts,
          previous?.accountId ?? transaction.accountId,
          previous ? -transactionDelta(previous) : 0,
        )

        return {
          ...current,
          accounts: applyAccountDelta(accounts, transaction.accountId, transactionDelta(transaction)),
          transactions: current.transactions.map((item) =>
            item.id === transaction.id ? transaction : item,
          ),
        }
      }),
    deleteTransaction: (transactionId) =>
      setData((current) => {
        const transaction = current.transactions.find((item) => item.id === transactionId)

        return {
          ...current,
          accounts: transaction
            ? applyAccountDelta(current.accounts, transaction.accountId, -transactionDelta(transaction))
            : current.accounts,
          transactions: current.transactions.filter((item) => item.id !== transactionId),
        }
      }),
    addRecurringTransaction: (transaction) =>
      setData((current) => ({
        ...current,
        recurringTransactions: [...current.recurringTransactions, transaction],
      })),
    confirmRecurringOccurrence: (occurrenceId) =>
      setData((current) => confirmOccurrence(current, occurrenceId)),
    skipRecurringOccurrence: (occurrenceId) =>
      setData((current) => ({
        ...current,
        recurringOccurrences: current.recurringOccurrences.map((item) =>
          item.id === occurrenceId ? { ...item, status: 'skipped' } : item,
        ),
      })),
    addGroup: (group) =>
      setData((current) => ({ ...current, groups: [...current.groups, group] })),
    addGroupMember: (member) =>
      setData((current) => ({
        ...current,
        groupMembers: [...current.groupMembers, member],
      })),
    addGroupAccount: (groupAccount) =>
      setData((current) => ({
        ...current,
        groupAccounts: [...current.groupAccounts, groupAccount],
      })),
    addSavingsGoal: (goal) =>
      setData((current) => ({ ...current, savingsGoals: [...current.savingsGoals, goal] })),
    updateSavingsGoal: (goal) =>
      setData((current) => ({
        ...current,
        savingsGoals: current.savingsGoals.map((item) => (item.id === goal.id ? goal : item)),
      })),
    deleteSavingsGoal: (goalId) =>
      setData((current) => ({
        ...current,
        savingsGoals: current.savingsGoals.filter((goal) => goal.id !== goalId),
      })),
    addInvestment: (investment) =>
      setData((current) => ({ ...current, investments: [...current.investments, investment] })),
    updateInvestment: (investment) =>
      setData((current) => ({
        ...current,
        investments: current.investments.map((item) =>
          item.id === investment.id ? investment : item,
        ),
      })),
  }
}

function confirmOccurrence(
  current: FinanceDataState,
  occurrenceId: string,
): FinanceDataState {
  const occurrence = current.recurringOccurrences.find((item) => item.id === occurrenceId)
  const recurring = current.recurringTransactions.find(
    (item) => item.id === occurrence?.recurringTransactionId,
  )

  if (!occurrence || !recurring || occurrence.status === 'confirmed') {
    return current
  }

  const timestamp = new Date().toISOString()
  const transaction: Transaction = {
    id: `transaction-${occurrence.id}`,
    userId: recurring.userId,
    type: recurring.type,
    amount: occurrence.amount,
    date: occurrence.dueDate,
    category: occurrence.category,
    accountId: occurrence.accountId,
    groupId: recurring.groupId,
    paidByMemberId: recurring.paidByMemberId,
    recurringOccurrenceId: occurrence.id,
    status: 'confirmed',
    createdAt: timestamp,
    updatedAt: timestamp,
  }

  return {
    ...current,
    accounts: applyAccountDelta(current.accounts, transaction.accountId, transactionDelta(transaction)),
    recurringOccurrences: current.recurringOccurrences.map((item) =>
      item.id === occurrenceId
        ? { ...item, status: 'confirmed' as const, transactionId: transaction.id }
        : item,
    ),
    transactions: [...current.transactions, transaction],
  }
}
