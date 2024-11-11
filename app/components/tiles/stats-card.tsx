'use client'

import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { useEffect, useState } from "react"
import { financialService } from "@/services/financial-service"

interface StatsCardProps {
  title: string
  className?: string
  cardType?: string
  value: string
  trend?: number
  timeframe?: string
  description?: string
}

interface StatsData {
  value: number
  trend: number
  timeframe: string
  description?: string
}

export function StatsCard({ 
  title,
  className = "bg-card",
  cardType = "default"
}: StatsCardProps) {
  const [statsData, setStatsData] = useState<Record<string, StatsData> | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function loadStats() {
      try {
        const data = await financialService.getStatsData()
        setStatsData(data)
      } catch (error) {
        console.error('Failed to load stats data:', error)
      } finally {
        setIsLoading(false)
      }
    }

    loadStats()
  }, [])

  if (isLoading || !statsData) {
    return (
      <Card className={cn("p-6", className)}>
        <div className="animate-pulse">
          <div className="h-4 bg-muted rounded w-24 mb-4"></div>
          <div className="h-6 bg-muted rounded w-32 mb-2"></div>
          <div className="h-4 bg-muted rounded w-20"></div>
        </div>
      </Card>
    )
  }

  const getStatsForTitle = () => {
    switch (title) {
      case "Total Net Worth":
        return statsData.netWorth
      case "Cash Available":
        return statsData.cashAvailable
      case "Credit Card Usage":
        return statsData.creditUsage
      case "Investment Portfolio":
        return statsData.investmentPortfolio
      case "Total Portfolio Value":
        return statsData.totalPortfolio
      case "S&P 500 (SPX)":
        return statsData.spx
      case "Dow Jones Industrial Average (DJIA)":
        return statsData.djia
      case "Bitcoin (BTC)":
        return statsData.btc
      default:
        return null
    }
  }

  const stats = getStatsForTitle()
  if (!stats) return null

  return (
    <Card className={cn("p-6", className)}>
      <h3 className={cn(
        "font-medium text-muted-foreground",
        cardType === "net-worth" && "text-slate-800"
      )}>{title}</h3>
      <div className="mt-2 flex items-baseline gap-2">
        <span className={cn(
          "text-2xl font-bold",
          cardType === "net-worth" && "text-foreground/90"
        )}>${stats.value.toLocaleString()}</span>
        {stats.description && (
          <p className={cn(
            "mt-1 text-sm text-muted-foreground",
            cardType === "net-worth" && "text-muted-foreground/80"
          )}>{stats.description}</p>
        )}
      </div>
      {stats.trend !== undefined && (
        <div className="flex items-center gap-1 font-bold">
          <span className={`text-sm ${stats.trend >= 0 ? 'text-green-500' : 'text-red-500'}`}>
            {stats.trend >= 0 ? '+' : ''}{stats.trend}%
          </span>
          <span className={cn(
            "text-xs text-muted-foreground",
            cardType === "net-worth" && "text-slate-800"
          )}>
            ({stats.timeframe})
          </span>
        </div>
      )}
    </Card>
  )
} 