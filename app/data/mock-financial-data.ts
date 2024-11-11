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
  Security,
  SecurityHolding,
  PlannedCashFlow
} from '@/types/financial'

// Mock Securities
export const mockSecurities: Security[] = [
  {
    id: 'voo',
    symbol: 'VOO',
    name: 'Vanguard S&P 500 ETF',
    type: 'etf',
    price: 424.82,
    priceChange: 2.34,
    priceChangePercent: 0.55,
    historicalPrices: [
      { timestamp: new Date('2024-01-01'), value: 390.45 },
      { timestamp: new Date('2024-02-01'), value: 405.67 },
      { timestamp: new Date('2024-03-01'), value: 424.82 }
    ]
  },
  {
    id: 'aapl',
    symbol: 'AAPL',
    name: 'Apple Inc.',
    type: 'stock',
    price: 172.62,
    priceChange: -1.23,
    priceChangePercent: -0.71,
    historicalPrices: [
      { timestamp: new Date('2024-01-01'), value: 165.45 },
      { timestamp: new Date('2024-02-01'), value: 168.67 },
      { timestamp: new Date('2024-03-01'), value: 172.62 }
    ]
  }
]

// Mock Holdings
export const mockHoldings: SecurityHolding[] = [
  {
    security: mockSecurities[0],
    shares: 100,
    costBasis: 380.45,
    value: 42482,
    gain: 4437,
    gainPercent: 11.66
  },
  {
    security: mockSecurities[1],
    shares: 50,
    costBasis: 150.23,
    value: 8631,
    gain: 1119.50,
    gainPercent: 14.90
  }
]

// Mock Accounts
export const mockAccounts: (CashAccount | InvestmentAccount | CreditAccount | LoanAccount)[] = [
  {
    id: 'checking1',
    name: 'Primary Checking',
    type: 'checking',
    balance: 8422,
    currency: 'USD',
    lastUpdated: new Date(),
    institution: 'Chase Bank',
    apy: 0.01
  },
  {
    id: 'savings1',
    name: 'High Yield Savings',
    type: 'savings',
    balance: 6400,
    currency: 'USD',
    lastUpdated: new Date(),
    institution: 'Ally Bank',
    apy: 4.25
  },
  {
    id: 'investment1',
    name: 'Investment Account',
    type: 'investment',
    balance: 85300,
    currency: 'USD',
    lastUpdated: new Date(),
    institution: 'Vanguard',
    holdings: mockHoldings,
    performance: {
      dayChange: 234.56,
      dayChangePercent: 0.28,
      weekChange: 1234.56,
      weekChangePercent: 1.47,
      monthChange: 3456.78,
      monthChangePercent: 4.23,
      yearChange: 12345.67,
      yearChangePercent: 16.92
    }
  }
]

// Mock Portfolio Summary
export const mockPortfolioSummary: PortfolioSummary = {
  totalValue: 122500,
  dayChange: 456.78,
  dayChangePercent: 0.37,
  monthChange: 5678.90,
  monthChangePercent: 4.86,
  yearChange: 15678.90,
  yearChangePercent: 14.67,
  allocation: [
    { type: 'Stocks', value: 85750, percentage: 70 },
    { type: 'Bonds', value: 24500, percentage: 20 },
    { type: 'Cash', value: 12250, percentage: 10 }
  ],
  accounts: mockAccounts.filter((account): account is InvestmentAccount => 
    account.type === 'investment' || account.type === 'retirement'
  )
}

// Mock Net Worth Summary
export const mockNetWorthSummary: NetWorthSummary = {
  totalAssets: 793200,
  totalLiabilities: 503500,
  netWorth: 289700,
  historicalData: [
    { timestamp: new Date('2024-01-01'), value: 260000 },
    { timestamp: new Date('2024-02-01'), value: 275000 },
    { timestamp: new Date('2024-03-01'), value: 289700 }
  ],
  breakdown: {
    assets: {
      cash: 14822,
      investments: 122500,
      property: 650000,
      other: 5878
    },
    liabilities: {
      credit: 2770,
      loans: 500730,
      other: 0
    }
  }
}

