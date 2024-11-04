'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Calculator, Calendar, Coins } from "lucide-react"
import { useState } from "react"

interface LoanDetail {
  name: string
  balance: number
  rate: number
  payment: number
  remainingMonths: number
  totalInterest: number
  color: string
}

export function LoanPayoffCalculator() {
  const [loans] = useState<LoanDetail[]>([
    {
      name: "Student Loan",
      balance: 4000,
      rate: 4.5,
      payment: 200,
      remainingMonths: 21,
      totalInterest: 187.50,
      color: "bg-blue-500"
    },
    {
      name: "Personal Loan",
      balance: 8632,
      rate: 8.5,
      payment: 450,
      remainingMonths: 24,
      totalInterest: 1012.68,
      color: "bg-yellow-500"
    }
  ])

  const totalBalance = loans.reduce((acc, loan) => acc + loan.balance, 0)
  const totalInterest = loans.reduce((acc, loan) => acc + loan.totalInterest, 0)
  const totalMonthlyPayment = loans.reduce((acc, loan) => acc + loan.payment, 0)

  return (
    <Card className="bg-card border-0">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Calculator className="w-5 h-5" />
          Loan Payoff Calculator
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="p-4 rounded-lg bg-accent">
            <p className="text-sm text-muted-foreground mb-1">Total Balance</p>
            <p className="text-2xl font-bold">${totalBalance.toLocaleString()}</p>
          </div>
          <div className="p-4 rounded-lg bg-accent">
            <p className="text-sm text-muted-foreground mb-1">Total Interest</p>
            <p className="text-2xl font-bold">${totalInterest.toLocaleString()}</p>
          </div>
          <div className="p-4 rounded-lg bg-accent">
            <p className="text-sm text-muted-foreground mb-1">Monthly Payment</p>
            <p className="text-2xl font-bold">${totalMonthlyPayment}/mo</p>
          </div>
        </div>

        <div className="space-y-6">
          {loans.map((loan, index) => (
            <div key={index} className="space-y-2">
              <div className="flex items-start justify-between">
                <div>
                  <p className="font-medium">{loan.name}</p>
                  <div className="flex gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Coins className="w-4 h-4" />
                      {loan.rate}% APR
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {loan.remainingMonths} months left
                    </span>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-medium">${loan.balance.toLocaleString()}</p>
                  <p className="text-sm text-muted-foreground">
                    ${loan.payment}/mo
                  </p>
                </div>
              </div>
              <Progress 
                value={100 - ((loan.remainingMonths * loan.payment) / (loan.balance + loan.totalInterest) * 100)}
                className="h-2 bg-muted"
                indicatorClassName={loan.color}
              />
              <p className="text-sm text-muted-foreground">
                Total interest: ${loan.totalInterest.toLocaleString()}
              </p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
} 