'use client'

import { Chart, registerables } from 'chart.js'
import { ReactNode } from 'react'

Chart.register(...registerables)

export function ChartRegistry({ children }: { children: ReactNode }) {
  return <>{children}</>
} 