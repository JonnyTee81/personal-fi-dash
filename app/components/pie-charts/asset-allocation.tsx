'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Doughnut } from "react-chartjs-2"
import { type ChartData } from "@/lib/chart-setup"
import { useThemeColors } from "@/hooks/use-theme-colors"
import { createChartOptions } from "@/lib/chart-setup"

export function AssetAllocation() {
  const colors = useThemeColors()
  const { doughnutOptions } = createChartOptions(colors)

  const data: ChartData<'doughnut'> = {
    labels: ['Stocks', 'Bonds', 'Real Estate', 'Cash', 'Crypto', 'Other'],
    datasets: [{
      data: [45, 20, 15, 10, 5, 5],
      backgroundColor: ['#14F195', '#FF6B6B', '#4ECDC4', '#FFD93D', '#6366F1', '#8B5CF6'],
      borderWidth: 0,
    }]
  }

  const customOptions = {
    ...doughnutOptions,
    plugins: {
      ...doughnutOptions.plugins,
      tooltip: {
        ...doughnutOptions.plugins?.tooltip,
        callbacks: {
          label: function(context: any) {
            const value = context.raw;
            const total = context.dataset.data.reduce((a: number, b: number) => a + b, 0);
            const percentage = ((value / total) * 100).toFixed(1);
            return `${context.label}: ${percentage}%`;
          }
        }
      }
    }
  }

  return (
    <Card className="bg-card border-0">
      <CardHeader>
        <CardTitle>Asset Allocation</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[400px] flex items-center">
          <Doughnut data={data} options={customOptions} />
        </div>
      </CardContent>
    </Card>
  )
} 