import { DashboardHeader } from "@/components/dashboard-header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Download, Filter, Search } from "lucide-react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function HistorialPage() {
  return (
    <div className="flex flex-col gap-5">
      <DashboardHeader title="Historial Médico" description="Consulta tu historial médico completo" />

      <Tabs defaultValue="consultas" className="w-full">
        <TabsList className="grid w-full grid-cols-4 mb-4">
          <TabsTrigger value="consultas">Consultas</TabsTrigger>
          <TabsTrigger value="estudios">Estudios</TabsTrigger>
          <TabsTrigger value="medicamentos">Medicamentos</TabsTrigger>
          <TabsTrigger value="documentos">Documentos</TabsTrigger>
        </TabsList>

        <TabsContent value="consultas" className="mt-0">
          <Card>
            <CardHeader>
              <CardTitle>Historial de Consultas</CardTitle>
              <CardDescription>Registro de todas tus consultas médicas</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col md:flex-row gap-4 mb-4 justify-between">
                <div className="relative w-full md:w-64">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input type="search" placeholder="Buscar consultas..." className="pl-8" />
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex items-center gap-1">
                    <Filter className="h-4 w-4" /> Filtrar
                  </Button>
                  <Button variant="outline" size="sm" className="flex items-center gap-1">
                    <Download className="h-4 w-4" /> Exportar
                  </Button>
                </div>
              </div>

              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Fecha</TableHead>
                    <TableHead>Especialista</TableHead>
                    <TableHead>Especialidad</TableHead>
                    <TableHead>Motivo</TableHead>
                    <TableHead className="text-right">Acciones</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[
                    {
                      date: "15/05/2025",
                      doctor: "Dr. Martínez",
                      specialty: "Clínica Médica",
                      reason: "Control anual",
                    },
                    {
                      date: "30/04/2025",
                      doctor: "Dra. Gómez",
                      specialty: "Endocrinología",
                      reason: "Control de tiroides",
                    },
                    {
                      date: "15/03/2025",
                      doctor: "Dr. Rodríguez",
                      specialty: "Cardiología",
                      reason: "Chequeo cardiovascular",
                    },
                    {
                      date: "01/02/2025",
                      doctor: "Dra. López",
                      specialty: "Oftalmología",
                      reason: "Control de visión",
                    },
                    {
                      date: "15/01/2025",
                      doctor: "Dr. Martínez",
                      specialty: "Clínica Médica",
                      reason: "Gripe",
                    },
                  ].map((consulta, index) => (
                    <TableRow key={index}>
                      <TableCell>{consulta.date}</TableCell>
                      <TableCell>{consulta.doctor}</TableCell>
                      <TableCell>{consulta.specialty}</TableCell>
                      <TableCell>{consulta.reason}</TableCell>
                      <TableCell className="text-right">
                        <Button variant="outline" size="sm">
                          Ver detalles
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="estudios" className="mt-0">
          <Card>
            <CardHeader>
              <CardTitle>Estudios Médicos</CardTitle>
              <CardDescription>Registro de todos tus estudios y análisis</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col md:flex-row gap-4 mb-4 justify-between">
                <div className="relative w-full md:w-64">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input type="search" placeholder="Buscar estudios..." className="pl-8" />
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex items-center gap-1">
                    <Filter className="h-4 w-4" /> Filtrar
                  </Button>
                </div>
              </div>

              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Fecha</TableHead>
                    <TableHead>Tipo de Estudio</TableHead>
                    <TableHead>Solicitado por</TableHead>
                    <TableHead>Estado</TableHead>
                    <TableHead className="text-right">Acciones</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[
                    {
                      date: "10/05/2025",
                      type: "Análisis de sangre",
                      doctor: "Dr. Martínez",
                      status: "Completado",
                    },
                    {
                      date: "25/04/2025",
                      type: "Radiografía de tórax",
                      doctor: "Dr. Rodríguez",
                      status: "Completado",
                    },
                    {
                      date: "15/03/2025",
                      type: "Electrocardiograma",
                      doctor: "Dr. Rodríguez",
                      status: "Completado",
                    },
                    {
                      date: "20/02/2025",
                      type: "Ecografía abdominal",
                      doctor: "Dra. Gómez",
                      status: "Completado",
                    },
                    {
                      date: "05/01/2025",
                      type: "Análisis de orina",
                      doctor: "Dr. Martínez",
                      status: "Completado",
                    },
                  ].map((estudio, index) => (
                    <TableRow key={index}>
                      <TableCell>{estudio.date}</TableCell>
                      <TableCell>{estudio.type}</TableCell>
                      <TableCell>{estudio.doctor}</TableCell>
                      <TableCell>
                        <Badge variant="outline" className="bg-green-50 text-green-700 hover:bg-green-50">
                          {estudio.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end gap-2">
                          <Button variant="outline" size="sm">
                            Ver resultados
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Download className="h-4 w-4" />
                            <span className="sr-only">Descargar</span>
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="medicamentos" className="mt-0">
          <Card>
            <CardHeader>
              <CardTitle>Medicamentos</CardTitle>
              <CardDescription>Historial de medicamentos recetados</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col md:flex-row gap-4 mb-4 justify-between">
                <div className="relative w-full md:w-64">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input type="search" placeholder="Buscar medicamentos..." className="pl-8" />
                </div>
              </div>

              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Medicamento</TableHead>
                    <TableHead>Dosis</TableHead>
                    <TableHead>Fecha Inicio</TableHead>
                    <TableHead>Fecha Fin</TableHead>
                    <TableHead>Recetado por</TableHead>
                    <TableHead>Estado</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[
                    {
                      name: "Levotiroxina",
                      dose: "100mg - 1 comprimido diario",
                      start: "15/01/2023",
                      end: "Continuo",
                      doctor: "Dra. Gómez",
                      status: "Activo",
                    },
                    {
                      name: "Ibuprofeno",
                      dose: "400mg - Cada 8 horas",
                      start: "10/05/2025",
                      end: "17/05/2025",
                      doctor: "Dr. Martínez",
                      status: "Activo",
                    },
                    {
                      name: "Amoxicilina",
                      dose: "500mg - Cada 8 horas",
                      start: "01/04/2025",
                      end: "10/04/2025",
                      doctor: "Dr. Martínez",
                      status: "Finalizado",
                    },
                    {
                      name: "Loratadina",
                      dose: "10mg - 1 comprimido diario",
                      start: "15/03/2025",
                      end: "30/03/2025",
                      doctor: "Dra. López",
                      status: "Finalizado",
                    },
                  ].map((medicamento, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">{medicamento.name}</TableCell>
                      <TableCell>{medicamento.dose}</TableCell>
                      <TableCell>{medicamento.start}</TableCell>
                      <TableCell>{medicamento.end}</TableCell>
                      <TableCell>{medicamento.doctor}</TableCell>
                      <TableCell>
                        <Badge variant={medicamento.status === "Activo" ? "default" : "secondary"}>
                          {medicamento.status}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="documentos" className="mt-0">
          <Card>
            <CardHeader>
              <CardTitle>Documentos Médicos</CardTitle>
              <CardDescription>Documentos y certificados médicos</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col md:flex-row gap-4 mb-4 justify-between">
                <div className="relative w-full md:w-64">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input type="search" placeholder="Buscar documentos..." className="pl-8" />
                </div>
                <Button variant="outline" size="sm" className="flex items-center gap-1">
                  <Filter className="h-4 w-4" /> Filtrar
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  {
                    title: "Certificado médico",
                    date: "15/05/2025",
                    doctor: "Dr. Martínez",
                    type: "PDF",
                  },
                  {
                    title: "Resultados análisis de sangre",
                    date: "10/05/2025",
                    doctor: "Laboratorio Central",
                    type: "PDF",
                  },
                  {
                    title: "Informe radiológico",
                    date: "25/04/2025",
                    doctor: "Dr. Rodríguez",
                    type: "PDF",
                  },
                  {
                    title: "Certificado de vacunación",
                    date: "01/04/2025",
                    doctor: "Centro de Vacunación",
                    type: "PDF",
                  },
                  {
                    title: "Informe cardiológico",
                    date: "15/03/2025",
                    doctor: "Dr. Rodríguez",
                    type: "PDF",
                  },
                  {
                    title: "Receta médica",
                    date: "01/03/2025",
                    doctor: "Dra. Gómez",
                    type: "PDF",
                  },
                ].map((documento, index) => (
                  <Card key={index} className="flex flex-col">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base">{documento.title}</CardTitle>
                      <CardDescription>
                        Fecha: {documento.date} | Emitido por: {documento.doctor}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="flex justify-end pt-0">
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          Ver
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Download className="h-4 w-4" />
                          <span className="sr-only">Descargar</span>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
