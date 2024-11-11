'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Bar } from "react-chartjs-2"
import { type ChartData } from "@/lib/chart-setup"
import { useThemeColors } from "@/hooks/use-theme-colors"
import { createChartOptions } from "@/lib/chart-setup"
import { ArrowUpRight, ArrowDownRight } from "lucide-react"

export function BillsHistory() {
  const colors = useThemeColors()
  const { barChartOptions } = createChartOptions(colors)

  // Generate last 30 days dates
  const generateDates = () => {
    const dates = []
    const today = new Date()
    for (let i = 29; i >= 0; i--) {
      const date = new Date(today)
      date.setDate(today.getDate() - i)
      dates.push(date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }))
    }
    return dates
  }

  // Sample bill payment data
  const generateBillData = () => {
    const baseAmounts = [
      2200, // Rent
      150,  // Electricity
      89,   // Internet
      180,  // Insurance
      85,   // Phone
      15.99 // Netflix
    ]
    
    return Array(30).fill(0).map((_, index) => {
      // Simulate bill payments on specific days
      if (index === 0) return baseAmounts[0] // Rent on 1st
      if (index === 4) return baseAmounts[1] + baseAmounts[2] // Utilities on 5th
      if (index === 14) return baseAmounts[3] + baseAmounts[4] // Insurance & Phone on 15th
      if (index === 19) return baseAmounts[5] // Subscription on 20th
      return 0
    })
  }

  const data: ChartData<'bar'> = {
    labels: generateDates(),
    datasets: [{
      data: generateBillData(),
      backgroundColor: (context) => {
        const value = context.raw as number
        return value > 1000 ? '#FF6B6B' : // High amount (red)
               value > 500 ? '#FFD93D' :   // Medium amount (yellow)
               '#14F195'                   // Low amount (green)
      },
      borderRadius: 4,
      maxBarThickness: 40,
    }]
  }

  const options = {
    ...barChartOptions,
    plugins: {
      ...barChartOptions.plugins,
      tooltip: {
        ...barChartOptions.plugins?.tooltip,
        callbacks: {
          title: (tooltipItems: any) => {
            return `Bills Paid - ${tooltipItems[0].label}`
          },
        }
      }
    },
    scales: {
      ...barChartOptions.scales,
      x: {
        ...barChartOptions.scales?.x,
        grid: {
          display: false,
        },
        ticks: {
          maxRotation: 45,
          minRotation: 45,
        }
      },
      y: {
        ...barChartOptions.scales?.y,
        beginAtZero: true,
        grid: {
          color: colors.gridColor,
        },
      }
    }
  }

  // Calculate metrics
  const billData = generateBillData()
  const totalPaid = billData.reduce((sum, amount) => sum + amount, 0)
  const previousMonthTotal = 3150 // Example previous month total
  const monthlyChange = ((totalPaid - previousMonthTotal) / previousMonthTotal) * 100

  return (
    <Card className="bg-card border-0">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Bills History</CardTitle>
        <div className="flex items-center gap-4">
          <div>
            <p className="text-sm text-muted-foreground">Total Paid</p>
            <p className="text-2xl font-bold">${totalPaid.toLocaleString()}</p>
          </div>
          <div className="flex items-center gap-1">
            {monthlyChange > 0 ? (
              <ArrowUpRight className="w-4 h-4 text-red-500" />
            ) : (
              <ArrowDownRight className="w-4 h-4 text-green-500" />
            )}
            <span className={monthlyChange > 0 ? "text-red-500" : "text-green-500"}>
              {Math.abs(monthlyChange).toFixed(1)}%
            </span>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="h-[400px]">
          <Bar data={data} options={options} />
        </div>
      </CardContent>
    </Card>
  )
} 