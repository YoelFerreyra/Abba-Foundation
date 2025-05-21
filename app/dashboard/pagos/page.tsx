import { DashboardHeader } from "@/components/dashboard-header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { CreditCard, Download, Filter, Plus, Search } from "lucide-react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function PagosPage() {
  return (
    <div className="flex flex-col gap-5">
      <DashboardHeader title="Gestión de Pagos" description="Administra tus pagos y facturas" />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium">Saldo Actual</CardTitle>
            <CardDescription>Saldo disponible en tu cuenta</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col">
              <span className="text-3xl font-bold">$0.00</span>
              <span className="text-sm text-muted-foreground">Actualizado: 16/05/2025</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium">Próximo Pago</CardTitle>
            <CardDescription>Pago programado</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col">
              <span className="text-3xl font-bold">$2,500.00</span>
              <span className="text-sm text-muted-foreground">Vencimiento: 30/05/2025</span>
              <Button size="sm" className="mt-2 w-full">
                Pagar Ahora
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium">Métodos de Pago</CardTitle>
            <CardDescription>Formas de pago registradas</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <CreditCard className="h-5 w-5 text-teal-500" />
                <div>
                  <p className="text-sm font-medium">Visa terminada en 4567</p>
                  <p className="text-xs text-muted-foreground">Vence: 09/26</p>
                </div>
              </div>
              <Button variant="ghost" size="sm">
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="historial" className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-4">
          <TabsTrigger value="historial">Historial de Pagos</TabsTrigger>
          <TabsTrigger value="facturas">Facturas</TabsTrigger>
        </TabsList>

        <TabsContent value="historial" className="mt-0">
          <Card>
            <CardHeader>
              <CardTitle>Historial de Pagos</CardTitle>
              <CardDescription>Registro de todos tus pagos realizados</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col md:flex-row gap-4 mb-4 justify-between">
                <div className="relative w-full md:w-64">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input type="search" placeholder="Buscar pagos..." className="pl-8" />
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
                    <TableHead>Concepto</TableHead>
                    <TableHead>Método</TableHead>
                    <TableHead className="text-right">Monto</TableHead>
                    <TableHead>Estado</TableHead>
                    <TableHead className="text-right">Acciones</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[
                    {
                      date: "15/05/2025",
                      concept: "Consulta Dr. Martínez",
                      method: "Tarjeta Visa",
                      amount: "$1,500.00",
                      status: "Completado",
                    },
                    {
                      date: "30/04/2025",
                      concept: "Análisis de laboratorio",
                      method: "Transferencia",
                      amount: "$3,200.00",
                      status: "Completado",
                    },
                    {
                      date: "15/04/2025",
                      concept: "Consulta Dra. Gómez",
                      method: "Tarjeta Visa",
                      amount: "$1,500.00",
                      status: "Completado",
                    },
                    {
                      date: "01/04/2025",
                      concept: "Estudio radiológico",
                      method: "Efectivo",
                      amount: "$4,800.00",
                      status: "Completado",
                    },
                    {
                      date: "15/03/2025",
                      concept: "Consulta Dr. Martínez",
                      method: "Tarjeta Visa",
                      amount: "$1,500.00",
                      status: "Completado",
                    },
                  ].map((pago, index) => (
                    <TableRow key={index}>
                      <TableCell>{pago.date}</TableCell>
                      <TableCell>{pago.concept}</TableCell>
                      <TableCell>{pago.method}</TableCell>
                      <TableCell className="text-right">{pago.amount}</TableCell>
                      <TableCell>
                        <Badge variant="outline" className="bg-green-50 text-green-700 hover:bg-green-50">
                          {pago.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="sm">
                          <Download className="h-4 w-4" />
                          <span className="sr-only">Descargar</span>
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="facturas" className="mt-0">
          <Card>
            <CardHeader>
              <CardTitle>Facturas</CardTitle>
              <CardDescription>Todas tus facturas emitidas</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col md:flex-row gap-4 mb-4 justify-between">
                <div className="relative w-full md:w-64">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input type="search" placeholder="Buscar facturas..." className="pl-8" />
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
                    <TableHead>Nº Factura</TableHead>
                    <TableHead>Fecha</TableHead>
                    <TableHead>Concepto</TableHead>
                    <TableHead className="text-right">Monto</TableHead>
                    <TableHead>Estado</TableHead>
                    <TableHead className="text-right">Acciones</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[
                    {
                      number: "F-2025-0123",
                      date: "15/05/2025",
                      concept: "Consulta médica",
                      amount: "$1,500.00",
                      status: "Pagada",
                    },
                    {
                      number: "F-2025-0122",
                      date: "30/04/2025",
                      concept: "Análisis clínicos",
                      amount: "$3,200.00",
                      status: "Pagada",
                    },
                    {
                      number: "F-2025-0121",
                      date: "15/04/2025",
                      concept: "Consulta médica",
                      amount: "$1,500.00",
                      status: "Pagada",
                    },
                    {
                      number: "F-2025-0120",
                      date: "01/04/2025",
                      concept: "Estudio radiológico",
                      amount: "$4,800.00",
                      status: "Pagada",
                    },
                    {
                      number: "F-2025-0119",
                      date: "15/03/2025",
                      concept: "Consulta médica",
                      amount: "$1,500.00",
                      status: "Pagada",
                    },
                  ].map((factura, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">{factura.number}</TableCell>
                      <TableCell>{factura.date}</TableCell>
                      <TableCell>{factura.concept}</TableCell>
                      <TableCell className="text-right">{factura.amount}</TableCell>
                      <TableCell>
                        <Badge variant="outline" className="bg-green-50 text-green-700 hover:bg-green-50">
                          {factura.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end gap-2">
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
      </Tabs>
    </div>
  )
}
