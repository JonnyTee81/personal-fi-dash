import { BillsList } from "@/components/dashboard/bills-list"

export default function BillsPage() {
  return (
    <div className="min-h-screen bg-[#0A0B0D] text-white p-8">
      <header className="mb-8">
        <h1 className="text-2xl font-bold">Bills & Payments</h1>
        <p className="text-gray-400">Track and manage your upcoming bills</p>
      </header>

      <div className="grid gap-6">
        <BillsList />
      </div>
    </div>
  )
} 