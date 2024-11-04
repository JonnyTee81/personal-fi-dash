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
  Legend
)

// Export types
export type { ChartOptions, ChartData }

// Default chart options
export const defaultOptions: ChartOptions<'bar'> = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      backgroundColor: '#1C1D22',
      padding: window?.innerWidth < 768 ? 16 : 12,
      cornerRadius: 8,
      bodyFont: {
        size: 14,
        family: 'Inter',
      },
      callbacks: {
        label: function(context) {
          return `$${context.raw?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`
        }
      },
      interaction: {
        intersect: false,
        mode: 'nearest',
      },
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
      ticks: {
        color: '#6B7280',
        maxRotation: 45,
        minRotation: 45,
        font: {
          size: 11,
        },
      },
    },
    y: {
      grid: {
        color: '#1C1D22',
      },
      ticks: {
        color: '#6B7280',
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
      left: window?.innerWidth < 768 ? 10 : 20,
      right: window?.innerWidth < 768 ? 10 : 20,
    }
  },
}

export const lineChartOptions: ChartOptions<'line'> = {
  responsive: true,
  maintainAspectRatio: false,
  interaction: {
    mode: 'nearest',
    axis: 'x',
    intersect: false
  },
  plugins: {
    legend: {
      position: 'top',
      align: 'start',
      labels: {
        color: '#fff',
        padding: 20,
        usePointStyle: true,
        pointStyle: 'circle',
        font: { 
          size: 12,
          family: 'Inter',
        }
      }
    },
    tooltip: {
      backgroundColor: '#1C1D22',
      padding: window?.innerWidth < 768 ? 16 : 12,
      cornerRadius: 8,
      bodyFont: {
        size: 14,
        family: 'Inter',
      },
      callbacks: {
        label: function(context) {
          return `${context.dataset.label}: $${context.raw?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`
        }
      },
      interaction: {
        intersect: false,
        mode: 'nearest',
      },
    }
  },
  scales: {
    x: {
      grid: {
        color: '#1C1D22',
      },
      ticks: { 
        color: '#6B7280',
        maxRotation: 45,
        minRotation: 45,
        font: {
          size: 11,
        },
      }
    },
    y: {
      grid: {
        color: '#1C1D22',
      },
      ticks: { 
        color: '#6B7280',
        font: {
          size: 11,
        },
        callback: function(value) {
          return `$${value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`
        }
      }
    }
  },
  layout: {
    padding: {
      left: window?.innerWidth < 768 ? 10 : 20,
      right: window?.innerWidth < 768 ? 10 : 20,
    }
  },
}

export const doughnutOptions: ChartOptions<'doughnut'> = {
  responsive: true,
  maintainAspectRatio: false,
  cutout: '75%',
  plugins: {
    legend: {
      position: window?.innerWidth < 768 ? 'bottom' : 'right',
      align: 'center',
      labels: {
        color: '#fff',
        padding: 20,
        usePointStyle: true,
        pointStyle: 'circle',
        font: {
          size: 12,
          family: 'Inter',
        },
        generateLabels: (chart) => {
          const data = chart.data.datasets[0].data as number[];
          const total = data.reduce((a, b) => a + b, 0);
          return chart.data.labels?.map((label, i) => ({
            text: `${label} - $${data[i]?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} (${Math.round((data[i] / total) * 100)}%)`,
            fillStyle: chart.data.datasets[0].backgroundColor?.[i],
            hidden: false,
            lineCap: undefined,
            lineDash: undefined,
            lineDashOffset: undefined,
            lineJoin: undefined,
            lineWidth: undefined,
            strokeStyle: undefined,
            pointStyle: 'circle',
            rotation: undefined,
          })) || []
        }
      }
    }
  }
} 