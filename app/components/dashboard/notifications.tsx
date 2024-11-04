import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { NotificationCard } from "./notification-card"
import { AlertCircle, Receipt, Clock, MessageCircle } from "lucide-react"

export function Notifications() {
  const notifications = [
    {
      message: "3 Bills are past Due, Pay soon to avoid late fees.",
      type: "warning" as const,
      icon: <AlertCircle className="w-5 h-5 text-orange-500" />
    },
    {
      message: "Electricity bill due in 3 days",
      type: "info" as const,
      icon: <Receipt className="w-5 h-5 text-blue-500" />
    },
    {
      message: "Netflix subscription will renew in 5 days",
      type: "info" as const,
      icon: <Clock className="w-5 h-5 text-blue-500" />
    }
  ]

  return (
    <Card className="bg-[#1C1D22] border-0">
      <CardHeader>
        <CardTitle className="text-white flex items-center gap-2">
          <MessageCircle className="w-5 h-5" />
          Notifications
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-3">
        {notifications.map((notification, index) => (
          <NotificationCard
            key={index}
            message={notification.message}
            type={notification.type}
            icon={notification.icon}
          />
        ))}
      </CardContent>
    </Card>
  )
} 