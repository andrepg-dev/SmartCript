'use client'

import { Button } from "@/components/ui/button"
import { Edit, FileArchive, FileText, Home, Search, Settings, Youtube } from "lucide-react"
import ShineBorder from "@/components/magicui/shine-border"
import AsideItem from "@/components/dashboard/aside/item"
import SelectProfile from "@/components/dashboard/select-dash-profile"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Aside() {
  const pathname = usePathname();

  const isActive = (path: string) => pathname == path

  return (
    <div className="sticky top-0 left-0 h-screen bg-white dark:bg-[#0a0a0a] min-w-[280px] w-[280px] border-r">
      <div className="py-4 px-2 h-full text-sm relative flex flex-col justify-between">
        <div className="flex flex-col gap-3">
          <SelectProfile />
          <div className="w-full text-muted-foreground flex flex-col gap-[1px] cursor-pointer">
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

          <div className="text-muted-foreground mt-1">
            <span className="text-xs text px-3">Resume/Transcribe</span>

            <div className="mt-2 flex flex-col">
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

        <ShineBorder color={["#A07CFE", "#FE8FB5", "#FFBE7B"]} className="aspect-video flex flex-col p-4 bg-background">
          <h3 className="text-2xl font-semibold">Plan Premium</h3>
          <p className="text-muted-foreground mt-2">Desbloquee todas las funciones y obtenga acceso ilimitado a nuestro equipo de soporte.</p>
          <Button className="mt-3 w-full">Subir a premium</Button>
        </ShineBorder>
      </div>
    </div>
  )
}
