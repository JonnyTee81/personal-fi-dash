'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { TransactionCard } from "./transaction-card"
import { useState } from "react"

type FilterType = 'all' | 'bills' | 'recurring'

export function BillsList() {
  const [filter, setFilter] = useState<FilterType>('all')

  const transactions = [
    {
      title: "Rent",
      amount: 2200,
      date: "March 1, 2024",
      category: "Housing",
      status: 'pending' as const,
      recurring: true
    },
    {
      title: "Electricity",
      amount: 150,
      date: "March 5, 2024",
      category: "Utilities",
      status: 'pending' as const,
      recurring: true
    },
    {
      title: "Netflix",
      amount: 15.99,
      date: "March 15, 2024",
      category: "Subscriptions",
      status: 'pending' as const,
      recurring: true
    },
    {
      title: "Car Insurance",
      amount: 180,
      date: "March 15, 2024",
      category: "Insurance",
      status: 'pending' as const,
      recurring: false
    },
    {
      title: "Property Tax",
      amount: 850,
      date: "March 20, 2024",
      category: "Taxes",
      status: 'pending' as const,
      recurring: false
    }
  ]

  const filteredTransactions = transactions.filter(transaction => {
    if (filter === 'all') return true
    if (filter === 'bills') return !transaction.recurring
    if (filter === 'recurring') return transaction.recurring
    return true
  })

  return (
    <Card className="bg-card border-0">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Upcoming Payments</CardTitle>
        <div className="flex gap-2">
          <button
            onClick={() => setFilter('all')}
            className={`px-3 py-1 rounded-lg text-sm ${
              filter === 'all' 
                ? 'bg-primary text-primary-foreground' 
                : 'bg-accent text-accent-foreground'
            }`}
          >
            All
          </button>
          <button
            onClick={() => setFilter('bills')}
            className={`px-3 py-1 rounded-lg text-sm ${
              filter === 'bills' 
                ? 'bg-primary text-primary-foreground' 
                : 'bg-accent text-accent-foreground'
            }`}
          >
            Bills
          </button>
          <button
            onClick={() => setFilter('recurring')}
            className={`px-3 py-1 rounded-lg text-sm ${
              filter === 'recurring' 
                ? 'bg-primary text-primary-foreground' 
                : 'bg-accent text-accent-foreground'
            }`}
          >
            Recurring
          </button>
        </div>
      </CardHeader>
      <CardContent className="grid gap-4">
        {filteredTransactions.map((transaction, index) => (
          <TransactionCard key={index} {...transaction} />
        ))}
      </CardContent>
    </Card>
  )
} 