'use client'

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"
import { useEffect, useState } from "react"

import {
  Select,
  SelectContent,
  SelectTrigger
} from "@/components/ui/select"
import { Edit, Ellipsis, Search, Settings } from "lucide-react"
import ProfileDropdown from "@/components/project/navigation/profile-dropdown"
import { ThemeButton } from "@/components/theme/theme-button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"


export default function Dashboard() {
  const [user, setUser] = useState<any>()

  useEffect(() => {
    (async () => {
      const userProfile = await fetch('/api/auth/profile', { method: 'POST' })
      const data = await userProfile.json();
      console.log(data);

      setUser(data)
    })()
  }, [])

  if (!user) return <div></div>

  return (
    <main className="flex">
      <ResizablePanelGroup
        direction="horizontal"
        className="min-h-screen w-full border-r"
      >
        <ResizablePanel defaultSize={20} maxSize={20}>
          <div className="py-4 px-2 h-full text-sm relative">
            {/* USUARIO */}

            <Select>
              <SelectTrigger className="w-full border-none">
                <div className="flex overflow-hidden pointer-events-none select-none">
                  <div className="aspect-square size-5 rounded bg-muted-foreground mr-2 text-background text-center items-center flex justify-center">S</div>
                  <span className="font-medium w-full overflow-hidden text-ellipsis ">SmartCript de {user.fullname}</span>
                </div>
              </SelectTrigger>
              <SelectContent className="w-[318px] py-2 flex flex-col text-sm">
                <div className="flex justify-between items-center px-3">
                  <span className="text-xs  text-muted-foreground">{user.email}</span>
                  <span className="cursor-pointer size-5 rounded transition hover:bg-accent dark:hover:bg-accent/50 text-center items-center flex justify-center">
                    <Ellipsis className="size-4" />
                  </span>
                </div>

                <div className="my-2 px-5 py-3 flex hover:bg-accent dark:hover:bg-accent/50 transition">
                  <div className="aspect-square text-background text-2xl size-9 rounded bg-muted-foreground mr-3 text-center items-center flex justify-center">
                    S
                  </div>
                  <div className="flex flex-col gap-1 overflow-hidden">
                    <span className="text-sm text-nowrap text-ellipsis overflow-hidden ">SmartCript de {user.fullname}</span>
                    <span className="text-xs text-muted-foreground">Plan {user.suscription_name === "FREE" && 'gratuito'}</span>
                  </div>
                </div>

                {/* Divider */}
                <div className="h-[1px] bg-border"></div>
                <ul className="px-1 mt-2 text-xs dark:text-muted-foreground">
                  <li className="p-2 px-3 transition hover:bg-accent dark:hover:bg-accent/50 rounded cursor-pointer">Aumentar suscripción</li>
                  <li className="p-2 px-3 transition hover:bg-accent dark:hover:bg-accent/50 rounded cursor-pointer">Agregar cuenta</li>
                  <li className="p-2 px-3 transition hover:bg-accent dark:hover:bg-accent/50 rounded cursor-pointer">Cerrar sesión</li>
                </ul>
              </SelectContent>
            </Select>

            <div className="mt-3 w-full text-muted-foreground">
              <span className="w-full py-2 px-3 rounded transition hover:bg-accent dark:hover:bg-accent/50 flex items-center cursor-pointer">
                <Search className="size-5 mr-2" />
                Buscar
              </span>
              <span className="w-full py-2 px-3 rounded transition hover:bg-accent dark:hover:bg-accent/50 flex items-center cursor-pointer">
                <Edit className="size-5 mr-2" />
                Editar perfil
              </span>
              <span className="w-full py-2 px-3 rounded transition hover:bg-accent dark:hover:bg-accent/50 flex items-center cursor-pointer">
                <Settings className="size-5 mr-2" />
                Configuración
              </span>
            </div>

            <div className="aspect-video border rounded flex flex-col p-4">
              <h3 className="text-2xl font-semibold">Subir a Premium</h3>
              <p className="text-muted-foreground">Desbloquee todas las funciones y obtenga acceso ilimitado a nuestro equipo de soporte.</p>

              <Button className="mt-1">Upgrade</Button>
            </div>
          </div>
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel>
          <div className="border-b flex justify-between px-6">
            <span className="w-full flex items-center py-4">Panel de control</span>
            <div className="flex gap-2 items-center">
              <ThemeButton />
              <ProfileDropdown
                avatarBgColor={user.avatar_color}
                avatar_url={user.avatar}
                fullName={user.fullname}
                email={user.email}
              />
            </div>
          </div>

          <div className="px-6 py-4">

          </div>

        </ResizablePanel>
      </ResizablePanelGroup>
    </main>
  )
} 
