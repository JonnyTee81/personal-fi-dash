// Base types
export interface BaseAccount {
  id: string
  name: string
  type: string
  balance: number
  currency: string
  lastUpdated: Date
  institution: string
}

export interface TimeseriesData {
  timestamp: Date
  value: number
}

// Account specific types
export interface CashAccount extends BaseAccount {
  type: 'checking' | 'savings'
  apy?: number
  transactions?: Transaction[]
}

export interface InvestmentAccount extends BaseAccount {
  type: 'investment' | 'retirement' | 'brokerage'
  holdings: SecurityHolding[]
  performance: {
    dayChange: number
    dayChangePercent: number
    weekChange: number
    weekChangePercent: number
    monthChange: number
    monthChangePercent: number
    yearChange: number
    yearChangePercent: number
  }
}

export interface CreditAccount extends BaseAccount {
  type: 'credit'
  limit: number
  apr: number
  dueDate?: Date
  minimumPayment?: number
  lastPaymentAmount?: number
  lastPaymentDate?: Date
}

export interface LoanAccount extends BaseAccount {
  type: 'mortgage' | 'auto' | 'personal' | 'student'
  originalBalance: number
  interestRate: number
  term: number // in months
  startDate: Date
  paymentAmount: number
  nextPaymentDue?: Date
}

// Security and holding types
export interface Security {
  id: string
  symbol: string
  name: string
  type: 'stock' | 'etf' | 'mutual_fund' | 'bond' | 'crypto'
  price: number
  priceChange: number
  priceChangePercent: number
  historicalPrices: TimeseriesData[]
}

export interface SecurityHolding {
  security: Security
  shares: number
  costBasis: number
  value: number
  gain: number
  gainPercent: number
}

// Transaction types
export interface Transaction {
  id: string
  accountId: string
  date: Date
  amount: number
  type: 'credit' | 'debit'
  category: string
  description: string
  status: 'pending' | 'posted'
  merchantName?: string
}

// Portfolio and net worth types
export interface PortfolioSummary {
  totalValue: number
  dayChange: number
  dayChangePercent: number
  monthChange: number
  monthChangePercent: number
  yearChange: number
  yearChangePercent: number
  allocation: {
    type: string
    value: number
    percentage: number
  }[]
  accounts: InvestmentAccount[]
}

export interface NetWorthSummary {
  totalAssets: number
  totalLiabilities: number
  netWorth: number
  historicalData: TimeseriesData[]
  breakdown: {
    assets: {
      cash: number
      investments: number
      property: number
      other: number
    }
    liabilities: {
      credit: number
      loans: number
      other: number
    }
  }
}

export interface PlannedCashFlowItem {
  label: string
  value: number
  target: number
  description: string
  color: string
}

export interface PlannedCashFlow {
  items: PlannedCashFlowItem[]
} 