import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { AlertTriangle, TrendingUp, ShieldCheck } from "lucide-react"

interface RiskMetric {
  label: string
  value: number
  description: string
  icon: React.ReactNode
  color: string
}

export function RiskAnalysis() {
  const riskMetrics: RiskMetric[] = [
    {
      label: "Risk Score",
      value: 65,
      description: "Moderate risk level based on current allocation",
      icon: <AlertTriangle className="w-5 h-5 text-yellow-500" />,
      color: "bg-yellow-500"
    },
    {
      label: "Growth Potential",
      value: 78,
      description: "Strong potential for long-term growth",
      icon: <TrendingUp className="w-5 h-5 text-green-500" />,
      color: "bg-green-500"
    },
    {
      label: "Portfolio Health",
      value: 92,
      description: "Well-diversified and balanced portfolio",
      icon: <ShieldCheck className="w-5 h-5 text-blue-500" />,
      color: "bg-blue-500"
    }
  ]

  return (
    <Card className="bg-card border-0">
      <CardHeader>
        <CardTitle>Risk Analysis</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {riskMetrics.map((metric, index) => (
            <div key={index} className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  {metric.icon}
                  <span className="font-medium">{metric.label}</span>
                </div>
                <span className="text-sm text-muted-foreground">{metric.value}%</span>
              </div>
              <Progress 
                value={metric.value} 
                className="h-2 bg-muted" 
                indicatorClassName={metric.color}
              />
              <p className="text-sm text-muted-foreground">{metric.description}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
} 