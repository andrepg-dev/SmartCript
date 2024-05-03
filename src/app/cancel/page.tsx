import Link from "next/link";

export default function Cancel() {
  return (
    <main className="h-screen w-full flex items-center justify-center font-bold bg-white text-black flex-col gap-4">
      <h1 className="text-4xl">Compra cancelada</h1>
      <Link href={'/'} className="text-blue-500 underline">Volver al inicio</Link>
    </main>
  )
}