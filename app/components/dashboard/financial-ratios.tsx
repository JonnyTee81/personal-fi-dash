import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Info } from "lucide-react"

interface FinancialRatio {
  label: string
  value: number
  target: number
  description: string
  color: string
}

export function FinancialRatios() {
  const ratios: FinancialRatio[] = [
    {
      label: "Savings Ratio",
      value: 25,
      target: 20,
      description: "Percentage of income saved",
      color: "bg-green-500"
    },
    {
      label: "Debt-to-Income",
      value: 28,
      target: 36,
      description: "Monthly debt payments vs income",
      color: "bg-blue-500"
    },
    {
      label: "Emergency Fund",
      value: 83,
      target: 100,
      description: "Months of expenses covered (target: 6 months)",
      color: "bg-purple-500"
    },
    {
      label: "Investment Ratio",
      value: 15,
      target: 15,
      description: "Percentage of income invested",
      color: "bg-yellow-500"
    }
  ]

  return (
    <Card className="bg-card border-0">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Financial Health Ratios</CardTitle>
          <button className="p-2 hover:bg-accent rounded-full">
            <Info className="w-5 h-5 text-muted-foreground" />
          </button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {ratios.map((ratio, index) => (
            <div key={index} className="space-y-2">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">{ratio.label}</p>
                  <p className="text-sm text-muted-foreground">{ratio.description}</p>
                </div>
                <div className="text-right">
                  <p className="font-medium">{ratio.value}%</p>
                  <p className="text-sm text-muted-foreground">Target: {ratio.target}%</p>
                </div>
              </div>
              <Progress 
                value={(ratio.value / ratio.target) * 100} 
                className="h-2 bg-muted" 
                indicatorClassName={ratio.color}
              />
              <div className="flex justify-between text-sm text-muted-foreground">
                <span>0%</span>
                <span>{ratio.target}%</span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
} 