'use client'

import '@/lib/chart-registry'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Bar } from "react-chartjs-2"
import { useThemeColors } from "@/hooks/use-theme-colors"
import { createChartOptions, type ChartData } from "@/lib/chart-setup"
import { useEffect, useState } from "react"
import { financialService } from "@/services/financial-service"
import { formatCurrency } from "@/lib/utils"

export function MonthlyComparison() {
  const colors = useThemeColors()
  const { barChartOptions } = createChartOptions(colors)
  const [comparisonData, setComparisonData] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function loadData() {
      try {
        const data = await financialService.getMonthlyComparison()
        setComparisonData(data)
      } catch (error) {
        console.error('Failed to load monthly comparison data:', error)
      } finally {
        setIsLoading(false)
      }
    }

    loadData()
  }, [])

  if (isLoading || !comparisonData) {
    return <div>Loading...</div>
  }

  const data: ChartData<'bar'> = {
    labels: comparisonData.months,
    datasets: [
      {
        label: 'Income',
        data: comparisonData.income,
        backgroundColor: (context) => {
          const index = context.dataIndex
          return index === comparisonData.months.length - 1 ? '#1aff9c' : '#14F195'
        },
        borderRadius: 6,
      },
      {
        label: 'Spending',
        data: comparisonData.spending,
        backgroundColor: (context) => {
          const index = context.dataIndex
          return index === comparisonData.months.length - 1 ? '#ff8080' : '#FF6B6B'
        },
        borderRadius: 6,
      },
      {
        label: 'Net',
        data: comparisonData.net,
        backgroundColor: (context) => {
          const index = context.dataIndex
          return index === comparisonData.months.length - 1 ? '#7a7cff' : '#6366F1'
        },
        borderRadius: 6,
      }
    ]
  }

  const options = {
    ...barChartOptions,
    plugins: {
      ...barChartOptions.plugins,
      legend: {
        display: true,
        position: 'bottom' as const,
        align: 'end' as const,
        labels: {
          color: colors.textColor,
          usePointStyle: true,
          pointStyle: 'circle',
          padding: 20,
          font: {
            size: 12,
            family: 'Helvetica',
          }
        }
      },
      tooltip: {
        ...barChartOptions.plugins?.tooltip,
        callbacks: {
          label: function(context: any) {
            const label = context.dataset.label || ''
            const value = context.parsed.y
            return `${label}: ${formatCurrency(value)}`
          },
          title: function(context: any) {
            const title = context[0].label
            return title === comparisonData.months[comparisonData.months.length - 1] 
              ? `${title} (Current)` 
              : title
          }
        }
      }
    },
    scales: {
      ...barChartOptions.scales,
      x: {
        ...barChartOptions.scales?.x,
        grid: {
          display: false,
        },
        ticks: {
          color: (context: any) => {
            const label = comparisonData.months[context.index]
            return label === comparisonData.months[comparisonData.months.length - 1] 
              ? '#14F195' 
              : colors.textColor
          },
          callback: (value: any, index: number) => {
            const label = comparisonData.months[index]
            return label === comparisonData.months[comparisonData.months.length - 1] 
              ? `${label} (Current)` 
              : label
          }
        }
      },
      y: {
        ...barChartOptions.scales?.y,
        grid: {
          color: colors.gridColor,
        },
        ticks: {
          color: colors.textColor,
          callback: (value: any) => formatCurrency(value)
        }
      }
    },
    barPercentage: 0.7,
    categoryPercentage: 0.8,
  }

  return (
    <Card className="bg-card border-0">
      <CardHeader>
        <CardTitle>Cash Flow</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <Bar data={data} options={options} />
        </div>
      </CardContent>
    </Card>
  )
} 