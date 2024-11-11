import { 
  BaseAccount,
  CashAccount,
  InvestmentAccount,
  CreditAccount,
  LoanAccount,
  PortfolioSummary,
  NetWorthSummary,
  Transaction,
  TimeseriesData,
  PlannedCashFlow
} from '@/types/financial'

import {
  mockAccounts,
  mockPortfolioSummary,
  mockNetWorthSummary,
  mockTransactions,
  mockMonthlySpending,
  mockMonthlyIncome,
  mockStatsData,
  mockSpendingCategories,
  mockMonthlyComparisonData,
  mockNetWorthTrendData,
  mockPlannedCashFlow
} from '@/data/mock-financial-data'

export class FinancialService {
  // Account methods
  async getAccounts(): Promise<BaseAccount[]> {
    return mockAccounts
  }

  async getAccountById(id: string): Promise<BaseAccount | null> {
    return mockAccounts.find(account => account.id === id) || null
  }

  async getAccountsByType(type: string): Promise<BaseAccount[]> {
    return mockAccounts.filter(account => account.type === type)
  }

  // Portfolio methods
  async getPortfolioSummary(): Promise<PortfolioSummary> {
    return mockPortfolioSummary
  }

  async getInvestmentAccounts(): Promise<InvestmentAccount[]> {
    return mockAccounts.filter(
      (account): account is InvestmentAccount => 
      account.type === 'investment' || account.type === 'retirement'
    )
  }

  // Net Worth methods
  async getNetWorthSummary(): Promise<NetWorthSummary> {
    return mockNetWorthSummary
  }

  // Transaction methods
  async getTransactions(accountId?: string): Promise<Transaction[]> {
    if (accountId) {
      return mockTransactions.filter(tx => tx.accountId === accountId)
    }
    return mockTransactions
  }

  // Analytics methods
  async getMonthlySpending(): Promise<TimeseriesData[]> {
    return mockMonthlySpending
  }

  async getMonthlyIncome(): Promise<TimeseriesData[]> {
    return mockMonthlyIncome
  }

  // Stats methods
  async getStatsData() {
    return mockStatsData
  }

  // Monthly spending methods
  async getSpendingCategories() {
    return mockSpendingCategories
  }

  // Monthly comparison methods
  async getMonthlyComparison() {
    return mockMonthlyComparisonData
  }

  // Net worth trend methods
  async getNetWorthTrend() {
    return mockNetWorthTrendData
  }

  // Planned cash flow methods
  async getPlannedCashFlow(): Promise<PlannedCashFlow> {
    return mockPlannedCashFlow
  }
}

// Create a singleton instance
export const financialService = new FinancialService() 