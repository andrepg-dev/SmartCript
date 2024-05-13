import { Button } from "@/components/ui/button";
import Link from "next/link";
import { IconLocationNotFound } from "../icons/icons";

export default function NotFoundPage() {
  return (
    <main className="flex flex-col gap-2 items-center justify-center h-[80vh]">

      <IconLocationNotFound className="w-24 h-24 fill-primary" />

      <p>No se pudo encontrar esta página.</p>
      <Link href={'/'}>
        <Button>Regresar al inicio</Button>
      </Link>
    </main>
  )
}
