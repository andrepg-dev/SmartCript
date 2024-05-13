'use client'

import { Button } from "@/components/ui/button"
import { signIn } from 'next-auth/react'

export default function ButtonNextAuth({ children }: { children: React.ReactNode }) {
  return (
    <Button onClick={() => signIn()} variant="outline" className="w-full">
      {children}
    </Button>
  )
}