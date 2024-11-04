import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { DollarSign, CreditCard, Landmark, GraduationCap } from "lucide-react"

interface DebtMetric {
  label: string
  amount: number
  totalAmount: number
  interestRate: number
  monthlyPayment: number
  icon: React.ReactNode
  color: string
}

export function DebtAnalysis() {
  const debts: DebtMetric[] = [
    {
      label: "Credit Cards",
      amount: 2190,
      totalAmount: 5000,
      interestRate: 19.99,
      monthlyPayment: 300,
      icon: <CreditCard className="w-5 h-5 text-red-500" />,
      color: "bg-red-500"
    },
    {
      label: "Personal Loan",
      amount: 8632,
      totalAmount: 15000,
      interestRate: 8.5,
      monthlyPayment: 450,
      icon: <DollarSign className="w-5 h-5 text-yellow-500" />,
      color: "bg-yellow-500"
    },
    {
      label: "Student Loans",
      amount: 4000,
      totalAmount: 20000,
      interestRate: 4.5,
      monthlyPayment: 200,
      icon: <GraduationCap className="w-5 h-5 text-blue-500" />,
      color: "bg-blue-500"
    }
  ]

  const totalDebt = debts.reduce((acc, debt) => acc + debt.amount, 0)
  const totalMonthlyPayment = debts.reduce((acc, debt) => acc + debt.monthlyPayment, 0)

  return (
    <Card className="bg-card border-0">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Debt Analysis</CardTitle>
        <div className="text-right">
          <p className="text-sm text-muted-foreground">Total Debt</p>
          <p className="text-2xl font-bold">${totalDebt.toLocaleString()}</p>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {debts.map((debt, index) => (
            <div key={index} className="space-y-2">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-2">
                  {debt.icon}
                  <div>
                    <p className="font-medium">{debt.label}</p>
                    <div className="flex gap-4 text-sm text-muted-foreground">
                      <span>{debt.interestRate}% APR</span>
                      <span>${debt.monthlyPayment}/mo</span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-medium">${debt.amount.toLocaleString()}</p>
                  <p className="text-sm text-muted-foreground">
                    of ${debt.totalAmount.toLocaleString()}
                  </p>
                </div>
              </div>
              <Progress 
                value={(debt.amount / debt.totalAmount) * 100} 
                className="h-2 bg-muted" 
                indicatorClassName={debt.color}
              />
            </div>
          ))}
          <div className="pt-4 border-t border-border">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Total Monthly Payments:</span>
              <span className="font-medium">${totalMonthlyPayment}/month</span>
            </div>
            <div className="flex justify-between text-sm mt-2">
              <span className="text-muted-foreground">Debt-to-Income Ratio:</span>
              <span className="font-medium">28%</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
} 