// Mock Transactions
export const mockTransactions: Transaction[] = [
  {
    id: 'tx1',
    accountId: 'checking1',
    date: new Date('2024-03-15'),
    amount: 2500,
    type: 'credit',
    category: 'Income',
    description: 'Payroll Deposit',
    status: 'posted',
    merchantName: 'Employer Inc'
  },
  {
    id: 'tx2',
    accountId: 'checking1',
    date: new Date('2024-03-14'),
    amount: 1200,
    type: 'debit',
    category: 'Housing',
    description: 'Mortgage Payment',
    status: 'posted',
    merchantName: 'Bank of America'
  }
]

// Mock Monthly Data
export const mockMonthlySpending: TimeseriesData[] = [
  { timestamp: new Date('2024-01-01'), value: 4500 },
  { timestamp: new Date('2024-02-01'), value: 4200 },
  { timestamp: new Date('2024-03-01'), value: 4800 }
]

export const mockMonthlyIncome: TimeseriesData[] = [
  { timestamp: new Date('2024-01-01'), value: 6000 },
  { timestamp: new Date('2024-02-01'), value: 6000 },
  { timestamp: new Date('2024-03-01'), value: 6500 }
]

// Add monthly spending categories
export const mockSpendingCategories = [
  { category: "Housing", amount: 2200, color: '#FF6B6B' },
  { category: "Transportation", amount: 400, color: '#4ECDC4' },
  { category: "Food & Dining", amount: 800, color: '#45B7D1' },
  { category: "Utilities", amount: 350, color: '#FFD93D' },
  { category: "Healthcare", amount: 300, color: '#8B5CF6' },
  { category: "Entertainment", amount: 200, color: '#F97316' },
  { category: "Shopping", amount: 650, color: '#EC4899' },
  { category: "Insurance", amount: 280, color: '#6366F1' },
  { category: "Subscriptions", amount: 150, color: '#14F195' }
]

// Update stats card data
export const mockStatsData = {
  netWorth: {
    value: 278378,
    trend: 12.5,
    timeframe: "30-Day"
  },
  cashAvailable: {
    value: 14822,
    trend: -2.3,
    timeframe: "7-Day"
  },
  creditUsage: {
    value: 2190,
    trend: -15.4,
    timeframe: "30-Day",
    description: "32% of limit"
  },
  investmentPortfolio: {
    value: 122500,
    trend: 8.7,
    timeframe: "7-Day",
    description: "Stocks & ETFs"
  },
  totalPortfolio: {
    value: 1278378,
    trend: 12.5,
    timeframe: "30-Day"
  },
  spx: {
    value: 14822,
    trend: -2.3,
    timeframe: "1-Day"
  },
  djia: {
    value: 2190,
    trend: -15.4,
    timeframe: "1-Day"
  },
  btc: {
    value: 71500,
    trend: 8.7,
    timeframe: "1-Day"
  }
}

// Add monthly comparison data
export const mockMonthlyComparisonData = {
  months: ['January', 'February', 'March'],
  income: [21000, 23000, 24050],
  spending: [18500, 19200, 20239],
  net: [2500, 3800, 3811]
}

// Add net worth trend data
export const mockNetWorthTrendData = {
  months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  assets: [
    680000, 702000, 785000, 768000, 790000, 781000, 
    782000, 773000, 793500, 790800, 794000, 789200
  ],
  liabilities: [
    520000, 518500, 517000, 515500, 514000, 512500,
    511000, 509500, 508000, 506500, 505000, 503500
  ],
  metrics: [
    {
      label: "YTD Change",
      value: "+$29,700",
      percentage: "+11.4%",
      trend: "up"
    },
    {
      label: "Monthly Change",
      value: "-$1,800",
      percentage: "-0.6%",
      trend: "down"
    },
    {
      label: "Average Growth",
      value: "$2,475/mo",
      percentage: "+0.9%",
      trend: "up"
    }
  ]
}

export const mockPlannedCashFlow: PlannedCashFlow = {
  items: [
    {
      label: "Cash Flow",
      value: 8456,
      target: 12654,
      description: "Income, Reimbursements, etc.",
      color: "bg-green-500"
    },
    {
      label: "Credit Card Usage",
      value: 2345,
      target: 6854,
      description: "Chase, Amazon, Target, etc.",
      color: "bg-blue-500"
    },
    {
      label: "Essential Expenses",
      value: 1234,
      target: 7564,
      description: "Mortgage, Utilities, etc.",
      color: "bg-purple-500"
    }
  ]
} 