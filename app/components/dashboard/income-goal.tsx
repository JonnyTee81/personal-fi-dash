'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Target } from "lucide-react"

export function IncomeGoal() {
  const currentIncome = 24050
  const goalIncome = 30000
  const progress = (currentIncome / goalIncome) * 100

  return (
    <Card className="bg-card border-0">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <Target className="w-5 h-5" />
            Income Goal
          </CardTitle>
          <span className="text-sm text-muted-foreground">Monthly</span>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex justify-between">
            <span className="text-sm text-muted-foreground">Progress</span>
            <span className="text-sm font-medium">{Math.round(progress)}%</span>
          </div>
          <Progress value={progress} className="h-2" indicatorClassName="bg-primary" />
          <div className="flex justify-between text-sm">
            <div>
              <p className="text-muted-foreground">Current</p>
              <p className="font-medium text-foreground">${currentIncome.toLocaleString()}</p>
            </div>
            <div className="text-right">
              <p className="text-muted-foreground">Goal</p>
              <p className="font-medium text-foreground">${goalIncome.toLocaleString()}</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
} 