'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Line } from "react-chartjs-2"
import { useThemeColors } from "@/hooks/use-theme-colors"
import { createChartOptions, type ChartData } from "@/lib/chart-setup"
import { ArrowUpRight, ArrowDownRight } from "lucide-react"

export function InvestmentPerformance() {
  const colors = useThemeColors()
  const { lineChartOptions } = createChartOptions(colors)

  const data: ChartData<'line'> = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Portfolio Return',
        data: [0, 2.3, 3.1, 3.8, 4.1, 5.2, 4.8, 6.1, 6.9, 7.2, 8.1, 8.5],
        borderColor: '#14F195',
        tension: 0.4,
        fill: true,
        backgroundColor: 'rgba(20, 241, 149, 0.1)',
      },
      {
        label: 'Benchmark (S&P 500)',
        data: [0, 1.8, 2.5, 3.2, 3.8, 4.5, 4.2, 5.1, 5.8, 6.2, 6.8, 7.2],
        borderColor: '#6366F1',
        tension: 0.4,
        borderDash: [5, 5],
      }
    ]
  }

  const performanceMetrics = [
    { label: 'YTD Return', value: '8.5%', trend: 1.2, color: 'text-green-500' },
    { label: '90 Day Return', value: '1.3%', trend: 0.2, color: 'text-blue-500' },
    { label: '60 Day Return', value: '0.92', trend: -0.05, color: 'text-purple-500' },
    { label: '30 Day Return', value: '1.8', trend: 0.3, color: 'text-yellow-500' },
  ]

  return (
    <Card className="bg-card border-0">
      <CardHeader>
        <CardTitle>Investment Performance</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          {performanceMetrics.map((metric, index) => (
            <div key={index} className="p-4 rounded-lg bg-accent">
              <p className="text-sm text-muted-foreground mb-2">{metric.label}</p>
              <div className="flex items-baseline gap-2">
                <span className={`text-2xl font-bold ${metric.color}`}>
                  {metric.value}
                </span>
                <span className="flex items-center text-sm">
                  {metric.trend > 0 ? (
                    <ArrowUpRight className="w-4 h-4 text-green-500" />
                  ) : (
                    <ArrowDownRight className="w-4 h-4 text-red-500" />
                  )}
                  {Math.abs(metric.trend)}
                </span>
              </div>
            </div>
          ))}
        </div>
        <div className="h-[300px]">
          <Line data={data} options={lineChartOptions} />
        </div>
      </CardContent>
    </Card>
  )
} 