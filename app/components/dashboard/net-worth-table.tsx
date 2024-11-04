'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface NetWorthRecord {
  date: string
  assets: number
  liabilities: number
  netWorth: number
  change: number
}

export function NetWorthTable() {
  const records: NetWorthRecord[] = [
    {
      date: 'December 2023',
      assets: 293200,
      liabilities: 14822,
      netWorth: 278378,
      change: 1.2,
    },
    {
      date: 'November 2023',
      assets: 290000,
      liabilities: 15000,
      netWorth: 275000,
      change: 0.8,
    },
    {
      date: 'October 2023',
      assets: 288000,
      liabilities: 15500,
      netWorth: 272500,
      change: 1.5,
    },
    // Add more historical data as needed
  ]

  return (
    <Card className="bg-card border-0">
      <CardHeader>
        <CardTitle>Historical Net Worth</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-800">
                <th className="text-left py-3 px-4 text-muted-foreground font-medium">Date</th>
                <th className="text-right py-3 px-4 text-muted-foreground font-medium">Assets</th>
                <th className="text-right py-3 px-4 text-muted-foreground font-medium">Liabilities</th>
                <th className="text-right py-3 px-4 text-muted-foreground font-medium">Net Worth</th>
                <th className="text-right py-3 px-4 text-muted-foreground font-medium">Change</th>
              </tr>
            </thead>
            <tbody>
              {records.map((record, index) => (
                <tr key={index} className="border-b border-gray-800">
                  <td className="py-3 px-4">{record.date}</td>
                  <td className="text-right py-3 px-4 text-primary">${record.assets.toLocaleString()}</td>
                  <td className="text-right py-3 px-4 text-red-500">-${record.liabilities.toLocaleString()}</td>
                  <td className="text-right py-3 px-4 font-semibold">${record.netWorth.toLocaleString()}</td>
                  <td className="text-right py-3 px-4">
                    <span className={record.change >= 0 ? 'text-green-500' : 'text-red-500'}>
                      {record.change >= 0 ? '↑' : '↓'} {Math.abs(record.change)}%
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  )
} 