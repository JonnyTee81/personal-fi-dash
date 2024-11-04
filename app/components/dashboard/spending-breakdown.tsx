'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Bar } from "react-chartjs-2"
import { defaultOptions, type ChartData } from "@/lib/chart-setup"

export function SpendingBreakdown() {
  const data: ChartData<'bar'> = {
    labels: ['Housing', 'Personal', 'Transportation'],
    datasets: [{
      data: [3452, 45581, 2190],
      backgroundColor: ['#9333EA', '#EC4899', '#F97316'],
      borderRadius: 8,
    }]
  }

  const options = {
    ...defaultOptions,
    indexAxis: 'y' as const,
  }

  return (
    <Card className="bg-[#1C1D22] border-0">
      <CardHeader>
        <CardTitle className="text-white">Spending Breakdown</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[200px]">
          <Bar data={data} options={options} />
        </div>
      </CardContent>
    </Card>
  )
} 