'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Bar } from "react-chartjs-2"
import { type ChartData } from "@/lib/chart-setup"
import { useThemeColors } from "@/hooks/use-theme-colors"
import { createChartOptions } from "@/lib/chart-setup"

export function MonthlyComparison() {
  const colors = useThemeColors()
  const { defaultOptions } = createChartOptions(colors)

  const months = ['January', 'February', 'March']
  const income = [21000, 23000, 24050]
  const spending = [18500, 19200, 20239]
  const net = income.map((inc, idx) => inc - spending[idx])

  const data: ChartData<'bar'> = {
    labels: months,
    datasets: [
      {
        label: 'Income',
        data: income,
        backgroundColor: (context) => {
          const index = context.dataIndex
          return index === 2 ? '#1aff9c' : '#14F195'
        },
        borderRadius: 6,
      },
      {
        label: 'Spending',
        data: spending,
        backgroundColor: (context) => {
          const index = context.dataIndex
          return index === 2 ? '#ff8080' : '#FF6B6B'
        },
        borderRadius: 6,
      },
      {
        label: 'Net',
        data: net,
        backgroundColor: (context) => {
          const index = context.dataIndex
          return index === 2 ? '#7a7cff' : '#6366F1'
        },
        borderRadius: 6,
      }
    ]
  }

  const options = {
    ...defaultOptions,
    plugins: {
      ...defaultOptions.plugins,
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
        ...defaultOptions.plugins?.tooltip,
        callbacks: {
          label: function(context: any) {
            const label = context.dataset.label || ''
            const value = context.parsed.y
            return `${label}: $${value.toLocaleString()}`
          },
          title: function(context: any) {
            const title = context[0].label
            return title === 'March' ? `${title} (Current)` : title
          }
        }
      }
    },
    scales: {
      ...defaultOptions.scales,
      x: {
        ...defaultOptions.scales?.x,
        grid: {
          display: false,
        },
        ticks: {
          color: (context: any) => {
            const label = context.tick.label
            return label === 'March' ? '#14F195' : colors.textColor
          },
          callback: (value: any, index: number) => {
            const label = months[index]
            return label === 'March' ? `${label} (Current)` : label
          }
        }
      },
      y: {
        ...defaultOptions.scales?.y,
        grid: {
          color: colors.gridColor,
        },
        ticks: {
          color: colors.textColor,
          callback: (value: any) => `$${value.toLocaleString()}`
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