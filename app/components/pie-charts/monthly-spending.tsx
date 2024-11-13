'use client'

import '@/lib/chart-registry'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Doughnut } from "react-chartjs-2"
import { useThemeColors } from "@/hooks/use-theme-colors"
import { createChartOptions, type ChartData } from "@/lib/chart-setup"
import { useEffect, useState } from "react"
import { financialService } from "@/services/financial-service"
import { formatCurrency } from "@/lib/utils"

export function MonthlySpending() {
  const colors = useThemeColors()
  const { doughnutOptions } = createChartOptions(colors)
  const [spendingData, setSpendingData] = useState<any[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function loadData() {
      try {
        const categories = await financialService.getSpendingCategories()
        setSpendingData(categories)
      } catch (error) {
        console.error('Failed to load spending data:', error)
      } finally {
        setIsLoading(false)
      }
    }

    loadData()
  }, [])

  if (isLoading) {
    return <div>Loading...</div>
  }

  const data: ChartData<'doughnut'> = {
    labels: spendingData.map(item => item.category),
    datasets: [{
      data: spendingData.map(item => item.amount),
      backgroundColor: spendingData.map(item => item.color),
      borderWidth: 0,
    }]
  }

  const totalSpending = spendingData.reduce((sum, item) => sum + item.amount, 0)

  const customOptions = {
    ...doughnutOptions,
    plugins: {
      ...doughnutOptions.plugins,
      tooltip: {
        ...doughnutOptions.plugins?.tooltip,
        callbacks: {
          label: function(context: any) {
            const value = context.raw
            const percentage = ((value / totalSpending) * 100).toFixed(1)
            return `${context.label}: ${formatCurrency(value)} (${percentage}%)`
          }
        }
      }
    }
  }

  return (
    <Card className="bg-card border-0">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>March Spending</CardTitle>
          <div className="text-right">
            <p className="text-sm text-muted-foreground">Total Spent</p>
            <p className="text-2xl font-bold text-primary">{formatCurrency(totalSpending)}</p>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="h-[400px] flex items-center">
          <Doughnut data={data} options={customOptions} />
        </div>
      </CardContent>
    </Card>
  )
} 