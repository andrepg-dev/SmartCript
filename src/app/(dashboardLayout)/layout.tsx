import Aside from "@/components/dashboard/aside/aside"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Dashboard: SmartCript",
  description: "Accede al panel de control de SmartCript para gestionar y resumir tus archivos PDF, Word, TXT y vídeos de manera eficiente y rápida. Descubre herramientas avanzadas y personalizadas para optimizar tu flujo de trabajo y mejorar tu productividad.",
}

export default function dashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <main className="flex">
        <section
          className="min-h-screen w-full border-r flex"
        >
          <Aside />

          {children}
        </section>
      </main >
    </>
  )
}