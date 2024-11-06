'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Doughnut } from "react-chartjs-2"
import { type ChartData } from "@/lib/chart-setup"
import { useThemeColors } from "@/hooks/use-theme-colors"
import { createChartOptions } from "@/lib/chart-setup"

export function MonthlySpending() {
  const colors = useThemeColors()
  const { doughnutOptions } = createChartOptions(colors)

  const data: ChartData<'doughnut'> = {
    labels: [
      'Housing',
      'Transportation',
      'Food & Dining',
      'Utilities',
      'Healthcare',
      'Entertainment',
      'Shopping',
      'Insurance',
      'Subscriptions'
    ],
    datasets: [{
      data: [
        2200,  // Housing (rent/mortgage)
        400,   // Transportation
        800,   // Food & Dining
        350,   // Utilities
        300,   // Healthcare
        200,   // Entertainment
        650,   // Shopping
        280,   // Insurance
        150    // Subscriptions
      ],
      backgroundColor: [
        '#FF6B6B',  // Red
        '#4ECDC4',  // Teal
        '#45B7D1',  // Blue
        '#FFD93D',  // Yellow
        '#8B5CF6',  // Purple
        '#F97316',  // Orange
        '#EC4899',  // Pink
        '#6366F1',  // Indigo
        '#14F195'   // Green
      ],
      borderWidth: 0,
    }]
  }

  const totalSpending = data.datasets[0].data.reduce((a, b) => a + b, 0)

  const customOptions = {
    ...doughnutOptions,
    plugins: {
      ...doughnutOptions.plugins,
      legend: {
        ...doughnutOptions.plugins?.legend,
        position: 'right' as const,
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
            <p className="text-2xl font-bold text-primary">${totalSpending.toLocaleString()}</p>
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