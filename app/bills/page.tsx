import { BillsOverview } from "@/components/dashboard/bills-overview"
import { BillsCalendar } from "@/components/dashboard/bills-calendar"
import { BillsList } from "@/components/dashboard/bills-list"
import { BillsHistory } from "@/components/dashboard/bills-history"
import { RecurringTransactions } from "@/components/dashboard/recurring-transactions"

export default function BillsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground p-4 md:p-8">
      <header className="mb-8">
        <h1 className="text-2xl font-bold">Bills & Payments</h1>
        <p className="text-muted-foreground">Track and manage your bills and recurring transactions</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Bills Overview */}
        <div className="col-span-1 md:col-span-8">
          <BillsOverview />
        </div>

        {/* Bills Calendar */}
        <div className="col-span-1 md:col-span-4">
          <BillsCalendar />
        </div>

        {/* Bills History Chart */}
        <div className="col-span-1 md:col-span-12">
          <BillsHistory />
        </div>

        {/* Recurring Transactions */}
        <div className="col-span-1 md:col-span-12">
          <RecurringTransactions />
        </div>

        {/* Bills List */}
        <div className="col-span-1 md:col-span-12">
          <BillsList />
        </div>
      </div>
    </div>
  )
} 