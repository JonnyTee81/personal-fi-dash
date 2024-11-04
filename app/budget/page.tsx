import { BudgetOverview } from "@/components/dashboard/budget-overview"
import { BudgetCategories } from "@/components/dashboard/budget-categories"
import { BudgetTrends } from "@/components/dashboard/budget-trends"
import { BudgetInsights } from "@/components/dashboard/budget-insights"
import { BudgetComparison } from "@/components/dashboard/budget-comparison"
import { SavingsRecommendations } from "@/components/dashboard/savings-recommendations"
import { BudgetFlow } from "@/components/dashboard/budget-flow"

export default function BudgetPage() {
  return (
    <div className="min-h-screen bg-background text-foreground p-4 md:p-8">
      <header className="mb-8">
        <h1 className="text-2xl font-bold">Budget</h1>
        <p className="text-muted-foreground">Track and manage your monthly budget</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Budget Overview */}
        <div className="col-span-1 md:col-span-12">
          <BudgetOverview />
        </div>

        {/* Budget Flow */}
        <div className="col-span-1 md:col-span-12">
          <BudgetFlow />
        </div>

        {/* Budget Trends */}
        <div className="col-span-1 md:col-span-8">
          <BudgetTrends />
        </div>

        {/* Budget Insights */}
        <div className="col-span-1 md:col-span-4">
          <BudgetInsights />
        </div>

        {/* Budget Categories */}
        <div className="col-span-1 md:col-span-12">
          <BudgetCategories />
        </div>

        {/* Budget Comparison */}
        <div className="col-span-1 md:col-span-8">
          <BudgetComparison />
        </div>

        {/* Savings Recommendations */}
        <div className="col-span-1 md:col-span-4">
          <SavingsRecommendations />
        </div>
      </div>
    </div>
  )
} 