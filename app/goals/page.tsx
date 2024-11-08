import { GoalsOverview } from "@/components/dashboard/goals-overview"
import { GoalsProgress } from "@/components/dashboard/goals-progress"
import { GoalsTimeline } from "@/components/dashboard/goals-timeline"
import { GoalsCategories } from "@/components/dashboard/goals-categories"
import { EstatePlanning } from "@/components/dashboard/estate-planning"
import { DebtPayoffStrategy } from "@/components/dashboard/debt-payoff-strategy"
export default function GoalsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground p-4 md:p-8">
      <header className="mb-8">
        <h1 className="text-2xl font-bold">Financial Goals</h1>
        <p className="text-muted-foreground">Track and manage your financial goals</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Goals Overview */}
        <div className="col-span-1 md:col-span-12">
          <GoalsOverview />
        </div>

        {/* Goals Timeline */}
        <div className="col-span-1 md:col-span-8">
          <GoalsTimeline />
        </div>

        {/* SAvings Categories */}
        <div className="col-span-1 md:col-span-4">
          <GoalsCategories />
        </div>

        {/* Goals Progress */}
        <div className="col-span-1 md:col-span-4">
          <GoalsProgress />
        </div>

        <div className="col-span-1 md:col-span-4">
          <DebtPayoffStrategy />
        </div>

        <div className="col-span-1 md:col-span-4">
          <EstatePlanning />
        </div>
      </div>
    </div>
  )
} 