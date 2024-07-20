import { ThemeProvider } from '@/components/theme/theme-provider';
import { TooltipProvider } from '@/components/ui/tooltip';
import { GeistSans } from 'geist/font/sans';

import NextAuthProvider from '@/components/project/account/next-auth/session-provider';
import type { Metadata } from 'next';

import './globals.css';
import ReduxProvider from '@/components/redux/redux-provider';

import { Toaster } from "@/components/ui/toaster"

export const metadata: Metadata = {
  title: 'SmartCript - Inicia sesión o regístrate',
  description: 'Regístrate en SmartCript para acceder a una herramienta eficiente y sin costo que te permite resumir documentos en formatos PDF, Word, TXT, así como vídeos, de manera rápida y sencilla.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${GeistSans.className}`}>
        <NextAuthProvider>
          <TooltipProvider>
            <ThemeProvider
              attribute="class"
              enableSystem
            >
              <Toaster />
              <ReduxProvider>
                {children}
              </ReduxProvider>
            </ThemeProvider>
          </TooltipProvider>
        </NextAuthProvider>
      </body>
    </html>
  );
}
