import { cn } from '@/lib/utils'
import React from 'react'

export default function AsideItem({ Icon, title, active }: { Icon: any, title: string, active?: boolean }) {
  return (
    <div className={cn(
      'w-full py-2 px-3 rounded flex items-center cursor-pointer ',
      active ? 'bg-primary/10 text-accent-foreground text-blue-500 font-medium' : 'hover:bg-primary/5 hover:text-foreground'
    )}
      title={title}
    >
      <Icon className="size-5 mr-2" />
      <span className='line-clamp-1'>{title}</span>
    </div>
  )
}
