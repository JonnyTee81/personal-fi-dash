import { 
  BaseAccount,
  CashAccount,
  InvestmentAccount,
  CreditAccount,
  LoanAccount,
  PortfolioSummary,
  NetWorthSummary,
  Transaction,
  TimeseriesData
} from '@/types/financial'

import {
  mockAccounts,
  mockPortfolioSummary,
  mockNetWorthSummary,
  mockTransactions,
  mockMonthlySpending,
  mockMonthlyIncome
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
}

// Create a singleton instance
export const financialService = new FinancialService() 