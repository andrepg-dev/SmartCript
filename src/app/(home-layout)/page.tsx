import GradientText from "@/components/project/text/gradient";
import { AnimateText } from "@/components/text/animation";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function HomePage() {
  return (
    <main>
      <div className="absolute inset-0 min-w-screen pointer-events-none select-none min-h-screen w-full h-full -z-10 animate-fade bg-[radial-gradient(circle_at_50%_50%,rgba(138,86,204,0.1),transparent_50%)]">
      </div>
      <div className="mt-36 text-center flex flex-col px-4">
        <AnimateText text="Resume, transcribe y ahorra tiempo con SmartCript" className="mb-6" />

        <h1 className="mb-3 text-4xl font-bold leading-tight tracking-tighter md:text-6xl lg:leading-[1.1]">
          Tu Asistente de Estudio con IA
        </h1>

        <p className="text-xl dark:text-muted-foreground font-light max-w-3xl mx-auto">
          Potencia tu aprendizaje con inteligencia artificial.
          <br />
          <GradientText className="bg-[linear-gradient(45deg,#D6009A_0%,#8a56cc_50%,#D6009A_100%)] dark:bg-[linear-gradient(90deg,#FFEBF9_0%,#8a56cc_50%,#FFEBF9_100%)]">
            Resume videos de YouTube, PDFs y documentos
          </GradientText>
          {" "}al instante con un solo clic.
        </p>

        <div className="flex justify-center gap-4 mt-8">
          <Link href={'account/login'}>
            <Button size="lg">Empieza gratis</Button>
          </Link>
          <Link href={'/pricing'}>
            <Button variant={'outline'} size="lg">Ver precios</Button>
          </Link>
        </div>

        <section className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto text-left">
          <div className="p-6 border rounded-xl bg-card">
            <h3 className="text-xl font-bold mb-2">Videos de YouTube</h3>
            <p className="text-muted-foreground">Obtén transcripciones y resúmenes de cualquier video en segundos. Ideal para conferencias y tutoriales.</p>
          </div>
          <div className="p-6 border rounded-xl bg-card">
            <h3 className="text-xl font-bold mb-2">Documentos PDF y Word</h3>
            <p className="text-muted-foreground">Sube tus lecturas pesadas y SmartCript extraerá los puntos clave para que no pierdas tiempo.</p>
          </div>
          <div className="p-6 border rounded-xl bg-card">
            <h3 className="text-xl font-bold mb-2">Chat con IA</h3>
            <p className="text-muted-foreground">Haz preguntas directas a tus documentos o videos y obtén respuestas precisas basadas en el contenido.</p>
          </div>
        </section>
      </div>
    </main>
  )
}
