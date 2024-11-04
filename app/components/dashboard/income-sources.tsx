'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Bar } from "react-chartjs-2"
import { type ChartData, createChartOptions } from "@/lib/chart-setup"

export function IncomeSources() {
  const data: ChartData<'bar'> = {
    labels: ['E-commerce', 'Google Adsense', 'My Shop', 'Salary'],
    datasets: [{
      data: [2100, 950, 8000, 13000],
      backgroundColor: ['#FF6B6B', '#4ECDC4', '#45B7D1', '#14F195'],
      borderRadius: 8,
    }]
  }

  const { defaultOptions } = createChartOptions({
    gridColor: '#2D2E33',
    textColor: '#9CA3AF',
    tooltipBackground: '#1C1D22',
    tooltipText: '#FFFFFF'
  })

  const options = {
    ...defaultOptions,
    indexAxis: 'x' as const,
  }

  return (
    <Card className="bg-[#1C1D22] border-0">
      <CardHeader>
        <CardTitle className="text-white">Income Source</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[200px]">
          <Bar data={data} options={options} />
        </div>
      </CardContent>
    </Card>
  )
} 