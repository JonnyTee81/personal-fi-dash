'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import dynamic from 'next/dynamic'
import { StatsCard } from "@/components/tiles/stats-card"
import { NetWorthTable } from "@/components/dashboard/net-worth-table"
import { QuickActions } from "@/components/dashboard/quick-actions"
import { AssetAllocation } from "@/components/dashboard/asset-allocation"
import { RiskAnalysis } from "@/components/dashboard/risk-analysis"
import { InvestmentPerformance } from "@/app/components/line-charts/investment-performance"
import { FinancialRatios } from "@/components/dashboard/financial-ratios"
import { RetirementProjection } from "@/components/dashboard/retirement-projection"
import { TaxAnalysis } from "@/components/dashboard/tax-analysis"
import { InvestmentAllocation } from "@/components/dashboard/investment-allocation"
import { DebtAnalysis } from "@/components/dashboard/debt-analysis"
import { CashFlowAnalysis } from "@/components/dashboard/cash-flow-analysis"
import { LoanPayoffCalculator } from "@/components/dashboard/loan-payoff-calculator"
import { InvestmentReturns } from "@/components/dashboard/investment-returns"
import { PortfolioDiversification } from "@/components/dashboard/portfolio-diversification"
import { MonteCarloSimulation } from "@/components/dashboard/monte-carlo-simulation"
import { FinancialGoalsProgress } from "@/components/dashboard/financial-goals-progress"
import { InvestmentScenario } from "@/components/dashboard/investment-scenario"
import { DebtPayoffStrategy } from "@/components/dashboard/debt-payoff-strategy"
import { TaxOptimization } from "@/components/dashboard/tax-optimization"
import { EstatePlanning } from "@/components/dashboard/estate-planning"
import { Notifications } from "@/components/dashboard/notifications"
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
            cardType="net-worth"
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

        {/* Quick Actions */}
        <div className="col-span-1 md:col-span-12">
          <QuickActions />
        </div>

        {/* Financial Ratios */}
        <div className="col-span-1 md:col-span-4">
          <FinancialRatios />
        </div>

        {/* Net Worth Chart */}
        <div className="col-span-1 md:col-span-8">
          <NetWorthChart />
        </div>

        {/* Assets Chart */}
        <div className="col-span-1 md:col-span-4">
          <AssetsChart />
        </div>

       

        

        {/* Historical Data */}
        <div className="col-span-1 md:col-span-12">
          <NetWorthTable />
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

        {/* Investment Allocation and Debt Analysis */}
        <div className="col-span-1 md:col-span-8">
          <InvestmentAllocation />
        </div>
        <div className="col-span-1 md:col-span-4">
          <DebtAnalysis />
        </div>

        {/* Cash Flow Analysis and Loan Payoff Calculator */}
        <div className="col-span-1 md:col-span-8">
          <CashFlowAnalysis />
        </div>
        <div className="col-span-1 md:col-span-4">
          <LoanPayoffCalculator />
        </div>

        {/* Investment Returns and Portfolio Diversification */}
        <div className="col-span-1 md:col-span-8">
          <InvestmentReturns />
        </div>
        <div className="col-span-1 md:col-span-4">
          <PortfolioDiversification />
        </div>

        {/* Monte Carlo Simulation and Financial Goals Progress */}
        <div className="col-span-1 md:col-span-8">
          <MonteCarloSimulation />
        </div>
        <div className="col-span-1 md:col-span-4">
          <FinancialGoalsProgress />
        </div>

        {/* Investment Scenario and Debt Payoff Strategy */}
        <div className="col-span-1 md:col-span-8">
          <InvestmentScenario />
        </div>
        

        {/* Tax Optimization and Estate Planning */}
        <div className="col-span-1 md:col-span-8">
          <TaxOptimization />
        </div>
        

                {/* Notifications */}
                <div className="col-span-1 md:col-span-4">
          <Notifications />
        </div>

        
        <div className="col-span-1 md:col-span-4">
          <TaxAnalysis />
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