import { Card, CardContent } from "@/components/ui/card"
import { MessageCircle } from "lucide-react"

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
    <Card className={`bg-[#1C1D22] border-0 ${getBorderColor()}`}>
      <CardContent className="flex items-center gap-3 p-4">
        {icon || <MessageCircle className="w-5 h-5 text-gray-400" />}
        <p className="text-sm text-gray-200">{message}</p>
      </CardContent>
    </Card>
  )
} 