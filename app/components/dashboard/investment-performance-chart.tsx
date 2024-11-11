'use client'

import '@/lib/chart-registry'
import { Line } from "react-chartjs-2"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useThemeColors } from "@/hooks/use-theme-colors"
import { createChartOptions, type ChartData } from "@/lib/chart-setup"
import { useEffect, useState } from "react"
import { financialService } from "@/services/financial-service"
import { PortfolioSummary } from "@/types/financial"

export function InvestmentPerformanceChart() {
  const colors = useThemeColors()
  const { lineChartOptions } = createChartOptions(colors)
  const [portfolioData, setPortfolioData] = useState<PortfolioSummary | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function loadData() {
      try {
        const summary = await financialService.getPortfolioSummary()
        setPortfolioData(summary)
      } catch (error) {
        console.error('Failed to load portfolio data:', error)
      } finally {
        setIsLoading(false)
      }
    }

    loadData()
  }, [])

  if (isLoading || !portfolioData) {
    return <div>Loading...</div>
  }

  const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

  const data: ChartData<'line'> = {
    labels,
    datasets: [
      {
        label: 'Portfolio Performance',
        data: [100, 105, 110, 115, 120, 125, 130, 135, 140, 145, 150, 155],
        borderColor: '#6366F1',
        backgroundColor: 'rgba(99, 102, 241, 0.1)',
        tension: 0.4,
        fill: true,
        borderWidth: 2,
      },
      {
        label: 'S&P 500',
        data: [100, 102, 104, 106, 108, 110, 112, 114, 116, 118, 120, 122],
        borderColor: '#FF6B6B',
        backgroundColor: 'rgba(255, 107, 107, 0.1)',
        tension: 0.4,
        fill: true,
        borderWidth: 2,
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
            if (typeof context.parsed.y === 'number') {
              return `${label}: ${context.parsed.y.toFixed(2)}`
            }
            return label
          }
        }
      }
    }
  }

  return (
    <Card className="bg-card border-0">
      <CardHeader>
        <div className="flex flex-col md:flex-row justify-between gap-4">
          <CardTitle>Investment Performance</CardTitle>
          <div className="flex items-center gap-4">
            <div className="text-right">
              <p className="text-sm text-muted-foreground">YTD Return</p>
              <p className={`text-lg font-semibold ${portfolioData.yearChangePercent >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                {portfolioData.yearChangePercent >= 0 ? '+' : ''}
                {portfolioData.yearChangePercent.toFixed(1)}%
              </p>
            </div>
            <div className="text-right">
              <p className="text-sm text-muted-foreground">1M Return</p>
              <p className={`text-lg font-semibold ${portfolioData.monthChangePercent >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                {portfolioData.monthChangePercent >= 0 ? '+' : ''}
                {portfolioData.monthChangePercent.toFixed(1)}%
              </p>
            </div>
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