import Link from "next/link"
import LoginForm from "@/components/project/account/login/form"

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
        <LoginForm />
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