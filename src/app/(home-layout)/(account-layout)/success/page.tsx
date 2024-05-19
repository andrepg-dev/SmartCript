import Link from "next/link";

export default function Success() {
  return <main className="flex items-center justify-center h-screen  font-extrabold flex-col gap-4 bg-white text-black">
    <span className="text-7xl">🎊</span>
    <span className="text-4xl"> Gracias por tu compra</span>
    <Link href={'/'} className="text-blue-500 underline">Ir al dashboard</Link>
  </main>
}