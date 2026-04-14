import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

export default function SettingsPage() {
  return (
    <div className="p-6 max-w-4xl mx-auto space-y-8">
      <h1 className="text-3xl font-bold">Configuración</h1>

      <Card>
        <CardHeader>
          <CardTitle>Perfil</CardTitle>
          <CardDescription>Gestiona la información de tu cuenta.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Nombre Completo</Label>
            <Input id="name" placeholder="Tu nombre" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Correo Electrónico</Label>
            <Input id="email" type="email" placeholder="tu@email.com" disabled />
          </div>
        </CardContent>
        <CardFooter>
          <Button>Guardar Cambios</Button>
        </CardFooter>
      </Card>

      <Card className="border-primary/50">
        <CardHeader>
          <CardTitle>Tu Plan Actual</CardTitle>
          <CardDescription>Estás suscrito al plan gratuito.</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-2xl font-bold text-primary">Gratis</p>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li>• 5 resúmenes al mes</li>
            <li>• YouTube hasta 10 min</li>
          </ul>
        </CardContent>
        <CardFooter>
          <Button variant="outline">Mejorar Plan</Button>
        </CardFooter>
      </Card>

      <Card className="border-red-500/50">
        <CardHeader>
          <CardTitle className="text-red-500">Zona de Peligro</CardTitle>
          <CardDescription>Acciones irreversibles para tu cuenta.</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">Eliminar tu cuenta borrará todos tus datos permanentemente.</p>
        </CardContent>
        <CardFooter>
          <Button variant="destructive">Eliminar Cuenta</Button>
        </CardFooter>
      </Card>
    </div>
  )
}