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
    <div className="min-h-screen bg-background text-foreground p-4 md:p-8">
      {/* Header */}
      <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-xl font-light text-foreground">Personal Finance Tracker</h1>
          <div className="flex items-baseline gap-2">
            <h2 className="text-2xl font-bold text-foreground">Available Balance</h2>
            <span className="text-3xl font-bold text-primary">$14,822</span>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 w-full md:w-auto">
          <div className="flex gap-2 w-full sm:w-auto">
            <button className="flex-1 sm:flex-none px-4 py-2 bg-card rounded-lg text-foreground">Dashboard</button>
            <button className="flex-1 sm:flex-none px-4 py-2 bg-card rounded-lg text-foreground">Spreadsheet</button>
          </div>
          <div className="flex items-center gap-2 w-full sm:w-auto justify-between sm:justify-start">
            <div className="text-right">
              <p className="text-sm text-foreground">Simon K. Jimmy</p>
              <p className="text-xs text-muted-foreground">Mortgage consultant</p>
            </div>
            <div className="w-10 h-10 rounded-full bg-accent"></div>
          </div>
        </div>
      </header>

      {/* Main Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Stats Cards */}
        <div className="col-span-1 md:col-span-4">
          <StatsCard 
            title="Total Net Worth" 
            value="278,378" 
            className="bg-gradient-to-r from-[#FF6B6B] to-[#FF8E53]"
          />
        </div>
        <div className="col-span-1 md:col-span-4">
          <StatsCard title="Spendings" value="9,228" />
        </div>
        <div className="col-span-1 md:col-span-4">
          <StatsCard title="Income" value="24,050" />
        </div>

        {/* First row of charts */}
        <div className="col-span-1 md:col-span-6">
          <IncomeSources />
        </div>
        <div className="col-span-1 md:col-span-6">
          <SpendingBreakdown />
        </div>

        {/* Second row */}
        <div className="col-span-1 md:col-span-8">
          <IncomeExpensesChart />
        </div>
        <div className="col-span-1 md:col-span-4 flex flex-col gap-6">
          <IncomeGoal />
          <Notifications />
        </div>

        {/* Third row */}
        <div className="col-span-1 md:col-span-6">
          <AssetsChart />
        </div>
      </div>
    </div>
  )
}
