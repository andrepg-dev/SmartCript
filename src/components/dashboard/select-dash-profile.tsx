'use client'

import {
  Select,
  SelectContent,
  SelectTrigger
} from "@/components/ui/select";
import { Skeleton } from "@/components/ui/skeleton";
import useUser from "@/hooks/user";
import { cn } from "@/lib/utils";
import { Ellipsis, Flame, LogOut, UserRoundPlus } from "lucide-react";
import RadiantText from "../text/radiant-text";

export default function SelectProfile() {
  const { user } = useUser()

  return (
    <Select>
      <SelectTrigger className="w-full border-transparent hover:ring-1 ring-primary/40">
        <div className="flex overflow-hidden pointer-events-none select-none">
          <div className="aspect-square size-5 rounded bg-gradient-to-br from-red-500  to-blue-600 mr-2 text-white font-medium text-background text-center items-center flex justify-center">S</div>
          <span className={cn('font-medium w-full overflow-hidden text-ellipsis', !user && 'flex  gap-2')}>SmartCript de {user.user?.fullname ? user.user?.fullname : (<Skeleton className="w-[100px] h-[20px]"></Skeleton>)}</span>
        </div>
      </SelectTrigger>
      <SelectContent className="w-[318px] py-2 flex flex-col text-sm bg-white dark:bg-[#0a0a0a]">
        <div className="flex justify-between items-center px-3">
          <span className="text-xs  text-muted-foreground">{user && user.user?.email}</span>
          <span className="cursor-pointer size-5 rounded transition hover:bg-accent dark:hover:bg-accent/50 text-center items-center flex justify-center">
            <Ellipsis className="size-4" />
          </span>
        </div>

        <div className="my-2 px-5 py-3 flex hover:bg-accent dark:hover:bg-accent/50 transition">
          <div className="aspect-square text-background text-2xl size-9 rounded bg-gradient-to-br from-red-500  to-blue-600  mr-3 text-center items-center flex justify-center text-white">
            S
          </div>
          <div className="flex flex-col gap-1 overflow-hidden">
            <span className="text-sm text-nowrap text-ellipsis overflow-hidden ">SmartCript de {user && user.user?.fullname}</span>
            <span className="text-xs text-muted-foreground">Plan {user && user.user?.suscription_name === "FREE" && 'gratuito'}</span>
          </div>
        </div>

        {/* Divider */}
        <div className="h-[1px] bg-border"></div>
        <ul className="px-1 mt-2 text-xs dark:text-muted-foreground">
          <li className="p-2 px-3 transition hover:bg-accent dark:hover:bg-accent/50 rounded cursor-pointer flex items-center gap-1">
            <span>Agregar cuenta</span>
          </li>
          <li className="p-2 px-3 transition hover:bg-accent dark:hover:bg-accent/50 rounded cursor-pointer flex items-center gap-1">
            <span>Cerrar sesión</span>
          </li>
          
          <li className="p-2 px-3 transition hover:bg-accent dark:hover:bg-accent/50 rounded cursor-pointer flex items-center gap-1">
            <RadiantText className="font-medium">
              <span>Aumentar suscripción</span>
            </RadiantText>
          </li>
        </ul>
      </SelectContent>
    </Select>

  )
}
