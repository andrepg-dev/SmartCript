'use client'
import LoginForm from "@/components/project/account/login/form"
import useUser from "@/hooks/user"
import { Loader } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

export default function LoginPage() {
  const { user } = useUser()
  const router = useRouter()

  useEffect(() => {
    if (user.user?.email) {
      router.push('/dashboard')
    }
  }, [user, router])

  return !user.user?.email ? (
    <div className="flex items-center justify-center py-12">
      <div className="mx-auto grid w-[350px] gap-6">
        <div className="grid gap-2 text-center">
          <h1 className="text-3xl font-bold">Iniciar sesión</h1>
          <p className="text-pretty text-muted-foreground">
            Ingresa tu correo electrónico a continuación para iniciar sesión en tu cuenta
          </p>
        </div>
        <LoginForm />
        <div className="mt-4 text-center text-sm">
          No tienes cuenta?{" "}
          <Link href="/account/register" className="underline">
            Registrarse
          </Link>
        </div>
      </div>
    </div>
  ) : (
    // Componente de carga
    <div className="flex items-center justify-center h-screen">
      <div className="text-center">
        <div className="loader"></div>
        <Loader className="animate-spin" />
      </div>
    </div>
  )
}
