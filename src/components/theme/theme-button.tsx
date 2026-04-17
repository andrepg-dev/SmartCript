"use client"

import * as React from "react"
import { MoonIcon, SunIcon } from "@radix-ui/react-icons"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import { TooltipElement } from "@/components/shadcn/tooltip"

export function ThemeButton() {
  const { setTheme, theme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  // Avoid hydration mismatch by only rendering after mount
  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <Button
        variant="outline"
        size="icon"
        className="aspect-square"
        disabled
        aria-label="Cargando tema"
      >
        <SunIcon className="h-[1.2rem] w-[1.2rem]" />
      </Button>
    )
  }

  return (
    <TooltipElement text={theme === 'dark' ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}>
      <Button
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        variant="outline"
        size="icon"
        className="aspect-square"
        aria-label={theme === 'dark' ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
      >
        <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      </Button>
    </TooltipElement>
  )
}
