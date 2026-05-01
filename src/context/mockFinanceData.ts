import type { FinanceDataState } from './financeData'

const now = '2026-05-01T08:00:00.000Z'
const userId = 'user-samuel'
const roommateGroupId = 'group-roommates'
const checkingAccountId = 'account-checking'
const savingsAccountId = 'account-savings'
const cashAccountId = 'account-cash'
const groupAccountId = 'account-shared-roommates'

export const mockFinanceData: FinanceDataState = {
  user: {
    id: userId,
    name: 'Samuel',
    email: 'samuel@example.com',
    defaultCurrency: 'EUR',
    createdAt: now,
  },
  accounts: [
    { id: checkingAccountId, userId, name: 'Compte courant', type: 'checking', balance: 2450, currency: 'EUR', ownerType: 'user', createdAt: now, updatedAt: now },
    { id: savingsAccountId, userId, name: 'Épargne', type: 'savings', balance: 8200, currency: 'EUR', ownerType: 'user', createdAt: now, updatedAt: now },
    { id: cashAccountId, userId, name: 'Espèces', type: 'cash', balance: 120, currency: 'EUR', ownerType: 'user', createdAt: now, updatedAt: now },
    { id: groupAccountId, userId, name: 'Compte colocation', type: 'group', balance: 640, currency: 'EUR', ownerType: 'group', groupId: roommateGroupId, createdAt: now, updatedAt: now },
  ],
  groups: [
    { id: roommateGroupId, name: 'Colocation', type: 'roommates', currency: 'EUR', createdAt: now, updatedAt: now },
  ],
  groupMembers: [
    { id: 'member-samuel', groupId: roommateGroupId, displayName: 'Samuel', email: 'samuel@example.com', role: 'owner', createdAt: now },
    { id: 'member-alex', groupId: roommateGroupId, displayName: 'Alex', email: 'alex@example.com', role: 'member', createdAt: now },
  ],
  groupAccounts: [
    {
      id: 'group-account-roommates-main',
      groupId: roommateGroupId,
      accountId: groupAccountId,
      targetBalance: 1200,
      monthlyContributionAmount: 560,
      contributionDueDay: 3,
    },
  ],
  transactions: [
    { id: 'transaction-salary-april', userId, type: 'income', amount: 3200, date: '2026-04-28', category: 'Salaire', accountId: checkingAccountId, description: 'Salaire mensuel', status: 'confirmed', createdAt: now, updatedAt: now },
    { id: 'transaction-groceries', userId, type: 'expense', amount: 86.4, date: '2026-04-29', category: 'Courses', accountId: checkingAccountId, status: 'confirmed', createdAt: now, updatedAt: now },
    { id: 'transaction-rent-share', userId, type: 'expense', amount: 520, date: '2026-04-30', category: 'Loyer', accountId: groupAccountId, groupId: roommateGroupId, paidByMemberId: 'member-samuel', status: 'confirmed', createdAt: now, updatedAt: now },
  ],
  recurringTransactions: [
    { id: 'recurring-rent', userId, name: 'Loyer', type: 'expense', amount: 1040, category: 'Loyer', accountId: groupAccountId, frequency: 'monthly', dayOfMonth: 5, nextDueDate: '2026-05-05', startDate: '2026-01-05', status: 'active', groupId: roommateGroupId, paidByMemberId: 'member-samuel', createdAt: now, updatedAt: now },
    { id: 'recurring-electricity', userId, name: 'Électricité', type: 'expense', amount: 74, category: 'Énergie', accountId: groupAccountId, frequency: 'monthly', dayOfMonth: 12, nextDueDate: '2026-05-12', startDate: '2026-01-12', status: 'active', groupId: roommateGroupId, paidByMemberId: 'member-alex', createdAt: now, updatedAt: now },
  ],
  recurringOccurrences: [
    { id: 'occurrence-rent-may', recurringTransactionId: 'recurring-rent', dueDate: '2026-05-05', amount: 1040, category: 'Loyer', accountId: groupAccountId, status: 'pending', overrideType: 'none', createdAt: now, updatedAt: now },
    { id: 'occurrence-electricity-may', recurringTransactionId: 'recurring-electricity', dueDate: '2026-05-12', amount: 74, category: 'Énergie', accountId: groupAccountId, status: 'pending', overrideType: 'none', createdAt: now, updatedAt: now },
  ],
  budgets: [
    { id: 'budget-groceries', userId, name: 'Courses', category: 'Courses', limit: 380, period: 'monthly', createdAt: now, updatedAt: now },
    { id: 'budget-housing', userId, name: 'Logement', category: 'Loyer', limit: 1100, period: 'monthly', groupId: roommateGroupId, createdAt: now, updatedAt: now },
  ],
  savingsGoals: [
    { id: 'goal-emergency-fund', userId, accountId: savingsAccountId, name: 'Fonds de sécurité', targetAmount: 10000, currentAmount: 8200, targetDate: '2026-12-31', color: '#12B76A', createdAt: now, updatedAt: now },
  ],
  investments: [
    { id: 'investment-etf-world', userId, name: 'ETF Monde', type: 'etf', value: 3250, createdAt: now },
    { id: 'investment-company-stock', userId, name: 'Actions tech', type: 'stock', value: 1450, createdAt: now },
  ],
  forecastItems: [
    { id: 'forecast-rent-may', type: 'recurring_expense', label: 'Loyer', amount: 1040, date: '2026-05-05', accountId: groupAccountId, groupId: roommateGroupId },
    { id: 'forecast-contribution-may', type: 'group_contribution', label: 'Contribution colocation', amount: 560, date: '2026-05-03', accountId: groupAccountId, groupId: roommateGroupId },
  ],
}
