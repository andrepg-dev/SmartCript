"use client"

import * as React from "react"
import { MoonIcon, SunIcon } from "@radix-ui/react-icons"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import { TooltipElement } from "@/components/shadcn/tooltip"

export function ThemeButton() {
  const { setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)
  React.useEffect(() => {
    setMounted(true)
  }, [])

  const toggleTheme = () => {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
  }

  const label = resolvedTheme === 'dark' ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'

  if (!mounted) {
    return (
      <Button variant="outline" size="icon" className="aspect-square" disabled aria-label="Cargando tema">
        <SunIcon className="h-[1.2rem] w-[1.2rem]" />
      </Button>
    )
  }

  return (
    <TooltipElement text={label}>
      <Button
        onClick={toggleTheme}
        variant="outline"
        size="icon"
        className="aspect-square"
        aria-label={label}
      >
        <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      </Button>
    </TooltipElement>
  )
}
