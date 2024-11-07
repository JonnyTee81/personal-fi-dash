'use client'

import { ChevronDown, ChevronRight } from "lucide-react"
import { useState } from "react"
import { AccountItem } from "./account-item"

interface AccountGroup {
  name: string
  totalBalance: number
  totalPercentChange: number
  accounts: {
    name: string
    balance: number
    percentChange: number
    sparklineData: number[]
  }[]
}

const accountGroups: AccountGroup[] = [
  {
    name: "Cash",
    totalBalance: 14822,
    totalPercentChange: -0.5,
    accounts: [
      {
        name: "Checking Account",
        balance: 8422,
        percentChange: -2.3,
        sparklineData: [8900, 8700, 8422]
      },
      {
        name: "Savings Account",
        balance: 6400,
        percentChange: 1.2,
        sparklineData: [6200, 6300, 6400]
      }
    ]
  },
  {
    name: "Portfolio",
    totalBalance: 122500,
    totalPercentChange: 7.5,
    accounts: [
      {
        name: "Investment Account",
        balance: 85300,
        percentChange: 8.7,
        sparklineData: [78000, 82000, 85300]
      },
      {
        name: "Retirement Account",
        balance: 37200,
        percentChange: 6.4,
        sparklineData: [34800, 36000, 37200]
      }
    ]
  },
  {
    name: "Property",
    totalBalance: 650000,
    totalPercentChange: 3.2,
    accounts: [
      {
        name: "Primary Residence",
        balance: 650000,
        percentChange: 3.2,
        sparklineData: [630000, 642000, 650000]
      }
    ]
  },
  {
    name: "Credit Cards",
    totalBalance: 2770,
    totalPercentChange: -19.0,
    accounts: [
      {
        name: "Main Credit Card",
        balance: 2190,
        percentChange: -15.4,
        sparklineData: [2600, 2400, 2190]
      },
      {
        name: "Secondary Card",
        balance: 580,
        percentChange: -22.7,
        sparklineData: [750, 650, 580]
      }
    ]
  }
]

export function AccountsNav() {
  const [expandedGroups, setExpandedGroups] = useState<Record<string, boolean>>({})

  const toggleGroup = (groupName: string) => {
    setExpandedGroups(prev => ({
      ...prev,
      [groupName]: !prev[groupName]
    }))
  }

  return (
    <div className="space-y-1 ">
      {accountGroups.map((group) => (
        <div key={group.name}>
          <button
            onClick={() => toggleGroup(group.name)}
            className="w-full flex items-center justify-between px-3 py-2 text-sm font-medium hover:bg-accent/50 rounded-lg transition-colors text-left"
          >
            <div className="flex items-center gap-2">
              <div>
                <strong className="uppercase block">{group.name}</strong>
                <span className="text-xs text-muted-foreground px-2">
                  ${group.totalBalance.toLocaleString()}
              </span>
                <span className={`text-xs ${group.totalPercentChange >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                {group.totalPercentChange >= 0 ? '+' : ''}{group.totalPercentChange}%
              </span>
              </div>
            </div>
            {expandedGroups[group.name] ? (
              <ChevronDown className="h-4 w-4" />
            ) : (
              <ChevronRight className="h-4 w-4" />
            )}
          </button>
          {expandedGroups[group.name] && (
            <div className="mt-1 ml-2 space-y-1" style={{ width: 'calc(100% - 1rem)' }}>
              {group.accounts.map((account) => (
                <AccountItem
                  key={account.name}
                  name={account.name}
                  balance={account.balance}
                  percentChange={account.percentChange}
                  sparklineData={account.sparklineData}
                />
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  )
} 