import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { DollarSign, TrendingDown, Clock, Zap } from "lucide-react"

interface DebtStrategy {
  name: string
  description: string
  monthsToPayoff: number
  totalInterest: number
  monthlySavings: number
  icon: React.ReactNode
  color: string
}

export function DebtPayoffStrategy() {
  const strategies: DebtStrategy[] = [
    {
      name: "Avalanche Method",
      description: "Pay highest interest first",
      monthsToPayoff: 24,
      totalInterest: 1850,
      monthlySavings: 320,
      icon: <TrendingDown className="w-5 h-5 text-green-500" />,
      color: "bg-green-500"
    },
    {
      name: "Snowball Method",
      description: "Pay smallest balance first",
      monthsToPayoff: 28,
      totalInterest: 2100,
      monthlySavings: 280,
      icon: <Clock className="w-5 h-5 text-blue-500" />,
      color: "bg-blue-500"
    },
    {
      name: "Debt Consolidation",
      description: "Combine all debts",
      monthsToPayoff: 26,
      totalInterest: 1950,
      monthlySavings: 300,
      icon: <Zap className="w-5 h-5 text-purple-500" />,
      color: "bg-purple-500"
    }
  ]

  const bestStrategy = strategies[0]

  return (
    <Card className="bg-card border-0">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Debt Payoff Strategy</CardTitle>
        <div className="flex items-center gap-2 text-sm text-primary">
          <DollarSign className="w-4 h-4" />
          <span>Best savings: ${bestStrategy.monthlySavings}/mo</span>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {strategies.map((strategy, index) => (
            <div key={index} className="space-y-2">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-2">
                  {strategy.icon}
                  <div>
                    <p className="font-medium">{strategy.name}</p>
                    <p className="text-sm text-muted-foreground">{strategy.description}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-medium">{strategy.monthsToPayoff} months</p>
                  <p className="text-sm text-muted-foreground">
                    ${strategy.totalInterest.toLocaleString()} interest
                  </p>
                </div>
              </div>
              <Progress 
                value={100 - (strategy.monthsToPayoff / 36) * 100}
                className="h-2 bg-muted"
                indicatorClassName={strategy.color}
              />
              <div className="flex justify-between text-sm text-muted-foreground">
                <span>Save ${strategy.monthlySavings}/month</span>
                <span>Payoff by {new Date().getFullYear() + Math.floor(strategy.monthsToPayoff / 12)}</span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
} 