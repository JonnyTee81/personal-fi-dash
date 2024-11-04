import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { FileCheck, Shield, Users, Scale } from "lucide-react"

interface EstatePlanningItem {
  name: string
  description: string
  status: 'completed' | 'in-progress' | 'pending'
  lastUpdated: string
  nextReview: string
  icon: React.ReactNode
  progress: number
  color: string
}

export function EstatePlanning() {
  const items: EstatePlanningItem[] = [
    {
      name: "Will & Testament",
      description: "Primary estate document",
      status: 'completed',
      lastUpdated: "Jan 15, 2024",
      nextReview: "Jan 15, 2025",
      icon: <FileCheck className="w-5 h-5 text-green-500" />,
      progress: 100,
      color: "bg-green-500"
    },
    {
      name: "Trust Setup",
      description: "Living trust arrangement",
      status: 'in-progress',
      lastUpdated: "Mar 1, 2024",
      nextReview: "Apr 1, 2024",
      icon: <Shield className="w-5 h-5 text-blue-500" />,
      progress: 60,
      color: "bg-blue-500"
    },
    {
      name: "Beneficiary Designations",
      description: "Account beneficiaries",
      status: 'completed',
      lastUpdated: "Feb 10, 2024",
      nextReview: "Feb 10, 2025",
      icon: <Users className="w-5 h-5 text-purple-500" />,
      progress: 100,
      color: "bg-purple-500"
    },
    {
      name: "Power of Attorney",
      description: "Legal & medical directives",
      status: 'pending',
      lastUpdated: "Not started",
      nextReview: "N/A",
      icon: <Scale className="w-5 h-5 text-yellow-500" />,
      progress: 0,
      color: "bg-yellow-500"
    }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'text-green-500'
      case 'in-progress':
        return 'text-blue-500'
      default:
        return 'text-yellow-500'
    }
  }

  return (
    <Card className="bg-card border-0">
      <CardHeader>
        <CardTitle>Estate Planning</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {items.map((item, index) => (
            <div key={index} className="space-y-2">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-2">
                  {item.icon}
                  <div>
                    <p className="font-medium">{item.name}</p>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className={`font-medium ${getStatusColor(item.status)}`}>
                    {item.status.charAt(0).toUpperCase() + item.status.slice(1)}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Review: {item.nextReview}
                  </p>
                </div>
              </div>
              <Progress 
                value={item.progress}
                className="h-2 bg-muted"
                indicatorClassName={item.color}
              />
              <div className="flex justify-between text-sm text-muted-foreground">
                <span>Last updated: {item.lastUpdated}</span>
                <span>{item.progress}% Complete</span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
} 