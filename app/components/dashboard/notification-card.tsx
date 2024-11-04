import { Card, CardContent } from "@/components/ui/card"
import { MessageCircle } from "lucide-react"
import { cn } from "@/lib/utils"

interface NotificationCardProps {
  message: string
  type: 'warning' | 'info'
  icon?: React.ReactNode
}

export function NotificationCard({ message, type, icon }: NotificationCardProps) {
  const getBorderColor = () => {
    switch (type) {
      case 'warning':
        return 'border-l-4 border-l-orange-500'
      case 'info':
        return 'border-l-4 border-l-blue-500'
      default:
        return ''
    }
  }

  return (
    <Card className={cn(
      "bg-card border-0",
      getBorderColor()
    )}>
      <CardContent className="flex items-center gap-3 p-4">
        {icon || <MessageCircle className="w-5 h-5 text-muted-foreground" />}
        <p className="text-sm text-card-foreground">{message}</p>
      </CardContent>
    </Card>
  )
} 