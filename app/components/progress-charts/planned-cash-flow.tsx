import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Info } from "lucide-react"

interface PlannedCashFlowProps {
    label: string
    value: number
    target: number
    description: string
    color: string
}

export function PlannedCashFlow() {
    const ratios: PlannedCashFlowProps[] = [
        {
            label: "Cash Flow",
            value: 8456,
            target: 12654,
            description: "Income, Reimbursements, etc.",
            color: "bg-green-500"
        },
        {
            label: "Credit Card Usage",
            value: 2345,
            target: 6854,
            description: "Chase, Amazon, Target, etc.",
            color: "bg-blue-500"
        },
        {
            label: "Essential Expenses",
            value: 1234,
            target: 7564,
            description: "Mortgage, Utilities, etc.",
            color: "bg-purple-500"
        }
    ]
    function formatCurrency(value: number) {
        return value.toLocaleString('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0, maximumFractionDigits: 0 })
    }
    function formatPercentage(value: number) {
        return `${value.toFixed(0)}%`
    }
  return (
    <Card className="bg-card border-0">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Planned</CardTitle>
          <button className="p-1 hover:bg-accent rounded-full">
            <Info className="w-5 h-5 text-muted-foreground" />
          </button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {ratios.map((ratio, index) => (
            <div key={index} className="space-y-2">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">{ratio.label}</p>
                  <p className="text-sm text-muted-foreground">{ratio.description}</p>
                </div>
                <div className="text-right">
                  <p className="font-medium">{formatCurrency(ratio.value)}</p>
                  <p className="text-sm text-muted-foreground">Completed: {formatPercentage((ratio.value / ratio.target) * 100)}</p>
                </div>
              </div>
              <Progress 
                value={(ratio.value / ratio.target) * 100} 
                className="h-2 bg-muted" 
                indicatorClassName={ratio.color}
              />
              <div className="flex justify-between text-sm text-muted-foreground">
                <span>{formatCurrency(0)}</span>
                <span>{formatCurrency(ratio.target)}</span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}   