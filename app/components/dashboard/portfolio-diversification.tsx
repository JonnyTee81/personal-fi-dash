import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { AlertTriangle, Globe, Building, Briefcase } from "lucide-react"

interface DiversificationMetric {
  label: string
  allocation: number
  target: number
  risk: 'low' | 'medium' | 'high'
  icon: React.ReactNode
  description: string
}

export function PortfolioDiversification() {
  const metrics: DiversificationMetric[] = [
    {
      label: "Geographic Diversification",
      allocation: 85,
      target: 80,
      risk: 'medium',
      icon: <Globe className="w-5 h-5 text-blue-500" />,
      description: "US: 60%, International: 25%, Emerging: 15%"
    },
    {
      label: "Sector Allocation",
      allocation: 70,
      target: 75,
      risk: 'low',
      icon: <Building className="w-5 h-5 text-green-500" />,
      description: "Tech: 30%, Finance: 20%, Healthcare: 20%, Others: 30%"
    },
    {
      label: "Asset Class Mix",
      allocation: 92,
      target: 90,
      risk: 'high',
      icon: <Briefcase className="w-5 h-5 text-purple-500" />,
      description: "Stocks: 70%, Bonds: 20%, Alternative: 10%"
    }
  ]

  const getRiskColor = (risk: 'low' | 'medium' | 'high') => {
    switch (risk) {
      case 'low':
        return 'text-green-500'
      case 'medium':
        return 'text-yellow-500'
      case 'high':
        return 'text-red-500'
    }
  }

  return (
    <Card className="bg-card border-0">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Portfolio Diversification</CardTitle>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <AlertTriangle className="w-4 h-4" />
          <span>Risk Score: 65/100</span>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {metrics.map((metric, index) => (
            <div key={index} className="space-y-2">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-2">
                  {metric.icon}
                  <div>
                    <p className="font-medium">{metric.label}</p>
                    <p className="text-sm text-muted-foreground">{metric.description}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className={`font-medium ${getRiskColor(metric.risk)}`}>
                    {metric.allocation}%
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Target: {metric.target}%
                  </p>
                </div>
              </div>
              <Progress 
                value={(metric.allocation / metric.target) * 100}
                className="h-2 bg-muted"
                indicatorClassName={`bg-${metric.risk === 'low' ? 'green' : metric.risk === 'medium' ? 'yellow' : 'red'}-500`}
              />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
} 