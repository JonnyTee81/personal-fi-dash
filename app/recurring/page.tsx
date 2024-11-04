import { RecurringList } from "@/components/dashboard/recurring-list"
import { Card, CardContent } from "@/components/ui/card"

export default function RecurringPage() {
  return (
    <div className="min-h-screen bg-[#0A0B0D] text-white p-8">
      <header className="mb-8">
        <h1 className="text-2xl font-bold">Recurring Transactions</h1>
        <p className="text-gray-400">Manage your subscriptions and recurring payments</p>
      </header>

      <div className="grid gap-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Monthly Subscriptions</h2>
            <RecurringList />
          </div>
          
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Summary</h2>
            <Card className="bg-[#1C1D22] border-0">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Total Monthly Recurring</span>
                    <span className="text-2xl font-bold text-[#14F195]">$128.96</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Active Subscriptions</span>
                    <span className="text-lg">4</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Next Payment Due</span>
                    <span className="text-lg">Jan 1, 2024</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
} 