'use client'

import '@/lib/chart-registry'
import { ChartOptions } from 'chart.js'
import { ThemeColors } from '@/hooks/use-theme-colors'

export type ChartData<T extends 'line' | 'bar' | 'doughnut'> = {
  labels: string[]
  datasets: {
    label?: string
    data: number[]
    borderColor?: string
    backgroundColor?: string | string[] | ((context: any) => string)
    tension?: number
    fill?: boolean
    borderWidth?: number
    borderRadius?: number
    maxBarThickness?: number
    pointRadius?: number
  }[]
}

export function createChartOptions(colors: ThemeColors): {
  lineChartOptions: ChartOptions<'line'>
  barChartOptions: ChartOptions<'bar'>
  doughnutOptions: ChartOptions<'doughnut'>
} {
  const baseOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom' as const,
        labels: {
          color: colors.textColor,
          padding: 20,
          usePointStyle: true,
          pointStyle: 'circle',
        },
      },
      tooltip: {
        mode: 'index' as const,
        intersect: false,
        backgroundColor: colors.tooltipBackground,
        titleColor: colors.tooltipText,
        bodyColor: colors.tooltipText,
        borderColor: colors.borderColor,
        borderWidth: 1,
        padding: 12,
      },
    },
    scales: {
      x: {
        grid: {
          color: colors.gridColor,
          drawBorder: false,
        },
        ticks: {
          color: colors.textColor,
        },
      },
      y: {
        grid: {
          color: colors.gridColor,
          drawBorder: false,
        },
        ticks: {
          color: colors.textColor,
        },
      },
    },
    interaction: {
      intersect: false,
      mode: 'index' as const,
    },
  }

  return {
    lineChartOptions: {
      ...baseOptions,
    },
    barChartOptions: {
      ...baseOptions,
    },
    doughnutOptions: {
      responsive: true,
      maintainAspectRatio: false,
      cutout: '75%',
      plugins: {
        legend: {
          position: 'right' as const,
          labels: {
            color: colors.textColor,
            padding: 20,
            usePointStyle: true,
            pointStyle: 'circle',
          },
        },
        tooltip: {
          backgroundColor: colors.tooltipBackground,
          titleColor: colors.tooltipText,
          bodyColor: colors.tooltipText,
          borderColor: colors.borderColor,
          borderWidth: 1,
          padding: 12,
        },
      },
      scales: {
        x: {
          display: false,
        },
        y: {
          display: false,
        },
      },
    },
  }
} 