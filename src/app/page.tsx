'use client'

import { Button } from "@/components/ui/button";

export default function Home() {
  const sendEmail = async () => {
    const body = {
      to: 'canvaproparacatu@gmail.com',
      text: 'Teste',
    }

    const res = await fetch('/api/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    const data = await res.json();
    console.log(data);
  }

  return (
    <main className="h-screen w-full">
      <Button onClick={sendEmail}>Enviar email</Button>
    </main>
  )
}
