import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Plus, Download, Share2, RefreshCw } from "lucide-react"

export function QuickActions() {
  const actions = [
    {
      title: 'Add Asset',
      icon: Plus,
      description: 'Record a new asset',
      color: 'bg-green-500/10 text-green-500'
    },
    {
      title: 'Export Data',
      icon: Download,
      description: 'Download as CSV',
      color: 'bg-blue-500/10 text-blue-500'
    },
    {
      title: 'Share Report',
      icon: Share2,
      description: 'Generate shareable link',
      color: 'bg-purple-500/10 text-purple-500'
    },
    {
      title: 'Sync Accounts',
      icon: RefreshCw,
      description: 'Update all accounts',
      color: 'bg-orange-500/10 text-orange-500'
    }
  ]

  return (
    <Card className="bg-card border-0">
      <CardHeader>
        <CardTitle>Quick Actions</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {actions.map((action, index) => (
            <button
              key={index}
              className="p-4 rounded-lg bg-accent hover:bg-accent/80 transition-colors text-left"
            >
              <div className={`w-10 h-10 rounded-full ${action.color} flex items-center justify-center mb-3`}>
                <action.icon className="w-5 h-5" />
              </div>
              <h3 className="font-medium mb-1">{action.title}</h3>
              <p className="text-sm text-muted-foreground">{action.description}</p>
            </button>
          ))}
        </div>
      </CardContent>
    </Card>
  )
} 