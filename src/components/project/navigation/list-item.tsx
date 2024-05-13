import { NavigationMenuLink } from '@/components/ui/navigation-menu';
import { cn } from '@/lib/utils';
import React from 'react';

// flex items-center gap-1 hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground transition-colors rounded-md px-4 w-[300px]

export const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  // Agregar icon
  { icon?: React.ReactNode } & {
    // with
    width?: string;
  } & React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, icon, ...props }, ref) => {
  return (
    <li
      className={cn(
        'flex items-center text-sm gap-1 rounded-md px-4 transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
        props.width ?? 'w-[300px]',
      )}
    >
      <span className="flex aspect-square size-8 items-center justify-center rounded-md bg-zinc-100">
        {icon}
      </span>

      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors ',
            className,
          )}
          {...props}
        >
          <div className="font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = 'ListItem';
