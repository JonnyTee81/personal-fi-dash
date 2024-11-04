'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Line } from "react-chartjs-2"
import { type ChartData } from "@/lib/chart-setup"
import { useThemeColors } from "@/hooks/use-theme-colors"
import { createChartOptions } from "@/lib/chart-setup"
import { TrendingUp, Percent, BarChart3 } from "lucide-react"

export function InvestmentReturns() {
  const colors = useThemeColors()
  const { lineChartOptions } = createChartOptions(colors)

  const data: ChartData<'line'> = {
    labels: ['2019', '2020', '2021', '2022', '2023'],
    datasets: [
      {
        label: 'Portfolio Returns',
        data: [7.2, -2.8, 18.5, -8.4, 12.6],
        borderColor: '#14F195',
        backgroundColor: 'rgba(20, 241, 149, 0.1)',
        tension: 0.4,
        fill: true,
      },
      {
        label: 'Market Benchmark',
        data: [6.8, -4.2, 16.2, -10.2, 11.4],
        borderColor: '#6366F1',
        tension: 0.4,
        borderDash: [5, 5],
      }
    ]
  }

  const metrics = [
    {
      label: "5-Year Average Return",
      value: "8.4%",
      icon: <TrendingUp className="w-5 h-5 text-green-500" />,
      description: "Annualized return since 2019"
    },
    {
      label: "Volatility",
      value: "12.6%",
      icon: <BarChart3 className="w-5 h-5 text-yellow-500" />,
      description: "Standard deviation of returns"
    },
    {
      label: "Alpha",
      value: "2.1%",
      icon: <Percent className="w-5 h-5 text-blue-500" />,
      description: "Excess return vs benchmark"
    }
  ]

  return (
    <Card className="bg-card border-0">
      <CardHeader>
        <CardTitle>Investment Returns Analysis</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          {metrics.map((metric, index) => (
            <div key={index} className="p-4 rounded-lg bg-accent">
              <div className="flex items-center gap-2 mb-2">
                {metric.icon}
                <p className="font-medium">{metric.label}</p>
              </div>
              <p className="text-2xl font-bold mb-1">{metric.value}</p>
              <p className="text-sm text-muted-foreground">{metric.description}</p>
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