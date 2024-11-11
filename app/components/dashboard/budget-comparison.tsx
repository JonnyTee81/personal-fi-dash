'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Bar } from "react-chartjs-2"
import { type ChartData } from "@/lib/chart-setup"
import { useThemeColors } from "@/hooks/use-theme-colors"
import { createChartOptions } from "@/lib/chart-setup"
import { ArrowUpRight, ArrowDownRight } from "lucide-react"

export function BudgetComparison() {
  const colors = useThemeColors()
  const { barChartOptions } = createChartOptions(colors)

  const categories = ['Housing', 'Food', 'Transport', 'Utilities', 'Shopping', 'Entertainment']
  
  const data: ChartData<'bar'> = {
    labels: categories,
    datasets: [
      {
        label: 'Last Month',
        data: [2200, 580, 320, 450, 650, 280],
        backgroundColor: '#6366F1',
        borderRadius: 4,
      },
      {
        label: 'This Month',
        data: [2200, 620, 280, 435, 720, 180],
        backgroundColor: '#14F195',
        borderRadius: 4,
      }
    ]
  }

  const options = {
    ...barChartOptions,
    plugins: {
      ...barChartOptions.plugins,
      legend: {
        display: true,
        position: 'top' as const,
        labels: {
          color: colors.textColor,
          usePointStyle: true,
          pointStyle: 'circle',
        }
      }
    }
  }

  const metrics = categories.map((category, index) => {
    const lastMonth = data.datasets[0].data[index] as number
    const thisMonth = data.datasets[1].data[index] as number
    const change = ((thisMonth - lastMonth) / lastMonth) * 100
    
    return {
      category,
      change,
      amount: Math.abs(thisMonth - lastMonth)
    }
  }).sort((a, b) => Math.abs(b.change) - Math.abs(a.change)).slice(0, 3)

  console.log(data)
  return (
    <Card className="bg-card border-0">
      <CardHeader>
        <CardTitle>Monthly Comparison</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          {metrics.map((metric, index) => (
            <div key={index} className="p-4 rounded-lg bg-accent">
              <p className="font-medium mb-2">{metric.category}</p>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-bold">
                  ${metric.amount.toLocaleString()}
                </span>
                <span className="flex items-center text-sm">
                  {metric.change > 0 ? (
                    <ArrowUpRight className="w-4 h-4 text-red-500" />
                  ) : (
                    <ArrowDownRight className="w-4 h-4 text-green-500" />
                  )}
                  <span className={metric.change > 0 ? 'text-red-500' : 'text-green-500'}>
                    {Math.abs(metric.change).toFixed(1)}%
                  </span>
                </span>
              </div>
            </div>
          ))}
        </div>
        <div className="h-[400px]">
          <Bar data={data} options={options} />
        </div>
      </CardContent>
    </Card>
  )
} 