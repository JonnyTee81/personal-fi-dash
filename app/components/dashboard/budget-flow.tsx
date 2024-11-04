'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Chart } from "react-google-charts"

export function BudgetFlow() {
  // Data format: ["Source", "Target", "Value"]
  const data = [
    ["From", "To", "Amount"],
    // Income Sources
    ["Primary Salary", "Income", 20000],
    ["Side Business", "Income", 3000],
    ["Investments", "Income", 1050],
    
    // Income to Take Home
    ["Income", "Taxes", 5000],
    ["Income", "Take Home", 19050],
    
    // Take Home to Categories
    ["Take Home", "Housing", 2200],
    ["Take Home", "Food", 800],
    ["Take Home", "Transportation", 400],
    ["Take Home", "Utilities", 350],
    ["Take Home", "Insurance", 280],
    ["Take Home", "Entertainment", 200],
    ["Take Home", "Shopping", 650],
    ["Take Home", "Healthcare", 300],
    ["Take Home", "Savings", 13870],
  ]

  const options = {
    height: 400,
    sankey: {
      node: {
        colors: [
          // Income Sources
          '#10B981', // Primary Salary
          '#059669', // Side Business
          '#047857', // Investments
          '#14F195', // Income (Total)
          
          // Core Categories
          '#FF6B6B', // Taxes
          '#6366F1', // Take Home
          '#FF6B6B', // Housing
          '#4ECDC4', // Food
          '#45B7D1', // Transportation
          '#FFD93D', // Utilities
          '#9333EA', // Insurance
          '#F97316', // Entertainment
          '#EC4899', // Shopping
          '#8B5CF6', // Healthcare
          '#10B981', // Savings
        ],
        label: {
          fontName: 'Inter',
          fontSize: 14,
          color: '#fff',
        },
        nodePadding: 40,
      },
      link: {
        colorMode: 'gradient',
        fillOpacity: 0.5,
      },
    },
    tooltip: {
      textStyle: {
        fontName: 'Inter',
        fontSize: 14,
      }
    },
    backgroundColor: 'transparent',
  }

  return (
    <Card className="bg-card border-0">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Budget Flow</CardTitle>
          <div className="text-right">
            <p className="text-sm text-muted-foreground">Monthly Income</p>
            <p className="text-2xl font-bold text-primary">$24,050</p>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <Chart
          chartType="Sankey"
          width="100%"
          height="400px"
          data={data}
          options={options}
        />
      </CardContent>
    </Card>
  )
} 