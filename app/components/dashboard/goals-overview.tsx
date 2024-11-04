'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Target, TrendingUp, Clock } from "lucide-react"

export function GoalsOverview() {
  const metrics = [
    {
      label: "Active Goals",
      value: "6",
      description: "2 completed this year",
      icon: <Target className="w-5 h-5 text-green-500" />,
    },
    {
      label: "Total Progress",
      value: "68%",
      description: "Across all goals",
      icon: <TrendingUp className="w-5 h-5 text-blue-500" />,
    },
    {
      label: "Next Milestone",
      value: "15 days",
      description: "Emergency fund target",
      icon: <Clock className="w-5 h-5 text-purple-500" />,
    }
  ]

  return (
    <Card className="bg-card border-0">
      <CardHeader>
        <CardTitle>Goals Overview</CardTitle>
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
      </CardContent>
    </Card>
  )
} 