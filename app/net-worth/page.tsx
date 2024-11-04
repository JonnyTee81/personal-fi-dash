'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import dynamic from 'next/dynamic'
import { StatsCard } from "@/components/dashboard/stats-card"

const NetWorthChart = dynamic(
    () => import('@/components/dashboard/net-worth-chart').then(mod => mod.NetWorthChart),
    { ssr: false }
)

const AssetsChart = dynamic(
  () => import('@/components/dashboard/assets-chart').then(mod => mod.AssetsChart),
  { ssr: false }
)

export default function NetWorthPage() {
  return (
    <div className="min-h-screen bg-background text-foreground p-4 md:p-8">
      <header className="mb-8">
        <h1 className="text-2xl font-bold">Net Worth</h1>
        <p className="text-muted-foreground">Track your assets and liabilities</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Summary Cards */}
        <div className="col-span-1 md:col-span-4">
          <StatsCard 
            title="Total Net Worth" 
            value="278,378" 
            trend={12.5}
            className="bg-gradient-to-r from-[#FF6B6B] to-[#FF8E53]"
          />
        </div>
        <div className="col-span-1 md:col-span-4">
          <StatsCard 
            title="Total Assets" 
            value="293,200"
            trend={8.3}
          />
        </div>
        <div className="col-span-1 md:col-span-4">
          <StatsCard 
            title="Total Liabilities" 
            value="14,822"
            trend={-5.2}
          />
        </div>

        {/* Net Worth Chart */}
        <div className="col-span-1 md:col-span-8">
          <NetWorthChart />
        </div>

        {/* Assets Breakdown */}
        <div className="col-span-1 md:col-span-4">
          <AssetsChart />
        </div>

        {/* Detailed Breakdown */}
        <div className="col-span-1 md:col-span-12">
          <Card>
            <CardHeader>
              <CardTitle>Detailed Breakdown</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Assets List */}
                <div>
                  <h3 className="text-lg font-semibold mb-4">Assets</h3>
                  <div className="space-y-4">
                    <DetailRow label="Cash & Bank" value={24050} trend={2.1} />
                    <DetailRow label="Investments" value={22500} trend={15.3} />
                    <DetailRow label="Real Estate" value={255000} trend={5.2} />
                    <DetailRow label="Vehicles" value={35000} trend={-2.5} />
                    <DetailRow label="Other Assets" value={15700} trend={0} />
                  </div>
                </div>

                {/* Liabilities List */}
                <div>
                  <h3 className="text-lg font-semibold mb-4">Liabilities</h3>
                  <div className="space-y-4">
                    <DetailRow label="Credit Cards" value={2190} trend={-12.4} isNegative />
                    <DetailRow label="Personal Loans" value={8632} trend={-5.8} isNegative />
                    <DetailRow label="Student Loans" value={4000} trend={-8.3} isNegative />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

function DetailRow({ label, value, trend, isNegative = false }: { 
  label: string
  value: number
  trend: number
  isNegative?: boolean
}) {
  return (
    <div className="flex items-center justify-between p-4 rounded-lg bg-card">
      <span className="text-card-foreground">{label}</span>
      <div className="text-right">
        <div className="text-lg font-semibold text-card-foreground">
          {isNegative ? '-' : ''}${value.toLocaleString()}
        </div>
        <div className={`text-sm ${trend > 0 ? 'text-green-500' : 'text-red-500'}`}>
          {trend > 0 ? '↑' : '↓'} {Math.abs(trend)}%
        </div>
      </div>
    </div>
  )
} 