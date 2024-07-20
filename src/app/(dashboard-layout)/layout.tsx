
import { Button } from "@/components/ui/button"
import { Edit, FileArchive, FileText, Home, Search, Settings, Youtube } from "lucide-react"

import ShineBorder from "@/components/magicui/shine-border"

import AsideItem from "@/components/dashboard/aside/item"
import SelectProfile from "@/components/dashboard/select-dash-profile"
import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Dashboard: Smartcript",
  description: "SmartCript Dashboard layout",
}

export default function dashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <main className="flex">
        <section
          className="min-h-screen w-full border-r flex"
        >
          <div className="sticky top-0 left-0 h-screen bg-white dark:bg-[#0a0a0a] min-w-[280px] w-[280px] border-r">
            <div className="py-4 px-2 h-full text-sm relative flex flex-col justify-between">
              <div className="flex flex-col gap-3">
                <SelectProfile />
                <div className="w-full text-muted-foreground flex flex-col gap-[1px] cursor-pointer">
                  <Link href={'/dashboard/'}>
                    <AsideItem Icon={Home} title="Inicio" active />
                  </Link>

                  <AsideItem Icon={Search} title="Buscar" />

                  <Link href={'/dashboard/edit'}>
                    <AsideItem Icon={Edit} title="Editar perfil" />
                  </Link>

                  <Link href={'/dashboard/config'}>
                    <AsideItem Icon={Settings} title="Configuración" />
                  </Link>
                </div>

                <div className="text-muted-foreground mt-1">
                  <span className="text-xs text px-3">Resume/Transcribe</span>

                  <div className="mt-2 flex flex-col">
                    <Link href={'/dashboard/youtube'}>
                      <AsideItem Icon={Youtube} title="Video de YouTube" />
                    </Link>

                    <Link href={'/dashboard/pdf'}>
                      <AsideItem Icon={FileText} title="Archivo PDF" />
                    </Link>

                    <Link href={'/dashboard/word'}>
                      <AsideItem Icon={FileArchive} title="Archivo Word" />
                    </Link>

                    <Link href={'/dashboard/text'}>
                      <AsideItem Icon={FileText} title="Archivo de Texto" />
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

          {children}
        </section>
      </main >
    </>
  )
}