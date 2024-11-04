import dynamic from 'next/dynamic'
import { StatsCard } from "@/components/dashboard/stats-card"
import { Notifications } from "@/components/dashboard/notifications"

// Dynamically import the IncomeSources component to avoid SSR issues with Chart.js
const IncomeSources = dynamic(
  () => import('@/components/dashboard/income-sources').then(mod => mod.IncomeSources),
  { ssr: false }
)

const SpendingBreakdown = dynamic(
  () => import('@/components/dashboard/spending-breakdown').then(mod => mod.SpendingBreakdown),
  { ssr: false }
)

const AssetsChart = dynamic(
  () => import('@/components/dashboard/assets-chart').then(mod => mod.AssetsChart),
  { ssr: false }
)

const IncomeExpensesChart = dynamic(
  () => import('@/components/dashboard/income-expenses-chart').then(mod => mod.IncomeExpensesChart),
  { ssr: false }
)

import { IncomeGoal } from "@/components/dashboard/income-goal"

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0A0B0D] text-white p-8">
      {/* Header */}
      <header className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-xl font-light">Personal Finance Tracker</h1>
          <div className="flex items-baseline gap-2">
            <h2 className="text-2xl font-bold">Available Balance</h2>
            <span className="text-3xl font-bold text-[#14F195]">$14,822</span>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <button className="px-4 py-2 bg-[#1C1D22] rounded-lg">Dashboard</button>
          <button className="px-4 py-2 bg-[#1C1D22] rounded-lg">Spreadsheet</button>
          <div className="flex items-center gap-2">
            <div className="text-right">
              <p className="text-sm">Simon K. Jimmy</p>
              <p className="text-xs text-gray-400">Mortgage consultant</p>
            </div>
            <div className="w-10 h-10 rounded-full bg-gray-300"></div>
          </div>
        </div>
      </header>

      {/* Main Grid */}
      <div className="grid grid-cols-12 gap-6">
        {/* Stats Cards */}
        <div className="col-span-4">
          <StatsCard 
            title="Total Net Worth" 
            value="278,378" 
            className="bg-gradient-to-r from-[#FF6B6B] to-[#FF8E53]"
          />
        </div>
        <div className="col-span-4">
          <StatsCard title="Spendings" value="9,228" />
        </div>
        <div className="col-span-4">
          <StatsCard title="Income" value="24,050" />
        </div>

        {/* First row of charts */}
        <div className="col-span-6">
          <IncomeSources />
        </div>
        <div className="col-span-6">
          <SpendingBreakdown />
        </div>

        {/* Second row */}
        <div className="col-span-8">
          <IncomeExpensesChart />
        </div>
        <div className="col-span-4 flex flex-col gap-6">
          <IncomeGoal />
          <Notifications />
        </div>

        {/* Third row */}
        <div className="col-span-6">
          <AssetsChart />
        </div>
      </div>
    </div>
  )
}
