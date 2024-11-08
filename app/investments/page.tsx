'use client'

import { InvestmentPerformance } from "@/components/dashboard/investment-performance"
import { AssetAllocation } from "@/components/dashboard/asset-allocation"
import { RiskAnalysis } from "@/components/dashboard/risk-analysis"
import { Notifications } from "@/components/dashboard/notifications"
import { PortfolioSummary } from "@/components/dashboard/portfolio-summary"
import { InvestmentAccounts } from "@/components/dashboard/investment-accounts"
import { StatsCard } from "@/components/tiles/stats-card"
import { RetirementProjection } from "@/components/dashboard/retirement-projection"
import { TaxAnalysis } from "@/components/dashboard/tax-analysis"

export default function Investments() {
  return (
    <div className="min-h-screen bg-background text-foreground p-4 md:p-8">
      <header className="mb-8">
        <h1 className="text-2xl font-bold">Investments</h1>
        <p className="text-muted-foreground">Track and manage your portfolio of investments</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Stats Cards */}
        <div className="col-span-1 md:col-span-3">
          <StatsCard 
            title="Total Portfolio Value" 
            value="1,278,378" 
            trend={12.5}
            timeframe="30-Day"
            className="bg-gradient-to-r from-[#622dc6] to-[#53c3ff]"
            cardType="net-worth"
          />
        </div>
        <div className="col-span-1 md:col-span-3">
          <StatsCard 
            title="S&P 500 (SPX)" 
            value="14,822"
            trend={-2.3}
            timeframe="1-Day"
          />
        </div>
        <div className="col-span-1 md:col-span-3">
          <StatsCard 
            title="Dow Jones Industrial Average (DJIA)" 
            value="2,190"
            trend={-15.4}
            timeframe="1-Day"
          />
        </div>
        <div className="col-span-1 md:col-span-3">
          <StatsCard 
            title="Bitcoin (BTC)" 
            value="71,500"
            trend={8.7}
            timeframe="1-Day"
            description=""
          />
        </div>
        {/* Portfolio Summary and Investment Performance */}
        <div className="col-span-1 md:col-span-8">
          <InvestmentPerformance />
        </div>
        <div className="col-span-1 md:col-span-4">
          <AssetAllocation />
        </div>

        {/* Risk Analysis */}
        <div className="col-span-1 md:col-span-4">
          <RiskAnalysis />
        </div>
        {/* Retirement and Tax Analysis */}
        <div className="col-span-1 md:col-span-8">
          <RetirementProjection />
        </div>



        <div className="col-span-1 md:col-span-12">
          <InvestmentAccounts />
        </div>
        

        
      </div>
    </div>
  )
}