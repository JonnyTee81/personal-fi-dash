'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Doughnut } from "react-chartjs-2"
import { createChartOptions } from '@/lib/chart-setup'

export function AssetsChart() {
  const data = {
    labels: ['Gold', 'Stock', 'Land', 'Warehouse'],
    datasets: [{
      data: [15700, 22500, 135000, 120000],
      backgroundColor: ['#F59E0B', '#10B981', '#6366F1', '#8B5CF6'],
      borderWidth: 0,
    }]
  }

  const { doughnutOptions } = createChartOptions({
    gridColor: '#2D2E33',
    textColor: '#9CA3AF',
    tooltipBackground: '#1C1D22',
    tooltipText: '#FFFFFF'
  })

  return (
    <Card className="bg-[#1C1D22] border-0">
      <CardHeader>
        <CardTitle className="text-white">Assets</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px] flex items-center">
          <Doughnut data={data} options={doughnutOptions} />
        </div>
      </CardContent>
    </Card>
  )
} 