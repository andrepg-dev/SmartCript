'use client'
import { Button } from "@/components/ui/button";

export default function Home() {
  const sendEmail = async () => {
    const product: Product = {
      id: 'smartcript-plan-mensual', // 'smartcript-plan-anual'
      name: 'Carrito de supermercado inteligente',
      images: ['https://i.imgur.com/EHyR2nP.png'],
      price: 35,
    }

    const res = await fetch('/api/stripe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(product)
    })

    const session = await res.json() as { url: string }
    window.location.href = session.url;
  }

  return (
    <main className="h-screen w-full flex items-center justify-center">
      <Button onClick={sendEmail}>Comprar servicio</Button>
    </main>
  )
}
