import { TransactionTable } from "@/components/dashboard/transaction-table"

export default function TransactionsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground p-4 md:p-8">
      <header className="mb-8">
        <h1 className="text-2xl font-bold">Transactions</h1>
        <p className="text-muted-foreground">View and manage your transactions</p>
      </header>

      <div className="space-y-6">
        <TransactionTable />
      </div>
    </div>
  )
} 