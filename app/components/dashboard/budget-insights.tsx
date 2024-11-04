import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { TrendingUp, TrendingDown, AlertTriangle, CheckCircle } from "lucide-react"

interface Insight {
  title: string
  description: string
  impact: 'positive' | 'negative' | 'warning'
  value?: string
  progress?: number
  icon: React.ReactNode
}

export function BudgetInsights() {
  const insights: Insight[] = [
    {
      title: "Dining Out Spending",
      description: "24% over monthly budget",
      impact: 'negative',
      progress: 124,
      icon: <TrendingUp className="w-5 h-5 text-red-500" />,
    },
    {
      title: "Transportation Savings",
      description: "30% under budget this month",
      impact: 'positive',
      progress: 70,
      icon: <TrendingDown className="w-5 h-5 text-green-500" />,
    },
    {
      title: "Shopping Budget Alert",
      description: "Approaching monthly limit",
      impact: 'warning',
      progress: 92,
      icon: <AlertTriangle className="w-5 h-5 text-yellow-500" />,
    },
    {
      title: "Utilities On Track",
      description: "Within expected range",
      impact: 'positive',
      progress: 85,
      icon: <CheckCircle className="w-5 h-5 text-green-500" />,
    }
  ]

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case 'positive':
        return 'text-green-500'
      case 'negative':
        return 'text-red-500'
      case 'warning':
        return 'text-yellow-500'
      default:
        return 'text-muted-foreground'
    }
  }

  const getProgressColor = (impact: string) => {
    switch (impact) {
      case 'positive':
        return 'bg-green-500'
      case 'negative':
        return 'bg-red-500'
      case 'warning':
        return 'bg-yellow-500'
      default:
        return 'bg-primary'
    }
  }

  return (
    <Card className="bg-card border-0">
      <CardHeader>
        <CardTitle>Budget Insights</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {insights.map((insight, index) => (
            <div key={index} className="space-y-2">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-2">
                  {insight.icon}
                  <div>
                    <p className="font-medium">{insight.title}</p>
                    <p className={`text-sm ${getImpactColor(insight.impact)}`}>
                      {insight.description}
                    </p>
                  </div>
                </div>
                {insight.value && (
                  <span className="font-medium">{insight.value}</span>
                )}
              </div>
              {insight.progress && (
                <Progress 
                  value={insight.progress} 
                  className="h-2 bg-muted"
                  indicatorClassName={getProgressColor(insight.impact)}
                />
              )}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
} 