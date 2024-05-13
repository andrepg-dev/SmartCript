import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { HomeIcon, LayoutDashboard, LogOut, Settings } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils";

interface ProfileDropdownProps {
  avatar_url: string;
  avatarBgColor: string;
  fullName: string;
  email: string;
}

export default function ProfileDropdown({ avatar_url, fullName, email, avatarBgColor }: ProfileDropdownProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Button variant={'outline'} size={'icon'}>
          <Avatar className={cn('size-5', avatarBgColor)}>
            <AvatarImage src={avatar_url} alt={`${fullName} profile image`} />
            <AvatarFallback>SC</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel className="flex flex-col">
          <span>{fullName}</span>
          <span className="text-xs text-muted-foreground font-normal">{email}</span>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <HomeIcon size={16} className="mr-2" />
          Home
        </DropdownMenuItem>
        <DropdownMenuItem>
          <LayoutDashboard size={16} className="mr-2" />
          Dashboard
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Settings size={16} className="mr-2" />
          Settings
        </DropdownMenuItem>
        <DropdownMenuItem>
          <LogOut size={16} className="mr-2" />
          Log out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )

}