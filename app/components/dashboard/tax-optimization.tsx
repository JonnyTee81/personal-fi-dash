import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Wallet, PiggyBank, Building, FileText } from "lucide-react"

interface TaxStrategy {
  name: string
  description: string
  potentialSavings: number
  implemented: number
  deadline: string
  icon: React.ReactNode
  color: string
}

export function TaxOptimization() {
  const strategies: TaxStrategy[] = [
    {
      name: "401(k) Maximization",
      description: "Increase contributions to reduce taxable income",
      potentialSavings: 5200,
      implemented: 75,
      deadline: "Dec 31, 2024",
      icon: <Wallet className="w-5 h-5 text-green-500" />,
      color: "bg-green-500"
    },
    {
      name: "IRA Contributions",
      description: "Traditional or Roth IRA optimization",
      potentialSavings: 1500,
      implemented: 40,
      deadline: "Apr 15, 2024",
      icon: <PiggyBank className="w-5 h-5 text-blue-500" />,
      color: "bg-blue-500"
    },
    {
      name: "Real Estate Deductions",
      description: "Property tax and mortgage interest",
      potentialSavings: 3800,
      implemented: 90,
      deadline: "Ongoing",
      icon: <Building className="w-5 h-5 text-purple-500" />,
      color: "bg-purple-500"
    },
    {
      name: "Tax Loss Harvesting",
      description: "Strategic investment losses",
      potentialSavings: 2200,
      implemented: 25,
      deadline: "Dec 31, 2024",
      icon: <FileText className="w-5 h-5 text-yellow-500" />,
      color: "bg-yellow-500"
    }
  ]

  const totalPotentialSavings = strategies.reduce((acc, strategy) => acc + strategy.potentialSavings, 0)

  return (
    <Card className="bg-card border-0">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Tax Optimization</CardTitle>
        <div className="text-right">
          <p className="text-sm text-muted-foreground">Potential Savings</p>
          <p className="text-2xl font-bold text-primary">${totalPotentialSavings.toLocaleString()}</p>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {strategies.map((strategy, index) => (
            <div key={index} className="space-y-2">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-2">
                  {strategy.icon}
                  <div>
                    <p className="font-medium">{strategy.name}</p>
                    <p className="text-sm text-muted-foreground">{strategy.description}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-medium">${strategy.potentialSavings.toLocaleString()}</p>
                  <p className="text-sm text-muted-foreground">Due: {strategy.deadline}</p>
                </div>
              </div>
              <Progress 
                value={strategy.implemented}
                className="h-2 bg-muted"
                indicatorClassName={strategy.color}
              />
              <div className="flex justify-between text-sm text-muted-foreground">
                <span>{strategy.implemented}% Implemented</span>
                <span>${Math.round(strategy.potentialSavings * (strategy.implemented / 100)).toLocaleString()} Saved</span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
} 