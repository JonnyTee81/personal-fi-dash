import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface StatsCardProps {
  title: string
  value: string
  trend?: number
  description?: string
  className?: string
  timeframe?: string
  cardType?: string
}

export function StatsCard({ 
  title, 
  value, 
  trend, 
  description,
  cardType = "default",
  className = "bg-card",
  timeframe = "7-Day"
}: StatsCardProps) {
  return (
    <div className={`rounded-xl p-6 ${className}`}>
      <h3 className={cn(
        "font-medium text-muted-foreground",
        cardType === "net-worth" && "text-slate-800"
      )}>{title}</h3>
      <div className="mt-2 flex items-baseline gap-2">
        <span className={cn(
          "text-2xl font-bold",
          cardType === "net-worth" && "text-foreground/90"
        )}>${value}</span>
        {description && (
        <p className={cn(
          "mt-1 text-sm text-muted-foreground",
          cardType === "net-worth" && "text-muted-foreground/80"
        )}>{description}</p>
      )}
      </div>
      {trend !== undefined && (
          <div className="flex items-center gap-1 font-bold">
            <span className={`text-sm ${trend >= 0 ? 'text-green-500' : 'text-red-500'}`}>
              {trend >= 0 ? '+' : ''}{trend}%
            </span>
            <span className={cn(
              "text-xs text-muted-foreground",
              cardType === "net-worth" && " text-slate-800"
            )}>
              ({timeframe})
            </span>
          </div>
        )}
    </div>
  )
} 