import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Home, Briefcase, Wallet, GraduationCap, Car, Plane } from "lucide-react"

interface Category {
  name: string
  totalAmount: number
  currentAmount: number
  goals: number
  icon: React.ReactNode
  color: string
}

export function GoalsCategories() {
  const categories: Category[] = [
    {
      name: "Housing",
      totalAmount: 100000,
      currentAmount: 45000,
      goals: 1,
      icon: <Home className="w-5 h-5 text-blue-500" />,
      color: "bg-blue-500"
    },
    {
      name: "Investment",
      totalAmount: 50000,
      currentAmount: 22500,
      goals: 1,
      icon: <Briefcase className="w-5 h-5 text-green-500" />,
      color: "bg-green-500"
    },
    {
      name: "Savings",
      totalAmount: 30000,
      currentAmount: 24050,
      goals: 1,
      icon: <Wallet className="w-5 h-5 text-yellow-500" />,
      color: "bg-yellow-500"
    },
    {
      name: "Debt",
      totalAmount: 40000,
      currentAmount: 36000,
      goals: 1,
      icon: <GraduationCap className="w-5 h-5 text-red-500" />,
      color: "bg-red-500"
    },
    {
      name: "Vehicle",
      totalAmount: 35000,
      currentAmount: 12500,
      goals: 1,
      icon: <Car className="w-5 h-5 text-purple-500" />,
      color: "bg-purple-500"
    },
    {
      name: "Travel",
      totalAmount: 8000,
      currentAmount: 3200,
      goals: 1,
      icon: <Plane className="w-5 h-5 text-orange-500" />,
      color: "bg-orange-500"
    }
  ]

  return (
    <Card className="bg-card border-0">
      <CardHeader>
        <CardTitle>Goal Categories</CardTitle>
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
                      {category.goals} {category.goals === 1 ? 'goal' : 'goals'}
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