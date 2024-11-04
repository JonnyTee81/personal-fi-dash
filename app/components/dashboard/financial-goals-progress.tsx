import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Target, Wallet, Home, Briefcase } from "lucide-react"

interface FinancialGoal {
  label: string
  currentAmount: number
  targetAmount: number
  deadline: string
  icon: React.ReactNode
  color: string
  category: string
}

export function FinancialGoalsProgress() {
  const goals: FinancialGoal[] = [
    {
      label: "Emergency Fund",
      currentAmount: 24050,
      targetAmount: 30000,
      deadline: "Dec 2024",
      icon: <Wallet className="w-5 h-5 text-blue-500" />,
      color: "bg-blue-500",
      category: "Savings"
    },
    {
      label: "House Down Payment",
      currentAmount: 45000,
      targetAmount: 100000,
      deadline: "Jun 2025",
      icon: <Home className="w-5 h-5 text-green-500" />,
      color: "bg-green-500",
      category: "Investment"
    },
    {
      label: "Retirement Fund",
      currentAmount: 278378,
      targetAmount: 1000000,
      deadline: "Dec 2045",
      icon: <Target className="w-5 h-5 text-purple-500" />,
      color: "bg-purple-500",
      category: "Long-term"
    },
    {
      label: "Stock Portfolio",
      currentAmount: 22500,
      targetAmount: 50000,
      deadline: "Dec 2024",
      icon: <Briefcase className="w-5 h-5 text-yellow-500" />,
      color: "bg-yellow-500",
      category: "Investment"
    }
  ]

  return (
    <Card className="bg-card border-0">
      <CardHeader>
        <CardTitle>Financial Goals Progress</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {goals.map((goal, index) => (
            <div key={index} className="space-y-2">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-2">
                  {goal.icon}
                  <div>
                    <p className="font-medium">{goal.label}</p>
                    <div className="flex gap-2 text-sm text-muted-foreground">
                      <span>{goal.category}</span>
                      <span>•</span>
                      <span>Due {goal.deadline}</span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-medium">${goal.currentAmount.toLocaleString()}</p>
                  <p className="text-sm text-muted-foreground">
                    of ${goal.targetAmount.toLocaleString()}
                  </p>
                </div>
              </div>
              <Progress 
                value={(goal.currentAmount / goal.targetAmount) * 100}
                className="h-2 bg-muted"
                indicatorClassName={goal.color}
              />
              <div className="flex justify-between text-sm text-muted-foreground">
                <span>{Math.round((goal.currentAmount / goal.targetAmount) * 100)}% Complete</span>
                <span>${(goal.targetAmount - goal.currentAmount).toLocaleString()} to go</span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
} 