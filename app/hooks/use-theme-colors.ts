'use client'

import { useTheme } from 'next-themes'

export function useThemeColors() {
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  return {
    gridColor: isDark ? '#1C1D22' : '#E5E7EB',
    textColor: isDark ? '#6B7280' : '#4B5563',
    tooltipBackground: isDark ? '#1C1D22' : '#FFFFFF',
    tooltipText: isDark ? '#FFFFFF' : '#000000',
    chartBackground: isDark ? '#1C1D22' : '#FFFFFF',
  }
} 