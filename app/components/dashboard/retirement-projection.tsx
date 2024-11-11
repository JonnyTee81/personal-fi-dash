'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Line } from "react-chartjs-2"
import { type ChartData } from "@/lib/chart-setup"
import { useThemeColors } from "@/hooks/use-theme-colors"
import { createChartOptions } from "@/lib/chart-setup"
import { Calculator, Target } from "lucide-react"

export function RetirementProjection() {
  const colors = useThemeColors()
  const { lineChartOptions } = createChartOptions(colors)

  const currentAge = 30
  const retirementAge = 65
  const years = Array.from({ length: retirementAge - currentAge + 1 }, (_, i) => currentAge + i)
  
  const data: ChartData<'line'> = {
    labels: years.map(String),
    datasets: [
      {
        label: 'Conservative Growth (6%)',
        data: years.map(year => {
          const timeInvesting = year - currentAge
          return Math.round(278378 * Math.pow(1.06, timeInvesting))
        }),
        borderColor: '#FF6B6B',
        tension: 0.4,
        borderWidth: 2,
        pointRadius: 0,
      },
      {
        label: 'Moderate Growth (8%)',
        data: years.map(year => {
          const timeInvesting = year - currentAge
          return Math.round(278378 * Math.pow(1.08, timeInvesting))
        }),
        borderColor: '#14F195',
        tension: 0.4,
        borderWidth: 2,
        pointRadius: 0,
      },
      {
        label: 'Aggressive Growth (10%)',
        data: years.map(year => {
          const timeInvesting = year - currentAge
          return Math.round(278378 * Math.pow(1.10, timeInvesting))
        }),
        borderColor: '#6366F1',
        tension: 0.4,
        borderWidth: 2,
        pointRadius: 0,
      },
    ]
  }

  const projectionMetrics = [
    {
      label: "Target Retirement Age",
      value: "65",
      icon: <Target className="w-5 h-5 text-blue-500" />,
      description: "Years until retirement: 35"
    },
    {
      label: "Projected Net Worth",
      value: "$2.1M - $4.8M",
      icon: <Calculator className="w-5 h-5 text-green-500" />,
      description: "Based on current savings rate"
    }
  ]

  return (
    <Card className="bg-card border-0">
      <CardHeader>
        <CardTitle>Retirement Projection</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          {projectionMetrics.map((metric, index) => (
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