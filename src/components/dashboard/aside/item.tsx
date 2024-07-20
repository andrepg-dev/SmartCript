import { cn } from '@/lib/utils'
import React from 'react'

export default function AsideItem({ Icon, title, active }: { Icon: any, title: string, active?: boolean }) {
  return (
    <span className={cn(
      'w-full py-2 px-3 rounded hover:text-foreground flex items-center cursor-pointer',
      active && 'bg-accent dark:bg-accent/50 text-accent-foreground dark:text-foreground'
    )}>
      <Icon className="size-5 mr-2" />
      {title}
    </span>
  )
}
