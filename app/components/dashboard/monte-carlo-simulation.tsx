'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Line } from "react-chartjs-2"
import { type ChartData } from "@/lib/chart-setup"
import { useThemeColors } from "@/hooks/use-theme-colors"
import { createChartOptions } from "@/lib/chart-setup"
import { TrendingUp, Target, AlertTriangle } from "lucide-react"

export function MonteCarloSimulation() {
  const colors = useThemeColors()
  const { lineChartOptions } = createChartOptions(colors)

  // Generate simulation paths
  const generatePath = (startValue: number, years: number, volatility: number, return_rate: number) => {
    const path = [startValue]
    for (let i = 1; i < years; i++) {
      const randomReturn = return_rate + volatility * (Math.random() * 2 - 1)
      path.push(Math.round(path[i - 1] * (1 + randomReturn / 100)))
    }
    return path
  }

  const years = Array.from({ length: 30 }, (_, i) => 2024 + i)
  const simulations = Array.from({ length: 3 }, () => 
    generatePath(278378, 30, 15, 8)
  )

  const data: ChartData<'line'> = {
    labels: years,
    datasets: [
      {
        label: 'Optimistic',
        data: simulations[0],
        borderColor: '#14F195',
        borderWidth: 2,
        tension: 0.4,
        pointRadius: 0,
      },
      {
        label: 'Most Likely',
        data: simulations[1],
        borderColor: '#FFD93D',
        borderWidth: 2,
        tension: 0.4,
        pointRadius: 0,
      },
      {
        label: 'Conservative',
        data: simulations[2],
        borderColor: '#FF6B6B',
        borderWidth: 2,
        tension: 0.4,
        pointRadius: 0,
      },
    ]
  }

  const metrics = [
    {
      label: "Success Rate",
      value: "85%",
      icon: <Target className="w-5 h-5 text-green-500" />,
      description: "Probability of meeting retirement goal"
    },
    {
      label: "Risk Level",
      value: "Moderate",
      icon: <AlertTriangle className="w-5 h-5 text-yellow-500" />,
      description: "Based on current allocation"
    },
    {
      label: "Expected Return",
      value: "8.5%",
      icon: <TrendingUp className="w-5 h-5 text-blue-500" />,
      description: "Long-term annual return"
    }
  ]

  return (
    <Card className="bg-card border-0">
      <CardHeader>
        <CardTitle>Monte Carlo Simulation</CardTitle>
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