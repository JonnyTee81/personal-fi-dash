import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { TransactionCard } from "./transaction-card"
import { RefreshCcw } from "lucide-react"

export function RecurringList() {
  const recurring = [
    {
      title: "Netflix Subscription",
      amount: 15.99,
      date: "Monthly on 15th",
      category: "Entertainment",
      status: "paid" as const,
      recurring: true
    },
    {
      title: "Gym Membership",
      amount: 49.99,
      date: "Monthly on 1st",
      category: "Health",
      status: "pending" as const,
      recurring: true
    },
    {
      title: "Adobe Creative Cloud",
      amount: 52.99,
      date: "Monthly on 20th",
      category: "Software",
      status: "pending" as const,
      recurring: true
    },
    {
      title: "iCloud Storage",
      amount: 9.99,
      date: "Monthly on 5th",
      category: "Cloud Storage",
      status: "paid" as const,
      recurring: true
    }
  ]

  return (
    <Card className="bg-[#1C1D22] border-0">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-white flex items-center gap-2">
          <RefreshCcw className="w-5 h-5" />
          Recurring Transactions
        </CardTitle>
        <span className="text-sm text-gray-400">
          Total: ${recurring.reduce((acc, curr) => acc + curr.amount, 0).toFixed(2)}/month
        </span>
      </CardHeader>
      <CardContent className="grid gap-4">
        {recurring.map((item, index) => (
          <TransactionCard key={index} {...item} />
        ))}
      </CardContent>
    </Card>
  )
} 