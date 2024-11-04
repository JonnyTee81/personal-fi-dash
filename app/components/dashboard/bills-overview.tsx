'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Doughnut } from "react-chartjs-2"
import { type ChartData } from "@/lib/chart-setup"
import { useThemeColors } from "@/hooks/use-theme-colors"
import { createChartOptions } from "@/lib/chart-setup"
import { Calendar, DollarSign, Clock } from "lucide-react"

export function BillsOverview() {
  const colors = useThemeColors()
  const { doughnutOptions } = createChartOptions(colors)

  const data: ChartData<'doughnut'> = {
    labels: ['Utilities', 'Subscriptions', 'Insurance', 'Rent/Mortgage', 'Other'],
    datasets: [{
      data: [450, 120, 380, 2200, 300],
      backgroundColor: ['#14F195', '#FF6B6B', '#4ECDC4', '#FFD93D', '#6366F1'],
      borderWidth: 0,
    }]
  }

  const metrics = [
    {
      label: "Total Due This Month",
      value: "$3,450",
      icon: <DollarSign className="w-5 h-5 text-green-500" />,
      description: "Next due: March 1"
    },
    {
      label: "Upcoming Bills",
      value: "8",
      icon: <Calendar className="w-5 h-5 text-blue-500" />,
      description: "Next 30 days"
    },
    {
      label: "Average Monthly",
      value: "$3,280",
      icon: <Clock className="w-5 h-5 text-purple-500" />,
      description: "Last 6 months"
    }
  ]

  return (
    <Card className="bg-card border-0">
      <CardHeader>
        <CardTitle>Bills Overview</CardTitle>
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
        <div className="h-[300px] flex items-center">
          <Doughnut data={data} options={doughnutOptions} />
        </div>
      </CardContent>
    </Card>
  )
} 