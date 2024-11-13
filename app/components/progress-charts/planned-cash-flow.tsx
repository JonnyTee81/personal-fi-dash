'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Info } from "lucide-react"
import { useEffect, useState } from "react"
import { financialService } from "@/services/financial-service"
import { PlannedCashFlow as PlannedCashFlowType } from "@/types/financial"

export function PlannedCashFlow() {
  const [cashFlowData, setCashFlowData] = useState<PlannedCashFlowType | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function loadData() {
      try {
        const data = await financialService.getPlannedCashFlow()
        setCashFlowData(data)
      } catch (error) {
        console.error('Failed to load planned cash flow data:', error)
      } finally {
        setIsLoading(false)
      }
    }

    loadData()
  }, [])

  function formatCurrency(value: number) {
    return value.toLocaleString('en-US', { 
      style: 'currency', 
      currency: 'USD', 
      minimumFractionDigits: 0, 
      maximumFractionDigits: 0 
    })
  }

  function formatPercentage(value: number) {
    return `${value.toFixed(0)}%`
  }

  if (isLoading || !cashFlowData) {
    return (
      <Card className="bg-card border-0">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Planned</CardTitle>
            <button className="p-1 hover:bg-accent rounded-full">
              <Info className="w-5 h-5 text-muted-foreground" />
            </button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="animate-pulse space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="space-y-2">
                <div className="h-4 bg-muted rounded w-24"></div>
                <div className="h-2 bg-muted rounded"></div>
                <div className="h-4 bg-muted rounded w-32"></div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="bg-card border-0">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Planned</CardTitle>
          <button className="p-1 hover:bg-accent rounded-full">
            <Info className="w-5 h-5 text-muted-foreground" />
          </button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {cashFlowData.items.map((item, index) => (
            <div key={index} className="space-y-2">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">{item.label}</p>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
                <div className="text-right">
                  <p className="font-medium">{formatCurrency(item.value)}</p>
                  <p className="text-sm text-muted-foreground">
                    Completed: {formatPercentage((item.value / item.target) * 100)}
                  </p>
                </div>
              </div>
              <Progress 
                value={(item.value / item.target) * 100} 
                className="h-2 bg-muted" 
                indicatorClassName={item.color}
              />
              <div className="flex justify-between text-sm text-muted-foreground">
                <span>{formatCurrency(0)}</span>
                <span>{formatCurrency(item.target)}</span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}   