'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface PortfolioAccount {
  name: string
  value: number
  percentChange: number
  type: string
}

const portfolioAccounts: PortfolioAccount[] = [
  {
    name: "Vanguard Total Market ETF",
    value: 45300,
    percentChange: 8.7,
    type: "ETF"
  },
  {
    name: "Individual Stocks",
    value: 40000,
    percentChange: 12.3,
    type: "Stocks"
  },
  {
    name: "401(k)",
    value: 37200,
    percentChange: 6.4,
    type: "Retirement"
  }
]

export function PortfolioSummary() {
  const totalValue = portfolioAccounts.reduce((sum, account) => sum + account.value, 0)
  const weightedChange = portfolioAccounts.reduce((sum, account) => {
    return sum + (account.percentChange * (account.value / totalValue))
  }, 0)

  return (
    <Card className="bg-card border-0">
      <CardHeader>
        <CardTitle>Portfolio Summary</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="mb-6">
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-bold">${totalValue.toLocaleString()}</span>
            <span className={`text-sm font-medium ${weightedChange >= 0 ? 'text-green-500' : 'text-red-500'}`}>
              {weightedChange >= 0 ? '+' : ''}{weightedChange.toFixed(1)}%
            </span>
          </div>
          <p className="text-sm text-muted-foreground">Total Portfolio Value</p>
        </div>

        <div className="space-y-4">
          {portfolioAccounts.map((account) => (
            <div key={account.name} className="flex items-center justify-between p-3 rounded-lg hover:bg-accent/50 transition-colors">
              <div>
                <p className="font-medium">{account.name}</p>
                <p className="text-sm text-muted-foreground">{account.type}</p>
              </div>
              <div className="text-right">
                <p className="font-medium">${account.value.toLocaleString()}</p>
                <p className={`text-sm ${account.percentChange >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                  {account.percentChange >= 0 ? '+' : ''}{account.percentChange}%
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
} 