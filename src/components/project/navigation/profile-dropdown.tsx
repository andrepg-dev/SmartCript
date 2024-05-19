import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { buttonVariants } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { HomeIcon, LayoutDashboard, LogOut, SettingsIcon } from 'lucide-react';
import Link from "next/link";

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
        <div className={buttonVariants({ size: 'icon', variant: 'outline' })}>
          <Avatar className={cn('size-5', avatarBgColor)}>
            <AvatarImage src={avatar_url} alt={`${fullName} profile image`} />
            <AvatarFallback>SC</AvatarFallback>
          </Avatar>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-[218px]">
        <DropdownMenuLabel className="flex flex-col">
          <span>{fullName}</span>
          <span className="text-xs text-muted-foreground font-normal">{email}</span>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Link href="/" className="flex items-center w-full px-2 py-1.5">
            <HomeIcon size={16} className="mr-2" />
            Inicio
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link href="/dashboard" className="flex items-center w-full px-2 py-1.5">
            <LayoutDashboard size={16} className="mr-2" />
            Panel de control
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link href="/settings" className="flex items-center w-full px-2 py-1.5">
            <SettingsIcon size={16} className="mr-2" />
            Configuracion
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link href="/logout" className="flex items-center w-full px-2 py-1.5">
            <LogOut size={16} className="mr-2" />
            Cerrar sesión
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )

}