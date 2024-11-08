'use client'

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
  ChartData,
  Filler,
} from 'chart.js'

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  Filler
)

// Export types
export type { ChartOptions, ChartData }

// Create chart options factory
export function createChartOptions(colors: {
  gridColor: string
  textColor: string
  tooltipBackground: string
  tooltipText: string
}) {
  const defaultOptions: ChartOptions<'bar'> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: colors.tooltipBackground,
        titleColor: colors.tooltipText,
        bodyColor: colors.tooltipText,
        padding: typeof window !== 'undefined' && window.innerWidth < 768 ? 16 : 12,
        cornerRadius: 8,
        bodyFont: {
          size: 14,
          family: 'Helvetica',
        },
        callbacks: {
          label: function(context) {
            return `$${context.raw?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`
          }
        }
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: colors.textColor,
          maxRotation: 45,
          minRotation: 45,
          font: {
            size: 11,
          },
        },
      },
      y: {
        grid: {
          color: colors.gridColor,
        },
        ticks: {
          color: colors.textColor,
          font: {
            size: 11,
          },
          callback: function(value) {
            return `$${value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`
          }
        },
      },
    },
    layout: {
      padding: {
        left: typeof window !== 'undefined' && window.innerWidth < 768 ? 10 : 20,
        right: typeof window !== 'undefined' && window.innerWidth < 768 ? 10 : 20,
      }
    },
  }

  const lineChartOptions: ChartOptions<'line'> = {
    responsive: true,
    maintainAspectRatio: false,
    scales: defaultOptions.scales as ChartOptions<'line'>['scales'],
    layout: defaultOptions.layout as ChartOptions<'line'>['layout'],
    plugins: {
      tooltip: {
        backgroundColor: colors.tooltipBackground,
        titleColor: colors.tooltipText,
        bodyColor: colors.tooltipText,
        padding: typeof window !== 'undefined' && window.innerWidth < 768 ? 16 : 12,
        cornerRadius: 8,
        bodyFont: {
          size: 14,
          family: 'Helvetica',
        },
        callbacks: {
          label: function(context) {
            return `$${context.raw?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`
          }
        }
      },
      legend: {
        position: 'bottom',
        align: 'end',
        labels: {
          color: colors.textColor,
          padding: 5,
          usePointStyle: true,
          pointStyle: 'circle',
          font: { 
            size: 12,
            family: 'Helvetica',
          }
        }
      },
    }
  }

  const doughnutOptions: ChartOptions<'doughnut'> = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: '75%',
    plugins: {
      legend: {
        position: typeof window !== 'undefined' && window.innerWidth < 768 ? 'bottom' : 'right',
        align: 'center',
        labels: {
          color: colors.textColor,
          padding: 20,
          usePointStyle: true,
          pointStyle: 'circle',
          font: {
            size: 12,
            family: 'Helvetica',
          },
        }
      },
      tooltip: {
        backgroundColor: colors.tooltipBackground,
        titleColor: colors.tooltipText,
        bodyColor: colors.tooltipText,
        padding: 12,
        cornerRadius: 8,
      }
    }
  }

  return { defaultOptions, lineChartOptions, doughnutOptions }
} 