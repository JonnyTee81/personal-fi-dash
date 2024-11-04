import { Card, CardContent } from "@/components/ui/card"
import { Calendar, DollarSign } from "lucide-react"

interface TransactionCardProps {
  title: string
  amount: number
  date: string
  category: string
  status?: 'pending' | 'paid' | 'overdue'
  recurring?: boolean
}

export function TransactionCard({ title, amount, date, category, status = 'pending', recurring }: TransactionCardProps) {
  const getStatusColor = () => {
    switch (status) {
      case 'paid':
        return 'text-green-500'
      case 'overdue':
        return 'text-red-500'
      default:
        return 'text-yellow-500'
    }
  }

  return (
    <Card className="bg-[#1C1D22] border-0">
      <CardContent className="p-4">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-medium text-white">{title}</h3>
            <div className="flex items-center gap-2 mt-1 text-sm text-gray-400">
              <Calendar className="w-4 h-4" />
              <span>{date}</span>
            </div>
          </div>
          <div className="text-right">
            <div className="flex items-center gap-1">
              <DollarSign className="w-4 h-4 text-[#14F195]" />
              <span className="text-lg font-semibold text-white">{amount.toLocaleString()}</span>
            </div>
            <span className={`text-sm ${getStatusColor()}`}>{status}</span>
          </div>
        </div>
        <div className="flex justify-between items-center mt-3">
          <span className="text-sm px-2 py-1 rounded-full bg-gray-800 text-gray-300">
            {category}
          </span>
          {recurring && (
            <span className="text-sm text-blue-400">Recurring</span>
          )}
        </div>
      </CardContent>
    </Card>
  )
} 