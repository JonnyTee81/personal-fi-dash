'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Bar } from "react-chartjs-2"
import { type ChartData } from "@/lib/chart-setup"
import { useThemeColors } from "@/hooks/use-theme-colors"
import { createChartOptions } from "@/lib/chart-setup"

export function SpendingBreakdown() {
  const colors = useThemeColors()
  const { defaultOptions } = createChartOptions(colors)

  const data: ChartData<'bar'> = {
    labels: ['Housing', 'Personal', 'Transportation'],
    datasets: [{
      data: [3452, 45581, 2190],
      backgroundColor: ['#9333EA', '#EC4899', '#F97316'],
      borderRadius: 8,
    }]
  }

  const options = {
    ...defaultOptions,
    indexAxis: 'x' as const,
  }

  return (
    <Card className="bg-card border-0">
      <CardHeader>
        <CardTitle>Spending Breakdown</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[200px]">
          <Bar data={data} options={options} />
        </div>
      </CardContent>
    </Card>
  )
} 