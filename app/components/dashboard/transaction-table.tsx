'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useState } from "react"
import { Calendar, Tag, Filter, ArrowUpDown, Check } from "lucide-react"

interface Transaction {
  id: string
  date: string
  description: string
  amount: number
  category: string
  account: string
  tags: string[]
  type: 'credit' | 'debit'
}

export function TransactionTable() {
  const [sortConfig, setSortConfig] = useState<{
    key: keyof Transaction
    direction: 'asc' | 'desc'
  }>({ key: 'date', direction: 'desc' })
  
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [selectedAccount, setSelectedAccount] = useState<string>('all')
  const [editingCategory, setEditingCategory] = useState<string | null>(null)

  const transactions: Transaction[] = [
    {
      id: '1',
      date: '2024-03-15',
      description: 'Whole Foods Market',
      amount: 89.52,
      category: 'Groceries',
      account: 'Chase Checking',
      tags: ['food', 'organic'],
      type: 'debit'
    },
    {
      id: '2',
      date: '2024-03-14',
      description: 'Monthly Salary',
      amount: 5000.00,
      category: 'Income',
      account: 'Bank of America',
      tags: ['salary'],
      type: 'credit'
    },
    {
      id: '3',
      date: '2024-03-14',
      description: 'Amazon Prime',
      amount: 14.99,
      category: 'Subscriptions',
      account: 'Chase Credit',
      tags: ['streaming'],
      type: 'debit'
    },
    {
      id: '4',
      date: '2024-03-13',
      description: 'Uber Ride',
      amount: 24.50,
      category: 'Transportation',
      account: 'Chase Credit',
      tags: ['ride-share'],
      type: 'debit'
    },
    {
      id: '5',
      date: '2024-03-13',
      description: 'Starbucks',
      amount: 6.75,
      category: 'Dining',
      account: 'Chase Debit',
      tags: ['coffee'],
      type: 'debit'
    },
    {
      id: '6',
      date: '2024-03-12',
      description: 'Netflix',
      amount: 15.99,
      category: 'Subscriptions',
      account: 'Chase Credit',
      tags: ['streaming'],
      type: 'debit'
    },
    {
      id: '7',
      date: '2024-03-12',
      description: 'Rent Payment',
      amount: 2200.00,
      category: 'Housing',
      account: 'Chase Checking',
      tags: ['rent'],
      type: 'debit'
    },
    {
      id: '8',
      date: '2024-03-11',
      description: 'Freelance Payment',
      amount: 1500.00,
      category: 'Income',
      account: 'Bank of America',
      tags: ['freelance'],
      type: 'credit'
    },
    {
      id: '9',
      date: '2024-03-11',
      description: 'Gas Station',
      amount: 45.00,
      category: 'Transportation',
      account: 'Chase Credit',
      tags: ['gas'],
      type: 'debit'
    },
    {
      id: '10',
      date: '2024-03-10',
      description: 'Gym Membership',
      amount: 50.00,
      category: 'Health',
      account: 'Chase Credit',
      tags: ['fitness'],
      type: 'debit'
    },
    {
      id: '11',
      date: '2024-03-10',
      description: 'Target',
      amount: 127.83,
      category: 'Shopping',
      account: 'Chase Credit',
      tags: ['retail'],
      type: 'debit'
    },
    {
      id: '12',
      date: '2024-03-09',
      description: 'Electric Bill',
      amount: 145.67,
      category: 'Utilities',
      account: 'Chase Checking',
      tags: ['bills'],
      type: 'debit'
    },
    {
      id: '13',
      date: '2024-03-09',
      description: 'Restaurant',
      amount: 85.00,
      category: 'Dining',
      account: 'Chase Credit',
      tags: ['dining-out'],
      type: 'debit'
    },
    {
      id: '14',
      date: '2024-03-08',
      description: 'Investment Dividend',
      amount: 250.00,
      category: 'Income',
      account: 'Fidelity',
      tags: ['dividend'],
      type: 'credit'
    },
    {
      id: '15',
      date: '2024-03-08',
      description: 'Phone Bill',
      amount: 85.00,
      category: 'Utilities',
      account: 'Chase Credit',
      tags: ['bills'],
      type: 'debit'
    },
    {
      id: '16',
      date: '2024-03-07',
      description: 'CVS Pharmacy',
      amount: 32.47,
      category: 'Health',
      account: 'Chase Credit',
      tags: ['medical'],
      type: 'debit'
    },
    {
      id: '17',
      date: '2024-03-07',
      description: 'Internet Bill',
      amount: 79.99,
      category: 'Utilities',
      account: 'Chase Checking',
      tags: ['bills'],
      type: 'debit'
    },
    {
      id: '18',
      date: '2024-03-06',
      description: 'Spotify',
      amount: 9.99,
      category: 'Subscriptions',
      account: 'Chase Credit',
      tags: ['streaming'],
      type: 'debit'
    },
    {
      id: '19',
      date: '2024-03-06',
      description: 'Home Insurance',
      amount: 150.00,
      category: 'Insurance',
      account: 'Chase Checking',
      tags: ['insurance'],
      type: 'debit'
    },
    {
      id: '20',
      date: '2024-03-05',
      description: 'Side Project Income',
      amount: 750.00,
      category: 'Income',
      account: 'Bank of America',
      tags: ['freelance'],
      type: 'credit'
    }
  ]

  const categories = [
    'all',
    'Groceries',
    'Income',
    'Transportation',
    'Entertainment',
    'Bills',
    'Dining',
    'Shopping',
    'Health',
    'Utilities',
    'Insurance',
    'Housing',
    'Subscriptions'
  ]
  
  const accounts = ['all', 'Chase Checking', 'Chase Credit', 'Bank of America', 'Fidelity']

  const filteredTransactions = transactions
    .filter(t => selectedCategory === 'all' || t.category === selectedCategory)
    .filter(t => selectedAccount === 'all' || t.account === selectedAccount)
    .sort((a, b) => {
      const aValue = a[sortConfig.key]
      const bValue = b[sortConfig.key]
      if (sortConfig.direction === 'asc') {
        return aValue < bValue ? -1 : 1
      }
      return aValue > bValue ? -1 : 1
    })

  const handleSort = (key: keyof Transaction) => {
    setSortConfig(current => ({
      key,
      direction: current.key === key && current.direction === 'asc' ? 'desc' : 'asc'
    }))
  }

  const handleCategoryChange = (transactionId: string, newCategory: string) => {
    // In a real app, this would update the database
    console.log(`Updating transaction ${transactionId} category to ${newCategory}`)
    setEditingCategory(null)
  }

  return (
    <Card className="bg-card border-0">
      <CardHeader>
        <div className="flex flex-col md:flex-row justify-between gap-4">
          <CardTitle>Transactions</CardTitle>
          <div className="flex gap-4">
            <select
              className="px-3 py-1 rounded-lg bg-accent text-accent-foreground"
              value={selectedAccount}
              onChange={(e) => setSelectedAccount(e.target.value)}
            >
              {accounts.map(account => (
                <option key={account} value={account}>
                  {account === 'all' ? 'All Accounts' : account}
                </option>
              ))}
            </select>
            <select
              className="px-3 py-1 rounded-lg bg-accent text-accent-foreground"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              {categories.map(category => (
                <option key={category} value={category}>
                  {category === 'all' ? 'All Categories' : category}
                </option>
              ))}
            </select>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3 px-4">
                  <button
                    onClick={() => handleSort('date')}
                    className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground"
                  >
                    <Calendar className="w-4 h-4" />
                    Date
                    <ArrowUpDown className="w-3 h-3" />
                  </button>
                </th>
                <th className="text-left py-3 px-4">Description</th>
                <th className="text-left py-3 px-4">Category</th>
                <th className="text-left py-3 px-4">Account</th>
                <th className="text-right py-3 px-4">
                  <button
                    onClick={() => handleSort('amount')}
                    className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground ml-auto"
                  >
                    Amount
                    <ArrowUpDown className="w-3 h-3" />
                  </button>
                </th>
                <th className="text-left py-3 px-4">Tags</th>
              </tr>
            </thead>
            <tbody>
              {filteredTransactions.map((transaction) => (
                <tr key={transaction.id} className="border-b border-border">
                  <td className="py-3 px-4 text-sm">{transaction.date}</td>
                  <td className="py-3 px-4">{transaction.description}</td>
                  <td className="py-3 px-4">
                    {editingCategory === transaction.id ? (
                      <div className="flex items-center gap-2">
                        <select
                          className="px-2 py-1 rounded-lg bg-accent text-accent-foreground"
                          defaultValue={transaction.category}
                          onChange={(e) => handleCategoryChange(transaction.id, e.target.value)}
                          onBlur={() => setEditingCategory(null)}
                        >
                          {categories.filter(c => c !== 'all').map(category => (
                            <option key={category} value={category}>
                              {category}
                            </option>
                          ))}
                        </select>
                        <button 
                          onClick={() => setEditingCategory(null)}
                          className="p-1 hover:bg-accent rounded-full"
                        >
                          <Check className="w-4 h-4 text-green-500" />
                        </button>
                      </div>
                    ) : (
                      <button
                        onClick={() => setEditingCategory(transaction.id)}
                        className="px-2 py-1 text-sm rounded-full bg-accent hover:bg-accent/80 transition-colors"
                      >
                        {transaction.category}
                      </button>
                    )}
                  </td>
                  <td className="py-3 px-4 text-sm">{transaction.account}</td>
                  <td className={`py-3 px-4 text-right font-medium ${
                    transaction.type === 'credit' ? 'text-green-500' : ''
                  }`}>
                    {transaction.type === 'credit' ? '+' : '-'}${transaction.amount.toFixed(2)}
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex gap-2">
                      {transaction.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary"
                        >
                          {tag}
                        </span>
                      ))}
                      <button className="p-1 hover:bg-accent rounded-full">
                        <Tag className="w-4 h-4 text-muted-foreground" />
                      </button>
                    </div>
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