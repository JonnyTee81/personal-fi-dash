import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Siren, AlignEndHorizontal, Hospital, PiggyBank, AlignStartHorizontal, Plane } from "lucide-react"

interface Category {
  name: string
  totalAmount: number
  currentAmount: number
  goals: number
  icon: React.ReactNode
  color: string
  description: string
}

export function GoalsCategories() {
  const categories: Category[] = [
    {
      name: "Emergency Fund",
      totalAmount: 50000,
      currentAmount: 45000,
      goals: 1,
      icon: <Siren className="w-5 h-5 text-blue-500" />,
      color: "bg-blue-500",
      description: "6 Months"
    },
    {
      name: "HSA",
      totalAmount: 30000,
      currentAmount: 24050,
      goals: 1,
      icon: <Hospital className="w-5 h-5 text-yellow-500" />,
      color: "bg-yellow-500",
      description: ""
    },
    {
      name: "401(k) Match",
      totalAmount: 6000,
      currentAmount: 2500,
      goals: 1,
      icon: <AlignEndHorizontal className="w-5 h-5 text-purple-500" />,
      color: "text-purple-500",
      description: "Sam"
    },
    {
      name: "401(k) Match",
      totalAmount: 6000,
      currentAmount: 1500,
      goals: 1,
      icon: <AlignEndHorizontal className="w-5 h-5 text-green-500" />,
      color: "bg-green-500",
      description: "Simon (Walmart)"
    },
    {
      name: "IRA",
      totalAmount: 7000,
      currentAmount: 3000,
      goals: 1,
      icon: <PiggyBank className="w-5 h-5 text-purple-500" />,
      color: "text-purple-500",
      description: "Sam"
    },
    {
      name: "IRA",
      totalAmount: 7000,
      currentAmount: 3000,
      goals: 1,
      icon: <PiggyBank className="w-5 h-5 text-green-500" />,
      color: "text-green-500",
      description: "Simon"
    },
    {
      name: "401(k) Full",
      totalAmount: 23000,
      currentAmount: 12500,
      goals: 1,
      icon: <AlignStartHorizontal className="w-5 h-5 text-purple-500" />,
      color: "bg-purple-500",
      description: "Sam"
    },
    {
      name: "401(k) Full",
      totalAmount: 23000,
      currentAmount: 13500,
      goals: 1,
      icon: <AlignStartHorizontal className="w-5 h-5 text-green-500" />,
      color: "text-green-500",
      description: "Simon"
    },
  ]

  return (
    <Card className="bg-card border-0">
      <CardHeader>
        <CardTitle>Savings Categories - 2024</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {categories.map((category, index) => (
            <div key={index} className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  {category.icon}
                  <div>
                    <p className="font-medium">{category.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {category.description}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-medium">${category.currentAmount.toLocaleString()}</p>
                  <p className="text-sm text-muted-foreground">
                    of ${category.totalAmount.toLocaleString()}
                  </p>
                </div>
              </div>
              <Progress 
                value={(category.currentAmount / category.totalAmount) * 100}
                className="h-2 bg-muted"
                indicatorClassName={category.color}
              />
              <div className="flex justify-between text-sm text-muted-foreground">
                <span>{Math.round((category.currentAmount / category.totalAmount) * 100)}% Complete</span>
                <span>${(category.totalAmount - category.currentAmount).toLocaleString()} to go</span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
} 