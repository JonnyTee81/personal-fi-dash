'use client'

import { useTheme } from 'next-themes'

export interface ThemeColors {
  textColor: string
  gridColor: string
  tooltipBackground: string
  tooltipText: string
  borderColor: string
}

export function useThemeColors(): ThemeColors {
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  return {
    textColor: isDark ? 'rgba(255, 255, 255, 0.7)' : 'rgba(0, 0, 0, 0.7)',
    gridColor: isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
    tooltipBackground: isDark ? '#1f2937' : '#ffffff',
    tooltipText: isDark ? '#ffffff' : '#000000',
    borderColor: isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
  }
} 