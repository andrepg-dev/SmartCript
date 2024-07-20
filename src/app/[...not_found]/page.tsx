import { Button } from "@/components/ui/button";
import Link from "next/link";
import { IconLocationNotFound } from "../icons/icons";

export default function NotFoundPage() {
  return (
    <main className="flex flex-col gap-2 items-center justify-center h-screen">

      <IconLocationNotFound className="w-24 h-24 fill-primary" />

      <div className="flex flex-col text-center gap-2 mt-2">
        <h2>¡Ups! ¡Página no encontrada!</h2>
        <p className="text-muted-foreground">Parece que la página que estás buscando <br /> no existe o puede que se haya eliminado.</p>
      </div>
      <div className="flex gap-3">
        <Link href={'/dashboard'}>
          <Button variant={'outline'}>Regresar</Button>
        </Link>
        <Link href={'/'}>
          <Button>Regresar al inicio</Button>
        </Link>
      </div>
    </main>
  )
}
