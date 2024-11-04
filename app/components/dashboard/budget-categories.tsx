'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { 
  ShoppingBag, 
  Home, 
  Car, 
  Utensils, 
  Activity, 
  Wifi,
  Smartphone,
  Film,
  Droplet,
  Zap
} from "lucide-react"

interface BudgetCategory {
  name: string
  allocated: number
  spent: number
  icon: React.ReactNode
  color: string
}

export function BudgetCategories() {
  const categories: BudgetCategory[] = [
    {
      name: "Shopping",
      allocated: 800,
      spent: 650,
      icon: <ShoppingBag className="w-5 h-5 text-purple-500" />,
      color: "bg-purple-500"
    },
    {
      name: "Housing",
      allocated: 2200,
      spent: 2200,
      icon: <Home className="w-5 h-5 text-blue-500" />,
      color: "bg-blue-500"
    },
    {
      name: "Transportation",
      allocated: 400,
      spent: 280,
      icon: <Car className="w-5 h-5 text-green-500" />,
      color: "bg-green-500"
    },
    {
      name: "Dining",
      allocated: 500,
      spent: 620,
      icon: <Utensils className="w-5 h-5 text-red-500" />,
      color: "bg-red-500"
    },
    {
      name: "Healthcare",
      allocated: 300,
      spent: 150,
      icon: <Activity className="w-5 h-5 text-pink-500" />,
      color: "bg-pink-500"
    },
    {
      name: "Internet",
      allocated: 100,
      spent: 89,
      icon: <Wifi className="w-5 h-5 text-indigo-500" />,
      color: "bg-indigo-500"
    },
    {
      name: "Phone",
      allocated: 85,
      spent: 85,
      icon: <Smartphone className="w-5 h-5 text-yellow-500" />,
      color: "bg-yellow-500"
    },
    {
      name: "Entertainment",
      allocated: 200,
      spent: 180,
      icon: <Film className="w-5 h-5 text-orange-500" />,
      color: "bg-orange-500"
    },
    {
      name: "Water",
      allocated: 80,
      spent: 65,
      icon: <Droplet className="w-5 h-5 text-cyan-500" />,
      color: "bg-cyan-500"
    },
    {
      name: "Electricity",
      allocated: 150,
      spent: 135,
      icon: <Zap className="w-5 h-5 text-amber-500" />,
      color: "bg-amber-500"
    }
  ]

  return (
    <Card className="bg-card border-0">
      <CardHeader>
        <CardTitle>Budget Categories</CardTitle>
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
                      ${category.spent.toLocaleString()} of ${category.allocated.toLocaleString()}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className={`text-sm font-medium ${
                    category.spent > category.allocated ? 'text-red-500' : 'text-green-500'
                  }`}>
                    {Math.round((category.spent / category.allocated) * 100)}%
                  </p>
                </div>
              </div>
              <Progress 
                value={(category.spent / category.allocated) * 100}
                className="h-2 bg-muted"
                indicatorClassName={category.color}
              />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
} 