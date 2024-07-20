import { cn } from '@/lib/utils'
import React from 'react'

export default function Title({ children, className }: { children: React.ReactNode, className?: string }) {
  return (
    <h3 className={cn('text-lg font-semibold md:text-2xl cursor-default', className)}>{children}</h3>
  )
}
