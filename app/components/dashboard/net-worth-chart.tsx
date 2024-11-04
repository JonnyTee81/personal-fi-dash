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
  
  // Generate sample data with assets and liabilities
  const generateTrendData = () => {
    const assets = [280000, 282000, 285000, 288000, 290000, 291000, 292000, 293000, 293500, 293800, 294000, 293200]
    const liabilities = [16000, 15800, 15500, 15200, 15000, 14800, 14600, 14400, 14200, 14000, 13900, 14822]
    const netWorth = assets.map((asset, i) => asset - liabilities[i])
    
    return { assets, liabilities, netWorth }
  }

  const { assets, liabilities, netWorth } = generateTrendData()

  const data: ChartData<'line'> = {
    labels,
    datasets: [
      {
        label: 'Total Assets',
        data: assets,
        borderColor: '#14F195',
        backgroundColor: 'rgba(20, 241, 149, 0.1)',
        tension: 0.4,
        fill: true,
        borderWidth: 2,
        pointRadius: 0,
      },
      {
        label: 'Net Worth',
        data: netWorth,
        borderColor: '#6366F1',
        backgroundColor: 'rgba(99, 102, 241, 0.1)',
        tension: 0.4,
        fill: true,
        borderWidth: 2,
        pointRadius: 0,
      },
      {
        label: 'Total Liabilities',
        data: liabilities,
        borderColor: '#FF6B6B',
        backgroundColor: 'rgba(255, 107, 107, 0.1)',
        tension: 0.4,
        fill: true,
        borderWidth: 2,
        pointRadius: 0,
      },
    ]
  }

  const options = {
    ...lineChartOptions,
    plugins: {
      ...lineChartOptions.plugins,
      tooltip: {
        ...lineChartOptions.plugins?.tooltip,
        callbacks: {
          label: function(context: any) {
            const label = context.dataset.label || ''
            const value = context.parsed.y
            return `${label}: $${value.toLocaleString()}`
          }
        }
      }
    },
    scales: {
      ...lineChartOptions.scales,
      y: {
        ...lineChartOptions.scales?.y,
        stacked: false,
        grid: {
          color: colors.gridColor,
          drawBorder: false,
        },
        ticks: {
          color: colors.textColor,
          callback: function(value: string | number) {
            if (typeof value === 'number') {
              return `$${value.toLocaleString()}`
            }
            return value
          }
        }
      }
    }
  }

  const metrics = [
    {
      label: "YTD Change",
      value: "+$13,200",
      percentage: "+4.7%",
      trend: "up"
    },
    {
      label: "Monthly Change",
      value: "-$800",
      percentage: "-0.3%",
      trend: "down"
    },
    {
      label: "Average Growth",
      value: "$1,100/mo",
      percentage: "+0.4%",
      trend: "up"
    }
  ]

  return (
    <Card className="bg-card border-0">
      <CardHeader>
        <div className="flex flex-col md:flex-row justify-between gap-4">
          <CardTitle>Net Worth Trend</CardTitle>
          <div className="flex flex-wrap gap-4 md:gap-6">
            {metrics.map((metric, index) => (
              <div key={index} className="flex flex-col items-end">
                <div className="flex items-center gap-1">
                  <span className="text-sm text-muted-foreground">{metric.label}</span>
                  <span className={`text-sm ${
                    metric.trend === 'up' ? 'text-green-500' : 'text-red-500'
                  }`}>
                    {metric.percentage}
                  </span>
                </div>
                <p className="font-semibold">{metric.value}</p>
              </div>
            ))}
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="h-[400px]">
          <Line data={data} options={options} />
        </div>
      </CardContent>
    </Card>
  )
} 