import { type ChartOptions } from 'chart.js'

export type ChartData<T extends 'line' | 'bar' | 'pie'> = {
  labels: string[]
  datasets: {
    data: number[]
    backgroundColor?: string | string[]
    borderColor?: string | string[]
    borderRadius?: number
  }[]
}

export const defaultOptions: ChartOptions = {
  responsive: true,
  plugins: {
    legend: {
      display: false
    }
  },
  scales: {
    x: {
      grid: {
        display: false
      }
    },
    y: {
      grid: {
        display: false
      }
    }
  }
} 