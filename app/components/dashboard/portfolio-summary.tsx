'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useEffect, useState } from "react"
import { financialService } from "@/services/financial-service"
import { PortfolioSummary as PortfolioSummaryType } from "@/types/financial"
import { formatCurrency } from "@/lib/utils"

export function PortfolioSummary() {
  const [summary, setSummary] = useState<PortfolioSummaryType | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function loadSummary() {
      try {
        const portfolioSummary = await financialService.getPortfolioSummary()
        setSummary(portfolioSummary)
      } catch (error) {
        console.error('Failed to load portfolio summary:', error)
      } finally {
        setIsLoading(false)
      }
    }

    loadSummary()
  }, [])

  if (isLoading || !summary) {
    return <div>Loading...</div>
  }

  return (
    <Card className="bg-card border-0">
      <CardHeader>
        <CardTitle>Portfolio Summary</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="mb-6">
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-bold">{formatCurrency(summary.totalValue)}</span>
            <span className={`text-sm font-medium ${summary.monthChangePercent >= 0 ? 'text-green-500' : 'text-red-500'}`}>
              {summary.monthChangePercent >= 0 ? '+' : ''}{summary.monthChangePercent.toFixed(1)}%
            </span>
          </div>
          <p className="text-sm text-muted-foreground">Total Portfolio Value</p>
        </div>

        <div className="space-y-4">
          {summary.allocation.map((item, index) => (
            <div key={index} className="flex items-center justify-between p-3 rounded-lg hover:bg-accent/50 transition-colors">
              <div>
                <p className="font-medium">{item.type}</p>
                <p className="text-sm text-muted-foreground">{item.percentage}% of portfolio</p>
              </div>
              <div className="text-right">
                <p className="font-medium">{formatCurrency(item.value)}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
} 