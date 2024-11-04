import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export function IncomeGoal() {
  const current = 24050
  const target = 39276
  const progress = Math.round((current / target) * 100)

  return (
    <Card className="bg-[#1C1D22] border-0">
      <CardHeader>
        <div className="flex justify-between items-baseline">
          <CardTitle className="text-white">Income Goal</CardTitle>
          <span className="text-[#14F195]">{progress}%</span>
        </div>
      </CardHeader>
      <CardContent>
        <Progress value={progress} className="h-2 bg-gray-800" indicatorClassName="bg-[#14F195]" />
        <div className="mt-2 text-sm text-gray-400">
          Progress to month: ${current.toLocaleString()} / ${target.toLocaleString()}
        </div>
      </CardContent>
    </Card>
  )
} 