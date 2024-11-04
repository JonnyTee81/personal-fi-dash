'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Doughnut } from "react-chartjs-2"
import { type ChartData } from "@/lib/chart-setup"
import { useThemeColors } from "@/hooks/use-theme-colors"
import { createChartOptions } from "@/lib/chart-setup"
import { Briefcase, TrendingUp, AlertTriangle } from "lucide-react"

export function InvestmentAllocation() {
  const colors = useThemeColors()
  const { doughnutOptions } = createChartOptions(colors)

  const data: ChartData<'doughnut'> = {
    labels: ['US Stocks', 'International Stocks', 'Bonds', 'Real Estate', 'Cash', 'Crypto'],
    datasets: [{
      data: [40, 20, 15, 15, 5, 5],
      backgroundColor: ['#14F195', '#FF6B6B', '#4ECDC4', '#FFD93D', '#6366F1', '#8B5CF6'],
      borderWidth: 0,
    }]
  }

  const metrics = [
    {
      label: "Risk Level",
      value: "Moderate-Aggressive",
      icon: <AlertTriangle className="w-5 h-5 text-yellow-500" />,
      description: "Based on current allocation"
    },
    {
      label: "Expected Return",
      value: "8-10% Annual",
      icon: <TrendingUp className="w-5 h-5 text-green-500" />,
      description: "Historical average"
    },
    {
      label: "Portfolio Balance",
      value: "$293,200",
      icon: <Briefcase className="w-5 h-5 text-blue-500" />,
      description: "Total invested assets"
    }
  ]

  return (
    <Card className="bg-card border-0">
      <CardHeader>
        <CardTitle>Investment Allocation</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          {metrics.map((metric, index) => (
            <div key={index} className="p-4 rounded-lg bg-accent">
              <div className="flex items-center gap-2 mb-2">
                {metric.icon}
                <p className="font-medium">{metric.label}</p>
              </div>
              <p className="text-xl font-bold mb-1">{metric.value}</p>
              <p className="text-sm text-muted-foreground">{metric.description}</p>
            </div>
          ))}
        </div>
        <div className="h-[300px] flex items-center">
          <Doughnut data={data} options={doughnutOptions} />
        </div>
      </CardContent>
    </Card>
  )
} 