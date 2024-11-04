'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Wallet, TrendingUp, AlertTriangle } from "lucide-react"

export function BudgetOverview() {
  const metrics = [
    {
      label: "Monthly Budget",
      value: "$5,200",
      description: "Total budget for March",
      icon: <Wallet className="w-5 h-5 text-green-500" />,
    },
    {
      label: "Spent So Far",
      value: "$3,180",
      description: "61% of budget used",
      icon: <TrendingUp className="w-5 h-5 text-blue-500" />,
    },
    {
      label: "Overspent Categories",
      value: "2",
      description: "Dining & Shopping",
      icon: <AlertTriangle className="w-5 h-5 text-red-500" />,
    }
  ]

  return (
    <Card className="bg-card border-0">
      <CardHeader>
        <CardTitle>Budget Overview</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {metrics.map((metric, index) => (
            <div key={index} className="p-4 rounded-lg bg-accent">
              <div className="flex items-center gap-2 mb-2">
                {metric.icon}
                <p className="font-medium">{metric.label}</p>
              </div>
              <p className="text-2xl font-bold mb-1">{metric.value}</p>
              <p className="text-sm text-muted-foreground">{metric.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-6 space-y-2">
          <div className="flex justify-between text-sm">
            <span>Monthly Progress</span>
            <span>20 days remaining</span>
          </div>
          <Progress value={61} className="h-2 bg-muted" indicatorClassName="bg-primary" />
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>$3,180 spent</span>
            <span>$2,020 remaining</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
} 