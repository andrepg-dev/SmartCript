import {
  Tooltip,
  TooltipContent,
  TooltipTrigger
} from "@/components/ui/tooltip"
import React from "react"

export function TooltipElement({ children, text, duration }: { children: React.ReactNode, text: React.ReactNode, duration?: number }) {
  return (
    <Tooltip delayDuration={duration}>
      <TooltipTrigger asChild>
        {children}
      </TooltipTrigger>
      <TooltipContent>
        {text}
      </TooltipContent>
    </Tooltip>
  )
}
