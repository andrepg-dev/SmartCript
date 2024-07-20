import Link from "next/link"

import { IconLinkedin, IconTiktok, IconTwitter } from "@/app/icons/icons"
import GradientText from "../text/gradient"
import { cn } from "@/lib/utils"

export default function AccountsBanner({ className }: { className?: string }) {
  return (
    <div className={cn(className, 'hidden bg-muted dark:bg-muted/50 lg:flex flex-col p-12 text-balance relative h-full min-h-screen')}>

      <div className="w-full h-full absolute inset-0 opacity-50 overflow-hidden">
        <img
          src="/login.svg"
          alt="Smartcript"
          className="w-full inset-0 absolute  select-none animate-fade duration-700"
        />
      </div>

      <h3 className="text-4xl text-balance font-bold relative">
        <GradientText className="bg-[linear-gradient(45deg,#D6009A_0%,#8a56cc_50%,#D6009A_100%)] dark:bg-[linear-gradient(90deg,#FFEBF9_0%,#8a56cc_50%,#FFEBF9_100%)]">Smartcript</GradientText>
        <div className="absolute left-0">
          <img src="/linea.svg" className="w-[190px] pointer-events-none select-none" />
        </div>
        <span className="ml-2">mejora cada vez más</span>
      </h3>
      <p className="mt-12">Disfruta de nuestro planes y siguenos en nuestras redes sociales para obtener descuentos exclusivos!</p>
      <p className="mt-6">Pega una URL de Youtube, automaticamente nuestro sistema extraerá el texto y hará un resumen en base al texto</p>

      <br />
      <div className="flex gap-4">
        <Link href={'https://x.com/smartcript'} target="_blank" className="w-24 rounded-md backdrop-blur hover:bg-foreground/5 transition-colors p-4 border flex items-center justify-center">
          <IconTwitter className="size-6 fill-current" />
        </Link>

        <Link href={'https://www.tiktok.com/@smartcript'} target="_blank" className="w-24 rounded-md backdrop-blur hover:bg-foreground/5 transition-colors p-4 border flex items-center justify-center">
          <IconTiktok className="size-6 fill-current" />
        </Link>

        <Link href={'https://www.linkedin.com/in/smartcript'} target="_blank" className="w-24 rounded-md backdrop-blur hover:bg-foreground/5 transition-colors p-4 border flex items-center justify-center" >
          <IconLinkedin className="size-6 fill-current" />
        </Link>
      </div>

    </div>
  )
}