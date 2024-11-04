'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Line } from "react-chartjs-2"
import { type ChartData } from "@/lib/chart-setup"
import { useThemeColors } from "@/hooks/use-theme-colors"
import { createChartOptions } from "@/lib/chart-setup"

export function GoalsTimeline() {
  const colors = useThemeColors()
  const { lineChartOptions } = createChartOptions(colors)

  const generateTimelineData = () => {
    const months = Array.from({ length: 24 }, (_, i) => {
      const date = new Date()
      date.setMonth(date.getMonth() + i)
      return date.toLocaleDateString('en-US', { month: 'short', year: '2-digit' })
    })

    const projectedSavings = Array.from({ length: 24 }, (_, i) => {
      // Simulate monthly savings with some variation
      const base = 2000 * (i + 1)
      return base + (Math.random() * 500)
    })

    const targetLine = Array(24).fill(100000)

    return { months, projectedSavings, targetLine }
  }

  const { months, projectedSavings, targetLine } = generateTimelineData()

  const data: ChartData<'line'> = {
    labels: months,
    datasets: [
      {
        label: 'Projected Savings',
        data: projectedSavings,
        borderColor: '#14F195',
        backgroundColor: 'rgba(20, 241, 149, 0.1)',
        tension: 0.4,
        fill: true,
        borderWidth: 2,
      },
      {
        label: 'Target',
        data: targetLine,
        borderColor: '#6366F1',
        borderDash: [5, 5],
        tension: 0,
        borderWidth: 2,
        pointRadius: 0,
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
        <CardTitle>Goals Timeline</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[400px]">
          <Line data={data} options={options} />
        </div>
      </CardContent>
    </Card>
  )
} 