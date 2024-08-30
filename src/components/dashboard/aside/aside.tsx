'use client'

import { Button } from "@/components/ui/button"
import { Crown, Edit, FileArchive, FileText, FileVideo, FolderClock, Home, Search, Settings, Video, Youtube } from "lucide-react"
import ShineBorder from "@/components/magicui/shine-border"
import AsideItem from "@/components/dashboard/aside/item"
import SelectProfile from "@/components/dashboard/select-dash-profile"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Aside() {
  const pathname = usePathname();

  const isActive = (path: string) => pathname == path

  return (
    <div className="sticky top-0 left-0 bg-white dark:bg-[#0a0a0a] min-w-[280px] w-[280px] border-r h-svh overflow-y-auto aside-scrollbar">
      <div className="py-4 px-2 text-sm relative flex flex-col justify-between mb-6">
        <div className="flex flex-col gap-3">
          <SelectProfile />
          <div className="w-full text-zinc-900 dark:text-muted-foreground flex flex-col gap-[1px] cursor-pointer">
            <Link href="/dashboard/">
              <AsideItem Icon={Home} title="Inicio" active={isActive('/dashboard')} />
            </Link>

            <AsideItem Icon={Search} title="Buscar" />

            <Link href="/dashboard/edit">
              <AsideItem Icon={Edit} title="Editar perfil" active={isActive('/dashboard/edit')} />
            </Link>

            <Link href="/dashboard/settings">
              <AsideItem Icon={Settings} title="Configuración" active={isActive('/dashboard/settings')} />
            </Link>
          </div>

          <div className="text-zinc-900 dark:text-muted-foreground mt-1">
            <span className="text-xs text px-3">Resume/Transcribe</span>

            <div className="mt-2 flex flex-col gap-1">
              <Link href="/dashboard/youtube">
                <AsideItem Icon={Youtube} title="Video de YouTube" active={isActive('/dashboard/youtube')} />
              </Link>

              <Link href="/dashboard/pdf">
                <AsideItem Icon={FileText} title="Archivo PDF" active={isActive('/dashboard/pdf')} />
              </Link>

              <Link href="/dashboard/word">
                <AsideItem Icon={FileArchive} title="Archivo Word" active={isActive('/dashboard/word')} />
              </Link>

              <Link href="/dashboard/text">
                <AsideItem Icon={FileText} title="Archivo de Texto" active={isActive('/dashboard/text')} />
              </Link>
            </div>
          </div>
        </div>

        <div className="text-zinc-900 dark:text-muted-foreground mt-1 mb-12">
          <span className="text-xs text px-3">Historial de videos</span>

          <div className="mt-2">
            <Link href="/dashboard/youtube">
              <AsideItem Icon={FolderClock} title="CLON DE Paint Windows 95 DESDE CERO | HTML, CSS JAVASCRIPT" />
            </Link>
          </div>
        </div>

        <ShineBorder color={["#A07CFE", "#FE8FB5", "#FFBE7B"]} className="aspect-video flex flex-col p-4 dark:bg-background bg-gradient-to-r from-fuchsia-500 to-cyan-500 dark:from-background dark:to-background text-white">
          <h3 className="text-2xl font-bold">Plan Premium</h3>
          <p className="text-zinc-200 dark:text-muted-foreground mt-2">Desbloquee todas las funciones y obtenga acceso ilimitado a nuestro equipo de soporte.</p>
          <Button className="mt-3 w-full bg-white text-black hover:bg-white hover:scale-105 flex items-center gap-1">
            <Crown className="fill-orange-500 w-4 h-auto text-orange-500" />
            Desbloquear
          </Button>
        </ShineBorder>
      </div>
    </div>
  )
}
