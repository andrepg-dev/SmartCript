import Link from "next/link"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import RegisterFormValue from "@/components/project/account/register/form"

export default function RegisterForm() {

  return (
    <Card className="mx-auto max-w-sm border-none w-[348px] shadow-none bg-transparent">
      <CardHeader className="px-0">
        <CardTitle className="text-3xl font-bold text-center">Registrarse</CardTitle>
        <CardDescription className="text-center text-base">
          Ingresa tus datos para crear una cuenta
        </CardDescription>
      </CardHeader>
      <CardContent className="px-0">
        <RegisterFormValue />
        <div className="mt-4 text-center text-sm">
          Ya tienes una cuenta?{" "}
          <Link href="/account/login" className="underline">
            Iniciar sesión
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}
