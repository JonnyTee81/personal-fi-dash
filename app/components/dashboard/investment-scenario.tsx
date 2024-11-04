'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Line } from "react-chartjs-2"
import { type ChartData } from "@/lib/chart-setup"
import { useThemeColors } from "@/hooks/use-theme-colors"
import { createChartOptions } from "@/lib/chart-setup"
import { TrendingUp, Zap, DollarSign } from "lucide-react"

export function InvestmentScenario() {
  const colors = useThemeColors()
  const { lineChartOptions } = createChartOptions(colors)

  const generateScenario = (initialAmount: number, years: number, rate: number, monthlyContribution: number) => {
    const data = [initialAmount]
    for (let i = 1; i <= years * 12; i++) {
      const monthlyRate = rate / 12 / 100
      const amount = data[i - 1] * (1 + monthlyRate) + monthlyContribution
      if (i % 12 === 0) {
        data.push(Math.round(amount))
      }
    }
    return data
  }

  const years = Array.from({ length: 11 }, (_, i) => 2024 + i)
  const initialAmount = 278378

  const data: ChartData<'line'> = {
    labels: years,
    datasets: [
      {
        label: 'Aggressive (12% return)',
        data: generateScenario(initialAmount, 10, 12, 2000),
        borderColor: '#14F195',
        tension: 0.4,
        borderWidth: 2,
        pointRadius: 0,
      },
      {
        label: 'Moderate (8% return)',
        data: generateScenario(initialAmount, 10, 8, 2000),
        borderColor: '#FFD93D',
        tension: 0.4,
        borderWidth: 2,
        pointRadius: 0,
      },
      {
        label: 'Conservative (4% return)',
        data: generateScenario(initialAmount, 10, 4, 2000),
        borderColor: '#FF6B6B',
        tension: 0.4,
        borderWidth: 2,
        pointRadius: 0,
      },
    ]
  }

  const scenarios = [
    {
      label: "Aggressive Growth",
      value: "$892,450",
      icon: <Zap className="w-5 h-5 text-green-500" />,
      description: "Potential value in 10 years"
    },
    {
      label: "Monthly Investment",
      value: "$2,000",
      icon: <DollarSign className="w-5 h-5 text-blue-500" />,
      description: "Regular contribution"
    },
    {
      label: "Total Return",
      value: "221%",
      icon: <TrendingUp className="w-5 h-5 text-purple-500" />,
      description: "Best case scenario"
    }
  ]

  return (
    <Card className="bg-card border-0">
      <CardHeader>
        <CardTitle>Investment Scenario Analysis</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          {scenarios.map((scenario, index) => (
            <div key={index} className="p-4 rounded-lg bg-accent">
              <div className="flex items-center gap-2 mb-2">
                {scenario.icon}
                <p className="font-medium">{scenario.label}</p>
              </div>
              <p className="text-2xl font-bold mb-1">{scenario.value}</p>
              <p className="text-sm text-muted-foreground">{scenario.description}</p>
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