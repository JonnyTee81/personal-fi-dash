'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Line } from "react-chartjs-2"
import { type ChartData } from "@/lib/chart-setup"

export function IncomeExpensesChart() {
  const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  
  const data: ChartData<'line'> = {
    labels,
    datasets: [
      {
        label: 'Income',
        data: [15000, 18000, 21000, 24000, 19000, 22000, 25000, 23000, 20000, 24000, 22000, 20239],
        borderColor: '#14F195',
        tension: 0.4,
        borderWidth: 2,
        pointRadius: 0,
      },
      {
        label: 'Expenses',
        data: [12000, 14000, 11000, 15000, 18000, 17000, 13000, 16000, 15000, 14000, 16000, 20239],
        borderColor: '#FF6B6B',
        tension: 0.4,
        borderWidth: 2,
        pointRadius: 0,
      }
    ]
  }

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top' as const,
        labels: {
          color: '#fff',
          padding: 20,
          font: { size: 14 }
        }
      }
    },
    scales: {
      x: {
        grid: {
          color: '#1C1D22',
        },
        ticks: { color: '#6B7280' }
      },
      y: {
        grid: {
          color: '#1C1D22',
        },
        ticks: { 
          color: '#6B7280',
          callback: (value: number) => `$${value.toLocaleString()}`
        }
      }
    }
  }

  return (
    <Card className="bg-[#1C1D22] border-0">
      <CardHeader>
        <CardTitle className="text-white">Income & Expenses</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <Line data={data} options={options} />
        </div>
      </CardContent>
    </Card>
  )
} 