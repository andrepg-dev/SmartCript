'use client'

import { Input } from "@/components/ui/input";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

export default function PasswordInput({ setPassword }: { setPassword: (password: string) => void }) {
  const [inputType, setInputType] = useState<"password" | "text">("password");

  const handleShowPassword = () => {
    setInputType(inputType === "password" ? "text" : "password");
  };

  return (
    <div className="flex items-center gap-2 relative">
      <Input
        onChange={(e) => setPassword(e.target.value)}
        type={inputType}
        required
        className="pr-[2.7rem]"
      />

      <button
        onClick={() => handleShowPassword()}
        type="button"
        className="absolute right-0 items-center justify-center h-full pr-2"
      >
        {inputType === "password" ? (
          <div className="transition hover:bg-accent aspect-square flex items-center justify-center rounded-full h-[85%]">
            <EyeOff className="size-5" />
          </div>
        ) : (
          <div className="transition hover:bg-accent aspect-square flex items-center justify-center rounded-full h-[85%]">
            <Eye className="size-5" />
          </div>
        )}
      </button>
    </div>
  )
}