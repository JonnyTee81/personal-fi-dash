'use client'

import { Line } from "react-chartjs-2"
import { useThemeColors } from "@/hooks/use-theme-colors"

interface AccountItemProps {
  name: string
  balance: number
  percentChange: number
  sparklineData: number[]
}

export function AccountItem({ name, balance, percentChange, sparklineData }: AccountItemProps) {
  const colors = useThemeColors()

  const sparklineOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
    },
    scales: {
      x: {
        display: false,
      },
      y: {
        display: false,
      },
    },
    elements: {
      point: {
        radius: 0,
      },
      line: {
        borderWidth: 1.5,
      },
    },
  }

  const sparklineChartData = {
    labels: sparklineData.map((_, i) => i),
    datasets: [
      {
        data: sparklineData,
        borderColor: percentChange >= 0 ? '#14F195' : '#FF6B6B',
        tension: 0.4,
        fill: false,
      },
    ],
  }

  return (
    <div className="flex items-center justify-between py-2 px-4 hover:bg-accent/50 rounded-lg transition-colors">
      <div className="flex-1">
        <p className="text-sm font-medium">{name}</p>
        <div className="flex items-center gap-2">
          <span className="text-sm text-muted-foreground">${balance.toLocaleString()}</span>
          <span className={`text-xs ${percentChange >= 0 ? 'text-green-500' : 'text-red-500'}`}>
            {percentChange >= 0 ? '+' : ''}{percentChange}%
          </span>
        </div>
      </div>
      <div className="w-16 h-8">
        <Line data={sparklineChartData} options={sparklineOptions} />
      </div>
    </div>
  )
} 