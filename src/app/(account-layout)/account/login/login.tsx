'use client'

import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function LoginButton() {
  const [fullName, setFullName] = useState('' as string)

  const handleClick = async () => {
    const bodyToSend = {
      email: 'buenas@gmail.com',
      password: '$writting an strong password_'
    }

    const response = await fetch('/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(bodyToSend),
    });

    if (response.ok) {
      const getUser = await fetch('/api/auth/profile', { method: 'POST' })
      const user = await getUser.json()
      console.log(user)
      setFullName(user.fullname)
    } else {
      console.log('Login failed');
    }
  }

  const logout = async () => {
    try {
      const res = await fetch('/api/auth/logout', {
        method: 'POST',
      })

      console.log('Logout', res.ok);
      if (res.ok) return setFullName('')
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <>
      <Button onClick={() => handleClick()} type="submit" className="w-full">
        Iniciar sesión {fullName}
      </Button>
    </>
  )
}