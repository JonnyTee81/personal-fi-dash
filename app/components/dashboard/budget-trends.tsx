'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Line } from "react-chartjs-2"
import { type ChartData } from "@/lib/chart-setup"
import { useThemeColors } from "@/hooks/use-theme-colors"
import { createChartOptions } from "@/lib/chart-setup"

export function BudgetTrends() {
  const colors = useThemeColors()
  const { lineChartOptions } = createChartOptions(colors)

  const data: ChartData<'line'> = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Budget',
        data: [5000, 5000, 5200, 5200, 5200, 5200, 5200, 5200, 5200, 5200, 5200, 5200],
        borderColor: '#6366F1',
        borderDash: [5, 5],
        tension: 0,
        borderWidth: 2,
        pointRadius: 0,
      },
      {
        label: 'Actual Spending',
        data: [4800, 5100, 3180, null, null, null, null, null, null, null, null, null],
        borderColor: '#14F195',
        backgroundColor: 'rgba(20, 241, 149, 0.1)',
        tension: 0.4,
        fill: true,
        borderWidth: 2,
      }
    ]
  }

  const options = {
    ...lineChartOptions,
    plugins: {
      ...lineChartOptions.plugins,
      tooltip: {
        ...lineChartOptions.plugins?.tooltip,
        callbacks: {
          label: function(context: any) {
            return `${context.dataset.label}: $${Math.round(context.raw).toLocaleString()}`
          }
        }
      }
    }
  }

  return (
    <Card className="bg-card border-0">
      <CardHeader>
        <CardTitle>Budget Trends</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[400px]">
          <Line data={data} options={options} />
        </div>
      </CardContent>
    </Card>
  )
} 