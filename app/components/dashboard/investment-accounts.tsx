'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface InvestmentAccount {
  name: string
  value: number
  percentChange: number
  type: string
  lastUpdated?: string
}

const investmentAccounts: InvestmentAccount[] = [
  {
    name: "Vanguard Total Market ETF",
    value: 45300,
    percentChange: 8.7,
    type: "ETF",
    lastUpdated: "Today"
  },
  {
    name: "Individual Stocks",
    value: 40000,
    percentChange: 12.3,
    type: "Stocks",
    lastUpdated: "Today"
  },
  {
    name: "401(k)",
    value: 37200,
    percentChange: 6.4,
    type: "Retirement",
    lastUpdated: "Yesterday"
  },
  {
    name: "Roth IRA",
    value: 22000,
    percentChange: 7.2,
    type: "Retirement",
    lastUpdated: "Yesterday"
  }
]

export function InvestmentAccounts() {
  return (
    <Card className="bg-card border-0">
      <CardHeader>
        <CardTitle>Investment Accounts</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {investmentAccounts.map((account) => (
            <div 
              key={account.name} 
              className="flex items-center justify-between p-4 rounded-lg hover:bg-accent/50 transition-colors cursor-pointer"
            >
              <div className="space-y-1">
                <p className="font-medium">{account.name}</p>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground">{account.type}</span>
                  {account.lastUpdated && (
                    <>
                      <span className="text-xs text-muted-foreground">•</span>
                      <span className="text-xs text-muted-foreground">
                        Updated {account.lastUpdated}
                      </span>
                    </>
                  )}
                </div>
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