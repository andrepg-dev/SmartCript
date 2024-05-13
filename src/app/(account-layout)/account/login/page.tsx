import Link from "next/link"

import ButtonNextAuth from "@/components/project/account/login-button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import LoginButton from "./login"

export default function LoginPage() {
  return (
    <div className="flex items-center justify-center py-12">
      <div className="mx-auto grid w-[350px] gap-6">
        <div className="grid gap-2 text-center">
          <h1 className="text-3xl font-bold">Iniciar sesión</h1>
          <p className="text-pretty text-muted-foreground">
            Ingresa tu correo electrónico a continuación para iniciar sesión en tu cuenta
          </p>
        </div>
        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email">Correo</Label>
            <Input
              id="email"
              type="email"
              placeholder="m@ejemplo.com"
              required
            />
          </div>
          <div className="grid gap-2">
            <div className="flex items-center">
              <Label htmlFor="password">Contraseña</Label>
              <Link
                href="/forgot-password"
                className="ml-auto inline-block text-sm underline"
              >
                Olvidaste tu contraseña?
              </Link>
            </div>
            <Input id="password" type="password" required />
          </div>
          <LoginButton />
          <ButtonNextAuth>
            Entrar con Google
          </ButtonNextAuth>
        </div>
        <div className="mt-4 text-center text-sm">
          No tienes cuenta?{" "}
          <Link href="/account/register" className="underline">
            Registrarse
          </Link>
        </div>
      </div>
    </div>
  )
}