'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Doughnut } from "react-chartjs-2"
import { type ChartData } from "@/lib/chart-setup"

export function AssetsChart() {
  const data: ChartData<'doughnut'> = {
    labels: ['Gold', 'Stock', 'Land', 'Warehouse'],
    datasets: [{
      data: [15700, 22500, 135000, 120000],
      backgroundColor: ['#F59E0B', '#10B981', '#6366F1', '#8B5CF6'],
      borderWidth: 0,
    }]
  }

  const options = {
    responsive: true,
    cutout: '75%',
    plugins: {
      legend: {
        position: 'right' as const,
        labels: {
          color: '#fff',
          padding: 20,
          font: {
            size: 14
          }
        }
      }
    }
  }

  return (
    <Card className="bg-[#1C1D22] border-0">
      <CardHeader>
        <CardTitle className="text-white">Assets</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px] flex items-center">
          <Doughnut data={data} options={options} />
        </div>
      </CardContent>
    </Card>
  )
} 