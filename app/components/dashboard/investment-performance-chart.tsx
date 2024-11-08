'use client'

import { Line } from "react-chartjs-2"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useThemeColors } from "@/hooks/use-theme-colors"
import { createChartOptions, type ChartData } from "@/lib/chart-setup"

export function InvestmentPerformanceChart() {
  const colors = useThemeColors()
  const { lineChartOptions } = createChartOptions(colors)

  const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

  const portfolioData = [100, 105, 110, 115, 120, 125, 130, 135, 140, 145, 150, 155]
  const spData = [100, 102, 104, 106, 108, 110, 112, 114, 116, 118, 120, 122]

  const data: ChartData<'line'> = {
    labels,
    datasets: [
      {
        label: 'Investment Portfolio',
        data: portfolioData,
        borderColor: '#6366F1',
        backgroundColor: 'rgba(99, 102, 241, 0.2)',
        tension: 0.4,
        fill: true,
        borderWidth: 2,
      },
      {
        label: 'S&P 500',
        data: spData,
        borderColor: '#FF6B6B',
        backgroundColor: 'rgba(255, 107, 107, 0.2)',
        tension: 0.4,
        fill: true,
        borderWidth: 2,
      },
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
            const label = context.dataset.label || ''
            const value = context.parsed.y
            return `${label}: ${value.toFixed(2)}`
          }
        }
      }
    },
    scales: {
      ...lineChartOptions.scales,
      y: {
        ...lineChartOptions.scales?.y,
        grid: {
          color: colors.gridColor,
          drawBorder: false,
        },
        ticks: {
          color: colors.textColor,
          callback: function(value: string | number) {
            return value.toFixed(0)
          }
        }
      }
    }
  }

  return (
    <Card className="bg-card border-0">
      <CardHeader>
        <CardTitle>Investment Performance</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[200px]">
          <Line data={data} options={options} />
        </div>
      </CardContent>
    </Card>
  )
} 