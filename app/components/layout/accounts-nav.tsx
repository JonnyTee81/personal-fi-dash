'use client'

import { ChevronDown, ChevronRight } from "lucide-react"
import { useState } from "react"
import { AccountItem } from "./account-item"

interface AccountGroup {
  name: string
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
    <div className="space-y-1">
      {accountGroups.map((group) => (
        <div key={group.name}>
          <button
            onClick={() => toggleGroup(group.name)}
            className="w-full flex items-center justify-between px-3 py-2 text-sm font-medium hover:bg-accent/50 rounded-lg transition-colors"
          >
            <span>{group.name}</span>
            {expandedGroups[group.name] ? (
              <ChevronDown className="h-4 w-4" />
            ) : (
              <ChevronRight className="h-4 w-4" />
            )}
          </button>
          {expandedGroups[group.name] && (
            <div className="mt-1 ml-2 space-y-1">
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