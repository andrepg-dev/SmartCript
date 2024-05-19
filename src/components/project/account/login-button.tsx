'use client'

import { Button } from "@/components/ui/button"
import { signIn } from 'next-auth/react'

export default function ButtonNextAuth({ children, type }: { children: React.ReactNode, type: 'button' | 'submit'}) {
  return (
    <Button type={type} onClick={() => signIn()} variant="outline" className="w-full">
      {children}
    </Button>
  )
}