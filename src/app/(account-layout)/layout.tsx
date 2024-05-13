import AccountsBanner from "@/components/project/account/banner";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Iniciar sesión',
  description: 'Inicia sesión en tu cuenta. No tienes cuenta? Registrate creando una cuenta. Google o con tu correo electrónico y contraseña.',
};

export default function AccountLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full lg:grid lg:grid-cols-2 min-h-screen flex items-center">

      <div className="flex items-center justify-center w-full min-h-screen h-full overflow-x-hidden">

        <div className="fixed lg:hidden inset-0 pointer-events-none opacity-30 dark:opacity-10 -z-10 overflow-hidden">
          <img
            src="/login.svg"
            alt="Smartcript"
            className="w-full min-w-[105vh] min-h-[120vh] inset-0 absolute pointer-events-none select-none animate-fade"
          />
        </div>

        {children}
      </div>
      <AccountsBanner />
    </div>
  )
}


