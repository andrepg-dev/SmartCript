'use client';

import ButtonNextAuth from "@/components/project/account/login-button";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { formRegisterErrors } from "@/constants/forms-errors";
import { IFormRegisterError } from "@/interfaces/form-error";
import { validationsForm } from "@/services/database/validation";
import { useRouter } from "next/navigation";
import { useState } from "react";
import PasswordInput from "../password-input";
import Link from "next/link";
import { useAppDispatch } from "@/hooks/redux";
import { fetchUser } from "@/components/redux/slice/user-data";

export default function RegisterForm() {
  const router = useRouter()

  const [loading, setLoading] = useState(false)

  const dispatch = useAppDispatch()

  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const [error, setError] = useState<IFormRegisterError>({
    emailInvalid: false,
    emailAlreadyExists: false,
    emailAndPasswordRequired: false,
    passwordInvalid: false,
    passwordContainsEmail: false,
    passwordLengthExceded: false,
  })

  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Loader
    setLoading(true);

    const validate = validationsForm(user.email, password);

    // Resetear los valores antes de validar
    const resetErrValues = Object.keys(error).reduce((acc: any, key: any) => {
      acc[key] = false;
      return acc;
    }, {});

    setError(resetErrValues); // Dar paso a los nuevos errores

    if (validate) {
      setLoading(false);

      return setError((prev) => ({
        ...prev,
        [formRegisterErrors[validate]]: true,
      }))
    }

    const userToCreate = {
      fullName: `${user.firstName} ${user.lastName}`,
      email: user.email,
      password,
      avatar: '/avatars/20.png',
      avatarColor: 'bg-blue-500',
    }

    const response = await fetch("/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userToCreate),
    })

    setLoading(false);

    // User created successfully ✅
    if (response.ok) {
      dispatch(fetchUser());
      // Redirect to dashboard
      router.push('/dashboard');

    } else {
      const data = await response.json()

      return setError((prev) => ({
        ...prev,
        [formRegisterErrors[data.error]]: true,
      }))
    }
  }

  return (
    <form className="grid gap-4 relative" onSubmit={handleSubmit}>
      <div className="grid grid-cols-2 gap-4">
        <div className="grid gap-2">
          <Label htmlFor="first-name">Nombre</Label>
          <Input
            id="first-name"
            placeholder="Max"
            required
            onChange={(e) => setUser({ ...user, firstName: e.target.value })}
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="last-name">Apellido</Label>
          <Input
            id="last-name"
            placeholder="Robinson"
            required
            onChange={(e) => setUser({ ...user, lastName: e.target.value })}
          />
        </div>

      </div>
      <div className="grid gap-2">
        <Label htmlFor="email">Correo</Label>
        <Input
          id="email"
          type="email"
          placeholder="m@ejemplo.com"
          required
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />

        {error.emailAlreadyExists && (
          <span className="text-red-500 text-sm">
            Tu correo ya existe.
            <Link href={'/account/login'} className="underline text-red-400 ml-1">
              Inicia sesión
            </Link>
          </span>
        )}

        {error.emailAndPasswordRequired && (
          <span className="text-red-500 text-sm">El Correo y la contraseña son requeridas.</span>
        )}

        {error.emailInvalid && (
          <span className="text-red-500 text-sm">El correo proporcionado no es valido.</span>
        )}

      </div>
      <div className="grid gap-2 ">
        <Label htmlFor="password">Contraseña</Label>
        <PasswordInput setPassword={setPassword} />

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

      <div>
        <div className="flex items-center space-x-2">
          <Checkbox id="terms" required />
          <Label htmlFor="terms">Aceptar terminos y condiciones</Label>
        </div>
      </div>

      <Button type="submit" className="w-full" disabled={loading}>
        Crear cuenta
      </Button>
      <ButtonNextAuth type="button">
        Registrarse con Google
      </ButtonNextAuth>
    </form>
  )
}