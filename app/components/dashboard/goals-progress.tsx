'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Home, Briefcase, Wallet, GraduationCap, Car, Plane } from "lucide-react"

interface Goal {
  name: string
  target: number
  current: number
  deadline: string
  category: string
  icon: React.ReactNode
  color: string
}

export function GoalsProgress() {
  const goals: Goal[] = [
    {
      name: "House Down Payment",
      target: 100000,
      current: 45000,
      deadline: "Dec 2025",
      category: "Housing",
      icon: <Home className="w-5 h-5 text-blue-500" />,
      color: "bg-blue-500"
    },
    {
      name: "Investment Portfolio",
      target: 50000,
      current: 22500,
      deadline: "Jun 2024",
      category: "Investment",
      icon: <Briefcase className="w-5 h-5 text-green-500" />,
      color: "bg-green-500"
    },
    {
      name: "Student Loan Payoff",
      target: 40000,
      current: 36000,
      deadline: "Sep 2024",
      category: "Debt",
      icon: <GraduationCap className="w-5 h-5 text-red-500" />,
      color: "bg-red-500"
    },
    {
      name: "New Car Fund",
      target: 35000,
      current: 12500,
      deadline: "Dec 2024",
      category: "Vehicle",
      icon: <Car className="w-5 h-5 text-purple-500" />,
      color: "bg-purple-500"
    },
    {
      name: "Vacation Fund",
      target: 8000,
      current: 3200,
      deadline: "Jul 2024",
      category: "Travel",
      icon: <Plane className="w-5 h-5 text-orange-500" />,
      color: "bg-orange-500"
    }
  ]

  return (
    <Card className="bg-card border-0">
      <CardHeader>
        <CardTitle>Active Goals</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {goals.map((goal, index) => (
            <div key={index} className="space-y-2">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-2">
                  {goal.icon}
                  <div>
                    <p className="font-medium">{goal.name}</p>
                    <div className="flex gap-2 text-sm text-muted-foreground">
                      <span>{goal.category}</span>
                      <span>•</span>
                      <span>Due {goal.deadline}</span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-medium">${goal.current.toLocaleString()}</p>
                  <p className="text-sm text-muted-foreground">
                    of ${goal.target.toLocaleString()}
                  </p>
                </div>
              </div>
              <Progress 
                value={(goal.current / goal.target) * 100}
                className="h-2 bg-muted"
                indicatorClassName={goal.color}
              />
              <div className="flex justify-between text-sm text-muted-foreground">
                <span>{Math.round((goal.current / goal.target) * 100)}% Complete</span>
                <span>${(goal.target - goal.current).toLocaleString()} to go</span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
} 