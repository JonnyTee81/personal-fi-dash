import dynamic from 'next/dynamic'
import { StatsCard } from "@/components/tiles/stats-card"
import { PlannedCashFlow } from "@/components/dashboard/planned-cash-flow"
import Image from 'next/image'
// Dynamically import chart components
const NetWorthChart = dynamic(
  () => import('@/components/dashboard/net-worth-chart').then(mod => mod.NetWorthChart),
  { ssr: false }
)

const MonthlyComparison = dynamic(
  () => import('@/components/dashboard/monthly-comparison').then(mod => mod.MonthlyComparison),
  { ssr: false }
)

const MonthlySpending = dynamic(
  () => import('@/components/dashboard/monthly-spending').then(mod => mod.MonthlySpending),
  { ssr: false }
)

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground p-4 md:p-8">
      {/* Header */}
      <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-xl font-light text-foreground">March 2024</h1>
          <div className="flex items-baseline gap-2">
            <h2 className="text-2xl font-bold text-foreground">Dashboard Overview</h2>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 w-full md:w-auto">
          <div className="flex gap-2 w-full sm:w-auto">
          </div>
          <div className="flex items-center gap-2 w-full sm:w-auto justify-between sm:justify-start">
            <div className="text-right">
              <p className="text-sm text-foreground">Simon K. Jimmy</p>
              <p className="text-xs text-muted-foreground">Financial Dashboard</p>
            </div>
            <div className="w-10 h-10 rounded-full bg-accent">
              <Image src="/img/old-jonny-man2.jpeg" alt="User Avatar" width={40} height={40} className="object-cover" />
            </div>
          </div>
        </div>
      </header>

      {/* Main Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Stats Cards */}
        <div className="col-span-1 md:col-span-3">
          <StatsCard 
            title="Total Net Worth" 
            value="278,378" 
            trend={12.5}
            timeframe="30-Day"
            className="bg-gradient-to-r from-[#2d7cc6] to-[#5bff53]"
            cardType="net-worth"
          />
        </div>
        <div className="col-span-1 md:col-span-3">
          <StatsCard 
            title="Cash Available" 
            value="14,822"
            trend={-2.3}
            timeframe="7-Day"
          />
        </div>
        <div className="col-span-1 md:col-span-3">
          <StatsCard 
            title="Credit Card Usage" 
            value="2,190"
            trend={-15.4}
            timeframe="30-Day"
            description="32% of limit"
          />
        </div>
        <div className="col-span-1 md:col-span-3">
          <StatsCard 
            title="Investment Portfolio" 
            value="122,500"
            trend={8.7}
            timeframe="7-Day"
            description="Stocks & ETFs"
          />
        </div>

        {/* Monthly Comparison and Notifications */}
        <div className="col-span-1 md:col-span-8">
          <NetWorthChart />
        </div>
        <div className="col-span-1 md:col-span-4">
          <MonthlySpending />
        </div>
        
        {/* Net Worth Chart and Monthly Spending */}
        <div className="col-span-1 md:col-span-4">
          <MonthlyComparison />
        </div>
        <div className="col-span-1 md:col-span-8">
          <PlannedCashFlow />
        </div>
        

        
      </div>
    </div>
  )
}
