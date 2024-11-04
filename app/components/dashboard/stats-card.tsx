import { Card, CardContent } from "@/components/ui/card"

interface StatsCardProps {
  title: string
  value: string | number
  trend?: number
  className?: string
}

export function StatsCard({ title, value, trend, className }: StatsCardProps) {
  return (
    <Card className={`${className} overflow-hidden`}>
      <CardContent className="p-6">
        <p className="text-sm text-muted-foreground">{title}</p>
        <h2 className="text-3xl font-bold text-[#14F195]">${value}</h2>
        {trend && (
          <p className={`text-sm ${trend > 0 ? 'text-green-500' : 'text-red-500'}`}>
            {trend > 0 ? '↑' : '↓'} {Math.abs(trend)}%
          </p>
        )}
      </CardContent>
    </Card>
  )
} 