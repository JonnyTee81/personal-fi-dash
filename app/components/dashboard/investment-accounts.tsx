'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useEffect, useState } from "react"
import { financialService } from "@/services/financial-service"
import { InvestmentAccount } from "@/types/financial"
import { formatCurrency } from "@/lib/utils"

export function InvestmentAccounts() {
  const [accounts, setAccounts] = useState<InvestmentAccount[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function loadAccounts() {
      try {
        const investmentAccounts = await financialService.getInvestmentAccounts()
        setAccounts(investmentAccounts)
      } catch (error) {
        console.error('Failed to load investment accounts:', error)
      } finally {
        setIsLoading(false)
      }
    }

    loadAccounts()
  }, [])

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <Card className="bg-card border-0">
      <CardHeader>
        <CardTitle>Investment Accounts</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {accounts.map((account) => (
            <div 
              key={account.id} 
              className="flex items-center justify-between p-4 rounded-lg hover:bg-accent/50 transition-colors cursor-pointer"
            >
              <div className="space-y-1">
                <p className="font-medium">{account.name}</p>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground">{account.institution}</span>
                  <span className="text-xs text-muted-foreground">•</span>
                  <span className="text-xs text-muted-foreground">
                    Updated {new Date(account.lastUpdated).toLocaleDateString()}
                  </span>
                </div>
              </div>
              <div className="text-right">
                <p className="font-medium">{formatCurrency(account.balance)}</p>
                <p className={`text-sm ${account.performance.monthChangePercent >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                  {account.performance.monthChangePercent >= 0 ? '+' : ''}
                  {account.performance.monthChangePercent.toFixed(2)}%
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
} 