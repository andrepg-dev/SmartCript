'use client';

import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const tiers = [
  {
    name: 'Gratis',
    id: 'tier-gratis',
    price: '0',
    description: 'Perfecto para probar las capacidades de SmartCript.',
    features: ['5 resúmenes al mes', 'YouTube hasta 10 min', 'PDF hasta 2MB', 'Soporte comunitario'],
    buttonText: 'Empezar gratis',
    action: () => window.location.href = '/account/login'
  },
  {
    name: 'Estudiante',
    id: 'tier-estudiante',
    price: '9',
    description: 'Para estudiantes que necesitan un extra en sus estudios.',
    features: ['Resúmenes ilimitados', 'YouTube hasta 60 min', 'PDF hasta 10MB', 'Chat con IA', 'Soporte prioritario'],
    buttonText: 'Comprar ahora',
    action: async () => {
        const res = await fetch('/api/stripe', {
            method: 'POST',
            body: JSON.stringify({
                id: 'price_estudiante',
                name: 'Plan Estudiante',
                images: ['https://smartcript.com/student.png'],
                price: 9
            })
        })
        const data = await res.json()
        if (data.url) window.location.href = data.url
    }
  },
  {
    name: 'Pro',
    id: 'tier-pro',
    price: '19',
    description: 'La herramienta definitiva para profesionales y académicos.',
    features: ['Todo lo del plan Estudiante', 'YouTube sin límite', 'PDF hasta 50MB', 'Transcripciones descargables', 'API Access'],
    buttonText: 'Comprar ahora',
    action: async () => {
        const res = await fetch('/api/stripe', {
            method: 'POST',
            body: JSON.stringify({
                id: 'price_pro',
                name: 'Plan Pro',
                images: ['https://smartcript.com/pro.png'],
                price: 19
            })
        })
        const data = await res.json()
        if (data.url) window.location.href = data.url
    }
  },
]

export default function PricingPage() {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-base font-semibold leading-7 text-primary">Precios</h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Elige el plan que mejor se adapte a ti
          </p>
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-muted-foreground">
          Sin compromisos a largo plazo. Cancela en cualquier momento.
        </p>
        <div className="isolate mx-auto mt-16 grid max-w-md grid-cols-1 gap-y-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8">
          {tiers.map((tier) => (
            <div
              key={tier.id}
              className={`flex flex-col justify-between rounded-3xl p-8 ring-1 ring-border xl:p-10 ${tier.id === 'tier-estudiante' ? 'bg-primary/5 ring-primary' : ''}`}
            >
              <div>
                <div className="flex items-center justify-between gap-x-4">
                  <h3 id={tier.id} className="text-lg font-semibold leading-8">
                    {tier.name}
                  </h3>
                </div>
                <p className="mt-4 text-sm leading-6 text-muted-foreground">{tier.description}</p>
                <p className="mt-6 flex items-baseline gap-x-1">
                  <span className="text-4xl font-bold tracking-tight">${tier.price}</span>
                  <span className="text-sm font-semibold leading-6">/mes</span>
                </p>
                <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-muted-foreground">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex gap-x-3">
                      <Check className="h-6 w-5 flex-none text-primary" aria-hidden="true" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <Button
                onClick={tier.action}
                variant={tier.id === 'tier-estudiante' ? 'default' : 'outline'}
                className="mt-8"
              >
                {tier.buttonText}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
