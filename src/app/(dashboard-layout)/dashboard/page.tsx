'use client'


import ProfileDropdown from "@/components/project/navigation/profile-dropdown"
import { ThemeButton } from "@/components/theme/theme-button"
import { FileArchive, FileText, Youtube } from "lucide-react"

import DashboardBanner from "@/components/dashboard/Dashboard-Banner"
import LoadingResume from "@/components/dashboard/loading-resume"
import ResumeCardFile from "@/components/dashboard/Resume-Card-File"
import ResumeCard from "@/components/dashboard/Resume-Card-YouTube"
import StatisticsCard from "@/components/dashboard/Statistics-Card"
import Title from "@/components/dashboard/Title"
import { TooltipElement } from "@/components/shadcn/tooltip"
import useUser from "@/hooks/user"

export default function Dashboard() {
  const { user } = useUser()

  const accept = {
    pdf: { 'application/pdf': ['.pdf'] },
    word: {
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['.docx'],
    },
    txt: { 'text/plain': ['.txt'] }
  }


  return (
    <div className="pb-8 bg-[#FAFAFA] dark:bg-background relative">

      <LoadingResume />

      <header className="border-b flex justify-between px-6 bg-white dark:bg-[#0a0a0a] ">
        <span className="w-full flex items-center py-4">Panel de control</span>
        <div className="flex gap-2 items-center">
          <ThemeButton />
          {user.user && user && (
            <ProfileDropdown
              avatarBgColor={user.user.avatar_color || 'bg-primary'}
              avatar_url={user.user.avatar}
              fullName={user.user.fullname}
              email={user.user.email}
            />
          )}
        </div>
      </header>

      <div className="px-6 pt-8">
        <Title>
          <TooltipElement
            text={<p className="max-w-[35ch]">Las transcripciones de un video son una forma sencilla de crear subtítulos</p>}
            duration={0}
          >
            <span>Transcribir</span>
          </TooltipElement>
          /
          <TooltipElement
            duration={0}
            text={<p className="max-w-[35ch]">Reducir a términos breves y precisos, o considerar tan solo y repetir abreviadamente lo esencial de un asunto o materia.</p>}
          >
            <span>Resumir</span>
          </TooltipElement>
        </Title>

        <section className="grid grid-cols-2 mt-8 gap-6">
          <ResumeCard
            Icon={Youtube}
            description="Resume y transcribe fácilmente tu video de YouTube: pega el enlace en el campo proporcionado y obtén un análisis completo."
            title="YouTube"
          />

          <ResumeCardFile
            title="Archivo PDF"
            description="Resume y extrae el texto de tu archivo PDF de manera sencilla: arrastra y suelta el archivo
en este campo."
            type="PDF"
            accept={accept.pdf}
          />
          <ResumeCardFile
            title="Archivo Word"
            description="Resume y extrae el texto de tu archivo PDF de manera sencilla: arrastra y suelta el archivo
en este campo."
            type="Word"
            accept={accept.word}
          />

          <ResumeCardFile
            title="Archivo de Texto"
            description="Resume y extrae el texto de tu archivo PDF de manera sencilla: arrastra y suelta el archivo en este campo."
            type="TXT"
            accept={accept.txt}
          />
        </section>
      </div>
      <div className="px-6 py-8">
        <Title>Estadísticas</Title>

        <div className="mt-8 grid grid-cols-3 gap-6">
          <StatisticsCard Icon={Youtube} value={4127} description="Videos de YouTube resumidos" />
          <StatisticsCard Icon={FileText} value={2434} description="Total de Archivos PDF resumidos" />
          <StatisticsCard Icon={FileArchive} value={1328} description="Total de Archivos Word resumidos" />
          <StatisticsCard Icon={FileText} value={584} description="Total Archivos de Texto resumidos" />

          {user && <DashboardBanner userName={user.user?.fullname || ''} />}
        </div>
      </div>
    </div>
  )
} 
