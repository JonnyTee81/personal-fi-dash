'use client'

import '@/lib/chart-registry'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Line } from "react-chartjs-2"
import { useThemeColors } from "@/hooks/use-theme-colors"
import { createChartOptions, type ChartData } from "@/lib/chart-setup"
import { useEffect, useState } from "react"
import { financialService } from "@/services/financial-service"
import { formatCurrency } from "@/lib/utils"

export function NetWorthChart() {
  const colors = useThemeColors()
  const { lineChartOptions } = createChartOptions(colors)
  const [netWorthData, setNetWorthData] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function loadData() {
      try {
        const data = await financialService.getNetWorthTrend()
        setNetWorthData(data)
      } catch (error) {
        console.error('Failed to load net worth data:', error)
      } finally {
        setIsLoading(false)
      }
    }

    loadData()
  }, [])

  if (isLoading || !netWorthData) {
    return <div>Loading...</div>
  }

  const data: ChartData<'line'> = {
    labels: netWorthData.months,
    datasets: [
      {
        label: 'Total Assets',
        data: netWorthData.assets,
        borderColor: '#14F195',
        backgroundColor: 'rgba(20, 241, 149, 0.1)',
        tension: 0.4,
        fill: true,
        borderWidth: 2,
      },
      {
        label: 'Net Worth',
        data: netWorthData.assets.map((asset: number, i: number) => asset - netWorthData.liabilities[i]),
        borderColor: '#6366F1',
        backgroundColor: 'rgba(99, 102, 241, 0.2)',
        tension: 0.4,
        fill: true,
        borderWidth: 2,
      },
      {
        label: 'Total Liabilities',
        data: netWorthData.liabilities,
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
            return `${label}: ${formatCurrency(value)}`
          }
        }
      }
    },
    scales: {
      ...lineChartOptions.scales,
      y: {
        ...lineChartOptions.scales?.y,
        stacked: false,
        grid: {
          color: colors.gridColor,
          drawBorder: false,
        },
        ticks: {
          color: colors.textColor,
          callback: function(value: string | number) {
            if (typeof value === 'number') {
              return `${formatCurrency(value/1000)}k`
            }
            return value
          }
        }
      }
    }
  }

  return (
    <Card className="bg-card border-0">
      <CardHeader>
        <div className="flex flex-col md:flex-row justify-between gap-4">
          <CardTitle>Net Worth Trend</CardTitle>
          <div className="flex flex-wrap gap-4 md:gap-6">
            {netWorthData.metrics.map((metric: any, index: number) => (
              <div key={index} className="flex flex-col items-end">
                <div className="flex items-center gap-1">
                  <span className="text-sm text-muted-foreground">{metric.label}</span>
                  <span className={`text-sm ${
                    metric.trend === 'up' ? 'text-green-500' : 'text-red-500'
                  }`}>
                    {metric.percentage}
                  </span>
                </div>
                <p className="font-semibold">{metric.value}</p>
              </div>
            ))}
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="h-[400px]">
          <Line data={data} options={options} />
        </div>
      </CardContent>
    </Card>
  )
} 