import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { TransactionCard } from "./transaction-card"

export function BillsList() {
  const bills = [
    {
      title: "Electricity Bill",
      amount: 150,
      date: "Due in 3 days",
      category: "Utilities",
      status: "pending" as const,
    },
    {
      title: "Internet Bill",
      amount: 89,
      date: "Due in 5 days",
      category: "Utilities",
      status: "pending" as const,
    },
    {
      title: "Water Bill",
      amount: 45,
      date: "Overdue by 2 days",
      category: "Utilities",
      status: "overdue" as const,
    },
    {
      title: "Netflix",
      amount: 15.99,
      date: "Due in 7 days",
      category: "Entertainment",
      status: "pending" as const,
      recurring: true,
    }
  ]

  return (
    <Card className="bg-[#1C1D22] border-0">
      <CardHeader>
        <CardTitle className="text-white">Upcoming Bills</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4">
        {bills.map((bill, index) => (
          <TransactionCard key={index} {...bill} />
        ))}
      </CardContent>
    </Card>
  )
} 