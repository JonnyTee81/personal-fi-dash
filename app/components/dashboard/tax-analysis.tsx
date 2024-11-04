import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { DollarSign, TrendingUp, Receipt, PiggyBank } from "lucide-react"

interface TaxMetric {
  label: string
  amount: number
  percentage: number
  description: string
  icon: React.ReactNode
  color: string
}

export function TaxAnalysis() {
  const totalIncome = 120000
  const taxMetrics: TaxMetric[] = [
    {
      label: "Federal Tax",
      amount: 24000,
      percentage: 20,
      description: "Estimated federal tax liability",
      icon: <DollarSign className="w-5 h-5 text-blue-500" />,
      color: "bg-blue-500"
    },
    {
      label: "State Tax",
      amount: 7200,
      percentage: 6,
      description: "Estimated state tax liability",
      icon: <Receipt className="w-5 h-5 text-purple-500" />,
      color: "bg-purple-500"
    },
    {
      label: "Tax Deductions",
      amount: 12000,
      percentage: 10,
      description: "Total tax deductions claimed",
      icon: <TrendingUp className="w-5 h-5 text-green-500" />,
      color: "bg-green-500"
    },
    {
      label: "Tax-Advantaged Savings",
      amount: 19500,
      percentage: 16.25,
      description: "401(k) and IRA contributions",
      icon: <PiggyBank className="w-5 h-5 text-yellow-500" />,
      color: "bg-yellow-500"
    }
  ]

  return (
    <Card className="bg-card border-0">
      <CardHeader>
        <CardTitle>Tax Analysis</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {taxMetrics.map((metric, index) => (
            <div key={index} className="space-y-2">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-2">
                  {metric.icon}
                  <div>
                    <p className="font-medium">{metric.label}</p>
                    <p className="text-sm text-muted-foreground">{metric.description}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-medium">${metric.amount.toLocaleString()}</p>
                  <p className="text-sm text-muted-foreground">{metric.percentage}% of income</p>
                </div>
              </div>
              <Progress 
                value={metric.percentage} 
                className="h-2 bg-muted" 
                indicatorClassName={metric.color}
              />
            </div>
          ))}
          <div className="pt-4 border-t border-border">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Total Income:</span>
              <span className="font-medium">${totalIncome.toLocaleString()}</span>
            </div>
            <div className="flex justify-between text-sm mt-2">
              <span className="text-muted-foreground">Effective Tax Rate:</span>
              <span className="font-medium">26%</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
} 