'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, DollarSign } from "lucide-react"

interface BillDue {
  date: string
  bills: {
    name: string
    amount: number
    category: string
    status: 'pending' | 'paid' | 'overdue'
  }[]
}

export function BillsCalendar() {
  const upcomingBills: BillDue[] = [
    {
      date: "March 1, 2024",
      bills: [
        { name: "Rent", amount: 2200, category: "Housing", status: 'pending' },
        { name: "Internet", amount: 89, category: "Utilities", status: 'pending' }
      ]
    },
    {
      date: "March 5, 2024",
      bills: [
        { name: "Phone Bill", amount: 85, category: "Utilities", status: 'pending' },
        { name: "Netflix", amount: 15.99, category: "Subscriptions", status: 'pending' }
      ]
    },
    {
      date: "March 15, 2024",
      bills: [
        { name: "Car Insurance", amount: 180, category: "Insurance", status: 'pending' },
        { name: "Electricity", amount: 150, category: "Utilities", status: 'pending' }
      ]
    }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'paid':
        return 'text-green-500'
      case 'overdue':
        return 'text-red-500'
      default:
        return 'text-yellow-500'
    }
  }

  return (
    <Card className="bg-card border-0">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Calendar className="w-5 h-5" />
          Upcoming Bills
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {upcomingBills.map((day, index) => (
            <div key={index} className="space-y-3">
              <h3 className="font-medium text-sm text-muted-foreground">{day.date}</h3>
              <div className="space-y-2">
                {day.bills.map((bill, billIndex) => (
                  <div
                    key={billIndex}
                    className="flex items-center justify-between p-3 rounded-lg bg-accent"
                  >
                    <div>
                      <p className="font-medium">{bill.name}</p>
                      <p className="text-sm text-muted-foreground">{bill.category}</p>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-1">
                        <DollarSign className="w-4 h-4 text-primary" />
                        <span className="font-medium">{bill.amount}</span>
                      </div>
                      <span className={`text-sm ${getStatusColor(bill.status)}`}>
                        {bill.status.charAt(0).toUpperCase() + bill.status.slice(1)}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
} 