'use client'

import Link from "next/link"

import ButtonNextAuth from "@/components/project/account/login-button"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { formErrors } from "@/constants/forms-errors"
import { FormError } from "@/interfaces/form-error"
import { cn } from "@/lib/utils"
import { validationsForm } from "@/services/database/validation"
import { useRouter } from "next/navigation"
import { useState } from "react"
import PasswordInput from "../password-input"

export default function LoginForm() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const router = useRouter();
  const [saved, setSaved] = useState({ email: '', password: '' });
  const [loading, setLoading] = useState(false);

  const [error, setError] = useState<FormError>({
    emailAndPasswordRequired: false,
    emailInvalid: false,
    passwordInvalid: false,
    passwordContainsEmail: false,
    passwordLengthExceded: false,
    emailNotFound: false,
    passwordIncorrect: false
  })

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true)

    const validate = validationsForm(email, password);

    if (saved.email === email && error.emailNotFound && saved.password === password) return setLoading(false);
    if (saved.password === password && error.passwordIncorrect && saved.email === email) return setLoading(false);

    const resetErrValues = Object.keys(error).reduce((acc: any, key: any) => {
      acc[key] = false;
      return acc;
    }, {});

    setError(resetErrValues);

    if (validate) {
      setLoading(false)

      return setError((prev) => ({
        ...prev,
        [formErrors[validate]]: true,
      }))
    }

    setSaved({ email, password });
    const response = await fetch("/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })

    setLoading(false)

    if (response.ok) {
      const data = await response.json()
      console.log(data)

      // Redirect to dashboard
      router.push('/dashboard');
    } else {
      const data = await response.json()

      return setError((prev) => ({
        ...prev,
        [formErrors[data.error]]: true,
      }))
    }
  }

  return (
    <form className="grid gap-4" onSubmit={handleSubmit}>
      <div className="grid gap-2">
        <Label htmlFor="email">Correo</Label>
        <Input
          id="email"
          type="email"
          placeholder="m@ejemplo.com"
          required
          className={cn(error.emailAndPasswordRequired && 'border-red-500')}
          onChange={(e) => setEmail(e.target.value)}
        />

        {error.emailAndPasswordRequired && (
          <span className="text-red-500 text-sm">El Correo y la contraseña son requeridos.</span>
        )}

        {error.emailInvalid && (
          <span className="text-red-500 text-sm">El correo proporcionado no es valido.</span>
        )}

        {error.emailNotFound && (
          <span className="text-red-500 text-sm">El correo proporcionado no existe.
            <Link href={'/account/register'} className="underline ml-2 text-red-400">Crear cuenta.</Link>
          </span>
        )}

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
        <PasswordInput setPassword={setPassword} />

        {error.passwordIncorrect && (
          <span className="text-red-500 text-sm">Correo o contraseña incorrecta.</span>
        )}

        {error.passwordInvalid && (
          <span className="text-red-500 text-sm">La contraseña debe tener al menos 8 caracteres.</span>
        )}

        {error.passwordLengthExceded && (
          <span className="text-red-500 text-sm">La contraseña no puede exceder los 255 caracteres.</span>
        )}

        {error.passwordContainsEmail && (
          <span className="text-red-500 text-sm">Por medidas de seguridad tu contraseña no debe de contener el correo electronico.</span>
        )}
      </div>

      <Button type="submit" className="w-full" disabled={loading}>
        Iniciar sesión
      </Button>

      <ButtonNextAuth type={'button'}>
        Entrar con Google
      </ButtonNextAuth>
    </form>
  )
}