'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Bar } from "react-chartjs-2"
import { type ChartData } from "@/lib/chart-setup"
import { useThemeColors } from "@/hooks/use-theme-colors"
import { createChartOptions } from "@/lib/chart-setup"
import { RefreshCcw, ArrowUpRight, ArrowDownRight } from "lucide-react"

export function RecurringTransactions() {
  const colors = useThemeColors()
  const { defaultOptions } = createChartOptions(colors)

  const data: ChartData<'bar'> = {
    labels: ['Netflix', 'Spotify', 'Gym', 'iCloud', 'Adobe CC', 'AWS'],
    datasets: [{
      data: [15.99, 9.99, 49.99, 2.99, 52.99, 35.00],
      backgroundColor: ['#FF6B6B', '#4ECDC4', '#45B7D1', '#14F195', '#9333EA', '#FFD93D'],
      borderRadius: 8,
    }]
  }

  const totalMonthly = 166.95
  const previousMonthTotal = 155.95
  const monthlyChange = ((totalMonthly - previousMonthTotal) / previousMonthTotal) * 100

  return (
    <Card className="bg-card border-0">
      <CardHeader className="flex flex-row items-center justify-between">
        <div className="flex items-center gap-2">
          <RefreshCcw className="w-5 h-5" />
          <CardTitle>Recurring Transactions</CardTitle>
        </div>
        <div className="flex items-center gap-4">
          <div>
            <p className="text-sm text-muted-foreground">Monthly Total</p>
            <p className="text-2xl font-bold">${totalMonthly.toFixed(2)}</p>
          </div>
          <div className="flex items-center gap-1">
            {monthlyChange > 0 ? (
              <ArrowUpRight className="w-4 h-4 text-red-500" />
            ) : (
              <ArrowDownRight className="w-4 h-4 text-green-500" />
            )}
            <span className={monthlyChange > 0 ? "text-red-500" : "text-green-500"}>
              {Math.abs(monthlyChange).toFixed(1)}%
            </span>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <Bar data={data} options={defaultOptions} />
        </div>
      </CardContent>
    </Card>
  )
} 