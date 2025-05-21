import { DashboardHeader } from "@/components/dashboard-header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function PerfilPage() {
  return (
    <div className="flex flex-col gap-5">
      <DashboardHeader title="Mi Perfil" description="Gestiona tu información personal y preferencias" />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="md:col-span-1">
          <CardHeader>
            <CardTitle>Información Personal</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-center text-center">
            <Avatar className="h-24 w-24 mb-4">
              <AvatarImage src="/placeholder-user.jpg" alt="Foto de perfil" />
              <AvatarFallback>MP</AvatarFallback>
            </Avatar>
            <h3 className="text-lg font-medium">María Pérez</h3>
            <p className="text-sm text-muted-foreground">DNI: 28.456.789</p>
            <p className="text-sm text-muted-foreground">Paciente desde: 10/01/2022</p>
            <Button variant="outline" size="sm" className="mt-4">
              Cambiar foto
            </Button>
          </CardContent>
        </Card>

        <div className="md:col-span-2">
          <Tabs defaultValue="datos" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-4">
              <TabsTrigger value="datos">Datos Personales</TabsTrigger>
              <TabsTrigger value="medicos">Datos Médicos</TabsTrigger>
              <TabsTrigger value="seguridad">Seguridad</TabsTrigger>
            </TabsList>

            <TabsContent value="datos" className="mt-0">
              <Card>
                <CardHeader>
                  <CardTitle>Datos Personales</CardTitle>
                  <CardDescription>Actualiza tu información de contacto y personal</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="nombre">Nombre</Label>
                      <Input id="nombre" defaultValue="María" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="apellido">Apellido</Label>
                      <Input id="apellido" defaultValue="Pérez" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" defaultValue="maria.perez@email.com" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="telefono">Teléfono</Label>
                      <Input id="telefono" defaultValue="+54 11 5555-5555" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="nacimiento">Fecha de Nacimiento</Label>
                      <Input id="nacimiento" type="date" defaultValue="1985-06-15" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="dni">DNI</Label>
                      <Input id="dni" defaultValue="28456789" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="direccion">Dirección</Label>
                    <Input id="direccion" defaultValue="Av. Rivadavia 1234, CABA" />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button>Guardar Cambios</Button>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="medicos" className="mt-0">
              <Card>
                <CardHeader>
                  <CardTitle>Información Médica</CardTitle>
                  <CardDescription>Información relevante para tu atención médica</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="obra-social">Obra Social</Label>
                      <Select defaultValue="osde">
                        <SelectTrigger>
                          <SelectValue placeholder="Seleccionar obra social" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="osde">OSDE</SelectItem>
                          <SelectItem value="swiss">Swiss Medical</SelectItem>
                          <SelectItem value="galeno">Galeno</SelectItem>
                          <SelectItem value="medife">Medifé</SelectItem>
                          <SelectItem value="otra">Otra</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="num-afiliado">Número de Afiliado</Label>
                      <Input id="num-afiliado" defaultValue="123456789" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="alergias">Alergias</Label>
                    <Textarea
                      id="alergias"
                      placeholder="Ingresa tus alergias conocidas"
                      defaultValue="Penicilina, Mariscos"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="medicacion">Medicación Actual</Label>
                    <Textarea
                      id="medicacion"
                      placeholder="Ingresa tu medicación actual"
                      defaultValue="Levotiroxina 100mg (diario)"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="antecedentes">Antecedentes Médicos</Label>
                    <Textarea
                      id="antecedentes"
                      placeholder="Ingresa tus antecedentes médicos relevantes"
                      defaultValue="Hipotiroidismo (2018)"
                    />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button>Guardar Cambios</Button>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="seguridad" className="mt-0">
              <Card>
                <CardHeader>
                  <CardTitle>Seguridad de la Cuenta</CardTitle>
                  <CardDescription>Actualiza tu contraseña y configura opciones de seguridad</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="current-password">Contraseña Actual</Label>
                    <Input id="current-password" type="password" />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="new-password">Nueva Contraseña</Label>
                      <Input id="new-password" type="password" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="confirm-password">Confirmar Contraseña</Label>
                      <Input id="confirm-password" type="password" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="recovery-email">Email de Recuperación</Label>
                    <Input id="recovery-email" type="email" defaultValue="maria.backup@email.com" />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button>Actualizar Contraseña</Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
