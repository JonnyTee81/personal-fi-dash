'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Line } from "react-chartjs-2"
import { type ChartData } from "@/lib/chart-setup"
import { useThemeColors } from "@/hooks/use-theme-colors"
import { createChartOptions } from "@/lib/chart-setup"

export function NetWorthChart() {
  const colors = useThemeColors()
  const { lineChartOptions } = createChartOptions(colors)
  
  const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  
  const data: ChartData<'line'> = {
    labels,
    datasets: [
      {
        label: 'Net Worth',
        data: [240000, 245000, 255000, 258000, 262000, 268000, 270000, 272000, 275000, 276000, 277000, 278378],
        borderColor: '#14F195',
        backgroundColor: 'rgba(20, 241, 149, 0.1)',
        tension: 0.4,
        borderWidth: 2,
        fill: true,
        pointRadius: 0,
      }
    ]
  }

  const options = {
    ...lineChartOptions,
    plugins: {
      ...lineChartOptions.plugins,
      legend: {
        display: false
      }
    }
  }

  return (
    <Card className="bg-card border-0">
      <CardHeader>
        <CardTitle>Net Worth Trend</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[400px]">
          <Line data={data} options={options} />
        </div>
      </CardContent>
    </Card>
  )
} 