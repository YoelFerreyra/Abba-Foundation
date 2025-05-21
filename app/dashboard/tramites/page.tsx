import { DashboardHeader } from "@/components/dashboard-header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { FileText, Clock, CheckCircle, Plus } from "lucide-react"

export default function TramitesPage() {
  return (
    <div className="flex flex-col gap-5">
      <DashboardHeader title="Mis Trámites" description="Gestiona tus trámites médicos y administrativos" />

      <div className="flex justify-between items-center">
        <div className="flex gap-2">
          <Badge variant="outline" className="flex items-center gap-1">
            <Clock className="h-3 w-3" /> Pendientes: 4
          </Badge>
          <Badge variant="outline" className="flex items-center gap-1">
            <CheckCircle className="h-3 w-3" /> Completados: 12
          </Badge>
        </div>
        <Button size="sm" className="flex items-center gap-1">
          <Plus className="h-4 w-4" /> Nuevo Trámite
        </Button>
      </div>

      <Tabs defaultValue="pendientes" className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-4">
          <TabsTrigger value="pendientes">Pendientes</TabsTrigger>
          <TabsTrigger value="en-proceso">En Proceso</TabsTrigger>
          <TabsTrigger value="completados">Completados</TabsTrigger>
        </TabsList>

        <TabsContent value="pendientes" className="mt-0">
          <Card>
            <CardHeader>
              <CardTitle>Trámites Pendientes</CardTitle>
              <CardDescription>Trámites que requieren tu atención</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  {
                    title: "Autorización de estudio radiológico",
                    description: "Requiere aprobación de obra social",
                    date: "Vence: 15/05/2025",
                    priority: "Alta",
                  },
                  {
                    title: "Renovación de receta médica",
                    description: "Medicación crónica",
                    date: "Vence: 20/05/2025",
                    priority: "Media",
                  },
                  {
                    title: "Solicitud de historia clínica",
                    description: "Para consulta con especialista",
                    date: "Vence: 25/05/2025",
                    priority: "Baja",
                  },
                  {
                    title: "Certificado médico",
                    description: "Para presentar en institución educativa",
                    date: "Vence: 18/05/2025",
                    priority: "Media",
                  },
                ].map((tramite, index) => (
                  <div key={index} className="flex items-start gap-4 rounded-md border p-4">
                    <FileText className="h-5 w-5 mt-0.5 text-teal-500" />
                    <div className="flex-1 space-y-1">
                      <div className="flex items-center justify-between">
                        <p className="font-medium">{tramite.title}</p>
                        <Badge
                          variant={
                            tramite.priority === "Alta"
                              ? "destructive"
                              : tramite.priority === "Media"
                                ? "default"
                                : "secondary"
                          }
                        >
                          {tramite.priority}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">{tramite.description}</p>
                      <p className="text-xs text-muted-foreground">{tramite.date}</p>
                      <div className="flex gap-2 pt-2">
                        <Button size="sm" variant="outline">
                          Ver detalles
                        </Button>
                        <Button size="sm">Gestionar</Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="en-proceso" className="mt-0">
          <Card>
            <CardHeader>
              <CardTitle>Trámites En Proceso</CardTitle>
              <CardDescription>Trámites que están siendo procesados</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  {
                    title: "Reembolso de consulta",
                    description: "En revisión por la obra social",
                    date: "Iniciado: 10/05/2025",
                    status: "En revisión",
                  },
                  {
                    title: "Derivación a especialista",
                    description: "Esperando aprobación",
                    date: "Iniciado: 08/05/2025",
                    status: "Esperando",
                  },
                ].map((tramite, index) => (
                  <div key={index} className="flex items-start gap-4 rounded-md border p-4">
                    <Clock className="h-5 w-5 mt-0.5 text-amber-500" />
                    <div className="flex-1 space-y-1">
                      <div className="flex items-center justify-between">
                        <p className="font-medium">{tramite.title}</p>
                        <Badge variant="outline">{tramite.status}</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">{tramite.description}</p>
                      <p className="text-xs text-muted-foreground">{tramite.date}</p>
                      <div className="flex gap-2 pt-2">
                        <Button size="sm" variant="outline">
                          Ver detalles
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="completados" className="mt-0">
          <Card>
            <CardHeader>
              <CardTitle>Trámites Completados</CardTitle>
              <CardDescription>Trámites finalizados</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  {
                    title: "Certificado de vacunación",
                    description: "Emitido para viaje",
                    date: "Completado: 01/05/2025",
                  },
                  {
                    title: "Autorización de cirugía",
                    description: "Aprobada por obra social",
                    date: "Completado: 25/04/2025",
                  },
                ].map((tramite, index) => (
                  <div key={index} className="flex items-start gap-4 rounded-md border p-4">
                    <CheckCircle className="h-5 w-5 mt-0.5 text-green-500" />
                    <div className="flex-1 space-y-1">
                      <p className="font-medium">{tramite.title}</p>
                      <p className="text-sm text-muted-foreground">{tramite.description}</p>
                      <p className="text-xs text-muted-foreground">{tramite.date}</p>
                      <div className="flex gap-2 pt-2">
                        <Button size="sm" variant="outline">
                          Descargar
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
