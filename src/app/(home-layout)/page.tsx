import GradualSpacing from "@/components/magicui/gradual-spacing";
import GradientText from "@/components/project/text/gradient";
import { AnimateText } from "@/components/text/animation";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function HomePage() {
  return (
    <main>
      <div className="absolute inset-0 min-w-screen pointer-events-none select-none min-h-screen w-full h-full -z-10 animate-fade ">
        <img src="/background.svg" className="insert-0 w-full h-full absolute top-24 opacity-20 dark:opacity-15 pointer-events-none select-none" />
      </div>
      <div className="mt-32 text-center flex flex-col">
        <AnimateText text="Resume, transcribe, estudia y ahorra con SmartCript" className="mb-6" />

        <h1 className="mb-3 text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:leading-[1.1]">
          Mejora tu rendimiento academico
        </h1>

        <p className="text-xl dark:text-muted-foreground font-light">
          Utiliza la inteligencia articial a
          tu favor: <GradientText className="bg-[linear-gradient(45deg,#D6009A_0%,#8a56cc_50%,#D6009A_100%)] dark:bg-[linear-gradient(90deg,#FFEBF9_0%,#8a56cc_50%,#FFEBF9_100%)]">acelera tu aprendizaje</GradientText> <br />
          analiza tus PDF, DOCx, TXT y vídeos con un solo clic.</p>

        <div className="flex justify-center gap-4 mt-8">
          <Link href={'account/login'}>
            <Button>Comenzar</Button>
          </Link>
          <Button variant={'outline'}>Ver demo</Button>
        </div>
      </div>
    </main>
  )
}
