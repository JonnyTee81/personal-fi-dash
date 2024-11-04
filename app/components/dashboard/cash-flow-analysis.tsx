'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Line } from "react-chartjs-2"
import { type ChartData } from "@/lib/chart-setup"
import { useThemeColors } from "@/hooks/use-theme-colors"
import { createChartOptions } from "@/lib/chart-setup"
import { ArrowUpRight, ArrowDownRight, DollarSign, Wallet } from "lucide-react"

export function CashFlowAnalysis() {
  const colors = useThemeColors()
  const { lineChartOptions } = createChartOptions(colors)

  const data: ChartData<'line'> = {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
    datasets: [
      {
        label: 'Income',
        data: [6000, 5200, 7800, 5050],
        borderColor: '#14F195',
        backgroundColor: 'rgba(20, 241, 149, 0.1)',
        tension: 0.4,
        fill: true,
      },
      {
        label: 'Expenses',
        data: [4500, 3800, 5200, 4739],
        borderColor: '#FF6B6B',
        backgroundColor: 'rgba(255, 107, 107, 0.1)',
        tension: 0.4,
        fill: true,
      }
    ]
  }

  const metrics = [
    {
      label: "Monthly Cash Flow",
      value: "+$5,811",
      trend: 12.5,
      icon: <DollarSign className="w-5 h-5 text-green-500" />,
    },
    {
      label: "Cash Buffer",
      value: "3.2 months",
      trend: -0.5,
      icon: <Wallet className="w-5 h-5 text-blue-500" />,
    }
  ]

  return (
    <Card className="bg-card border-0">
      <CardHeader>
        <CardTitle>Cash Flow Analysis</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          {metrics.map((metric, index) => (
            <div key={index} className="p-4 rounded-lg bg-accent">
              <div className="flex items-center gap-2 mb-2">
                {metric.icon}
                <p className="font-medium">{metric.label}</p>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-bold">{metric.value}</span>
                <span className="flex items-center text-sm">
                  {metric.trend > 0 ? (
                    <ArrowUpRight className="w-4 h-4 text-green-500" />
                  ) : (
                    <ArrowDownRight className="w-4 h-4 text-red-500" />
                  )}
                  {Math.abs(metric.trend)}%
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