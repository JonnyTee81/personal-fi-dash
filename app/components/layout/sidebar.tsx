'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from "@/lib/utils"
import {
  LayoutDashboard,
  PieChart,
  Receipt,
  RefreshCcw,
  Target,
  Wallet,
  Settings,
  HelpCircle
} from 'lucide-react'

const navigation = [
  { name: 'Dashboard', href: '/', icon: LayoutDashboard },
  { name: 'Net Worth', href: '/net-worth', icon: PieChart },
  { name: 'Bills', href: '/bills', icon: Receipt },
  { name: 'Recurring', href: '/recurring', icon: RefreshCcw },
  { name: 'Goals', href: '/goals', icon: Target },
  { name: 'Budget', href: '/budget', icon: Wallet },
]

const bottomNavigation = [
  { name: 'Settings', href: '/settings', icon: Settings },
  { name: 'Help', href: '/help', icon: HelpCircle },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <div className="flex flex-col fixed left-0 top-0 h-screen w-64 bg-[#1C1D22] border-r border-gray-800">
      {/* Logo */}
      <div className="p-6">
        <div className="text-2xl font-bold text-white">Finance</div>
      </div>

      {/* Main Navigation */}
      <nav className="flex-1 px-4">
        <div className="space-y-1">
          {navigation.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                  isActive
                    ? "bg-[#14F195] text-black"
                    : "text-gray-400 hover:text-white hover:bg-gray-800"
                )}
              >
                <item.icon className="w-5 h-5" />
                {item.name}
              </Link>
            )
          })}
        </div>
      </nav>

      {/* Bottom Navigation */}
      <div className="p-4 border-t border-gray-800">
        {bottomNavigation.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-gray-400 hover:text-white hover:bg-gray-800 transition-colors"
          >
            <item.icon className="w-5 h-5" />
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  )
} 