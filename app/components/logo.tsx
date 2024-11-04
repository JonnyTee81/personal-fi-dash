'use client'

export function Logo() {
  return (
    <div className="flex items-center gap-2">
      <div className="relative w-8 h-8">
        <div className="absolute inset-0 bg-primary rounded-lg rotate-45"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-xl font-bold text-primary-foreground">A</span>
        </div>
      </div>
      <div className="flex flex-col">
        <span className="text-lg font-bold leading-none text-foreground">Agora</span>
        <span className="text-sm text-muted-foreground leading-none">Wealth</span>
      </div>
    </div>
  )
} 