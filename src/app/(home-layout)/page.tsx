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

        <section className="mt-32 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12">Lo que dicen nuestros usuarios</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            <div className="p-6 bg-muted/30 rounded-2xl italic">
              &quot;SmartCript ha cambiado totalmente mi forma de estudiar. Puedo resumir una hora de clase en 5 minutos. ¡Increíble!&quot;
              <p className="mt-4 font-bold not-italic">— Maria G., Estudiante de Medicina</p>
            </div>
            <div className="p-6 bg-muted/30 rounded-2xl italic">
              &quot;La mejor inversión para mi productividad. El chat con IA me ayuda a encontrar datos específicos en PDFs de 100 páginas al instante.&quot;
              <p className="mt-4 font-bold not-italic">— Juan P., Investigador</p>
            </div>
          </div>
        </section>

        <section className="mt-32 mb-24 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Preguntas Frecuentes</h2>
          <div className="space-y-6 text-left">
            <div className="border-b pb-4">
              <h4 className="font-bold mb-2">¿Es realmente gratis?</h4>
              <p className="text-muted-foreground">Sí, ofrecemos un plan gratuito generoso para que pruebes la potencia de nuestra IA.</p>
            </div>
            <div className="border-b pb-4">
              <h4 className="font-bold mb-2">¿Qué formatos de archivo soportan?</h4>
              <p className="text-muted-foreground">Soportamos PDF, Word (DOCX) y archivos de texto plano (TXT), además de videos de YouTube.</p>
            </div>
            <div className="border-b pb-4">
              <h4 className="font-bold mb-2">¿Puedo cancelar mi suscripción?</h4>
              <p className="text-muted-foreground">Por supuesto. Puedes cancelar tu suscripción en cualquier momento desde los ajustes de tu cuenta.</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
