import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Lightbulb, TrendingDown, DollarSign, Target } from "lucide-react"

interface Recommendation {
  title: string
  description: string
  impact: number
  timeframe: string
  category: string
  icon: React.ReactNode
  color: string
  progress?: number
}

export function SavingsRecommendations() {
  const recommendations: Recommendation[] = [
    {
      title: "Reduce Dining Out",
      description: "Cut dining expenses by 30% to save $180/month",
      impact: 180,
      timeframe: "Monthly",
      category: "Food",
      icon: <TrendingDown className="w-5 h-5 text-green-500" />,
      color: "bg-green-500",
      progress: 40
    },
    {
      title: "Switch Utility Provider",
      description: "Save $45/month by switching to a cheaper provider",
      impact: 45,
      timeframe: "Monthly",
      category: "Utilities",
      icon: <Lightbulb className="w-5 h-5 text-yellow-500" />,
      color: "bg-yellow-500",
      progress: 0
    },
    {
      title: "Optimize Subscriptions",
      description: "Cancel unused subscriptions to save $35/month",
      impact: 35,
      timeframe: "Monthly",
      category: "Entertainment",
      icon: <DollarSign className="w-5 h-5 text-blue-500" />,
      color: "bg-blue-500",
      progress: 65
    },
    {
      title: "Shopping Optimization",
      description: "Use cashback and rewards to save $120/month",
      impact: 120,
      timeframe: "Monthly",
      category: "Shopping",
      icon: <Target className="w-5 h-5 text-purple-500" />,
      color: "bg-purple-500",
      progress: 25
    }
  ]

  const totalPotentialSavings = recommendations.reduce((acc, rec) => acc + rec.impact, 0)

  return (
    <Card className="bg-card border-0">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Savings Recommendations</CardTitle>
        <div className="text-right">
          <p className="text-sm text-muted-foreground">Potential Savings</p>
          <p className="text-2xl font-bold text-primary">${totalPotentialSavings}/mo</p>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {recommendations.map((recommendation, index) => (
            <div key={index} className="space-y-2">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-2">
                  {recommendation.icon}
                  <div>
                    <p className="font-medium">{recommendation.title}</p>
                    <p className="text-sm text-muted-foreground">{recommendation.description}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-medium text-primary">+${recommendation.impact}/mo</p>
                  <p className="text-sm text-muted-foreground">{recommendation.category}</p>
                </div>
              </div>
              {recommendation.progress !== undefined && (
                <>
                  <Progress 
                    value={recommendation.progress}
                    className="h-2 bg-muted"
                    indicatorClassName={recommendation.color}
                  />
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>{recommendation.progress}% Implemented</span>
                    <span>{recommendation.timeframe}</span>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
} 