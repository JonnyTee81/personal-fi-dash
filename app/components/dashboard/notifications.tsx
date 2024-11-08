'use client'

import { NotificationCard } from "./notification-card"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Bell, AlertTriangle, Info, TrendingUp, Target } from "lucide-react"

export function Notifications() {
  return (
    <Card className="bg-card border-0">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <Bell className="w-5 h-5" />
            Notifications
          </CardTitle>
          <span className="text-sm text-muted-foreground">Today</span>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <NotificationCard
          message="Your credit card payment is due in 3 days"
          type="warning"
          icon={<AlertTriangle className="w-5 h-5 text-orange-500" />}
        />
        <NotificationCard
          message="You've reached 80% of your shopping budget"
          type="info"
          icon={<Info className="w-5 h-5 text-blue-500" />}
        />
        <NotificationCard
          message="Investment portfolio up 12.5% this month"
          type="info"
          icon={<TrendingUp className="w-5 h-5 text-green-500" />}
        />
        <NotificationCard
          message="You're on track to reach your savings goal"
          type="info"
          icon={<Target className="w-5 h-5 text-purple-500" />}
        />
        <NotificationCard
          message="Your credit card payment is due in 3 days"
          type="warning"
          icon={<AlertTriangle className="w-5 h-5 text-orange-500" />}
        />
        <NotificationCard
          message="You've reached 80% of your shopping budget"
          type="info"
          icon={<Info className="w-5 h-5 text-blue-500" />}
        />
      </CardContent>
    </Card>
  )
} 